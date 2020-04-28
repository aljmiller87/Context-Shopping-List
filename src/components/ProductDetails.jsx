import React from "react";

const ProductDetails = (props) => {
  return (
    <div className="product_details">
      <div className="container">
        <div className="row details_row">
          {/* Product Image */}
          <div className="col-lg-6">
            <div className="details_image">
              <div className="details_image_large">
                <img src="images/details_1.jpg" alt="" />
                <div className="product_extra product_new">
                  <a href="categories.html">New</a>
                </div>
              </div>
              <div className="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
                <div
                  className="details_image_thumbnail active"
                  data-image="images/details_1.jpg"
                >
                  <img src="images/details_1.jpg" alt="" />
                </div>
                <div
                  className="details_image_thumbnail"
                  data-image="images/details_2.jpg"
                >
                  <img src="images/details_2.jpg" alt="" />
                </div>
                <div
                  className="details_image_thumbnail"
                  data-image="images/details_3.jpg"
                >
                  <img src="images/details_3.jpg" alt="" />
                </div>
                <div
                  className="details_image_thumbnail"
                  data-image="images/details_4.jpg"
                >
                  <img src="images/details_4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <div className="col-lg-6">
            <div className="details_content">
              <div className="details_name">Smart Phone</div>
              <div className="details_discount">$890</div>
              <div className="details_price">$670</div>

              {/* In Stock */}
              <div className="in_stock_container">
                <div className="availability">Availability:</div>
                <span>In Stock</span>
              </div>
              <div className="details_text">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo
                  tempus mollis sed et dui. In hac habitasse platea dictumst.
                  Suspendisse ultrices mauris diam. Nullam sed aliquet elit.
                  Mauris consequat nisi ut mauris efficitur lacinia.
                </p>
              </div>

              {/* Product Quantity */}
              <div className="product_quantity_container">
                <div className="product_quantity clearfix">
                  <span>Qty</span>
                  <input
                    id="quantity_input"
                    type="text"
                    pattern="[0-9]*"
                    defaultValue="1"
                  />
                  <div className="quantity_buttons">
                    <div
                      id="quantity_inc_button"
                      className="quantity_inc quantity_control"
                    >
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </div>
                    <div
                      id="quantity_dec_button"
                      className="quantity_dec quantity_control"
                    >
                      <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div className="button cart_button">
                  <a href="/">Add to cart</a>
                </div>
              </div>

              {/* Share */}
              <div className="details_share">
                <span>Share:</span>
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row description_row">
          <div className="col">
            <div className="description_title_container">
              <div className="description_title">Description</div>
              <div className="reviews_title">
                <a href="/">
                  Reviews <span>(1)</span>
                </a>
              </div>
            </div>
            <div className="description_text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo
                tempus mollis sed et dui. In hac habitasse platea dictumst.
                Suspendisse ultrices mauris diam. Nullam sed aliquet elit.
                Mauris consequat nisi ut mauris efficitur lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
