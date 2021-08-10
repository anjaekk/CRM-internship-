import React from 'react';

// LIBRARY
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar({ calendarRef, checkNewValue, checkDetailValue }) {
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
    { id: 3, title: 'event 3', start: '2021-08-17' },
  ];

  return (
    <React.Fragment>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay new',
        }}
        customButtons={{
          new: {
            text: 'new',
            click: checkNewValue,
          },
        }}
        events={events}
        // dateClick={e => console.log(e.dateStr)}
        // eventClick={e => console.log(e.event.id)}
        dateClick={e => console.log(e.dateStr)}
        eventClick={checkDetailValue}
        nowIndicator
        ref={calendarRef}
        eventColor="rebeccapurple"
        display="background"
      />
    </React.Fragment>
  );
}

export default Calendar;
