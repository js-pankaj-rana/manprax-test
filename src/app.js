import React from 'react';
import ReactDOM  from 'react-dom';
import HeaderComponent from './components/HeaderComponent';
import StickyRequestComponent from './components/StickyRequestComponent';
import StickyScaleComponent from './components/StickyScaleComponent';
import HeroComponent from './components/HeroComponent';
import CommunityComponent from './components/CommunityComponent';
import LocationComponent from './components/LocationComponent';
import MenuComponent from './components/MenuComponent';
import PopRecipesComponent from './components/PopRecipesComponent';
import CollaborationComponent from './components/CollaborationComponent';
import FooterComponent from './components/FooterComponent';
class Main extends React.Component {
    render(){
        return (
            <div>
                <HeaderComponent />
                <StickyRequestComponent />
                <HeroComponent />
                <CommunityComponent />
                <LocationComponent />
                <MenuComponent />
                <PopRecipesComponent />
                <CollaborationComponent />
                <FooterComponent />
                <StickyScaleComponent />
            </div>
        )
    }
} 

ReactDOM.render(<Main />, document.getElementById('app') );