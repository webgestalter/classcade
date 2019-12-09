var  cctooltip = getTooltipOpts   => {
  D.addEventListener(MO,e => {
    var el = e.target, opts = getTooltipOpts(el);
    if(!opts){ el = el.parentElement; opts = el && getTooltipOpts(el) }
    opts && cctooltip.show(el,opts,T)
  });
};
cctooltip.show = (el,opts,isAuto) => {
  var fallbackAttrib = 'data-cctooltip';
  opts = opts || {};

  (el.tooltip || Tooltip(el,opts)).show();

  var Tooltip = (el,opts) => {
    var ttEl, showTimer, text;

    el.addEventListener(MD,autoHide); el.addEventListener(ML,autoHide);

    var   show = ()           => { text = el.title || el.getAttribute(fallbackAttrib) || text; el.title = ''; el.setAttribute(fallbackAttrib,''); text && !showTimer && (showTimer = setTimeout(fadeIn, isAuto ? 150 : 1)) },
      autoHide = ()           => { cctooltip.hide(el,T) },
          hide = isAutoHiding => { if (isAuto === isAutoHiding){ showTimer = clearTimeout(showTimer); var parent = ttEl && ttEl.parentNode; parent && parent.removeChild(ttEl); ttEl = U } },
        fadeIn = ()           => { if(!ttEl){ ttEl = createTooltip(el,text,opts) } };

    return el.tooltip = { show: show, hide: hide }
  },

  createTooltip = (el,text,opts) => {
    var ttEl = D.createElement('span'), grav = opts.grav || el.getAttribute('data-cctooltip') || 'n';
    ttEl.innerHTML = text;
    el.appendChild(ttEl);

    var vertGrav = grav[0] || '',
        horzGrav = grav[1] || '',

    positionTooltip = () => {
      ttEl.className = 'cctooltip ' + 'cctooltip-' + vertGrav + horzGrav;

      var arrowSize = 10, top = el.offsetTop, left = el.offsetLeft;

      if (ttEl.offsetParent === el){ top = left = 0 }

      var    width = el.offsetWidth,
            height = el.offsetHeight,
          ttHeight = ttEl.offsetHeight,
          ttWidth  = ttEl.offsetWidth,
         centerEl  = left + (width / 2);

      ttEl.style.top = (
        vertGrav === 's' ? (top - ttHeight - arrowSize)
      : vertGrav === 'n' ? (top + height + arrowSize)
                         : (top + (height / 2) - (ttHeight / 2))
      ) + 'px';

      ttEl.style.left = (
        horzGrav === 'w' ? left
      : horzGrav === 'e' ? left + width - ttWidth
      : vertGrav === 'w' ? (left + width + arrowSize)
      : vertGrav === 'e' ? (left - ttWidth - arrowSize)
                         : (centerEl - ttWidth / 2)
      ) + 'px'
    }

    positionTooltip();

    var rect = ttEl.getBoundingClientRect();

    vertGrav = (vertGrav === 's' && rect.top < 0)                ? 'n'
             : (vertGrav === 'n' && rect.bottom > W.innerHeight) ? 's'
             : (vertGrav === 'e' && rect.left < 0)               ? 'w'
             : (vertGrav === 'w' && rect.right > W.innerWidth)   ? 'e'
                                                                 : '' ;
    positionTooltip();

    ttEl.className += ' cctooltip-visible';
    return ttEl;
  }
};
cctooltip.hide = (el,isAuto)      => { el.tooltip && el.tooltip.hide(isAuto) };

if( typeof module !== 'undefined' && module.exports ){ module.exports = cctooltip }


// a = arrowSize
// _ =
// c = centerEl
// f = fallbackAttrib
// g = horzGrav
// h = height
// i = isAutoHiding
// l = left
// o = opts
// p = parent
// r = rect
// s = showTimer
// t = top
// _ =
// v = vertGrav
// w = width
// z = ttEl

autoHide
grav
isAuto
x text
ttHeight
ttWidth
