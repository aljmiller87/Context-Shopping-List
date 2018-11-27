import React, { Component } from 'react'
import CategoriesImg from './../../images/categories.jpg'


export default class Banner extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {

      const imgStyle = this.props.imgStyle;
    
      console.log(imgStyle);
        return (


            <div className="home">
              <div className="home_slider_container">
                
                {/* <!-- Home Slider --> */}
                <div className=" home_slider">
                  
                  {/* <!-- Slider Item --> */}
                  <div className=" home_slider_item">
                  {/* home_slider_background get style="backgourn img" */}
                    <div className="home_slider_background" style={imgStyle}></div>
                    <div className="home_slider_content_container">
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <div className="home_slider_content"  data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                              <div className="home_slider_title">A new Online Shop experience.</div>
                              <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                              <div className="button button_light home_button"><a href="#">Shop Now</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
        )
    }
    
}

