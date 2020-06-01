// TODO: Connect Airtable API with this to bring in startups dynamically
// TODO: Add styling, startup logos, query params for each mentor/startup
import React from 'react';

const StartupList = (props) => (
  <div className='startup-list'>
    <div className='each-startup'>
      <h1 className='startup-name'>{props.startup.name}</h1>
      <p className='startup-location'>{props.startup.location} </p>
      <h3 className='startup-description'>{props.startup.description}</h3>
      <label htmlFor=''>Yes</label>
      <input
        type='radio'
        value='Yes'
        name={props.startup.name}
        onChange={props.handleChange}
        className='mentor-choice'
      />
      <label htmlFor=''>No</label>
      <input
        type='radio'
        value='No'
        name={props.startup.name}
        onChange={props.handleChange}
        className='mentor-choice'
      />
    </div>
  </div>
);

export default StartupList;
