/* eslint-disable no-undef */
import React, {
  Component
} from 'react';
import './App.css';
import Map from './GoogleMapsContainer.js'
import Capture from './Capture.PNG'
import temps from './thermometer.png'
import doors from './open-exit-door.png'
import watts from './ray.png'
import watson from './ibm_watson_avatar_200.png'
import io from 'socket.io-client';
const socket = io('http://localhost:6001');
const tab =[];
class App extends Component {
  state = {
    temp: "",
    time: ""
  };

  componentDidMount() {
    const socket = io('http://localhost:6001');
    socket.on('connect', function () {
      console.log('yeeeeeeeeeeeeeeeeeeees');
    });


    // socket.on('deviceTemp', function (data) {
    //   console.log('iiiiin');

    //   console.log('data', data);
    //   if (data) {
    //     console.log('state', this.state);
    //     this.setState(
    //       {
    //         temp: data.data, 
    //         time: data.time 
    //       });
    //   }
    // });

    socket.on('deviceTemp', (data) => {
      console.log('iiiiin 22');

      console.log('data222', data);
      if (data) {
        console.log('state222', this.state);
        this.setState(
          {
            temp: data.data, 
            time: data.time 
          });
      }
    });
  }

  initialState = { ...this.state };
  render() {
    const { temp, time } = this.state;
  
    tab.push({temp});
 
    return (<div className="App" >
      <header className="App-header" >
        <p className="App-title">CASINO dashboard powered by IBM <img className="header-img" src={watson} /></p>
      </header>
      <div className="map-container">
      <div className="map-header">
        <span>Map</span>
      </div>
        <Map className="actual-map" />
      </div>
     




      {/* <div flex className="plan">   </div> */}
      <div className="div-display">

        <div className="plan" > 
          <div className="store-map-header">
            <span>Store map</span>
          </div>
          <img className="temp-img-plan-1" src={temps} />
          <img className="temp-img-plan-2" src={doors} />
          <img className="temp-img-plan-main" src={Capture} /> 
        </div>
        <div className="first-column">
          <div className="card" >
            <div className="card-title">
              <span>Last exceeded temperature</span>
            </div>
            <div className="card-content">
              <div className="card-left-content">
                <div className="card-data">
                  <div >  {temp}°C</div>
                  <div className="icon-display" ><img className="temp-img" src={temps} /></div>
                </div>
                <div className="card-info-title">
                  <div className="font-display"> last detected temperature</div>
                  <div className="font-display"> at {time}</div>
                </div>
              </div>
              <div className="card-right-content">
              <div className="card-data">
                <div className="number-display"> {tab.length}</div>
              </div>
              <div className="card-info-title">
                <div className="notif">notifications this day</div>
              </div>
              </div>
            </div>
          </div>


          <div className="card" >
            <div className="card-title">
              <span>Energy consumption</span>
            </div>
            <div className="card-content">
              <div className="card-left-content">
                <div className="card-data">
                  <div > 2031</div>
                  <div className="icon-display" ><img className="temp-img" src={watts} /></div>
                </div>
                <div className="card-info-title">
                  <div className="font-display">this month(kwh)</div>
                </div>
              </div>
              <div className="card-right-content">
              <div className="card-data">
                <div className="number-display"> +3</div>
              </div>
              <div className="card-info-title">
                <div className="notif">(%) comparing with last month</div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-column">
          <div className="card" >
              <div className="card-title">
                <span>Doors Opening</span>
              </div>
              <div className="card-content">
                <div className="card-left-content">
                  <div className="card-data">
                    <div > 10</div>
                    <div className="icon-display" ><img className="temp-img" src={doors} /></div>
                  </div>
                  <div className="card-info-title">
                    <div className="font-display">3 minutes ago(s)</div>
                  </div>
                </div>
                <div className="card-right-content">
                <div className="card-data">
                  <div className="number-display"> 40</div>
                </div>
                <div className="card-info-title">
                  <div className="notif">longest period this day(s)</div>
                </div>
                </div>
              </div>
            </div>

            <div className="card" >
              <div className="card-title">
                <span>Watson IoT insights</span>
              </div>
              <div className="card-content">
                <div className="card-left-content">
                  <div className="card-data">
                    <div > 3° C</div>
                    <div className="icon-display" ><img className="temp-img" src={temps} /></div>
                  </div>
                  <div className="card-info-title">
                    <div className="font-display"></div>
                  </div>
                </div>
                <div className="card-right-content">
                <div className="card-data">
                  <div className="number-display"></div>
                </div>
                <div className="card-info-title">
                  <div className="notif"> temperature increment caused by doors opening</div>
                </div>
                </div>
              </div>
            </div>

        </div>


      </div>










    </div>
    );
  }
}

export default App;