import 'server-only'

import MasterCardList from '@/components/masterCardList'
import EventCardList from '@/components/eventCardList '

// export const experimental_ppr = true

const Home = () => {
  return (
    <div className="font-sans ">
      <main className="flex flex-col">
        <EventCardList />
        <MasterCardList />
      </main>
      <footer className=""></footer>
    </div>
  )
}

export default Home
