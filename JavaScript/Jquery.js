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