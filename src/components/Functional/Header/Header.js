import React from "react";
import InlineEdit from "../InlineEdit/InlineEdit";
import "./Header.scss";

export default function Header({
  heading,
  description,
  onHeaderUpdate,
  onDescriptionUpdate,
}) {
  return (
    <div className={"header-container"}>
      <InlineEdit
        value={heading}
        className={"header-heading"}
        placeholder={"Enter Title"}
        onUpdate={onHeaderUpdate}
      />
      <InlineEdit
        value={description}
        className={"header-description"}
        placeholder={"Enter Description"}
        onUpdate={onDescriptionUpdate}
      />
    </div>
  );
}
