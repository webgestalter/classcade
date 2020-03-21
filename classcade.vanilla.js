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

classcade = context => {

  ////////// IS?-FUNCTIONS

  var is      = (a,b) => ( typeof a==b ),
      isArray =   a   => ( (!!a) && (a.constructor===Array) ),

  ////////// PROPERTIES & VALUES

  properties = {
      ac  : 'align-content',
      ai  : 'align-items',
      as  : 'align-self',
      b   : 'bottom',
      bor : 'border',
      borb: 'border-bottom',
      borl: 'border-left',
      borr: 'border-right',
      bort: 'border-top',
      bs  : 'box-sizing',
      bsh : 'box-shadow',
      bg  : 'background',
      brad: 'border-radius',
      c   : 'color',
      cc  : 'column-count',
      cg  : 'column-gap',
      cur : 'cursor',
      dir : 'direction',
      dis : 'display',
      f   : 'fill',
      fb  : 'flex-basis',
      fd  : 'flex-direction',
      fg  : 'flex-grow',
      fs  : 'flex-shrink',
      fw  : 'flex-wrap',
      ft  : 'font',
      ftf : 'font-family',
      fts : 'font-size',
      ftv : 'font-variant',
      ftw : 'font-weight',
      jc  : 'justify-content',
      ji  : 'justify-items',
      js  : 'justify-self',
      g   : 'grid',
      ga  : 'grid-area',
      gac : 'grid-auto-columns',
      gaf : 'grid-auto-flow',
      gar : 'grid-auto-rows',
      gc  : 'grid-column',
      gce : 'gc|-end',
      gcg : 'gc|-gap',
      gcs : 'gc|-start',
      gg  : 'g|-gap',
      gr  : 'g|-row',
      gre : 'gr|-end',
      grg : 'gr|-gap',
      grs : 'gr|-start',
      gt  : 'g|-template',
      gta : 'gt|-areas',
      gtc : 'gt|-columns',
      gtr : 'gt|-rows',
      h   : 'height',
      l   : 'left',
      lh  : 'line-height',
      ls  : 'list-style',
      lsp : 'letter-spacing',
      m   : 'margin',
      mb  : 'margin-bottom',
      ml  : 'margin-left',
      mr  : 'margin-right',
      mt  : 'margin-top',
      of  : 'overflow',
      ofx : 'overflow-x',
      ofy : 'overflow-y',
      op  : 'opacity',
      p   : 'padding',
      pb  : 'padding-bottom',
      pl  : 'padding-left',
      pr  : 'padding-right',
      pt  : 'padding-top',
      pc  : 'place-content',
      pi  : 'place-items',
      ps  : 'place-self',
      r   : 'right',
      pos : 'position',
      t   : 'top',
      ta  : 'text-align',
      tc  : 'color',
      td  : 'text-decoration',
      ti  : 'text-indent',
      tof : 'text-overflow',
      tsh : 'text-shadow',
      tt  : 'text-transform',
      va  : 'vertical-align',
      w   : 'width',
      ws  : 'word-spacing',
      zi  : 'z-index'
    },
      values = {
    a   : 'auto',
    a0  : 'auto 0',
    abs : 'absolute',
    b   : 'block',
    bl  : 'baseline',
    bld : 'bold',
    c   : 'center',
    col : 'column',
    colr: 'column-reverse',
    da  : 'dashed',
    do  : 'dotted',
    e   : 'end',
    f   : 'flex',
    fix : 'fixed',
    fe  : 'flex-end',
    fs  : 'flex-start',
    g   : 'grid',
    h   : 'hidden',
    i   : 'inline',
    ib  : 'inline-block',
    ig  : 'inline-grid',
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
    uc  : 'uppercase',
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
       abs          : 'pos-abs'   ,
       absolute     : 'pos-abs'   ,
       block        : 'dis-b'     ,
       bold         : 'ftw-bld'   ,
       fixed        : 'pos-fix'   ,
       flex         : 'dis-f'     ,
       grid         : 'dis-g'     ,
       hidden       : 'dis-n'     ,
       italic       : 'fs-it'     ,
       justify      : 'ta-j'      ,
       nowrap       : 'fw-nw'     ,
       rel          : 'pos-rel'   ,
       relative     : 'pos-rel'   ,
       pointer      : 'cur-p'     ,
       spaceA       : 'pc-sa'     ,
       spaceB       : 'pc-sb'     ,
       spaceE       : 'pc-se'     ,
       sticky       : 'pos-st'    ,
       stretch      : 'pi-str'    ,
       underline    : 'td-ul'     ,
       upper        : 'tt-uc'     ,
       uppercase    : 'tt-uc'     ,
       wrap         : 'fw-w'      ,

       fit          : 'w-100p'    ,
       half         : 'w-50p'     ,

       ltr          : 'dir-ltr'   ,
       rtl          : 'dir-rtl'
     },

  ////////// CLASSES OF HTML-DOCUMENT

  // create array containing all elements with class-property
  r  = [...new Set( Array.from( (context||document).querySelectorAll('[class]') ).flatMap( el => Array.from(el.classList) ) )],

  // create arrays containing all elements with specific classes
  r1 = r.filter( className =>  className.includes('--')                             ), // property--variableName
  r2 = r.filter( className => !className.includes('--') &&  className.includes('-') ), // property-value
  r3 = r.filter( className =>  className.includes('__')                             ), // property__variableName
  r4 = r.filter( className => !className.includes('__') &&  className.includes('_') ), // property_value
  r5 = r.filter( className => !className.includes('-')  && !className.includes('_') ), // alias

  ////////// APPLICATION FUNCTIONS

     apply = (seperator,a,b)   => {

      var s = a.split(seperator),
          p = s[0],

      ///// SET PROPERTY

      property = properties[p];

      ///// SET VALUE

      if( property !== undefined ){

        var value = s[1];
            value = values[value] || value;
            value = ( ['bg','c','f'].includes(p) && value !== 'none'               ) ? '#' + value
                  : ( value.endsWith('p') && !isNaN(value.charAt(value.length-2))  ) ? value.slice(0,-1) + '%'
                  : ( !isNaN(value.slice(-1)) && ['h','w'].includes(p)             ) ? 'calc(100%/${value})'
                  : value ;

        ///// APPLY PROPERTY & VALUE

        var className = b || a ;
        (context||document).querySelectorAll( '.' + className ).forEach( el => { el.style[property] = value })

      }

    },
    simple = (array,seperator) => {

    array.forEach( className => { apply(seperator,className) })

  },
  variable = (array,seperator) => {

       array.forEach( className => {

         var s = className.split(seperator),
      property = properties[s[0]],
         value = 'var(--' + s[1] + ')';

         (context||document).querySelectorAll( '.' + className ).forEach( el => { el.style[property] = value })

       })

     },
     alias = array             => {

    Object.keys(alias).forEach( aliasName => {
      array.forEach( className => {
        if( className === aliasName ){ apply('-',alias[aliasName],className) }
      })
    })

  };

////////////////////////////////////////////////////////////////////////////////
////////// APPLICATION /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  variable(r1,'--'); // property--variableName
  variable(r3,'__'); // property__variableName
    simple(r2,'-');  // property-value
    simple(r4,'_');  // property_value
// special(r5);
     alias(r5);

    // r2.forEach( c => { apply('-',c) } ); // simpleClasses
    // r4.forEach( c => { apply('_',c) } ); // simpleChildClasses

////////// FUNCTION CLASSES ////////////////////////////////////////////////////

    //FE(xtra2, c => { LOG('classcade function: '+c); window[c]('.'+c) });

  //  addEvent( window, 'resize', () => { classcade() } );

},

cc    = (selector,context) => {

  selector = is(selector,'string') ? document.querySelectorAll(selector) : [selector] ;
   context = !isArray(context) ? [context] : context ;

  selector.forEach( z => {
    context.forEach( y => {
      _(z).class(y)
    })
  })

},
ccVar = (variable,value,context) => {
  var str = (context||'html')+'{}';
  addCSS(str);
}

classcade();
