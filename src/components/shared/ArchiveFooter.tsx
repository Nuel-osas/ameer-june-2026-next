import type { CSSProperties } from "react";
export default function ArchiveFooter({ className }: { className: string }) {
  return (
    <footer {...{ className: "hidden" }}>
      <div {...{ id: "footer-container" }}>
        <button
          {...{
            className: "cp-button-prev clapat-button",
            type: "button",
            "aria-label": "Previous project",
          }}
        >
          <div {...{ className: "icon-wrap-scale" }}>
            <div {...{ className: "icon-wrap parallax-wrap" }}>
              <div {...{ className: "button-icon parallax-element" }}>
                <i {...{ className: "fa-solid fa-arrow-left" }}></i>
              </div>
            </div>
          </div>
          <div {...{ className: "button-text sticky left" }}>
            <span {...{ "data-hover": "PREV" }}>{"PREV"}</span>
          </div>
        </button>
        <div {...{ className: "progress-info fadeout-element" }}>
          <div {...{ className: "progress-info-fill" }}>{"Scroll or Drag"}</div>
          <div {...{ className: "progress-info-fill-2" }}>
            {"Scroll or Drag"}
          </div>
        </div>
        <button
          {...{
            className: "cp-button-next clapat-button",
            type: "button",
            "aria-label": "Next project",
          }}
        >
          <div {...{ className: "icon-wrap-scale" }}>
            <div {...{ className: "icon-wrap parallax-wrap" }}>
              <div {...{ className: "button-icon parallax-element" }}>
                <i {...{ className: "fa-solid fa-arrow-right" }}></i>
              </div>
            </div>
          </div>
          <div {...{ className: "button-text sticky right" }}>
            <span {...{ "data-hover": "NEXT" }}>{"NEXT"}</span>
          </div>
        </button>
      </div>
    </footer>
  );
}
