import { handleRender } from "./server";
import { RenderRequest } from "../pb/renderer/renderer_pb";

describe("handleRender", () => {
  it("記法変換リクエストを受けて変換できる", async () => {
    const req = new RenderRequest();
    req.setSrc("## Title\nfoo");
    const ctx = new Map<string, unknown>();
    const reply = await handleRender(req, ctx);
    expect(reply.getHtml()).toBe('<h2>Title</h2>\n<p>foo</p>');
  });
});
