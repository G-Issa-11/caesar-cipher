//elements
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const messageArea = document.getElementById("message");
const select = document.getElementById("shift");

//events
encryptBtn.addEventListener("click", function(e) {
  let stringValue = messageArea.value;
  let shiftValue = parseInt(select.options[select.selectedIndex].value);
  messageArea.value = encrypt(stringValue, shiftValue);
  e.preventDefault();
});

decryptBtn.addEventListener("click", function(e) {
  let stringValue = messageArea.value;
  let shiftValue = parseInt(select.options[select.selectedIndex].value);
  messageArea.value = decrypt(stringValue, shiftValue);
  e.preventDefault();
});

function encrypt(string, shift) {
  var result = "";
  //loop through each caharacter in the text
  for (var i = 0; i < string.length; i++) {
    //get the character code of each letter
    var c = string.charCodeAt(i);

    // handle uppercase letters
    if (c >= 65 && c <= 90) {
      result += String.fromCharCode(((c - 65 + shift) % 26) + 65);

      // handle lowercase letters
    } else if (c >= 97 && c <= 122) {
      result += String.fromCharCode(((c - 97 + shift) % 26) + 97);

      // its not a letter, let it through
    } else {
      result += string.charAt(i);
    }
  }
  return result;
}

function decrypt(string, shift) {
  var result = "";
  shift = (26 - shift) % 26;
  result = encrypt(string, shift);
  return result;
}
