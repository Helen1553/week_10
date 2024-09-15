function showMessage () {
    console.log('Я учу JS!');
}
showMessage ();


let image=document.getElementById('img_element1');

function showPreviousPlace() {
    image.src='./assets/images/img_place№3.jpg';
}

function showNextPlace() {
    image.src='./assets/images/img_place№2.jpg';
}
