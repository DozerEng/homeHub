/*************************************************************
 
Function: Handles clicking of mobile menu button

*************************************************************/
toggleMenu = () => {
    if($("#menuButton").is(":visible")) {
        if( $(".navBar").is(":visible") ) {
            $(".navBar").css("display", "none");
            $(".softwarePages").css("display", "none");
            $(".projectsPages").css("display", "none");
            $(".otherPages").css("display", "none");
        } else {
        
            $(".navBar").css("display", "block");
        }
    }
}

/*************************************************************
 
Function: Handles loading of content onto website

*************************************************************/

navigateMain = (component, page) => {
    
    $.ajax({
        url: "content/" + page + ".html", 
        type: "GET",
        success: (result, status, xhr) => {                
            //Handling navBar calls to .mainContent
            if (component === ".mainContent") {
                $(".mainContent").empty();
                $(".content").empty();
                $(".active").removeClass("active");
                $("#" + page).addClass("active");
            } 
            //Every call:
            $(component).empty();
            $(component).append(result);
            //Make sure navBar in header is oriented for mobile/desktop
            if (component === ".headerMain") {
                adjustMenuElements();
            }
            //Clear mobile only menus (<900px)
            //DEPENDENTANT ON CSS @media size
            if( $(window).width() < 900) {
                $(".navBar").css("display", "none");
            }
            
            $('.searchBar').css('display', 'none');
        }
        //ToDo
        //error handler:
    });
}

/*************************************************************
 
Function: navigateSubOn()
    - For navBar sub panel

*************************************************************/

navigateSubOn = (name) => {
    $("." + name + "Pages").css("display", "block");
} 

/*************************************************************
 
Function: navigateSubOff()
    - For navBar sub panel

*************************************************************/

navigateSubOff = (name) => {
    $(".softwarePages").css("display", "none");
    $(".projectsPages").css("display", "none");
    $(".otherPages").css("display", "none");
}


/*************************************************************
 
Function: Handling window resizing.
    - handles navBar visibilities

*************************************************************/

var prevWidth = $(window).width();
adjustMenuElements = () => {
    let currentWidth = $(window).width();
    
    // Set Mobile element display settings
    if(currentWidth <= 900) {
        //Next 2 should be in opposition
        $("#menuButton").css("display", "block");
        $(".navBar").css("display", "none");
        $(".softwarePages").css("display", "none");
        $(".projectsPages").css("display", "none");
        $(".otherPages").css("display", "none");

        $(".navBar").css("background-color", "rgba(0,0,0,0)");
    } else {
        //Next 2 should be in opposition
        $(".navBar").css("display", "block");
        $("#menuButton").css("display", "none");

        //must match with .navBar in styles.css
        // $(".navBar").css("background-color", "rgb(40,40,40)");
        $(".navBar").css("background-image", "linear-gradient(to right, rgb(150,150,150), rgb(50,50,50), rgb(40,40,40), rgb(40,40,40))");
    }
    $('.searchBar').css('display', 'none');
    prevWidth = currentWidth;
}

$(window).on("resize", adjustMenuElements);

//EO Window Scroll Animation Handling