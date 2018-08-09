export default class LocationComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        google.maps.event.addDomListener(window, 'load', this.init);
    }
    init(){
        // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var iconBase = '/images/assets/location-icon.png';
        
        const mapOptions = {
            zoom: 11,
            icon: iconBase,
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"lightness":"-100"},{"color":"#ffdac9"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffcab1"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffcab1"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#92e1dd"}]}]
        };
        const mapElement = document.getElementById('map');
        const map = new google.maps.Map(mapElement, mapOptions);

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            icon: iconBase,
            title: 'Snazzy!'
        });
    }
    
    render(){
        return (
            <section className="js-scale-sticky location">
              <div className="container location--wrap">
               <div className="location--box">
                    <h2 className="text-heading location--heading">LOCATION</h2>
                    <div className="text-normal location--message text-bold">12 Upper St. Martin’s Lane WC2H 9FB, London</div>
               </div>
               </div>
               <div id="map"></div>
            </section>
        )
    }
}

