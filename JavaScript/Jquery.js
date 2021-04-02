<script>	
$(document).ready(function(){
	   
       $(".r2c3img2").hide();
	   $(".r2c3img1").hide();
	   $(".r2c3img3").hide();
	   $(".r2c3img4").hide();
	   $(".r2c3img5").hide();
	   $(".r2c3img6").hide();
	   $("#adt").hide();
	   $("#sb").hide();
	   
       var count = 0;
	   var cou = 0;
	  


   // function for select button    
  function selectedp(sbt,usbt,or,usimg,simg,simgsr,rgp1s,rgp2s,rgp3s,rgp4s,rgp5s,rgp6s,rgp1,rgp2,rgp3,rgp4,rgp5,rgp6,adt,sb){
  	   
       (sbt).hide("slow");
       (usbt).hide("slow");
	   (or).hide("slow");
	   (usimg).fadeTo(300,0.5);
	    
		
        
      if(simgsr == rgp1s){
		 (simg).hide("slow");
	     (rgp1).show("slow");
	   }
	   if(simgsr == rgp2s){ 
		 (simg).hide("slow");
	     (rgp2).show("slow");
	   }
	   if(simgsr == rgp3s){
		 (simg).hide("slow");
	     (rgp3).show("slow");
	   }
	   if(simgsr == rgp4s){ 
		 (simg).hide("slow");
	     (rgp4).show("slow");
	   }
	   if(simgsr == rgp5s){
		 (simg).hide("slow");
	     (rgp5).show("slow");
	   }
	   if(simgsr == rgp6s){
		 (simg).hide("slow");
	     (rgp6).show("slow");
	   }
	   
	   count++;
	 
	  if (count==3 ||count==6 || count==9 || count==12 ){
	    (adt).show("slow");
	    (sb).show("slow");
	   }
	  
	   }
	   
	   
	   
	   // giving parametres for select button
       $('#btn').click(function(){ 
        
		selectedp($("#btn"),$("#btn1"),$(".or"),$(".c1img2"),$(".c1img1"),
		$("#img1 img").attr("src"),$("#img7 img").attr("src"),$("#img8 img").attr("src"),
		$("#img9 img").attr("src"),$("#img10 img").attr("src"),$("#img11 img").attr("src"),$("#img12 img").attr("src"),
		$("#img7"),$("#img8"),$("#img9"),$("#img10"),$("#img11"),$("#img12"),$("#adt"),$("#sb"));
	      
	   });
	   
	   
	   $('#btn1').click(function(){ 
	   
	   selectedp($("#btn1"),$("#btn"),$(".or"),$(".c1img1"),$(".c1img2"),
		$("#img2 img").attr("src"),$("#img7 img").attr("src"),$("#img8 img").attr("src"),
		$("#img9 img").attr("src"),$("#img10 img").attr("src"),$("#img11 img").attr("src"),$("#img12 img").attr("src"),
		$("#img7"),$("#img8"),$("#img9"),$("#img10"),$("#img11"),$("#img12"),$("#adt"),$("#sb"));
	    
	   });
	   
	   
	   $('#btn2').click(function(){ 
	   
	   selectedp($("#btn2"),$("#btn3"),$(".or1"),$(".c2img2"),$(".c2img1"),
		$("#img3 img").attr("src"),$("#img7 img").attr("src"),$("#img8 img").attr("src"),
		$("#img9 img").attr("src"),$("#img10 img").attr("src"),$("#img11 img").attr("src"),$("#img12 img").attr("src"),
		$("#img7"),$("#img8"),$("#img9"),$("#img10"),$("#img11"),$("#img12"),$("#adt"),$("#sb"));
	       
	   });
	  
	  
	   $('#btn3').click(function(){ 
	  
	  selectedp($("#btn3"),$("#btn2"),$(".or1"),$(".c2img1"),$(".c2img2"),
		$("#img4 img").attr("src"),$("#img7 img").attr("src"),$("#img8 img").attr("src"),
		$("#img9 img").attr("src"),$("#img10 img").attr("src"),$("#img11 img").attr("src"),$("#img12 img").attr("src"),
		$("#img7"),$("#img8"),$("#img9"),$("#img10"),$("#img11"),$("#img12"),$("#adt"),$("#sb"));
        
	   });
	   
	   
	   
	   $('#btn4').click(function(){ 
	   
        selectedp($("#btn4"),$("#btn5"),$(".or2"),$(".c3img2"),$(".c3img1"),
		$("#img5 img").attr("src"),$("#img7 img").attr("src"),$("#img8 img").attr("src"),
		$("#img9 img").attr("src"),$("#img10 img").attr("src"),$("#img11 img").attr("src"),$("#img12 img").attr("src"),
		$("#img7"),$("#img8"),$("#img9"),$("#img10"),$("#img11"),$("#img12"),$("#adt"),$("#sb"));
	   
	   });
	   
	   
	   
	   $('#btn5').click(function(){ 
	   
	   selectedp($("#btn5"),$("#btn4"),$(".or2"),$(".c3img1"),$(".c3img2"),
		$("#img6 img").attr("src"),$("#img7 img").attr("src"),$("#img8 img").attr("src"),
		$("#img9 img").attr("src"),$("#img10 img").attr("src"),$("#img11 img").attr("src"),$("#img12 img").attr("src"),
		$("#img7"),$("#img8"),$("#img9"),$("#img10"),$("#img11"),$("#img12"),$("#adt"),$("#sb"));
		
	   });
	  
	   
	
     
	   
	   //function for remove button 
	  function remove(rgp1,rgps1,img1sr,img2sr,img3sr,img4sr,img5sr,img6sr
	  ,img1,im1b,img2,im2b,im1or,img3,im3b,img4,im4b,im2or
	  ,img5,im5b,img6,im6b,im3or,adt,sb){
	    
		 if(rgps1 == img1sr){
		           (rgp1).hide("slow");
			       (img1).show("slow");
				   (im1b).show("slow");
				   (im2b).show("slow");
				   (im1or).show("slow");
                   (img2).fadeTo("slow",1.0);				   
		 }
		 
		 if(rgps1 == img2sr){
		           (rgp1).hide("slow");
			       (img2).show("slow");
				   (im1b).show("slow");
				   (im2b).show("slow");
				   (im1or).show("slow");
				   (img1).fadeTo("slow",1.0);
			   }
		 if(rgps1 == img3sr){
		           (rgp1).hide("slow");
			       (img3).show("slow");
				   (im3b).show("slow");
				   (im4b).show("slow");
				   (im2or).show("slow");
				   (img4).fadeTo("slow",1.0);
	   }
	   
	   if(rgps1 == img4sr){
	               (rgp1).hide("slow");
			       (img4).show("slow");
				   (im3b).show("slow");
				   (im4b).show("slow");
				   (im2or).show("slow");
				   (img3).fadeTo("slow",1.0);
				   
	   }
	   
	   if(rgps1 == img5sr){
		           (rgp1).hide("slow");
			       (img5).show("slow");
				   (im5b).show("slow");
				   (im6b).show("slow");
				   (im3or).show("slow");
				   (img6).fadeTo("slow",1.0);
	   }          
	   
	   if(rgps1 == img6sr){
	               (rgp1).hide("slow");
			       (img6).show("slow");
				   (im5b).show("slow");
				   (im6b).show("slow");
				   (im3or).show("slow");
				   (img5).fadeTo("slow",1.0);
	   }
	  
	   cou++;
	   
	   if(count>=1){
	               (adt).hide("slow");
	               (sb).hide("slow");
	     
		           }
	   
	   }
	   
	   
	   
	   // giving parameters for remove button 
	   $("#btn6").click(function(){ 
	   
	   remove($("#img7"),$("#img7 img").attr("src"),$("#img1 img").attr("src"),$("#img2 img").attr("src"),$("#img3 img").attr("src")
	   ,$("#img4 img").attr("src"),$("#img5 img").attr("src"),$("#img6 img").attr("src"),$("#img1")
	   ,$("#btn"),$("#img2"),$("#btn1"),$(".or"),$("#img3"),$("#btn2"),$("#img4"),$("#btn3"),$(".or1"),$("#img5"),$("#btn4"),$("#img6"),$("#btn5"),$(".or2")
	    ,$("#adt"),$("#sb"));
	   
	  });
	  
	  
	   $("#btn7").click(function(){ 
	   
	   remove($("#img8"),$("#img8 img").attr("src"),$("#img1 img").attr("src"),$("#img2 img").attr("src"),$("#img3 img").attr("src")
	   ,$("#img4 img").attr("src"),$("#img5 img").attr("src"),$("#img6 img").attr("src"),$("#img1")
	   ,$("#btn"),$("#img2"),$("#btn1"),$(".or"),$("#img3"),$("#btn2"),$("#img4"),$("#btn3"),$(".or1"),$("#img5"),$("#btn4"),$("#img6"),$("#btn5"),$(".or2")
	    ,$("#adt"),$("#sb"));
	   
	   });
	   
	   $("#btn8").click(function(){ 
	   
	   remove($("#img9"),$("#img9 img").attr("src"),$("#img1 img").attr("src"),$("#img2 img").attr("src"),$("#img3 img").attr("src")
	   ,$("#img4 img").attr("src"),$("#img5 img").attr("src"),$("#img6 img").attr("src"),$("#img1")
	   ,$("#btn"),$("#img2"),$("#btn1"),$(".or"),$("#img3"),$("#btn2"),$("#img4"),$("#btn3"),$(".or1"),$("#img5"),$("#btn4"),$("#img6"),$("#btn5"),$(".or2")
	    ,$("#adt"),$("#sb"));
	   });
	  
	  
       $("#btn9").click(function(){ 
	   
	   remove($("#img10"),$("#img10 img").attr("src"),$("#img1 img").attr("src"),$("#img2 img").attr("src"),$("#img3 img").attr("src")
	   ,$("#img4 img").attr("src"),$("#img5 img").attr("src"),$("#img6 img").attr("src"),$("#img1")
	   ,$("#btn"),$("#img2"),$("#btn1"),$(".or"),$("#img3"),$("#btn2"),$("#img4"),$("#btn3"),$(".or1"),$("#img5"),$("#btn4"),$("#img6"),$("#btn5"),$(".or2")
	     ,$("#adt"),$("#sb"));
	   
	   });


       $("#btn10").click(function(){ 
	   
	   remove($("#img11"),$("#img11 img").attr("src"),$("#img1 img").attr("src"),$("#img2 img").attr("src"),$("#img3 img").attr("src")
	   ,$("#img4 img").attr("src"),$("#img5 img").attr("src"),$("#img6 img").attr("src"),$("#img1")
	   ,$("#btn"),$("#img2"),$("#btn1"),$(".or"),$("#img3"),$("#btn2"),$("#img4"),$("#btn3"),$(".or1"),$("#img5"),$("#btn4"),$("#img6"),$("#btn5"),$(".or2")
	    ,$("#adt"),$("#sb"));
	   
	   });	   
	  
	  
	   $("#btn11").click(function(){ 
	   
	   remove($("#img12"),$("#img12 img").attr("src"),$("#img1 img").attr("src"),$("#img2 img").attr("src"),$("#img3 img").attr("src")
	   ,$("#img4 img").attr("src"),$("#img5 img").attr("src"),$("#img6 img").attr("src"),$("#img1")
	   ,$("#btn"),$("#img2"),$("#btn1"),$(".or"),$("#img3"),$("#btn2"),$("#img4"),$("#btn3"),$(".or1"),$("#img5"),$("#btn4"),$("#img6"),$("#btn5"),$(".or2")
	     ,$("#adt"),$("#sb")); 
	   });
	    
		
	  $("#adt").click(function(){
	  
	    $("#img7,#img8,#img9,#img10,#img11,#img12,#adt,#sb").hide("slow");
	    
	  });
		
	});
</script>
	