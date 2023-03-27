import styles from '../../styles/Todos.module.css'
import Link from 'next/link'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    // console.log(todos)

    return {
        props: {todos}
    }
}
//se usa o getStaticProps para depois retornar com Props o sitens que a gente quer exibir da URL colocada
export default function Todos({todos}) {
    return (
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} - {" "} 
                        <Link href={`/todos/{todo.id}`}>
                            <a>Ver mais</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
    
}