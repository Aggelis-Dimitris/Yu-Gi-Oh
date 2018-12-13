/*Function that is called when user clicks on a button and it passes as a parameter the name of the card that was selected*/ 
 function fetchData(name){
   $.ajax({
     method:"GET",
     url:"http://52.57.88.137/api/card_data/"+name,
     dataType:"json",
     success:function(data){
       $("#name").html(" ");
       $("#name").append("<h2>"+data.data.name+"</h2>");
       $("#photo").html(" ");
       $("#photo").append('<img src="http://52.57.88.137/api/card_image/'+name+'">');
       $("#text").html(" ");
       $("#text").append("<p><h2>Description</h2><br>"+data.data.text+"</p>");
       $("#details").html(" ");
       $("#details").append("<p><h2>Details</h2><ul><li>Type: "+data.data.type+"</li><li>Family: "+data.data.family+"</li><li>Atk :"+data.data.atk+"</li><li>Def: "+data.data.def+"</li><li>Level: "+data.data.level+"</li><li>Property: "+data.data.property+"</li></ul></p>")
       $("#crdtp").html(" ");
       $("#crdtp").append("<b>You picked a "+data.data.card_type+" card</b>");
     }
   });
 }