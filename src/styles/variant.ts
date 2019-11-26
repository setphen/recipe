const variant = (propName: string, styles: Styles) => (props: any): string => {
  return styles[props[propName]] || '';
};

interface Styles {
  [key: string]: string;
}

export default variant;
