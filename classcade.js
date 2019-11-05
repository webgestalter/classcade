var qsa=(s)=>{return document.querySelectorAll(s)}

properties = {
  ac  : 'align-content'   ,
  ai  : 'align-items'     ,
  as  : 'align-self'      ,
  b   : 'bottom'          ,
  bor : 'border'          ,
  bs  : 'box-sizing'      ,
  bsh : 'box-shadow'      ,
  bg  : 'background'      ,
  brad: 'border-radius'   ,
  cc  : 'column-count'    ,
  cg  : 'column-gap'      ,
  cur : 'cursor'          ,
  dis : 'display'         ,
  fb  : 'flex-basis'      ,
  fd  : 'flex-direction'  ,
  fg  : 'flex-grow'       ,
  fs  : 'flex-shrink'     ,
  fw  : 'font-weight'     ,
  jc  : 'justify-content' ,
  h   : 'height'          ,
  l   : 'left'            ,
  m   : 'margin'          ,
  of  : 'overflow'        ,
  ofx : 'overflow-x'      ,
  ofy : 'overflow-y'      ,
  op  : 'opacity'         ,
  p   : 'padding'         ,
  r   : 'right'           ,
  pos : 'position'        ,
  t   : 'top'             ,
  ta  : 'text-align'      ,
  td  : 'text-decoration' ,
  tt  : 'text-transform'  ,
  va  : 'vertical-align'  ,
  w   : 'width'           ,
  zi  : 'z-index'
}

values = {
  a   : 'auto'          ,
  a0  : 'auto 0'        ,
  abs : 'absolute'      ,
  b   : 'block'         ,
  bl  : 'baseline'      ,
  c   : 'center'        ,
  col : 'column'        ,
  colr: 'column-reverse',
  da  : 'dashed'        ,
  do  : 'dotted'        ,
  f   : 'flex'          ,
  fix : 'fixed'         ,
  fe  : 'flex-end'      ,
  fs  : 'flex-start'    ,
  h   : 'hidden'        ,
  i   : 'inline'        ,
  ib  : 'inline-block'  ,
  inh : 'inherit'       ,
  lt  : 'line-through'  ,
  m   : 'middle'        ,
  n   : 'none'          ,
  ol  : 'overline'      ,
  rel : 'relative'      ,
  rowr: 'row-reverse'   ,
  sa  : 'solid'         ,
  sa  : 'space-around'  ,
  sb  : 'space-between' ,
  st  : 'sticky'        ,
  ul  : 'underline'
}

const result = [...new Set(
  Array.from(qsa('[class*="-"]'))

  .flatMap(el => Array.from(el.classList).filter(c => c.includes('-')))
)]



  result.forEach( c => {
                                    var spl  = c.split('-');


                                    // set property
                                    var prop = properties[spl[0]];

                                    // set value
                                    var val = spl[1];
                                    val = values[val] || val;

                                    //
                                    qsa('.'+c).forEach(z=>{z.style[prop] = val;});


  });

function cc(s){

  const x = {

     ///// SELECTOR
  element: qs(s),
        _: (a,b) => {

           if(b){

             let z = x[0].classList;
             z.contains(a) ? (m=a,n=b) : (m=b,n=a) ; (z.remove(m),z.add(n))

           } else {
             strB(a,'!') ? isNL(x) ? x.forEach(y=>{y.classList.remove(a.slice(1));})
                                   :               x.classList.remove(a.slice(1))
                         : isNL(x) ? x.forEach(y=>{y.classList.add(a);})
                                   :               x.classList.add(a)
           }

           return x
       },

}

return x

}
