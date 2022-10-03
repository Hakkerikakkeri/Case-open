var notif = document.getElementById('case-summary-container')
var background = document.getElementById('case-summary-container')

function summaryOpen() {
    notif.style.display = "flex";
    background.style.backgroundColor = "#20262988";
}

function summaryClose() {
    notif.style.display = "none";
    background.style.backgroundColor = "transparent";
}