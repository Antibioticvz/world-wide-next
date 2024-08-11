import { MenuIcon } from 'lucide-react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

import NavButtons from './navButtons'

const TopMenu = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>A.B</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold">Anastacia</h1>
            <p className="text-sm text-muted-foreground">Berlin</p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <NavButtons />
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon className="h-6 w-6" />
              </SheetTrigger>

              <SheetContent side="left" className="w-full max-w-xs">
                <SheetTitle>
                  <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
                </SheetTitle>

                <SheetDescription>
                  <VisuallyHidden.Root>
                    This is a hidden description for screen readers.
                  </VisuallyHidden.Root>
                </SheetDescription>

                <nav className="grid gap-4 p-4 justify-start ">
                  <NavButtons />
                </nav>
              </SheetContent>
            </Sheet>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default TopMenu
