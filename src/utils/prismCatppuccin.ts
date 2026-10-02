import {flavors, type FlavorName} from '@catppuccin/palette';
import type {PrismTheme} from 'prism-react-renderer';

// Code block theme following Catppuccin's syntax-highlighting style guide.
// This runs in Node.js (imported by docusaurus.config.ts).
function catppuccin(name: FlavorName): PrismTheme {
  const c = Object.fromEntries(
    flavors[name].colorEntries.map(([key, color]) => [key, color.hex]),
  ) as Record<string, string>;

  return {
    plain: {color: c.text, backgroundColor: c.mantle},
    styles: [
      {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: c.overlay2, fontStyle: 'italic'}},
      {types: ['keyword', 'atrule', 'important'], style: {color: c.mauve}},
      {types: ['string', 'char', 'attr-value', 'inserted'], style: {color: c.green}},
      {types: ['number', 'boolean', 'constant'], style: {color: c.peach}},
      {types: ['function'], style: {color: c.blue}},
      {types: ['class-name', 'maybe-class-name', 'namespace', 'attr-name'], style: {color: c.yellow}},
      {types: ['builtin'], style: {color: c.red}},
      {types: ['tag', 'selector'], style: {color: c.blue}},
      {types: ['property'], style: {color: c.lavender}},
      {types: ['parameter'], style: {color: c.maroon}},
      {types: ['operator', 'url'], style: {color: c.sky}},
      {types: ['punctuation'], style: {color: c.overlay2}},
      {types: ['regex', 'symbol'], style: {color: c.pink}},
      {types: ['variable'], style: {color: c.text}},
      {types: ['deleted'], style: {color: c.red}},
      {types: ['bold'], style: {fontWeight: 'bold'}},
      {types: ['italic'], style: {fontStyle: 'italic'}},
    ],
  };
}

export const catppuccinMocha = catppuccin('mocha');
export const catppuccinLatte = catppuccin('latte');
