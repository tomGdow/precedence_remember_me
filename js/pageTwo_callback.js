
function pageTwoCallback() {

for(let i=0; i<data_arr.length; i++) {
  displaySnippet(data_arr[i].split('\n'), document.getElementById('snippets'), 'div')
}
const snippets=document.getElementById('snippets');
const collection=snippets.getElementsByTagName('div');

// set some ids;
collection[1].setAttribute('id', `item_first`);
collection[collection.length-1].setAttribute('id', 'item_last');
for(let i=0; i<collection.length; i++) {
    if(~collection[i].innerHTML.search(/\(50\)/))
      collection[i].setAttribute('id', `item_50`)
}
// Remove superfluous tags from navbar
 if(document.getElementById('last_item')) {
   document.getElementById('navbar').removeChild(document.getElementById('last_item'))
 }

 if(document.getElementById('first_item')) {
   document.getElementById('navbar').removeChild(document.getElementById('first_item'))
 }

 if(document.getElementById('log_container_header_anchor')) {
   document.getElementById('navbar').removeChild(document.getElementById('log_container_header_anchor'));
 }
// Add items to navbar for this.page
if(!document.getElementById('nav-items')) {
  document.getElementById('navbar').appendChild(createTag({tagType:'div', tagId:'nav-items'}));
  document.getElementById('nav-items').appendChild(makeAnchor({innerText: 'First-Item', id:'item_first_anchor', href:'#item_first'}));
  document.getElementById('nav-items').appendChild(makeAnchor({innerText: 'Item 50', id:'item_fifty_anchor', href:'#item_50'}));
  document.getElementById('nav-items').appendChild(makeAnchor({innerText: 'Last Item', id:'item_last_anchor', href:'#item_last'}));
}

makeActive();
} // -- END Page Two CALLBACK

const insertHTMLTwo=insertContents('content', pageTwoCallback);