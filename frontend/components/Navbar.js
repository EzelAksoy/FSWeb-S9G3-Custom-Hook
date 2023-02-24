import React from "react";

const Navbar = (props) => {
  const { geceModu, setGeceModu } = props;
  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={geceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
