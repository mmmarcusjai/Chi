(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{!i&&a.return&&a.return()}finally{if(r)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),c=(i=l)&&i.__esModule?i:{default:i},u=n("17x9"),d=n("ar19"),h=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),p={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:h.isRequired,outEffect:(0,u.oneOfType)([h,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},f={transitionGroup:u.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,d.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?o({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,r=n.forever,s=n.count,o=n.delay,a=n.duration;if(!r){this.animationEndTimeout=window.setTimeout(function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))},o+(a+(t?a:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),r=this.isOn?this.getDimensionValue():0,s=void 0,o=void 0;if(t.collapseOnly)s=n.duration/3,o=n.delay;else{var a=i>>2,l=a>>1;s=a,o=n.delay+(this.isOn?0:i-a-l),e.style.animationDuration=i-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:r,transition:"height "+s+"ms ease "+o+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,r=void 0;e.collapseOnly?r={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),r={hasAppeared:!0,hasExited:!1,collapse:void 0,style:o({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(r,e,n):r),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=i.duration,a=i.reverse,l=n.length,u=2*s;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),s=u/2);var h=a?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":r(e))&&e?c.default.cloneElement(e,{style:o({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(a?h--:h++,0,l,s,u))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===r(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,r=i.style,s=i.className,a=i.children,l=this.props.disabled?s:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(n=this.cascade(a),u=o({},r,{opacity:1})):u=this.props.disabled?r:o({},r,this.state.style);var h=o({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:u},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,h,e?n||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:o({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),r=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return i>r-window.innerHeight&&i<n-r}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var i,r=n("q1tI");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((i=n("SevZ"))&&i.__esModule?i:{default:i}).default),d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,l(t).call(this,e))).prevProps={},n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.Component),n=t,s=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&o(n.prototype,i),s&&o(n,s),t}();t.default=d},"8oxB":function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,d=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=a(h);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var i=n("MX0m"),r=n.n(i),s=n("q1tI"),o=n.n(s),a=n("PgRs"),l=n.n(a),c=function(){return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,"Chi"),o.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),o.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossOrigin:"anonymous"})))},u=n("0iUn"),d=n("sLSF"),h=n("MI3g"),p=n("a7VT"),f=n("AT/M"),m=n("Tit0"),v=n("hfKm"),y=n.n(v);var b=function(e){function t(e){var n,i,r,s;return Object(u.default)(this,t),n=Object(h.default)(this,Object(p.default)(t).call(this,e)),i=Object(f.default)(n),s=function(){var e=+window.scrollY;return n.setState({scrollPositionY:e})},(r="handleScroll")in i?y()(i,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[r]=s,n.state={scrollPositionY:0},n}return Object(m.default)(t,e),Object(d.default)(t,[{key:"componentDidMount",value:function(){return window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){return window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=!!this.state.scrollPositionY;return o.a.createElement("nav",{className:"jsx-460423305 "+((e?"nav isScrolling chi-nav navbar fixed-top":"nav chi-nav navbar fixed-top")||"")},o.a.createElement("div",{className:"jsx-460423305 brand-logo navbar-brand text-uppercase"},o.a.createElement("img",{src:"/static/logo.png",className:"jsx-460423305"})),o.a.createElement(r.a,{id:"460423305"},[".chi-nav.jsx-460423305{background-repeat:no-repeat;background-size:100%;height:70px;background-position-y:25%;background-color:#bbbabab8;-webkit-transform:translateY(-1000px);-ms-transform:translateY(-1000px);transform:translateY(-1000px);-webkit-transition:.5s;transition:.5s;}",".chi-nav.isScrolling.jsx-460423305{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}",".chi-nav.jsx-460423305 .brand-logo.jsx-460423305{position:absolute;left:50%;}",".chi-nav.jsx-460423305 .brand-logo.jsx-460423305 img.jsx-460423305{width:25%;}"]))}}]),t}(o.a.Component),w=function(){return o.a.createElement("div",{className:"jsx-2310411941 hero-video"},o.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"my-video",className:"jsx-2310411941"},o.a.createElement("source",{src:"/static/chi_hero_video.mp4",type:"video/mp4",className:"jsx-2310411941"})),o.a.createElement(r.a,{id:"2310411941"},[".hero-video.jsx-2310411941 #my-video.jsx-2310411941{width:100%;height:100vh;object-fit:fill;z-index:-1;}"]))},g=function(){return o.a.createElement("section",{className:"jsx-108734705 intro"},o.a.createElement("div",{className:"jsx-108734705 container-fluid"},o.a.createElement("div",{className:"jsx-108734705 row"},o.a.createElement("div",{className:"jsx-108734705 col-md-12"},o.a.createElement("div",{className:"jsx-108734705 title"},o.a.createElement("img",{src:"/static/rationale_title.png",className:"jsx-108734705"})),o.a.createElement("div",{className:"jsx-108734705 content"},o.a.createElement("i",{className:"jsx-108734705"},"We want to create a disruptive nutrious brand to enhance the travel ex- pierence in airplanes. For this we will develop a series of (food) products categorised by the health benefits they offer. We tap into ancient wisdom and work with a team of the best nutrition experts.")))),o.a.createElement("div",{className:"jsx-108734705 row btn-list"},o.a.createElement("div",{className:"jsx-108734705 col-md-3 btn"},o.a.createElement("img",{src:"/static/drink_btn.png",className:"jsx-108734705"})),o.a.createElement("div",{className:"jsx-108734705 col-md-3 btn"},o.a.createElement("img",{src:"/static/snacks_btn.png",className:"jsx-108734705"})),o.a.createElement("div",{className:"jsx-108734705 col-md-3 btn"},o.a.createElement("img",{src:"/static/exp_btn.png",className:"jsx-108734705"})),o.a.createElement("div",{className:"jsx-108734705 col-md-3 btn"},o.a.createElement("img",{src:"/static/products_btn.png",className:"jsx-108734705"})))),o.a.createElement(r.a,{id:"108734705"},[".intro.jsx-108734705{height:100%;margin-top:10rem;min-height:100vh;}",".intro.jsx-108734705 .title.jsx-108734705{text-align:center;margin:2rem;}",".intro.jsx-108734705 .title.jsx-108734705 img.jsx-108734705{width:15%;}",".intro.jsx-108734705 .content.jsx-108734705{font-size:2.5vw;width:80%;margin:auto;text-align:center;}",".intro.jsx-108734705 .btn-list.jsx-108734705{margin:6rem auto;width:80%;}",".intro.jsx-108734705 .btn.jsx-108734705{text-align:center;}",".intro.jsx-108734705 .btn.jsx-108734705 img.jsx-108734705{width:80%;}"]))};function E(e){var t="left"==e.prodData.position?null:"left";return o.a.createElement("div",{className:"jsx-1492090741 product"},o.a.createElement("div",{className:"jsx-1492090741 container-fluid"},o.a.createElement("div",{className:"jsx-1492090741 content row"},o.a.createElement("div",{className:"jsx-1492090741 col-md-6"},o.a.createElement("img",{src:"/static/"+e.prodData.img,className:"jsx-1492090741"})),o.a.createElement("div",{className:"jsx-1492090741 "+"discription col-md-6 ".concat(t)},o.a.createElement("h1",{className:"jsx-1492090741"},e.prodData.title),o.a.createElement("div",{className:"jsx-1492090741"},e.prodData.disc)))),o.a.createElement(r.a,{id:"1492090741"},[".product.jsx-1492090741{padding-top:10%;}",".product.jsx-1492090741 img.jsx-1492090741{width:20%;}",".product.jsx-1492090741 .content.jsx-1492090741{text-align:center;}",".product.jsx-1492090741 .discription.jsx-1492090741{margin-top:3rem;}",".product.jsx-1492090741 .discription.left.jsx-1492090741{-webkit-order:-1;-ms-flex-order:-1;order:-1;}","@media(max-width:768px){.product.jsx-1492090741 .discription.left.jsx-1492090741{-webkit-order:1;-ms-flex-order:1;order:1;}}"]))}var _=function(e){function t(){return Object(u.default)(this,t),Object(h.default)(this,Object(p.default)(t).apply(this,arguments))}return Object(m.default)(t,e),Object(d.default)(t,[{key:"render",value:function(){var e={img:this.props.imgName,title:this.props.prodTitle,disc:this.props.prodDisc,position:this.props.style};return o.a.createElement(E,{prodData:e})}}]),t}(o.a.Component),S=n("oBNZ"),j=n.n(S),x=function(){return o.a.createElement("section",{className:"products"},o.a.createElement(j.a,{left:!0},o.a.createElement(_,{imgName:"product_4.png",prodTitle:"TITLE 4",prodDisc:"Dummy TEXT",style:"left"})),o.a.createElement(j.a,{right:!0},o.a.createElement(_,{imgName:"product_1.png",prodTitle:"TITLE 1",prodDisc:"Dummy TEXT",style:"right"})),o.a.createElement(j.a,{left:!0},o.a.createElement(_,{imgName:"product_2.png",prodTitle:"TITLE 2",prodDisc:"Dummy TEXT",style:"left"})),o.a.createElement(j.a,{right:!0},o.a.createElement(_,{imgName:"product_3.png",prodTitle:"TITLE 3",prodDisc:"Dummy TEXT",style:"right"})))};t.default=function(){return o.a.createElement("div",{className:"jsx-40512022 chi-body"},o.a.createElement(c,null),o.a.createElement(b,null),o.a.createElement(w,null),o.a.createElement(g,null),o.a.createElement(x,null),o.a.createElement(r.a,{id:"40512022"},[".chi-body.jsx-40512022{background:url('../../static/chi_pattern.png');background-size:contain;}"]))}},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("9kyW")),r=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,i=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,l=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,s;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var s=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[i]=s,this._instancesCounts[i]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var r=String(n),s=t+r;return e[s]||(e[s]="jsx-".concat((0,i.default)("".concat(t,"-").concat(r)))),e[s]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=n+i;return t[r]||(t[r]=i.replace(e,n)),t[r]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,i=e.dynamic,r=e.id;if(i){var s=this.computeId(r,i);return{styleId:s,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(s,e)}):[this.computeSelector(s,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&o(t.prototype,n),s&&o(t,s),e}();t.default=a},ar19:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function r(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",r,!0),i("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,r){var s=Math.log(i),o=(Math.log(r)-s)/(n-t);return Math.exp(s+o*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+h)+"{"+e+"}",n=p[e];return n?""+m+n:(f.insertRule(t,f.cssRules.length),p[e]=h,""+m+h++)},t.hideAll=r,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var s=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=o=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,m=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(c,1500),a||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,s=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,l=void 0===a?i:a,c=t.isBrowser,u=void 0===c?"undefined"!=typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(r(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#".concat(s,"-deleted-rule____{}"),o("boolean"==typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,a;return t=e,(s=[{key:"setOptimizeForSpeed",value:function(e){o("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return i||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){i||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `".concat(e,"` not found")),r.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-".concat(e),""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(i,n):s.appendChild(i),i}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=s}).call(this,n("8oxB"))},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),s.default.Children.count(i)<2?s.default.createElement(o.default,r({},e,{inEffect:t,outEffect:n,children:i})):(i=s.default.Children.map(i,function(i){return s.default.createElement(o.default,r({},e,{inEffect:t,outEffect:n,children:i}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,i):s.default.createElement("span",null,i))};var s=i(n("q1tI")),o=i(n("28nh"));e.exports=t.default},oBNZ:function(e,t,n){"use strict";function i(e,t){var n=t.left,i=t.right,r=t.up,s=t.down,o=t.top,a=t.bottom,l=t.big,u=t.mirror,h=t.opposite,p=(n?1:0)|(i?2:0)|(o||s?4:0)|(a||r?8:0)|(u?16:0)|(h?32:0)|(e?64:0)|(l?128:0);if(d.hasOwnProperty(p))return d[p];var f=n||i||r||s||o||a,m=void 0,v=void 0;if(f){if(!u!=!(e&&h)){var y=[i,n,a,o,s,r];n=y[0],i=y[1],o=y[2],a=y[3],r=y[4],s=y[5]}var b=l?"2000px":"100%";m=n?"-"+b:i?b:"0",v=s||o?"-"+b:r||a?b:"0"}return d[p]=(0,c.animation)((e?"to":"from")+" {"+(f?" transform: translate3d("+m+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),d[p]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,s=e.duration,o=void 0===s?c.defaults.duration:s,a=e.delay,u=void 0===a?c.defaults.delay:a,d=e.count,h=void 0===d?c.defaults.count:d,p=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),f={make:i,duration:void 0===r?o:r,delay:u,forever:n,count:h,style:{animationFillMode:"both"},reverse:p.left};return(0,l.default)(p,f,f,t)}Object.defineProperty(t,"__esModule",{value:!0});var s,o=n("17x9"),a=n("eH+L"),l=(s=a)&&s.__esModule?s:{default:s},c=n("ar19"),u={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},d={};r.propTypes=u,t.default=r,e.exports=t.default},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);