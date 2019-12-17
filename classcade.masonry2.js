function resizeMasonryItem(item){

  var      grid = D.getElementsByClassName('masonry')[0],
         rowGap = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
      rowHeight = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

  item.style.gridRowEnd = 'span '+rowSpan;
}

function resizeAllMasonryItems(){
  var allItems = D.getElementsByClassName('masonry-brick');
  for(var i=0;i<allItems.length;i++){
    resizeMasonryItem(allItems[i]);
  }
}

function waitForImages() {
  var allItems = D.getElementsByClassName('masonry-brick');
  for(var i=0;i<allItems.length;i++){
    imagesLoaded( allItems[i], function(instance) {
      var item = instance.elements[0];
      resizeMasonryItem(item);
    } );
  }
}

var masonryEvents = ['load','resize'];
masonryEvents.forEach( function(event){
  W.addEventListener(event, resizeAllMasonryItems);
} );

waitForImages();
