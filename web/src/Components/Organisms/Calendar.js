import React from 'react';

// LIBRARY
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar({
  events,
  calendarRef,
  checkNewValue,
  getYearMonth,
  getDetailedSchedule,
}) {
  return (
    <React.Fragment>
      <FullCalendar
        datesSet={arg => {
          getYearMonth(arg.view.currentStart);
        }}
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
        eventClick={getDetailedSchedule}
        nowIndicator
        ref={calendarRef}
        eventColor="rebeccapurple"
      />
    </React.Fragment>
  );
}

export default Calendar;
