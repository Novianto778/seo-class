import MainLayout from "@/components/layouts/MainLayout";
import EventDetail from "@/pages/EventDetail";
import React from "react";

type Props = {};

const EventDetailPage = (props: Props) => {
  return (
    <MainLayout>
      <EventDetail />
    </MainLayout>
  );
};

export default EventDetailPage;
