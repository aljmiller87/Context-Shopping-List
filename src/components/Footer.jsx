import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
        const FooterStyle = {
            backgroundImage: this.props.img
        }
          
      return (
        <div>
          	<div className="footer_overlay"></div>
            <footer className="footer">
                <div className="footer_background" style={FooterStyle}></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                                <div className="footer_logo"><a href="#">Sublime.</a></div>
                                {/* <div className="copyright ml-auto mr-auto"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></div> */}
                                <div className="footer_social ml-lg-auto">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
      )
    }
}