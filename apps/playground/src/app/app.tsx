import styles from './app.module.css'
import { Outlet } from 'react-router'
import { Nav } from '../components/Nav'

export function App() {
  return (
    <div className={styles.container}>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App
