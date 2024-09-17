// http://api.weatherapi.com/v1/current.json?key=3186e505e27142baa7095830240309&q=mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".location");
const timeField = document.querySelector(".time");
let iconField = document.querySelector(".c-icon");
const conditionName = document.querySelector(".c-name");
const searchField = document.querySelector(".search_area");
const searchButton = document.querySelector("search_button");
const form = document.querySelector("form");


let target = "new Delhi";

form.addEventListener("submit", searchForLocation);

const fetchResult = async (target) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=3186e505e27142baa7095830240309&q=${target}&aqi=no`;
  const res = await fetch(url);

  const data = await res.json();
  console.log(data);

  let locationName = data.location.name;

  console.log(locationName);

  let time = data.location.localtime;

  console.log(time);

  let temp = data.current.temp_c;

  console.log(temp);

  let condition = data.current.condition.text;

  console.log(condition);

  let cnIcon = data.current.condition.icon;
  console.log(cnIcon);

  updateDetails(temp, locationName, time, condition, cnIcon);
};

function updateDetails(temp, locationName, time, condition, cnIcon) {
  let splitDate = time.split(" ")[0];
  let splitTime = time.split(" ")[1];

  let currentDay = getDayName( new Date(splitDate).getDay());

  temperatureField.innerText = temp;
  locationField.innerText = locationName;
  conditionName.innerText = condition;
  timeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;

  
  
}

function searchForLocation(e) {
  e.preventDefault();
  target = searchField.value;
  fetchResult(target);
}

function getDayName(number) {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}
