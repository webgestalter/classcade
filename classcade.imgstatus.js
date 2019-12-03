;(function() {
    this.loaded     = 0;
    this.failed     = 0;
    this.total      = 0;
    this.watch      = (selector,fn) => {
        var el = document.querySelectorAll(selector);
        if (!el.length){
          return console.log('[imgStatus]: There aren\'t any images associated with this selector (' + selector + ')!')
        }

        this.total = el.length;
        for( var i = 0; i < this.total; i++ ){
            if( isCached(el[i].src) ){
                this._setLoaded(fn);
            } else if ( el[i].addEventListener ){
                el[i].addEventListener('load', this._setLoaded.bind(this,fn));
                el[i].addEventListener('error',this._setFailed.bind(this,fn));
            } else {
                el[i].attachEvent('onload', this._setLoaded.bind(this,fn));
                el[i].attachEvent('onerror',this._setFailed.bind(this,fn));
            }
        }
    }
    this.isCached   = src    => { var img = new Image(); img.src = src; return img.complete };
    this._setFailed = (fn,e) => { ++this.failed; if( typeof fn === 'function' ){ fn(this) } };
    this._setLoaded = (fn,e) => { ++this.loaded; if( typeof fn === 'function' ){ fn(this) } };
    this.isDone     = ()     => ( ( (this.loaded + this.failed) === this.total) ? true : false )

    if( typeof window === "object" ){ window.imgStatus = this }

}());
