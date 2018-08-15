import React,{Component} from 'react';
export class Weather extends Component{
    constructor(props){
        super(props);
        this.setState({
            temperature: response.main.temp,
            city: response.name,
            country: response.sys.country
          })
    }
    render(){
       return(
           <div>
            {this.props.country && this.props.city && <p>Location: {this.props.city}, {this.props.country}</p>}
            {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
         </div>
       ) ;
    }

}
export default Weather;