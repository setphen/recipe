import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import {bundleMDX} from 'mdx-bundler';
import remarkSlug from 'remark-slug';
import remarkGfm from 'remark-gfm';
import {remarkMdxImages} from 'remark-mdx-images';

const DOCS_ROOT = process.cwd();

export const ROOT_PATH = path.join(DOCS_ROOT, '../');
export const COMPONENTS_PATH = path.join(ROOT_PATH, 'src/components');
export const GUIDES_PATH = path.join(DOCS_ROOT, 'content/guides');
export const SUPPORT_PATH = path.join(DOCS_ROOT, 'content/support');
export const COOKBOOK_PATH = path.join(DOCS_ROOT, 'content/cookbook');

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = (fromPath: string) => {
  const paths = glob.sync(`${fromPath}/**/*.md`, {
    ignore: [`**/__tests__/*`, `**/*\.preview\.md`],
  });

  return paths.map(filePath => {
    const source = fs.readFileSync(path.join(filePath), 'utf8');
    const {data, content} = matter(source);

    return {
      ...(data as any),
      slug: path.parse(data.path || filePath).name,
      exampleCount: content.split(/language-jsx/g).length,
    };
  });
};

const fencedCodeBlock = /`{3}([\S]+)?\n([\s\S]+?(?=\n`{3}))\n`{3}/g;

export const getMdx = async (basePath: string, file: string) => {
  const source = fs.readFileSync(path.join(basePath, `${file}.md`), 'utf8');

  // TODO consider making this a remark plugin
  const live = Array.from(source.matchAll(fencedCodeBlock) as any).reduce(
    (res: string, next: any) => {
      const [match, lang, code] = next;

      if (lang !== 'jsx') return res;

      const preview = code.startsWith('(')
        ? `<Preview>\n{${code.replace(/\;$/, '')}}\n</Preview>`
        : code;

      // string code may include template literals and expression interpolation
      // that needs to be escaped before re-inserting within a string prop
      const sanitized = code.replace(/\`/g, '\\`').replace(/\$\{/g, '$\\{');

      const wrapped = `<CodeDemo code={\`${sanitized}\`} language="${lang}">${preview}</CodeDemo>`;

      return res.replace(match, `${wrapped}`);
    },
    source
  );

  const {frontmatter, code} = await bundleMDX(live, {
    cwd: path.parse(path.join(basePath, `${file}.md`)).dir,
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...((options.remarkPlugins ?? []) as any),
        remarkSlug,
        remarkGfm,
        remarkMdxImages,
      ];

      return options;
    },
    esbuildOptions: options => {
      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
        '.svg': 'dataurl',
      };

      return options;
    },
  });
  return {frontmatter, code};
};
