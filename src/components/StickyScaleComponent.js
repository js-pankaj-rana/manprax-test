import React from 'react';

export class StickyScaleComponent extends React.Component {
    constructor(props){
        super(props);
        this.scrollFunction = this.scrollFunction.bind(this);
        this.animationSticky = this.animationSticky.bind(this);
        this.animateOnScr = this.animateOnScr.bind(this);
        this.state = {
            currentposition: 0,
            allparents: undefined,
            offsetall: undefined,
            activestate:undefined,
            activebool: undefined,
            allpaginatinH: undefined,
            activenumspos: 0  
        }
    }
    componentDidMount(){
        this.scrollFunction();
        const allsections = Array.from(document.querySelectorAll('.js-scale-sticky'));
        this.setState( (prevState) => (prevState.allparents = allsections) );
        const bindOffset = [], bindActive = [], bindActiveBool = [];
        let self = this;
        setTimeout(()=> {
            allsections.map( (element, ind) => {
                bindOffset.push(element.offsetTop);
                if(ind==0){
                    bindActive[ind] = 'active';
                    bindActiveBool[ind] = true

                }
                else {
                    bindActive[ind] = 'inactive';
                    bindActiveBool[ind] = false
                }
            })

            self.setState( () =>{ 
                return {
                    offsetall : bindOffset,
                    activestate : bindActive,
                    activebool : bindActiveBool
                }
            }
            );
             this.animateOnScr();
        }, 500)
    }
   
    scrollFunction(){
        const that = this;
        window.addEventListener('scroll', this.animateOnScr, false)
        
    }
    animateOnScr(){
            const that = this;

            let cpos = window.scrollY, actPos = that.state.offsetall, count, crntPos, allpaginatinH = document.querySelector('.sticky__scale').cleintHeight;
            if(actPos){
                crntPos =  actPos.filter( (position) => position > cpos )
                count = actPos.length - crntPos.length;
                {
                    let nwcount = (count - 1);
                    let nwactive = [];
                    let nwactivebool = [];
                    that.state.activestate.forEach( (ele, ind)=> {
                            if(ind === nwcount){
                                 nwactive.push('active');
                                 nwactivebool.push(true);
                            }
                            else{
                                nwactive.push('inactive');
                                nwactivebool.push(false);
                            }
                    })
                    
                    that.setState( () => {
                        return {
                            activestate : nwactive,
                            activebool : nwactivebool,
                            allpaginatinH: allpaginatinH
                        }
                    })


                    let cPosH = cpos,
                        scrElemH =  (actPos[count] - actPos[nwcount]),
                        singlePercent = (scrElemH/100),
                        scrDiff = scrElemH - (actPos[nwcount] - cPosH),
                        scrDiffPercent = scrDiff /singlePercent,
                        posTop = (15 * (scrDiffPercent / 100)) - 9,
                        allpaginatinHPos = (allpaginatinH * (scrDiffPercent / 100) );
                        console.log('allpaginatinHPos==> '+allpaginatinHPos )
                        console.log('allpaginatinH==> '+allpaginatinH )
                        that.setState( () => {
                            return {
                                activenumspos : posTop,
                                allpaginatinH: allpaginatinH,
                                allpaginatinHPos: allpaginatinHPos
                            }  
                        })

                }
            }
            that.setState((prevState) => (prevState.currentposition = cpos));
            // that.animationSticky();
        } 
    animationSticky(){
        if(this.state.currentposition){
            let cPosH = (this.state.currentposition),
                elemH = 18 / 100,
                animatePix = cPosH * elemH;
                // console.log('cPosH==> '+cPosH, 'elemH==> '+elemH, 'animatePix==> '+animatePix )
         }
    }
       
        render(){
            return (

                <div className="sticky__scale">

                    <ul className="list-unstyle">
                        {
                            this.state.offsetall ? (
                                this.state.offsetall.map( (opt, ind) => {
                                    return (
                                          <li className={'sticky__scale--item ' + this.state.activestate[ind]}  key={'opt'+(ind+1)} id={'id'+ind} data-offset={opt}>
                                                <NumberComponent key={ind} numClass={this.state.activestate[ind]} relPos={this.state.activenumspos} ind={ind} boolData={this.state.activebool[ind]}/>
                                            </li>
                                        )
                                })
                            ) : ''
                        }
                    </ul>
                </div>
            )
        }
           
}
const NumberComponent = (props) => {
    // console.log(props);
    let ind = props.ind,
    upOneInd = ind + 1,
    upOneIndNw = upOneInd < 10 ? '0'+upOneInd : upOneInd,
    style = {
        top: (props.boolData && (!isNaN(props.relPos)) ) && props.relPos
      };
    return (
           <span className="num"  style= {style}>{upOneIndNw}</span>
        )
    }

export default StickyScaleComponent;