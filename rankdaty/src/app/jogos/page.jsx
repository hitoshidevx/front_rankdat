import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Link from "next/link"
import { SparklesIcon } from '@heroicons/react/24/solid'


export default function Jogos() {
  return (
    <>
      <NavBar active={"jogos"} />

      <main className='bg-indigo-950 p-11 m-10 rounded-lg'>
        <h2 className='text-2x1 font-bold'>Jogos</h2>

        <div id="data">
          <div id="data-row" className='flex justify-between hover:bg-slate-700'>
            <div className='flex gap-1'>
              <span>Jogo</span>
              <SparklesIcon className="h-6 w-6 text-blue-500" />
            </div>
            <span>Descrição</span>
            <span>Data</span>
            <span>Valor</span>
          </div>
        </div>

      </main>
    </>
  )
}
