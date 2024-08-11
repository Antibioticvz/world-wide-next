import { BookmarkIcon, MapPinIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const MasterCard = () => {
  return (
    <Card className="w-full">
      <div className="relative">
        <Image
          src="https://generated.vusercontent.net/placeholder.svg"
          alt="Profile"
          className="w-full h-48 object-cover rounded-t-md"
          width="300"
          height="200"
          style={{ aspectRatio: '300/200', objectFit: 'cover' }}
        />

        <BookmarkIcon className="absolute top-2 right-2 w-6 h-6 text-gray-500" />
      </div>

      <CardContent className="p-4">
        <h2 className="text-xl font-bold">Lenka</h2>

        <p className="text-sm text-muted-foreground">Stylize everything</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {['woman', 'kid', 'fashion', 'woman', 'kid', 'fashion'].map(tag => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold">Current location</p>

          <div className="flex items-center">
            <MapPinIcon className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary">Antalya</span>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <StarIcon className="h-4 w-4 text-muted-foreground" />
          <span className="ml-2 text-sm">56</span>
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
