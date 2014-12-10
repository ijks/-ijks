// original version by ~gschueler @ tilde.club
// edited by ~ijks @ tilde.red

var tildeautolink=function(text){
  var pattern=/(^|[\s\n]|<br\/?>)(~[\w_\/\.]+)/gi;
  return text.replace(pattern, "$1<a href='http://tilde.red/$2'>$2</a>");
};

var tildeautolinkload=function() {
    var tags=['p','li','div'] ; // add more here
    for (var t = tags.length - 1; t >= 0; t--) {
        var els = document.getElementsByTagName(tags[t]);
        for(i = 0; i < els.length; i++) {
            if(tags[t]=='div' && els[i].getAttribute("class")!='md-text'){
                // only apply to md-text divs, hack for mdwiki support
                continue;
            }
          els[i].innerHTML = tildeautolink(els[i].innerHTML);
        }
    }
};
if (typeof(jQuery)=='undefined') {
    window.onload=tildeautolinkload;
} else {
    jQuery(tildeautolinkload);
}
