import {FooterComponentJson} from '../module/FooterComponentJson';
const FooterComponent = () => {
    const footer = FooterComponentJson;
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex flex-justify flex-align--bottom ">
                    <div className="footer__col footer__col--left flex__dir--column">
                        <div className="flex flex-justify">
                        {  
                            footer.items.map( (option, index) => {
                               return (
                                <div className="footer__col--items" key={'parent'+index}>
                                    <div className="footer__col--heading2">
                                        {option.heading}
                                    </div>
                                    <ul className="list-unstyle">
                                        {option.item.map( (list, index) =>{
                                            return (
                                                <li  key={'list'+index}><a href="./" className="footer__col--list">{list}</a></li>
                                            )
                                        }
                                        )}
                                    </ul>
                                </div>
                               )
                            })
                        }
                        </div>
                        <p className="footer__copyright--para">{footer.copyright}</p>
                    </div>
                    <div className="footer__col footer__col--right">
                        <div className="footer__logo">
                            <a href="/" className="footer__logo--image text--white text__head--small">THIS IS THE <span className="text-heading text--white">LOGO</span></a>
                        </div>
                        <div className="footer__social">
                            <ul className="list-unstyle">
                                <li>
                                    <a href="/" className="ico footer__social--fb"></a>
                                </li>
                                <li>
                                    <a href="/" className="ico footer__social--tw"></a>
                                </li>
                                <li>
                                    <a href="/" className="ico footer__social--ins"></a>
                                </li>
                                <li>
                                    <a href="/" className="ico footer__social--ut"></a>
                                </li>
                                <li>
                                    <a href="/" className="ico footer__social--pin"></a>
                                </li>
                                <li>
                                    <a href="/" className="ico footer__social--tin"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;