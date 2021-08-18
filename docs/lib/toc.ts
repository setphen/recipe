import util from 'mdast-util-toc';

const extractToc = (options: any, toc: any) => {
  const settings = options || {};
  const depth = settings.maxDepth || 6;
  const tight = settings.tight;
  const skip = settings.skip;

  function transformer(node: any) {
    const fullToc = util(node, {
      maxDepth: depth,
      tight,
      skip,
    }).map;

    /**
     * Go from complex structure that the mdx plugin renders from to a simpler one
     * it starts as an array because we start with the h2's not h1.
     * @example [{id, textContent, children: [{id, textContent, children: ...}, ...]}, ...]
     */
    function treeConverter(tree: any) {
      if (tree.type === 'list') {
        return tree.children
          .map((treeNode: any) => treeConverter(treeNode))
          .filter((value: any) => Boolean(value));
      }

      if (tree.type === 'listItem') {
        const newTree: any = {};
        const [name, nodes] = tree.children;
        newTree.children = [];
        if (nodes) newTree.children = treeConverter(nodes);

        const child = name.children[0];

        if (child.type === 'link') {
          newTree.id = child.url.split('#').pop();
          newTree.textContent = child.children[0].value;
          return newTree;
        }
      }

      return null;
    }

    const converted = treeConverter(fullToc || []);

    toc.push(...converted);

    return node;
  }

  return transformer;
};

export const tocGenerator = () => {
  const toc: any[] = [];

  const plugin = (options: any) => extractToc(options, toc);

  return {plugin, toc};
};
