// About.js

import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen mx-auto  container">
            <div className="bg-white rounded-lg shadow-lg p-8 h-screen flex flex-col items-center w-full text-center">
                <h1 className="text-4xl font-semibold mb-4 text-gray-900">About Event Explorer</h1>
                <p className="text-gray-600 text-lg mb-6">
                    Welcome to Event Explorer, your go-to app for managing and exploring events using the Google Calendar API. With Event Explorer, you can:
                </p>
                <ul className="list-disc text-left text-gray-700 text-lg mb-6">
                    <li>View and manage your Google Calendar events.</li>
                    <li>Discover upcoming events and schedules.</li>
                    <li>Create and organize your events efficiently.</li>
                </ul>
                <p className="text-gray-600 text-lg mb-6">
                    Event Explorer is designed to help you make the most of your time and stay organized. Whether you're a professional or just someone looking to manage your daily schedule effectively, Event Explorer has got you covered.
                </p>
                <p className="text-gray-600 text-lg mb-6">
                    We are dedicated to providing you with a seamless experience, and we hope you find our app helpful and easy to use.
                </p>
            </div>
        </div>
    );
};

export default About;
