import { FC } from 'react'

import { HeartIcon } from 'lucide-react'
import Image from 'next/image'

import { Card } from '@/components/ui/card'

export interface EventCardProps {
  id: number
  picture: string
  name: string
  price: number
  link: string
}

const EventCard: FC<EventCardProps> = ({ picture, name, price, link }) => {
  return (
    <Card>
      <div className="relative w-full h-40">
        <Image
          src={picture}
          alt="Event"
          className="object-cover w-full h-full rounded-lg"
          width="160"
          height="160"
          style={{ aspectRatio: '160/160', objectFit: 'cover' }}
        />
        <HeartIcon className="absolute top-2 right-2 w-6 h-6 text-purple-500" />
      </div>

      <div className="text-left space-y-1 h-2/3 p-2">
        <p className="text-lg font-bold truncate">{name}</p>
        <span className="text-primary">{price}$ / hour</span>
      </div>
    </Card>
  )
}

export default EventCard
