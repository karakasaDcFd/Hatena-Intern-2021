import unified from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from 'rehype-stringify';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)

/**
 * 受け取った文書を HTML に変換する
 */
export async function render(src: string): Promise<string> {
  // TODO: これはサンプル実装 (URL の自動リンク) です
  // const html = src.replace(/https?:\/\/[^\s]+/g, (url) => `<a href="${encodeURI(url)}">${url}</a>`);
  const html = processor.processSync(src).toString();
  return html;
}
