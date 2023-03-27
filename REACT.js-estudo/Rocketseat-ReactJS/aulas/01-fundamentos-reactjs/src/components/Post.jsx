import styles from './Post.module.css'

export function Post() {
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src=""/>
                <div className={styles.authorInfo}>
                    <strong>Diego Fernandes</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title="08 de Novembro ás 15h49h" dateTime="2022-11-08 15:49:30">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>   
            <p>Ipsum eos optio, repudiandae officiis sint aliquid itaque.</p> 
            <p>Aut architecto quia praesentium suscipit numquam culpa enim.</p> 
            <p>
                <a href="">#quisquam</a> {' '}
                <a href="">#isteesse</a> {' '}
                <a href="">#laudantium</a> {' '}
                <a href="">#magni</a> {' '}
                <a href="">#eveniet</a>
           </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
            placeholder='Deixe um comentário'
            />

            <button type="submit">Comentar</button>
        </form>
    </article>
    )
}
