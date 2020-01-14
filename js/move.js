function openDialog() {
    document.getElementById('light').style.display = 'block';

}


function closeDialog() {
    document.getElementById('light').style.display = 'none';

}




function closeDialogU() {
    document.getElementById('lightU').style.display = 'none';

}


function CompareDate(d1, d2) {
    return ((new Date(d1.replace(/-/g, "\/"))) > (new Date(d2.replace(/-/g, "\/"))));
}