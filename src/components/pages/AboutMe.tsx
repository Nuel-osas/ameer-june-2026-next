import type { CSSProperties } from "react";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";
import Preloader from "../shared/Preloader";
import CursorLayers from "../shared/CursorLayers";
export default function AboutMe() {
  return (
    <>
      <main {...{ id: "site-main" }}>
        <Preloader />
        <div {...{ className: "cd-index cd-main-content" }}>
          <div
            {...{
              id: "clapat-page-content",
              className: "light-content clapat-class-id-190 with-elementor",
              "data-bgcolor": "#0c0c0c",
            }}
          >
            <Navigation
              activePath="/about-me/"
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
                            "aria-label": "WHO IS AMEER?",
                          }}
                        >
                          <span>{"WHO IS AMEER?"}</span>
                        </h1>
                        <div
                          {...{ className: "hero-subtitle caption-timeline" }}
                        >
                          <span>
                            {
                              "I’m a developer, a lifelong learner, and occasionally a professional YouTube binge-watcher."
                            }
                            <br />
                            {
                              "When I’m not code-wrangling or breaking things to fix them, I’m creating beautiful, responsive digital experiences."
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
                            <span {...{ "data-hover": "Scroll To Explore" }}>
                              {"Scroll To Explore"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div {...{ className: "hero-footer-right" }}>
                        <div {...{ id: "info-text" }}>{"Meet Ameer"}</div>
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
                        "data-elementor-id": "190",
                        className: "elementor elementor-190",
                      }}
                    >
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-3ef3b49 full_elementor elementor-hidden-desktop elementor-hidden-tablet dark-section inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "3ef3b49",
                          "data-element_type": "container",
                          "data-e-type": "container",
                          id: "about--vid",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-b901d4b elementor-hidden-desktop elementor-hidden-tablet content-full-width text-align-center elementor-widget elementor-widget-montoya_image_clipped",
                              "data-id": "b901d4b",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              id: "background-video",
                              "data-widget_type":
                                "montoya_image_clipped.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "clipped-image-wrapper" }}>
                                <div {...{ className: "clipped-image-pin" }}>
                                  <div {...{ className: "clipped-image" }}>
                                    <img
                                      {...{
                                        decoding: "async",
                                        src: "/assets/25ea9a7f-VideoCapture_20250213-075111.jpg",
                                        alt: "",
                                      }}
                                    />
                                    <div
                                      {...{
                                        className: "clipped-image-gradient",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div
                                  {...{
                                    className:
                                      "clipped-image-content content-full-width text-align-center",
                                  }}
                                ></div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-b6083f0 full_elementor e-con-full elementor-hidden-mobile dark-section inherit-header-color e-flex e-con e-parent e-lazyloaded",
                          "data-id": "b6083f0",
                          "data-element_type": "container",
                          "data-e-type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div
                          {...{
                            className:
                              "content-row-elementor elementor-element elementor-element-57e68e1 e-grid e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-con e-child",
                            "data-id": "57e68e1",
                            "data-element_type": "container",
                            "data-e-type": "container",
                          }}
                        >
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-9d2df37 elementor-widget__width-inherit elementor-invisible elementor-widget elementor-widget-image",
                              "data-id": "9d2df37",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-settings": '{"_animation":"fadeInUp"}',
                              "data-widget_type": "image.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <img
                                {...{
                                  fetchPriority: "high",
                                  decoding: "async",
                                  width: "577",
                                  height: "1024",
                                  src: "/assets/e9ae4ce0-20250124_204309-577x1024.jpg",
                                  className:
                                    "elementor-animation-float attachment-large size-large wp-image-3658",
                                  alt: "",
                                  srcSet:
                                    "/assets/e9ae4ce0-20250124_204309-577x1024.jpg 577w, /assets/2f744b40-20250124_204309-169x300.jpg 169w, /assets/7e103f8e-20250124_204309-768x1364.jpg 768w, /assets/c3ede446-20250124_204309-865x1536.jpg 865w, /assets/ef7878b6-20250124_204309-1153x2048.jpg 1153w, /assets/6fb99b05-20250124_204309-scaled.jpg 1441w",
                                  sizes: "(max-width: 577px) 100vw, 577px",
                                }}
                              />{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-388595e elementor-widget__width-inherit elementor-invisible elementor-widget elementor-widget-image",
                              "data-id": "388595e",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-settings":
                                '{"_animation":"fadeInUp","_animation_delay":100}',
                              "data-widget_type": "image.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <img
                                {...{
                                  decoding: "async",
                                  width: "576",
                                  height: "1024",
                                  src: "/assets/71ef9009-VideoCapture_20250213-075111-576x1024.jpg",
                                  className:
                                    "elementor-animation-float attachment-large size-large wp-image-3656",
                                  alt: "",
                                  srcSet:
                                    "/assets/71ef9009-VideoCapture_20250213-075111-576x1024.jpg 576w, /assets/4d3d9985-VideoCapture_20250213-075111-169x300.jpg 169w, /assets/b7e38fa1-VideoCapture_20250213-075111-768x1365.jpg 768w, /assets/e9817915-VideoCapture_20250213-075111-864x1536.jpg 864w, /assets/62c3d03d-VideoCapture_20250213-075111-1152x2048.jpg 1152w, /assets/25ea9a7f-VideoCapture_20250213-075111.jpg 1440w",
                                  sizes: "(max-width: 576px) 100vw, 576px",
                                }}
                              />{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-21a9370 elementor-widget__width-inherit elementor-invisible elementor-widget elementor-widget-image",
                              "data-id": "21a9370",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-settings":
                                '{"_animation":"fadeInUp","_animation_delay":200}',
                              "data-widget_type": "image.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <img
                                {...{
                                  decoding: "async",
                                  width: "576",
                                  height: "1024",
                                  src: "/assets/58a5bb9c-VideoCapture_20250213-075712-576x1024.jpg",
                                  className:
                                    "elementor-animation-float attachment-large size-large wp-image-3659",
                                  alt: "",
                                  srcSet:
                                    "/assets/58a5bb9c-VideoCapture_20250213-075712-576x1024.jpg 576w, /assets/98c11719-VideoCapture_20250213-075712-169x300.jpg 169w, /assets/e625958f-VideoCapture_20250213-075712.jpg 720w",
                                  sizes: "(max-width: 576px) 100vw, 576px",
                                }}
                              />{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-f59d96e full_elementor dark-section inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "f59d96e",
                          "data-element_type": "container",
                          "data-e-type": "container",
                          id: "abt-exp",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-2554d77 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-montoya_moving_thumbs_grid",
                              "data-id": "2554d77",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type":
                                "montoya_moving_thumbs_grid.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <div {...{ className: "move-thumbs-wrapper" }}>
                                <div {...{ className: "start-thumbs-caption" }}>
                                  <h2
                                    {...{
                                      className:
                                        "primary-font-title big-title has-mask-fill",
                                    }}
                                  >
                                    {"Experience"}
                                  </h2>
                                  <p>{"INNOVATING THROUGH IMPACTFUL DESIGN"}</p>
                                </div>
                                <div {...{ className: "start-thumbs-wrapper" }}>
                                  <div {...{ className: "start-move-thumb" }}>
                                    <div {...{ className: "move-thumb-inner" }}>
                                      <div {...{ className: "section-image" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/b28fc505-TALCUBE-1.png",
                                            className: "item-image",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "start-move-thumb" }}>
                                    <div {...{ className: "move-thumb-inner" }}>
                                      <div {...{ className: "section-image" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/0b36c4a9-IPS-1-1.png",
                                            className: "item-image",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "start-move-thumb" }}>
                                    <div {...{ className: "move-thumb-inner" }}>
                                      <div {...{ className: "section-image" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/879622dc-ULESSON.png",
                                            className: "item-image",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "start-move-thumb" }}>
                                    <div {...{ className: "move-thumb-inner" }}>
                                      <div {...{ className: "section-image" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/ab82fe6e-SIDE-HUSTLE-1.png",
                                            className: "item-image",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "start-move-thumb" }}>
                                    <div {...{ className: "move-thumb-inner" }}>
                                      <div {...{ className: "section-image" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/59033381-UPWORK-2.png",
                                            className: "item-image",
                                            alt: "",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{ className: "start-move-thumb" }}>
                                    <div {...{ className: "move-thumb-inner" }}>
                                      <div {...{ className: "section-image" }}>
                                        <img
                                          {...{
                                            decoding: "async",
                                            src: "/assets/d16e8c10-GROWLB-1.png",
                                            className: "item-image",
                                            alt: "",
                                          }}
                                        />
                                      </div>
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
                            "content-row-elementor elementor-element elementor-element-d487b27 row_padding_top_elementor row_padding_bottom_elementor full_elementor e-con-full dark-section inherit-header-color e-flex e-con e-parent e-lazyloaded",
                          "data-id": "d487b27",
                          "data-element_type": "container",
                          "data-e-type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-78e8f63 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-montoya_team_members",
                            "data-id": "78e8f63",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            "data-widget_type": "montoya_team_members.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <ul
                              {...{
                                className: "team-members-list",
                                "data-fx": "1",
                              }}
                            >
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img":
                                    "/assets/b3955e18-f450996f-4be3-4e21-af0a-d507373d6380-1.png",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2023"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"Introduction to Javascript"}
                                  </div>
                                  <span>{"Sololearn"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img":
                                    "/assets/3787b51a-certificate_page-0001-1-1.png",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2024"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"Webflow 101"}
                                  </div>
                                  <span>{"Webflow University"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img":
                                    "/assets/bf43239d-certificate-177561954-1-1.png",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2021"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"HTML5 and CSS3"}
                                  </div>
                                  <span>{"Pirple"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img":
                                    "/assets/2e2ec1af-cert-CT-J084O2JJ-1-1.png",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2022"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"Responsive Web Development"}
                                  </div>
                                  <span>{"Sololearn"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img":
                                    "/assets/0763fa78-Ameer_Bamigbayan_Sidehustle_Certificate-1-1.png",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2021"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"Product Design (UI/UX)"}
                                  </div>
                                  <span>{"Side Hustle"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img":
                                    "/assets/bfc12a5e-Jobberman_Soft_Skill_Certificate_5043021-1536x1126-1-1.png",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2021"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"Jobberman Soft Skills Training"}
                                  </div>
                                  <span>{"Jobberman"}</span>
                                </div>
                              </li>
                            </ul>{" "}
                          </div>
                        </div>
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-193f0d8 elementor-hidden-desktop elementor-widget elementor-widget-montoya_team_members",
                            "data-id": "193f0d8",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            "data-widget_type": "montoya_team_members.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <ul
                              {...{
                                className: "team-members-list has-animation",
                                '"': "",
                                "data-fx": "1",
                              }}
                            >
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img": "",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2022 - PRESENT"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"WEB DEVELOPER"}
                                  </div>
                                  <span>{"Talcube"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img": "",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2023 - PRESENT"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"LMS DEVELOPER"}
                                  </div>
                                  <span>{"Infection Prevention Services"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img": "",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2022 - 2023"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"TECHNICAL TUTOR"}
                                  </div>
                                  <span>{"uLesson"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img": "",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2022 - PRESENT"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"WORDPRESS DEVELOPER"}
                                  </div>
                                  <span>{"GrowLB"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img": "",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2020 - PRESENT"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"WEB DEVELOPER\n"}
                                  </div>
                                  <span>{"Upwork"}</span>
                                </div>
                              </li>
                              <li
                                {...{
                                  className: "link has-hover-image",
                                  "data-img": "",
                                }}
                              >
                                <div
                                  {...{
                                    className: "team-member has-animation",
                                  }}
                                >
                                  <span>{"2021"}</span>
                                  <div {...{ className: "primary-font-title" }}>
                                    {"UI/UX INTERN"}
                                  </div>
                                  <span>{"Side Hustle"}</span>
                                </div>
                              </li>
                            </ul>{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-0e10033 row_padding_top_elementor e-con-full elementor-hidden-desktop dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-parent e-lazyloaded",
                          "data-id": "0e10033",
                          "data-element_type": "container",
                          "data-e-type": "container",
                          "data-settings":
                            '{"background_background":"classic"}',
                        }}
                      >
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-3d2030f text-align-center elementor-widget elementor-widget-montoya_heading",
                            "data-id": "3d2030f",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            "data-widget_type": "montoya_heading.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <h1
                              {...{
                                className:
                                  "big-title primary-font-title has-mask-fill",
                                "aria-label": "Certifications",
                              }}
                            >
                              {"Certifications"}
                            </h1>{" "}
                          </div>
                        </div>
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-42dada7 elementor-widget elementor-widget-text-editor",
                            "data-id": "42dada7",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            "data-widget_type": "text-editor.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <p>
                              {
                                "CERTIFICATIONS THAT DEMONSTRATE EXPERTISE AND A COMMITMENT TO GROWTH"
                              }
                            </p>{" "}
                          </div>
                        </div>
                        <div
                          {...{
                            className:
                              "elementor-element elementor-element-09c8c04 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer",
                            "data-id": "09c8c04",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            "data-widget_type": "spacer.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
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
                              "elementor-element elementor-element-16f99ee about-slider elementor-widget elementor-widget-montoya_scrolling_panels_gallery",
                            "data-id": "16f99ee",
                            "data-element_type": "widget",
                            "data-e-type": "widget",
                            id: "about-sli",
                            "data-widget_type":
                              "montoya_scrolling_panels_gallery.default",
                          }}
                        >
                          <div {...{ className: "elementor-widget-container" }}>
                            <div
                              {...{
                                className: "panels",
                                "data-widthratio": "0.8",
                              }}
                            >
                              <div {...{ className: "panels-container" }}>
                                <div {...{ className: "panel" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/b3955e18-f450996f-4be3-4e21-af0a-d507373d6380-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <div {...{ className: "panel" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/bf43239d-certificate-177561954-1-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <div {...{ className: "panel" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/3787b51a-certificate_page-0001-1-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <div {...{ className: "panel" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/0763fa78-Ameer_Bamigbayan_Sidehustle_Certificate-1-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <div {...{ className: "panel" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/2e2ec1af-cert-CT-J084O2JJ-1-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                                <div {...{ className: "panel" }}>
                                  <img
                                    {...{
                                      decoding: "async",
                                      src: "/assets/bfc12a5e-Jobberman_Soft_Skill_Certificate_5043021-1536x1126-1-1.png",
                                      alt: "",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-7b3c537 light-section change-header-color row_padding_top_elementor row_padding_bottom_elementor has-clip-path full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "7b3c537",
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
                                "content-row-elementor elementor-element elementor-element-b0ab88e e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "b0ab88e",
                              "data-element_type": "container",
                              "data-e-type": "container",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-0a15689 text-align-left elementor-widget elementor-widget-montoya_heading",
                                "data-id": "0a15689",
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
                                      "big-title primary-font-title no-margins",
                                  }}
                                >
                                  {"My"}
                                  <br />
                                  {"\nServices"}
                                </h2>{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "content-row-elementor elementor-element elementor-element-c6c5641 e-con-full dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con e-child",
                              "data-id": "c6c5641",
                              "data-element_type": "container",
                              "data-e-type": "container",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "elementor-element elementor-element-0862cce elementor-widget elementor-widget-montoya_accordion",
                                "data-id": "0862cce",
                                "data-element_type": "widget",
                                "data-e-type": "widget",
                                "data-widget_type": "montoya_accordion.default",
                              }}
                            >
                              <div
                                {...{ className: "elementor-widget-container" }}
                              >
                                <dl {...{ className: "accordion small-acc" }}>
                                  <dt>
                                    <span {...{ className: "link" }}>
                                      {"Frontend Development"}
                                    </span>
                                    <div
                                      {...{
                                        className:
                                          "acc-icon-wrap parallax-wrap",
                                      }}
                                    >
                                      <div
                                        {...{
                                          className:
                                            "acc-button-icon parallax-element",
                                        }}
                                      >
                                        <i
                                          {...{
                                            className: "fa fa-arrow-right",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </dt>
                                  <dd {...{ className: "accordion-content" }}>
                                    {
                                      "I craft responsive, dynamic websites using HTML, CSS, Tailwind, JavaScript, and React for seamless user experiences."
                                    }
                                  </dd>
                                  <dt>
                                    <span {...{ className: "link" }}>
                                      {"WordPress Development"}
                                    </span>
                                    <div
                                      {...{
                                        className:
                                          "acc-icon-wrap parallax-wrap",
                                      }}
                                    >
                                      <div
                                        {...{
                                          className:
                                            "acc-button-icon parallax-element",
                                        }}
                                      >
                                        <i
                                          {...{
                                            className: "fa fa-arrow-right",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </dt>
                                  <dd {...{ className: "accordion-content" }}>
                                    {
                                      "From blogs to business sites, I create versatile and fully functional WordPress websites tailored to your needs."
                                    }
                                  </dd>
                                  <dt>
                                    <span {...{ className: "link" }}>
                                      {"Framer Development"}
                                    </span>
                                    <div
                                      {...{
                                        className:
                                          "acc-icon-wrap parallax-wrap",
                                      }}
                                    >
                                      <div
                                        {...{
                                          className:
                                            "acc-button-icon parallax-element",
                                        }}
                                      >
                                        <i
                                          {...{
                                            className: "fa fa-arrow-right",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </dt>
                                  <dd {...{ className: "accordion-content" }}>
                                    {
                                      "I specialize in building interactive websites with smooth animations in Framer, and I can transform Figma designs into fully functional sites.\n\n"
                                    }
                                  </dd>
                                  <dt>
                                    <span {...{ className: "link" }}>
                                      {"E-Commerce Development"}
                                    </span>
                                    <div
                                      {...{
                                        className:
                                          "acc-icon-wrap parallax-wrap",
                                      }}
                                    >
                                      <div
                                        {...{
                                          className:
                                            "acc-button-icon parallax-element",
                                        }}
                                      >
                                        <i
                                          {...{
                                            className: "fa fa-arrow-right",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </dt>
                                  <dd {...{ className: "accordion-content" }}>
                                    {
                                      "I design and develop e-commerce platforms using Shopify and WordPress, creating seamless shopping experiences tailored to your business needs."
                                    }
                                  </dd>
                                  <dt>
                                    <span {...{ className: "link" }}>
                                      {"LMS Development"}
                                    </span>
                                    <div
                                      {...{
                                        className:
                                          "acc-icon-wrap parallax-wrap",
                                      }}
                                    >
                                      <div
                                        {...{
                                          className:
                                            "acc-button-icon parallax-element",
                                        }}
                                      >
                                        <i
                                          {...{
                                            className: "fa fa-arrow-right",
                                          }}
                                        ></i>
                                      </div>
                                    </div>
                                  </dt>
                                  <dd {...{ className: "accordion-content" }}>
                                    {
                                      "I create custom learning platforms using LearnWorlds and WordPress, designed for e-learning and training excellence."
                                    }
                                  </dd>
                                </dl>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-e6b22d4 row_padding_bottom_elementor full_elementor dark-section inherit-header-color e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "e6b22d4",
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
                                "elementor-element elementor-element-1f1aa7f elementor-widget elementor-widget-spacer",
                              "data-id": "1f1aa7f",
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
                                "elementor-element elementor-element-d4bec64 text-align-center elementor-widget elementor-widget-montoya_heading",
                              "data-id": "d4bec64",
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
                                    "big-title primary-font-title no-margins has-mask-fill",
                                }}
                              >
                                {"Education"}
                              </h2>{" "}
                            </div>
                          </div>
                          <div
                            {...{
                              className:
                                "elementor-element elementor-element-96538a9 elementor-widget elementor-widget-spacer",
                              "data-id": "96538a9",
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
                                "elementor-element elementor-element-b7a134c elementor-widget elementor-widget-montoya_flex_list",
                              "data-id": "b7a134c",
                              "data-element_type": "widget",
                              "data-e-type": "widget",
                              "data-widget_type": "montoya_flex_list.default",
                            }}
                          >
                            <div
                              {...{ className: "elementor-widget-container" }}
                            >
                              <ul {...{ className: "flex-list-wrapper" }}>
                                <li
                                  {...{
                                    className: "flex-list link has-animation",
                                  }}
                                >
                                  <span {...{ className: "flex-list-left" }}>
                                    {"Olabisi Onabanjo University"}
                                  </span>
                                  <span {...{ className: "flex-list-center" }}>
                                    {"B.Sc.(Ed) Computer Science"}
                                  </span>
                                  <span {...{ className: "flex-list-right" }}>
                                    {"2019 - 2023"}
                                  </span>
                                </li>
                                <li
                                  {...{
                                    className: "flex-list link has-animation",
                                  }}
                                >
                                  <span {...{ className: "flex-list-left" }}>
                                    {"SoloLearn"}
                                  </span>
                                  <span {...{ className: "flex-list-center" }}>
                                    {"HTML, CSS & JavaScript"}
                                  </span>
                                  <span {...{ className: "flex-list-right" }}>
                                    {"2019 - 2021"}
                                  </span>
                                </li>
                                <li
                                  {...{
                                    className: "flex-list link has-animation",
                                  }}
                                >
                                  <span {...{ className: "flex-list-left" }}>
                                    {"Jobberman Nigeria"}
                                  </span>
                                  <span {...{ className: "flex-list-center" }}>
                                    {"Jobberman Soft-Skills Training"}
                                  </span>
                                  <span {...{ className: "flex-list-right" }}>
                                    {"Oct 2021"}
                                  </span>
                                </li>
                              </ul>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        {...{
                          className:
                            "content-row-elementor elementor-element elementor-element-364c0fd dark-section inherit-header-color full_elementor row_padding_left_elementor row_padding_right_elementor e-flex e-con-boxed e-con e-parent e-lazyloaded",
                          "data-id": "364c0fd",
                          "data-element_type": "container",
                          "data-e-type": "container",
                        }}
                      >
                        <div {...{ className: "e-con-inner" }}></div>
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
                              {"LET'S CONNECT AND BRING YOUR IDEAS TO LIFE!"}
                            </span>
                          </div>
                          <a
                            {...{
                              className: "page-title next-ajax-link-page",
                              href: "/contact/",
                              "data-centerline": "Say Hi",
                            }}
                          >
                            <div
                              {...{
                                className:
                                  "next-hero-title primary-font-title caption-timeline",
                              }}
                            >
                              <span>{"Contact Me"}</span>
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
