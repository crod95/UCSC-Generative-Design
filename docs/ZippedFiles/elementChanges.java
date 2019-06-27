      var myX = 0;
      var myCol = "black";
      function colorSwitch() 
      {
         myX = myX + 1;
         if (myX % 3 == 1) 
	 {
            myCol = "red";
         } 
	 else if (myX % 3 == 2) 
	 {
            myCol = "blue";
         } 
	 else 
	 {
            myCol = "black";
         }
	 document.getElementById("ClickText").style.color = myCol;
       }
       var myY = 0;
       var mySaying = ""
       function changeParagraph()
       {
          myY = myY + 1;
          if (myY % 5 == 1) 
          {
             mySaying = "War, War Never Changes";
          } 
          else if (myY % 5 == 2) 
          {
             mySaying = "History is Written by the Victors";
          } 
          else if(myY % 5 == 3)
          {
             mySaying = "I Used to be an Adventurer Like you Before, Until I Took an Arrow to the Knee";
          }
          else if(myY % 5 == 4)
          {
             mySaying = "M is Mini and W is for Wumbo";
          }
          else 
          {
             mySaying = "Into the Fray We Go";
          }
          document.getElementById("Paragraph01").innerHTML = mySaying;
       } 
       //"War, War Never Changes"
       //"History is Written by the Victors"
       //"I Used to be an Adventurer Like you Before, Until I Took an Arrow to the Knee"
       //"M is Mini and W is for Wumbo" 
       //"Into the Fray We Go"