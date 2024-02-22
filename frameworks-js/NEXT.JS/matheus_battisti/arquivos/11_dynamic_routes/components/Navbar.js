import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar({children}) {
    return (
      <>
      <div>{children}</div>
        <ul className={styles.navbar}>
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
          <li>
            <Link href="/products/cap"><a>Ir para área de boné</a></Link>
          </li>
          <li>
            <Link href="/contact"><a>Contato</a></Link>
          </li>
          <li>
            <Link href="/todos"><a>Todos</a></Link>
          </li>
        </ul>
      </>
      )
}