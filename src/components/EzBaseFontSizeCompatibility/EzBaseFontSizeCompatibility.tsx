import React from 'react';
import Style from '../../snitches';
import theme from './EzBaseFontSizeCompatibility.theme.config';

const styles = theme.global({':root': {'--recipe-base-font-size': '14px'}});

const EzBaseFontSizeCompatibility = () => {
  styles();
  return <Style ruleset={theme} />;
};

export default EzBaseFontSizeCompatibility;
