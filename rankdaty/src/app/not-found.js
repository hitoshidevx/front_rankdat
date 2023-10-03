import Link from 'next/link'

export default function NotFound() {

    return(
        <div>
            <h1>Ops... 404. A página não foi encontrada!</h1>
            <Link href="/">Voltar para Home</Link>
        </div>
    )
}