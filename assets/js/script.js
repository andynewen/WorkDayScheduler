$(document).ready(function() {
  // The program should display the hours of the day.
  hours = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

  // The current date should be printed.
  var today = dayjs().format("MMMM Do YYYY");
  $("#currentDay").append(today);

  // The program should track the current hour in military time.
  var time = dayjs().format("H");
      // The current hour is logged for reference.
      console.log(time);
  // The time is converted into an integer.
  var timeInt = parseInt(time) -9;

  // Time blocks are added to the container.
  function timeBlocks() {
      // A time block is added for each hour in the hours array.
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

         // The text area is color-coded based on the current time using the specified CSS class.
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
  
 // Any saved text is retrieved from local storage.
  for (let i = 0; i < 8; i++) {
      var store = localStorage.getItem("save" + i);
      $("#text" + i).text(store);
  }
// When the save button is clicked, the text is saved to local storage.
  $(".saveBtn").on("click",function(event) {
  var element = event.target.id;
  var match = element.charAt(element.length -1);
  var textContent = $("#text" + match).val();
  localStorage.setItem(element, textContent);
});

});