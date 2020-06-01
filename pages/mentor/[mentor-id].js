import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import StartupList from '../../components/startup-list';
import STARTUP_DATA from '../../hard-data/startup-data';

// This page maps through each startup, the mentors will submit the form which creates their
const StartupsPage = () => {
  const startups = STARTUP_DATA;
  const [mentorChoice, setMentorChoice] = useState({ Humense: 'No' });

  const handleChange = (e) => {
    setMentorChoice({ ...mentorChoice, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log({ mentorChoice });
  return (
    <div className='startups-page'>
      <form
        action=''
        onSubmit={async (e) => {
          e.preventDefault();
        }}>
        {startups.map((startup) => (
          <StartupList
            key={startup.id}
            startup={startup}
            handleChange={handleChange}
          />
        ))}
        <button type='submit'>Save Choices</button>
      </form>
    </div>
  );
};

export default StartupsPage;
