var currentpos=0,alt=1,curpos1=0,curpos2=-1
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}
function pageScroll() {
    window.scrollBy(0,2); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()',20); // scrolls every 100 milliseconds
}
window.onload=pageScroll