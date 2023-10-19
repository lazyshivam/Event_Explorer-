// EventCard.js

import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`} className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
      <div className="bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{event.summary}</div>
          <p className="text-gray-700 text-base">{event.start.dateTime}</p>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
