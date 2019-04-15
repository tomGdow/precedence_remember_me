
function pageThreeCallback() {
let data_log=my_update.replace(/£\(/g, '@(');
data_log=data_log.split('@');

// generate HTML tags
for(let i=0; i<data_log.length; i++) {
  let el = createTag({tagType:'p', tagClass:'instructions'});
  let txt=createTxtNode(data_log[i]);
  appendNode(el, txt);
  appendNodeById('log_container', el)
}

let el=createTag({tagType:'div', tagId:'log_container_header'});
appendNodeById('log_container', el);

for(let i=0; i<txtString.length; i++) {
let el = createTag({tagType:'div', tagClass:'instructions_header'});
var txt = createTxtNode(txtString[i]);
appendNode(el,txt);

appendNodeById('log_container_header', el)
}
// Remove superfluous items from navbar

 if(document.getElementById('item_first_anchor')) {
   document.getElementById('navbar').removeChild(document.getElementById('nav-items'));
 }

 if(document.getElementById('last_item')) {
   document.getElementById('navbar').removeChild(document.getElementById('last_item'))
 }

 if(document.getElementById('first_item')) {
   document.getElementById('navbar').removeChild(document.getElementById('first_item'))
 }
 if(! document.getElementById('log_container_header_anchor')) {
 document.getElementById('navbar').appendChild(makeAnchor({innerText:'Notes', id:'log_container_header_anchor', href:'#log_container_header'}));

 }
 makeActive();
} // END Page Three CALLBACK

const insertHTMLThree=insertContents('content', pageThreeCallback);