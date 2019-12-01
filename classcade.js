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
      },
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
  },
      extras = {
    hw  : ['h,w'],
    tl  : ['t,l'],
    tr  : ['t,r'],
    rbl : ['r,b,l'],
    trl : ['t,r,l'],
    trb : ['t,r,b'],
    tbl : ['t,b,l'],
    trbl: ['t,r,b,l']
  },
     extras2 = [
       'masonry'
     ],
     extras3 = {
       absolute  : properties[pos] +':'+ values[abs],
       block     : properties[dis] +':'+ values[b],
       fixed     : properties[dis] +':'+ values[fix],
       italic    : properties[fs]  +':'+ values[it],
       justify   : properties[ta]  +':'+ values[j],
       nowrap    : properties[fw]  +':'+ values[nw],
       relative  : properties[pos] +':'+ values[r],
       pointer   : properties[cur] +':'+ values[p],
       position  : properties[pos] +':'+ values[st],
       underline : properties[td]  +':'+ values[ul],
       wrap      : properties[fw]  +':'+ values[w]
     },

   classcade = (selector) => {

    var s = selector || '[class]' ;

    const r  = [...new Set(Array.from(qsa(s)).flatMap(el => Array.from(el.classList)))];
    const r1 = r.filter( c =>  c.includes('--')                    ); // schema: prop--var
    const r2 = r.filter( c => !c.includes('--') && c.includes('-') ); // schema: prop-val
    const r3 = r.filter( c =>                     !c.includes('-') ); // schema: classname

////////// VARIABLE CLASSES ////////////////////////////////////////////////////

    var    varClasses = ( theArray ) => {
      theArray.forEach( c => {
        var s = c.split('--');
        var x = properties[s[0]];              // set property
        var y = 'var(--'+s[1]+')';             // set value
        qsa('.'+c).forEach(z=>{z.style[x]=y}); //
      });
    },

////////// SIMPLE CLASSES //////////////////////////////////////////////////////

        simpleClasses = ( theArray ) => {
      theArray.forEach( c => {
        var s = c.split('-');


        ////////// SET PROPERTY

        var p = properties[s[0]];

        ////////// SET VALUE

        var v = s[1];
        v = values[v] || v;
        if( s[0] === 'bg' && ( v.length == 6 || v.length == 8 ) ){ v = '#'+v; }

        qsa('.'+c).forEach(z=>{z.style[p]=v}); //
      });
    },

////////// SPECIAL CLASSES /////////////////////////////////////////////////////

       specialClasses  = ( theArray ) => {

    };
       specialClasses2 = ( theArray ) => {

         theArray.forEach( c => {

           extras3.forEach( d => {

             if( c === d ){

              qsa(d).forEach(z=>{

                x = extras3[d];
                z.style[x]=y



              });

             }

           });

         });

       };

////////////////////////////////////////////////////////////////////////////////
////////// APPLICTION //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

           varClasses(r1);
        simpleClasses(r2);
    // specialClasses(r3);
    //  specialClasses3(r3);

////////// FUNCTION CLASSES ////////////////////////////////////////////////////

          extras2.forEach( c => {
            window[c]('.'+c);
          });

}

classcade();
