import React from "react";
import Chairs from "./Chairs";
import Table from "./Table";

export default function SkillsTable() {
  return (
    <div className="about-me__chair-table-container">
      <Chairs />
      <Table />
      <Chairs bottom={true} />
    </div>
  );
}
