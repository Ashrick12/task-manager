function onCheck(checkboxElement) {
   // Assuming checkboxElement.value is the task name
   var taskName = checkboxElement.name;
   var isChecked = checkboxElement.checked;

   // Create an object to send to the server
   var data = {
      taskName: taskName,
      isChecked: isChecked,
   };

   // Send data to Flask server - - - - - **CHANGE IP HERE TO IPV4 OR IP ADDRESS TO ACCESS REMOTELY**
   fetch("http://127.0.0.1:8000/update-task", {
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
