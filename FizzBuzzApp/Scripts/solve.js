//declare a function that takes in two values
function fizzBuzz(val1, val2) {
    let returnValue = "";

    /*generate numbers from 1 to 100, evaluate against values taken in
     * if new number is divisible by val1, print 'FIZZ'
     * if it's divisible by val2, print 'BIZZ'
     * if it's divisible by both, print 'FIZZBUZZ'*/
    for (let i = 1; i <= 100; i++) {
        returnValue += ((i % val1 == 0 ? 'FIZZ' : '') + (i % val2 == 0 ? 'BUZZ' : '') || i) + ' ';
    }
    return returnValue;
};


//display results
$("#buzzIt").on('click', function () {
    let output = '';
    let val1 = $("#numIn1").val();
    let val2 = $("#numIn2").val();
    output = fizzBuzz(val1, val2);
    $('#results').empty().append(output);
});


//clear all
$("#clearIt").on('click', function () {
    $("#numIn1").val("");
    $("#numIn2").val("");
    $("#results").text("");

})

//force numbers only input
$(".numOnly").keydown(function (event) {
    let valid = false;
    // Allow backspace, tab, and delete
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9) {
        // let it happen
        valid = true;
    }
    else {
        // Ensure that it is a number and stop the keypress
        if (event.keyCode >= 96 && event.keyCode <= 105) {
            valid = true;
        }
    }
});


//return an array of values instead of a string
//function fizzBuzz(val1, val2) {
//    let returnArray = [];
//    for (let i = 1; i <= 100; i++) {
//        returnArray[i] = ((i % val1 == 0 ? 'Fizz' : '') + (i % val2 == 0 ? 'Buzz' : '') || i);
//    }
//    return returnArray;
//}

//Call and use it
//function buzzOut() {
//    let output = "";
//    let val1 = $("#numIn1").val();
//    let val2 = $("#numIn2").val();
//    output = fizzBuzz(val1, val2);
//    $("#results").html = output;
//}

//Call and use it output to a template
//function buzzTemplate() {
//Grab our template from the HTML document
//let output = [];
//let headTemplate = $("#template-header");
//let rowTemplate = $("#template-row-items");

//let templateHTML = rowTemplate.innerHTML;
//let resultsHTML = headTemplate.innerHTML;

//Get the values
//let val1 = $("#numIn1").val();
//let val2 = $("#numIn2").val();

//Call our Fizz Buzz Function
//    output = buzzOut(val1, val2);
//    for (i = 1; i < output.length; i += 10) {
//        resultsHTML += templateHTML.replace('{{val1}}', output[i])
//            .replace('{{val2}}', output[i + 1])
//            .replace('{{val3}}', output[i + 2])
//            .replace('{{val4}}', output[i + 3])
//            .replace('{{val5}}', output[i + 4])
//            .replace('{{val6}}', output[i + 5])
//            .replace('{{val7}}', output[i + 6])
//            .replace('{{val8}}', output[i + 7])
//            .replace('{{val9}}', output[i + 8])
//            .replace('{{val10}}', output[i +9]);
//    }
//    $("#results").html = resultsHTML;
//}

//display results


//$("#buzzIt").on('click', function fizzBuzz() {
//    let output = '';
//    let val1 = $("#numIn1").val();
//    let val2 = $("#numIn2").val();
//    output = fizzBuzz(val1, val2);
//    $('#results').empty().append(output);
//});

//clear all
//$("#clearIt").on('click', function () {
//    $("#results").text("");
//});
© 2020 GitHub, Inc.
    Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
