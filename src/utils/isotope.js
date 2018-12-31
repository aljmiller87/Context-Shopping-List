import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

export default function initIsotope() {
    var elem = document.querySelector('.product_grid');
    
    if (elem) {
        imagesLoaded( elem, function() {
            new Isotope( elem, {
                // options
                itemSelector: '.product',
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: 30
                },
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

        });
        
    }

    // $(function () {
    //     console.log('Hello jQuery');
    //     console.log('jquery', $);
    //     console.log($('.product_grid'));
    
    //     if($('.product_grid').length)
    //     {
    //         var grid = $('.product_grid').isotope({
    //             itemSelector: '.product',
    //             layoutMode: 'fitRows',
    //             fitRows:
    //             {
    //                 gutter: 30
    //             },
    //             getSortData:
    //             {
    //                 price: function(itemElement)
    //                 {
    //                     var priceEle = $(itemElement).find('.product_price').text().replace( '$', '' );
    //                     return parseFloat(priceEle);
    //                 },
    //                 name: '.product_name',
    //                 stars: function(itemElement)
    //                 {
    //                     var starsEle = $(itemElement).find('.rating');
    //                     var stars = starsEle.attr("data-rating");
    //                     return stars;
    //                 }
    //             },
                // animationOptions:
                // {
                //     duration: 750,
                //     easing: 'linear',
                //     queue: false
                // }
    //         });
    //     }
    
    // });

}
