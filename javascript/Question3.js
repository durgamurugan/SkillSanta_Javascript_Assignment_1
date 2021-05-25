function temperatureConverter1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
  }
  temperatureConverter1();

  function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }
  temperatureConverter2();