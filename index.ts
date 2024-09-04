import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";
import Highlight from "reveal.js/plugin/highlight/highlight.esm";
import "reveal.js/dist/reveal.css";
import "@catppuccin/highlightjs/css/catppuccin-mocha.css";
import "@catppuccin/palette/css/catppuccin.css";
import "./styles/catppuccin.css";
import "./styles/index.css";

let deck = new Reveal({
  plugins: [Markdown, Highlight],
  hash: true,
  slideNumber: true,
});
deck.initialize();
