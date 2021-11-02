/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import ReactPlayer from 'react-player'
 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import { Carousel } from 'react-responsive-carousel';
 
 class DemoCarousel extends Component {
     render() {
         return (
             <Carousel>
                 <div>
                     <img src="image1.jpeg" />
                     <p className="legend">Legend 1</p>
                 </div>
                 <div>
                     <img src="image2.jpeg" />
                     <p className="legend">Legend 2</p>
                 </div>
                 <div>
                     <img src="image3.jpeg" />
                     <p className="legend">Legend 3</p>
                 </div>
                 <div>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=wisQZqznofE'
            volume='1'
            muted
            width='100%'
            playing={true}
          />
        </div><div>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=xO3CVFB9gj0'
            volume='1'
            muted
            width='100%'
            playing={true}
          />
        </div><div>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=SaHE3tlgL8I'
            volume='1'
            muted
            width='100%'
            playing={true}
          />
        </div>
             </Carousel>
         );
     }
 });
 
 ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
