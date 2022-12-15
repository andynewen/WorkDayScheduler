$(document).ready(function() {
  
  hours = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

  
  var today = dayjs().format("MMMM Do YYYY");
  $("#currentDay").append(today);

  
  var time = dayjs().format("H");
      
      console.log(time);
  
  var timeInt = parseInt(time) -9;

  
  function timeBlocks() {
      
      for (let i = 0; i < 9; i++) {

          var timeBlock = $("<div>");
          $(".container").append(timeBlock);
          timeBlock.attr("class", "row time-block");

          var hour = $("<div>");
          timeBlock.append(hour);
          hour.attr("class","hour");
          hour.text(hours[i]);
          
          var textArea = $("<textarea>");
          timeBlock.append(textArea);
          textArea.attr("id","text" + i);

         
          if (i < timeInt) { 
          textArea.attr("class", "description past");
          } else if (i > timeInt) {
              textArea.attr("class", "description future");
          } else {
              textArea.attr("class", "description present");
          };

          var saveBtn = $("<button>");
          timeBlock.append(saveBtn);
          saveBtn.attr("class","saveBtn far fa-save i:hover");
          saveBtn.attr("id", "save" + i); 
      }
  }
  timeBlocks();
  
 
  for (let i = 0; i < 8; i++) {
      var store = localStorage.getItem("save" + i);
      $("#text" + i).text(store);
  }

  $(".saveBtn").on("click",function(event) {
  var element = event.target.id;
  var match = element.charAt(element.length -1);
  var textContent = $("#text" + match).val();
  localStorage.setItem(element, textContent);
});

});