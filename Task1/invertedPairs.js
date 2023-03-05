let n = 1;
function findPairs() {
    n = 1;
    document.getElementById("result").innerHTML = '';
    let text = deleteNonAlphaAndNum(document.getElementById("input").value);
    let index = 0;
    console.log(text);
    while (index < text.length){
        let inc = findInvariant(text, index);
        if (inc < 1){
            inc = 1;
        }
        index = index + inc;
    }
}

function findInvariant(text, index){
    let left = index, right = text.length - 1;
    let first = 0, last = 0;
    let len = 0;
    while (left < right){
        let i = 0;
        while ((text[left] == text[right]) && (left < right)){
            left += 1;
            right -= 1;
            i = i + 1;
        }
        if (i != 0 && len <= i){
            first = index;
            last = right + 1;
            len = i;
        }
        else{
            right -= 1;
        }
        left = index;
    }
    if (len > 1){
        writeResult(text, first, last, len);
    }
    return len;
}

function writeResult(text, first, last, len){
    document.getElementById("result").innerHTML += n + ") " + text.slice(first, first + len) + ' ' + text.slice(last, last + len) + "<br>";
    n++;
}

function deleteNonAlphaAndNum(text){
    let result = "";
    let i = 0;
    while (i < text.length){
        if (isAlphaOrNum(text[i])){
            result += text[i];
        }
        i++;
    }
    return result;
}

function isAlphaOrNum(ch){
    const regex = /^[a-zA-Z0-9а-яА-Я]+$/;;
    return regex.test(ch);
}
