         $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
         if (!$(this).next().hasClass('show')) {
         $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
         }
         var $subMenu = $(this).next(".dropdown-menu");
         $subMenu.toggleClass('show');
         
         
         $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
         $('.dropdown-submenu .show').removeClass("show");
         });
                  
         return false;

         });             

         window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "#fcb800";  
    document.getElementById("navbarToggler").style.color = "black";
    document.getElementById("navbarDropdownMenuLink").style.color = "black";    
    document.getElementById("dropdownMenu").style.color = "black";
    document.getElementById("nav-link").style.color = "black";   
    document.getElementById("nav-link-2").style.color = "black"; 
    document.getElementById("nav-link-3").style.color = "black";     
    document.getElementById("navbarFbIconLink").style.color = "black";
    document.getElementById("navbarTwitterIconLink").style.color = "black";
    document.getElementById("navbarInstaIconLink").style.color = "black";
    document.getElementById("logInButton").style.color = "black";
    document.getElementById("dropdownMenu").style.backgroundColor = "#fcb800";
    document.getElementById("secondDropdownMenu").style.backgroundColor = "#fcb800";    
    document.getElementsByClassName("dropdownItem").style.color = "black";    
  } else {
    document.getElementById("navbar").style.background = "transparent";    
    document.getElementById("navbarToggler").style.color = "#fcb800";
    document.getElementById("navbarDropdownMenuLink").style.color = "#fcb800";
    document.getElementById("dropdownMenu").style.color = "#fcb800";
    document.getElementById("nav-link").style.color = "#fcb800";    
    document.getElementById("nav-link-2").style.color = "#fcb800";    
    document.getElementById("nav-link-3").style.color = "#fcb800";        
    document.getElementById("navbarFbIconLink").style.color = "#fcb800";
    document.getElementById("navbarTwitterIconLink").style.color = "#fcb800";
    document.getElementById("navbarInstaIconLink").style.color = "#fcb800";
    document.getElementById("logInButton").style.color = "#fcb800";
    document.getElementById("dropdownMenu").style.backgroundColor = "transparent";
    document.getElementById("secondDropdownMenu").style.backgroundColor = "transparent";
    document.getElementsByClassName("dropdownItem").style.color = "#fcb800";    
  }
}; 


function whishlistbtn(){
  document.getElementById("hearticon").style.color = "red";  
};

$(document).ready(function(){
  $(".scroll-top").click(function() {
      $("html, body").animate({ 
          scrollTop: 0 
      }, "slow");
      return false;
  });
});