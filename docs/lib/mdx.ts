import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import {bundleMDX} from 'mdx-bundler';
import remarkSlug from 'remark-slug';

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

export const getMdx = async (basePath: string, file: string) => {
  const source = fs.readFileSync(path.join(basePath, `${file}.md`), 'utf8');
  const {frontmatter, code} = await bundleMDX(source, {
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...((options.remarkPlugins ?? []) as any), remarkSlug];

      return options;
    },
  });
  return {frontmatter, code};
};
