(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Y,d,tt,N,We,nt,Pe,rt,Q={},ot=[],wt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fe=Array.isArray;function S(e,t){for(var n in t)e[n]=t[n];return e}function it(e){var t=e.parentNode;t&&t.removeChild(e)}function Z(e,t,n){var r,o,i,_={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:_[i]=t[i];if(arguments.length>2&&(_.children=arguments.length>3?Y.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)_[i]===void 0&&(_[i]=e.defaultProps[i]);return z(e,_,r,o,null)}function z(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++tt,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(i),i}function he(e){return e.children}function G(e,t){this.props=e,this.context=t}function R(e,t){if(t==null)return e.__?R(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?R(e):null}function at(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return at(e)}}function $e(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!ue.__r++||We!==d.debounceRendering)&&((We=d.debounceRendering)||nt)(ue)}function ue(){var e,t,n,r,o,i,_,s,u;for(N.sort(Pe);e=N.shift();)e.__d&&(t=N.length,r=void 0,i=(o=(n=e).__v).__e,s=[],u=[],(_=n.__P)&&((r=S({},o)).__v=o.__v+1,d.vnode&&d.vnode(r),Le(_,r,o,n.__n,_.ownerSVGElement!==void 0,32&o.__u?[i]:null,s,i??R(o),!!(32&o.__u),u),r.__.__k[r.__i]=r,ct(s,r,u),r.__e!=i&&at(r)),N.length>t&&N.sort(Pe));ue.__r=0}function _t(e,t,n,r,o,i,_,s,u,c,f){var a,h,l,m,b,w=r&&r.__k||ot,g=t.length;for(n.__d=u,Pt(n,t,w),u=n.__d,a=0;a<g;a++)(l=n.__k[a])!=null&&typeof l!="boolean"&&typeof l!="function"&&(h=l.__i===-1?Q:w[l.__i]||Q,l.__i=a,Le(e,l,h,o,i,_,s,u,c,f),m=l.__e,l.ref&&h.ref!=l.ref&&(h.ref&&Se(h.ref,null,l),f.push(l.ref,l.__c||m,l)),b==null&&m!=null&&(b=m),65536&l.__u||h.__k===l.__k?u=st(l,u,e):typeof l.type=="function"&&l.__d!==void 0?u=l.__d:m&&(u=m.nextSibling),l.__d=void 0,l.__u&=-196609);n.__d=u,n.__e=b}function Pt(e,t,n){var r,o,i,_,s,u=t.length,c=n.length,f=c,a=0;for(e.__k=[],r=0;r<u;r++)(o=e.__k[r]=(o=t[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?z(null,o,null,null,o):fe(o)?z(he,{children:o},null,null,null):o.__b>0?z(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,s=$t(o,n,_=r+a,f),o.__i=s,i=null,s!==-1&&(f--,(i=n[s])&&(i.__u|=131072)),i==null||i.__v===null?(s==-1&&a--,typeof o.type!="function"&&(o.__u|=65536)):s!==_&&(s===_+1?a++:s>_?f>u-_?a+=s-_:a--:a=s<_&&s==_-1?s-_:0,s!==r+a&&(o.__u|=65536))):(i=n[r])&&i.key==null&&i.__e&&(i.__e==e.__d&&(e.__d=R(i)),ke(i,i,!1),n[r]=null,f--);if(f)for(r=0;r<c;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=R(i)),ke(i,i))}function st(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=st(r[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function xe(e,t){return t=t||[],e==null||typeof e=="boolean"||(fe(e)?e.some(function(n){xe(n,t)}):t.push(e)),t}function $t(e,t,n,r){var o=e.key,i=e.type,_=n-1,s=n+1,u=t[n];if(u===null||u&&o==u.key&&i===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;_>=0||s<t.length;){if(_>=0){if((u=t[_])&&!(131072&u.__u)&&o==u.key&&i===u.type)return _;_--}if(s<t.length){if((u=t[s])&&!(131072&u.__u)&&o==u.key&&i===u.type)return s;s++}}return-1}function Fe(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||wt.test(t)?n:n+"px"}function oe(e,t,n,r,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Fe(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Fe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,i?je:Re,i)):e.removeEventListener(t,i?je:Re,i);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Re(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(d.event?d.event(e):e)}function je(e){return this.l[e.type+!0](d.event?d.event(e):e)}function Le(e,t,n,r,o,i,_,s,u,c){var f,a,h,l,m,b,w,g,$,T,U,O,j,H,q,k=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),i=[s=t.__e=n.__e]),(f=d.__b)&&f(t);e:if(typeof k=="function")try{if(g=t.props,$=(f=k.contextType)&&r[f.__c],T=f?$?$.props.value:f.__:r,n.__c?w=(a=t.__c=n.__c).__=a.__E:("prototype"in k&&k.prototype.render?t.__c=a=new k(g,T):(t.__c=a=new G(g,T),a.constructor=k,a.render=kt),$&&$.sub(a),a.props=g,a.state||(a.state={}),a.context=T,a.__n=r,h=a.__d=!0,a.__h=[],a._sb=[]),a.__s==null&&(a.__s=a.state),k.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=S({},a.__s)),S(a.__s,k.getDerivedStateFromProps(g,a.__s))),l=a.props,m=a.state,a.__v=t,h)k.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(k.getDerivedStateFromProps==null&&g!==l&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,T),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,T)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(a.props=g,a.state=a.__s,a.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),U=0;U<a._sb.length;U++)a.__h.push(a._sb[U]);a._sb=[],a.__h.length&&_.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,T),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(l,m,b)})}if(a.context=T,a.props=g,a.__P=e,a.__e=!1,O=d.__r,j=0,"prototype"in k&&k.prototype.render){for(a.state=a.__s,a.__d=!1,O&&O(t),f=a.render(a.props,a.state,a.context),H=0;H<a._sb.length;H++)a.__h.push(a._sb[H]);a._sb=[]}else do a.__d=!1,O&&O(t),f=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++j<25);a.state=a.__s,a.getChildContext!=null&&(r=S(S({},r),a.getChildContext())),h||a.getSnapshotBeforeUpdate==null||(b=a.getSnapshotBeforeUpdate(l,m)),_t(e,fe(q=f!=null&&f.type===he&&f.key==null?f.props.children:f)?q:[q],t,n,r,o,i,_,s,u,c),a.base=t.__e,t.__u&=-161,a.__h.length&&_.push(a),w&&(a.__E=a.__=null)}catch(M){t.__v=null,u||i!=null?(t.__e=s,t.__u|=u?160:32,i[i.indexOf(s)]=null):(t.__e=n.__e,t.__k=n.__k),d.__e(M,t,n)}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=xt(n.__e,t,n,r,o,i,_,u,c);(f=d.diffed)&&f(t)}function ct(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Se(n[r],n[++r],n[++r]);d.__c&&d.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){d.__e(i,o.__v)}})}function xt(e,t,n,r,o,i,_,s,u){var c,f,a,h,l,m,b,w=n.props,g=t.props,$=t.type;if($==="svg"&&(o=!0),i!=null){for(c=0;c<i.length;c++)if((l=i[c])&&"setAttribute"in l==!!$&&($?l.localName===$:l.nodeType===3)){e=l,i[c]=null;break}}if(e==null){if($===null)return document.createTextNode(g);e=o?document.createElementNS("http://www.w3.org/2000/svg",$):document.createElement($,g.is&&g),i=null,s=!1}if($===null)w===g||s&&e.data===g||(e.data=g);else{if(i=i&&Y.call(e.childNodes),w=n.props||Q,!s&&i!=null)for(w={},c=0;c<e.attributes.length;c++)w[(l=e.attributes[c]).name]=l.value;for(c in w)l=w[c],c=="children"||(c=="dangerouslySetInnerHTML"?a=l:c==="key"||c in g||oe(e,c,null,l,o));for(c in g)l=g[c],c=="children"?h=l:c=="dangerouslySetInnerHTML"?f=l:c=="value"?m=l:c=="checked"?b=l:c==="key"||s&&typeof l!="function"||w[c]===l||oe(e,c,l,w[c],o);if(f)s||a&&(f.__html===a.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(a&&(e.innerHTML=""),_t(e,fe(h)?h:[h],t,n,r,o&&$!=="foreignObject",i,_,i?i[0]:n.__k&&R(n,0),s,u),i!=null)for(c=i.length;c--;)i[c]!=null&&it(i[c]);s||(c="value",m!==void 0&&(m!==e[c]||$==="progress"&&!m||$==="option"&&m!==w[c])&&oe(e,c,m,w[c],!1),c="checked",b!==void 0&&b!==e[c]&&oe(e,c,b,w[c],!1))}return e}function Se(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){d.__e(r,n)}}function ke(e,t,n){var r,o;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Se(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){d.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&ke(r[o],t,n||typeof e.type!="function");n||e.__e==null||it(e.__e),e.__=e.__e=e.__d=void 0}function kt(e,t,n){return this.constructor(e,n)}function Ct(e,t,n){var r,o,i,_;d.__&&d.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],_=[],Le(t,e=(!r&&n||t).__k=Z(he,null,[e]),o||Q,Q,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Y.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r,_),ct(i,e,_)}function At(e,t,n){var r,o,i,_,s=S({},e.props);for(i in e.type&&e.type.defaultProps&&(_=e.type.defaultProps),t)i=="key"?r=t[i]:i=="ref"?o=t[i]:s[i]=t[i]===void 0&&_!==void 0?_[i]:t[i];return arguments.length>2&&(s.children=arguments.length>3?Y.call(arguments,2):n),z(e.type,s,r||e.key,o||e.ref,null)}function Ht(e,t){var n={__c:t="__cC"+rt++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(_){this.props.value!==_.value&&o.some(function(s){s.__e=!0,$e(s)})},this.sub=function(_){o.push(_);var s=_.componentWillUnmount;_.componentWillUnmount=function(){o.splice(o.indexOf(_),1),s&&s.call(_)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Y=ot.slice,d={__e:function(e,t,n,r){for(var o,i,_;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),_=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),_=o.__d),_)return o.__E=o}catch(s){e=s}throw e}},tt=0,G.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},n),this.props)),e&&S(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),$e(this))},G.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),$e(this))},G.prototype.render=he,N=[],nt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Pe=function(e,t){return e.__v.__b-t.__v.__b},ue.__r=0,rt=0;var X,y,ve,qe,Ce=0,ut=[],_e=[],Be=d.__b,Ve=d.__r,Ke=d.diffed,ze=d.__c,Ge=d.unmount;function Oe(e,t){d.__h&&d.__h(y,e,Ce||t),Ce=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:_e}),n.__[e]}function F(e){return Ce=1,Et(lt,e)}function Et(e,t,n){var r=Oe(X++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):lt(void 0,t),function(s){var u=r.__N?r.__N[0]:r.__[0],c=r.t(u,s);u!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var o=function(s,u,c){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(h){return h.__c});if(f.every(function(h){return!h.__N}))return!i||i.call(this,s,u,c);var a=!1;return f.forEach(function(h){if(h.__N){var l=h.__[0];h.__=h.__N,h.__N=void 0,l!==h.__[0]&&(a=!0)}}),!(!a&&r.__c.props===s)&&(!i||i.call(this,s,u,c))};y.u=!0;var i=y.shouldComponentUpdate,_=y.componentWillUpdate;y.componentWillUpdate=function(s,u,c){if(this.__e){var f=i;i=void 0,o(s,u,c),i=f}_&&_.call(this,s,u,c)},y.shouldComponentUpdate=o}return r.__N||r.__}function Ue(e,t){var n=Oe(X++,3);!d.__s&&Ot(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function Tt(e){var t=y.context[e.__c],n=Oe(X++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(y)),t.props.value):e.__}function Lt(){for(var e;e=ut.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(se),e.__H.__h.forEach(Ae),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){y=null,Be&&Be(e)},d.__r=function(e){Ve&&Ve(e),X=0;var t=(y=e.__c).__H;t&&(ve===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=_e,n.__N=n.i=void 0})):(t.__h.forEach(se),t.__h.forEach(Ae),t.__h=[],X=0)),ve=y},d.diffed=function(e){Ke&&Ke(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ut.push(t)!==1&&qe===d.requestAnimationFrame||((qe=d.requestAnimationFrame)||St)(Lt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==_e&&(n.__=n.__V),n.i=void 0,n.__V=_e})),ve=y=null},d.__c=function(e,t){t.some(function(n){try{n.__h.forEach(se),n.__h=n.__h.filter(function(r){return!r.__||Ae(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],d.__e(r,n.__v)}}),ze&&ze(e,t)},d.unmount=function(e){Ge&&Ge(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{se(r)}catch(o){t=o}}),n.__H=void 0,t&&d.__e(t,n.__v))};var Je=typeof requestAnimationFrame=="function";function St(e){var t,n=function(){clearTimeout(r),Je&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Je&&(t=requestAnimationFrame(n))}function se(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function Ae(e){var t=y;e.__c=e.__(),y=t}function Ot(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function lt(e,t){return typeof t=="function"?t(e):t}var Ut={};function K(e,t){for(var n in t)e[n]=t[n];return e}function He(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),_={};if(i&&i[1])for(var s=i[1].split("&"),u=0;u<s.length;u++){var c=s[u].split("=");_[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=Ee(e.replace(o,"")),t=Ee(t||"");for(var f=Math.max(e.length,t.length),a=0;a<f;a++)if(t[a]&&t[a].charAt(0)===":"){var h=t[a].replace(/(^:|[+*?]+$)/g,""),l=(t[a].match(/[+*?]+$/)||Ut)[0]||"",m=~l.indexOf("+"),b=~l.indexOf("*"),w=e[a]||"";if(!w&&!b&&(l.indexOf("?")<0||m)){r=!1;break}if(_[h]=decodeURIComponent(w),m||b){_[h]=e.slice(a).map(decodeURIComponent).join("/");break}}else if(t[a]!==e[a]){r=!1;break}return(n.default===!0||r!==!1)&&_}function It(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Nt(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:Ee(n.props.path).map(Dt).join("")}(e),e.props}function Ee(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Dt(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Mt={},D=[],J=[],A=null,Ie={url:Ne()},ft=Ht(Ie);function Wt(){var e=Tt(ft);if(e===Ie){var t=F()[1];Ue(function(){return J.push(t),function(){return J.splice(J.indexOf(t),1)}},[])}return[e,De]}function Ne(){var e;return""+((e=A&&A.location?A.location:A&&A.getCurrentLocation?A.getCurrentLocation():typeof location<"u"?location:Mt).pathname||"")+(e.search||"")}function De(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=D.length;r--;)if(D[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),A&&A[r]?A[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),ht(e)}function ht(e){for(var t=!1,n=0;n<D.length;n++)D[n].routeTo(e)&&(t=!0);return t}function Ft(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return De(t)}}function Rt(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function pt(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Ft(t))return Rt(e)}while(t=t.parentNode)}}var Qe=!1;function dt(e){e.history&&(A=e.history),this.state={url:e.url||Ne()}}K(dt.prototype=new G,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=xe(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;Qe||(Qe=!0,A||addEventListener("popstate",function(){ht(Ne())}),addEventListener("click",pt)),D.push(this),A&&(this.u=A.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),D.splice(D.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Nt).sort(It);for(var n=0;n<e.length;n++){var r=e[n],o=He(t,r.props.path,r.props);if(o)return[r,o]}},render:function(e,t){var n,r,o=e.onChange,i=t.url,_=this.c,s=this.g(xe(e.children),i);if(s&&(r=At(s[0],K(K({url:i,matches:n=s[1]},n),{key:void 0,ref:void 0}))),i!==(_&&_.url)){K(Ie,_=this.c={url:i,previous:_&&_.url,current:r,path:r?r.props.path:null,matches:n}),_.router=this,_.active=r?[r]:[];for(var u=J.length;u--;)J[u]({});typeof o=="function"&&o(_)}return Z(ft.Provider,{value:_},r)}});var jt=function(e){return Z("a",K({onClick:pt},e))},ie=function(e){return Z(e.component,e)};function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function ae(e){return e.charAt(0)==="/"}function me(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function qt(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&ae(e),i=t&&ae(t),_=o||i;if(e&&ae(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var s;if(r.length){var u=r[r.length-1];s=u==="."||u===".."||u===""}else s=!1;for(var c=0,f=r.length;f>=0;f--){var a=r[f];a==="."?me(r,f):a===".."?(me(r,f),c++):c&&(me(r,f),c--)}if(!_)for(;c--;c)r.unshift("..");_&&r[0]!==""&&(!r[0]||!ae(r[0]))&&r.unshift("");var h=r.join("/");return s&&h.substr(-1)!=="/"&&(h+="/"),h}var Bt=!0,ge="Invariant failed";function Vt(e,t){if(!e){if(Bt)throw new Error(ge);var n=typeof t=="function"?t():t,r=n?"".concat(ge,": ").concat(n):ge;throw new Error(r)}}function ce(e){return e.charAt(0)==="/"?e:"/"+e}function Xe(e){return e.charAt(0)==="/"?e.substr(1):e}function Kt(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function zt(e,t){return Kt(e,t)?e.substr(t.length):e}function Gt(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function Jt(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function L(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function ye(e,t,n,r){var o;typeof e=="string"?(o=Jt(e),o.state=t):(o=le({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=qt(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Qt(){var e=null;function t(_){return e=_,function(){e===_&&(e=null)}}function n(_,s,u,c){if(e!=null){var f=typeof e=="function"?e(_,s):e;typeof f=="string"?typeof u=="function"?u(f,c):c(!0):c(f!==!1)}else c(!0)}var r=[];function o(_){var s=!0;function u(){s&&_.apply(void 0,arguments)}return r.push(u),function(){s=!1,r=r.filter(function(c){return c!==u})}}function i(){for(var _=arguments.length,s=new Array(_),u=0;u<_;u++)s[u]=arguments[u];r.forEach(function(c){return c.apply(void 0,s)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var Xt=!!(typeof window<"u"&&window.document&&window.document.createElement);function Yt(e,t){t(window.confirm(e))}function Zt(){return window.navigator.userAgent.indexOf("Firefox")===-1}var Ye="hashchange",en={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+Xe(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:Xe,decodePath:ce},slash:{encodePath:ce,decodePath:ce}};function vt(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function V(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function tn(e){window.location.hash=e}function be(e){window.location.replace(vt(window.location.href)+"#"+e)}function nn(e){e===void 0&&(e={}),Xt||Vt(!1);var t=window.history;Zt();var n=e,r=n.getUserConfirmation,o=r===void 0?Yt:r,i=n.hashType,_=i===void 0?"slash":i,s=e.basename?Gt(ce(e.basename)):"",u=en[_],c=u.encodePath,f=u.decodePath;function a(){var v=f(V());return s&&(v=zt(v,s)),ye(v)}var h=Qt();function l(v){le(E,v),E.length=t.length,h.notifyListeners(E.location,E.action)}var m=!1,b=null;function w(v,P){return v.pathname===P.pathname&&v.search===P.search&&v.hash===P.hash}function g(){var v=V(),P=c(v);if(v!==P)be(P);else{var x=a(),C=E.location;if(!m&&w(C,x)||b===L(x))return;b=null,$(x)}}function $(v){if(m)m=!1,l();else{var P="POP";h.confirmTransitionTo(v,P,o,function(x){x?l({action:P,location:v}):T(v)})}}function T(v){var P=E.location,x=H.lastIndexOf(L(P));x===-1&&(x=0);var C=H.lastIndexOf(L(v));C===-1&&(C=0);var W=x-C;W&&(m=!0,ee(W))}var U=V(),O=c(U);U!==O&&be(O);var j=a(),H=[L(j)];function q(v){var P=document.querySelector("base"),x="";return P&&P.getAttribute("href")&&(x=vt(window.location.href)),x+"#"+c(s+L(v))}function k(v,P){var x="PUSH",C=ye(v,void 0,void 0,E.location);h.confirmTransitionTo(C,x,o,function(W){if(W){var I=L(C),B=c(s+I),de=V()!==B;if(de){b=I,tn(B);var re=H.lastIndexOf(L(E.location)),Me=H.slice(0,re+1);Me.push(I),H=Me,l({action:x,location:C})}else l()}})}function M(v,P){var x="REPLACE",C=ye(v,void 0,void 0,E.location);h.confirmTransitionTo(C,x,o,function(W){if(W){var I=L(C),B=c(s+I),de=V()!==B;de&&(b=I,be(B));var re=H.indexOf(L(E.location));re!==-1&&(H[re]=I),l({action:x,location:C})}})}function ee(v){t.go(v)}function mt(){ee(-1)}function gt(){ee(1)}var pe=0;function te(v){pe+=v,pe===1&&v===1?window.addEventListener(Ye,g):pe===0&&window.removeEventListener(Ye,g)}var ne=!1;function yt(v){v===void 0&&(v=!1);var P=h.setPrompt(v);return ne||(te(1),ne=!0),function(){return ne&&(ne=!1,te(-1)),P()}}function bt(v){var P=h.appendListener(v);return te(1),function(){te(-1),P()}}var E={length:t.length,action:"POP",location:j,createHref:q,push:k,replace:M,go:ee,goBack:mt,goForward:gt,block:yt,listen:bt};return E}const rn="_header_meynp_7",on="_active_meynp_42",we={header:rn,active:on};var an=["className","activeClass","activeClassName","path"];function Ze(e){var t=e.className,n=e.activeClass,r=e.activeClassName,o=e.path,i=function(f,a){if(f==null)return{};var h,l,m={},b=Object.keys(f);for(l=0;l<b.length;l++)a.indexOf(h=b[l])>=0||(m[h]=f[h]);return m}(e,an),_=Wt()[0],s=o&&_.path&&He(_.path,o,{})||He(_.url,i.href,{}),u=i.class||t||"",c=s&&(n||r)||"";return i.class=u+(u&&c&&" ")+c,Z(jt,i)}var _n=0;function p(e,t,n,r,o,i){var _,s,u={};for(s in t)s=="ref"?_=t[s]:u[s]=t[s];var c={type:e,props:u,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--_n,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(_=e.defaultProps))for(s in _)u[s]===void 0&&(u[s]=_[s]);return d.vnode&&d.vnode(c),c}function sn(){return p("header",{class:we.header,children:[p("h1",{children:p("a",{href:"/",children:"apibin"})}),p("nav",{children:[p(Ze,{activeClassName:we.active,href:"/",children:"Home"}),p(Ze,{activeClassName:we.active,href:"/about",children:"About"}),p("a",{href:"https://github.com/pastebinrun/apibin",children:"Source code"})]})]})}const cn="_submit_14mgj_7",un="_full_14mgj_11",et={submit:cn,full:un},Te="https://pastebin.run/";function ln(){const[e,t]=F(""),[n,r]=F("PT1H"),[o,i]=F([]),[_,s]=F("plaintext"),u=h=>s(h.target.value),c=h=>r(h.target.value),f=h=>t(h.target.value),a=async h=>{h.preventDefault();const l=await fetch(`${Te}api/v1/pastes`,{body:new URLSearchParams({code:e,expiration:n,language:_}),method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}});De(`/${await l.text()}`)};return Ue(()=>{(async()=>i(await(await fetch(`${Te}api/v1/languages`)).json()))()},[]),p("form",{onSubmit:a,children:[p("label",{children:["Language:"," ",p("select",{value:_,onInput:u,children:o.map(({identifier:h,name:l})=>p("option",{value:h,children:l},h))})]})," ",p("label",{children:["Expires:"," ",p("select",{value:n,onInput:c,children:[p("option",{value:"PT1H",children:"1 hour"}),p("option",{value:"P1D",children:"1 day"}),p("option",{value:"P7D",children:"1 week"}),p("option",{children:"Never"})]})]}),p("button",{class:et.submit,type:"submit",children:"Share"}),p("textarea",{class:et.full,required:!0,onInput:f,children:e})]})}function fn(){return p("section",{children:[p("h1",{children:"404: Not Found"}),p("p",{children:"It's gone :("})]})}const hn="_app_189en_25",pn={app:hn},dn="_about_e96ve_7",vn={about:dn};function mn(){return p("div",{class:vn.about,children:[p("p",{children:["This is a demonstration of"," ",p("a",{href:"https://pastebin.run",children:"pastebin.run"}),"'s API. Every API used by apibin is public and can be used by both JavaScript applications running in a web browser as well as applications running outside of web browser (such as Discord bots)."]}),p("p",{children:["If you are looking for a pastebin, please visit our main web site,"," ",p("a",{href:"https://pastebin.run/",children:"pastebin.run"}),". While this demo can be used as a pastebin, it requires JavaScript (unlike the main pastebin), and it's much more prone to breaking. And it's not because of APIs changing — those are intended to remain stable, but rather because we can change the routes at any time — this isn't a production application."]}),p("p",{children:["Why does this exist?"," ",p("a",{href:"https://en.wikipedia.org/wiki/Eating_your_own_dog_food",children:"Dogfooding"}),", essentially."]})]})}const gn="_pre_10hlv_7",yn={pre:gn};function bn({id:e}){const[t,n]=F(null),r=i=>{i.preventDefault(),navigator.clipboard.writeText(o())},o=()=>`https://pastebin.run/${e}`;return Ue(()=>{const i=new AbortController;return(async()=>n(await(await fetch(`${Te}${e}.txt`,{signal:i.signal})).text()))(),()=>i.abort()},[e,n]),p("div",{children:[p("div",{children:["Share link: ",p("input",{readonly:!0,value:o()})," ",p("button",{onClick:r,children:"Copy link"})]}),t===null?"Loading…":p("pre",{class:yn.pre,children:p("code",{children:t})})]})}function wn(){return p("div",{class:pn.app,children:[p(sn,{}),p("main",{children:p(dt,{history:nn(),children:[p(ie,{path:"/",component:ln}),p(ie,{path:"/about",component:mn}),p(ie,{path:"/:id",component:bn}),p(ie,{default:!0,component:fn})]})})]})}Ct(p(wn,{}),document.getElementById("app"));
