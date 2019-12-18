function masonry(){
  var resizeItem  = el => {

    var grid = D.getElementsByClassName('masonry')[0],
        rowG = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowH = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

    var rowSpan = Math.ceil((QS('.masonry-content',el).getBoundingClientRect().height+rowG)/(rowH+rowG));

    el.style.gridRowEnd = 'span '+rowSpan;
  },
      resizeItems = ()   => {
        var items = D.getElementsByClassName('masonry-brick');
        for(var i=0; i < L(items); i++){
          resizeItem(items[i]);
        }
  },
      waitForIMG  = ()   => {
        var items = D.getElementsByClassName('masonry-brick');
        for(var i=0; i < L(items); i++){
          imagesLoaded( items[i], instance => {
            var el = instance.elements[0];
            resizeItem(el);
          } );
        }
  };

  FE( ['load','resize'], e => { AEL(W,e,resizeItems) });

  waitForIMG();
}
