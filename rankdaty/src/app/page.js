import Image from 'next/image'

export default function Home() {
  return (
    <>
      <nav className='bg-fuchsia-950 p-8 flex justify-between'>
        <ul className="flex gap-14 text-slate-400 text-sm items-center">
          <li>
            <a href='#'>
              <h1 className='text-slate-100 font-bold text-xl'>RankDat</h1>
            </a>
          </li>
          <li><a href='#'>Jogos</a></li>
          <li><a href='#'>Contas</a></li>
          <li><a href='#'>Reviews</a></li>
        </ul>

        <div className='h-10 w-10 rounded-full overflow-hidden'>
          <img src='https://i.pravatar.cc/100?img=3' alt='imagem de perfil do usuario' />
        </div>
      </nav>

      <main className='bg-indigo-950 p-11 m-10 rounded-lg'>
        <h2>Reviews</h2>
      </main>
    </>
  )
}
