import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails({ events }) {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <div className="container mx-auto   p-4  ">
    <div className="bg-white shadow-lg rounded-lg p-4  ">
      <h1 className="text-2xl font-bold">{event.summary}</h1>
      <p className="text-gray-500">{event.location}</p>
      <p className="mt-2">
        <strong>Start:</strong> {new Date(event.start.dateTime).toLocaleString()}
      </p>
      <p>
        <strong>End:</strong> {new Date(event.end.dateTime).toLocaleString()}
      </p>
      <p className="mt-4">{event.description}</p>
    </div>
    </div>
  );
}

export default EventDetails;
