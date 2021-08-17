import React, { useState, useRef, useEffect } from 'react';

// LIBRARY
import Modal from 'react-modal';
import moment from 'moment';

// TEMPLETE
import Templete from './Templete/index';

// STYLES
import styled from 'styled-components';

import { column_name, name_data, events } from './data';

Modal.setAppElement('#root');

function index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newForm, setNewForm] = useState(true);
  const [start, setStart] = useState(new Date());
  // const [subject, setSubject] = useState('');
  const calendarRef = useRef(null);
  const [eventDetail, setEventDetail] = useState({
    id: 0,
    title: '',
    subject: '',
  });

  // HOOKS
  // useEffect(() => {
  //   closeModal();
  // }, [onEventAdded]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const checkNewValue = () => {
    setNewForm(true);
    setModalOpen(true);
    setEventDetail({
      id: 0,
      title: '',
      start: '',
      subject: '',
    });
  };

  const checkDetailValue = e => {
    const { event } = e;

    setNewForm(false);
    setEventDetail({
      id: event.id,
      title: event.title,
      start: event.startStr,
      subject: event.extendedProps.subject,
    });

    setModalOpen(true);
  };

  const onSubmit = e => {
    e.preventDefault();

    onEventAdded({
      title: eventDetail.title,
      start,
      subject: eventDetail.subject,
    });

    closeModal();
  };

  const onEventAdded = e => {
    let calendarApi = calendarRef.current.getApi();

    calendarApi.addEvent({
      start: moment(e.start).format('YYYY-MM-DD'),
      title: eventDetail.title,
      subject: e.subject,
    });
  };

  const handleInputChange = e => {
    const { value, name } = e.target;

    setEventDetail({ ...eventDetail, [name]: value });
  };

  const handleStarttime = date => {
    setStart(date);
  };

  return (
    <CalendarElement>
      <Templete
        start={start}
        onEventAdded={onEventAdded}
        newForm={newForm}
        modalOpen={modalOpen}
        handleStarttime={handleStarttime}
        closeModal={closeModal}
        column_name={column_name}
        name_data={name_data}
        events={events}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
        checkDetailValue={checkDetailValue}
        checkNewValue={checkNewValue}
        openModal={openModal}
        eventDetail={eventDetail}
        calendarRef={calendarRef}
      />
    </CalendarElement>
  );
}

export default index;

const CalendarElement = styled.div`
  position: relative;
  z-index: 0;
  width: 1200px;
  height: 100vh;
  margin: auto;
`;
