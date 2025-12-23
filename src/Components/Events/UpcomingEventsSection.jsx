import { memo } from "react";
import EventsCarousel from "./EventsCarousel";

function UpcomingEventsSection({
  eventsData = [],
  onOpenEventDetails,
  onViewAllEvents,
  isLoading = false,
}) {
  return (
    <section
      id="upcoming-events"
      className="py-28 bg-gradient-to-b from-black via-[#0d0d0d] to-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-sm uppercase tracking-widest text-red-600">
            Don’t Miss
          </span>

          <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-semibold text-white">
            Upcoming <span className="text-red-600">Events</span>
          </h2>

          <p className="mb-10 max-w-md text-gray-400 leading-relaxed">
            Join our exclusive fitness events, workshops, and challenges designed
            to push your limits and connect you with the community.
          </p>

          <button
            type="button"
            disabled={isLoading}
            onClick={onViewAllEvents}
            className="px-7 py-3 rounded-full border border-red-500/70 text-red-400 hover:bg-red-600 hover:text-white transition"
          >
            {isLoading ? "Loading" : "View All Events"}
          </button>
        </div>

        <EventsCarousel
          items={eventsData}
          onOpen={onOpenEventDetails}
        />
      </div>
    </section>
  );
}
export default memo(UpcomingEventsSection);
