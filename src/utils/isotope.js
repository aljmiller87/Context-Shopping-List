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
}
