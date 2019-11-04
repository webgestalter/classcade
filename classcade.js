D=document;

 qs=(s,c)=>{(c||D).querySelector(s)}
qsa=(s,c)=>{(c||D).querySelectorAll(s)}

properties = {
  ac  : 'align-content'   ,
  ai  : 'align-items'     ,
  as  : 'align-self'      ,
  b   : 'bottom'          ,
  cc  : 'column-count'    ,
  cg  : 'column-gap'      ,
  dis : 'display'         ,
  jc  : 'justify-content' ,
  l   : 'left'            ,
  m   : 'margin'          ,
  p   : 'padding'         ,
  r   : 'right'           ,
  pos : 'position'        ,
  t   : 'top'             ,
  ta  : 'text-align'      ,
  va  : 'vertical-align'
}

values = {
  a   : 'auto'          ,
  a0  : 'auto 0'        ,
  abs : 'absolute'      ,
  b   : 'block'         ,
  bl  : 'baseline'      ,
  c   : 'center'        ,
  f   : 'flex'          ,
  fix : 'fixed'         ,
  fe  : 'flex-end'      ,
  fs  : 'flex-start'    ,
  i   : 'inline'        ,
  ib  : 'inline-block'  ,
  m   : 'middle'        ,
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


                                    // set property
                                    var prop = spl[0]; prop = properties[prop];

                                    // set value
                                    var val  = spl[1];
                                    val = values[val] || val;

                                    //
                                    document.querySelectorAll('.'+c).forEach(z=>{z.style[prop] = val;});

                                    console.log('prop: '+prop);
                                    console.log('val: '+val);
  });
