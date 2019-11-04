properties = {
  ac  : 'align-content'   ,
  ai  : 'align-items'     ,
  as  : 'align-items'     ,
  cc  : 'column-count'    ,
  m   : 'margin'          ,
  p   : 'padding'         ,
  ta  : 'text-align'
}

values = {
  0   : '0'             ,
  0a  : '0 auto'        ,
  a   : 'auto'          ,
  a0  : 'auto 0'        ,
  abs : 'absolute'      ,
  bl  : 'baseline'      ,
  c   : 'center'        ,
  fix : 'fixed'         ,
  fe  : 'flex-end'      ,
  fs  : 'flex-start'    ,
  n   : 'none'          ,
  rel : 'relative'      ,
  sa  : 'space-around'  ,
  sb  : 'space-between' ,
  st  : 'sticky'
}


var cc = (s) => {

  var getClasses     = document.querySelectorAll(c).classList;
  var classesContain = [];

      getClasses.forEach( c => { if(c.contains('-')){ classesContain.push(c); } } );
  classesContain.forEach( c => {
                                    var spl  = c.split('-');
                                    var prop = spl[0];
                                    var val  = spl[1];
                                    document.querySelectorAll(c).style[prop] = val;
  });



}
