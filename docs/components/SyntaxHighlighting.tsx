import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import 'prismjs/themes/prism.css';
import styles from '../styles/SyntaxHighlighting.module.css';

const SyntaxHighlighting = ({code, language}: any) => (
  <Highlight {...defaultProps} code={code} language={language} theme={undefined}>
    {({className, style, tokens, getLineProps, getTokenProps}) => (
      <pre className={`${className} ${styles.pre}`} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({line, key: i})}>
            {line.map((token, index) => (
              <span key={index} {...getTokenProps({token, index})} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default SyntaxHighlighting;
