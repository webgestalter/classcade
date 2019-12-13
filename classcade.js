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

var qsa=s=>(document.querySelectorAll(s)),

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
        fw  : 'flex-wrap'       ,
        fts : 'font-size'       ,
        ftw : 'font-weight'     ,
        jc  : 'justify-content' ,
        h   : 'height'          ,
        l   : 'left'            ,
        ls  : 'list-style'      ,
        m   : 'margin'          ,
        mb  : 'margin-bottom'   ,
        ml  : 'margin-left'     ,
        mr  : 'margin-right'    ,
        mt  : 'margin-top'      ,
        of  : 'overflow'        ,
        ofx : 'overflow-x'      ,
        ofy : 'overflow-y'      ,
        op  : 'opacity'         ,
        p   : 'padding'         ,
        pc  : 'place-content'   ,
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
      },
      values = {
    a   : 'auto'          ,
    a0  : 'auto 0'        ,
    abs : 'absolute'      ,
    b   : 'block'         ,
    bl  : 'baseline'      ,
    bld : 'bold'      ,
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
  },
        xtra = {
    hw  : ['h,w'],
    tl  : ['t,l'],
    tr  : ['t,r'],
    rbl : ['r,b,l'],
    trl : ['t,r,l'],
    trb : ['t,r,b'],
    tbl : ['t,b,l'],
    trbl: ['t,r,b,l']
  },
       xtra2 = [
       'masonry'
     ],
       alias = {
       absolute     : 'pos-abs',
       block        : 'dis-b',
       bold         : 'ftw-bld',
       fixed        : 'pos-fix',
       flex         : 'dis-f',
       italic       : 'fs-it',
       justify      : 'ta-j',
       nowrap       : 'fw-nw',
       relative     : 'pos-r',
       pointer      : 'cur-p',
       spaceA       : 'pc-sa',
       spaceB       : 'pc-sb',
       sticky       : 'pos-st',
       underline    : 'td-ul',
       wrap         : 'fw-w',

       fit          : 'w-100p',
       half         : 'w-50p',

       antialiased  : '-webkit-font-smoothing:antialiased'
     },

   classcade = selector => {

     // SHORTHANDS
     var   ea = (a,b) => { a.forEach(b)  },
         fltr = (a,b) => ( a.filter(b)   ),
          inc = (a,b) => ( a.includes(b) ),

    s = selector || '[class]' ,

    r  = [...new Set(Array.from(qsa(s)).flatMap(el=>Array.from(el.classList)))],

    r1 = fltr( r, c =>  inc(c,'--')                ), // schema: prop--var
    r2 = fltr( r, c => !inc(c,'--') &&  inc(c,'-') ), // schema: prop-val
    r3 = fltr( r, c =>  inc(c,'__')                ), // schema: prop__var
    r4 = fltr( r, c => !inc(c,'__') &&  inc(c,'_') ), // schema: prop_val
    r5 = fltr( r, c => !inc(c,'-')  && !inc(c,'_') ); // schema: classname

////////// VARIABLE CLASSES ////////////////////////////////////////////////////

    var    varClasses = theArray => {
      theArray.forEach( c => {
        var s = c.split('--'),
            x = properties[s[0]],              // set property
            y = 'var(--'+s[1]+')';             // set value
        qsa('.'+c).forEach(z=>{z.style[x]=y})
      })
    },

////////// VARIABLE CLASSES FOR CHILDS /////////////////////////////////////////

     varClassesChilds = theArray => {
              theArray.forEach( c => {
                var s = c.split('--'),
                    x = properties[s[0]],              // set property
                    y = 'var(--'+s[1]+')';             // set value
                qsa('.'+c).forEach(z=>{z.style[x]=y})
              })
            },

////////// SIMPLE CLASSES //////////////////////////////////////////////////////

         classApplier = (a,b)    => {

          var s = a.split('-'),

          ////////// SET PROPERTY

          p = properties[s[0]],

          ////////// SET VALUE

          w = s[0],
          v = s[1];
          v = values[v] || v;



          if( w === ('bg'||'c') && v.length === (3||4||6||8)  ){ v = '#'+v             };
          if( v.endsWith('p') && !isNaN(v.charAt(v.length-2)) ){ v = v.slice(0,-1)+'%' };
          if( !isNaN(v.slice(-1)) && w === ['h','w']          ){ v = 'calc(100%/${v})' };

          var c = b || a ;
          qsa('.'+c).forEach(z=>{z.style[p]=v})

        },
        simpleClasses = theArray => {
          theArray.forEach( c => { classApplier(c) });
        },

////////// SIMPLE CLASSES FOR CHILDS ///////////////////////////////////////////

       classApplierChilds = (a,b)    => {

        var s = a.split('-'),

        ////////// SET PROPERTY

        p = properties[s[0]],

        ////////// SET VALUE

        v = s[1];
        v = values[v] || v;
        if( s[0] === 'bg' && ( v.length === 6 || v.length === 8 )  ){ v = '#'+v             };
        if( v.endsWith !== 'p' && isNaN(v.charAt(v.length-2))      ){ v = v.slice(0,-1)+'%' };
        if( ( s[0] === 'h' || s[0] === 'w' ) && isNaN(v.slice(-1)) ){ v = 'calc(100%/${v})' };

        var c = b || a ;
        qsa('.'+c).forEach(z=>{z.style[p]=v})

      },
      simpleClassesChilds = theArray => {
          theArray.forEach( c => { classApplierChilds(c) });
        },

////////// SPECIAL CLASSES /////////////////////////////////////////////////////

       specialClasses  = theArray => {

    },

////////// ALIAS CLASSES ///////////////////////////////////////////////////////

       aliasClasses = theArray => {
         Object.keys(alias).forEach( d => {
           theArray.forEach( c => {
             if( c === d ){ classApplier(alias[d],c) }
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

cc = (s,c) => {

  s = isStr(s) ? QSA(s) : [s] ;
  c = !isArray(c) ? [c] : c ;


  s.forEach( z => {
    c.forEach( y => {
      if( strB(y,'!') ){
        z.classList.remove(y.slice(1))
      } else {
        LOG('add class: '+y);
        z.classList.add(y)
      }
    })
  })

}

classcade();
