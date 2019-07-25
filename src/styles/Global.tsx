import React, {useRef, useState, useLayoutEffect} from 'react';
import {createPortal} from 'react-dom';

export default function Global({styles}) {
  const ref = useRef(null);
  const [container, setContainer] = useState(null);

  // use layout effect here to ensure styles will be flushed synchronously, before the browser has a chance to paint.
  useLayoutEffect(() => {
    const el = ref.current;
    const head = el.ownerDocument.head;
    setContainer(head);
  }, []);

  return (
    <div ref={ref}>
      {container &&
        createPortal(
          <style
            {...{
              dangerouslySetInnerHTML: {__html: styles},
            }}
          />,
          container
        )}
    </div>
  );
}
