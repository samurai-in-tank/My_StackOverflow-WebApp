export function Menu_Navigation(props) {
    const {menu_Navigation_data} = props;
    return (
    <div className="menu-navigation">
        <nav className="menu-navigation__container" id="menu-navigation">
            <ul className="menu-navigation__list">
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_01" href="" className="button button-menu">{menu_Navigation_data.menu_Navigation_main}</a>
                </li>
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_02" href="" className="button button-menu">{menu_Navigation_data.menu_Navigation_account}</a>
                </li>
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_03" href="" className="button button-menu">{menu_Navigation_data.menu_Navigation_qestions}</a>
                </li>
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_04" href="" className="button button-menu">{menu_Navigation_data.menu_Navigation_teg}</a>
                </li>
            </ul>
        </nav>
    </div>
    );
}