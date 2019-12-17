var resizeMasonryItem     = item => {

  var      grid = D.getElementsByClassName('masonry')[0],
         rowGap = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
      rowHeight = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

  item.style.gridRowEnd = 'span '+rowSpan;
},
    resizeAllMasonryItems = ()   => {
      var allItems = D.getElementsByClassName('masonry-brick');
      for(var i=0;i<allItems.length;i++){
        resizeMasonryItem(allItems[i]);
      }
},
    waitForImages         = ()   => {
      var allItems = D.getElementsByClassName('masonry-brick');
      for(var i=0;i<allItems.length;i++){
        imagesLoaded( allItems[i], instance => {
          var item = instance.elements[0];
          resizeMasonryItem(item);
        } );
      }
};

['load','resize'].forEach( event => {
  W.addEventListener(event,resizeAllMasonryItems);
});

waitForImages();
