import Link from 'next/link'

export default function About() { 
    return ( 
    <>
        <h1>Página de About</h1>
        <Link href="/"> 
            <a>Ir para a Home</a> 
        </Link>
    </>
    )
}