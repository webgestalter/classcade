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

  var getClasses     = document.querySelectorAll(c).className.split(' ');
  var classesContain = [];

      getClasses.forEach( c => { if(c.contains('-')){ classesContain.push(c); } } );
  classesContain.forEach( c => {
                                    var spl  = c.split('-');
                                    var prop = spl[0]; prop = properties[prop];
                                    var val  = spl[1]; val  =       value[val];
                                    document.querySelectorAll(c).style[prop] = val;

                                    console.log(prop);
                                    console.log(val);
  });



}
