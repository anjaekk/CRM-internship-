import React, { useState, useRef } from 'react';

// ATOMS
import Modal from '../../../Components/Atoms/Modal/Modal';
import Calendar from '../../../Components/Atoms/Calendar/Calendar';

// ORGANISM
import ScheduleForm from '../../../Components/Organisms/ScheduleForm/ScheduleForm';

function index() {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = React.createRef();
  const [detailValue, setDetailValue] = useState({});

  const closeModal = () => {
    setModalOpen(false);
  };

  const checkNewValue = e => {
    setDetailValue({});
    setModalOpen(true);
  };

  const checkDetailValue = e => {
    setDetailValue(e.event);
    setModalOpen(true);
  };

  const onEventAdded = e => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(e);
  };

  return (
    <React.Fragment>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <ScheduleForm
          detailValue={detailValue}
          closeModal={closeModal}
          onEventAdded={onEventAdded}
        />
        {/* <TABLE></TABLE> */}
        {/* 감싸는 div박스 하나 더 필요 */}
      </Modal>
      <Calendar
        checkNewValue={checkNewValue}
        checkDetailValue={checkDetailValue}
        calendarRef={calendarRef}
      />
    </React.Fragment>
  );
}

export default index;
