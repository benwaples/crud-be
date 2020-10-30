const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async(url) => {
  const response = await fetch(url);
  const html = await response.text();
  const dom  = new JSDOM(html);

  return dom.window.document;
};

module.exports = { request };
