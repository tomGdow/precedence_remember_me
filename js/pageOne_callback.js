
function pageOneCallback() {
  
  let my_output = document.getElementById('output');
  
  // HTML GENERATION
  //--generate options for datalist
  for (let i = 0; i < data_arr_indexed.length; i++) {
    if (data_arr_indexed[i][1].trim()) {
      let el2 = document.createElement('option');
      el2.value = data_arr_indexed[i][1];
      document.getElementById('advanced_list').appendChild(el2);
    }
  }
  //--generate HTML Tags
  if(!document.getElementById('last_item')) {
   let navEl = document.getElementById('navbar');
   navEl.insertBefore(makeAnchor({innerText:'Last', id:'last_item'}), navEl.firstChild);
  }

  if(!document.getElementById('first_item')) {
   let navEl = document.getElementById('navbar');
   navEl.insertBefore(makeAnchor({innerText:'First', id:'first_item'}), navEl.firstChild);
  }

  // Event listeners
  //--input box
  document.getElementById('advanced_search').addEventListener('input', function () {
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    if(returnIndex(this.value, data_arr_indexed)) {
      displaySnippet(data_arr[returnIndex(this.value, data_arr_indexed)].split('\n'), my_output);
    }
  });

  document.getElementById('advanced_search').addEventListener('focus', function () {
    this.value="";
  });

  //--buttons
  //---button_plus
  document.getElementById('btn_plus').addEventListener('click', function () {
    let item = document.getElementById('advanced_search');
    let index=returnIndex(item.value, data_arr_indexed);
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    if (index) {
      displaySnippet(data_arr[++index].split('\n'), my_output)
      item.value=data_arr[index].split('\n')[0].trim();
    } else {
      displaySnippet(data_arr[1].split('\n'), my_output)
      item.value=data_arr[1].split('\n')[0];
    }
  });
  // ---button_minus
  document.getElementById('btn_minus').addEventListener('click', function () {
    let item = document.getElementById('advanced_search');
    let index=returnIndex(item.value, data_arr_indexed);
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    if(index) {
      displaySnippet(data_arr[--index].split('\n'), my_output)
      item.value=data_arr[index].split('\n')[0].trim();
    }
    else {
      displaySnippet(data_arr[1].split('\n'), my_output)
      item.value=data_arr[1].split('\n')[0];
  }
})

//--last entry
document.getElementById('last_item').addEventListener('click', function () {
    let item = document.getElementById('advanced_search');
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    displaySnippet(data_arr[data_arr.length-1].split('\n'), my_output)
    item.value=data_arr[data_arr.length-1].split('\n')[0];

})

//--first entry
document.getElementById('first_item').addEventListener('click', function () {
    let item = document.getElementById('advanced_search');
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    displaySnippet(data_arr[1].split('\n'), my_output)
    item.value=data_arr[1].split('\n')[0];
})

// Remove superfluous items from navbar
 if(document.getElementById('item_first_anchor')) {
   document.getElementById('navbar').removeChild(document.getElementById('nav-items'));
 }
 if(document.getElementById('log_container_header_anchor')) {
   document.getElementById('navbar').removeChild(document.getElementById('log_container_header_anchor'));
 }
// Initialize
//--default display
  displaySnippet(data_arr[1].split('\n'), my_output);
  document.getElementById('advanced_search').value=data_arr_indexed[1][1];
   //--navbar
  makeActive();
} //----end Page-One-callback

const insertHTMLOne=insertContents('content', pageOneCallback);