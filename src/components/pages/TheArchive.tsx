import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/ArchiveFooter";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function TheArchive() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "light-content clapat-class-id-280 with-elementor",
              "data-bgcolor": "#0c0c0c",
            }}
          >
            <Navigation
              activePath="/the-archive/"
              className="invert-header classic-menu"
            />
            <div {...{ id: "content-scroll" }}>
              <div {...{ id: "main" }}>
                <div {...{ id: "main-content" }}>
                  <div {...{ id: "itemsWrapperLinks" }}>
                    <div
                      {...{
                        id: "itemsWrapper",
                        className: "webgl-fitthumbs fx-one",
                      }}
                    >
                      <div
                        {...{
                          className: "clapat-slider-wrapper showcase-gallery",
                        }}
                      >
                        <div {...{ className: "clapat-slider" }}>
                          <div {...{ className: "clapat-slider-viewport" }}>
                            <div {...{ className: "clapat-slide s50" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-large speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner framer ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/kolomoni/",
                                            "aria-label": "View Kolomoni",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/aecd9cfc-kolomoni-2.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"Kolomoni"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"Framer"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s25" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-large speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner framer ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item change-header",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/danfo/",
                                            "aria-label":
                                              "View D\u00e1Nf\u00f3",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/6c526b97-Group-3-3.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"DáNfó"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"Framer"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s75" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-large speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner wordpress ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/damfe/",
                                            "aria-label": "View Damfe Samuel",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/c63a47c6-Group-2-2.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"Damfe Samuel"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"WordPress"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s50" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-large speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner wordpress ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/the-swamp/",
                                            "aria-label": "View The Swamp",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/e41e415e-2c8a162f-09fa-4f9b-933d-6d81d20a73b5-1-1.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"The Swamp"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"WordPress"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s100" }}>
                              <div
                                {...{
                                  className: "slide-events has-scale-large",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner front-end ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/coca-cola/",
                                            "aria-label": "View Coca-Cola",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/ae90e5df-751shots_so-1-2.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"Coca-Cola"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"Front-End"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s25" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-large speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner wordpress ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item change-header",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/talcube-learn/",
                                            "aria-label": "View Talcube Learn",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/ab68ac4f-Group-40.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"Talcube Learn"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"WordPress"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s50" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-large speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner front-end ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/havit/",
                                            "aria-label": "View Havit",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/32f693f7-661shots_so-1-1.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"Havit"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"Front-End"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s0" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-medium speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner framer ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/wizkid/",
                                            "aria-label": "View $WIZKID",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/85d8b51c-5shots_so-1.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"$WIZKID"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"Framer"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s50" }}>
                              <div
                                {...{
                                  className:
                                    "slide-events has-scale-large speed-50",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner framer ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/jobbox/",
                                            "aria-label": "View JobBox",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/a42ce025-MacBook-01-1-1.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"JobBox"}</span>
                                      </div>
                                      <div {...{ className: "slide-cat" }}>
                                        <span>{"Framer"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{ className: "clapat-slide s100" }}>
                              <div
                                {...{
                                  className: "slide-events has-scale-medium",
                                }}
                              >
                                <div
                                  {...{
                                    className: "slide-inner front-end ",
                                    "data-centerline": "VIEW",
                                  }}
                                >
                                  <div {...{ className: "slide-moving" }}>
                                    <div
                                      {...{
                                        className: "trigger-item ",
                                        "data-centerline": "OPEN",
                                      }}
                                    >
                                      <div {...{ className: "img-mask" }}>
                                        <a
                                          {...{
                                            className: "slide-link",
                                            href: "/project/chartreel/",
                                            "aria-label": "View ChartReel",
                                          }}
                                        >
                                          <div
                                            {...{ className: "parallax-wrap" }}
                                          >
                                            <div
                                              {...{
                                                className: "parallax-element",
                                              }}
                                            >
                                              <i
                                                {...{
                                                  className:
                                                    "fa-solid fa-arrow-up-right-from-square",
                                                }}
                                              ></i>
                                            </div>
                                          </div>
                                        </a>
                                        <div
                                          {...{
                                            className:
                                              "section-image trigger-item-link",
                                          }}
                                        >
                                          <img
                                            {...{
                                              src: "/assets/19f909a1-Group-39.png",
                                              className:
                                                "item-image grid__item-img",
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
                                    </div>
                                    <div {...{ className: "slide-caption" }}>
                                      <div {...{ className: "slide-title" }}>
                                        <span>{"ChartReel"}</span>
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
                          <div {...{ className: "slider-fixed-content" }}>
                            <div
                              {...{
                                id: "slide-inner-temporary",
                                className: "fadeout-element",
                              }}
                            >
                              <div
                                {...{
                                  id: "slide-inner-caption",
                                  className:
                                    "content-full-width text-align-center height-title",
                                }}
                              >
                                <div {...{ className: "inner" }}>
                                  <h1
                                    {...{
                                      className:
                                        "slide-hero-title caption-timeline primary-font-title",
                                      "aria-label": "The Archive",
                                    }}
                                  >
                                    <span>{"The Archive"}</span>
                                  </h1>
                                  <div
                                    {...{
                                      className:
                                        "slide-hero-subtitle caption-timeline",
                                    }}
                                  >
                                    <span>
                                      {
                                        "THESE PROJECTS ARE TOO VALUABLE TO BE LOST. AN ARCHIVE OF VISUAL WORKS, "
                                      }
                                      <br />
                                      {
                                        "SHOWCASING PAST PROJECTS, CONCEPTS, AND CREATIVE EXPLORATIONS. "
                                      }
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div {...{ className: "gallery-zoom-wrapper" }}></div>
                        <div {...{ className: "gallery-thumbs-wrapper" }}></div>
                        <div {...{ className: "gallery-close-thumbs" }}></div>
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
