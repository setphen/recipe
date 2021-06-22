/* eslint-disable filenames/match-exported */
import React, {createContext, useContext} from 'react';
// import ReactDOM from 'react-dom';

const Context = createContext(null);

const isNodeEnvironment = (): boolean => {
  // https://nodejs.org/api/process.html#process_process_release
  return typeof process !== 'undefined' && process?.release?.name === 'node';
};

const Tag = ({ruleset}) => <style dangerouslySetInnerHTML={{__html: ruleset?.toString() || ''}} />;

const Style = ({children = null, ruleset}: any) => {
  const context = useContext(Context);

  if (context || !isNodeEnvironment()) return children || null;

  return (
    <Context.Provider value>
      {children}
      <Tag ruleset={ruleset} />
    </Context.Provider>
  );
};

export default Style;
