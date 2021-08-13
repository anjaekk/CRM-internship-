import React from 'react';

// LIBRARY
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar({ events, calendarRef, checkNewValue, checkDetailValue }) {
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
        // dateClick={e => console.log(e.dateStr)}
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
