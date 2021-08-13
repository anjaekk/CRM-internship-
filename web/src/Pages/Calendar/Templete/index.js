import React, { useState, useRef } from 'react';

// ATOMS, ORGANISM
import { Modal, Calendar } from '../../../Components/Atoms';
import { Form, ScheduleForm } from '../../../Components/Organisms';

function index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newForm, setNewForm] = useState(false);
  const calendarRef = React.createRef();
  const [detailValue, setDetailValue] = useState({});
  const [eventDetail, setEventDetail] = useState({
    id: 0,
    title: '',
    start: '',
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  const checkNewValue = e => {
    // setDetailValue({});
    setModalOpen(true);
  };

  const checkDetailValue = e => {
    const { event } = e;
    setEventDetail({
      id: event.id,
      title: event.title,
      start: event.start,
    });

    // setDetailValue(e.event);
    setModalOpen(true);
  };

  const onEventAdded = e => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(e);
  };

  return (
    <React.Fragment>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <Form>
          {!newForm && (
            <ScheduleForm
              eventDetail={eventDetail}
              detailValue={detailValue}
              closeModal={closeModal}
              onEventAdded={onEventAdded}
            />
          )}
          {newForm && (
            <ScheduleForm
              eventDetail={eventDetail}
              detailValue={detailValue}
              closeModal={closeModal}
              onEventAdded={onEventAdded}
            />
          )}
        </Form>
        {/* <TABLE></TABLE> */}
        {/* 감싸는 div박스 하나 더 필요 */}
      </Modal>
      <Calendar
        events={events}
        checkNewValue={checkNewValue}
        checkDetailValue={checkDetailValue}
        calendarRef={calendarRef}
      />
    </React.Fragment>
  );
}

export default index;

const events = [
  {
    id: 1,
    title: 'company',
    start: '2021-08-14',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2021-08-16',
  },
  { id: 3, title: 'eventss 3', start: '2021-08-17' },
];
