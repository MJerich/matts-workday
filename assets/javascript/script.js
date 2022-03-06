let content = {};

// 9AM
$("#9-am").on("click", function() {
    let text = $("#content-9").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText9").addClass("col-10").val(text);
    $("#content-9").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-9").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText9").val()

    let pEl = $("<p>").text(text).attr("id", "content-9");

    // replace textarea with p element
    $("#contentText9").replaceWith(pEl);
    content.nineAM = text
    saveContent();
});

// 10AM
$("#10-am").on("click", function() {
    let text = $("#content-10").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText10").addClass("col-10").val(text);
    $("#content-10").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-10").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText10").val()

    let pEl = $("<p>").text(text).attr("id", "content-10");

    // replace textarea with p element
    $("#contentText10").replaceWith(pEl);
    content.tenAM = text
    saveContent();
});

// 11AM
$("#11-am").on("click", function() {
    let text = $("#content-11").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText11").addClass("col-10").val(text);
    $("#content-11").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-11").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText11").val()

    let pEl = $("<p>").text(text).attr("id", "content-11");

    // replace textarea with p element
    $("#contentText11").replaceWith(pEl);
    content.elevenAM = text
    saveContent();
});

// 12PM
$("#12-pm").on("click", function() {
    let text = $("#content-12").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText12").addClass("col-10").val(text);
    $("#content-12").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-12").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText12").val()

    let pEl = $("<p>").text(text).attr("id", "content-12");

    // replace textarea with p element
    $("#contentText12").replaceWith(pEl);
    content.twelvePM = text
    saveContent();
});

// 1PM
$("#1-pm").on("click", function() {
    let text = $("#content-1").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText1").addClass("col-10").val(text);
    $("#content-1").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-1").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText1").val()

    let pEl = $("<p>").text(text).attr("id", "content-1");

    // replace textarea with p element
    $("#contentText1").replaceWith(pEl);
    content.onePM = text
    saveContent();
});

// 2PM
$("#2-pm").on("click", function() {
    let text = $("#content-2").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText2").addClass("col-10").val(text);
    $("#content-2").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-2").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText2").val()

    let pEl = $("<p>").text(text).attr("id", "content-2");

    // replace textarea with p element
    $("#contentText2").replaceWith(pEl);
    content.twoPM = text
    saveContent();
});

// 3PM
$("#3-pm").on("click", function() {
    let text = $("#content-3").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText3").addClass("col-10").val(text);
    $("#content-3").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-3").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText3").val()

    let pEl = $("<p>").text(text).attr("id", "content-3");

    // replace textarea with p element
    $("#contentText3").replaceWith(pEl);
    content.threePM = text
    saveContent();
});

// 4PM
$("#4-pm").on("click", function() {
    let text = $("#content-4").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText4").addClass("col-10").val(text);
    $("#content-4").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-4").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText4").val()

    let pEl = $("<p>").text(text).attr("id", "content-4");

    // replace textarea with p element
    $("#contentText4").replaceWith(pEl);
    content.fourPM = text
    saveContent();
});

// 5PM
$("#5-pm").on("click", function() {
    let text = $("#content-5").text().trim();
    let textInput = $("<textarea>").attr("id" , "contentText5").addClass("col-10").val(text);
    $("#content-5").replaceWith(textInput);
    textInput.trigger("focus");
});

$("#save-5").on("click", function() {
    // get the textarea's current value/text
    var text = $("#contentText5").val()

    let pEl = $("<p>").text(text).attr("id", "content-5");

    // replace textarea with p element
    $("#contentText5").replaceWith(pEl);
    content.fivePM = text
    saveContent();
});

// save to local storage
function saveContent() {
    localStorage.setItem("content", JSON.stringify(content))
};

// load from local storage
function loadContent() {
    content = JSON.parse(localStorage.getItem("content"));

    if (!content) {
        content = {
            nineAM: [],
            tenAM: [],
            elevenAM: [],
            twelvePM: [],
            onePM: [],
            twoPM: [],
            threePM: [],
            fourPM: [],
            fivePM: []
        };
    };

    // load the save content into the correct place
    $("#content-9").text(content.nineAM)
    $("#content-10").text(content.tenAM)
    $("#content-11").text(content.elevenAM)
    $("#content-12").text(content.twelvePM)
    $("#content-1").text(content.onePM)
    $("#content-2").text(content.twoPM)
    $("#content-3").text(content.threePM)
    $("#content-4").text(content.fourPM)
    $("#content-5").text(content.fivePM)
};

loadContent();