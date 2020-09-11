import { details } from './_data';

export function get(req, res, next) {
  const { id } = req.params;

  const detail = details.find((d) => d.id === id);

  if (detail) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(detail));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'That detail does not exist' }));
  }
}
