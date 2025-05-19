import { NavLink } from 'react-router'

export const Nav = () => {
  return (
    <nav style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/select-testing">Select Test</NavLink>
    </nav>
  )
}
