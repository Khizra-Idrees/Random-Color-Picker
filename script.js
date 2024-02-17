function changeColor(){

    // Initial RGB string
    var rgb = "1 , 1 , 1";

     // Split the RGB string into an array
    var rgbArray=rgb.split(",");
    console.log(rgbArray);

    // Generate random RGB values
    rgbArray[0] = Math.floor(Math.random() *256);
    rgbArray[1] = Math.floor(Math.random() *256);
    rgbArray[2] = Math.floor(Math.random() *256);
 
     // Construct a new RGB string
    var newRgb = "rgb(" +  rgbArray[0] + "," +  rgbArray[1] + "," +  rgbArray[2] + ")";

    // Update the content and background color of the main element
    document.querySelector("main").innerText=newRgb;
    document.querySelector("main").style.backgroundColor=newRgb;

    // Update the content and text color of the "rgbColor" div element
    document.getElementById("rgbColor").innerText=newRgb;
    document.getElementById("rgbColor").style.color=newRgb;
}