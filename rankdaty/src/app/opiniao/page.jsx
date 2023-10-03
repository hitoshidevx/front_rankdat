  import NavBar from '@/components/NavBar'
  import Image from 'next/image'
  import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
  import Review from './Review'

  async function getReviews() {
    const url = "http://localhost:8080/api/reviews"
    const result = await fetch(url, { next: { revalidate: 3600 }})

    if(!result.ok) {
      throw Error("Não deu para carregar as reviews amigo :(")
    }

    return result.json()
  }

  export default async function Reviews() {
    
    const data = await getReviews()

    return (
      <>
        <NavBar active={"reviews"} />
        <main className='bg-indigo-950 p-11 m-10 rounded-lg'>
          <div className='flex justify-between  my-5'>
            <h2 className='text-2x1 font-bold'>Reviews</h2>
            <h2 className='text-2x1 font-bold'>Descrição</h2>
            <a href="/opiniao/new" className='bg-purple-600 py-2 px-2 rounded hover:bg-purple-900'>
              criar review
            </a>
          </div>
          {data.map((review) => {
            return <Review review={review} />
          })}

        </main>
      </>
    )
  }
