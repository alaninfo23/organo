/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuButton from "../MenuButton";
import "./Menu.css";

function MenuList({ buttons }) {
  const renderedButtons = buttons.map((button) => (
    <li><MenuButton key={button} label={button} /></li>
  ));

  return (
    <div
    data-testid='MENU_LIST'
    className="menu">
      <ul>
        {renderedButtons}
      </ul>
    </div>
  );
}

export default MenuList;
