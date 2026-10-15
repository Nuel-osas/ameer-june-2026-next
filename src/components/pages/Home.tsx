import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function Home() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "light-content clapat-class-id-282 with-elementor",
              "data-bgcolor": "#0c0c0c",
            }}
          >
            <Navigation activePath="/" className="invert-header classic-menu" />
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
                            "aria-label": "Ameer",
                          }}
                        >
                          <span>{"Ameer"}</span>
                        </h1>
                        <div
                          {...{ className: "hero-subtitle caption-timeline" }}
                        >
                          <span>
                            {
                              "Hey! I'm Ameer Bamigbayan, and I’m what you’d call a digital handyman."
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
                        <div {...{ id: "info-text" }}>
                          {"Featured Projects"}
                        </div>
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
                        "data-elementor-id": "282",
                        className: "elementor elementor-282",
                      }}
                    >
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-6127f5b e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-parent e-lazyloaded",
                          "data-id": "6127f5b",
                          "data-element_type": "container",
                          "data-e-type": "container",
                        }}
                      >
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-b8469c5 elementor-widget elementor-widget-montoya_portfolio_overlapping_gallery",
                            "data-id": "b8469c5",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            "data-widget_type":
                              "montoya_portfolio_overlapping_gallery.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <div {...{ id: "itemsWrapperLinks" }}>
                              <div
                                {...{
                                  id: "itemsWrapper",
                                  className: "webgl-fitthumbs fx-one",
                                }}
                              >
                                <div {...{ className: "overlapping-gallery" }}>
                                  <div {...{ className: "overlapping-image" }}>
                                    <div
                                      {...{
                                        className:
                                          "overlapping-image-inner trigger-item",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/kolomoni/",
                                          }}
                                        ></a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              decoding: "async",
                                              src: "/assets/aecd9cfc-kolomoni-2.png",
                                              className:
                                                "item-image grid__item-img",
                                              alt: "",
                                            }}
                                          />
                                          <img
                                            {...{
                                              decoding: "async",
                                              className:
                                                "grid__item-img grid__item-img--large",
                                              src: "/assets/aecd9cfc-kolomoni-2.png",
                                              alt: "",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        {...{
                                          className:
                                            "slide-caption trigger-item-link-secondary",
                                        }}
                                      >
                                        <div
                                          {...{
                                            className:
                                              "slide-title primary-font-title",
                                          }}
                                        >
                                          <span>{"Kolomoni"}</span>
                                        </div>
                                        <div {...{ className: "slide-date" }}>
                                          <span>{"2025"}</span>
                                        </div>
                                        <div {...{ className: "slide-cat" }}>
                                          <span>{"Framer"}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "overlapping-image" }}>
                                    <div
                                      {...{
                                        className:
                                          "overlapping-image-inner trigger-item change-header",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/danfo/",
                                          }}
                                        ></a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              decoding: "async",
                                              src: "/assets/6c526b97-Group-3-3.png",
                                              className:
                                                "item-image grid__item-img",
                                              alt: "",
                                            }}
                                          />
                                          <img
                                            {...{
                                              decoding: "async",
                                              className:
                                                "grid__item-img grid__item-img--large",
                                              src: "/assets/6c526b97-Group-3-3.png",
                                              alt: "",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        {...{
                                          className:
                                            "slide-caption trigger-item-link-secondary",
                                        }}
                                      >
                                        <div
                                          {...{
                                            className:
                                              "slide-title primary-font-title",
                                          }}
                                        >
                                          <span>{"DáNfó"}</span>
                                        </div>
                                        <div {...{ className: "slide-date" }}>
                                          <span>{"2024"}</span>
                                        </div>
                                        <div {...{ className: "slide-cat" }}>
                                          <span>{"Framer"}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "overlapping-image" }}>
                                    <div
                                      {...{
                                        className:
                                          "overlapping-image-inner trigger-item",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/damfe/",
                                          }}
                                        ></a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              decoding: "async",
                                              src: "/assets/c63a47c6-Group-2-2.png",
                                              className:
                                                "item-image grid__item-img",
                                              alt: "",
                                            }}
                                          />
                                          <img
                                            {...{
                                              decoding: "async",
                                              className:
                                                "grid__item-img grid__item-img--large",
                                              src: "/assets/c63a47c6-Group-2-2.png",
                                              alt: "",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        {...{
                                          className:
                                            "slide-caption trigger-item-link-secondary",
                                        }}
                                      >
                                        <div
                                          {...{
                                            className:
                                              "slide-title primary-font-title",
                                          }}
                                        >
                                          <span>{"Damfe Samuel"}</span>
                                        </div>
                                        <div {...{ className: "slide-date" }}>
                                          <span>{"2023"}</span>
                                        </div>
                                        <div {...{ className: "slide-cat" }}>
                                          <span>{"WordPress"}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "overlapping-image" }}>
                                    <div
                                      {...{
                                        className:
                                          "overlapping-image-inner trigger-item",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/the-swamp/",
                                          }}
                                        ></a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              decoding: "async",
                                              src: "/assets/e41e415e-2c8a162f-09fa-4f9b-933d-6d81d20a73b5-1-1.png",
                                              className:
                                                "item-image grid__item-img",
                                              alt: "",
                                            }}
                                          />
                                          <img
                                            {...{
                                              decoding: "async",
                                              className:
                                                "grid__item-img grid__item-img--large",
                                              src: "/assets/e41e415e-2c8a162f-09fa-4f9b-933d-6d81d20a73b5-1-1.png",
                                              alt: "",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        {...{
                                          className:
                                            "slide-caption trigger-item-link-secondary",
                                        }}
                                      >
                                        <div
                                          {...{
                                            className:
                                              "slide-title primary-font-title",
                                          }}
                                        >
                                          <span>{"The Swamp"}</span>
                                        </div>
                                        <div {...{ className: "slide-date" }}>
                                          <span>{"2023"}</span>
                                        </div>
                                        <div {...{ className: "slide-cat" }}>
                                          <span>{"WordPress"}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "overlapping-image" }}>
                                    <div
                                      {...{
                                        className:
                                          "overlapping-image-inner trigger-item",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/coca-cola/",
                                          }}
                                        ></a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              decoding: "async",
                                              src: "/assets/ae90e5df-751shots_so-1-2.png",
                                              className:
                                                "item-image grid__item-img",
                                              alt: "",
                                            }}
                                          />
                                          <img
                                            {...{
                                              decoding: "async",
                                              className:
                                                "grid__item-img grid__item-img--large",
                                              src: "/assets/ae90e5df-751shots_so-1-2.png",
                                              alt: "",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        {...{
                                          className:
                                            "slide-caption trigger-item-link-secondary",
                                        }}
                                      >
                                        <div
                                          {...{
                                            className:
                                              "slide-title primary-font-title",
                                          }}
                                        >
                                          <span>{"Coca-Cola"}</span>
                                        </div>
                                        <div {...{ className: "slide-date" }}>
                                          <span>{"2023"}</span>
                                        </div>
                                        <div {...{ className: "slide-cat" }}>
                                          <span>{"Front-End"}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-3ff0be2 full_elementor dark-section inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "3ff0be2",
                          "data-element_type": "container",
                          "data-e-type": "container",
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-dca6a1b elementor-widget elementor-widget-text-editor",
                              "data-id": "dca6a1b",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "text-editor.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <span {...{ className: "has-opacity" }}>
                                {"CRAFTING WEBSITES WHERE THE ELEGANCE"}
                              </span>
                              <br {...{ className: "destroy" }} />
                              <span {...{ className: "has-opacity" }}>
                                {
                                  "OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS."
                                }
                              </span>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-1e2b686 text-align-center fadeout-element elementor-widget elementor-widget-montoya_button",
                              "data-id": "1e2b686",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "montoya_button.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "button-box" }}>
                                <div
                                  {...{
                                    className:
                                      "clapat-button-wrap parallax-wrap hide-ball",
                                  }}
                                >
                                  <div
                                    {...{
                                      className:
                                        "clapat-button parallax-element",
                                    }}
                                  >
                                    <div
                                      {...{
                                        className:
                                          "button-border parallax-element-second outline rounded",
                                      }}
                                    >
                                      <a
                                        {...{
                                          className: "",
                                          href: "/projects/",
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                        }}
                                      >
                                        <span
                                          {...{
                                            "data-hover": "See More Projects",
                                          }}
                                        >
                                          {"See More Projects"}
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-ca16033 e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-parent e-lazyloaded",
                          "data-id": "ca16033",
                          "data-element_type": "container",
                          "data-e-type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-75b2ad9 elementor-widget elementor-widget-montoya_list_rotator",
                            "data-id": "75b2ad9",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            "data-widget_type": "montoya_list_rotator.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <div {...{ className: "list-rotator-wrapper" }}>
                              <div {...{ className: "list-rotator-title" }}>
                                {"MY SKILLS"}
                              </div>
                              <div {...{ className: "list-rotator-pin" }}>
                                <ul
                                  {...{
                                    className:
                                      "list-rotator primary-font-title",
                                  }}
                                >
                                  <li>{"    Frontend Development"}</li>
                                  <li>{"WordPress"}</li>
                                  <li>{"Framer"}</li>
                                  <li>{"LMS Development"}</li>
                                  <li>{"SHOPIFY"}</li>
                                  <li>{"Content Creation"}</li>
                                  <li>{"SEO Optimization"}</li>
                                </ul>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-1e856ce e-grid dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "1e856ce",
                          "data-element_type": "container",
                          "data-e-type": "container",
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-4d98089 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "4d98089",
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
                                "elementor-element elementor-element-5e20ba1 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "5e20ba1",
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
                                "elementor-element elementor-element-e3b67c4 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box",
                              "data-id": "e3b67c4",
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
                              {"DISCOVER THE STORY BEHIND THE CREATOR"}
                            </span>
                          </div>
                          <a
                            {...{
                              className: "page-title next-ajax-link-page",
                              href: "/about-me/",
                              "data-centerline": "About Me",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "next-hero-title primary-font-title caption-timeline",
                              }}
                            >
                              <span>{"Who is Ameer?"}</span>
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
