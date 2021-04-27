var playlist= [{"id":"1","title":"Croissants | Flour and Stone","thumbnail":"https://i.vimeocdn.com/video/600595198_390x220.webp"},{"id":"2","title":"Perfect Mashed Potatoes and Gravy","thumbnail":"https://i.vimeocdn.com/video/604150056_390x220.webp"},{"id":"3","title":"The Heart of Soba","thumbnail":"https://i.vimeocdn.com/video/726986673_390x220.webp"},{"id":"4","title":"Grilled Cheese 9 Ways","thumbnail":"https://i.vimeocdn.com/video/570486309_390x220.webp"},{"id":"5","title":"Pineapple Cheesecake","thumbnail":"https://i.vimeocdn.com/video/602705517_390x220.webp"},{"id":"6","title":"Lemony Chicken Noodle Soup","thumbnail":"https://i.vimeocdn.com/video/537261616_390x220.jpg"},{"id":"7","title":"Pumpkin Roll","thumbnail":"https://i.vimeocdn.com/video/608805594_590x332.jpg"},{"id":"8","title":"How to Brine a Turkey","thumbnail":"https://i.vimeocdn.com/video/601730519_590x332.jpg"},{"id":"9","title":"Stop Motion Dry-Brined Turkey Recipe","thumbnail":"https://i.vimeocdn.com/video/456852083_590x332.jpg"},{"id":"10","title":"Butternut Squash Ravioli","thumbnail":"https://i.vimeocdn.com/video/600328152_590x332.jpg"}]



function grid(thumb, text){
    var mainCard= document.createElement("div");
var image= document.createElement("img");
mainCard.appendChild(image);
var heading =document.createElement("h3");
mainCard.appendChild(heading);
image.className="image";
image.src=thumb;
heading.innerText=text;

mainCard.className="video-card";
heading.className="title";

var mainGrid= document.getElementById("video-grid");
mainGrid.appendChild(mainCard);
console.log(mainGrid);

}

 var http= new XMLHttpRequest();

 http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",true);
 http.onreadystatechange= function(){
    if (this.readyState===4){
        var sources=JSON.parse(this.responseText);
        for( var pos=0 ; pos<playlist.length; pos++){
           grid( sources[pos].thumbnail,sources[pos].title);
       }

    }
}
 http.send();






