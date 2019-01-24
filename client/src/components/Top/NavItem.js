import React from "react";

export default function NavItem({
  headerTitleClasses,
  headerTapeType,
  hasIcon,
  iconClasses,
  text,
  href
}) {
  return (
    <a href={href} className={headerTitleClasses}>
      <div className={headerTapeType} />
      <div className="header__title-div">
        {hasIcon ? <i className={iconClasses} /> : text}
      </div>
    </a>
  );
}
