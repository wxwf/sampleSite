list = [];
const result = document.getElementById("showLists");
const btn = document.getElementById("btn");
const currentInputElement = document.getElementById("contentArea");

function getCurrentInputElementText() {
    return currentInputElement.value;
}

function createRow() {
    return "<tr><td><span>" + getCurrentInputElementText()
        + "</span></td></tr>";
}

function inserRow() {
    if (currentInputElement.value == "") {
        return
    } else {
        list.push(createRow());
    }

}

function updateTable() {
    result.innerHTML = "";
    list.map((myList) => {
        result.innerHTML += myList;
    });
}

function update() {
    inserRow();
    updateTable();
    currentInputElement.value = "";
}

addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").onclick();
    }
});
