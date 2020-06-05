var sunPic = document.getElementById("sun-pic");
var zhaoPic = document.getElementById("zhao-pic");
var anniPic = document.getElementById("anni-pic");
var sun = document.getElementById("孙燕姿");
var zhao = document.getElementById("赵薇");
var anni = document.getElementById("安妮海瑟薇");

/* sun.addEventListener("click", function() {
    if (sunPic.className == "hide") {
        sunPic.className ="";
    } else {
        sunPic.className = "hide";
    }
});
zhao.addEventListener("click", function() {
    if (zhaoPic.className == "hide") {
        zhaoPic.className ="";
    } else {
        zhaoPic.className = "hide";
    }
});
anni.addEventListener("click", function() {
    if (anniPic.className == "hide") {
        anniPic.className ="";
    } else {
        anniPic.className = "hide";
    }
}); */
sun.addEventListener("click",picLink);
zhao.addEventListener("click",picLink);
anni.addEventListener("click",picLink);

/* 设置初始图片隐藏 */
var allImage = document.querySelectorAll("img")
for(var i=0;i < allImage.length;i++){
    allImage[i].className = "hide";
}


/* 注意属性的获取*/
function picLink() {
    var picID = this.attributes["data-img"].value  
    console.log(picID)
    var pic = document.getElementById(picID)
    if (pic.className == "hide") {
        pic.className ="";
    } else {
        pic.className = "hide";
    }
}

