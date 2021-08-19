import { render } from "./renderer";

describe("Headers syntax", () => {
  it("Markdownの見出し記法が使える", async () => {
    const src = "## Title";
    const html = await render(src);
    expect(html).toBe("<h2>Title</h2>");
  });
});

const listAns = `<ul>
<li>List1
<ul>
<li>SubList1</li>
<li>SubList2</li>
</ul>
</li>
<li>List2</li>
</ul>`;

describe("Lists syntax", () => {
  it("Markdownのリスト記法が使える", async () => {
    const src = "- List1\n  - SubList1\n  - SubList2\n- List2";
    const html = await render(src);
    expect(html).toBe(listAns);
  });
});

describe("Links syntax", () => {
  it("Markdownのリンク記法が使える", async () => {
    const src = "[テスト](https://example.com)";
    const html = await render(src);
    expect(html).toBe('<p><a href="https://example.com">テスト</a></p>');
  });
});
