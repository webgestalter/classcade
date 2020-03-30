  var masonryResizeItem  = el => {

    var grid = document.getElementsByClassName('masonry')[0],
        rowG = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowH = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
     rowSpan = Math.ceil((el.querySelector('.masonry-content').getBoundingClientRect().height+rowG)/(rowH+rowG));

    el.style.gridRowEnd = 'span '+rowSpan;
  },
  masonryResize = () => {
    var items = document.getElementsByClassName('masonry-brick');
    for(var i=0; i < L(items); i++){
      masonryResizeItem(items[i]);
    }
  },
  waitForIMG = () => {
    var items = document.getElementsByClassName('masonry-brick');
    for(var i=0; i < L(items); i++){
      imagesLoaded( items[i], instance => {
        var el = instance.elements[0];
        masonryResizeItem(el);
      } );
    }
  };

  ['load','resize'].forEach( e => { window.addEventListener(e,masonryResize) });

  waitForIMG();
