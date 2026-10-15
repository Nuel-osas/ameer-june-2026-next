import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function ProjectDanfo() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "dark-content clapat-class-id-175 with-elementor",
              "data-bgcolor": "#0c0c0c",
            }}
          >
            <Navigation
              activePath="/project/danfo/"
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
                            "aria-label": "DáNfó",
                          }}
                        >
                          <span>{"DáNfó"}</span>
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
                            "The Danfo landing page showcases the Afro Typeface by Afrotype, designed with Framer to highlight its bold, African-inspired aesthetic. Drawing on the vibrancy of Lagos, this page pairs smooth animations with a clean design, emphasizing the expressive nature of the typeface. It blends cultural authenticity with modern web technology, making the typography the star of the experience."
                          }
                        </p>
                        <br />
                        <p {...{ className: "bigger no-margins" }}>{"Date"}</p>
                        <p {...{ className: "has-opacity" }}>{"May 2024"}</p>
                        <p {...{ className: "bigger no-margins" }}>
                          {"Technologies"}
                        </p>
                        <p {...{ className: "has-opacity no-margins" }}>
                          {"Framer"}
                        </p>
                        <hr />
                        <p {...{ className: "has-animation" }}>
                          {"[ "}
                          <a
                            {...{
                              className: "link-text",
                              target: "_blank",
                              href: "https://danfo.framer.website/",
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
                            "url(/assets/6c526b97-Group-3-3.png)",
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
                        "data-elementor-id": "175",
                        className: "elementor elementor-175",
                      }}
                    >
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-6ac64d9 light-section row_padding_top_elementor row_padding_bottom_elementor full_elementor inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "6ac64d9",
                          "data-element_type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "content-row-elementor elementor-element elementor-element-817f7a6 e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "817f7a6",
                              "data-element_type": "container",
                            }}
                          ></div>
                          <div
                            {...{
                              className:
                                "content-row-elementor elementor-element elementor-element-c6d3b05 e-con-full light-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "c6d3b05",
                              "data-element_type": "container",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-00099c2 text-align-left port-heading elementor-widget elementor-widget-montoya_heading",
                                "data-id": "00099c2",
                                "data-element_type": "widget",
                                "data-widget_type": "montoya_heading.default",
                              }}
                            >
                              <div
                                {...{ className: "elementor-widget-container" }}
                              >
                                <h1
                                  {...{
                                    className:
                                      "primary-font-title has-mask-fill",
                                    "aria-label":
                                      "Bringing the Spirit of Africa to Typography",
                                  }}
                                >
                                  {
                                    "Bringing the Spirit of Africa to Typography"
                                  }
                                </h1>{" "}
                              </div>
                            </div>
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-88140f3 elementor-widget elementor-widget-text-editor",
                                "data-id": "88140f3",
                                "data-element_type": "widget",
                                "data-widget_type": "text-editor.default",
                              }}
                            >
                              <div
                                {...{ className: "elementor-widget-container" }}
                              >
                                <p>
                                  {
                                    "DANFO IS MORE THAN JUST A TYPEFACE; IT’S A CELEBRATION OF AFRICAN CULTURE, INSPIRED BY THE VIBRANT STREETS OF LAGOS. THIS LANDING PAGE DESIGN EMPHASIZES THE BOLDNESS OF THE AFROTYPE “DANFO” FONT, GIVING USERS A TASTE OF ITS EXPRESSIVE AND ENERGETIC CHARACTER."
                                  }
                                </p>{" "}
                              </div>
                            </div>
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-21d4670 elementor-widget elementor-widget-button",
                                "data-id": "21d4670",
                                "data-element_type": "widget",
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
                                      href: "https://danfo.framer.website/",
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
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-9d42f56 light-section full_elementor inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "9d42f56",
                          "data-element_type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "content-row-elementor elementor-element elementor-element-8f43006 e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "8f43006",
                              "data-element_type": "container",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-9468dbf elementor-widget elementor-widget-montoya_image_popup",
                                "data-id": "9468dbf",
                                "data-element_type": "widget",
                                "data-widget_type":
                                  "montoya_image_popup.default",
                              }}
                            >
                              <div
                                {...{ className: "elementor-widget-container" }}
                              >
                                <div
                                  {...{
                                    className: "vertical-parallax",
                                    "data-startparallax": "0.0",
                                    "data-endparallax": "0.3",
                                  }}
                                >
                                  <figure {...{ className: "" }}>
                                    <a
                                      {...{
                                        href: "/assets/deb51069-927shots_so-1.png",
                                        className: "image-link",
                                      }}
                                    >
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/deb51069-927shots_so-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </a>
                                    <figcaption></figcaption>
                                  </figure>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "content-row-elementor elementor-element elementor-element-0605ec2 e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "0605ec2",
                              "data-element_type": "container",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-8e12035 elementor-widget elementor-widget-montoya_image_popup",
                                "data-id": "8e12035",
                                "data-element_type": "widget",
                                "data-widget_type":
                                  "montoya_image_popup.default",
                              }}
                            >
                              <div
                                {...{ className: "elementor-widget-container" }}
                              >
                                <div
                                  {...{
                                    className: "vertical-parallax",
                                    "data-startparallax": "0.0",
                                    "data-endparallax": "0.15",
                                  }}
                                >
                                  <figure {...{ className: "" }}>
                                    <a
                                      {...{
                                        href: "/assets/ed2adf12-danfo.framer.website_iPhone-12-Pro-1-1.png",
                                        className: "image-link",
                                      }}
                                    >
                                      <img
                                        {...{
                                          decoding: "async",
                                          src: "/assets/ed2adf12-danfo.framer.website_iPhone-12-Pro-1-1.png",
                                          alt: "",
                                        }}
                                      />
                                    </a>
                                    <figcaption></figcaption>
                                  </figure>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-bed6a48 light-section row_padding_bottom_elementor full_elementor inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "bed6a48",
                          "data-element_type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "content-row-elementor elementor-element elementor-element-1cf3aad e-con-full light-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "1cf3aad",
                              "data-element_type": "container",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-fe3a735 text-align-left port-heading elementor-widget elementor-widget-montoya_heading",
                                "data-id": "fe3a735",
                                "data-element_type": "widget",
                                "data-widget_type": "montoya_heading.default",
                              }}
                            >
                              <div
                                {...{ className: "elementor-widget-container" }}
                              >
                                <h1
                                  {...{
                                    className:
                                      "primary-font-title has-mask-fill",
                                    "aria-label": "SEAMLESS FRAMER INTEGRATION",
                                  }}
                                >
                                  {"SEAMLESS FRAMER INTEGRATION"}
                                </h1>{" "}
                              </div>
                            </div>
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-51bee58 elementor-widget elementor-widget-text-editor",
                                "data-id": "51bee58",
                                "data-element_type": "widget",
                                "data-widget_type": "text-editor.default",
                              }}
                            >
                              <div
                                {...{ className: "elementor-widget-container" }}
                              >
                                <p>
                                  {
                                    "BUILT USING FRAMER, THIS LANDING PAGE SHOWCASES THE POWER OF MODERN WEB TOOLS TO DELIVER AN IMMERSIVE EXPERIENCE. THE SMOOTH ANIMATIONS AND INTERACTIVE DESIGN ELEMENTS HIGHLIGHT THE ADAPTABILITY OF THE DANFO TYPEFACE IN DIGITAL ENVIRONMENTS."
                                  }
                                </p>{" "}
                              </div>
                            </div>
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-3e59c75 elementor-widget elementor-widget-button",
                                "data-id": "3e59c75",
                                "data-element_type": "widget",
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
                                      href: "https://danfo.framer.website/",
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
                          <div
                            {...{
                              className:
                                "content-row-elementor elementor-element elementor-element-4ea483d e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "4ea483d",
                              "data-element_type": "container",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-40f2be3 light-section change-header-color full_elementor e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-parent e-lazyloaded",
                          "data-id": "40f2be3",
                          "data-element_type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-6acfa11 content-max-width text-align-center elementor-widget elementor-widget-montoya_image_parallax",
                            "data-id": "6acfa11",
                            "data-element_type": "widget",
                            "data-widget_type":
                              "montoya_image_parallax.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <figure
                              {...{
                                className: "has-parallax has-parallax-content",
                              }}
                            >
                              <img
                                {...{
                                  decoding: "async",
                                  src: "/assets/057f3c9b-danfo.framer.website_-1-1-1.png",
                                  alt: "",
                                }}
                              />
                              <div
                                {...{
                                  className:
                                    "parallax-image-content content-max-width text-align-center",
                                }}
                              >
                                <div {...{ className: "outer" }}>
                                  <div {...{ className: "inner" }}></div>
                                </div>
                              </div>
                            </figure>{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-885ab41 light-section row_padding_top_elementor inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "885ab41",
                          "data-element_type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-7df6d21 port-heading text-align-center elementor-widget elementor-widget-montoya_heading",
                              "data-id": "7df6d21",
                              "data-element_type": "widget",
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
                                    "TYPOGRAPHY THAT SPEAKS VOLUMES",
                                }}
                              >
                                {"TYPOGRAPHY THAT SPEAKS VOLUMES"}
                              </h1>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-c9589a3 elementor-widget elementor-widget-text-editor",
                              "data-id": "c9589a3",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <p>
                                {
                                  "DANFO COMMANDS ATTENTION WITH EVERY LETTER. THIS SECTION EXPLORES HOW THE TYPEFACE COMBINES TRADITIONAL AFRICAN AESTHETICS WITH CONTEMPORARY DESIGN PRINCIPLES, MAKING IT PERFECT FOR BRANDS THAT WANT TO MAKE A BOLD STATEMENT."
                                }
                              </p>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-b2c7e9b elementor-align-center elementor-widget elementor-widget-button",
                              "data-id": "b2c7e9b",
                              "data-element_type": "widget",
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
                                    href: "https://danfo.framer.website/",
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
                            "content-row-elementor elementor-element elementor-element-fd292a2 light-section row_padding_bottom_elementor full_elementor inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "fd292a2",
                          "data-element_type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-ed06c6f elementor-widget elementor-widget-montoya_image_slider",
                              "data-id": "ed06c6f",
                              "data-element_type": "widget",
                              "data-widget_type":
                                "montoya_image_slider.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div
                                {...{
                                  className:
                                    "clapat-slider-wrapper content-slider light-cursor autocenter",
                                }}
                              >
                                <div {...{ className: "clapat-slider" }}>
                                  <div
                                    {...{ className: "clapat-slider-viewport" }}
                                  >
                                    <div {...{ className: "clapat-slide" }}>
                                      <div {...{ className: "slide-img" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/c3fe7c88-danfo.framer.website_-4-1.png",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div {...{ className: "clapat-slide" }}>
                                      <div {...{ className: "slide-img" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/345c7b08-danfo.framer.website_-3-1.png",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div {...{ className: "clapat-slide" }}>
                                      <div {...{ className: "slide-img" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/b9d6ff19-danfo.framer.website_-1-2.png",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div {...{ className: "clapat-controls" }}>
                                  <div
                                    {...{
                                      className:
                                        "clapat-button-next slider-button-next",
                                    }}
                                  ></div>
                                  <div
                                    {...{
                                      className:
                                        "clapat-button-prev slider-button-prev",
                                    }}
                                  ></div>
                                  <div
                                    {...{ className: "clapat-pagination" }}
                                  ></div>
                                </div>
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
                                href: "/project/damfe/",
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
                                  "url(/assets/c63a47c6-Group-2-2.png)",
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
