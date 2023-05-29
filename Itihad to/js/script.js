$(window).on("load" , function(){

    let menuOpen = false;
    let headerHeight = $("header").height();
    
    $("#navbar").css("top" , headerHeight);

    
    if (window.innerWidth < 700) {
        $(".services").each(function(){
            $(this).css("height",($(this).find('span').height()) + 38);
        });
    }else{
        $(".services").each(function(){
            $(this).css("height",($(this).find('span').height()) + 64);
        });
    }

    window.onresize = function() {
        if (window.innerWidth < 700) {
            headerHeight = $("header").height();
            $("#navbar").css("top" , headerHeight);

            $(".services").each(function(){
                $(this).css("height",($(this).find('span').height()) + 38);
            });
        }else{
            $(".services").each(function(){
                $(this).css("height",($(this).find('span').height()) + 64);
            });
        }

    }

    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    theAnimation(scrollTop , windowHeight);

    $(window).on("scroll" , function() {
        scrollTop = $(window).scrollTop();
        windowHeight = $(window).height();
    
        theAnimation(scrollTop , windowHeight);
    });

    function theAnimation(top , winHeight) {
        if (top + winHeight > $('.rows:nth-child(2) img').offset().top) {
            $('.rows:nth-child(2) img').addClass('animate');
            $('.rows:nth-child(2) p').addClass('animate-reverse');
        }

        if(top + winHeight > $('.rows:nth-child(3) img').offset().top){
            $('.rows:nth-child(3) p').addClass('animate');
            $('.rows:nth-child(3) img').addClass('animate-reverse');
        }

        if (top + winHeight > $('.rows:nth-child(4) img').offset().top) {
            $('.rows:nth-child(4) img').addClass('animate');
            $('.rows:nth-child(4) p').addClass('animate-reverse');
        }
    }

    
    
    $(".menu-btn").on("click" , function(){
        $("#navbar").slideToggle();
        if(!menuOpen) {
            $(".menu-btn").addClass("open");
            menuOpen = true;
          } else {
            $(".menu-btn").removeClass("open");
            menuOpen = false;
          }
    });

    $(".hovers").on("click" , () => {
        $("#navbar").slideToggle();
        $(".menu-btn").removeClass("open");
        menuOpen = false;
    });


    // Flexslider
    $(".flexslider").flexslider(
        {
            animation: "slide",
            slideshowSpeed: 10000,
            pauseOnHover: true,
            before: function() {
                $(".content").css("bottom", "-100%");

                $(".forH2 h2").removeClass("slideH2");
                $(".forH2").removeClass("forBefore");
                $(".forP p").removeClass("slideP");

                $(".forH2 h2").hide();
                $(".forP p").hide();
            },

            start: function() {
                $(".forH2 h2").hide();
                $(".forP p").hide();
                $(".forH2").removeClass("forBefore");

                
                $(".content").animate({
                    bottom: "0"
                }, 600, function () {
                    $(".forH2").addClass("forBefore");
                    $(".forH2 h2").addClass("slideH2");
                    $(".forH2 h2").show();
                    $(".forP p").addClass("slideP");
                    $(".forP p").show();
                });
            },

            after: function() {
                $(".content").animate({
                    bottom: "0"
                }, 600, function () {
                    $(".forH2").addClass("forBefore");
                    $(".forH2 h2").addClass("slideH2");
                    $(".forH2 h2").show();
                    $(".forP p").addClass("slideP");
                    $(".forP p").show();
                });
            }
        }
    );
});
