import {EzCard, EzContent, EzHeading, EzLink} from '@ezcater/recipe';
import {useEffect, useCallback} from 'react';
import NextLink from './NextLink';
import styles from '../styles/QuickNav.module.css';

// Files adapted from https://github.com/adobe/react-spectrum/blob/415888d27f27c6af844fc1b325a39612f15775be/packages/dev/docs/src/attachToToC.js
const useHighlightCurrentLink = () => {
  const headers: any[] = [];

  const updateToc = useCallback(() => {
    requestAnimationFrame(() => {
      headers.some((header: any) => {
        if (
          header.header?.offsetTop + header.header?.getBoundingClientRect().height >
          document.documentElement.scrollTop
        ) {
          const currentSelection = document.querySelectorAll(`#toc .${styles.isSelected}`);
          if (currentSelection) {
            currentSelection.forEach(node => {
              node.classList.remove(styles.isSelected);
              const link = node.querySelector('[aria-current]');
              if (link) link.removeAttribute('aria-current');
            });
          }
          header.link.classList.add(styles.isSelected);
          header.link.setAttribute('aria-current', 'location');
          return true;
        }
        return false;
      });
    });
  }, [headers]);

  useEffect(() => {
    const tocLinks = document.querySelectorAll('#toc a') as NodeListOf<HTMLAnchorElement>;

    Array.from(tocLinks).forEach(link => {
      const headerId = link.href.split('#').pop() as string;
      const header = document.getElementById(headerId);
      headers.push({link, header});
    });

    updateToc();

    document.addEventListener('scroll', updateToc);
    return () => document.removeEventListener('scroll', updateToc);
  }, [headers, updateToc]);
};

export function QuickNav({toc}: any) {
  useHighlightCurrentLink();
  return (
    <nav aria-labelledby="tableOfContents" id="toc">
      <EzCard style={{maxHeight: '70vh', overflow: 'auto'}}>
        <EzContent>
          <EzHeading id="tableOfContents" size="3">
            Contents
          </EzHeading>
          <SideNav node={toc} />
        </EzContent>
      </EzCard>
    </nav>
  );
}

function SideNav(props: any) {
  const {node} = props;
  if (!node.children) {
    return (
      <ul className={styles.multiLevel}>
        {node.map((child: any) => (
          <SideNav key={child.id} node={child} />
        ))}
      </ul>
    );
  }
  if (node.children.length > 0) {
    return (
      <li className={styles.item}>
        <EzLink use="secondary">
          <NextLink to={`#${node.id}`} id={`toc-${node.id}-heading`}>
            {node.textContent}
          </NextLink>
        </EzLink>
        <ul aria-labelledby={`toc-${node.id}-heading`} className={styles.multiLevel}>
          {node.children.map((child: any) => (
            <SideNav key={child.id} node={child} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className={styles.item}>
      <EzLink use="secondary">
        <NextLink to={`#${node.id}`}>{node.textContent}</NextLink>
      </EzLink>
    </li>
  );
}
