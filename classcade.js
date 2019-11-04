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

const result = [...new Set( // use a Set to get an array of unique items
  Array.from(document.querySelectorAll('[class*="-"]')) // select all elements with classes that contain hyphens

  .flatMap(el => Array.from(el.classList).filter(c => c.includes('-'))) // create an array of all classes with hyphens
)]

console.log(result)


  classesWithDash.forEach( c => {
                                    var spl  = c.split('-');
                                    var prop = spl[0]; prop = properties[prop];
                                    var val  = spl[1]; val  =       value[val];
                                    document.querySelectorAll(c).style[prop] = val;

                                    console.log(prop);
                                    console.log(val);
  });
