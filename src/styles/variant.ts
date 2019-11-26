const variant = (propName: string, styles: Styles) => (props: any): string => {
  if (!(propName in props)) return '';

  const styleName = props[propName] as string;

  if (!styleName) return '';

  if (!(styleName in styles)) return '';

  return styles[styleName];
};

interface Styles {
  [key: string]: string;
}

export default variant;
