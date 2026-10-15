import type { CSSProperties } from "react";
export default function Footer({ className }: { className: string }) {
  return (
    <footer {...{ className: className }}>
      <div {...{ id: "footer-container" }}>
        <div
          {...{
            id: "backtotop",
            className: "button-wrap left",
            role: "button",
            tabIndex: 0,
            "aria-label": "Back to top",
          }}
        >
          <div {...{ className: "icon-wrap parallax-wrap" }}>
            <div {...{ className: "button-icon parallax-element" }}>
              <i {...{ className: "fa-solid fa-angle-up" }}></i>
            </div>
          </div>
          <div {...{ className: "button-text sticky left" }}>
            <span {...{ "data-hover": "Back Top" }}>{"Back Top"}</span>
          </div>
        </div>
        <div {...{ className: "footer-middle" }}>
          <div {...{ className: "copyright" }}>
            {"2025 © "}
            <a
              {...{
                className: "link",
                target: "_blank",
                href: "mailto:me@ameerbamigbayan.com",
                rel: "noopener noreferrer",
              }}
            >
              {"Ameer Bamigbayan"}
            </a>
          </div>
        </div>
        <div {...{ className: "socials-wrap" }}>
          <div {...{ className: "socials-icon" }}>
            <i {...{ className: "fa-solid fa-share-nodes" }}></i>
          </div>
          <div {...{ className: "socials-text" }}>{"Contact Me"}</div>
          <ul {...{ className: "socials" }}>
            <li>
              <span {...{ className: "parallax-wrap" }}>
                <a
                  {...{
                    className: "parallax-element",
                    href: "https://twitter.com/am33r__105",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i {...{ className: "fa-brands fa-x-twitter" }}></i>
                </a>
              </span>
            </li>
            <li>
              <span {...{ className: "parallax-wrap" }}>
                <a
                  {...{
                    className: "parallax-element",
                    href: "https://www.linkedin.com/in/ameerbamigbayan/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i {...{ className: "fa-brands fa-linkedin" }}></i>
                </a>
              </span>
            </li>
            <li>
              <span {...{ className: "parallax-wrap" }}>
                <a
                  {...{
                    className: "parallax-element",
                    href: "https://github.com/AmeerBamigbayan",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i {...{ className: "fa-brands fa-git" }}></i>
                </a>
              </span>
            </li>
            <li>
              <span {...{ className: "parallax-wrap" }}>
                <a
                  {...{
                    className: "parallax-element",
                    href: "https://www.instagram.com/am33r_105/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i {...{ className: "fa-brands fa-instagram" }}></i>
                </a>
              </span>
            </li>
            <li>
              <span {...{ className: "parallax-wrap" }}>
                <a
                  {...{
                    className: "parallax-element",
                    href: "https://www.tiktok.com/@am33r_105",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <i {...{ className: "fa-brands fa-tiktok" }}></i>
                </a>
              </span>
            </li>{" "}
          </ul>
        </div>
      </div>
    </footer>
  );
}
