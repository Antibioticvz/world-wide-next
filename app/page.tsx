import 'server-only'

import MasterCardList from '@/components/masterCardList'

// export const experimental_ppr = true

const Home = () => {
  return (
    <div className="font-sans ">
      <main className="flex flex-col">
        <h1 className="text-3xl font-bold sm:text-5xl">World Wide Hello</h1>

        <MasterCardList />
      </main>
      <footer className=""></footer>
    </div>
  )
}

export default Home
