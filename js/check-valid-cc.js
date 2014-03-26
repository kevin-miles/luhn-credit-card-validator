
function isValidCC(cc) {
    var arr, i, j, dbl, sum=0;
    if (cc.match(/\D/) || cc==="") {
        return false; //non-digit check using regex
    } 
    arr = cc.split(" ").join("").split(""); //create array of characters from string
    for(i = arr.length-2; i >= 0; i-=2)
    {
            dbl = parseInt(arr[i] * 2);
            if(dbl > 9){
                dbl = dbl.toString();
                for(j = 0; j < dbl.length; j++){
                    sum += parseInt(dbl[j]);
                }
            } else {
                sum += dbl;
            }
    }
    for(i = arr.length - 1; i >= 0; i-=2)
    {
            sum += parseInt(arr[i]);
    }
    return (sum%10===0);
};

function init () {
    var submit = document.getElementById("validate");

    submit.addEventListener("click", function (e) {
        e.preventDefault();

    var status = document.getElementById("status"),
        input = document.getElementById("ccnum");

        if(isValidCC(input.value)){
            status.classList.remove("show");
            status.classList.remove("glyphicon-remove");
            status.classList.add("glyphicon-ok");
            status.classList.remove("red");
            status.classList.add("green");
        } else {
            status.classList.remove("show");
            status.classList.remove("glyphicon-ok");
            status.classList.remove("green");
            status.classList.add("glyphicon-remove");
            status.classList.add("red");
        }
    })
}