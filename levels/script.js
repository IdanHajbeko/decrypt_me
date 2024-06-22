function ascii_to_hexa(str)
{
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++)
    {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join(' ');
}

function ASCIISentence(str) {
    var asciiArr = [];
    for (var i = 0; i < str.length; i++) {
        var asciiCode = str.charCodeAt(i);
        asciiArr.push(asciiCode);
    }
    return asciiArr.join(' ');
}


function stringToBinary(str) {
    return Array.from(str, char => {
        var binary = char.charCodeAt(0).toString(2);
        return binary.padStart(8, '0');
    }).join(' ');
}



function leftShiftBinary(binaryStr, shiftCount) {
    var shiftedBinary = binaryStr.split(' ').map(binary => {
        var shifted = parseInt(binary, 2) << shiftCount;
        return shifted.toString(2);
    }).join(' ');
    return shiftedBinary;
}


function rightShiftBinary(binaryStr, shiftCount) {
    var shiftedBinary = binaryStr.split(' ').map(binary => {
        var shifted = parseInt(binary, 2) >>> shiftCount; 
        return shifted.toString(2);
    }).join(' ');
    return shiftedBinary;
}

function binaryToString(binaryStr) {
    var binaries = binaryStr.split(' ');

    var str = binaries.map(binary => {
        var charCode = parseInt(binary, 2);
        return String.fromCharCode(charCode);
    }).join('');

    return str;


}

document.getElementById('Enter_decrypted_text').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      var inputText = this.value.trim();
      if (inputText === "You_did-1t") {
        document.getElementById('error').style.display = 'none';
        document.getElementById('next_level').style.display = 'inline-block';
      } else {
        document.getElementById('error').style.display = 'inline-block';
        document.getElementById('next_level').style.display = 'none';
      }
      this.value = "";
    }
  });
  