/*RGB*/

/*Elements*/
const RGBcolorSample = document.getElementById("RGBcolorSample");
const RGBRed = document.getElementById("RGBRed");
const RGBGreen = document.getElementById("RGBGreen");
const RGBBlue = document.getElementById("RGBBlue");
const RGBSubmitButton = document.getElementById("RGBSubmit");

const updateRGBColor = () => {
  const redValue = RGBRed.value;
  const greenValue = RGBGreen.value;
  const blueValue = RGBBlue.value;

  const isValidInput =
    redValue >= 0 &&
    redValue <= 255 &&
    greenValue >= 0 &&
    greenValue <= 255 &&
    blueValue >= 0 &&
    blueValue <= 255;

  if (isValidInput) {
    const bgColor = `rgb(${redValue},${greenValue},${blueValue})`;
    RGBcolorSample.style.backgroundColor = bgColor;

    RGBRed.style.color = "black";
    RGBGreen.style.color = "black";
    RGBBlue.style.color = "black";
  } else {
    RGBRed.style.color = "red";
    RGBGreen.style.color = "red";
    RGBBlue.style.color = "red";
  }
};

RGBSubmitButton.addEventListener("click", updateRGBColor);

/*HEXA*/

/*Elements*/
const HexacolorSample = document.getElementById("HexacolorSample");
const hexRed = document.getElementById("hexRed");
const hexGreen = document.getElementById("hexGreen");
const hexBlue = document.getElementById("hexBlue");
const HexaSubmitButton = document.getElementById("HexaSubmit");

const isValidHex = (hex) => /^[0-9A-Fa-f]{2}$/.test(hex);

const updateHexaColor = () => {
  const isValidInput = (hex) => {
    const isValid = isValidHex(hex.value);
    hex.style.color = isValid ? "black" : "red";
    return isValid;
  };

  if (isValidInput(hexRed) && isValidInput(hexGreen) && isValidInput(hexBlue)) {
    const bgColor = `#${hexRed.value}${hexGreen.value}${hexBlue.value}`;
    HexacolorSample.style.backgroundColor = bgColor;
  }
};

HexaSubmitButton.addEventListener("click", updateHexaColor);

/*HSL*/

/*Elements*/
const HSLcolorSample = document.getElementById("HSLcolorSample");
const hslHue = document.getElementById("hslHue");
const hslSaturation = document.getElementById("hslSaturation");
const hslLightness = document.getElementById("hslLightness");
const HSLSubmitButton = document.getElementById("hslSubmit");

const updateHSLColor = () => {
  const hue = hslHue.value;
  const saturation = hslSaturation.value;
  const lightness = hslLightness.value;

  const isHueValid = hue >= 0 && hue <= 360;
  const isSaturationValid = saturation >= 0 && saturation <= 100;
  const isLightnessValid = lightness >= 0 && lightness <= 100;

  const isValidInput = isHueValid && isSaturationValid && isLightnessValid;

  if (isValidInput) {
    HSLcolorSample.style.backgroundColor = `hsl(${hue},${saturation}%,${lightness}%)`;
  }

  hslHue.style.color = isHueValid ? "black" : "red";
  hslSaturation.style.color = isSaturationValid ? "black" : "red";
  hslLightness.style.color = isLightnessValid ? "black" : "red";
};

HSLSubmitButton.addEventListener("click", updateHSLColor);

/*SOFT SCROLL*/
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
});
