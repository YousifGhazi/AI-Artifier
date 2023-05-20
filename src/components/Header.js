import Link from "next/link";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          <img className="logo" src="/logo.svg" alt="logo" />
        </Link>
        <nav className="nav-bar">
          <Link href="/create-image" className="create-image btn">
            Create
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
