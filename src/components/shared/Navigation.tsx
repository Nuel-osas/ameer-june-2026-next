import type { CSSProperties } from "react";
import Menu from "./Menu";
export default function Navigation({
  activePath,
  className,
}: {
  activePath: string;
  className: string;
}) {
  return (
    <header {...{ className: className, "data-menucolor": "#0c0c0c" }}>
      <div {...{ id: "header-container" }}>
        <div {...{ id: "logo", className: "hide-ball" }}>
          <a
            {...{
              className: "ajax-link",
              href: "/",
              "aria-label": "Ameer home",
            }}
          >
            <img
              {...{
                className: "black-logo",
                src: "/assets/fcce94cc-Word-Mark-03-1.png",
                alt: "Logo Black",
              }}
            />
            <img
              {...{
                className: "white-logo",
                src: "/assets/f0de1c5c-Word-Mark-01-1.png",
                alt: "Logo White",
              }}
            />
          </a>
        </div>
        <Menu activePath={activePath} />{" "}
        <div {...{ className: "button-wrap right menu burger-lines" }}>
          <div {...{ className: "icon-wrap parallax-wrap" }}>
            <div {...{ className: "button-icon parallax-element" }}>
              <button
                {...{
                  id: "burger-wrapper",
                  type: "button",
                  "aria-label": "Open menu",
                  "aria-expanded": "false",
                  "aria-controls": "menu-main-menu",
                }}
              >
                <div {...{ id: "menu-burger" }}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
          <div {...{ className: "button-text sticky right" }}>
            <span {...{ "data-hover": "Menu" }}>{"Menu"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
