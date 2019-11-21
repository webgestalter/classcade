var qsa=s=>(document.querySelectorAll(s))

properties = {
  ac  : 'align-content'   ,
  ai  : 'align-items'     ,
  as  : 'align-self'      ,
  b   : 'bottom'          ,
  bor : 'border'          ,
  borb: 'border-bottom'   ,
  borl: 'border-left'     ,
  borr: 'border-right'    ,
  bort: 'border-top'      ,
  bs  : 'box-sizing'      ,
  bsh : 'box-shadow'      ,
  bg  : 'background'      ,
  brad: 'border-radius'   ,
  c   : 'color'           ,
  cc  : 'column-count'    ,
  cg  : 'column-gap'      ,
  cur : 'cursor'          ,
  dis : 'display'         ,
  f   : 'fill'            ,
  fb  : 'flex-basis'      ,
  fd  : 'flex-direction'  ,
  fg  : 'flex-grow'       ,
  fs  : 'flex-shrink'     ,
  fw  : 'font-weight'     ,
  jc  : 'justify-content' ,
  h   : 'height'          ,
  l   : 'left'            ,
  ls  : 'list-style'      ,
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
  tc  : 'color'           ,
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
  it  : 'italic'        ,
  j   : 'justify'        ,
  l   : 'left'          ,
  lt  : 'line-through'  ,
  m   : 'middle'        ,
  n   : 'none'          ,
  nw  : 'nowrap'        ,
  ol  : 'overline'      ,
  p   : 'pointer'       ,
  r   : 'right'         ,
  rel : 'relative'      ,
  rowr: 'row-reverse'   ,
  sa  : 'solid'         ,
  sa  : 'space-around'  ,
  sb  : 'space-between' ,
  st  : 'sticky'        ,
  ul  : 'underline'     ,
  w   : 'wrap'
}
    extras = {
  hw  : ['h,w'],
  tl  : ['t,l'],
  tr  : ['t,r'],
  rbl : ['r,b,l'],
  trl : ['t,r,l'],
  trb : ['t,r,b'],
  tbl : ['t,b,l'],
  trbl: ['t,r,b,l']
}

var classcade = (selector) => {

    var s = selector || '[class]' ;

    const r  = [...new Set(Array.from(qsa(s)).flatMap(el => Array.from(el.classList)))];
    const r1 = r.filter( c =>  c.includes('--')                    ); // set variables (custom properties) as value
    const r2 = r.filter( c => !c.includes('--') && c.includes('-') ); // set value
    const r3 = r.filter( c =>                     !c.includes('-') ); // other classes

    var    varClasses = ( theArray ) => {
      theArray.forEach( c => {
        var s = c.split('--');

        if( s[0] === 'bg' && s[1].length == 6 ){ s[1] = '#'+s[1]; }

        var p = properties[s[0]];              // set property
        var v = 'var(--'+s[1]+')';             // set value
        qsa('.'+c).forEach(z=>{z.style[p]=v}); //
      });
    }
    var simpleClasses = ( theArray ) => {
      theArray.forEach( c => {
        var s = c.split('-');
        var p = properties[s[0]];              // set property
        var v = s[1];v=values[v]||v;           // set value
        qsa('.'+c).forEach(z=>{z.style[p]=v}); //
      });
    }

       varClasses(r1);
    simpleClasses(r2);

}

classcade();
