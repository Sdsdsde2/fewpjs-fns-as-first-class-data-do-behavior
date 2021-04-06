/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const HHMM = time.split(':')
  let hours = HHMM[0]
  let mins = HHMM[1]
  if (parseInt(hours) <= 12) {
    return "Good Morning"
  }
  else if (parseInt(hours) >= 12 && parseInt(hours) <= 17) {
    return "Good Afternoon"
  }
  else if (parseInt(hours) >= 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = message;
}