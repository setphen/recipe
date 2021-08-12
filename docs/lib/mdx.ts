import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';

const ROOT_PATH = process.cwd();
const DOCS_PATH = path.join(ROOT_PATH, '../src');

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = (fromPath: string) => {
  const PATH = path.join(DOCS_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.md`, {
    ignore: [`**/__tests__/*`, `**/*\.preview\.md`],
  });

  return paths.map(filePath => {
    const source = fs.readFileSync(path.join(filePath), 'utf8');
    const {data, content} = matter(source);

    return {
      ...(data as any),
      slug: path.basename(filePath).replace('.mdx', ''),
      exampleCount: content.split(/language-jsx/g).length,
    };
  });
};
