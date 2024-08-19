import EventBanner from "@/components/features/events/EventBanner";
import EventContent from "@/components/features/events/EventContent";
import EventsFilterSidebar from "@/components/features/events/EventSidebarFilter";
import EventTabs from "@/components/features/events/EventTabs";
import { EventParams } from "@/types/events.type";

type Props = {
  searchParams: EventParams;
};

const Events = ({ searchParams }: Props) => {
  return (
    <>
      <EventBanner />
      <div className="grid grid-cols-12 gap-4 py-4">
        <div className="col-span-5 md:col-span-3">
          <EventsFilterSidebar searchParams={searchParams} />
        </div>
        <div className="col-span-7 md:col-span-9">
          <div className="flex flex-col gap-2">
            <div className="max-w-max place-self-end">
              <EventTabs />
            </div>
            <EventContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
