import MenuItem from "./MenuItem";

function Menu() {
  return (
    <nav className="navbar">
      <h1 className="title">TheMenuCompany</h1>
      <ul className="menu">
        <MenuItem label="Home" href="/"/>
        <MenuItem label="About" href="/about/"/>
        <MenuItem label="Blog" href="/blog" target="_blank"/>
      </ul>
    </nav>
  );
}

export default Menu;
