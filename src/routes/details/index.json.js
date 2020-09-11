import { details } from './_data.js';
import { v4 as uuidv4 } from 'uuid';

export function get(req, res, next) {
  res.end(JSON.stringify(details));
}

export function post(req, res, next) {
  const { title, cost, specifics } = req.body;
  const id = uuidv4();
  details.push({ title, cost, specifics, id });

  res.end(JSON.stringify(details));
}
