(function (root,f) {
  if( typeof define === 'function' && define.amd ){
    define('waterfall', () => (f) )
  } else if( typeof module === 'object' && module.exports ){
    module.exports = f
  } else {
    root.waterfall = f
  }
}(this, function waterfall(con){

  !function(){this.loaded=0,this.failed=0,this.total=0,this.watch=function(a,b){var c=document.querySelectorAll(con+' img');if(!c.length)return console.log("[imgStatus]: There aren't any images associated with this selector ("+a+")!");this.total=c.length;for(var d=0;d<this.total;d++)isCached(c[d].src)?this._setLoaded(b):c[d].addEventListener?(c[d].addEventListener("load",this._setLoaded.bind(this,b)),c[d].addEventListener("error",this._setFailed.bind(this,b))):(c[d].attachEvent("onload",this._setLoaded.bind(this,b)),c[d].attachEvent("onerror",this._setFailed.bind(this,b)))},this.isCached=function(a){var b=new Image;return b.src=a,b.complete},this._setFailed=function(a,b){++this.failed,"function"==typeof a&&a(this)},this._setLoaded=function(a,b){++this.loaded,"function"==typeof a&&a(this)},this.isDone=function(){return this.loaded+this.failed===this.total?!0:!1},"object"==typeof window&&(window.imgStatus=this)}();

  imgStatus.watch(con+' img',function(imgs){if(imgs.done()){

    if (typeof (con) === 'string') { con = D.querySelector(con) }

    var pf   = z     => (parseFloat(z));
    var s    = z     => (W.getComputedStyle(z));
    var m    = (u,v) => (pf(s(v)['margin'+u])||0);
    var p    = z     => (pf(z)+'px');
    var y    = z     => (pf(z.style.top));
    var x    = z     => (pf(z.style.left));
    var w    = z     => (pf(s(z).width));
    var h    = z     => (pf(s(z).height));
    var b    = z     => (y(z)+h(z)+m('Bottom',a));
    var r    = z     => (x(z)+w(z)+m('Right',z));
    var sort = z     => {z=z.sort((u,v)=>(b(v)-b(u)||x(v)-x(u)))};

    function Boundary(fR){
      var els = fR; sort(els);
      this.add = a  => {els.push(a);sort(els);els.pop()}
      this.min = () => (els[els.length - 1]);
      this.max = () => (els[0]);
    }

    var pe    = (a,b,c) => {a.style.position='absolute';a.style.top=p(b);a.style.left=p(c)}
    var pfe   = z       => {pe(z,0,m('Left',z))}
    var patfl = (u,v)   => {pe(v,u.style.top,r(u)+m('Left',v))}
    var patsc = (u,v)   => {pe(v,b(u)+m('Top',v),x(u))}
    var ac    = (u,v)   => {u.style.position='relative';u.style.height=p(b(v)+m('Bottom',v))}
    var tis   = (u,v)   => (r(u[v-1])+w(u[v])<=w(con));

    //

    var els = con.children;
    if(els.length){ pfe(els[0]) }
    for( var i = 1; i < els.length && tis(els,i); i++ ){ patfl(els[i-1],els[i]) }
    var fR  = [].slice.call(els,0,i);
    var bnd = new Boundary(fR);
    for( ; i < els.length; i++ ){ patsc(bnd.min(),els[i]);bnd.add(els[i]) }
    ac(con,bnd.max())

  }});
}))
