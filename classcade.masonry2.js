  var masonryResizeItem  = el => {

    var grid = D.getElementsByClassName('masonry')[0],
    //  rowG = _(grid).style('grid-row-gap'),
    //  rowH = _(grid).style('grid-auto-rows'),
        rowG = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowH = parseInt(W.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
     rowSpan = Math.ceil((QS('.masonry-content',el).getBoundingClientRect().height+rowG)/(rowH+rowG));

    el.style.gridRowEnd = 'span '+rowSpan;
  },
      masonryResize = ()   => {
        var items = D.getElementsByClassName('masonry-brick');
        for(var i=0; i < L(items); i++){
          masonryResizeItem(items[i]);
        }
  },
      waitForIMG  = ()   => {
        var items = D.getElementsByClassName('masonry-brick');
        for(var i=0; i < L(items); i++){
          imagesLoaded( items[i], instance => {
            var el = instance.elements[0];
            masonryResizeItem(el);
          } );
        }

        // LOG('waitForIMG() triggered');
        // imgStatus.watch(".masonry img",function(instance){
        //   if(instance.isDone()){
        //     console.log("image loaded");
        //     var el = _(instance)._('.masonry-brick');
        //     masonryResizeItem(el);
        //   }
        // });
  };

  FE( ['load','resize'], e => { AEL(W,e,masonryResize) });

  waitForIMG();
