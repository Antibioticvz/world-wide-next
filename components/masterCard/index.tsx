import { FC } from 'react'
import { BookmarkIcon, MapPinIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export interface MasterCardProps {
  id: number
  picture: string
  name: string
  description: string
  tags: string[]
  location: string
  rating: number
  link: string
}

const MasterCard: FC<MasterCardProps> = ({
  picture,
  name,
  description,
  tags,
  location,
  rating,
  link,
}) => {
  return (
    <Card className="w-full">
      <div className="relative">
        <Image
          src={picture}
          alt="Profile"
          className="w-full h-48 object-cover rounded-t-md"
          width="300"
          height="200"
          style={{ aspectRatio: '300/200', objectFit: 'cover' }}
        />

        <BookmarkIcon className="absolute top-2 right-2 w-6 h-6 text-gray-500" />
      </div>

      <CardContent className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>

        <p className="text-sm text-muted-foreground truncate">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4 h-[64px] overflow-y-auto">
          <div className="flex flex-wrap gap-2 h-1/2">
            {tags.slice(0, 4).map((tag, index) => (
              <Badge key={`tag-${index}-${tag}`} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="font-bold">Current location</p>

          <div className="flex items-center">
            <MapPinIcon className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary">{location}</span>
          </div>
        </div>

        <div className="flex items-center mt-4">
          {[1, 2, 3, 4, 5].map(starNumber => (
            <StarIcon
              key={starNumber}
              className={`h-4 w-4 ${
                starNumber <= Number(rating) ? 'text-yellow-500' : 'text-muted-foreground'
              }`}
            />
          ))}
          <span className="ml-2 text-sm">{rating}</span>
        </div>

        <div className="flex mt-4">
          <Button variant="outline" className="mr-2 flex-1">
            See profile
          </Button>

          <Button className="flex-1 bg-primary text-primary-foreground">Reserve</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MasterCard
