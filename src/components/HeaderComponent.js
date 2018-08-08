const HeaderComponent = () => {
    const stickymenu = {
        left: ['ABOUT', 'COMMUNITY', 'LOCATION', 'OUR MENU', 'RECIPES'],
        right: ['CONTACT', 'LOGIN']
    }
    
    return (
        <div className="fluid-container">
            <nav className="sticky-nav flex-justify">
            <div className="sticky-nav--column flex">
                <div className="brand-logo">
                    <a href="./" className="brand-logo--text">
                        LOGO
                    </a>
                </div>
                    <ul className="list-unstyle">
                        { stickymenu.left.map( (menuitem)=>{
                            return (
                                <li key={menuitem}><a href="#" className="sticky-nav--menu">{menuitem}</a></li> 
                            )
                        })}
                    </ul>
                </div>
                <div className="sticky-nav--column">
                    <ul className="list-unstyle">
                    { stickymenu.right.map( (menuitem)=>{
                            return (
                                <li key={menuitem}><a href="#" className="sticky-nav--menu">{menuitem}</a></li> 
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent;