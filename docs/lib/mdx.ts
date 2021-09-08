import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import {bundleMDX} from 'mdx-bundler';

const ROOT_PATH = process.cwd();

export const COMPONENTS_PATH = path.join(ROOT_PATH, '../src/components');
export const GUIDES_PATH = path.join(ROOT_PATH, 'guides');

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
  const {frontmatter, code} = await bundleMDX(source);
  return {frontmatter, code};
};
