const HeroComponent = () => {
    return (
        <section className="js-scale-sticky heroshot">
           <picture className="heroshot--bgimage">
                <img src="./images/assets/bg-pic.png" alt="Heroshot Image" />
            </picture>
            <div className="heroshot__msg">
                <h1 className="heroshot__msg--header"> 
                    <span className="inline-block text__head--big">
                        THE BEST FOODIE
                    </span>
                    <span className="inline-block text__head--bigger">
                        EXPERIENCE
                    </span>
                    <span className="inline-block text__head--small">
                        NOW IN LONDON
                    </span>    
                </h1>
            </div>
        </section>
    )
}

export default HeroComponent;