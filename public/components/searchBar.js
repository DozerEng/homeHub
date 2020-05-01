/*************************************************************
 
Function: Toggles search bar visibility

*************************************************************/

var toggleSearchBar = () => {
    if($(".searchBar").is(":visible")) {
        $(".searchBar").css("display", "none");
        
    } else {
        $(".searchBar").css("display", "block");
    }
}