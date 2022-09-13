import React from "react";
import './Home.css';
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import Body from "../Body";

class Home extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color2: 0x958ae8,
      size: 1.00
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div className='Home' ref={this.vantaRef}>
        {/* <Body /> */}
      </div>
    );
  }
}

  
export default Home;
