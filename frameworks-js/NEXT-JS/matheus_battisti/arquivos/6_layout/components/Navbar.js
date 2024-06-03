import Link from 'next/link'

export default function Navbar({children}) {
    return (
      <>
      <div>{children}</div>
        <ul>
          <li>
            <Link href="/products">
              <a>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/about"><a>Ir para about...</a></Link>
          </li>
          <li>
            <Link href="/"><a>Voltar para Home</a></Link>
          </li>
        </ul>
      </>

      )
}