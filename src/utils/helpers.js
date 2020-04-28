// // Couldn't get class to work
// // Error said 'this.header was not a function'

// class Helpers {
//   constructor() {
//     this.header = document.querySelector(".header");
//     this.search = "";
//     this.searchPanel = "";

//     this.eventListeners();
//     this.header();
//     this.search();
//   }

//   eventListeners() {
//     window.addEventListener("scroll", () => {
//       this.header();
//     });

//     window.addEventListener("resize", () => {
//       this.header();
//     });
//   }

//   // Header class toggle
//   header() {
//     if (window.pageYOffset > 100) {
//       this.header.classList.add("scrolled");
//     } else {
//       this.header.classList.remove("scrolled");
//     }
//   }

//   // Search Toggle
//   search() {
//     if (
//       document.querySelector(".search") &&
//       document.querySelector(".search_panel")
//     ) {
//       this.search = document.querySelector(".search");
//       this.searchPanel = document.querySelector(".search_panel");

//       this.search.addEventListener("click", () => {
//         this.searchPanel.classList.toggle("active");
//       });
//     }
//   }
// }

export default function initHelpers() {
  // new Helpers;

  const eventListeners = () => {
    window.addEventListener("scroll", () => {
      initHeader();
    });

    window.addEventListener("resize", () => {
      initHeader();
    });
  };

  // Header class toggle
  const initHeader = () => {
    const header = document.querySelector(".header");
    if (header) {
      if (window.pageYOffset > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  };

  // Search Toggle
  const initSearch = () => {
    const search = document.querySelector(".search");
    const searchPanel = document.querySelector(".search_panel");

    if (search && searchPanel) {
      search.addEventListener("click", () => {
        searchPanel.classList.toggle("active");
      });
    }
  };

  // var menuActive = false;

  /* 

	4. Init Menu, convert from jQuery

	*/

  // function initMenu()
  // {
  // 	if($('.hamburger').length)
  // 	{
  // 		var hamb = $('.hamburger');

  // 		hamb.on('click', function(event)
  // 		{
  // 			event.stopPropagation();

  // 			if(!menuActive)
  // 			{
  // 				openMenu();

  // 				$(document).one('click', function cls(e)
  // 				{
  // 					if($(e.target).hasClass('menu_mm'))
  // 					{
  // 						$(document).one('click', cls);
  // 					}
  // 					else
  // 					{
  // 						closeMenu();
  // 					}
  // 				});
  // 			}
  // 			else
  // 			{
  // 				$('.menu').removeClass('active');
  // 				menuActive = false;
  // 			}
  // 		});

  // 		//Handle page menu
  // 		if($('.page_menu_item').length)
  // 		{
  // 			var items = $('.page_menu_item');
  // 			items.each(function()
  // 			{
  // 				var item = $(this);

  // 				item.on('click', function(evt)
  // 				{
  // 					if(item.hasClass('has-children'))
  // 					{
  // 						evt.preventDefault();
  // 						evt.stopPropagation();
  // 						var subItem = item.find('> ul');
  // 					    if(subItem.hasClass('active'))
  // 					    {
  // 					    	subItem.toggleClass('active');
  // 							TweenMax.to(subItem, 0.3, {height:0});
  // 					    }
  // 					    else
  // 					    {
  // 					    	subItem.toggleClass('active');
  // 					    	TweenMax.set(subItem, {height:"auto"});
  // 							TweenMax.from(subItem, 0.3, {height:0});
  // 					    }
  // 					}
  // 					else
  // 					{
  // 						evt.stopPropagation();
  // 					}
  // 				});
  // 			});
  // 		}
  // 	}
  // }

  // function openMenu()
  // {
  // 	var fs = $('.menu');
  // 	fs.addClass('active');
  // 	hambActive = true;
  // 	menuActive = true;
  // }

  // function closeMenu()
  // {
  // 	var fs = $('.menu');
  // 	fs.removeClass('active');
  // 	hambActive = false;
  // 	menuActive = false;
  // }

  window.onload = () => {
    eventListeners();
    initHeader();
    initSearch();
    // initMenu();
  };
}
