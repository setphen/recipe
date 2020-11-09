/** @jsx jsx */
import {Interpolation, jsx} from '@emotion/core';
import React from 'react';
import {useUniqueId} from '../../utils/hooks';
import './vars.css';

const nextPrevStyle: Interpolation = {
  border: 'none',
  background: 'var(--recipe-carousel-button-background)',
  color: 'var(--recipe-carousel-button-color)',
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: 'var(--recipe-carousel-button-width)',
  ':hover': {
    background: 'var(--recipe-carousel-button-background-hover)',
  },
};

const nextStyle: Interpolation = {...nextPrevStyle, right: 0};
const prevStyle: Interpolation = {...nextPrevStyle, left: 0};

const svgProps: React.ComponentProps<'svg'> = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '42',
  height: '42',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const nextPrevClick = (
  pageOffset: number,
  scrollerRef: React.MutableRefObject<HTMLUListElement>
) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  e.stopPropagation();
  const {scrollLeft, scrollWidth, offsetWidth} = scrollerRef.current;
  const numberOfPages = Math.round(scrollWidth / offsetWidth);
  const currentPageIndex = Math.round((scrollLeft / scrollWidth) * numberOfPages);
  const nextPageIndex = currentPageIndex + pageOffset;

  scrollerRef.current.scrollTo({
    left: Math.floor(scrollWidth * (nextPageIndex / numberOfPages)),
    behavior: 'smooth',
  });
};

/**
 * Carousels allow users to browse through a set of items,
 * to find items that may be of interest to them.
 */
const EzCarousel = ({children, slidesPerPage = 1}) => {
  const id = useUniqueId();
  const scroller = React.useRef<HTMLUListElement>();
  return (
    <section aria-roledescription="carousel" css={{position: 'relative'}}>
      <ul
        id={id}
        // assistive technology users are informed about changes to the region
        // at the next available opportunity.
        // This causes screen readers to automatically announce the content of
        // slides when the next and previous slide buttons are activated.
        aria-live="polite"
        css={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          '> *': {
            flexBasis: `${100 / slidesPerPage}%`,
            flexShrink: 0,
            [`:nth-of-type(0)`]: {scrollSnapAlign: 'start'},
            [`:nth-of-type(${slidesPerPage}n + 1)`]: {scrollSnapAlign: 'start'},
          },

          // reset list styles
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        ref={scroller}
      >
        {React.Children.map(children, (child, index) => (
          <li key={child.key || index}>{child}</li>
        ))}
      </ul>
      <div>
        <button
          type="button"
          aria-controls={id}
          aria-label="Previous Page"
          css={prevStyle}
          onClick={nextPrevClick(-1, scroller)}
        >
          <svg {...svgProps}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          aria-controls={id}
          aria-label="Next Page"
          css={nextStyle}
          onClick={nextPrevClick(1, scroller)}
        >
          <svg {...svgProps}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

/**
 * @component
 */
export default EzCarousel;