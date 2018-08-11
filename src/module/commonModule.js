/*
    programme for extracting the element
    Height with Propotionate Element Height

    @fnc ScrollingAspectRatioModule
        @param heightOfElementExpected
        @param scrollingHightPosoition
        @param heightOfPorpationalElement
    @return {number}

    //for import example import {ScrollingAspectRatioModule}  from './ScrollingAspectRatioModule';
*/

export const scrollingAspectRatioModule = (heightOfElementExpected, scrollingHightPosoition, heightOfPorpationalElement) => {

    if(heightOfPorpationalElement > scrollingHightPosoition)
    { 
         const elementSinglePercentValue = (heightOfPorpationalElement/100);

        let heightOfPorpationalElementInPixelActual, scrollingHightPosoitionWithWindowHeight =  heightOfPorpationalElement - scrollingHightPosoition,
            heightOfPorpationalElementInPixel = scrollingHightPosoition/elementSinglePercentValue;

                heightOfPorpationalElementInPixelActual = heightOfElementExpected*(heightOfPorpationalElementInPixel/100);
                
                return heightOfPorpationalElementInPixelActual;
    }
}

/*
    programme for grapping the single first element
    @fnc $el
        @param selector
    @return {object}

    //for import example import {elAll}  from './ScrollingAspectRatioModule';
*/

export const $el = (selector) => {
    return document.querySelectorAll(selector);
 }

 
/*
    programme for grapping the all elements
    @fnc $elAll
        @param selector
    @return {object}

    //for import example import {elAll}  from './ScrollingAspectRatioModule';
*/

export const $elAll = (selector) => {
   return document.querySelectorAll(selector);
}

/*
    programme for getting element height
    @fnc getElementOuterHeight
        @param selector
    @return {number}

    //for import example import {elAll}  from './ScrollingAspectRatioModule';
*/


export const getElementOuterHeight = (selector) => {
    return document.querySelector(selector).clientHeight;
}


/*
    programme for getting element offset top
    @fnc getElementOffsetTop
        @param selector
    @return {number}

    //for import example import {elAll}  from './ScrollingAspectRatioModule';
*/


export const getElementOffsetTop = (selector) => {
    return document.querySelector(selector).offsetTop;
}




