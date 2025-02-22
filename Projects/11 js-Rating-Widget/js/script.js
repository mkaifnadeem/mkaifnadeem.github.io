const badElement = document.querySelector("#bad");
const okayElement = document.querySelector("#okay");
const goodElement = document.querySelector("#Good");
const mouthElement = document.querySelector("#mouth");
const faceChangerIndifferent = function () {
  if (mouthElement.className == "happy-mouth") {
    mouthElement.classList.replace("happy-mouth", "indifferent-mouth");
  } else if (mouthElement.className == "sad-mouth") {
    mouthElement.classList.replace("sad-mouth", "indifferent-mouth");
  }
};
const faceChangeGood = function () {
  if (mouthElement.className == "sad-mouth") {
    mouthElement.classList.replace("sad-mouth", "happy-mouth");
  } else if (mouthElement.className == "indifferent-mouth") {
    mouthElement.classList.replace("indifferent-mouth", "happy-mouth");
  }
};
const faceChangeBad = function () {
  if (mouthElement.className == "indifferent-mouth") {
    mouthElement.classList.replace("indifferent-mouth", "sad-mouth");
  } else if (mouthElement.className == "happy-mouth") {
    mouthElement.classList.replace("happy-mouth", "sad-mouth");
  }
};

badElement.addEventListener("click", faceChangeBad);
okayElement.addEventListener("click", faceChangerIndifferent);
goodElement.addEventListener("click", faceChangeGood);
