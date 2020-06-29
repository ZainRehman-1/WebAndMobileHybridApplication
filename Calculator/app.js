function getNum(num){
    var result = document.getElementById("result")
    result.value += num
}

function getResult(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function del(){
    var result = document.getElementById("result")
    result.value = result.value.substr(0,result.value.length-1)
}

function clearResult(){
    var result = document.getElementById("result")
    result.value = ""
}