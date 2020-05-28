const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'keyqNRJIfyYYszvny' }).base(
  'appw4SFuTi1nY6Kav'
);

export default (req, res) => {
  if (req.method === 'GET') {
    base('Mentors')
      .select({
        view: 'Mentors',
      })
      .all()
      .then((records) => {
        res.status(200).json(records);
      })
      .catch((error) => {
        res.status(error.status || 500).json(error);
      });
  } else {
    res.status(405).json({
      message: `The ${req.method} request method is not allowed on this route.`,
    });
  }
};
