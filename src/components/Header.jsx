import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>FORUM</h1>
      </Link>
      <div>
        <NavLink to={"/"}>Gönderiler </NavLink>
        <NavLink to={"/add-post"}>Gönderi Ekle</NavLink>
      </div>
    </header>
  );
};

export default Header;
