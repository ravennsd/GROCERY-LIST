
function ajax() {

var xhttp = new XMLHttpRequest();                             //Creating an XHR Obkect 
xhttp.onreadystatechange = function() {                       //EventListener

    if(this.readyState==4 && this.status==200) {              //COndition
                                                              // document.getElementById("demo").innerHTM= this.responseText;
        var response = JSON.parse(this.responseText);         //JSON.parse will start to convert JSON to a text format
        console.log(response);                                //Access to Object

        var Jpeople = response.people;                        // Assign object using dot operator to var
        console.log(Jpeople);                                 //Access to people

        var output = "";
        
        for(var i=0;i<Jpeople.length;i++) {
        output += "<li>"+ Jpeople[i].name + "</li>" ;
        }

        document.getElementById("demo").innerHTML= output;  
        //                                                      //  //FOR Deveopement purpose, check output in consol
        // console.log(output);    
    }
      

    }

xhttp.open("GET", "people.json", true);                       // json format
xhttp.send();

}
