import Logo from '../assets/logo512.png';

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
        <a className="navbar-brand" href="/">
            <div className="d-flex">
                <img src={Logo} alt="logo" className="mr-2"/>
                <div>ProjectMgmt</div>
            </div>
        </a>
    </nav>
  )
}

