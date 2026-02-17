import React from 'react';

interface EventItem {
  id: number;
  title: string;
  type: 'Job' | 'Event' | 'Meetup';
  date: string;
  location?: string;
  excerpt?: string;
}

const sampleEvents: EventItem[] = [
  { id: 1, title: 'Frontend Engineer (React/TypeScript)', type: 'Job', date: '2026-02-01', location: 'Noida, India', excerpt: 'We are hiring a React/TypeScript engineer to join our product team.' },
  { id: 2, title: 'Annual Tech Meetup 2026', type: 'Event', date: '2026-03-12', location: 'New Delhi', excerpt: 'Join industry leaders to discuss AI, cloud and product engineering.' },
  { id: 3, title: 'Mobile Developer (Android)', type: 'Job', date: '2026-01-20', location: 'Remote', excerpt: 'Contract opportunity for experienced Android developers.' },
];

const EventsPage: React.FC<{ onContactClick?: () => void }> = ({ onContactClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-black mb-6">Events & Job Postings</h1>
        <p className="text-gray-600 mb-10">Recent job openings and upcoming events posted by the admin. This list will be managed via the admin panel.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleEvents.map((ev) => (
            <article key={ev.id} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">{ev.title}</h3>
                  <div className="text-sm text-gray-500 mt-1">{ev.type} • {ev.date} {ev.location ? `• ${ev.location}` : ''}</div>
                </div>
              </div>
              {ev.excerpt && <p className="mt-4 text-gray-700">{ev.excerpt}</p>}
            </article>
          ))}
        </div>

        <div className="mt-12 text-right">
          <p className="text-gray-500">Admins can manage events and job postings from the admin panel.</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;


