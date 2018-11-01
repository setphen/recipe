import React from 'react';
import {css} from 'react-emotion';
import {standard} from '../../../recipe/src/themes';

export default props => {
  return (
    <table>
      <thead>
        <tr>
          <td>Variable</td>
          <td>Weight</td>
          <td>Example</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(standard.fontWeights).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{standard.fontWeights[key]}</td>
              <td
                className={css`
                  font-weight: ${standard.fontWeights[key]};
                `}
              >
                Order catering now
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
