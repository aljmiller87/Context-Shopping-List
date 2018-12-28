import {$,jQuery} from '../../node_modules/jquery/dist/jquery.js';


export default function initIsotope()
{
    // var sortingButtons = jQuery('.product_sorting_btn');
    // var sortNums = jQuery('.num_sorting_btn');
    console.log('jquery', jQuery);
    console.log($('.product_grid'));

    if($('.product_grid').length)
    {
        var grid = $('.product_grid').isotope({
            itemSelector: '.product',
            layoutMode: 'fitRows',
            fitRows:
            {
                gutter: 30
            },
            getSortData:
            {
                price: function(itemElement)
                {
                    var priceEle = $(itemElement).find('.product_price').text().replace( '$', '' );
                    return parseFloat(priceEle);
                },
                name: '.product_name',
                stars: function(itemElement)
                {
                    var starsEle = $(itemElement).find('.rating');
                    var stars = starsEle.attr("data-rating");
                    return stars;
                }
            },
            animationOptions:
            {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
    }
}
