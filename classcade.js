D=document; qsa=(s,c)=>{return (c||D).querySelectorAll(s)}

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
                                    var val  = spl[1];
                                    val = values[val] || val;

                                    //
                                    qsa('.'+c).forEach(z=>{z.style[prop] = val;});


  });

function cc(s){

  const x = {

     ///// SELECTOR
  element: qs(s),

     ///// BASIC METHODS
        _: (a)     => {

        if(strB(a,'data-')){

          z = isNL(x) ? x[0] : x ;

          if (!("params" in z.dataset)){
              x = z.closest('*['+a+']');
          }
          return x.getAttribute(a);

        } else {

          x = [x[0].closest(a)];
          return x;
        }

    }

}

return x

}
