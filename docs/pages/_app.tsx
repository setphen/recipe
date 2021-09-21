import {AppProps} from 'next/app';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import TagManager from 'react-gtm-module';
import cssVars from 'css-vars-ponyfill';

const tagManagerArgs = {gtmId: 'GTM-TJRFGNR'};

const ThemeState = createContext(false);
const ThemeToggle = createContext<Dispatch<SetStateAction<boolean>>>(() => {});

// init css vars polyfill
cssVars({watch: true, exclude: 'body style'});

function ThemeProvider(props: any) {
  const [isMarketplaceThemeSelected, showMarketplaceTheme] = useState(false);

  return (
    <ThemeState.Provider value={isMarketplaceThemeSelected}>
      <ThemeToggle.Provider value={showMarketplaceTheme}>{props.children}</ThemeToggle.Provider>
    </ThemeState.Provider>
  );
}

export function useMarketplaceTheme(): boolean {
  return useContext(ThemeState);
}

export function useToggleMarketplaceTheme(): () => void {
  const showMarketplaceTheme = useContext(ThemeToggle);
  return useCallback(() => showMarketplaceTheme(selected => !selected), [showMarketplaceTheme]);
}

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
