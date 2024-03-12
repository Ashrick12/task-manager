function onCheck(checkboxElement) {
   // Assuming checkboxElement.value is the task name
   var taskName = checkboxElement.name;
   var isChecked = checkboxElement.checked;

   // Create an object to send to the server
   var data = {
      taskName: taskName,
      isChecked: isChecked,
   };

   // Send data to Flask server
   fetch("http://192.168.0.220:8000/update-task", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
}
