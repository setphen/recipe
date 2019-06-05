import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import styled from '@emotion/styled';
import {EzGlobalStyles} from '@ezcater/recipe';

const Wrapper = styled.div`
  margin: ${props => props.margin} auto;
  width: calc(100% - 40px);
  min-width: fit-content;
`;

const IFramePlayground = props => {
  const iframeEl = useRef(null);
  const [container, setContainer] = useState(null);
  const playgroundRef = useRef(null);
  const [margin, setMargin] = useState('20px');

  useEffect(() => {
    const iframe = iframeEl.current;
    const contentDocument = iframe.contentDocument;
    setContainer(contentDocument);
  }, []);

  useEffect(() => {
    const iframe = iframeEl.current;
    const contentDocument = iframe.contentDocument;

    const resizeBasedOnContent = () => {
      iframe.style.height = 0;
      iframe.style.height = `${contentDocument.body.scrollHeight}px`;
      if (playgroundRef.current) setMargin(getComputedStyle(playgroundRef.current).marginLeft);
    };

    iframe.contentWindow.onmousedown = resizeBasedOnContent;
    iframe.contentWindow.onclick = resizeBasedOnContent;
    iframe.contentWindow.onfocus = resizeBasedOnContent;
    iframe.contentWindow.onkeydown = resizeBasedOnContent;

    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(resizeBasedOnContent);
      resizeObserver.observe(contentDocument.querySelector('body'));
    }
  });

  const createStylesCache = useCallback(() => createCache({container: container.head}), [
    container,
  ]);

  return (
    <iframe
      frameBorder="0"
      allowFullScreen={true}
      ref={iframeEl}
      style={{border: 'none', margin: 0, width: '100%'}}
      scrolling="no"
    >
      {container &&
        createPortal(
          <CacheProvider value={createStylesCache()}>
            <Wrapper ref={playgroundRef} margin={margin}>
              <link
                href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
                rel="stylesheet"
              />
              <EzGlobalStyles />
              {props.children}
            </Wrapper>
          </CacheProvider>,
          container.body
        )}
    </iframe>
  );
};

export default IFramePlayground;
