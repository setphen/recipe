import React, {useState} from 'react';
import * as buble from 'buble/dist/buble-browser-deps.umd.js';
import {EzSegmentedControl, EzLayout, EzLink, EzWell} from '@ezcater/recipe';
import {withPrefix} from 'gatsby';
import {createUrl} from 'playroom/utils';
import Code from '../Code';

const codeIcon = (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref="#code" />
  </svg>
);

const previewIcon = (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref="#preview" />
  </svg>
);

const playIcon = (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref="#play" />
  </svg>
);

const opts = {
  objectAssign: '_poly.assign',
  transforms: {
    dangerousForOf: true,
    dangerousTaggedTemplateString: true,
  },
};

const poly = {
  assign: function assign(target, _varArgs) {
    'use strict';
    if (target === null || target === undefined) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource !== null && nextSource !== undefined) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  },
};

const evalCode = (code, scope) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map(key => scope[key]);
  const res = new Function('_poly', 'React', ...scopeKeys, code);
  return res(poly, React, ...scopeValues);
};

class ErrorBoundary extends React.Component {
  state = {hasError: false};

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const createPlayroomLink = code => {
  if (!code) return null;

  /* make the stateful code work in the playground with IIFE
    see: https://github.com/seek-oss/playroom/issues/66
    and trim the last semicolon in the code string,
    or else it throws a cross-origin error in playroom
  */
  const statefulPlayroomCode = `{(${code.replace(/;\s*$/, '')})()}`;
  const playroomCode = code.startsWith('(') ? statefulPlayroomCode : code;

  const baseUrl = withPrefix('/playroom/');
  return createUrl({baseUrl, code: playroomCode, paramType: 'search'});
};

const TextWithIcon = ({children}) => (
  // setting this css variable is cheating. Don't do this at home kids.
  <EzLayout layout="cluster" alignX="center" style={{'--space-layout-gap': '4px'}}>
    {children}
  </EzLayout>
);

export const Eval = ({code = '', scope = {}}) => {
  // NOTE: Remove trailing semicolon to get an actual expression.
  const codeTrimmed = code.trim().replace(/;$/, '');
  const transformed = buble.transform(`return (${codeTrimmed})`, opts).code.trim();
  const result = evalCode(transformed, scope);
  return typeof result === 'function' ? React.createElement(result, null) : result;
};

const getUniqueId = (() => {
  let index = 1;
  return () => `control__${index++}`;
})();

const useUniqueId = () => {
  const [id] = useState(getUniqueId());
  return id;
};

export default ({code, scope, language}) => {
  const [active, setActive] = useState('preview');

  return (
    <div style={{marginTop: 32, marginBottom: 64}}>
      <EzLayout layout="stack">
        <EzLayout layout="right" columns={5}>
          <EzSegmentedControl
            name={`name-${useUniqueId()}`}
            label="Code example"
            labelPosition="hidden"
            options={[
              {label: <TextWithIcon>{previewIcon} Preview</TextWithIcon>, value: 'preview'},
              {label: <TextWithIcon>{codeIcon} Code</TextWithIcon>, value: 'code'},
            ]}
            active={active}
            onChange={value => setActive(value)}
          />
          <EzLink target="_blank" href={createPlayroomLink(code)}>
            <TextWithIcon>{playIcon} Playroom</TextWithIcon>
          </EzLink>
        </EzLayout>
        <EzWell>
          {active === 'preview' && (
            <ErrorBoundary>
              <Eval code={code} scope={scope} />
            </ErrorBoundary>
          )}
          {active === 'code' && <Code code={code} language={language} />}
        </EzWell>
      </EzLayout>
    </div>
  );
};
