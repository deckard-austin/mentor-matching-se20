import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import StartupList from '../../components/startup-list';
import STARTUP_DATA from '../../hard-data/startup-data';

// This page maps through each startup, the mentors will submit the form which creates their
class StartupsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startups: STARTUP_DATA,
      mentorChoice: '',
      mentorChoices: [], // If using radio buttons, might need to store each selection in an array
    };
  }

  handleChange = (e) => {
    this.setState({ mentorChoice: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { startups, mentorChoice } = this.state;
    console.log({ mentorChoice });
    return (
      <div className='startups-page'>
        <form
          action=''
          onSubmit={async (e) => {
            e.preventDefault();
          }}>
          {startups.map(({ id, handleChange, ...otherProps }) => (
            <StartupList
              key={id}
              {...otherProps}
              handleChange={this.handleChange}
            />
          ))}
          <button type='submit'>Save Choices</button>
        </form>
      </div>
    );
  }
}

export default StartupsPage;
