import React from "react";
import Marker from "./Marker";
import Eraser from "./Eraser";

export default function WhiteboardBottom() {
  return (
    <div className="contact-form-whiteboard-bottom">
      <Eraser />
      <Marker />
    </div>
  );
}
