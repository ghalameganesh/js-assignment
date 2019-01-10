import TestMyForEach from "./my-for-each";

const test = new TestMyForEach();
document.write(`<br><b>Input Array for Tesing myForeach [10, 20, 30]</b>`);
document.write('<br><br><b>Tesing For Each </b>');
test.testMyForEach();
document.write('<br><br><b>Tesing For Each and adding element in array while looping </b>');
test.testAddingElementWhileLooping()
document.write('<br><br><b>Tesing For Each and updating element in array while looping</b>');
test.testChangingArrElementValueBeforeIterating()