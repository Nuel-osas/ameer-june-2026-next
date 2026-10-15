import type { CSSProperties } from "react";
export default function CursorLayers() {
  return (
    <>
      <div {...{ className: "cd-cover-layer" }}></div>
      <div {...{ id: "magic-cursor" }}>
        <div {...{ id: "ball" }}>
          <div {...{ id: "ball-drag-x" }}></div>
          <div {...{ id: "ball-drag-y" }}></div>
          <div {...{ id: "ball-loader" }}></div>
        </div>
      </div>
      <div {...{ id: "clone-image" }}>
        <div {...{ className: "hero-translate" }}></div>
      </div>
      <div {...{ id: "rotate-device" }}></div>
    </>
  );
}
