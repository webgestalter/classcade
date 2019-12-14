////////////////////////////////////////////////////////////
//░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░//
//░░░░███░█░░░███░███░███░███░███░░░█░███░░░░//
//░░░░█░░░█░░░█░█░█░░░█░░░█░░░█░█░░░█░█░░░░░░//
//░░░░█░░░█░░░███░███░███░█░░░███░███░███░░░░//
//░░░░█░░░█░░░█░█░░░█░░░█░█░░░█░█░█░█░█░░░░░░//
//░░░░███░███░█░█░███░███░███░█░█░███░███░░░░//
//░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░//
//░░░░ VERSION 1.0 ░░░░ webgestalter.in/classcade ░░░░//
//░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░//
////////////////////////////////////////////////////////////

var  props = {
    ac  : 'align-content',
    ai  : 'align-items',
    as  : 'align-self',
    b   : 'bottom',
    bor : 'border',
    borb: 'bor|-bottom',
    borl: 'bor|-left',
    borr: 'bor|-right',
    bort: 'bor|-top',
    bs  : 'box-sizing',
    bsh : 'box-shadow',
    bg  : 'background',
    brad: 'border-radius',
    c   : 'color',
    cc  : 'column-count',
    cg  : 'column-gap',
    cur : 'cursor',
    dis : 'display',
    f   : 'fill',
    fb  : 'flex-basis',
    fd  : 'flex-direction',
    fg  : 'flex-grow',
    fs  : 'flex-shrink',
    fw  : 'flex-wrap',
    fts : 'font-size',
    ftw : 'font-weight',
    jc  : 'justify-content',
    ji  : 'justify-items',
    js  : 'justify-self',
    g   : 'grid',
    ga  : 'g|-area',
    gac : 'g|-auto-columns',
    gaf : 'g|-auto-flow',
    gar : 'g|-auto-rows',
    gc  : 'g|-column',
    gce : 'gc|-end',
    gcg : 'gc|-gap',
    gcs : 'gc|-start',
    gg  : 'g|-gap',
    gr  : 'g|-row',
    gre : 'gr|-end',
    grg : 'gr|-gap',
    grs : 'gr|-start',
    gta : 'g|-template-areas',
    gtc : 'g|-template-columns',
    gtr : 'g|-template-rows',
    h   : 'height',
    l   : 'left',
    ls  : 'list-style',
    m   : 'margin',
    mb  : 'm|-bottom',
    ml  : 'm|-left',
    mr  : 'm|-right',
    mt  : 'm|-top',
    of  : 'overflow',
    ofx : 'of|-x',
    ofy : 'of|-y',
    op  : 'opacity',
    p   : 'padding',
    pb  : 'p|-bottom',
    pl  : 'p|-left',
    pr  : 'p|-right',
    pt  : 'p|-top',
    pc  : 'place-content',
    pi  : 'place-items',
    ps  : 'place-self',
    r   : 'right',
    pos : 'position',
    t   : 'top',
    ta  : 'text-align',
    tc  : 'color',
    td  : 'text-decoration',
    tt  : 'text-transform',
    va  : 'vertical-align',
    w   : 'width',
    zi  : 'z-index'
  },
    values = {
  a   : 'auto',
  a0  : 'a| 0',
  abs : 'absolute',
  b   : 'block',
  bl  : 'baseline',
  bld : 'bold',
  c   : 'center',
  col : 'column',
  colr: '[col]-reverse',
  da  : 'dashed',
  do  : 'dotted',
  e   : 'end',
  f   : 'flex',
  fix : 'fixed',
  fe  : '[f]-end',
  fs  : '[f]-start',
  g   : 'grid',
  h   : 'hidden',
  i   : 'inline',
  ib  : '[i]-block',
  ig  : '[i]-grid',
  inh : 'inherit',
  it  : 'italic',
  j   : 'justify',
  l   : 'left',
  lt  : 'line-through',
  m   : 'middle',
  maxc: 'max-content',
  minc: 'min-content',
  n   : 'none',
  nw  : 'nowrap',
  ol  : 'overline',
  p   : 'pointer',
  r   : 'right',
  rel : 'relative',
  rowr: 'row-reverse',
  s   : 'start',
  sa  : 'space-around',
  sb  : 'space-between',
  se  : 'space-evenly',
  so  : 'solid',
  st  : 'sticky',
  str : 'stretch',
  ul  : 'underline',
  tc  : 'table-cell',
  w   : 'wrap'
},
      xtra = {
  hw  : ['h|','w|'],
  tl  : ['t|','l|'],
  tr  : ['t|','r|'],
  rbl : ['r|','b|','l|'],
  trl : ['t|','r|','l|'],
  trb : ['t|','r|','b|'],
  tbl : ['t|','b|','l|'],
  trbl: ['t|','r|','b|','l|']
},
     xtra2 = [
     'masonry'
   ],
     alias = {
     absolute     : 'pos-abs'   ,
     block        : 'dis-b'     ,
     bold         : 'ftw-bld'   ,
     fixed        : 'pos-fix'   ,
     flex         : 'dis-f'     ,
     grid         : 'dis-g'     ,
     italic       : 'fs-it'     ,
     justify      : 'ta-j'      ,
     nowrap       : 'fw-nw'     ,
     relative     : 'pos-r'     ,
     pointer      : 'cur-p'     ,
     spaceA       : 'pc-sa'     ,
     spaceB       : 'pc-sb'     ,
     spaceE       : 'pc-se'     ,
     sticky       : 'pos-st'    ,
     stretch      : 'pi-str'    ,
     underline    : 'td-ul'     ,
     wrap         : 'fw-w'      ,

     fit          : 'w-100p'    ,
     half         : 'w-50p'
   },

     classcade = context => {

     // SHORTHANDS
     var ea = (a,b) => { a.forEach(b)  },
          f = (a,b) => ( a.filter(b)   ),

    r  = [...new Set(Array.from(QSA('[class]',context)).flatMap(el=>Array.from(el.classList)))],

    r1 = f(r,c => I(c,'--')           ), // prop--var
    r2 = f(r,c =>!I(c,'--')&& I(c,'-')), // prop-val
    r3 = f(r,c => I(c,'__')           ), // prop__var
    r4 = f(r,c =>!I(c,'__')&& I(c,'_')), // prop_val
    r5 = f(r,c =>!I(c,'-') &&!I(c,'_')), // alias

////////// VARIABLE CLASSES ////////////////////////////////////////////////////

           varClasses = arr => {
                arr.forEach( c => {
                  var s = c.split('--'),
                      x = props[s[0]],              // set property
                      y = 'var(--'+s[1]+')';             // set value
                  QSA('.'+c).forEach(z=>{z.style[x]=y})
                })
              },
     varClassesChilds = arr => {
              arr.forEach( c => {
                var s = c.split('--'),
                    x = props[s[0]],              // set property
                    y = 'var(--'+s[1]+')';             // set value
                QSA('.'+c).forEach(z=>{z.style[x]=y})
              })
            },

////////// SIMPLE CLASSES //////////////////////////////////////////////////////

         classApply = (trenner,a,b) => {

           var pFixer = j => {
             var a = j.split('|'),
                 r = (props[a[0]]||values[a[0]]) + a[1];
             if(I(r,'|')){ r = pFixer(r) } else { return r }
           },
               vFixer = j => {
             var a = j.split('|'),
                 r = (values[a[0]]||props[a[0]]) + a[1];
             if(I(r,'|')){ r = pFixer(r) } else { return r }
           },

          s = a.split(trenner),
          w = s[0],

          ////////// SET PROPERTY

          p = props[s[0]],

          ////////// SET VALUE

          v = s[1];
          v = values[v] || v;

          ////////// FIX props & VALUES

          if(p.includes('|')){p=pFixer(p)}
          if(v.includes('|')){v=vFixer(v)}

          //////////

          if( I(['bg','c'],w) && I([3,4,6,8],v.length)        ){ v = '#'+v             };
          if( v.endsWith('p') && !isNaN(v.charAt(v.length-2)) ){ v = v.slice(0,-1)+'%' };
          if( !isNaN(v.slice(-1)) && I(['h','w'],w)           ){ v = 'calc(100%/${v})' };

          var c = b || a ;
          QSA('.'+c).forEach(z=>{z.style[p]=v})

        },
        simpleClasses = arr      => {
          arr.forEach( c => { classApply('-',c) });
        },
  simpleClassesChilds = arr      => {
          arr.forEach( c => { classApply('_',c) });
        },

////////// SPECIAL CLASSES /////////////////////////////////////////////////////

       specialClasses  = arr => {

    },

////////// ALIAS CLASSES ///////////////////////////////////////////////////////

       aliasClasses = arr => {
         Object.keys(alias).forEach( d => {
           arr.forEach( c => {
             if( c === d ){ classApply('-',alias[d],c) }
           });
         });
       };

////////////////////////////////////////////////////////////////////////////////
////////// APPLICTION //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

           varClasses(r1);
        simpleClasses(r2);
    // specialClasses(r5);
         aliasClasses(r5);

////////// FUNCTION CLASSES ////////////////////////////////////////////////////

    xtra2.forEach( c => { window[c]('.'+c) });

},

cc    = (s,c) => {

  s = isStr(s) ? QSA(s) : [s] ;
  c = !isArray(c) ? [c] : c ;

  s.forEach( z => {
    c.forEach( y => {
      if( strB(y,'!') ){
        z.classList.remove(y.slice(1))
      } else {
        z.classList.add(y)
      }
    })
  })

},
ccVar = (variable,value,context) => {
  var str = (context||'html')+'{}';
  addCSS(str);
}

classcade();
