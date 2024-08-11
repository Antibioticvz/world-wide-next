import { Fragment } from 'react'

import MasterCard from '@/components/masterCard'

const MasterCardList = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-left">TOP Masters</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array(4).fill(
          <Fragment key={1}>
            <MasterCard />
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default MasterCardList
