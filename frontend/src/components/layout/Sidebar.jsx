return (
  <div
    className={`sidebar ${
      mobile
        ? open
          ? "sidebar-open"
          : "sidebar-close"
        : ""
    }`}
  >
    <div className="logo">
      IntelliLibrary
    </div>

    <div className="menu">
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="menu-item"
        >
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  </div>
);