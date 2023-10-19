// EventList.js

import React from 'react';
import EventCard from './EventCard';

function EventList({ events }) {
  return (
    <div className="flex flex-wrap justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
