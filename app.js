
akanName = document.getElementById("akanName");
akanName.addEventListener("submit", (e)){
    e.prventDefault();

    gender = document.getElementById("gender").Value;
    dob = document.getElementById("dob").value;

    dob =new Date(dob);

    const year =dob.getFullYear();
    const month =dob.getMonth() +1;
    const date =dob.getDate();

    cc= year.toString().substr(0,2);
    yy= year.toString().substr(2,2);
    mm= month
    dd= date

      dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7

    dayOfWeek =parseInt(dayOfWeek);

    const aFemaleName =["akosua","adwoa","abenna","akua","yaa","afua","ama"];
    const aMaleName=["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];

    let bornDay;

    switch(dayOfWeek ==0 & gender =="aFName"){
      case 0:
      bornDay ="Sunday";
      akanName =aFemaleName[0];
      break;
      case(1)
      bornDay ="sunday";
      akanName =aMaleName[0];
      break;


}
  
 