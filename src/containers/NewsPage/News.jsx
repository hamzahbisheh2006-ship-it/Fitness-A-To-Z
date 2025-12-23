import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import NewsHero from "../../Components/News/NewsHero";
import LatestNewsSection from "../../Components/News/LatestNewsSection";
import GymNewsSection from "../../Components/News/GymNewsSection";
import DetailsModal from "../../Components/News/DetailsModal";

import UpcomingEventsSection from "../../Components/Events/UpcomingEventsSection";
import AllEventsModal from "../../Components/Events/AllEventsModal";

import { newsData } from "../../Components/News/data";
import { latestNewsData } from "../../Components/News/latestNewsData";
import { eventsData } from "../../Components/Events/data";

export default function News() {
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [allEventsOpen, setAllEventsOpen] = useState(false);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [detailsLoadingId, setDetailsLoadingId] = useState(null);
  const [fromAllEvents, setFromAllEvents] = useState(false);
  const [allEventsScrollTop, setAllEventsScrollTop] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openDetails = (item) => {
    setSelected(item);
    setModalOpen(true);
  };

  const openEventDetails = (ev) =>
    openDetails({ ...ev, type: "events", prettyDate: ev.date });

  const openAllEvents = () => {
    setEventsLoading(true);
    setTimeout(() => {
      setEventsLoading(false);
      setAllEventsOpen(true);
    }, 650);
  };

  const closeDetails = () => {
    setModalOpen(false);
    setSelected(null);

    if (fromAllEvents) setAllEventsOpen(true);
    setFromAllEvents(false);
  };

  return (
    <>
      <Header />
      <NewsHero
        onExploreNews={() => scrollTo("latest-news")}
        onViewEvents={() => scrollTo("upcoming-events")}
        onScrollDown={() => scrollTo("latest-news")}
      />

      <main className="bg-[#0d0d0d] text-white">
        <LatestNewsSection
          newsData={latestNewsData}
          onOpenDetails={openDetails}
        />

        <GymNewsSection newsData={newsData} onOpenDetails={openDetails} />

        <UpcomingEventsSection
          eventsData={eventsData}
          isLoading={eventsLoading}
          onViewAllEvents={openAllEvents}
          onOpenEventDetails={openDetails}
        />
      </main>

      <AllEventsModal
        open={allEventsOpen}
        events={eventsData}
        loadingId={detailsLoadingId}
        initialScrollTop={allEventsScrollTop}
        locked={true}
        onClose={() => setAllEventsOpen(false)}
        onSelect={(ev, scrollTop) => {
          setDetailsLoadingId(ev.id ?? "x");
          setAllEventsScrollTop(scrollTop ?? 0);
          setFromAllEvents(true);

          setTimeout(() => {
            setDetailsLoadingId(null);
            setAllEventsOpen(false);
            openEventDetails(ev);
          }, 500);
        }}
      />
      <DetailsModal open={modalOpen} item={selected} onClose={closeDetails} />
      <Footer />
    </>
  );
}
