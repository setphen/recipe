import React from 'React';
import {MDXTag} from '@mdx-js/tag';

export default ({scope = {React, MDXTag}, components = {}, children, ...props}) => {
  const fullScope = {
    components,
    props,
    ...scope,
  };

  const keys = Object.keys(fullScope);
  const values = keys.map(key => fullScope[key]);
  const fn = new Function('_fn', ...keys, `${children}`);

  return React.createElement(fn({}, ...values), {components, ...props});
};
