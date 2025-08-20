function Nav({ logo }) {
  return (
    <div className="nav-con">
      <nav className="nav">
        <p>
          <b>{logo}</b>
        </p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
