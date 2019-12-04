(function (root,f) {
  if( typeof define === 'function' && define.amd ){
    define('masonry', () => (f) )
  } else if( typeof module === 'object' && module.exports ){
    module.exports = f
  } else {
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
      var els = fR; sort(els);
      this.add = a  => {els.push(a);sort(els);els.pop()}
      this.min = () => (els[els.length - 1]);
      this.max = () => (els[0]);
    }

    var pe    = (a,b,c) => {a.style.position='absolute';a.style.top=p(b);a.style.left=p(c)},
        pfe   = z       => {pe(z,0,m('Left',z))},
        patfl = (u,v)   => {pe(v,u.style.top,r(u)+m('Left',v))},
        patsc = (u,v)   => {pe(v,b(u)+m('Top',v),x(u))},
        ac    = (u,v)   => {u.style.position='relative';u.style.height=p(b(v)+m('Bottom',v))},
        tis   = (u,v)   => (r(u[v-1])+w(u[v])<=w(con));

    //

    var els = con.children;
    if(els.length){ pfe(els[0]) }
    for( var i = 1; i < els.length && tis(els,i); i++ ){ patfl(els[i-1],els[i]) }
    var fR  = [].slice.call(els,0,i),
        bnd = new Boundary(fR);
    for( ; i < els.length; i++ ){ patsc(bnd.min(),els[i]);bnd.add(els[i]) }
    ac(con,bnd.max())

}))
