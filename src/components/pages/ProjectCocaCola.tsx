import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function ProjectCocaCola() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "light-content clapat-class-id-128 with-elementor",
              "data-bgcolor": "#ee2537",
            }}
          >
            <Navigation
              activePath="/project/coca-cola/"
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
                            "aria-label": "Coca-Cola",
                          }}
                        >
                          <span>{"Coca-Cola"}</span>
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
                            "This Coca-Cola landing page was built using HTML, CSS, JavaScript, AOS Animate on-scroll, and RemixIcon. The design reflects the iconic Coca-Cola brand with smooth scroll animations and clean, modern visuals. The page combines interactive elements and stylish icons to enhance the user experience, showcasing my front-end development skills."
                          }
                        </p>
                        <br />
                        <p {...{ className: "bigger no-margins" }}>{"Date"}</p>
                        <p {...{ className: "has-opacity" }}>
                          {"February 2023"}
                        </p>
                        <p {...{ className: "bigger no-margins" }}>
                          {"Technologies"}
                        </p>
                        <p {...{ className: "has-opacity no-margins" }}>
                          {"HTML, CSS, JAVASCRIPT, AOS & Remixicon"}
                        </p>
                        <hr />
                        <p {...{ className: "has-animation" }}>
                          {"[ "}
                          <a
                            {...{
                              className: "link-text",
                              target: "_blank",
                              href: "https://cocacola-company.netlify.app/",
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
                            "url(/assets/ae90e5df-751shots_so-1-2.png)",
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
                        "data-elementor-id": "128",
                        className: "elementor elementor-128",
                      }}
                    >
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-3dbd050 row_padding_top_elementor row_padding_bottom_elementor light-section change-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "3dbd050",
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
                                "elementor-element elementor-element-1f7edf5 port-heading text-align-center elementor-widget elementor-widget-montoya_heading",
                              "data-id": "1f7edf5",
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
                                    "CELEBRATING THE ICONIC COCA-COLA BRAND",
                                }}
                              >
                                {"CELEBRATING THE ICONIC COCA-COLA BRAND\n"}
                              </h1>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-eaa26f7 text-align-center elementor-widget elementor-widget-html",
                              "data-id": "eaa26f7",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "html.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <p {...{ className: "has-text-align-center" }}>
                                <span {...{ className: "has-opacity" }}>
                                  {
                                    "THIS LANDING PAGE SHOWCASES THE TIMELESS APPEAL OF COCA-COLA, WITH A MODERN"
                                  }
                                </span>
                                <br {...{ className: "destroy" }} />
                                <span {...{ className: "has-opacity" }}>
                                  {
                                    "DESIGN BUILT USING HTML, CSS, AND JAVASCRIPT."
                                  }
                                </span>
                              </p>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-685dc23 elementor-align-center elementor-widget elementor-widget-button",
                              "data-id": "685dc23",
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
                                    href: "https://cocacola-company.netlify.app/",
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
                            "content-row-elementor elementor-element elementor-element-68d2316 light-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "68d2316",
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
                                "elementor-element elementor-element-d9d8c94 elementor-widget elementor-widget-montoya_zoom_gallery",
                              "data-id": "d9d8c94",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type":
                                "montoya_zoom_gallery.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "zoom-gallery" }}>
                                <ul
                                  {...{
                                    className: "zoom-wrapper-gallery",
                                    "data-heightratio": "0.7",
                                  }}
                                >
                                  <li {...{ className: "zoom-center" }}>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/60de44a6-810shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/4c2da68a-761shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/9cd626c0-808shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                </ul>
                                <div
                                  {...{ className: "zoom-wrapper-thumb" }}
                                ></div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-b227c6a row_padding_top_elementor row_padding_bottom_elementor light-section change-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "b227c6a",
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
                                "elementor-element elementor-element-764a080 port-heading text-align-center elementor-widget elementor-widget-montoya_heading",
                              "data-id": "764a080",
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
                                  "aria-label": "SMOOTH ANIMATIONS WITH AOS",
                                }}
                              >
                                {"SMOOTH ANIMATIONS WITH AOS\n"}
                              </h1>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-44e4970 text-align-center elementor-widget elementor-widget-html",
                              "data-id": "44e4970",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "html.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <p {...{ className: "has-text-align-center" }}>
                                <span {...{ className: "has-opacity" }}>
                                  {
                                    "ENHANCED WITH THE AOS ANIMATE-ON-SCROLL LIBRARY, THIS PAGE OFFERS A DYNAMIC"
                                  }
                                </span>
                                <br {...{ className: "destroy" }} />
                                <span {...{ className: "has-opacity" }}>
                                  {"AND ENGAGING USER EXPERIENCE."}
                                </span>
                              </p>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-22e4705 elementor-align-center elementor-widget elementor-widget-button",
                              "data-id": "22e4705",
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
                                    href: "https://cocacola-company.netlify.app/",
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
                            "content-row-elementor elementor-element elementor-element-208c8a0 light-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "208c8a0",
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
                                "elementor-element elementor-element-e2409c8 elementor-widget elementor-widget-montoya_zoom_gallery",
                              "data-id": "e2409c8",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type":
                                "montoya_zoom_gallery.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "zoom-gallery" }}>
                                <ul
                                  {...{
                                    className: "zoom-wrapper-gallery",
                                    "data-heightratio": "0.7",
                                  }}
                                >
                                  <li>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/60de44a6-810shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li {...{ className: "zoom-center" }}>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/4c2da68a-761shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/9cd626c0-808shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                </ul>
                                <div
                                  {...{ className: "zoom-wrapper-thumb" }}
                                ></div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-c44d825 row_padding_top_elementor row_padding_bottom_elementor light-section change-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "c44d825",
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
                                "elementor-element elementor-element-8e49793 port-heading text-align-center elementor-widget elementor-widget-montoya_heading",
                              "data-id": "8e49793",
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
                                  "aria-label": "STYLISH ICONS WITH REMIXICON",
                                }}
                              >
                                {"STYLISH ICONS WITH REMIXICON\n"}
                              </h1>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-d242e53 text-align-center elementor-widget elementor-widget-html",
                              "data-id": "d242e53",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "html.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <p {...{ className: "has-text-align-center" }}>
                                <span {...{ className: "has-opacity" }}>
                                  {
                                    "FEATURING THE REMIXICON ICON LIBRARY, THIS LANDING PAGE USES CLEAN AND STYLISH"
                                  }
                                </span>
                                <br {...{ className: "destroy" }} />
                                <span {...{ className: "has-opacity" }}>
                                  {"ICONS TO COMPLEMENT THE DESIGN."}
                                </span>
                              </p>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-027ffa7 elementor-align-center elementor-widget elementor-widget-button",
                              "data-id": "027ffa7",
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
                                    href: "https://cocacola-company.netlify.app/",
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
                            "content-row-elementor elementor-element elementor-element-3197f4e dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "3197f4e",
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
                                "elementor-element elementor-element-c289713 elementor-widget elementor-widget-montoya_zoom_gallery",
                              "data-id": "c289713",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type":
                                "montoya_zoom_gallery.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "zoom-gallery" }}>
                                <ul
                                  {...{
                                    className: "zoom-wrapper-gallery",
                                    "data-heightratio": "0.7",
                                  }}
                                >
                                  <li>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/60de44a6-810shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/4c2da68a-761shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                  <li {...{ className: "zoom-center" }}>
                                    <div {...{ className: "zoom-img-wrapper" }}>
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/9cd626c0-808shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </div>
                                  </li>
                                </ul>
                                <div
                                  {...{ className: "zoom-wrapper-thumb" }}
                                ></div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div {...{ id: "project-nav", className: "change-header" }}>
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
                                href: "/project/talcube-learn/",
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
                                  "url(/assets/ab68ac4f-Group-40.png)",
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
