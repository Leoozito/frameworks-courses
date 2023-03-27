import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from "next/head"

export default function Layout ({children}) {
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>PokeNext</title>
        </Head>
        <Navbar />
        <main className="main-container">{children}</main> 
        <Footer />
        </>
    )
}
// tag "main indica aonde vai ficar o conteudo principal"
// e aonde for usado esse conteudo (esse layout de navbar e footer, tem que ser acompanhado da propriedade CHILDREN)

//depois de ter colocado a NAVBAR e FOOTER em um componente (LAYOUT), em seguida pega a tag do LAYOUT e insere no "_app.js"