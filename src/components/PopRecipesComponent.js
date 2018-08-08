import React from 'react';
import Slider from 'react-slick';
// import { url } from 'inspector';

export default class PopRecipesComponent extends React.Component {
    constructor(props){
        super(props);
        const sliders = [
            {
                labeltext: 'SERVINGS',
                enum: '4',
                imagepath:'/images/instagram/slider_n-3.jpg',
                headingH5:'DIFFICULTY',
                headingH3:'CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST',
                textinfo: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
                username: 'USER FULL NAME',
                sliderWidth: '325px',
                chefchoice: false,
                chefchoiceimage: '/images/assets/stamp.png'

            },
            {
                labeltext: 'SERVINGS',
                enum: '2',
                imagepath:'/images/instagram/slider_n-2.jpg',
                headingH5:'DIFFICULTY',
                headingH3:'PINEAPPLE FRUIT SALAD WITH FRESH CREAMT',
                textinfo: 'The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno',
                username: 'USER FULL NAME',
                sliderWidth: '220px',
                chefchoice: false,
                chefchoiceimage: '/images/assets/stamp.png'

            },
            {
                labeltext: 'SERVINGS',
                enum: '4',
                imagepath:'/images/instagram/slider_n-4.jpg',
                headingH5:'DIFFICULTY',
                headingH3:'CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST',
                textinfo: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
                username: 'USER FULL NAME',
                sliderWidth: '220px',
                chefchoice: false,
                chefchoiceimage: '/images/assets/stamp.png'

            },
            {
                labeltext: 'SERVINGS',
                enum: '4',
                imagepath:'/images/instagram/slider_n-1.jpg',
                headingH5:'DIFFICULTY',
                headingH3:'PINEAPPLE FRUIT SALAD WITH FRESH CREAM',
                textinfo: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
                username: 'USER FULL NAME',
                sliderWidth: '220px',
                chefchoice: false,
                chefchoiceimage: '/images/assets/stamp.png'

            },
            {
                labeltext: 'SERVINGS',
                enum: '4',
                imagepath:'/images/instagram/slider_n-4.jpg',
                headingH5:'DIFFICULTY',
                headingH3:'CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST',
                textinfo: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
                username: 'USER FULL NAME',
                sliderWidth: '325px',
                chefchoice: false,
                chefchoiceimage: '/images/assets/stamp.png'

            },
            {
                labeltext: 'SERVINGS',
                enum: '4',
                imagepath:'/images/instagram/slider_n-1.jpg',
                headingH5:'DIFFICULTY',
                headingH3:'PINEAPPLE FRUIT SALAD WITH FRESH CREAM',
                textinfo: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
                username: 'USER FULL NAME',
                sliderWidth: '220px',
                chefchoice: false,
                chefchoiceimage: '/images/assets/stamp.png'

            }
        ];
        this.state = {
            sliders : sliders,
        }
    }

    render(){
        const settings = {
            className: "slider variable-width",
            centerMode: true,
            swipe: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 2,
            variableWidth: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };

        return (
                <section className="js-scale-sticky poprecipes">
                <div className="container"> 
                    <div className="poprecipes--heading flex flex-justify flex-align--bottom">
                        <div className="poprecipes--headings">
                            <div className="text-heading"><span className="text__head--small">POPULAR</span> <span className="inline-block text-strike text-strike--left text-strike--pink">RECIPES</span></div>
                            <a className="btn btn--pink" href="/">SEE ALL</a>
                        </div>
                        <div className="poprecipes--items">
                            <div className="text__head--small no-wrap">DO YOU WANT TO SHARE YOUR OWN RECIPE?</div>
                            <a className="btn btn--pink" href="/">SEND IT NOW</a>
                        </div>
                    </div>
                </div>
                <div className="fluid-container"> 
                    <div className="pop-slider">
                        <div className="pop-slider__wrap ">
                        <Slider {...settings}>
                            {this.state.sliders.map( (opt, ind) => {
                                return ( <SliderItem chefchoice={opt.chefchoice} chefchoiceimage={opt.chefchoiceimage} sliderWidth={opt.sliderWidth} key={'ind'+ind} username={opt.username} textinfo={opt.textinfo} headingH3={opt.headingH3} headingH5={opt.headingH5} imagepath={opt.imagepath} enum={opt.enum} labeltext={opt.labeltext}  /> )
                            }) }
                         </Slider>   
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



const SliderItem = (props) => {
    let width = props.sliderWidth;
    return (
        <div className="pop-slider__item" style={{width: width}}>
            <div className="pop-slider__item--container"> 
                <div className="pop-slider__item--picture">
                    {props.chefchoice && (<div className="chef-choice"><img src={props.chefchoiceimage} alt='images'/></div>)} 
                    <div className="label-text--box">
                        <span className="inline-block enum">{props.enum}</span> {props.labeltext}
                    </div>
                    <picture>
                        <img src={props.imagepath} alt="recipes images" />   
                    </picture>
                    <div className="label-text--box ico ico-leftarrow"></div>
                </div>
                <div className="pop-slider__item--text">
                    <h5 className="text__heading--h5">{props.headingH5}</h5>
                    <h3 className="text__heading--h3">{props.headingH3}</h3>
                    <p className="text__info">{props.textinfo}</p>
                </div>
            </div>
            <div className="pop-slider__item--user-name">{props.username}</div>
        </div>
    )
}

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={'slide-next'}
        style={{  display: "block", width:"49px", height:"21px", background: "url('/images/assets/next.png')" }}
        onClick={onClick}
      />
    );
  }
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={'slide-prev'}
        style={{  display: "block", width:"49px", height:"21px", background: "url('/images/assets/back.png')" }}
        onClick={onClick}
      >
      </div>
    );
  }