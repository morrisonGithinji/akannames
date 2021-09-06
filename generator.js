const akanName = (e) => {
  e.preventDefault();

  const aFemaleName =["akosua","adwoa","abenna","akua","yaa","afua","ama"];
    const aMaleName=["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];

    const frm =document.querySelector("#akanName");
    const fd =new FormData(frm);
    const gender = fd.get("gender");
    const dob = fd.get("dob");
    console.log(dob)
}
  document.querySelector("#akanName").addEventListener("submit", akanName);
