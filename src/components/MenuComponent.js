import React from 'react';
export default class MenuComponent extends React.Component {

    constructor(props){
        super(props);
        const menudata = [
            {
                heading: 'STARTERS',
                articles: [
                    {
                        heading: 'QUINOA CROQUETTAS',
                        para: 'Quinoa and cheddar croquettas with aji rocotto &amp; pineapple salsa (v)',
                        cta: '£4.95' 
                    },
                    {
                        heading: 'CHIFA CHICHARRONES',
                        para: 'Slow cooked, crispy pork belly with sweet soy sauce',
                        cta: '£6.95' 
                    },
                    {
                        heading: 'CALAMARES',
                        para: 'Crispy baby squid with pickled jalapeño miso salsa',
                        cta: '£6.95' 
                    }
                ]
            },{
                heading: 'MAIN COURSES',
                articles: [
                    {
                        heading: 'EL CLASICO',
                        para: 'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
                        cta: '£8.95' 
                    },
                    {
                        heading: 'TIRADITO CALLAO',
                        para: 'Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies',
                        cta: '£8.95' 
                    },
                ]
            },{
                heading: 'SIDES',
                articles: [
                    {
                        heading: 'SUPER POLLO',
                        para: 'Marinated corn fed chicken pieces with rocotto salsa',
                        cta: '£4.95' 
                    },
                    {
                        heading: 'PATATAS FRITAS',
                        para: 'Sweet potato fries with aji rocotto mayonnaise (v)',
                        cta: '£3.95' 
                    }
                ]
            },{
                heading: 'DESSERTS',
                articles: [
                    {
                        heading: 'ICECREAM',
                        para: 'Lorem ipsum dolor sit amet salerma petrum sea',
                        cta: '£3.95' 
                    },
                    {
                        heading: 'TIRAMISU',
                        para: 'Lorem ipsum dolor sit amet salerma petrum sea',
                        cta: '£3.95' 
                    },
                    {
                        heading: 'CHOCOLATE BROWNIE',
                        para: 'Lorem ipsum dolor sit amet salerma petrum sea',
                        cta: '£3.95' 
                    }
                ]
            }
        ];
        this.componentDidMount = this.componentDidMount.bind(this);
        this.scrollFunction = this.scrollFunction.bind(this);
        this.scrollingFunction = this.scrollingFunction.bind(this);
        this.state = {
            parentelmentH: 0,
            menudata,
            bindHieght: undefined,
            bindHalfHeight: [0,0,0,0],
            offsetelement: 0,
            activenumspos: this.parentelmentH
        }
    }
    componentDidMount() {
        this.scrollFunction();

        const allsections = Array.from(document.querySelectorAll('.js-parallex')),
            bindHieght = [], bindHalfHeight = [];
            const self = this;
            let parentElH = undefined, offsetelement = 0;
            
            setTimeout(()=> {
                parentElH  = (document.querySelector('.js-scale-sticky.ourmenu').clientHeight);
                offsetelement = (document.querySelector('.js-scale-sticky.ourmenu').offsetTop);
                // alert(offsetelement)
                 allsections.map( (element, ind) => {
                    bindHieght.push(element.clientHeight);
                    bindHalfHeight.push(element.clientHeight/2);
                })
                 self.setState( () => { 
                        return {
                            bindHieght,
                            bindHalfHeight,
                            parentelmentH : parentElH,
                            offsetelement : offsetelement,
                        }
                    });
                 this.scrollingFunction();
                }, 800)

        }
       
       scrollFunction(){
            
            window.addEventListener('scroll', this.scrollingFunction, false)
        }
        scrollingFunction(){
            let cpos = window.scrollY, winH = winH || window.screenX, offsetelement  = (document.querySelector('.js-scale-sticky.ourmenu').offsetTop), parentelmentH = (document.querySelector('.js-scale-sticky.ourmenu').clientHeight), crntPos, offestwithHeight = (offsetelement+parentelmentH+winH), scrollTo = offsetelement - parentelmentH;
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
                    <h2 className="text-strike text-strike--center text-heading inline-block">OUR MENU</h2>
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

                        if(ind > 0 && ind < x){
                            nameclass = 'text-heading text-line-align text-line-align-t1'
                        }
                        else if(ind === (x-1) ){
                            nameclass = 'text-heading text-line-align text-line-align-t2'
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