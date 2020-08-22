/* eslint-disable no-alert */
const askAPIFor = async (place) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=imperial&APPID=adc54b48c1cd383ad26830ca31ed2b6e`,
      { mode: 'cors' }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
  return false;
};

export default askAPIFor;
