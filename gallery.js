var xHTTP = new XMLHttpRequest();
var response,img,p,txt;
var main =document.getElementById('main');
xHTTP.onreadystatechange = function(){
				if(this.readyState == '4' && this.status == '200'){
					response = this.responseText; 
					response = JSON.parse(response); 
					gallery();
					console.log(response);}
				}

xHTTP.open('GET','https://exptest.herokuapp.com/api/imageGallery',true);
xHTTP.send();

function gallery(){
 	
 	for (var i = 0; i < 14; i++) {
 		var box = document.createElement('div');
 		box.className = 'box';
 		img= document.createElement('img');
 		img.setAttribute('width','200px');
 		img.setAttribute('height','200px');
 		img.src = response.data[i].imageUrl;
 		p = document.createElement('p');
 		txt = document.createTextNode(response.data[i].caption);
 		p.appendChild(txt);
 		main.appendChild(box);
 		box.appendChild(img);
 		box.appendChild(p);

 	};


 }


function logout(){
	var conf = confirm("Do you want to Logout?");
	if(conf==true){
		window.location = "index.html";
	}

}

