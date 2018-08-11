const bindHieght = [], bindHalfHeight = [];
let allsections, parentElH;

import {menuComponentJson} from '../module/menuComponentJson';


import {scrollingAspectRatioModule, getElementOuterHeight, $elAll, getElementOffsetTop} from '../module/commonModule';




export default class MenuComponent extends React.Component {

    constructor(props){
        super(props);
        const menudata = menuComponentJson;
        this.componentDidMount = this.componentDidMount.bind(this);
        this.scrollFunction = this.scrollFunction.bind(this);
        this.scrollingFunction = this.scrollingFunction.bind(this);
        this.state = {
            parentelmentH: 0,
            menudata,
            bindHieght: 0,
            bindHalfHeight: 0,
            offsetelement: 0,
            activenumspos: this.parentelmentH
        }
    }
    componentDidMount() {
        const self = this;
        allsections = Array.from($elAll('.js-parallex'));
       
            setTimeout(()=> {
                this.scrollFunction();
                allsections.map( (element, ind) => {
                    bindHieght.push(element.clientHeight);
                    bindHalfHeight.push(element.clientHeight/2);
                })
                 self.setState( () => { 
                        return {
                            bindHieght,
                            bindHalfHeight,
                            activenumspos : parentElH,
                        }
                    });
                 this.scrollingFunction();
                }, 800)

        }
       
       scrollFunction(){
            window.addEventListener('scroll', this.scrollingFunction, false);
        }

        scrollingFunction(){
            let cpos = window.scrollY, winH = winH || window.screenY,
                offsetelement  = getElementOffsetTop('.js-scale-sticky.ourmenu'),
                parentelmentH = getElementOuterHeight('.js-scale-sticky.ourmenu'),
                scrollTo = offsetelement - parentelmentH;
                if( cpos >= scrollTo){
                 let cPosH = cpos,
                    actEleH = parentelmentH,
                    singlePercent = (actEleH/100),
                    scrDiff = cPosH - (offsetelement ),
                    scrDiffPercent = scrDiff /singlePercent,
                    posTop = ( actEleH * (scrDiffPercent / 100));
                    // console.log('elemH==> '+posTop )
                    this.setState( () => {
                        return {
                            activenumspos : posTop
                        }  
                    })
                }
            }    
    
    render(){
        return (
            <section className="js-scale-sticky ourmenu" >
            <div className="container">
                <div className="ourmenu--heading text-center">
                    <h2 className="text-strike text-strike--pink text-strike--center text-heading inline-block">OUR MENU</h2>
                    <div className="text-center">
                        <a className="btn btn--pink" href="/">KNOW MORE</a>
                    </div>
                </div>
                <div className="ourmenu__content flex">
                    {  
                        this.state.menudata.map( (opt, ind) => {
                        let x = this.state.menudata.length, nameclass = 'text-heading', evenOdd = (ind % 2 == 0 ? 'js-parallex-top' : 'js-parallex-bottom' ), style;
                            if(ind % 2 == 0){
                                style = {
                                    top: (this.state.activenumspos)*2
                                }    
                            }
                            else {
                                style = {
                                    top:  -this.state.activenumspos*2
                                }
                            }

                        if(ind > 0 && ind < (x-1) ){
                            nameclass = 'text-heading text-line-align text-line-align-t2'
                        }
                        else if(ind === (x-1) ){
                            nameclass = 'text-heading text-line-align text-line-align-t1'
                        }
                        
                        return (
                                 <MenuItems 
                                    key={'ind1'+ind} 
                                    styleheighthalf={ style } 
                                    head2={opt.heading} 
                                    articles={opt.articles} 
                                    nameclass={ nameclass } 
                                    evenodd={evenOdd} />
                                )
                         } )}
                </div>
            </div>
        </section>
        )
    }
}


const MenuItems = (props) => {
    let style = props.styleheighthalf;
    // console.log(style);
    return (
        <div className="ourmenu__content--items">
            <div className={'js-parallex '+ props.evenodd } style= { style }>
                <h2 className={props.nameclass}>{props.head2}</h2>
                    {props.articles.map( (option, ind) => {
                        return(<MenuItem key={'hh'+ind} h4={option.heading} para={option.para} ctatext={option.cta}/>)
                    })}
            </div>
        </div>
    )
}

const MenuItem = (props) => {
    return (
        <div className="ourmenu__content--item">
            <h4 className="text-smallheading">{props.h4}</h4>
            <p>{props.para}</p>
            <a className="btn btn--regular btn--pinkborder" href="/">{props.ctatext}</a> 
        </div>
    )

}       