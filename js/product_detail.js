   function showmaroonproduct() {
       document.getElementById("maroonimage").style.display = "block";
       document.getElementById("marooncolor").style.border = "4px solid #fcb800";       
       document.getElementById("blackimage").style.display = "none";
       document.getElementById("blackcolor").style.border = "none";
       document.getElementById("whiteimage").style.display = "none";
       document.getElementById("whitecolor").style.border = "none";
};

function showblackproduct(){
    document.getElementById("blackimage").style.display = "block";
    document.getElementById("blackcolor").style.border = "4px solid #fcb800";
    document.getElementById("maroonimage").style.display = "none";
    document.getElementById("marooncolor").style.border = "none";
    document.getElementById("whiteimage").style.display = "none";
    document.getElementById("whitecolor").style.border = "none";    
};

function showwhiteproduct(){
    document.getElementById("whiteimage").style.display = "block";
    document.getElementById("whitecolor").style.border = "4px solid #fcb800";
    document.getElementById("blackimage").style.display = "none";
    document.getElementById("blackcolor").style.border = "none";
    document.getElementById("maroonimage").style.display = "none";
    document.getElementById("marooncolor").style.border = "none";
};