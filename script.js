var images = ['./1 (1).jpg',['./1 (10).jpg'],['./1 (2).jpg'],['./1 (4).jpg'],['./1 (5).jpg'],['./1 (6).jpg'],['./1 (7).jpg'],['./1 (8).jpg'],['./1 (9).jpg'],['./45 (1).jpg'],['./45 (2).jpg'],['./gerard.jpg']];

var i=0;

function slideshow(){
      document.getElementById("image").src=images[i];

      if(i<images.length-1){
            i++;
      }else{
            i=0;
      }
      setTimeout("slideshow()" , 2000);
}
window.onload = slideshow;