import theme from './EzBaseFontSizeCompatibility.theme.config';

const styles = theme.global({':root': {'--recipe-base-font-size': '14px'}});

const EzBaseFontSizeCompatibility = () => {
  styles();
  return null;
};

export default EzBaseFontSizeCompatibility;
