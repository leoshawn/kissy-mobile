KISSY.add("mobile/app/1.0/index",function(d,h){function a(b){if(this instanceof a)a.superclass.constructor.call(this,b),this.init();else return new a(b)}var c=window.history;a.ATTRS={viewpath:{value:"index.html",setter:function(b){return decodeURIComponent(b)}},forceReload:{value:!0},page:{value:null},direction:{value:"none"},anim:{value:!0},dataload:{value:"true"},param:{value:null},pageCache:{value:!1},tapTrigger:{value:"a"},animWrapperAutoHeightSetting:{value:!0},containerHeighTimmer:{value:!0},
basepath:{value:window.location.protocol+"//"+window.location.hostname+window.location.pathname.replace(/\/[^\/]+$/i,"").replace(/\/$/,"")+"/",setter:function(b){return/\/$/.test(b)?b:b+"/"}},initPostData:{value:null},signet:{value:{level:0,viewpath:"",hisurl:"",lastviewpath:"",forward:0,scrollTop:0}},fullRangeWidth:{value:function(){return document.body.offsetWidth}},webkitOptimize:{value:!0},positionMemory:{value:!0}};d.mix(a,{READY:{},STARTUP:{},TEARDOWN:{},INCLUDEONCE:{},DESTORY:{},PAGECACHE:{},
PAGESCROLL:{},STORAGE:{},APP:null,AndroidHis:{},includeOnce:function(b){if(a.APP.slide){var f=this.APP.get("viewpath");d.isFunction(this.INCLUDEONCE[f])||(this.INCLUDEONCE[f]=b,b.call(this.APP,this.APP))}else b.call(this.APP)},destory:function(b){var a=this.APP.get("viewpath");d.isFunction(this.DESTORY[a])||(this.DESTORY[a]=b)},startup:function(b){a.APP.slide?this.STARTUP[this.APP.get("viewpath")].push(b):b.call(a.APP)},ready:function(b){a.APP.slide?this.READY[this.APP.get("viewpath")].push(b):b.call(this.APP)},
teardown:function(b){a.APP.slide?this.TEARDOWN[this.APP.get("viewpath")].push(b):b.call(this.APP)},cleanup:function(){var b=this.APP.get("viewpath");this.STARTUP[b]=[];this.READY[b]=[];this.TEARDOWN[b]=[]}});d.extend(a,d.Base,{init:function(){this.MS=this.constructor;d.one("#MS")?(d.UA.opera&&0<d.UA.opera&&this.set("animWrapperAutoHeightSetting",!0),this.slide=new h("MS",{autoSlide:!1,effect:this.get("anim")?"hSlide":"none",touchmove:!1,adaptive_fixed_width:!0,contentClass:"MS-con",speed:450,pannelClass:"MS-pal",
animWrapperAutoHeightSetting:this.get("animWrapperAutoHeightSetting"),webkitOptimize:this.get("webkitOptimize"),adaptive_width:this.get("fullRangeWidth")}),this.positionTimmer=null,this.get("containerHeighTimmer")&&this.slide.addHeightTimmer(),this.bindEvent(),this.initLoad()):this.set("page",d.one("body"));this.initPageStorage();this.set("storage",this.MS.STORAGE[this.get("viewpath")]||{});a.APP=this;return this},callDestory:function(){var b=this.MS.DESTORY[this.get("signet").lastviewpath];d.isFunction(b)&&
b.call(this,this);return this},initPageStorage:function(){var b=this.get("viewpath");if(!d.isObject(this.MS.STORAGE[b])){var a=function(){};d.augment(a,d.Base.Attribute,d.EventTarget);this.MS.STORAGE[b]=new a}},callReady:function(b){var a=this;d.isUndefined(b)&&(b=a.get("viewpath"));var e=a.MS.READY[b],c=a.get("param");d.isArray(e)&&d.each(e,function(b){setTimeout(function(){b.call(a,c)},200)});d.isFunction(e)&&setTimeout(function(){e.call(a)},200);return this},callStartup:function(b){var a=this;
d.isUndefined(b)&&(b=a.get("viewpath"));var e=a.MS.STARTUP[b],c=a.get("param");a.set("param",null);a.set("storage",a.MS.STORAGE[b]||{});d.isArray(e)&&d.each(e,function(b){b.call(a,c)});d.isFunction(e)&&e.call(a,c);return this},callTeardown:function(b){var a=this;d.isUndefined(b)&&(b=a.get("viewpath"));if(""!==b){var c=a.MS.TEARDOWN[b];a.rememberPosition(b);d.isArray(c)&&d.each(c,function(b){setTimeout(function(){b.call(a,a)},0)});return d.isFunction(c)?c.call(a,a):!0}},rememberPosition:function(b){this.MS.PAGESCROLL[b]=
d.DOM.scrollTop()},recallPosition:function(){if(this.get("positionMemory")){var b=this.MS.PAGESCROLL[this.get("viewpath")];b&&0===d.DOM.scrollTop()&&setTimeout(function(){d.Anim(window,{scrollTop:b},0.5,"easeBoth",function(){}).run()},200)}},initLoad:function(){d.isUndefined(d.getHash().viewpath)||this.set("viewpath",d.getHash().viewpath);d.isNull(this.get("initPostData"))||(this.__post=this.get("initPostData"));this._go(this.get("viewpath"),"none");var b=this.formatUrlTail(this.get("viewpath"),d.getHash()),
a={level:0,viewpath:this.get("viewpath"),hisurl:b,forward:0,lastviewpath:"",scrollTop:d.DOM.scrollTop()};this.set("signet",a);c.replaceState(a,"",b);this.set("viewpath",d.getHash().viewpath)},rollback:function(){var b=this.formatUrlTail(this.get("viewpath"),d.getHash()),a={level:0,viewpath:this.get("viewpath"),hisurl:b,forward:0,lastviewpath:"",scrollTop:d.DOM.scrollTop()};this.set("signet",a);c.replaceState(a,"",b);this.set("viewpath",d.getHash().viewpath)},loading:function(){var b=this,a=d.one("#MS-loading"),
a=a?a:d.Node('<div id="MS-loading" style="display:none"><img src="http://img04.taobaocdn.com/tps/i4/T1aIsKXmReXXa679Pe-40-40.gif" /></div>').appendTo("body");a.one("img").css({"margin-top":"5px"});a.css({display:"none",position:"fixed",height:"50px",width:"50px",top:"50%",left:"50%","margin-top":"-25px","margin-left":"-25px","border-radius":"6px","text-align":"center","background-color":"white",opacity:0.7});b.loadingTimer=setTimeout(function(){a.css({display:"block"});b.loadingTimer=null},350);return b},
closeLoading:function(){this.loadingTimer&&clearTimeout(this.loadingTimer);var b=d.one("#MS-loading");b&&b.css({display:"none"});return this},getUrlPrefix:function(){var b=window.location;return b.pathname.replace(/\/.+\//i,"").replace("/","")+b.search},formatUrlTail:function(b,a){d.isUndefined(a)&&(a="");d.isString(a)&&(a=d.unparam(a));var c=d.setHash(d.merge(a,{viewpath:encodeURIComponent(b)}));return this.getUrlPrefix()+c.replace(/^.+#/i,"#")},setRouteHash:function(a,f){this.set("viewpath",a);
d.isUndefined(f)&&(f="");d.isString(f)&&(f=d.unparam(f));var e=this.formatUrlTail(a,d.getHash()),e={level:this.get("signet").level+1,viewpath:a,hisurl:d.setHash(decodeURIComponent(e),f),forward:1,lastviewpath:a,scrollTop:d.DOM.scrollTop()},g=window.location,g=g.protocol+"//"+g.hostname+g.pathname+g.search,g=d.setHash(g,d.merge({viewpath:encodeURIComponent(a)},f));d.UA.android&&4.3>d.UA.android?window.location.href=g:(this.doHashChange(a,f),c.replaceState(e,"",g))},doHashChange:function(a,c){var e=
d.setHash(d.merge({stamp:d.now(),viewpath:encodeURIComponent(a)},c)).match(/#.*$/i)[0];window.location.hash=e},bindEvent:function(){var a=this;if(d.UA.android&&4.3>d.UA.android){var f=d.getHash().viewpath?d.getHash().viewpath:a.get("viewpath");a.MS.AndroidHis[f]=1}a.slide.con.delegate("click",a.get("tapTrigger"),function(c){var f=d.one(c.currentTarget);if(!d.isUndefined(f.attr("target"))&&""!==f.attr("target")||/^javascript:/i.test(f.attr("href")))return"top"==f.attr("target")&&(window.location.href=
f.attr("href"),c.preventDefault()),!0;a.__clickEvent=!0;var h=f.attr("href"),f=f.attr("data-param");if(""===h)return!0;a.setRouteHash(h,f);c.preventDefault()});d.Event.on(window,"hashchange",function(){var e=a.get("signet"),f=decodeURIComponent(d.getHash().viewpath);a.set("viewpath",f);var h=!1,h=a.__clickEvent&&!0===a.__clickEvent?!0:!1;delete a.__clickEvent;d.isUndefined(f)||(a.formatUrlTail(f,d.getHash()),d.UA.android&&4.3>d.UA.android?a._androidHistoryMan(h):d.isUndefined(c.state)||d.isUndefined(c.state.level)?
(a._go(f,"none"),a.recordSignet(0,f)):0===a.get("signet").forward&&0<c.state.forward?(a.next(f),a.recordSignet(1,f)):c.state.level>e.level?0<a.get("signet").forward&&0>c.state.forward?(a.prev(f),a.recordSignet(1,f,-1)):(a.next(f),a.recordSignet(1,f)):(0<a.get("signet").forward&&0>c.state.forward?a.prev():0>a.get("signet").forward&&0<c.state.forward?a.next(f,function(){a.callDestory();a.slide.remove(a.slide.length-2)}):a.prev(function(){a.recallPosition()}),a.recordSignet(-1,f,c.state.forward)))})},
recordSignet:function(a,c,e){d.isUndefined(a)&&(a=0,c=d.getHash().viewpath,e=1);d.isUndefined(c)&&(c=d.getHash().viewpath,e=1);d.isUndefined(e)&&(e=1);var g=this.get("signet").level,h=this.formatUrlTail(c,d.getHash()),a={level:g+a,viewpath:c,hisurl:h,forward:e,lastviewpath:this.get("signet").viewpath,scrollTop:d.DOM.scrollTop()};this.set("signet",a);return a},destory:function(){},_go:function(a,c,e){if(!1===this.callTeardown(this.get("signet").viewpath))return this.rollback(),this;d.isUndefined(c)&&
(c="next",e=function(){});d.isFunction(c)&&(e=c,c="next");d.isUndefined(e)&&(e=function(){});this.loadData(a,c,e)},postback:function(a){this.__post=a.data;d.isString(a.path)?this.back(a.path,a.data,a.callback):this.back(a.data,a.callback)},postforward:function(a){this.__post=a.data;d.isString(a.path)?this.forward(a.path,a.data,a.callback):this.forward(a.data,a.callback)},back:function(a,f,e){d.isUndefined(a)&&(a=void 0,f={},e=function(){});d.isUndefined(f)&&(f={},e=function(){});d.isFunction(f)&&
(e=f,f={});d.isObject(a)&&(f=a,e=function(){},a=void 0);d.isObject(f)&&d.isUndefined(e)&&(e=function(){});d.isString(f)&&(f=d.unparam(f));d.isString(a)&&(a=encodeURIComponent(a));this.set("param",d.merge(f,{from:this.get("signet").viewpath}));d.isString(a)?(this.prev.apply(this,[a,f,e]),a=this.recordSignet(1,a,-1),c.pushState(a,"",d.setHash(a.hisurl,f))):c.back();this.set("viewpath",d.getHash().viewpath);return this},forward:function(a,f,e){d.isUndefined(f)&&(f={},e=function(){});d.isFunction(f)&&
(e=f,f={});d.isObject(f)&&d.isUndefined(e)&&(e=function(){});d.isString(f)&&(f=d.unparam(f));this.set("param",d.merge(f,{from:this.get("signet").viewpath}));a=encodeURIComponent(a);this.next.apply(this,[a,f,e]);a=this.recordSignet(1,a);c.pushState(a,"",d.setHash(a.hisurl,f));this.set("viewpath",d.getHash().viewpath);return this},_androidHistoryMan:function(a,c){var e=this;d.isUndefined(c)&&(c=e.get("viewpath"));if(a||!(c in e.MS.AndroidHis))e.next(c),e.recordSignet(1,c);else{e.prev(c,function(){e.recallPosition()});
e.recordSignet(1,c,-1);for(var g in e.MS.AndroidHis)1==e.MS.AndroidHis[g]&&delete e.MS.AndroidHis[g]}for(var h in e.MS.AndroidHis)e.MS.AndroidHis[h]=null;e.MS.AndroidHis[c]=1},next:function(a,c){var e=this;d.isFunction(a)&&(c=a,a=void 0);d.isUndefined(c)&&(c=function(){});if(d.isUndefined(a)){if(!1===e.callTeardown(e.get("signet").viewpath))return e.rollback(),this;e.slide.removeHeightTimmer();e.get("animWrapperAutoHeightSetting")&&window.scrollTo(0,0);e.slide.next(function(){e.get("containerHeighTimmer")&&
e.slide.addHeightTimmer();d.isFunction(c)&&c.call(e.slide,e.slide);e.get("forceReload")&&e.slide.remove(e.slide.length-2);setTimeout(function(){e.callReady()},0)});e.set("page",e.slide.getCurrentPannel());setTimeout(function(){e.callStartup()},0)}else e._go(a,"next",c)},prev:function(a,c){var e=this;d.isFunction(a)&&(c=a,a=void 0);d.isUndefined(c)&&(c=function(){});!d.isString(a)&&e.get("forceReload")&&(a=e.get("viewpath"));if(d.isUndefined(a)){if(!1===e.callTeardown(e.get("signet").viewpath))return e.rollback(),
this;e.slide.removeHeightTimmer();e.slide.previous(function(){e.get("containerHeighTimmer")&&e.slide.addHeightTimmer();e.callDestory();this.removeLast();d.isFunction(c)&&c.call(e.slide,e.slide);setTimeout(function(){e.callReady()},0)});e.set("page",e.slide.getCurrentPannel());setTimeout(function(){e.callStartup()},0)}else e._go(a,"prev",c)},getAjaxPath:function(a){return this.get("basepath")+a},loadData:function(a,c,e){var g=this;d.isUndefined(c)&&(c="next",e=function(){});d.isFunction(c)&&(e=c,c=
"next");d.isUndefined(e)&&(e=function(){});var h=function(a){g.closeLoading();var b=g.get("page"),h=d.Node('<div class="MS-pal">'+a+"</div>");g.set("page",h);switch(c){case "prev":g.slide.add(h,g.slide.currentTab);g.slide.relocateCurrentTab(g.slide.currentTab+1);g.MS.cleanup();d.execScript(a);setTimeout(function(){g.initPageStorage();g.callStartup()},0);setTimeout(function(){g.slide.removeHeightTimmer();g.slide.previous(function(){g.get("containerHeighTimmer")&&g.slide.addHeightTimmer();g.callDestory();
d.isFunction(e)&&e.call(g.slide,g.slide);setTimeout(function(){g.callReady()},0);this.removeLast()})},150);break;case "next":g._fixScrollTopBefore(h,b);g.slide.add(h);g.MS.cleanup();d.execScript(a);setTimeout(function(){g.initPageStorage();g.callStartup()},0);setTimeout(function(){g.slide.removeHeightTimmer();g.get("animWrapperAutoHeightSetting")&&window.scrollTo(0,0);g.slide.next(function(){g.callDestory();d.isFunction(e)&&e.call(g.slide,g.slide);g.get("forceReload")&&g.slide.remove(g.slide.length-
2);setTimeout(function(){g.callReady()},0);g._fixScrollTopAfter(h,b)})},150);break;case "none":g.slide.add(h,g.slide.currentTab);g.callDestory();g.MS.cleanup();d.execScript(a);setTimeout(function(){g.initPageStorage();g.callStartup()},0);e.call(g.slide,g.slide);setTimeout(function(){g.callReady()},0);g.slide.removeLast()}},i=function(c){c=c.replace(/\r/mig,"$123").replace(/\n/g,"$456").replace(/.*<\!--kdk{{--\>/i,"").replace(/<\!--kdk}}--\>.*$/i,"");c=c.replace(/\$123/g,"\r").replace(/\$456/g,"\n");
g.MS.PAGECACHE[a]=c;h(c)},j=g.getAjaxPath(decodeURIComponent(a));g.loading();g.__post?(d.io.post(j,g.__post,i),delete g.__post):g.get("pageCache")&&!d.isUndefined(g.MS.PAGECACHE[a])?h(g.MS.PAGECACHE[a]):d.io.get(j,i)},_fixScrollTopBefore:function(a){if(!this.get("animWrapperAutoHeightSetting")){var c=d.DOM.scrollTop();a.css({"margin-top":c+"px"})}},_fixScrollTopAfter:function(a){var c=this;if(!c.get("animWrapperAutoHeightSetting")){var e=a.parent(),g=function(){a.css({position:"absolute",top:0}).css({"margin-top":0,
position:"relative","-webkit-backface-visibility":!1,left:0}).appendTo(e);c.get("containerHeighTimmer")&&c.slide.addHeightTimmer()};a.appendTo("body").css({"margin-top":0,position:"fixed",top:0,"-webkit-backface-visibility":!1,left:c.slide.con.offset().left+"px"});d.UA.opera&&0<d.UA.opera?(window.scrollTo(0,0),g()):d.Anim(window,{scrollTop:0},0.1,"easeNone",function(){g()}).run()}}});return a},{requires:["./slide","base","ajax"]});
KISSY.add("mobile/app/1.0/kissy2yui",function(d){d.augment(d.Node,{_delegate:function(){d.isFunction(arguments[1])?this.delegate(arguments[0],arguments[2],arguments[1]):this.delegate.apply(this,arguments);return this},indexOf:function(h){if(d.isUndefined(h))return null;h[0]&&(h=h[0]);var a=0;this.each(function(c,b){c[0]===h&&(a=b)});return a},size:function(){return this.length},set:function(d,a){"innerHTML"===d?this.html(a):this.attr(d,a);return this},get:function(d){var a=this,c={innerHTML:function(){return a.html()},
region:function(){return{height:a.height(),width:a.width()}}};if(d in c)return c[d]()},appendChild:function(){this.append.apply(this,arguments);return this},setStyle:function(d,a){this.css.apply(this,arguments);return this},setStyles:function(d){this.css.apply(this,arguments);return this},cloneNode:function(){return this.clone.apply(this,arguments)}});d.Node.create=function(h){return d.Node(h)}},{requires:["node","event"]});
KISSY.add("mobile/app/1.0/slide",function(d){var h=function(){if(!(this instanceof h))throw Error('please use "new Slide()"');this.init.apply(this,arguments)};h.plug=function(){};d.augment(h,d.Event.Target,{init:function(a,c){if(d.isObject(a))this.con=a;else if(/^#/i.test(a))this.con=d.one(a);else if(d.one("#"+a))this.con=d.one("#"+a);else if(d.one(a))this.con=d.one(a);else throw Error("Slide Container Hooker not found");this.buildParam(c);this.buildHTML();this.bindEvent();this.fire("ready",{index:0,
navnode:this.tabs.item(0),pannelnode:this.pannels.item(0)});if(this.reverse){var b;b=this.previous;this.previous=this.next;this.next=b}if(this.carousel)for(b=0;b<this.colspan;b++)this.fix_for_transition_when_carousel(2*b);this.fixSlideSize();this.layerSlide&&this.initLayer();return this},setWrapperSize:function(a){var c=this;d.isUndefined(a)&&(a=0);c.pannels=c.con.all("."+c.contentClass+" div."+c.pannelClass);c.length=c.pannels.length;({none:function(){},vSlide:function(){var b=c.animcon.get("region");
c.animwrap.setStyles({height:(c.length+a)*b.height/c.colspan+"px"})},hSlide:function(){var b=c.animcon.get("region");c.animwrap.setStyles({width:(c.length+a)*b.width/c.colspan+"px"})},fade:function(){}})[c.effect]();d.isUndefined(a)||c.relocateCurrentTab();return this},add:function(a,c){var b=this;if(d.isUndefined(c)||c>b.length)c=b.length;d.isString(a)&&(a=d.one(a));b.transitions&&a.css({visibility:"hidden"});c==b.length?(setTimeout(function(){b.setWrapperSize(1)},0),a.insertAfter(b.pannels[c-1])):
a.insertBefore(b.pannels[c]);b.setWrapperSize();b.fixSlideSize(b.currentTab);b.transitions&&a.css({visibility:""});return this},remove:function(a){if(1!==this.length)return a<=this.currentTab&&(this.currentTab--,this.length--),this.transitions&&this.con.css({display:"none"}),d.one(this.pannels[a]).remove(),this.setWrapperSize(),this.transitions&&this.con.css({display:"block"}),this.fixSlideSize(this.currentTab),this},removeLast:function(){this.remove(this.length-1);return this},renderLazyData:function(a){a.setStyle("display",
"none");if("1"!=a.attr("lazy-data")){a.attr("lazy-data","1");d.stamp(b);var c=a.get("innerHTML").replace(/&lt;/ig,"<").replace(/&gt;/ig,">"),b=d.Node.create("<div>"+c+"</div>");d.DOM.insertBefore(b,a);d.execScript(c)}},buildWrap:function(){this.animwrap=d.Node.create('<div style="position:absolute;"></div>');this.animwrap.set("innerHTML",this.animcon.get("innerHTML"));this.animcon.set("innerHTML","");this.animcon.appendChild(this.animwrap);this.pannels=this.con.all("."+this.contentClass+" div."+this.pannelClass);
return this},doEffectInit:function(){var a=this;({none:function(){a.pannels=a.con.all("."+a.contentClass+" div."+a.pannelClass);a.pannels.setStyles({display:"none"});a.pannels.item(a.defaultTab).setStyles({display:"block"})},vSlide:function(){a.buildWrap();var c=a.animcon.get("region");a.pannels.setStyles({"float":"none",overflow:"hidden"});a.animwrap.setStyles({height:a.length*c.height/a.colspan+"px",overflow:"hidden",top:-1*a.defaultTab*c.height+"px"})},hSlide:function(){a.buildWrap();var c=a.animcon.get("region");
a.pannels.setStyles({"float":"left",overflow:"hidden"});a.animwrap.setStyles({width:a.length*c.width/a.colspan+"px",overflow:"hidden",left:-1*a.defaultTab*c.width+"px"})},fade:function(){a.pannels=a.con.all("."+a.contentClass+" div."+a.pannelClass);a.pannels.setStyles({position:"absolute",zIndex:0});a.pannels.each(function(c,b){b==a.defaultTab?c.setStyles({opacity:1,display:"block"}):c.setStyles({opacity:0,diaplay:"none"})})}})[a.effect]();return this},buildHTML:function(){var a=this.con;this.tabs=
a.all("."+this.navClass+" "+this.triggerSelector);this.length=a.all("."+this.contentClass+" ."+this.pannelClass).size();a.one("."+this.navClass)||d.Node('<ul class="'+this.navClass+'" style="display:none"></ul>').appendTo(this.con);if(0===this.tabs.size()){for(var c=a.all("."+this.navClass),b="",f=0;f<this.length;f++){var e="";0===f&&(e=this.selectedClass);b+='<li class="'+e+'"><a href="javascript:void(0);">'+(f+1)+"</a></li>"}c.set("innerHTML",b)}this.tabs=a.all("."+this.navClass+" "+this.triggerSelector);
this.animcon=a.one("."+this.contentClass);this.animwrap=null;this.doEffectInit();this.fixSlideSize(this.currentTab);this.hightlightNav(this.getWrappedIndex(this.currentTab));!0===this.autoSlide&&this.play();return this},getCurrentPannel:function(){return d.one(this.pannels[this.currentTab])},renderWidth:function(){var a=this.animcon.get("region").width;"hSlide"==this.effect&&(a/=this.colspan);this.pannels.setStyles({width:a+"px"});return this},renderHeight:function(){var a=this.animcon.get("region").height;
"vSlide"==this.effect&&(a/=this.colspan);this.pannels.setStyles({height:a+"px"});return this},relocateCurrentTab:function(a){d.isUndefined(a)&&(a=this.currentTab);if("hSlide"==this.effect)return this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+-1*a*this.animcon.get("region").width+"px,0,0)","-webkit-backface-visibility":"hidden"}):this.animwrap.setStyles({left:-1*a*this.animcon.get("region").width}),this.currentTab=a,this},fixSlideSize:function(a){this.adaptive_fixed_width&&
this.renderWidth();this.adaptive_fixed_height&&this.renderHeight();this.adaptive_fixed_size&&this.renderHeight().renderWidth();this.resetSlideSize(a);return this},removeHeightTimmer:function(){d.isNull(this.heightTimmer)||(clearInterval(this.heightTimmer),this.heightTimmer=null)},addHeightTimmer:function(){var a=this;d.isNull(a.heightTimmer)||(clearInterval(a.heightTimmer),a.heightTimmer=null);var c=function(){a.effect=="hSlide"&&a.animcon.setStyles({height:a.pannels.item(a.currentTab).get("region").height+
"px"})};a.heightTimmer=setInterval(c,100);c()},resetSlideSize:function(a){var c,b;if("undefined"==typeof a||null===a)a=this.currentTab;if(!("hSlide"!=this.effect&&"vSlide"!=this.effect))return"hSlide"==this.effect&&(c=this.adaptive_width?this.adaptive_width():this.animcon.get("region").width,b=this.pannels.item(a).get("region").height,c/=this.colspan,this.pannels.setStyles({width:c+"px",display:"block"}),this.animcon.setStyles({width:c*this.colspan+"px",overflow:"hidden"}),this.animWrapperAutoHeightSetting&&
this.animcon.setStyles({height:b+"px"})),"vSlide"==this.effect&&(c=this.pannels.item(a).get("region").width,b=this.adaptive_height?this.adaptive_height():this.animcon.get("region").height,b/=this.colspan,this.pannels.setStyles({height:b*this.colspan+"px",display:"block"}),this.animcon.setStyles({height:b*this.colspan+"px",overflow:"hidden"}),this.animWrapperAutoHeightSetting&&this.animcon.setStyles({width:c+"px"})),this},getWrappedIndex:function(a){var c=0;return c=this.carousel?a<this.colspan?this.length-
3*this.colspan+a:a>=this.length-this.colspan?a-(this.length-this.colspan):a-this.colspan:a},bindEvent:function(){var a=this;d.inArray(a.eventType,["click","mouseover","mouseenter"])&&a.con._delegate(a.eventType,function(c){c.halt();c=Number(a.tabs.indexOf(c.currentTarget));a.carousel&&(c=(c+1)%a.length);a.go(c);a.autoSlide&&a.stop().play()},"."+a.navClass+" "+a.triggerSelector);a.hoverStop&&(a.con._delegate("mouseover",function(){a.autoSlide&&a.stop()},"."+a.contentClass+" div."+a.pannelClass),a.con._delegate("mouseout",
function(){a.autoSlide&&a.play()},"."+a.contentClass+" div."+a.pannelClass));d.Event.on(window,"resize",function(){a.fixSlideSize(a.currentTab);a.relocateCurrentTab()});a.on("beforeSwitch",function(){if(this.layerSlide&&this.isAming())return false});if("ontouchstart"in document.documentElement){if(!a.touchmove)return this;a.con._delegate("touchstart",function(c){a.stop();a.touching=true;a.is_last()&&a.carousel&&a.fix_next_carousel();a.is_first()&&a.carousel&&a.fix_pre_carousel();a.startX=c.changedTouches[0].clientX;
a.startY=c.changedTouches[0].clientY;a.animwrap.setStyles({"-webkit-transition-duration":"0s"});a.startT=Number(new Date)},"."+a.contentClass);a.con._delegate("touchend",function(c){a.touching=false;var b=c.changedTouches[0].clientX,c=Number(a.animcon.get("region").width);a.deltaX=Math.abs(b-a.startX);var d=Math.abs(b)<Math.abs(a.startX),b=!d,b=a.carousel?false:a.is_last()&&d||a.is_first()&&b,e=function(){a.animwrap.setStyles({"-webkit-transition-duration":Number(a.speed)/2+"s","-webkit-transform":"translate3d("+
-1*a.currentTab*a.animcon.get("region").width/a.colspan+"px,0,0)"})},g=function(){var b=a.animcon.get("region").width/a.colspan,b=parseInt((a.deltaX-b/2)/b,10);if(d){if(b>=1&&a.length>2){a.currentTab=a.currentTab+b;if(a.currentTab>=a.length-1)a.currentTab=a.length-2}a.next()}else{if(b>=1&&a.length>2)a.currentTab=a.currentTab-b<=0?1:a.currentTab+-1*b;a.previous()}};if(a.touchmove&&a.deltaX<30)e();else{!b&&(a.touchmove&&a.deltaX>c/3||!a.touchmove&&a.carousel||!a.carousel&&a.touchmove&&a.effect=="hSlide"||
!a.touchmove&&!a.carousel||Number(new Date)-a.startT<550)?g():e();a.autoSlide&&a.play()}},"."+a.contentClass);a.touchmove&&(a.con._delegate("touchmove",function(c){if(!(c.touches.length>1)){a.deltaX=c.touches[0].clientX-a.startX;var b=a.is_last()&&a.deltaX<0||a.is_first()&&a.deltaX>0;if(!a.carousel&&a.effect=="hSlide"&&b)a.deltaX=a.deltaX/3;a.isScrolling=Math.abs(a.deltaX)<Math.abs(c.touches[0].clientY-a.startY)?true:false;if(!a.isScrolling){c.halt();a.stop();c=Number(a.animcon.get("region").width/
a.colspan);a.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+(a.deltaX-a.currentTab*c)+"px,0,0)"})}}},"."+a.contentClass),a.animwrap.on("webkitTransitionEnd",function(){}))}return this},initLayer:function(){var a=this;if(!("ontouchstart"in document.documentElement||0<d.UA.ie&&9>d.UA.ie)){var c="durationin,easingin,durationout,easingout,delayin,delayout,slideindirection,slideoutdirection,offsetin,offsetout,alpha,easeInStrong,easeOutStrong,easeBothStrong,easeNone,easeIn,easeOut,easeBoth,elasticIn,elasticOut,elasticBoth,backIn,backOut,backBoth,bounceIn,bounceOut,bounceBoth,left,top,right,bottom".split(","),
b={durationin:1E3,easingin:"easeIn",durationout:1E3,easingout:"easeOut",delayin:300,delayout:300,slideindirection:"right",slideoutdirection:"left",alpha:!0,offsetin:50,offsetout:50},f=function(a){var f=this,h=a.attr("rel").replace(/"'/ig,"").replace(RegExp("("+c.join("|")+")","ig"),'"$1"'),i=d.JSON.parse("{"+h+"}");d.each(b,function(a,b){var c=i[b];f[b]=void 0===c||null===c?a:c});this.el=a;this.left=Number(a.css("left").replace("px",""));this.top=Number(a.css("top").replace("px",""));this.animIn=
function(){var a=this,b=a.offsetin,c=a.slideindirection;({left:function(){a.el.css({left:a.left-b})},top:function(){a.el.css({top:a.top-b})},right:function(){a.el.css({left:a.left+b})},bottom:function(){a.el.css({top:a.top+b})}})[c]();setTimeout(function(){var b={};d.mix(b,{left:{left:a.left},top:{top:a.top},bottom:{top:a.top},right:{left:a.left}}[c]);a.alpha&&d.mix(b,{opacity:1});d.Anim(a.el,b,a.durationin/1E3,a.easingin,function(){}).run()},a.delayin);a.alpha&&a.el.css({opacity:0})};this.animOut=
function(){}};a.sublayers=[];a.pannels.each(function(b,c){("vSlide"==a.effect||"hSlide"==a.effect)&&b.css({position:"relative"});0===b.all('[alt="sublayer"]').length?a.sublayers[c]=[]:(void 0===a.sublayers[c]&&(a.sublayers[c]=[]),b.all('[alt="sublayer"]').each(function(b){a.sublayers[c].push(new f(b))}))});a.on("beforeSwitch",function(b){if(b.index===a.currentTab)return!1;a.subLayerRunin(b.index)});a.on("beforeTailSwitch",function(b){a.subLayerRunout(b.index)})}},subLayerRunin:function(a){d.each(this.sublayers[a],
function(a){a.animIn()})},subLayerRunout:function(a){d.each(this.sublayers[a],function(a){a.animOut()})},buildParam:function(a){var c=this;if(void 0===a||null===a)a={};d.each({autoSlide:!1,speed:500,timeout:3E3,effect:"none",eventType:"click",easing:"easeBoth",hoverStop:!0,selectedClass:"selected",conClass:"t-slide",navClass:"tab-nav",triggerSelector:"li",contentClass:"tab-content",pannelClass:"tab-pannel",carousel:!1,reverse:!1,touchmove:!1,adaptive_fixed_width:!1,adaptive_fixed_height:!1,adaptive_fixed_size:!1,
adaptive_width:!1,adaptive_height:!1,defaultTab:0,layerSlide:!1,layerClass:"tab-animlayer",colspan:1,animWrapperAutoHeightSetting:!0,webkitOptimize:!0},function(b,d){var e=a[d];c[d]=void 0===e||null===e?b:e});d.mix(c,{tabs:[],animcon:null,pannels:[],timmer:null,touching:!1});c.speed/=1E3;0!==c.defaultTab&&(c.defaultTab=Number(c.defaultTab)-1);c.carousel&&(c.defaultTab=c.colspan,c.effect="hSlide");c.currentTab=c.defaultTab;c.transitions="webkitTransition"in document.body.style&&c.webkitOptimize;return c},
fix_for_transition_when_carousel:function(a){"undefined"==typeof a&&(a=0);var c=this.con;this.animcon=this.con.one("."+this.contentClass);this.animwrap=this.animcon.one("div");this.pannels=c.all("."+this.contentClass+" div."+this.pannelClass);if("hSlide"==this.effect){var b=Number(this.animcon.get("region").width/this.colspan);this.animcon.get("region");this.animwrap.setStyle("width",this.pannels.size()*b+2*b);var d=this.pannels.item(a).cloneNode(!0),e=this.pannels.item(this.pannels.size()-1-a).cloneNode(!0);
this.animwrap.append(d);this.animwrap.prepend(e);this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+-1*b*(a/2+1)+"px,0,0)","-webkit-backface-visibility":"hidden",left:"0"}):this.animwrap.setStyle("left",-1*b*(a/2+1))}this.pannels=c.all("."+this.contentClass+" div."+this.pannelClass);this.length=this.pannels.size();return this},isAming:function(){return this.anim?this.anim.isRunning():!1},previous:function(a){try{if(this.isAming()&&this.carousel)return this}catch(c){}var b=
this.currentTab+this.length-1-(this.colspan-1);b>=this.length-this.colspan+1&&(b%=this.length-this.colspan+1);if(this.carousel&&this.is_first())return this.fix_pre_carousel(),this.previous.call(this),this;this.go(b,a);return this},is_last:function(){return this.currentTab==this.length-(this.colspan-1)-1?!0:!1},is_first:function(){return 0===this.currentTab?!0:!1},next:function(a){try{if(this.isAming()&&this.carousel)return this}catch(c){}var b=this.currentTab+1;b>=this.length-this.colspan+1&&(b%=
this.length-this.colspan+1);if(this.carousel&&this.is_last())return this.fix_next_carousel(),this.next.call(this),this;this.go(b,a);return this},fix_next_carousel:function(){this.currentTab=this.colspan;var a=this.con;"none"!=this.effect&&(this.pannels=a.all("."+this.contentClass+" div."+this.pannelClass));a="-"+Number(this.animcon.get("region").width).toString()+"px";"hSlide"==this.effect&&(this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+
a+",0,0)"}):this.animwrap.setStyle("left",a))},fix_pre_carousel:function(){this.currentTab=this.length-1-2*this.colspan+1;var a=this.con;"none"!=this.effect&&(this.pannels=a.all("."+this.contentClass+" div."+this.pannelClass));a="-"+(Number(this.animcon.get("region").width/this.colspan)*this.currentTab).toString()+"px";"hSlide"==this.effect&&(this.transitions?this.animwrap.setStyles({"-webkit-transition-duration":"0s","-webkit-transform":"translate3d("+a+",0,0)"}):this.animwrap.setStyle("left",a))},
hightlightNav:function(a){if(this.carousel&&1<this.colspan)return this;this.tabs.item(a)&&(this.tabs.removeClass(this.selectedClass),this.tabs.item(a).addClass(this.selectedClass));return this},switch_to:function(a,c){var b=this,f=function(){d.isFunction(c)&&c.call(b,b);b.fire("afterSwitch",{index:b.currentTab,navnode:b.tabs.item(b.getWrappedIndex(b.currentTab)),pannelnode:b.pannels.item(b.currentTab)})};b.fire("beforeTailSwitch",{index:b.currentTab,navnode:b.tabs.item(b.getWrappedIndex(b.currentTab)),
pannelnode:b.pannels.item(b.currentTab)});b.hightlightNav(b.getWrappedIndex(a));b.fixSlideSize(a);b.autoSlide&&b.stop().play();a>=b.length&&(a%=b.length);if(a==b.currentTab)return this;if(b.anim)try{b.anim.stop(),b.anim=null}catch(e){}({none:function(a){b.pannels.setStyles({display:"none"});b.pannels.item(a).setStyles({display:"block"});f()},vSlide:function(a){b.transitions?(b.animwrap.setStyles({"-webkit-transition-duration":b.speed+"s","-webkit-transform":"translate3d(0,"+-1*a*b.animcon.get("region").height/
b.colspan+"px,0)","-webkit-backface-visibility":"hidden"}),b.anim=d.Anim(b.animwrap,{opacity:1},b.speed,b.easing,function(){f()})):b.anim=d.Anim(b.animwrap,{top:-1*a*b.animcon.get("region").height/b.colspan},b.speed,b.easing,function(){f()});b.anim.run()},hSlide:function(a){b.transitions?(b.animwrap.setStyles({"-webkit-transition-duration":b.speed+"s","-webkit-transform":"translate3d("+-1*a*b.animcon.get("region").width/b.colspan+"px,0,0)","-webkit-backface-visibility":"hidden"}),b.anim=d.Anim(b.animwrap,
{opacity:1},b.speed,b.easing,function(){f()})):b.anim=d.Anim(b.animwrap,{left:-1*a*b.animcon.get("region").width/b.colspan},b.speed,b.easing,function(){f()});b.anim.run()},fade:function(a){var c=b.currentTab;b.anim=d.Anim(b.pannels.item(a),{opacity:1},b.speed,b.easing,function(){b.pannels.item(c).setStyle("zIndex",0);b.pannels.item(a).setStyle("zIndex",1);b.pannels.item(c).setStyle("opacity",0);b.pannels.item(c).setStyles({display:"none"});f()});b.pannels.item(a).setStyles({display:"block"});b.pannels.item(a).setStyle("opacity",
0);b.pannels.item(c).setStyle("zIndex",1);b.pannels.item(a).setStyle("zIndex",2);b.anim.run()}})[b.effect](a);b.currentTab=a;b.fire("switch",{index:a,navnode:b.tabs.item(b.getWrappedIndex(a)),pannelnode:b.pannels.item(a)});var g=b.pannels.item(a).all(".data-lazyload");g&&g.each(function(a){b.renderLazyData(a)})},go:function(a,c){!1!==this.fire("beforeSwitch",{index:a,navnode:this.tabs.item(a),pannelnode:this.pannels.item(a)})&&(a+this.colspan>this.pannels.size()&&(a=this.pannels.size()-this.colspan),
this.switch_to(a,c));return this},play:function(){var a=this;null!==a.timer&&clearTimeout(a.timer);a.timer=setTimeout(function(){a.next().play()},Number(a.timeout));return this},stop:function(){clearTimeout(this.timer);this.timer=null;return this}});return h},{requires:["node","event","json","./util","./kissy2yui"]});
KISSY.add("mobile/app/1.0/util",function(d){d.mix(d,{setHash:function(d,a){var c,b;"object"==typeof d?(c=window.location.href,a=d):c=d;0>c.indexOf("#")&&(c+="#");var f=this.getHash(c);for(b in f)!(b in a)&&"viewpath"!==b&&delete f[b];for(b in a)f[b]=a[b];c=c.split("#")[0]+"#";for(b in f)c+=b+"="+f[b]+"&";return c=c.substr(0,c.length-1)},getHash:function(h){h=h||window.location.href;if(0>h.indexOf("#"))return{};h=h.split("#")[1];if(""===h)return{};"&"==h[h.length-1]&&(h=h.substr(0,h.length-1));h=h.replace(/"/ig,
"'");h=h.replace(/=/ig,'":"');h=h.replace(/&/ig,'","');return d.JSON.parse('{"'+(h+'"')+"}")},_globalEval:function(d){if(d&&/\S/.test(d)){var a=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],c=document.createElement("script");c.text=d;a.insertBefore(c,a.firstChild);setTimeout(function(){a.removeChild(c)},1)}},execScript:function(h){var a=RegExp(/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig),c=d.one("head").getDOMNode(),b,f,e,g,k,i=/\stype="(javascript)|(text)\/template"/i,
j=/\ssrc=(['"])(.*?)\1/i,l=/\scharset=(['"])(.*?)\1/i;for(a.lastIndex=0;b=a.exec(h);)if(e=(f=b[1])?f.match(j):!1,!f.match(i))if(e&&e[2]){b=document.createElement("script");b.src=e[2];if((g=f.match(l))&&g[2])b.charset=g[2];b.async=!0;c.appendChild(b)}else(k=b[2])&&0<k.length&&this._globalEval(k)},isDaily:function(){return/daily\.taobao\.net/.test(window.location.hostname)?!0:!1}})},{requires:["node","sizzle","json","uri"]});
