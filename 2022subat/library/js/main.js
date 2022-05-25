// $(window).on("load",function(){
//     $("#preloader").fadeOut("slow");
// });


$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
    
});

// Scrolling Effect

//  $(window).on("scroll", function() {
//      if($(window).scrollTop()) {
//            $('nav').addClass('black');
//      }

//      else {
//            $('nav').removeClass('black');
//      }
//  })

var previousScroll = 0,
    headerOrgOffset = $('nav').height();



$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('nav').addClass('hide');
        } else {
            $('nav').removeClass('hide');
        }
    } else {
        $('nav').removeClass('hide');
    }
    previousScroll = currentScroll;
});



var widthx = 1000;


window.onresize = function(event) {
    //dovizi tekrar ayarla
}

$(function doviz_yukle(){
    if($(window).width()<= 650){
        widthx=650;
    }
    else{
        widthx=$(window).width()*8/10;
    }
    typeof $.fn.paraceviriciWidget == "function" && 
    $("#W4982").paraceviriciWidget({
        widget:"slideline",//boxrow
        wData:{
            category:1,
            // currency:"USD-EUR-GBP-CHF-CNY-JPY-SAR-NOK-DKK-AUD"
            currency:"USD-EUR-GBP-AUD-DKK-CHF-SEK-CAD-KWD-NOK-SAR-JPY-BGN-RON-RUB-IRR-CNY-PKR"

        },
        wSize:{
            wWidth:"100%",
            wHeight:60
        },
        wBase: {
            rCombine: 0
        },
        wLeft: {
            		lStat: 2,
             		lBg: "#242f3f",
            		lCode: "USD"
            	},
        wFrame: {
            wBR: 3
        },
        wCode: {
            		cB: "normal"
             	},
        wContent: {
            pBuy: 0
        }
    });
    });


