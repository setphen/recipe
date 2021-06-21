/* eslint-disable filenames/match-exported */
import React, {createContext, useContext} from 'react';

const Context = createContext(null);

const Style = ({children, ruleset}) => {
  const context = useContext(Context);

  if (context) return children;

  return (
    <Context.Provider value>
      {children}
      <style data-s-ssr dangerouslySetInnerHTML={{__html: ruleset?.toString() || ''}} />
    </Context.Provider>
  );
};

export default Style;
