(function(){var e,t,i,a;e="body",a="classifying",t="classified",i=function(t){return $(e).toggleClass(a,t>0)},$(function(){var a,n,l,r,s,c,o;return a=!1,n=0,o=0,s=new Detexify({baseuri:"/api/"}),c=$("#classify--hit--list"),r=function(l){var r;a=!1,n+=1,i(n),o+=1,r=o,s.classify(l,function(l){var s,f;if(!a){if(n-=1,i(n),o>r)return!1;f=l.slice(0,5),s=l.slice(5),populateSymbolList(f,c),s.length||$("#showmore").hide(),$("#showmore a").off("click").click(function(e){return e.preventDefault(),f=f.concat(s.slice(0,5)),s=s.slice(5),s.length||$("#showmore").hide(),populateSymbolList(f,c)}),$(e).addClass(t)}})},l=$.canvassify("#tafel",{callback:r}),$("#clear").click(function(r){return r.stopPropagation(),r.preventDefault(),a=!0,n=0,i(n),o=0,l.clear(),$(e).removeClass(t),$("#symbols").empty()}),$("#canvaserror").hide(),$("drawhere").on("touchstart",function(e){return e.preventDefault()})})}).call(this);