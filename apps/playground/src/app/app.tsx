import { Link, Outlet } from 'react-router'

export function App() {
  return (
    <>
      Header
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/form">HtmlForm</Link>
        {" | "}
        <Link to="/aria-form">AriaForm</Link>
        {" | "}
        <Link to="/react-hook-form">ReactHookForm</Link>
      </nav>

      <Outlet />
      <div style={{width: '100%', height: '3rem', bottom: 0, position: 'absolute'}}>footer</div>
    </>
  )
}

export default App
