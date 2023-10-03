import Link from 'next/link'

export default function NavBar({active}) {

    return (

        <nav className='bg-fuchsia-950 p-8 flex justify-between'>
            <ul className="flex gap-14 text-slate-400 text-sm items-center">
                <li>
                    <Link href='/'>
                        <h1 className='text-slate-100 font-bold text-xl'>RankDat</h1>
                    </Link>
                </li>
                <li><Link className={active == "reviews" && 'text-slate-100'} href='/opiniao'>Reviews</Link></li>
                <li><Link className={active == "jogos" && 'text-slate-100'} href='/jogos'>Jogos</Link></li>
                <li><Link className={active == "contas" && 'text-slate-100'} href='/contas'>Contas</Link></li>
            </ul>

            <div className='h-10 w-10 rounded-full overflow-hidden'>
                <img src='https://i.pravatar.cc/100?img=3' alt='imagem de perfil do usuario' />
            </div>
        </nav>
    )
}