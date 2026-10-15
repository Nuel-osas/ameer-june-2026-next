import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function Contact() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "light-content clapat-class-id-192 with-elementor",
              "data-bgcolor": "#0c0c0c",
            }}
          >
            <Navigation
              activePath="/contact/"
              className="invert-header classic-menu"
            />
            <div {...{ id: "content-scroll" }}>
              <div {...{ id: "main" }}>
                <div {...{ id: "hero" }}>
                  <div {...{ id: "hero-styles" }}>
                    <div
                      {...{
                        id: "hero-caption",
                        className:
                          "height-title content-full-width text-align-center parallax-scroll-caption",
                      }}
                    >
                      <div {...{ className: "inner" }}>
                        <h1
                          {...{
                            className:
                              "hero-title caption-timeline primary-font-title",
                            "aria-label": "Contact",
                          }}
                        >
                          <span>{"Contact"}</span>
                        </h1>
                        <div
                          {...{ className: "hero-subtitle caption-timeline" }}
                        >
                          <span>
                            {
                              "Impressed by my work? Let’s connect and bring your ideas to life!"
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                    <div {...{ id: "hero-footer" }}>
                      <div {...{ className: "hero-footer-left" }}>
                        <div
                          {...{
                            className: "button-wrap right scroll-down",
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "Explore content",
                          }}
                        >
                          <div {...{ className: "icon-wrap parallax-wrap" }}>
                            <div
                              {...{ className: "button-icon parallax-element" }}
                            >
                              <i
                                {...{ className: "fa-solid fa-angle-down" }}
                              ></i>
                            </div>
                          </div>
                          <div {...{ className: "button-text sticky right" }}>
                            <span {...{ "data-hover": "Scroll to Explore" }}>
                              {"Scroll to Explore"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div {...{ className: "hero-footer-right" }}>
                        <div {...{ id: "info-text" }}>{"Let's Connect"}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div {...{ id: "main-content" }}>
                  <div
                    {...{
                      id: "main-page-content",
                      className: "content-max-width",
                    }}
                  >
                    <div
                      {...{
                        "data-elementor-type": "wp-page",
                        "data-elementor-id": "192",
                        className: "elementor elementor-192",
                      }}
                    >
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-ba19667 row_padding_top_elementor row_padding_bottom_elementor full_elementor dark-section inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "ba19667",
                          "data-element_type": "container",
                          "data-e-type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-4f78187 text-align-left elementor-widget elementor-widget-montoya_heading",
                              "data-id": "4f78187",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "montoya_heading.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <h2
                                {...{
                                  className:
                                    "big-title has-mask-fill primary-font-title",
                                }}
                              >
                                {"Let's Talk"}
                              </h2>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-2e254ed elementor-widget elementor-widget-spacer",
                              "data-id": "2e254ed",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "spacer.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "elementor-spacer" }}>
                                <div
                                  {...{ className: "elementor-spacer-inner" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-37dbc92 elementor-widget elementor-widget-shortcode",
                              "data-id": "37dbc92",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "shortcode.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "elementor-shortcode" }}>
                                <div
                                  {...{
                                    className: "wpcf7 no-js",
                                    id: "wpcf7-f6-p192-o1",
                                    lang: "en-US",
                                    dir: "ltr",
                                    "data-wpcf7-id": "6",
                                  }}
                                >
                                  <form
                                    {...{
                                      className: "wpcf7-form init",
                                      "aria-label": "Contact form",
                                      "data-status": "init",
                                    }}
                                  >
                                    <p>
                                      <label>
                                        {" Your name"}
                                        <br />
                                        <span
                                          {...{
                                            className:
                                              "wpcf7-form-control-wrap",
                                            "data-name": "your-name",
                                          }}
                                        >
                                          <input
                                            {...{
                                              size: 40,
                                              maxLength: 400,
                                              className:
                                                "wpcf7-form-control wpcf7-text wpcf7-validates-as-required",
                                              autoComplete: "name",
                                              "aria-required": "true",
                                              defaultValue: "",
                                              type: "text",
                                              name: "your-name",
                                              required: true,
                                            }}
                                          />
                                        </span>{" "}
                                      </label>
                                    </p>
                                    <p>
                                      <label>
                                        {" Your email"}
                                        <br />
                                        <span
                                          {...{
                                            className:
                                              "wpcf7-form-control-wrap",
                                            "data-name": "your-email",
                                          }}
                                        >
                                          <input
                                            {...{
                                              size: 40,
                                              maxLength: 400,
                                              className:
                                                "wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email",
                                              autoComplete: "email",
                                              "aria-required": "true",
                                              defaultValue: "",
                                              type: "email",
                                              name: "your-email",
                                              required: true,
                                            }}
                                          />
                                        </span>{" "}
                                      </label>
                                    </p>
                                    <p>
                                      <label>
                                        {" Subject"}
                                        <br />
                                        <span
                                          {...{
                                            className:
                                              "wpcf7-form-control-wrap",
                                            "data-name": "your-subject",
                                          }}
                                        >
                                          <input
                                            {...{
                                              size: 40,
                                              maxLength: 400,
                                              className:
                                                "wpcf7-form-control wpcf7-text wpcf7-validates-as-required",
                                              "aria-required": "true",
                                              defaultValue: "",
                                              type: "text",
                                              name: "your-subject",
                                              required: true,
                                            }}
                                          />
                                        </span>{" "}
                                      </label>
                                    </p>
                                    <p>
                                      <label>
                                        {" Your message"}
                                        <br />
                                        <span
                                          {...{
                                            className:
                                              "wpcf7-form-control-wrap",
                                            "data-name": "your-message",
                                          }}
                                        >
                                          <textarea
                                            {...{
                                              cols: 40,
                                              rows: 10,
                                              maxLength: 2000,
                                              className:
                                                "wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required",
                                              "aria-required": "true",
                                              name: "your-message",
                                              required: true,
                                            }}
                                          ></textarea>
                                        </span>{" "}
                                      </label>
                                    </p>
                                    <p>
                                      <input
                                        {...{
                                          className:
                                            "wpcf7-form-control wpcf7-submit has-spinner",
                                          type: "submit",
                                          defaultValue: "Submit",
                                        }}
                                      />
                                    </p>
                                    <div
                                      {...{
                                        className: "wpcf7-response-output",
                                        "aria-hidden": "true",
                                      }}
                                    ></div>
                                    <p
                                      {...{
                                        className: "archive-form-note",
                                        role: "status",
                                        "aria-live": "polite",
                                      }}
                                    >
                                      {
                                        "This archived contact form is not connected to a mail service."
                                      }
                                    </p>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-6b32b3e e-grid dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "6b32b3e",
                          "data-element_type": "container",
                          "data-e-type": "container",
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-2b8e261 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "2b8e261",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "icon-box.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{ className: "elementor-icon-box-wrapper" }}
                              >
                                <div
                                  {...{ className: "elementor-icon-box-icon" }}
                                >
                                  <a
                                    {...{
                                      href: "mailto:me@ameerbamigbayan.com",
                                      target: "_blank",
                                      className: "elementor-icon",
                                      tabIndex: -1,
                                      "aria-label": "me@ameerbamigbayan.com",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        "aria-hidden": "true",
                                        className:
                                          "e-font-icon-svg e-far-paper-plane",
                                        viewBox: "0 0 512 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z",
                                        }}
                                      ></path>
                                    </svg>{" "}
                                  </a>
                                </div>
                                <div
                                  {...{
                                    className: "elementor-icon-box-content",
                                  }}
                                >
                                  <h6
                                    {...{
                                      className: "elementor-icon-box-title",
                                    }}
                                  >
                                    <a
                                      {...{
                                        href: "mailto:me@ameerbamigbayan.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      {
                                        "\n\t\t\t\t\t\t\tme@ameerbamigbayan.com\t\t\t\t\t\t"
                                      }
                                    </a>
                                  </h6>
                                  <p
                                    {...{
                                      className:
                                        "elementor-icon-box-description",
                                    }}
                                  >
                                    {"\n\t\t\t\t\t\tEmail\t\t\t\t\t"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-618ac2f elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "618ac2f",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "icon-box.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{ className: "elementor-icon-box-wrapper" }}
                              >
                                <div
                                  {...{ className: "elementor-icon-box-icon" }}
                                >
                                  <a
                                    {...{
                                      href: "https://twitter.com/am33r__105",
                                      target: "_blank",
                                      className: "elementor-icon",
                                      tabIndex: -1,
                                      "aria-label": "am33r__105",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        "aria-hidden": "true",
                                        className:
                                          "e-font-icon-svg e-fab-x-twitter",
                                        viewBox: "0 0 512 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
                                        }}
                                      ></path>
                                    </svg>{" "}
                                  </a>
                                </div>
                                <div
                                  {...{
                                    className: "elementor-icon-box-content",
                                  }}
                                >
                                  <h6
                                    {...{
                                      className: "elementor-icon-box-title",
                                    }}
                                  >
                                    <a
                                      {...{
                                        href: "https://twitter.com/am33r__105",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      {"\n\t\t\t\t\t\t\tam33r__105\t\t\t\t\t\t"}
                                    </a>
                                  </h6>
                                  <p
                                    {...{
                                      className:
                                        "elementor-icon-box-description",
                                    }}
                                  >
                                    {"\n\t\t\t\t\t\tX (Twitter)\t\t\t\t\t"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-ea9ba9f elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "ea9ba9f",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "icon-box.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{ className: "elementor-icon-box-wrapper" }}
                              >
                                <div
                                  {...{ className: "elementor-icon-box-icon" }}
                                >
                                  <a
                                    {...{
                                      href: "https://github.com/AmeerBamigbayan",
                                      target: "_blank",
                                      className: "elementor-icon",
                                      tabIndex: -1,
                                      "aria-label": "Ameer Bamigbayan",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        "aria-hidden": "true",
                                        className:
                                          "e-font-icon-svg e-fab-github",
                                        viewBox: "0 0 496 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
                                        }}
                                      ></path>
                                    </svg>{" "}
                                  </a>
                                </div>
                                <div
                                  {...{
                                    className: "elementor-icon-box-content",
                                  }}
                                >
                                  <h6
                                    {...{
                                      className: "elementor-icon-box-title",
                                    }}
                                  >
                                    <a
                                      {...{
                                        href: "https://github.com/AmeerBamigbayan",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      {
                                        "\n\t\t\t\t\t\t\tAmeer Bamigbayan\t\t\t\t\t\t"
                                      }
                                    </a>
                                  </h6>
                                  <p
                                    {...{
                                      className:
                                        "elementor-icon-box-description",
                                    }}
                                  >
                                    {"\n\t\t\t\t\t\tGithub\t\t\t\t\t"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-c15b3e0 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "c15b3e0",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "icon-box.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{ className: "elementor-icon-box-wrapper" }}
                              >
                                <div
                                  {...{ className: "elementor-icon-box-icon" }}
                                >
                                  <a
                                    {...{
                                      href: "https://www.linkedin.com/in/ameerbamigbayan/",
                                      target: "_blank",
                                      className: "elementor-icon",
                                      tabIndex: -1,
                                      "aria-label": "Ameer Bamigbayan",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        "aria-hidden": "true",
                                        className:
                                          "e-font-icon-svg e-fab-linkedin-in",
                                        viewBox: "0 0 448 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
                                        }}
                                      ></path>
                                    </svg>{" "}
                                  </a>
                                </div>
                                <div
                                  {...{
                                    className: "elementor-icon-box-content",
                                  }}
                                >
                                  <h6
                                    {...{
                                      className: "elementor-icon-box-title",
                                    }}
                                  >
                                    <a
                                      {...{
                                        href: "https://www.linkedin.com/in/ameerbamigbayan/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      {
                                        "\n\t\t\t\t\t\t\tAmeer Bamigbayan\t\t\t\t\t\t"
                                      }
                                    </a>
                                  </h6>
                                  <p
                                    {...{
                                      className:
                                        "elementor-icon-box-description",
                                    }}
                                  >
                                    {"\n\t\t\t\t\t\tLinkedIn\t\t\t\t\t"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-4f82dec elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "4f82dec",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "icon-box.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{ className: "elementor-icon-box-wrapper" }}
                              >
                                <div
                                  {...{ className: "elementor-icon-box-icon" }}
                                >
                                  <a
                                    {...{
                                      href: "https://www.tiktok.com/@am33r_105",
                                      target: "_blank",
                                      className: "elementor-icon",
                                      tabIndex: -1,
                                      "aria-label": "am33r_105",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        "aria-hidden": "true",
                                        className:
                                          "e-font-icon-svg e-fab-tiktok",
                                        viewBox: "0 0 448 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
                                        }}
                                      ></path>
                                    </svg>{" "}
                                  </a>
                                </div>
                                <div
                                  {...{
                                    className: "elementor-icon-box-content",
                                  }}
                                >
                                  <h6
                                    {...{
                                      className: "elementor-icon-box-title",
                                    }}
                                  >
                                    <a
                                      {...{
                                        href: "https://www.tiktok.com/@am33r_105",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      {"\n\t\t\t\t\t\t\tam33r_105\t\t\t\t\t\t"}
                                    </a>
                                  </h6>
                                  <p
                                    {...{
                                      className:
                                        "elementor-icon-box-description",
                                    }}
                                  >
                                    {"\n\t\t\t\t\t\tTikTok\t\t\t\t\t"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-16e2104 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "16e2104",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "icon-box.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{ className: "elementor-icon-box-wrapper" }}
                              >
                                <div
                                  {...{ className: "elementor-icon-box-icon" }}
                                >
                                  <a
                                    {...{
                                      href: "https://www.instagram.com/am33r_105/",
                                      target: "_blank",
                                      className: "elementor-icon",
                                      tabIndex: -1,
                                      "aria-label": "am33r_105",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        "aria-hidden": "true",
                                        className:
                                          "e-font-icon-svg e-fab-instagram",
                                        viewBox: "0 0 448 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
                                        }}
                                      ></path>
                                    </svg>{" "}
                                  </a>
                                </div>
                                <div
                                  {...{
                                    className: "elementor-icon-box-content",
                                  }}
                                >
                                  <h6
                                    {...{
                                      className: "elementor-icon-box-title",
                                    }}
                                  >
                                    <a
                                      {...{
                                        href: "https://www.instagram.com/am33r_105/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      {"\n\t\t\t\t\t\t\tam33r_105\t\t\t\t\t\t"}
                                    </a>
                                  </h6>
                                  <p
                                    {...{
                                      className:
                                        "elementor-icon-box-description",
                                    }}
                                  >
                                    {"\n\t\t\t\t\t\tInstagram\t\t\t\t\t"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div {...{ id: "page-nav" }}>
                    <div {...{ className: "page-nav-wrap" }}>
                      <div
                        {...{
                          className:
                            "page-nav-caption height-title content-full-width text-align-center",
                        }}
                      >
                        <div {...{ className: "inner" }}>
                          <div
                            {...{
                              className: "next-hero-subtitle caption-timeline",
                            }}
                          >
                            <span>
                              {"INTERESTED TO EXPLORE MORE OF MY WORK?"}
                            </span>
                          </div>
                          <a
                            {...{
                              className: "page-title next-ajax-link-page",
                              href: "/projects/",
                              "data-centerline": "Explore",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "next-hero-title primary-font-title caption-timeline",
                              }}
                            >
                              <span>{"Projects"}</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer className="hidden" />
            </div>
            <div {...{ id: "app" }}></div>
          </div>
        </div>
      </main>
      <CursorLayers />
    </>
  );
}
