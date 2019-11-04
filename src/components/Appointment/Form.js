import React, { useState } from 'react';

import InterviewerList from '../InterviewerList';
import Button from '../Button';
// import { restElement } from '@babel/types';

export default function Form(props) {
  const [name, setName] = useState(props.name || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  const reset = () => {
    setName('');
    setInterviewer(null);
    return;
  }

  const cancel = () => {
    reset();
    props.onCancel();
    return;
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Enter Student Name"
            data-testid='student-name-input'
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.onSave(name, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}
