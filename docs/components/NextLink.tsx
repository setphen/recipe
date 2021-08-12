import Link from 'next/link';

export default function NextLink({to: url, children, activeClassName: _ignore, ...props}: any) {
  return (
    <Link href={url}>
      <a {...props}>{children}</a>
    </Link>
  );
}
