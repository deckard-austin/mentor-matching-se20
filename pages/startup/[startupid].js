import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const MentorList = () => {
  const Router = useRouter();
  const API_URL = `/api/mentors?startup=${Router.query.startupid}`;
  const fetcher = (API_URL) => fetch(API_URL).then((r) => r.json());

  const { data, error, isValidating, mutate } = useSWR(API_URL, fetcher);
  console.log({ data });

  // if (isValidating) return <div>Fetching data...</div>;
  // // If an error occured, show an error message
  // if (error) return <div>Failed to load.</div>;
  // // If there were no mentors found, show a message that says so
  // if (!data) return <div>No mentors found.</div>;
  // // Otherwise return a list of mentors and a button to manually refetch the mentors.

  return (
    <div>
      <div>
        <ul>
          {data?.map((mentor) => (
            <li key={mentor.id}>{mentor.fields[`Mentor Name`]}</li>
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
