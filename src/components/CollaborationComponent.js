import FormComponent from './FormComponent';

const CollaborationComponent = () => {
    return (
        <section className="js-scale-sticky collaborate">
            <div className="container flex flex-align--top">
                <div className="collaborate__content">
                    <div className="collaborate--heading ">
                        <h2 className="text-heading">
                            <span className="text__head--small">COLLABORATE</span>
                            <span className="inline-block text-strike text-strike--left text-strike--white">WITH US</span>
                        </h2>
                    </div>  
                    <p className="collaborate__content--para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="collaborate__content--para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                <div className="collaborate--form">
                    <FormComponent />
                </div>
            </div>
        </section>
    )
}

export default CollaborationComponent;