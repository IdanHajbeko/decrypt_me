function ascii_to_hexa(str) {
    var hex = '';
    for (var i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16).padStart(2, '0') + ' ';
    }
    return hex.trim();
}

function hex_to_ascii(str1) {
    var hex = str1.replace(/ /g, '');
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
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
        var shiftedStr = shifted.toString(2);
        
        while (shiftedStr.length < binary.length) {
            shiftedStr = '0' + shiftedStr;
        }

        return shiftedStr;
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

function rot5(str) {
    return str.replace(/[A-Za-z]/g, function(c) {
        return String.fromCharCode(
            (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 5) ? c : c - 26
        );
    });
}

function xorBinary(binaryStr1, binaryStr2) {
    var bin1 = binaryStr1.split(' ');
    var bin2 = binaryStr2.split(' ');
    var xorResult = bin1.map((binary, index) => {
        var xor = parseInt(binary, 2) ^ parseInt(bin2[index], 2);
        return xor.toString(2).padStart(8, '0');
    }).join(' ');
    return xorResult;
}
