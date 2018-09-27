var targetInput = document.getElementById("country"),
    results = document.getElementById("autocomplete-results"),
    matches = [],
    cursor = 0,
    countryList = ['Albania', 'Colombia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri Lanka', 'Wales'];

targetInput.focus();

// Override automatic form submission on pressing enter
targetInput.addEventListener("keydown", function(event) {
    if (event.keyCode == "13") {
        event.preventDefault();
    }
});

targetInput.addEventListener("keyup", function(event) {

    results.innerHTML = "";
    toggleResults(true);

    // "this" refers to targetInput
    if (this.value.length > 0) {
        matches = getMatches(this.value);

        if (matches.length > 0) {
            displayMatches(matches);
        }
    }


});

function toggleResults(action) {
    action ? results.classList.add("visible") : results.classList.remove("visible");
}

function getMatches(inputText) {

    var matchList = [];

    for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
            matchList.push(countryList[i]);
        }
    }

    return matchList;
}

function displayMatches(matchList) {

    for (var i = 0; i < matchList.length; i++) {
        results.innerHTML += '<li class="result">' + matchList[i] + '</li>';
    }

    // the first child gets higlighted
    moveCursor(cursor);

    toggleResults(true)

}

function moveCursor(pos) {

    for (var i = 0; i < results.children.length; i++) {
        results.children[i].classList.remove("highlighted");
    }

    results.children[pos].classList.add("highlighted");

}
