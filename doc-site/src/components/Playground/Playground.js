import React from 'react';
import Theme, {components} from 'docz-theme-default';
import styled from '@emotion/styled';
import DocFrame from './Frame';

const {playground: DoczPlayground} = components;

const Container = styled.div`
  div[class^='Playground__Preview'] {
    overflow: scroll;
  }

  div[class^='Playground__StyledPreview'] {
    padding: 0;
    margin-bottom: -3px;
    overflow: hidden;
    height: 100%;
  }

  div[class^='ActionsBar'] button {
    padding: 3px 10px;
    border-left: 1px solid #ced4de;
  }

  div[class^='Playground__Pre'] {
    margin: 0;
  }

  iframe {
    min-height: 100%;
  }

  /* when the playground is popped up, we don't want the playground to have a min-height */
  [class^='Playground__Overlay'] > :first-child {
    .EzAppLayout & iframe,
    .EzNavigation & iframe {
      min-height: 350px;
    }
  }
`;

const Playground = ({code, scope}) => (
  <Container>
    <Theme>
      <DoczPlayground code={code} scope={{...scope}} wrapper={DocFrame} />
    </Theme>
  </Container>
);

export default Playground;
