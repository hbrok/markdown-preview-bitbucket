function activate() {
  return {
    extendMarkdownIt(md) {
      return md
        .use(require("markdown-it-anchor"))
        .use(require("markdown-it-table-of-contents"), {
          markerPattern: /^\[TOC\]/im,
          includeLevel: [1, 2, 3, 4, 5, 6]
        });
    }
  };
}
exports.activate = activate;
