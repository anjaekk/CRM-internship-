import React, { useState, useRef, useEffect } from 'react';

// LIBRARY
import Modal from 'react-modal';
import moment from 'moment';

// TEMPLETE
import Templete from './Templete/index';

// STYLES
import styled from 'styled-components';

import { column_name, name_data, empty_name_data } from './data';
import { CALENDAR_URL } from '../../config';
import axios from 'axios';

Modal.setAppElement('#root');

function index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newForm, setNewForm] = useState(true);
  const [start, setStart] = useState(new Date().toISOString());
  const [events, setEvents] = useState([]);
  const [updated, setUpdated] = useState(false);
  const calendarRef = useRef(null);
  const [eventDetail, setEventDetail] = useState({
    company: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    fetchSchedule();
  }, [start]);

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
      company: '',
      title: '',
      content: '',
    });
    setStart(new Date().toISOString());
  };

  const checkDetailValue = e => {
    const { event } = e;
    getDetailedSchedule(event.id);
    setNewForm(false);
    setModalOpen(true);
  };

  const onSubmit = e => {
    newSchedule();
    closeModal();
  };

  const getDetailedSchedule = async id => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      let response = await axios.get(`${CALENDAR_URL}/${id}`, config);

      if (response) {
        const { company, content, date, title } = response.data;
        setStart(date);
        setEventDetail({
          company,
          content,
          title,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const newSchedule = async () => {
    const { company, title, content } = eventDetail;

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        `${CALENDAR_URL}/schedule`,
        {
          company,
          schedule_date: start,
          title,
          content,
          user_schedule: [
            {
              user: 26,
            },
            {
              user: 27,
            },
          ],
        },
        config
      );
      if (response) {
        //
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleInputChange = e => {
    const { value, name } = e.target;

    setEventDetail({ ...eventDetail, [name]: value });
  };

  const handleStarttime = date => {
    setStart(date.toISOString());
  };

  const getYearMonth = date => {
    setStart(date);
  };

  const fetchSchedule = async () => {
    try {
      const newYear = start.getFullYear();
      const newMonth = start.getMonth() + 1;
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      let response = await axios.get(
        `${CALENDAR_URL}?year=${newYear}&month=${newMonth}`,
        config
      );
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CalendarElement>
      <Templete
        getYearMonth={getYearMonth}
        start={start}
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
        empty_name_data={empty_name_data}
      />
    </CalendarElement>
  );
}

export default index;

const CalendarElement = styled.div`
  position: relative;
  z-index: 0;
  width: 1200px;
  margin: auto;
`;
