import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function ProjectHavit() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "light-content clapat-class-id-2762 with-elementor",
              "data-bgcolor": "#000000",
            }}
          >
            <Navigation
              activePath="/project/havit/"
              className="invert-header classic-menu"
            />
            <div {...{ id: "content-scroll" }}>
              <div {...{ id: "main" }}>
                <div {...{ id: "hero", className: "has-image" }}>
                  <div {...{ id: "hero-styles" }}>
                    <div
                      {...{
                        id: "hero-caption",
                        className:
                          "height-title content-full-width text-align-center",
                      }}
                    >
                      <div {...{ className: "inner" }}>
                        <h1
                          {...{
                            className:
                              "hero-title caption-timeline primary-font-title",
                            "aria-label": "Havit",
                          }}
                        >
                          <span>{"Havit"}</span>
                        </h1>
                      </div>
                    </div>
                    <div
                      {...{
                        id: "hero-description",
                        className: "content-full-width",
                      }}
                    >
                      <div {...{ className: "inner" }}>
                        <p {...{ className: "bigger has-opacity" }}>
                          {
                            "This landing page for the Havit i62 headphones was built using HTML, CSS, and JavaScript to showcase the product's immersive sound quality and sleek design. The page is crafted to highlight the key features of the headphones in a clean, modern layout, creating an engaging user experience that reflects the Havit brand’s style and innovation."
                          }
                        </p>
                        <br />
                        <p {...{ className: "bigger no-margins" }}>{"Date"}</p>
                        <p {...{ className: "has-opacity" }}>{"June 2024"}</p>
                        <p {...{ className: "bigger no-margins" }}>
                          {"Technologies"}
                        </p>
                        <p {...{ className: "has-opacity no-margins" }}>
                          {"HTML, CSS & JavaScript"}
                        </p>
                        <hr />
                        <p {...{ className: "has-animation" }}>
                          {"[ "}
                          <a
                            {...{
                              className: "link-text",
                              target: "_blank",
                              href: "https://havit-i62.netlify.app/",
                              rel: "noopener noreferrer",
                            }}
                          >
                            <span
                              {...{
                                className: "link",
                                "data-hover": "View Website",
                              }}
                            >
                              {"View Website"}
                            </span>
                          </a>
                          {" ]"}
                        </p>{" "}
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
                            <span {...{ "data-hover": "Scroll To Explore" }}>
                              {"Scroll To Explore"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div {...{ className: "hero-footer-right" }}>
                        <div
                          {...{
                            id: "share",
                            className: "page-action-content",
                            "data-text": "-",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div {...{ id: "hero-image-wrapper" }}>
                  <div
                    {...{
                      id: "hero-background-layer",
                      className: "parallax-scroll-image",
                    }}
                  >
                    <div
                      {...{ id: "hero-bg-image" }}
                      style={
                        {
                          backgroundImage:
                            "url(/assets/32f693f7-661shots_so-1-1.png)",
                        } as CSSProperties
                      }
                    ></div>
                  </div>
                </div>
                <div {...{ id: "main-content" }}>
                  <div {...{ id: "main-page-content" }}>
                    <div
                      {...{
                        "data-elementor-type": "wp-post",
                        "data-elementor-id": "2762",
                        className: "elementor elementor-2762",
                      }}
                    >
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-27da4a0 light-section change-header-color row_padding_top_elementor row_padding_bottom_elementor full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "27da4a0",
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
                                "elementor-element elementor-element-0514484 port-heading text-align-center elementor-widget elementor-widget-montoya_heading",
                              "data-id": "0514484",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "montoya_heading.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <h1
                                {...{
                                  className: "primary-font-title has-mask-fill",
                                  "aria-label":
                                    "IMMERSIVE SOUND, STYLISH DESIGN",
                                }}
                              >
                                {"IMMERSIVE SOUND, STYLISH DESIGN"}
                              </h1>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-f3a3478 no-margins text-align-center elementor-widget elementor-widget-html",
                              "data-id": "f3a3478",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "html.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <p
                                {...{
                                  className: "has-text-align-center no-margins",
                                }}
                              >
                                <span {...{ className: "has-opacity" }}>
                                  {
                                    "THE HAVIT I62 LANDING PAGE SHOWCASES THE HEADPHONES'"
                                  }
                                </span>
                                <br {...{ className: "destroy" }} />
                                <span {...{ className: "has-opacity" }}>
                                  {"POWERFUL AUDIO AND SLEEK LOOK."}
                                </span>
                              </p>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-0dfced1 elementor-align-center elementor-widget elementor-widget-button",
                              "data-id": "0dfced1",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "button.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{ className: "elementor-button-wrapper" }}
                              >
                                <a
                                  {...{
                                    className:
                                      "elementor-button elementor-button-link elementor-size-sm elementor-animation-grow",
                                    href: "https://havit-i62.netlify.app/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  }}
                                >
                                  <span
                                    {...{
                                      className:
                                        "elementor-button-content-wrapper",
                                    }}
                                  >
                                    <span
                                      {...{
                                        className: "elementor-button-icon",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          "aria-hidden": "true",
                                          className:
                                            "e-font-icon-svg e-fas-arrow-right",
                                          viewBox: "0 0 448 512",
                                          xmlns: "http://www.w3.org/2000/svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
                                          }}
                                        ></path>
                                      </svg>{" "}
                                    </span>
                                    <span
                                      {...{
                                        className: "elementor-button-text",
                                      }}
                                    >
                                      {"View Project"}
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-52b5f8b light-section change-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "52b5f8b",
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
                                "elementor-element elementor-element-8d1ff6f elementor-widget elementor-widget-montoya_reveal_ gallery",
                              "data-id": "8d1ff6f",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type":
                                "montoya_reveal_ gallery.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "reveal-gallery" }}>
                                <div {...{ className: "reveal-img" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/79827da7-847shots_so-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <div {...{ className: "reveal-img-fixed" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/0640143d-837shots_so-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <div {...{ className: "reveal-img" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/3bfa22d3-907shots_so-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div {...{ id: "project-nav", className: "" }}>
                    <div {...{ className: "next-project-wrap" }}>
                      <p {...{ className: "all-works" }}>
                        <a
                          {...{
                            className: "link-text ajax-link",
                            href: "/projects/",
                          }}
                        >
                          <span
                            {...{
                              className: "link",
                              "data-hover": "View All Projects",
                            }}
                          >
                            {"View All Projects"}
                          </span>
                        </a>
                      </p>
                      <div
                        {...{
                          className:
                            "next-project-caption text-align-center content-full-width height-title",
                        }}
                      >
                        <div {...{ className: "next-caption-wrapper" }}>
                          <div {...{ className: "caption-wrapper" }}>
                            <a
                              {...{
                                className: "next-ajax-link-project",
                                href: "/project/wizkid/",
                                "data-firstline": "Next",
                                "data-secondline": "Project",
                              }}
                            ></a>
                            <div {...{ className: "next-caption" }}>
                              <div {...{ className: "next-hero-subtitle" }}>
                                <span></span>
                              </div>
                              <div
                                {...{
                                  className:
                                    "next-hero-title primary-font-title",
                                }}
                              >
                                {"Next Project"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div {...{ className: "next-hero-progress" }}>
                        <span></span>
                      </div>
                      <div {...{ className: "next-project-image-wrapper" }}>
                        <div {...{ className: "next-project-image" }}>
                          <div
                            {...{ className: "next-project-image-bg" }}
                            style={
                              {
                                backgroundImage:
                                  "url(/assets/85d8b51c-5shots_so-1.png)",
                              } as CSSProperties
                            }
                          ></div>
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
