var resizeItem  = item => {

  var      grid = D.getElementsByClassName('masonry')[0],
         rowGap = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
      rowHeight = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

  var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

  item.style.gridRowEnd = 'span '+rowSpan;
},
    resizeItems = ()   => {
      var items = D.getElementsByClassName('masonry-brick');
      for(var i=0;i<items.length;i++){
        resizeItem(items[i]);
      }
},
    waitForIMG  = ()   => {
      var items = D.getElementsByClassName('masonry-brick');
      for(var i=0;i<items.length;i++){
        imagesLoaded( items[i], instance => {
          var item = instance.elements[0];
          resizeItem(item);
        } );
      }
};

['load','resize'].forEach( event => {
  W.addEventListener(event,resizeItems);
});

waitForIMG();
