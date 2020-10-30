// add to database

import { request } from 'express';
import { parseDoc } from './parse';

export const scrape = url => {
  request(url)
    .then(doc => parseDoc(doc));
};
