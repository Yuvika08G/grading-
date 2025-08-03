const students = [];

function getGrade(marks) {
  if (marks >= 90) return 'Grade A';
  if (marks >= 75) return 'Grade B';
  if (marks >= 50) return 'Grade C';
  return 'Fail';
}

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const marks = parseFloat(document.getElementById("marks").value);

  if (!name || !subject || isNaN(marks) || marks < 0 || marks > 100) {
    alert("Please enter valid input for all fields.");
    return;
  }

  const grade = getGrade(marks);
  const student = { name, subject, marks, grade };
  students.push(student);

  document.getElementById("result").textContent = 
    `Result for ${name} in ${subject}: ${grade}`;
  document.getElementById("count").textContent = 
    `Total Students Entered: ${students.length}`;

  console.log("Student Names:", students.map(s => s.name));
}

function clearAll() {
  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("count").textContent = "";
  students.length = 0;
  console.clear();
}
