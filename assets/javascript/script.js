let content = {};

$(".content").on("click", "p", function() {
    let text = $(this).text().trim();
    let textInput = $("<textarea>").addClass("contentText").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".save").on("click", function() {
    // get the textarea's current value/text
    var text = $(".contentText").val()

    let pEl = $("<p>").text(text)

    // replace textarea with p element
    $(".contentText").replaceWith(pEl);
});

function saveContent() {
    localStorage.setItem("content", JSON.stringify(content))
};

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

    $.each(content, function(list, arr) {
        arr.forEach(function(content){

        });
    });
};
