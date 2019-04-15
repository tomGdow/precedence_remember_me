// DATA and VARIABLES
const data_arr=data.split('£');
//--generate indexed array
const data_arr_indexed=[];
for(let i = 0; i<data_arr.length; i++) {
let temp=data_arr[i].split('\n')
  for(let j=0; j< temp.length; j++) {
    if(temp[j].trim()) {
      data_arr_indexed.push([i,temp[j].trim()]);
    }
  }
}
// Sticky Scroll
const stickyScrollOne=stickyScrollFactory();
window.addEventListener('scroll', function() {
  stickyScrollOne();
});

