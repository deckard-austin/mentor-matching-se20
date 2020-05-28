import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

const API_URL = '../api/mentors.js';
const fetcher = (API_URL) => fetch(API_URL).then((r) => r.json());

const MentorList = () => {
  const { data, error, isValidating, mutate } = useSWR(API_URL, fetcher);
  console.log({ data });

  // base('Mentors')
  //   .select({
  //     view: 'Mentors',
  //   })
  //   .firstPage(function (err, records) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     records.forEach(function (record) {
  //       console.log('Retrieved', record.get('Name'));
  //     });
  //   });

  // if (isValidating) return <div>Fetching data...</div>;
  // // If an error occured, show an error message
  // if (error) return <div>Failed to load.</div>;
  // // If there were no mentors found, show a message that says so
  // if (data.length === 0) return <div>No mentors found.</div>;
  // // Otherwise return a list of mentors and a button to manually refetch the mentors.

  // I know this is incorrectly mapping through, just trying to access the records from the API
  return (
    <div>
      <div>
        <ul>
          {data.map((mentor) => (
            <li key={mentor.id}>{mentor.fields[Name]}</li>
          ))}
        </ul>
        <button type='button' onClick={mutate}>
          Refresh Data
        </button>
      </div>
    </div>
  );
};

export default MentorList;
