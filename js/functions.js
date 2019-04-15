'use strict';

 // AJAX
function makeRequest(url, insertHTML) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.addEventListener("load", insertHTML);
  // httpRequest.onreadystatechange = insertContents;
  httpRequest.open('GET', url);
  httpRequest.send();
 }

function insertContents(id, cb) {
   return function insert() {
      document.getElementById(id).innerHTML = this.responseText;
      cb();
    }
 }

// TAG CREATION and DISPLAY
function toUnicodeNBSP (str) {
  return str.replace(/\s/g,'\u00A0');
}

function displaySnippet (arr, parentTag, childTag='p') {
  for(let i=0; i<arr.length; i++) {
    var el = document.createElement(childTag);
    if(arr[i].trim()) {
      var txt = document.createTextNode(toUnicodeNBSP(arr[i]));
      el.appendChild(txt);
      parentTag.appendChild(el);
    }
  }
}

function createTag({tagType='p', tagClass='', tagId=''}={}) {
  let el = document.createElement(tagType);
  if(tagClass) {
    el.className=tagClass;
  }
  if(tagId) {
    el.id=tagId;
  }
  return el
}

function makeAnchor({innerText, id, href='#'}={}) {
  let el = document.createElement('a');
  let txt = document.createTextNode(innerText);
  el.appendChild(txt);
  el.setAttribute('href', href);
  el.id=id;
  return el;
 }

function createTxtNode(txt) {
  let node=document.createTextNode(txt);
  return node;
}

function appendNodeById(id, node) {
  document.getElementById(id).appendChild(node);
}

function appendNode(parent, child) {
  parent.appendChild(child);
}

//  STICKY SCROLL
function stickyScrollFactory({stickyValue, stickyClass='sticky', stickyNode}={}) {
  stickyValue=stickyValue || document.getElementById("navbar").offsetTop;
  stickyNode = stickyNode || document.getElementById('navbar');
  return function stickyScroll() {
  //w3schools, thanks!
    if (window.pageYOffset >= stickyValue) {
      stickyNode.classList.add(stickyClass)
    } else {
      stickyNode.classList.remove(stickyClass);
    }
  } 
}

// MISC
function returnIndex(key, arr2d) {
 for(let i=0; i< arr2d.length; i++) {
    if(~ arr2d[i].indexOf(key)) {
      return arr2d[i][0];
    }
  }
}

// 