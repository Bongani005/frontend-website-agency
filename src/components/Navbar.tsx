import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Magera Agency home">
        <img src="/magera-logo.png" alt="Magera Agency" />
      </Link>
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'active' : ''}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}