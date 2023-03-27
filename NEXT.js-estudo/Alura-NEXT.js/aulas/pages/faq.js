import { useEffect, useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
// export async function getStaticProps() {
    console.log('Em modo DEV, seprem roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
export async function getStaticProps(context) {
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
        const faq = await fetch (FAQ_API_URL)
        .then((respostaDoServdor) => {
            return respostaDoServdor.json();
        })
        .then((resposta) => {
            return resposta
        });

    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq,
        }
    }
}
//  SSG é a entrega rápida de conteúdos estáticos, então ele é a melhor estratégia para a página inicial. O SSR, você poderá construir um painel de controle personalizado e atualizado para cada requisição.

export default function FAQPage({ faq }) {
    // const [faq, setFaq] = useState ([])
    // useEffect (() => {
    // }, [])

    return (
        <div>
            <Head>
            <title>FAQ - Alura Cases Campanha</title>
            </Head>
            
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                <li key={question}>
                    <article>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </article>
                </li>
                ))}
            </ul>
        </div>
    )
}