const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'keyqNRJIfyYYszvny' }).base(
  'appw4SFuTi1nY6Kav'
);

base('Mentors')
  .select({
    // Selecting the first 10 records in Mentors
    maxRecords: 10,
    view: 'Mentors',
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

// export default (req, res) => {
//   if (req.method === 'GET') {
//     base('Mentors')
//       .select({
//         view: 'Mentors',
//       })
//       .all()
//       .then((records) => {
//         res.status(200).json(records);
//       })
//       .catch((error) => {
//         res.status(error.status || 500).json(error);
//       });
//   } else {
//     res.status(405).json({
//       message: `The ${req.method} request method is not allowed on this route.`,
//     });
//   }
// };
