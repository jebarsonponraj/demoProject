

const Nav = ({ NavLinks }) => {
  if (!NavLinks || !NavLinks.NavLinks) {
    // Handle the case where NavLinks is not defined.
    return null; // Or any other appropriate action
  }
  

  return (
    <div data-theme="cupcake" className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{NavLinks.Logo}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {NavLinks.NavLinks.map((link) => (
            <li key={link}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
