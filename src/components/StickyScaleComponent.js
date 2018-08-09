import React from 'react';

import {scrollingAspectRatioModule} from'../module/commonModule'; 

export class StickyScaleComponent extends React.Component {
    constructor(props){
        super(props);
        this.scrollFunction = this.scrollFunction.bind(this);
        this.animateOnScr = this.animateOnScr.bind(this);
        this.state = {
            currentPosition: 0,
            allSectionsElements: undefined,
            allOffsetSectionElements: undefined,
            allPaginationState:undefined,
            activebool: undefined,
            bindAllSectionH: undefined,
            allSectionH: 0,  
            allPaginationH: 0,  
            activeNumsPosForAll: 0,
            activenumspos: 0,
            counter: 0 
        }
    }
    componentDidMount(){
        this.scrollFunction();
        const allsections = Array.from(document.querySelectorAll('.js-scale-sticky'));
        this.setState( (prevState) => (prevState.allSectionsElements = allsections) );
        let bindOffset = [], bindActive = [], bindActiveBool = [], bindAllSectionH = [], allSectionH = 0;
        let self = this;
        setTimeout(()=> {
            let allPaginationH = document.querySelector('.sticky__scale').cleintHeight;
            allsections.map( (element, ind) => {
                bindOffset.push(element.offsetTop);
                bindAllSectionH.push(element.clientHeight);
                 allSectionH += (element.clientHeight);
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
                    allOffsetSectionElements : bindOffset,
                    allPaginationState : bindActive,
                    activebool : bindActiveBool,
                    bindAllSectionH,
                    allPaginationH,
                    allSectionH
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
            let bindAllSectionH, cpos = window.scrollY, actPos = that.state.allOffsetSectionElements, count, crntPos, allPaginationH = document.querySelector('.sticky__scale').clientHeight, allPaginationHPos = 0, allSectionH = this.state.allSectionH;

            if(actPos){
                bindAllSectionH = this.state.bindAllSectionH;
                allPaginationHPos = this.state.allSectionH;
                crntPos =  actPos.filter( (position) => position > cpos )
                count = actPos.length - crntPos.length;
                
                {
                    let nwcount = (count - 1);
                    let nwactive = [];
                    let nwactivebool = [];
                    that.state.allPaginationState.forEach( (ele, ind)=> {
                            if(ind === nwcount){
                                  // counter+=count;
                                 nwactive.push('active');
                                 nwactivebool.push(true);
                            }
                            else{
                                nwactive.push('inactive');
                                nwactivebool.push(false);
                            }
                    })
                    
                    that.setState( (prevState) => {
                        return {
                            allPaginationHPos,
                            allPaginationState : nwactive,
                            activebool : nwactivebool,
                            allPaginationH: allPaginationH,
                            counter: count 
                        }
                    })


                    let cPosH = cpos,  allSectionH = this.state.allSectionH,
                        
                        scrElemH =  (actPos[count] - actPos[nwcount]),
                        
                        singlePercent = (scrElemH/100),
                        
                        
                        singleSecPercent = (allSectionH/100),

                        scrSecDiff = (allSectionH - cPosH),

                        scrDiffPercent =  allPaginationHPos /singlePercent,
                        
                        scrSecDiffPercent = scrSecDiff /singleSecPercent,
                        
                        posTop = (15 * (scrDiffPercent / 100)) - 9,
                        allPaginationHPos = (allPaginationH * (scrSecDiffPercent / 100));





                        if(allPaginationHPos < 0 ){
                            allPaginationHPos = 0;
                        }
                        if( allPaginationHPos > (allPaginationH - 15) ){
                             allPaginationHPos = (allPaginationH - 15);
                        }
                        that.setState( () => {
                            return {
                                activenumspos : posTop,
                                allPaginationH: allPaginationH,
                                allPaginationHPos: allPaginationHPos
                            }  
                        })

                }
            }
            that.setState((prevState) => (prevState.currentPosition = cpos));
        } 
    
       
        render(){
            let style = {
                bottom: this.state.allPaginationHPos
            }
            return (
                <div className="sticky__scale">
                    <div className="enum-pos" style={style}><span className="enum-data" >{this.state.counter < 10 ? '0'+this.state.counter : this.state.counter }</span></div>
                    <ul className="list-unstyle">
                        {
                            this.state.allOffsetSectionElements ? (
                                this.state.allOffsetSectionElements.map( (opt, ind) => {
                                    return (
                                          <li className={'sticky__scale--item ' + this.state.allPaginationState[ind]}  key={'opt'+(ind+1)} id={'id'+ind} data-offset={opt}>
                                                <NumberComponent key={ind} numClass={this.state.allPaginationState[ind]} relPos={this.state.activenumspos} ind={ind} boolData={this.state.activebool[ind]}/>
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