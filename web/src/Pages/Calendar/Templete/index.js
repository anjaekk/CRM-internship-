import React from 'react';

// LIBRARY
import Datetime from 'react-datetime';

// ATOMS, MOLECULES, ORGANISM
import { Button, Label, Span } from '../../../Components/Atoms';
import { Modal, InputLabel } from '../../../Components/Molecules';
import { Form, Calendar, CommentBox } from '../../../Components/Organisms';
import EditableTable from '../../../Components/Atoms/EditableTable';

// STYLES
import styled from 'styled-components';

function index({
  eventDetail,
  name_data,
  column_name,
  start,
  events,
  modalOpen,
  openModal,
  closeModal,
  newForm,
  handleStartTime,
  handleInputChange,
  onSubmit,
  checkNewValue,
  calendarRef,
  getYearMonth,
  empty_name_data,
  getDetailedSchedule,
}) {
  const { title, content, company } = eventDetail;
  return (
    <React.Fragment>
      <Modal type="schedule_detail" isOpen={modalOpen} onClose={closeModal}>
        <Form fetch={onSubmit}>
          {newForm ? (
            <ScheduleForm>
              <LeftBox>
                <InputLabel
                  type="text"
                  name="company"
                  vlaue=""
                  onChange={handleInputChange}
                >
                  Company name
                </InputLabel>
                <DatetimeBox>
                  <Label>Start Date</Label>
                  <Datetime
                    inputProps={{ className: 'datetime' }}
                    dateFormat="YYYY-MM-DD HH:MM:SS"
                    timeFormat={false}
                    value={start}
                    onChange={handleStartTime}
                  />
                </DatetimeBox>
                <InputLabel
                  type="text"
                  name="title"
                  value=""
                  onChange={handleInputChange}
                >
                  title
                </InputLabel>
                <InputLabel
                  type="text"
                  name="content"
                  value=""
                  onChange={handleInputChange}
                >
                  content
                </InputLabel>
                <CommentBox size="lg"></CommentBox>
              </LeftBox>
              <RightBox>
                <div>
                  <Span size="sm">Employee</Span>
                  <EditableTable column={column_name} data={empty_name_data} />
                </div>
                <div>
                  <Button bg="schedule">Add Event</Button>
                </div>
              </RightBox>
            </ScheduleForm>
          ) : (
            <ScheduleForm>
              <ScheduleDetail>
                <InputLabel type="text" name="title" value={company}>
                  Company Name
                </InputLabel>
                <InputLabel type="text" name="date" value={start}>
                  Date
                </InputLabel>
                <InputLabel type="text" name="title" value={title}>
                  Title
                </InputLabel>
                <InputLabel type="text" name="content" value={content}>
                  Content
                </InputLabel>
                <CommentBox size="lg">
                  <li>first metting</li>
                  <li>second metting</li>
                  <li>thrid metting</li>
                </CommentBox>
              </ScheduleDetail>
              <RightBox>
                <div>
                  <Span size="sm">Employee</Span>
                  <EditableTable column={column_name} data={name_data} />
                </div>
                <div>
                  <Button bg="schedule">Revised</Button>
                </div>
              </RightBox>
            </ScheduleForm>
          )}
        </Form>
      </Modal>
      <Calendar
        getYearMonth={getYearMonth}
        events={events}
        openModal={openModal}
        checkNewValue={checkNewValue}
        calendarRef={calendarRef}
        getDetailedSchedule={getDetailedSchedule}
      />
    </React.Fragment>
  );
}

export default index;

const ScheduleForm = styled.div`
  ${({ theme }) => theme.flex('center', null, null)}
  padding: 0 1rem;
`;
const LeftBox = styled.div`
  flex: 1;
`;
const RightBox = styled.div`
  ${({ theme }) => theme.flex('space-between', 'flex-end', 'column')}
  flex: 1;
  padding-bottom: 1rem;
`;

const DatetimeBox = styled.div`
  ${({ theme }) => theme.flex('flex-start', 'center', 'column')}
  width: 100%;

  div {
    width: 100%;

    .datetime {
      ${({ theme }) => theme.flex('flex-start', null, null)}
      width: 100%;
      margin: 5px auto 0;
      padding: 0.5em 0 0.5em 1rem;
      color: #696969;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1em;
      outline: none;
    }
  }
`;

const ScheduleDetail = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  flex: 1;
`;
