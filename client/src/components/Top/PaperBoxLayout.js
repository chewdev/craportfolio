import React from "react";

export default function PaperBoxLayout({ children }) {
  return (
    <div className="box-layout">
      <div className="paper-box">{children}</div>
    </div>
  );
}
