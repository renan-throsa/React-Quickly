function MenuItem({ label, href,...rest }) {
  return (
    <li className="menu-item">
      <a className="menu-link" href={href} {...rest}>
        {label}
      </a>      
    </li>
  );
}
export default MenuItem;
