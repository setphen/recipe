import {EzLayout, EzHeading, EzBlankState, EzCardSection} from '@ezcater/recipe';
import PreviewCard from './PreviewCard';
import emptySearchImage from '../public/images/empty-search.svg';

export default function ComponentGrid({frontmatters}: any) {
  const componentFrontmatters = frontmatters.filter((c: any) => !c.slug?.includes('cookbook'));

  const categorized = new Map<string, any[]>([
    ['Layout', []],
    ['Navigation', []],
    ['Data', []],
    ['Inputs', []],
    ['Overlays', []],
    ['Feedback', []],
    ['Marketing', []],
    ['Typography', []],
  ]);

  componentFrontmatters.forEach((frontmatter: any) => {
    const {category, tags, title, name} = frontmatter;
    const searchTerms = [''];
    const tagsList = tags || [];

    // ignore uncategorized components
    if (!category) return;

    const texts = [...tagsList, category, title, name].map(text => text.toLowerCase());

    const matchesSearch = texts.some(text => searchTerms.some(term => text.startsWith(term)));

    if (!matchesSearch) return;

    if (!categorized.has(category)) categorized.set(category, []);

    categorized.get(category)?.push(frontmatter);
  });

  type Entry = [string, any[]];
  const entries = Array.from(categorized, ([cat, comps]) => [cat, comps] as Entry);
  const filteredEntries = entries.filter(([, comps]) => comps.length > 0);

  return (
    <>
      {filteredEntries.length === 0 ? (
        <EzCardSection>
          <EzBlankState
            imageSrc={emptySearchImage.src}
            title="We didn't find any matching component search results"
            message="Try some other search terms"
          />
        </EzCardSection>
      ) : (
        <>
          {filteredEntries.map(([category, components]) => (
            <EzCardSection key={category}>
              <EzLayout layout={{base: 'stack', large: 'split'}} alignY="top">
                <EzHeading size="3" style={{width: '180px', flexShrink: 0}}>
                  {category}
                </EzHeading>

                <EzLayout
                  layout="tile"
                  columns={{base: 2, medium: 3, large: 4}}
                  style={{flexGrow: 1}}
                >
                  {components.map(component => (
                    <PreviewCard
                      key={component.slug}
                      subtitle={`${component.exampleCount} examples`}
                      {...component}
                    />
                  ))}
                </EzLayout>
              </EzLayout>
            </EzCardSection>
          ))}
        </>
      )}
    </>
  );
}
