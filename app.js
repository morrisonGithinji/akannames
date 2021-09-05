function myFunction() {
  const d = new Date();
  const dayOfWeek = {"sunday","monday","tuesday","wednesday","thursday","friday","saturday"};
  const d = dayOfWeek[d.getDay()];
  document.getElementById("dob").innerHTML = d;