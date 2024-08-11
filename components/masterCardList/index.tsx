import { Fragment } from 'react'

import MasterCard, { MasterCardProps } from '@/components/masterCard'

import data from './data.json'

const MasterCardList = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-left">TOP Masters</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data?.map((card: MasterCardProps) => (
          <Fragment key={`master-card-${card.id}`}>
            <MasterCard {...card} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default MasterCardList
