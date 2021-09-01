import React from "react";
import moment from "moment";
class Forecast extends React.Component {
    render() {
        const forecast = this.props.forecasts; 
        return (
        <React.Fragment>
        <h3 className="Result-info">Next 5 day weather forecast at 06:00 AM</h3>
        <div className="Cards-next-five">
            { forecast.list.filter(day => day.dt_txt.endsWith("06:00:00")).map((day, index) => {
                return (
                <div className="Card-next-five" key={index}>
                  <p className="Date-time">{moment(day.dt_txt).format("ddd, DD MMM YY - HH:mm A")}</p>
                  <p className="Weather-desc">{day.weather[0].description}</p>
                  <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={`weather-icon-${day.weather[0].description}`} />
                  <p className="Temperature-cond">{Math.round(day.main.temp)} &#x2103; | {Math.round((day.main.temp * 9 / 5) + 32)} &#x2109;</p>
                  <p className="Humid">{}</p>
                </div>
                );
            })
            }
        </div>
        </React.Fragment>
        );
    }
}




export default Forecast;