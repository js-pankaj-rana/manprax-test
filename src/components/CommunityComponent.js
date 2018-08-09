const path = require('path');
import {communityComponentJson} from'../module/communityComponentJson'; 
 

import {getElementOffsetTop} from'../module/commonModule'; 


export default class CommunityComponent extends React.Component {
    constructor(props){
        super(props);
        this.scrollFunction = this.scrollFunction.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
         const communitytext= communityComponentJson;        
        this.state = {
            product: communitytext,
            animatestate: false,
            animateclass: undefined,
            animatesOffset: undefined  
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.scrollFunction, false);
    }
    scrollFunction(){
         let cpos = window.scrollY, winH = winH || window.screenX, 
            offsetelement  = getElementOffsetTop('.js-scale-sticky.community'),
            offestwithHeight = (offsetelement+ (winH*2/3) );
                
                if( cpos >= offestwithHeight ){
                    this.setState( () => {
                        return {
                            animatestate : true,
                            animateclass: 'fadeInUp'
                        }  
                    })
                    
                }
            }

    render(){
            return (
                <section className="js-scale-sticky community pt-20">
                    <div className="container">
                        { this.state.product.map( (opt, ind) => {
                                 return (
                                        
                                        <InstaText key={'ind_'+ind} msgbody= {this.state.product[ind].messageBody}
                                            imagebox={this.state.product[ind].imagebox}
                                            textbox={this.state.product[ind].textbox} indPos={ind} animateclass={this.state.animateclass} animatestate={this.state.animatestate}/>
                                 )                                     
                                }
                                )
                            }

                    </div>
                </section>
            )
        } 
    }

    const InstaText = (props) => {
        // console.log("props==>"+props.indPos)
        let parentClassName, bgClasstype, ind = props.indPos, boodata;
            if(props.msgbody){
                parentClassName = 'flex flex-align--middle flex animate__fadeUp animate__fadeUp--type2 '  + (props.animatestate && props.animateclass);
                if(ind == 1){
                    parentClassName = 'flex flex-align--middle flex__dir--row-reverse animate__fadeUp animate__fadeUp--type2 ' + (props.animatestate && props.animateclass);
                }
            }
            else{
                parentClassName = 'flex flex-align--bottom ';
            }
            
            if(ind == 0){
                bgClasstype= 'community__gallary bg-type-2 flex animate__fadeUp animate__fadeUp--type1 '  + (props.animatestate && props.animateclass);
            }
            if(ind == 1){
                bgClasstype= 'community__gallary bg-type-1 flex flex__dir--row-reverse';
            }
            if(ind == 2){
                bgClasstype= 'community__gallary flex flex__dir--row-reverse';
            }
            if(ind==0){
                boodata = true;
            }


        return (
            <div className={parentClassName}>
                {! !!props.msgbody ? (<CommBoxType1 />) : (<CommBoxType2 msgbox={props.msgbody}/>)}
                <div className={bgClasstype}>
                    <InstaImge imgbox={props.imagebox}/>
                    <InstaImgeText imgtext = {props.textbox}/>
                </div>
            </div>
        )
    }

    const CommBoxType1 = () => {
        return (
            <div className="community--box">
                <h2 className="heroshot__msg--header text-heading"> 
                MEET OUR <span className="inline-block text-strike text-strike--left text-strike--pink">COMMUNITY</span>
                </h2>
                <a href="/" className="btn btn--pink">KNOW MORE</a>
                <div className="text-medium text-subheading">LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</div>
            </div>

        )
    }

    const CommBoxType2 = (props) => {
        return (
            <div className="community--msgbox ">
                <div className="text-normal">{props.msgbox}</div>
            </div>
        )
    }

    const InstaImge = (props) => {
        return (
            <div className="community__gallary--box community__gallary--imgbox">
                <div className="ico ico__insta--pic"></div>
                <div className="insta-overlay">
                    <div className="insta-icon flex-justify">
                        <span className="social-text"><i className="ico ico--wish"></i> {props.imgbox.wish}</span>
                        <span className="social-text"><i className="ico ico--chat"></i> {props.imgbox.chat}</span>
                    </div>
                </div>
                <picture>  
                    <img src={props.imgbox.image} alt="gallary image" />
                </picture>
            </div>
         )
    }

    const InstaImgeText = (props) => {
        return (
            <div className="community__gallary--box community__gallary--textbox">
                <div className="text-bold text-medium-x">{props.imgtext.heading}</div>
                <div className="text-normal">{props.imgtext.para}</div>
                <div className="community__gallary--social  insta-icon">
                    <span className="social-text inline-block"><i className="ico ico--wish"></i> {props.imgtext.social.wish}</span>
                    <span className="social-text inline-block"><i className="ico ico--chat"></i> {props.imgtext.social.chat}</span>
                </div>
            </div>
         )
    }
