import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar/>
        <main>
          <Post
          author="Diego Fernandes"
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic harum repellendus fuga dolorem omnis aspernatur illum consectetur quibusdam repellat? Ipsa incidunt impedit dicta suscipit ullam debitis dolore similique ut!'
          />
          <Post
          author="Gabriel Buzzi"
          content='Um novo post muito legal'
          />
        </main>
      </div>
    </div>
  )
}
