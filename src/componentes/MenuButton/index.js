import React from "react";

function MenuButton({ label }) {
  return (
    <a href="#" data-testid={`MENU_BUTTON_ITEM_${label}`}>
      {label}
    </a>
  );
}

export default MenuButton;
