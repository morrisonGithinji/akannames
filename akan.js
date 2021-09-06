const akanName = (e) => {
  e.preventDefault();

  function myDate() {
  const date = document.getElementById("date").value;
  const gender= document.getElementById("gender").value;

  if ( date == ""){
    alert("please select valid date");
    return;

  }
  console.log(date)
  const myDay = new date(date);
  const currentDay =myDay.getDay();

  if (currentDay <("0 + currentDay">"31") {
    alert("Invalid Date");
  }
   displayName(currentDay, gender);

  function displayName(currentDay, gender) {
    if (gender =="male") {
      if (currentDay == "0")
      alert("Kwasi").onsubmit;
      if (currentDay == "1")
      alert("Kwadwo").onsubmit;
      if (currentDay == "2")
      alert("Kwabenna").onsubmit;
      if (currentDay == "3")
      alert("Kwaku").onsubmit;
      if (currentDay == "4")
      alert("Yaw").onsubmit;
      if (currentDay == "5")
      alert("Kofi").onsubmit;
      if (currentDay == "6")
      alert("Kwame").onsubmit;
    }
      else {
        if(currentDay =="0")
        alert("Akosua").onsubmit;
        if (currentDay == "1")
        alert("Adwoa").onsubmit;
        if (currentDay == "2")
        alert("Abenna").onsubmit;
        if (currentDay == "3")
        alert("Akua").onsubmit;
        if (currentDay == "4")
        alert("Yaa").onsubmit;
        if (currentDay == "5")
        alert("Afua").onsubmit;
        if (currentDay == "6")
        alert("Ama").onsubmit;
      }


    }
  }
}