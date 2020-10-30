const { parseDoc } = require('./lib/scraper/parse');
const { request } = require('./lib/scraper/request');

request('https://www.realtor.com/realestateandhomes-detail/1931-NE-Pacific-St_Portland_OR_97232_M22217-96489')
  .then(doc => parseDoc(doc))
  .then(console.log);
