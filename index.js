async function fectch() {
  // console.log("hello");
  let response = await fetch("https://reqres.in/api/users");
  let finalResponse = await response.json();
  let userData = finalResponse.data;
  userData.map((ele) => {
    //console.log(ele);
    let userName = document.createElement("h2");
    let userEmail = document.createElement("p");
    let displayUser = document.getElementById("dislayData");
    let avtar = document.createElement("img");
    let card = document.createElement("div");
    card.setAttribute("class", "userCard");
    avtar.setAttribute("src", ele.avatar);
    userName.innerHTML = `Name:${ele.first_name} ${ele.last_name}`;
    userEmail.innerHTML = `Email:${ele.email}`;
    card.append(avtar, userName, userEmail);
    displayUser.append(card);
  });
  // console.log(finalResponse.data);
}
