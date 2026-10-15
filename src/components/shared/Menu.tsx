import items from "@/lib/navigation.json";

export default function Menu({ activePath }: { activePath: string }) {
  return (
    <nav className="menu-main-menu-container">
      <div className="nav-height">
        <div className="outer">
          <div className="inner">
            <ul
              id="menu-main-menu"
              data-breakpoint="1025"
              className="flexnav menu"
            >
              {items.map(({ id, href, label }) => {
                const active = activePath === href;
                return (
                  <li
                    key={id}
                    id={`menu-item-${id}`}
                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${id} link menu-timeline${active ? " current-menu-item active" : ""}`}
                  >
                    <a
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`ajax-link${active ? " active" : ""}`}
                    >
                      <div className="before-span">
                        <span data-hover={label}>{label}</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
