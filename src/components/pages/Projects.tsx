import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function Projects() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "dark-content clapat-class-id-251 with-elementor",
              "data-bgcolor": "#f9f9f9",
            }}
          >
            <Navigation
              activePath="/projects/"
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
                            "aria-label": "Projects",
                          }}
                        >
                          <span>{"Projects"}</span>
                        </h1>
                        <div
                          {...{ className: "hero-subtitle caption-timeline" }}
                        >
                          <span>
                            {
                              "Explore projects that highlight my skills and creativity in crafting digital solutions."
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                    <div {...{ id: "hero-footer", className: "has-border" }}>
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
                        <div {...{ className: "filters-options-wrapper" }}>
                          <a
                            {...{
                              id: "all",
                              href: "#",
                              "data-filter": "",
                              className: "filter-option is_active",
                            }}
                          >
                            <span
                              {...{ className: "link", "data-hover": "All" }}
                            >
                              {"\n\t\t\t\t\t\t\t\t\t\tAll\t\t\t\t\t\t\t\t\t"}
                            </span>
                          </a>
                          <a
                            {...{
                              className: "filter-option",
                              href: "#",
                              "data-filter": "framer",
                            }}
                          >
                            <span
                              {...{ className: "link", "data-hover": "Framer" }}
                            >
                              {"\n\t\t\t\t\t\t\t\t\t\tFramer\t\t\t\t\t\t\t\t\t"}
                            </span>
                          </a>
                          <a
                            {...{
                              className: "filter-option",
                              href: "#",
                              "data-filter": "front-end",
                            }}
                          >
                            <span
                              {...{
                                className: "link",
                                "data-hover": "Front-End",
                              }}
                            >
                              {
                                "\n\t\t\t\t\t\t\t\t\t\tFront-End\t\t\t\t\t\t\t\t\t"
                              }
                            </span>
                          </a>
                          <a
                            {...{
                              className: "filter-option",
                              href: "#",
                              "data-filter": "wordpress",
                            }}
                          >
                            <span
                              {...{
                                className: "link",
                                "data-hover": "WordPress",
                              }}
                            >
                              {
                                "\n\t\t\t\t\t\t\t\t\t\tWordPress\t\t\t\t\t\t\t\t\t"
                              }
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div {...{ id: "main-content" }}>
                  <div {...{ id: "main-page-content" }}>
                    <div {...{ id: "itemsWrapperLinks" }}>
                      <div
                        {...{
                          id: "itemsWrapper",
                          className: "webgl-fitthumbs fx-one",
                        }}
                      >
                        <div {...{ className: "showcase-portfolio" }}>
                          <div {...{ className: "clapat-item framer " }}>
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#ff7a01",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
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
                                      src: "/assets/aecd9cfc-kolomoni-2.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/aecd9cfc-kolomoni-2.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
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
                          <div
                            {...{
                              className:
                                "clapat-item vertical-parallax framer ",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "slide-inner trigger-item change-header",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#0c0c0c",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
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
                                      src: "/assets/6c526b97-Group-3-3.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/6c526b97-Group-3-3.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
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
                          <div {...{ className: "clapat-item wordpress " }}>
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#0c0c0c",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
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
                                      src: "/assets/c63a47c6-Group-2-2.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/c63a47c6-Group-2-2.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
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
                          <div
                            {...{
                              className:
                                "clapat-item vertical-parallax wordpress ",
                            }}
                          >
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#7f4c2c",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
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
                                      src: "/assets/e41e415e-2c8a162f-09fa-4f9b-933d-6d81d20a73b5-1-1.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/e41e415e-2c8a162f-09fa-4f9b-933d-6d81d20a73b5-1-1.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
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
                          <div {...{ className: "clapat-item front-end " }}>
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#0c0c0c",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
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
                                      src: "/assets/ae90e5df-751shots_so-1-2.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/ae90e5df-751shots_so-1-2.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
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
                          <div {...{ className: "clapat-item wordpress " }}>
                            <div
                              {...{
                                className:
                                  "slide-inner trigger-item change-header",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#f5f5f5",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
                                <a
                                  {...{
                                    className: "slide-link",
                                    href: "/project/talcube-learn/",
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
                                      src: "/assets/ab68ac4f-Group-40.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/ab68ac4f-Group-40.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
                                  <span>{"Talcube Learn"}</span>
                                </div>
                                <div {...{ className: "slide-date" }}>
                                  <span>{"2025"}</span>
                                </div>
                                <div {...{ className: "slide-cat" }}>
                                  <span>{"WordPress"}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{ className: "clapat-item front-end " }}>
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#dd3333",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
                                <a
                                  {...{
                                    className: "slide-link",
                                    href: "/project/havit/",
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
                                      src: "/assets/32f693f7-661shots_so-1-1.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/32f693f7-661shots_so-1-1.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
                                  <span>{"Havit"}</span>
                                </div>
                                <div {...{ className: "slide-date" }}>
                                  <span>{"2024"}</span>
                                </div>
                                <div {...{ className: "slide-cat" }}>
                                  <span>{"Front-End"}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "clapat-item vertical-parallax framer ",
                            }}
                          >
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#939393",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
                                <a
                                  {...{
                                    className: "slide-link",
                                    href: "/project/wizkid/",
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
                                      src: "/assets/85d8b51c-5shots_so-1.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/85d8b51c-5shots_so-1.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
                                  <span>{"$WIZKID"}</span>
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
                          <div {...{ className: "clapat-item framer " }}>
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#d4d4d4",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
                                <a
                                  {...{
                                    className: "slide-link",
                                    href: "/project/jobbox/",
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
                                      src: "/assets/a42ce025-MacBook-01-1-1.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/a42ce025-MacBook-01-1-1.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
                                  <span>{"JobBox"}</span>
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
                          <div
                            {...{
                              className:
                                "clapat-item vertical-parallax front-end ",
                            }}
                          >
                            <div
                              {...{
                                className: "slide-inner trigger-item ",
                                "data-centerline": "OPEN",
                              }}
                            >
                              <div {...{ className: "img-mask" }}>
                                <div
                                  {...{
                                    className: "curtains",
                                    "data-curtain-color": "#131722",
                                  }}
                                >
                                  <div {...{ className: "curtain-row" }}></div>
                                </div>
                                <a
                                  {...{
                                    className: "slide-link",
                                    href: "/project/chartreel/",
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
                                      src: "/assets/19f909a1-Group-39.png",
                                      className: "item-image grid__item-img",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <img
                                  {...{
                                    src: "/assets/19f909a1-Group-39.png",
                                    className:
                                      "grid__item-img grid__item-img--large",
                                    alt: "",
                                  }}
                                />
                              </div>
                              <div
                                {...{
                                  className:
                                    "slide-caption trigger-item-link-secondary",
                                }}
                              >
                                <div {...{ className: "slide-title" }}>
                                  <span>{"ChartReel"}</span>
                                </div>
                                <div {...{ className: "slide-date" }}>
                                  <span>{"2022"}</span>
                                </div>
                                <div {...{ className: "slide-cat" }}>
                                  <span>{"Front-End"}</span>
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
                              {
                                "SHOWCASING A COLLECTION OF PAST PROJECTS AND CREATIVE WORKS"
                              }
                            </span>
                          </div>
                          <a
                            {...{
                              className: "page-title next-ajax-link-page",
                              href: "/the-archive/",
                              "data-centerline": "Archive",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "next-hero-title primary-font-title caption-timeline",
                              }}
                            >
                              <span>{"The Archive"}</span>
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
            <div {...{ className: "thumb-wrapper" }}>
              <div {...{ className: "thumb-container" }}>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/aecd9cfc-kolomoni-2.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/6c526b97-Group-3-3.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/c63a47c6-Group-2-2.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src":
                      "/assets/e41e415e-2c8a162f-09fa-4f9b-933d-6d81d20a73b5-1-1.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/ae90e5df-751shots_so-1-2.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/ab68ac4f-Group-40.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/32f693f7-661shots_so-1-1.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/85d8b51c-5shots_so-1.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/a42ce025-MacBook-01-1-1.png",
                  }}
                ></div>
                <div
                  {...{
                    className: "thumb-page",
                    "data-src": "/assets/19f909a1-Group-39.png",
                  }}
                ></div>
              </div>
            </div>
            <div {...{ id: "app" }}></div>
          </div>
        </div>
      </main>
      <CursorLayers />
    </>
  );
}
