import MainLayout from "@/components/layouts/MainLayout";
import Events from "@/main-page/Events";
import { EventParams } from "@/types/events.type";
import React from "react";

type Props = {
  searchParams: EventParams;
};

const EventsPage = ({ searchParams }: Props) => {
  return (
    <MainLayout>
      <Events searchParams={searchParams} />
    </MainLayout>
  );
};

export default EventsPage;
