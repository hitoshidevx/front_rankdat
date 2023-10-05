import NavBar from '@/components/NavBar'
import Image from 'next/image'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import ButtonLink from '@/components/ButtonLink'


export default function Home() {
  return (
    <>
      <NavBar active={"reviews"} />

      <main className='bg-indigo-950 p-11 m-10 rounded-lg'>
        <h2 className='text-2x1 font-bold mb-10'>Clique no botão abaixo!</h2>
        <ButtonLink variante='secundary' href='/opiniao'>Minhas Reviews</ButtonLink>
      </main>
    </>
  )
}
