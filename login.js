function validate() {
	var Uname = document.forms["login"]["Uname"].value;
	var pass = document.forms["login"]["pass"].value;
	var atpos = Uname.indexOf("@");
    var dotpos = Uname.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=Uname.length) {
        alert("Not a valid e-mail address");
        return false;
    }
   	var xHTTP = new XMLHttpRequest();
	var result = document.getElementById('result');
	xHTTP.onreadystatechange = function(){
				if(this.readyState == '4' && this.status == '200'){
					var response = this.responseText; 
					response = JSON.parse(response); console.log(response);
					if(response.status != 200){
						result.innerHTML = response.message;
						setTimeout(refresh,2000);
					 }
					else{
						window.location="gallery.html";
					}
			}
		}
	xHTTP.open('POST','https://exptest.herokuapp.com/api/login',true);
	xHTTP.setRequestHeader('Content-type' , "application/x-www-form-urlencoded");
	xHTTP.send('userName='+Uname+'&password='+pass);
	return false;
}

function refresh(){
	window.location.reload(true);
}


