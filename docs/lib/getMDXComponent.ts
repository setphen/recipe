import React from 'react';
import ReactDOM from 'react-dom';
import JSXRuntime from 'react/jsx-runtime.js';

export function getMDXComponent(code: string, globals: any) {
  const scope = {
    React,
    ReactDOM,
    _jsx_runtime: JSXRuntime,
    ...globals,
  };
  let result: any = function Empty() {
    return null;
  };

  try {
    // eslint-disable-next-line
    const fn = new Function(...Object.keys(scope), code);
    result = fn(...Object.values(scope));
  } catch (error) {
    // do nothing
  }

  return result;
}
