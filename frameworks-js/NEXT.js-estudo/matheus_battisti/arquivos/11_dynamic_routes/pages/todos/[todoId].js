import Link from "next/link"
import {useRouter} from 'next/router'

export default function Todo() {

    const router = useRouter()

    const todoId = router.query.todoId

    return (
        <>
        <Link href= "/">
            <a>Voltar</a>
        </Link>
        <h1>Exibindo o todo: {todoId}</h1>
        <p>Cometário: la la la... 
            <Link href={`/todos/${todoId}/comments/1`}>
                <a>Detalhes</a>
            </Link>
        </p>
        <p>Cometário: le le le... 
            <Link href={`/todos/${todoId}/comments/1`}>
                <a>Detalhes</a>
            </Link>
        </p>
        <p>Cometário: li li li... 
            <Link href={`/todos/${todoId}/comments/1`}>
                <a>Detalhes</a>
            </Link>
        </p>
        </>
    )
}