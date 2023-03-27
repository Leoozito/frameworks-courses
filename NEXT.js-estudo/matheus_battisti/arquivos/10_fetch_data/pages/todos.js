import styles from '../styles/Todos.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    // console.log(todos)

    return {
        props: {todos}
    }
}

export default function Todos({todos}) {
    return (
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todolist}>
                {todos.map /*para passar porcada um dos TO DOS*/((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
    
}