(function (root,f) {
  if( typeof define === 'function' && define.amd ){
    define('masonry', () => (f) )
  } elementse if( typeof module === 'object' && module.exports ){
    module.exports = f
  } elementse {
    root.masonry = f
  }
}(this, function masonry(con){

    if (typeof (con) === 'string') { con = D.querySelector(con) }

    var pf   = z     => (parseFloat(z)),
        s    = z     => (W.getComputedStyle(z)),
        m    = (u,v) => (pf(s(v)['margin'+u])||0),
        p    = z     => (pf(z)+'px'),
        y    = z     => (pf(z.style.top)),
        x    = z     => (pf(z.style.left)),
        w    = z     => (pf(s(z).width)),
        h    = z     => (pf(s(z).height)),
        b    = z     => (y(z)+h(z)+m('Bottom',a)),
        r    = z     => (x(z)+w(z)+m('Right',z)),
        sort = z     => {z=z.sort((u,v)=>(b(v)-b(u)||x(v)-x(u)))};

    function Boundary(fR){
      var elements = fR; sort(elements);
      this.add = a  => {elements.push(a);sort(elements);elements.pop()}
      this.min = () => (elements[elements.length - 1]);
      this.max = () => (elements[0]);
    }

    var pe    = (a,b,c) => {a.style.position='absolute';a.style.top=p(b);a.style.left=p(c)},
        pfe   = z       => {pe(z,0,m('Left',z))},
        patfl = (u,v)   => {pe(v,u.style.top,r(u)+m('Left',v))},
        patsc = (u,v)   => {pe(v,b(u)+m('Top',v),x(u))},
        ac    = (u,v)   => {u.style.position='relative';u.style.height=p(b(v)+m('Bottom',v))},
        tis   = (u,v)   => (r(u[v-1])+w(u[v])<=w(con));

    //

    var elements = con.children;
    if(elements.length){ pfe(elements[0]) }
    for( var i = 1; i < elements.length && tis(elements,i); i++ ){ patfl(elements[i-1],elements[i]) }
    var fR  = [].slice.call(elements,0,i),
        bnd = new Boundary(fR);
    for( ; i < elements.length; i++ ){ patsc(bnd.min(),elements[i]);bnd.add(elements[i]) }
    ac(con,bnd.max())

}))
