import { Fragment } from 'react'

import EventCard, { EventCardProps } from '@/components/eventCard '

import data from './data.json'

const EventCardList = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-left">TOP Events</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        {data?.map((card: EventCardProps) => (
          <Fragment key={`event-card-${card.id}`}>
            <EventCard {...card} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default EventCardList
