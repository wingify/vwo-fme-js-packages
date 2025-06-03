#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const TEMPLATE_DIR = path.join(__dirname, '../package-template');
const PACKAGES_DIR = path.join(__dirname, '../../packages');
const LICENSE_HEADER = `/**\n * Copyright 2024 Wingify Software Pvt. Ltd.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *    http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function copyDir(src, dest, replacements) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(
      dest,
      item.replace(/__TYPE__|__NAME__/g, (m) => replacements[m])
    );
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath, replacements);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');
      content = content
        .replace(/__TYPE__/g, replacements['__TYPE__'])
        .replace(/__NAME__/g, replacements['__NAME__'])
        .replace(
          /__NAME____TYPE__/g,
          replacements['__NAME__'] + replacements['__TYPE__']
        )
        .replace(
          /__TYPE__-__NAME__/g,
          `${replacements['__TYPE__']}-${replacements['__NAME__']}`
        );
      if (destPath.endsWith('.ts')) {
        // Ensure correct license header
        content = content.replace(/\/\*\*[\s\S]*?\*\//, LICENSE_HEADER.trim());
      }
      fs.writeFileSync(destPath, content, 'utf8');
    }
  }
}

async function selectType(options) {
  return new Promise((resolve) => {
    let selected = 0;
    function render() {
      rl.output.write('\x1B[2J\x1B[0f'); // clear screen
      rl.output.write('Select package type:\n');
      options.forEach((opt, i) => {
        if (i === selected) {
          rl.output.write(`> ${opt}\n`);
        } else {
          rl.output.write(`  ${opt}\n`);
        }
      });
      rl.output.write('\nUse arrow keys and press Enter.\n');
    }
    function onKeypress(_, key) {
      if (key.name === 'up') {
        selected = (selected - 1 + options.length) % options.length;
        render();
      } else if (key.name === 'down') {
        selected = (selected + 1) % options.length;
        render();
      } else if (key.name === 'return') {
        process.stdin.setRawMode(false);
        process.stdin.removeListener('keypress', onKeypress);
        rl.output.write(`\nSelected: ${options[selected]}\n`);
        resolve(options[selected]);
      }
    }
    require('readline').emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    process.stdin.on('keypress', onKeypress);
    render();
  });
}

(async function main() {
  const allowedTypes = ['util', 'service', 'enum', 'connectors'];
  const type = await selectType(allowedTypes);
  let name = (await ask('Enter package name: ')).trim();
  while (!name) {
    name = (await ask('Name cannot be empty. Enter package name: ')).trim();
  }
  rl.close();

  const replacements = {
    __TYPE__: type,
    __NAME__: name,
  };
  const destDir = path.join(PACKAGES_DIR, `${type}-${name}`);
  if (fs.existsSync(destDir)) {
    console.error(`\nError: Package directory ${destDir} already exists.`);
    process.exit(1);
  }
  copyDir(TEMPLATE_DIR, destDir, replacements);
  console.log(`\nScaffolded new package at: ${destDir}`);
})();
