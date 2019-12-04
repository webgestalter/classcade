;(function(){
    this.loaded     = 0;
    this.failed     = 0;
    this.total      = 0;
    this.watch      = (s,f) => {
        var el = document.querySelectorAll(s);
        if (!el.length){
          return console.log('[imgStatus]: There aren\'t any images associated with this selector (' + s + ')!')
        }

        this.total = el.length;
        for( var i = 0; i < this.total; i++ ){
            if( isCached(el[i].src) ){
                this._setLoaded(f);
            } else if ( el[i].addEventListener ){
                el[i].addEventListener('load', this._setLoaded.bind(this,f));
                el[i].addEventListener('error',this._setFailed.bind(this,f));
            } else {
                el[i].attachEvent('onload', this._setLoaded.bind(this,f));
                el[i].attachEvent('onerror',this._setFailed.bind(this,f));
            }
        }
    }
    this.isCached   = src   => { var img = new Image(); img.src = src; return img.complete };
    this._setFailed = (f,e) => { ++this.failed; if( typeof f === 'function' ){ f(this) } };
    this._setLoaded = (f,e) => { ++this.loaded; if( typeof f === 'function' ){ f(this) } };
    this.isDone     = ()    => ( ( (this.loaded + this.failed) === this.total) ? true : false );

    if( typeof window === "object" ){ window.imgStatus = this }

}());
