//ToDo: Everything, fix background, change "close pop up" logic, include zoom in/out buttons on pop up 

/*************************************************************
 
Function: Image and general item pop up

*************************************************************/
popUpButton = (windowAction, popUpName) => {

    var popUpId = "#" + popUpName;
    var popUpClass = "." + popUpName;

    if(windowAction === 'open') {   
        $(".backgroundCover").css('display', 'block');
        if(popUpName.match(/^image/)) {
            var imgUrl = $(popUpId).attr('src');

            $("#imagePopUp").attr('src', imgUrl);

            var myImg = document.querySelector("#imagePopUp");
            var realWidth = myImg.naturalWidth;
            var realHeight = myImg.naturalHeight;

            var windowHeight = $(window).height();
            var windowWidth = $(window).width();

            if( realHeight/realWidth - windowHeight/windowWidth > 0.0 ) { //realHeight > windowWidth
                var imageHeight = 0.8 * windowHeight;
                var heightOffset = ((windowHeight - imageHeight) / 2.0 ); 
                var widthOffset = (windowWidth - (imageHeight/realHeight)*realWidth ) / 2.0;
                $("#imagePopUp").attr('height', imageHeight);
                $("#imagePopUp").attr('width', 'auto');
                $("#imagePopUp").css('left', widthOffset);
                $("#imagePopUp").css('top', heightOffset);
            } else {
                var imageWidth = 0.8 * windowWidth;
                var widthOffset = ((windowWidth - imageWidth) / 2.0 ); 
                var heightOffset = (windowHeight - (imageWidth/realWidth) * realHeight) / 2.0;

                $("#imagePopUp").attr('width', imageWidth);
                $("#imagePopUp").attr('height', 'auto');                        
                $("#imagePopUp").css('left', widthOffset);
                $("#imagePopUp").css('top', heightOffset);
            }
            $("#imageContainer").css('display', 'block');
        }
        else {//login/signup
            $(popUpId).addClass('currentPopUp');
            $(popUpId).css('display', 'block');
        }
    }
    else if(windowAction === 'close') {        
        $(".backgroundCover").css('display', 'none'); 
        if( $(popUpClass).hasClass('currentPopUp') ) { //click on background
            $('.currentPopUp').css('display', 'none');
            popUpId = '#' + $('.currentPopUp').attr("id");
            $(popUpId).removeClass('currentPopUp');

        } else if (popUpName.match(/^image/)) {//handles click on container and enlarged image
            $("#imagePopUp").removeAttr('src');
            $("#imageContainer").css('display', 'none');
        }
        else {//login, signup, , on background click
            $(popUpId).css('display', 'none');
        }
    }
}

/*************************************************************
 
Function: Window Scroll Animation Handling

*************************************************************/
var prevYOffset = window.pageYOffset;
scrollAdjust = () => {
    let currentYOffset = window.pageYOffset;
    if(currentYOffset <= 75) {
        $("#imagePELogo").css("opacity", "0.0");
        $("#imageSearchLogo").css("margin-left", "10px");
    } else {
        $("#imageSearchLogo").css("margin-left", "70px");
        $("#imagePELogo").css("opacity", "1.0");
    }

    prevYOffset = currentYOffset;
}

$(window).on("scroll", scrollAdjust);
//EO Window Scroll Animation Handling

/*************************************************************
 
Function: Loads specific component html

*************************************************************/

loadComponentHTML = (component, page) => {
    
    console.log("\nPage: " + page + "\n");
    
    console.log("\nComponent: " + component + "\n");
    $.ajax({
        url: "../components/" + page + ".html",
        type: "GET",
        success: (result, status, xhr) => {
            $(component).empty();
            $(component).append(result);
            //Make sure navBar in header is oriented for mobile/desktop
            if (component === ".headerMain") {
                adjustMenuElements();
            }
        },
        error: (xhr, status, errorThrown) => {
            console.log("Error: ", errorThrown);
        }
    });
}