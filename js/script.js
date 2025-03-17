// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("number-entered").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + "."
}
