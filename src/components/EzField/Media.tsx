import React, {useRef, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {CacheProvider} from '@emotion/core';
// eslint-disable-next-line
import createCache from '@emotion/cache';
import {EzGlobalStyles} from '../index';

const sizes = {
  small: {width: 750, height: 1334}, // phone e.g. iphone 6
  medium: {width: 1280, height: 800}, // tablet e.g. amazon fire hd
  large: {width: 1920, height: 1080}, // laptop e.g. dell xps 13
};

const IFrameContent = ({iframeEl, children}) => {
  const cache = useRef(
    createCache({container: iframeEl.ownerDocument.head, key: 'frame', prefix: false})
  );

  // Remove any injected stylesheets from the page when the component is unmounted
  React.useEffect(() => () => cache.current.sheet.flush());

  return (
    <>{createPortal(<CacheProvider value={cache.current}>{children}</CacheProvider>, iframeEl)}</>
  );
};

// smaller output than encodeURIComponent...
const encodeHead = head =>
  head
    // strip newlines and whitespace
    .replace(/\n|\s\s/g, '')
    // strip whitespace between rules
    .replace(/:\s/g, ':')
    // strip comments
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*/g, '')
    // replace hex color symbol
    .replace(/#/g, '%23')
    // replace url contents
    .replace(/url\([^)]*\)|\[[^\]]*\]/g, old => encodeURIComponent(old));

const toDataUri = ({head, body}) =>
  `data:text/html,<html>${encodeHead(head)}<body>${encodeURIComponent(body)}</body></html>`;

const Media = ({size, children}) => {
  const iframeEl = useRef(null);
  const linkRef = useRef(null);
  const [src, setSrc] = useState(undefined);

  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(iframeEl.current);
  }, [container]);

  useEffect(() => {
    if (!linkRef.current) return;
    setSrc(
      toDataUri({
        head: linkRef.current.ownerDocument.head.outerHTML,
        body: iframeEl.current.innerHTML,
      })
    );
  }, [container]);

  return (
    <iframe
      title={size}
      frameBorder="0"
      allowFullScreen
      ref={iframeEl}
      style={{border: 'none', margin: 0, ...sizes[size]}}
      scrolling="no"
      src={src}
    >
      {iframeEl.current && !src && (
        <IFrameContent iframeEl={iframeEl.current}>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&display=swap"
            rel="stylesheet"
            ref={linkRef}
          />
          <EzGlobalStyles />
          {children}
        </IFrameContent>
      )}
    </iframe>
  );
};

export default Media;