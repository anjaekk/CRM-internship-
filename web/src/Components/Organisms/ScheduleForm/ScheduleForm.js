import React, { useState } from 'react';

// LIBRARY
import Datetime from 'react-datetime';

// ATOMS
import Input from '../../Atoms/Input/Input';
import Label from '../../Atoms/Label/Label';
import Button from '../../Atoms/Button/Button';

// STYLES
import styled from 'styled-components';

function ScheduleForm({ closeModal, onEventAdded, detailValue }) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());

  const onSubmit = e => {
    e.preventDefault();

    onEventAdded({
      title,
      start,
    });

    closeModal();
  };

  const handleInputChange = e => {
    setTitle(e.target.value);
  };

  const handleDatetime = date => {
    setStart(date);
  };

  return (
    <Form onSubmit={onSubmit}>
      <LabelInput>
        <Label>Company Name</Label>
        <Input
          placeholder="title"
          // value={detailValue ? detailValue.title : title}
          value={title}
          onChange={handleInputChange}
        />
      </LabelInput>

      <LabelInput>
        <Label>Start Date</Label>
        <Datetime
          dateFormat="YYYY-MM-DD"
          timeFormat={false}
          // value={detailValue ? detailValue.start : start}
          value={start}
          onChange={handleDatetime}
        />
      </LabelInput>
      <LabelInput>
        <Label>Title</Label>
        <Input placeholder="title" />
      </LabelInput>
      <LabelInput>
        <Label>Memo</Label>
        <textarea style={{ resize: 'none' }} />
      </LabelInput>
      <Button padding="sm">Add Event</Button>
    </Form>
  );
}

export default ScheduleForm;

const Form = styled.form`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  height: 100%;
`;

const LabelInput = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  margin-bottom: 10px;
`;
