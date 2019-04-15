function initPageOne () {
  document.getElementById('header').innerHTML="Precedence of JavaScript Operators"
  makeRequest('./html/page_one.html', insertHTMLOne);
}
function initPageTwo() {
   document.getElementById('header').innerHTML="All Snippets"
   makeRequest('./html/page_two.html', insertHTMLTwo);
}
function initPageThree() {
   document.getElementById('header').innerHTML="Update Instructions"
   makeRequest('./html/page_three.html', insertHTMLThree);
}

document.getElementById('navbar').appendChild(makeAnchor({innerText:'Search', id: 'first_entry'}));
document.getElementById('navbar').appendChild(makeAnchor({innerText:'All Snippets', id: 'second_entry'}));
document.getElementById('navbar').appendChild(makeAnchor({innerText:'Update', id: 'third_entry'}));

document.getElementById('first_entry').addEventListener('click', initPageOne, false);
document.getElementById('second_entry').addEventListener('click',initPageTwo, false);
document.getElementById('third_entry').addEventListener('click', initPageThree, false);

window.addEventListener('DOMContentLoaded', initPageOne)


// Navbar 
function makeActive() {
// item one
if(document.getElementById('first_item')) {
 document.getElementById('first_entry').setAttribute('class', 'active');
 document.getElementById('first_item').setAttribute('class', 'active');
 document.getElementById('last_item').setAttribute('class', 'active');
} else {
 document.getElementById('first_entry').removeAttribute('class', 'active');
}
// item two
 if(document.getElementById('item_first_anchor')) {
 document.getElementById('second_entry').setAttribute('class', 'active');
 document.getElementById('item_first_anchor').setAttribute('class', 'active');
 document.getElementById('item_fifty_anchor').setAttribute('class', 'active');
 document.getElementById('item_last_anchor').setAttribute('class', 'active');
 } else {
 document.getElementById('second_entry').removeAttribute('class', 'active');
 }
// item three
 if(document.getElementById('log_container_header')) {
 document.getElementById('third_entry').setAttribute('class', 'active');
 document.getElementById('log_container_header_anchor').setAttribute('class', 'active');
 } else {
 document.getElementById('third_entry').removeAttribute('class', 'active');
 }
}
