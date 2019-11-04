properties = {
  ac  : 'align-content'   ,
  ai  : 'align-items'     ,
  as  : 'align-items'     ,
  cc  : 'column-count'    ,
  m   : 'margin'          ,
  p   : 'padding'         ,
  ta  : 'text-align'
}

values = {
  a   : 'auto'          ,
  a0  : 'auto 0'        ,
  abs : 'absolute'      ,
  bl  : 'baseline'      ,
  c   : 'center'        ,
  fix : 'fixed'         ,
  fe  : 'flex-end'      ,
  fs  : 'flex-start'    ,
  n   : 'none'          ,
  rel : 'relative'      ,
  sa  : 'space-around'  ,
  sb  : 'space-between' ,
  st  : 'sticky'
}

var getClasses = [];
var classesContain = [];

document.querySelectorAll('*').forEach(x => {
  var y = x.className.split(/\s+/g); // use a regex to cater for multiple spaces
  y.forEach(className => {
    if (className.indexOf('-') > -1)
      classesContain.push(className);
  });
});

console.log('Final class list: ', classesContain);



  classesContain.forEach( c => {
                                    var spl  = c.split('-');
                                    var prop = spl[0]; prop = properties[prop];
                                    var val  = spl[1]; val  =       value[val];
                                    document.querySelectorAll(c).style[prop] = val;

                                    console.log(prop);
                                    console.log(val);
  });
