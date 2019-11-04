properties = {
  ac  : 'align-content'   ,
  ai  : 'align-items'     ,
  as  : 'align-items'     ,
  cc  : 'column-count'    ,
  jc  : 'justify-content' ,
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

const result = [...new Set(
  Array.from(document.querySelectorAll('[class*="-"]'))

  .flatMap(el => Array.from(el.classList).filter(c => c.includes('-')))
)]

console.log(result)


  result.forEach( c => {          console.log('c: '+c);
                                    var spl  = c.split('-');
                                    var prop = spl[0]; prop = properties[prop];
                                    var val  = spl[1]; val  =       values[val];
                                    document.querySelectorAll('.'+c).forEach(z=>{z.style[prop] = val;});

                                    console.log('prop: '+prop);
                                    console.log('val: '+val);
  });
