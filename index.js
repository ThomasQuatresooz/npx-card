#!/usr/bin/env node
import boxen from 'boxen';
import cfonts from 'cfonts';
import Table from 'cli-table3';
import timage from 'terminal-image';
import got from 'got';

cfonts.say('CARD', {
  font: '3D',
  colors: ['#f00', 'gray'],
  align: 'center',
  letterSpacing: 3,
});

var table = new Table({
  style: { 'padding-left': 1, 'padding-right': 1, 'head': [], 'border': [] },
});

got(
  'https://avatars0.githubusercontent.com/u/59604895?s=460&u=4be13294806abf3b20288554b22495044a19ecd9&v=4',
)
  .buffer()
  .then((result) => {
    timage
      .buffer(result)
      .then((imageString) => {
        table.push(
          [{ colSpan: 2, content: 'Thomas Quatresooz', hAlign: 'center' }],
          [
            {
              colSpan: 2,
              content: imageString,
              hAlign: 'center',
              vAlign: 'center',
            },
          ],
          { email: 'thomas-quatresooz@becode.xyz' },
          { github: 'https://github.com/ThomasQuatresooz' },
          { npmjs: 'https://www.npmjs.com/~karsh18' },
          { linkedin: 'https://www.linkedin.com/in/thomas-quatresooz-a49088b0/' },
        );
        console.log(
          boxen(table.toString(), { borderStyle: 'doubleSingle', float: 'center', padding: 1 }),
        );
      })
      .catch((err) => {});
  })
  .catch((err) => {});
