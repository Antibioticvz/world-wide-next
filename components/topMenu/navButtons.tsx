import Link from 'next/link'
import { BellIcon } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NavButtons = () => {
  return (
    <>
      <Link href="#" className="text-primary" prefetch={false}>
        Home
      </Link>

      <Link href="#" className="text-muted-foreground" prefetch={false}>
        Dashboard
      </Link>

      <Link href="#" className="text-muted-foreground" prefetch={false}>
        Profile
      </Link>

      <Link href="#" className="text-muted-foreground" prefetch={false}>
        Events
      </Link>

      <div className="relative inline-flex">
        <Link
          href="#"
          className={cn(buttonVariants({ variant: 'ghost' }), 'text-muted-foreground pl-0')}
          prefetch={false}
        >
          <BellIcon className="h-5 w-5" />
          <span className="ml-2">Notifications</span>
          <div className=" absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-red-50">
            2
          </div>
        </Link>
        {/* </Button> */}
      </div>

      <Link href="#" className="text-muted-foreground" prefetch={false}>
        Sign out
      </Link>
    </>
  )
}

export default NavButtons
