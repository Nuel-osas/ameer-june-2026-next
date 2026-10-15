import type { CSSProperties } from "react";
export default function Preloader() {
  return (
    <div {...{ className: "preloader-wrap", "data-centerline": "Loading" }}>
      <div {...{ className: "outer" }}>
        <div {...{ className: "inner" }}>
          <div {...{ className: "trackbar" }}>
            <div {...{ className: "preloader-intro" }}></div>
            <div {...{ className: "loadbar" }}></div>
            <div {...{ className: "percentage-wrapper" }}>
              <div {...{ className: "percentage", id: "precent" }}></div>
            </div>
          </div>
          <div {...{ className: "percentage-intro" }}>
            {"Get Ready to Experience Greatness 🔥"}
          </div>
        </div>
      </div>
    </div>
  );
}
