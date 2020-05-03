function grocy(sel) {
 console.log(sel);
    var xhttp = new XMLHttpRequest();                             //Creating an XHR Obkect 
    xhttp.onreadystatechange = function() {                       //EventListener //or EVENT HANDLER
    
        if(this.readyState==4 && this.status==200) {              //COndition
         
        var obj = { table: sel, limit: 10};
                                                                  // var Jtable= JSON.stringify(obj);

            var response = JSON.parse(this.responseText);         //JSON.parse will start to convert JSON to a text format
            console.log(response);                                //Access to Object
    
            var JGro = response.GROLIST;                          // Assign object using dot operator to var
            console.log(JGro);         
                                    
            var txt= "";

                                                                  // txt+= "<table border='1'>";

            var i=0;
            
            for(i=0; i<JGro.length; i++) {

                if(sel=="ALL") {

                txt += "<tr><td>" + JGro[i]["Serial No."] + "</td><td>" + JGro[i]["ITEM"] + "</td><td>" + 
                JGro[i]["QUANTITY"] + "</td><td>" + JGro[i]["UNITS"] +  "</td><td>" + JGro[i]["DEPARTMENT"] + 
                "</td><td>" + JGro[i]["NOTES"] + "</td><tr>"

                // console.log(JGro[i]);
                }

                else if(sel=="ITEM") {
                    txt += "<tr><td>" + JGro[i]["Serial No."] + "</td><td>" + JGro[i]["ITEM"] + "</td><td>" + 
                    JGro[i]["QUANTITY"] + "</td><td>" + JGro[i]["UNITS"]  + "</td><tr>"

                }

                else {

                    txt += "<tr><td>" + JGro[i]["Serial No."] + "</td><td>" + JGro[i]["DEPARTMENT"] + "</td><tr>"
                }
                
            }


             // for (i in JGro) {
      
            
            //     txt += "<tr><td>" + JGro[i]["Serial No."] + "</td><td>" + JGro[i]["ITEM"] + "</td><td>" + 
            //     JGro[i]["QUANTITY"] + "</td><td>" + JGro[i]["UNITS"] +  "</td><td>" + JGro[i]["DEPARTMENT"] + 
            //     "</td><td>" + JGro[i]["NOTES"] + "</td><tr>"

            //   }

            //   txt += "</table>" 

       
    
            document.getElementById("GLists").innerHTML= txt;  
            //                                                      //  //FOR Deveopement purpose, check output in consol
            // console.log(output);    
            

        }
        //   xhttp.send("i=" + Jtable); 
    
        }
    
    xhttp.open("GET","list.json", true);                       // json format
    xhttp.send();
    
    }
    
    