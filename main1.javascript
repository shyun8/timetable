<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Next Class</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .next-class { font-size: 24px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Next Class</h1>
  <div id="next-class" class="next-class">Loading...</div>

  <script>
    const schedule = [
      { name: "Math 101", startTime: "08:00", endTime: "09:30" },
      { name: "History 202", startTime: "10:00", endTime: "11:30" },
      { name: "Physics 303", startTime: "13:00", endTime: "14:30" }
    ];

    function getNextClass() {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes(); // time in minutes

      let nextClass = null;
      let minTimeDiff = Infinity;

      for (const cls of schedule) {
        const [hour, minute] = cls.startTime.split(":").map(Number);
        const classTime = hour * 60 + minute;

        if (classTime > currentTime && classTime - currentTime < minTimeDiff) {
          minTimeDiff = classTime - currentTime;
          nextClass = cls;
        }
      }

      return nextClass;
    }

    function displayNextClass() {
      const nextClass = getNextClass();
      const nextClassElement = document.getElementById("next-class");
      if (nextClass) {
        nextClassElement.textContent = `${nextClass.name} starts at ${nextClass.startTime}`;
      } else {
        nextClassElement.textContent = "No more classes today!";
      }
    }

    displayNextClass();
  </script>
</body>
</html>
