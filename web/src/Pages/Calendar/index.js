import React, { useState, useRef, useEffect } from 'react';

// LIBRARY
import Modal from 'react-modal';
import moment from 'moment';

// TEMPLETE
import Templete from './Templete/index';

// DATAS
import { column_name, name_data, empty_name_data } from './data';
import { CALENDAR_URL } from '../../config';
import axios from 'axios';

// STYLES
import styled from 'styled-components';

Modal.setAppElement('#root');

function index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newForm, setNewForm] = useState(true);
  const [start, setStart] = useState(moment().format(`YYYY-MM-DD HH:MM:SS`));
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const newYear = moment(start).format('YYYY');
  const newMonth = moment(start).format('MM');
  const [eventDetail, setEventDetail] = useState({
    company: '',
    title: '',
    content: '',
  });

  // HOOKS
  useEffect(() => {
    fetchSchedule();
  }, [start]);

  useEffect(() => {
    fetchSchedule();
  }, [newMonth]);

  // FUNCTIONS

  const fetchSchedule = async () => {
    try {
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

  const getDetailedSchedule = async e => {
    const { event } = e;
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      let response = await axios.get(`${CALENDAR_URL}/${event.id}`, config);

      if (response) {
        const { company, content, date, title } = response.data;
        setNewForm(false);
        setModalOpen(true);
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
    console.log(`company`, company);

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
          company: company,
          schedule_date: start,
          title: title,
          content: content,
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
        fetchSchedule();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const checkNewValue = () => {
    setNewForm(true);
    setModalOpen(true);
    setEventDetail({
      company: '',
      title: '',
      content: '',
    });
  };

  const getYearMonth = date => {
    setStart(moment(date).format('YYYY-MM-DD HH:MM:SS'));
  };

  const handleStartTime = date => {
    setStart(date);
  };

  const handleInputChange = e => {
    const { value, name } = e.target;

    setEventDetail({ ...eventDetail, [name]: value });
  };

  const onSubmit = () => {
    newSchedule();
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <CalendarElement>
      <Templete
        getYearMonth={getYearMonth}
        start={start}
        newForm={newForm}
        modalOpen={modalOpen}
        handleStartTime={handleStartTime}
        closeModal={closeModal}
        column_name={column_name}
        name_data={name_data}
        events={events}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
        checkNewValue={checkNewValue}
        openModal={openModal}
        eventDetail={eventDetail}
        calendarRef={calendarRef}
        empty_name_data={empty_name_data}
        getDetailedSchedule={getDetailedSchedule}
      />
    </CalendarElement>
  );
}

export default index;

const CalendarElement = styled.div`
  position: relative;
  width: 1200px;
  margin: auto;
  z-index: 0;
`;
