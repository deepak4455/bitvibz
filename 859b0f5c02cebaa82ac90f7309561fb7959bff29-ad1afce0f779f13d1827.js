(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[232],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,l=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},2650:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(5444),o=r(1852),i=r(2359),c=function(e){var t=e.setShow,c=e.show;return n.createElement(n.Fragment,null,n.createElement("div",{className:"py-4 px-3 header-section"},n.createElement("div",{className:"container header-container"},n.createElement("div",{className:"mobile-menu"},n.createElement("button",{"aria-hidden":"true",onClick:function(){return t(!c)}},n.createElement(o.SVs,{id:"menu-bar"}))),n.createElement("div",{className:"branding"},n.createElement(a.rU,{to:"/"},n.createElement(i.S,{src:"../assets/images/logo.svg",alt:"website logo",__imageData:r(8692)}))),n.createElement("div",{className:"nav-menu"},n.createElement(a.rU,{to:"/",activeClassName:"active-link"},"Home"),n.createElement(a.rU,{to:"/About",activeClassName:"active-link"},"About"),n.createElement(a.rU,{to:"/Contact",activeClassName:"active-link"},"Contact")),n.createElement("div",{className:"dark-mode"},n.createElement("button",{"aria-label":"enable dark mode"},n.createElement(o.GL8,{id:"moon"}))),n.createElement("div",{className:"social-links"},n.createElement("a",{href:"https://www.facebook.com/",rel:"noreferrer",target:"_blank"},n.createElement(o.k1O,{id:"facebook"})),n.createElement("a",{href:"https://www.instagram.com/",rel:"noreferrer",target:"_blank"},n.createElement(o.Vs6,{id:"instagram"})),n.createElement("a",{href:"https://www.pinterest.com/",rel:"noreferrer",target:"_blank"},n.createElement(o.I30,{id:"pinterest"}))))))},l=function(){var e=(0,a.K2)("426988268");return n.createElement("footer",{className:"footer section px-3 py-6"},n.createElement("div",{className:"container"},n.createElement("div",{className:"copyright"},"© ",(new Date).getFullYear()," ",n.createElement("span",null,e.site.siteMetadata.title)," Built with",n.createElement("a",{style:{marginLeft:"4px"},href:"https://www.gatsbyjs.com/"},"Gatsby")),n.createElement("div",{className:"footer-menu"},n.createElement(a.rU,{to:"/"},"Home"),n.createElement(a.rU,{to:"/About"},"About us"),n.createElement(a.rU,{to:"/"},"Privacy Policy"),n.createElement(a.rU,{to:"/Contact"},"Contact"))))},s=function(e){var t=e.setShow,c=e.show;return n.createElement(n.Fragment,null,n.createElement("div",{className:c?"drawer drawer-is-active":"drawer"},n.createElement("div",{className:"drawer-overlay",onClick:function(){return t(!c)},style:c?{opacity:"1"}:{}}),n.createElement("div",{className:"drawer-content",style:c?{}:{transform:"translateX(-100%)",width:"300px"}},n.createElement("div",{className:"drawer-head p-5"},n.createElement("div",{className:"drawer-logo"},n.createElement(i.S,{src:"../assets/images/logo.svg",alt:"website logo",__imageData:r(8692)})),n.createElement("div",null,n.createElement("button",{onClick:function(){return t(!c)}},n.createElement(o.C7Q,{id:"close"})))),n.createElement("div",{className:"drawer-menu"},n.createElement(a.rU,{onClick:function(){return t(!c)},to:"/",activeClassName:"d-active-link"},"Home"),n.createElement(a.rU,{onClick:function(){return t(!c)},to:"/About",activeClassName:"d-active-link"},"About"),n.createElement(a.rU,{onClick:function(){return t(!c)},to:"/Contact",activeClassName:"d-active-link"},"Contact")),n.createElement("div",{className:"drawer-social-links"},n.createElement("h4",null,"Follow us"),n.createElement("div",{className:"social-icons"},n.createElement("a",{onClick:function(){return t(!c)},href:"https://www.facebook.com/",rel:"noreferrer",target:"_blank"},n.createElement(o.k1O,{id:"facebook"})),n.createElement("a",{onClick:function(){return t(!c)},href:"https://www.instagram.com/",rel:"noreferrer",target:"_blank"},n.createElement(o.Vs6,{id:"instagram"})),n.createElement("a",{onClick:function(){return t(!c)},href:"https://www.pinterest.com/",rel:"noreferrer",target:"_blank"},n.createElement(o.I30,{id:"pinterest"})))))))},u=function(e){var t=e.children,r=(0,n.useState)(!1),a=r[0],o=r[1];return n.createElement(n.Fragment,null,n.createElement(c,{setShow:o,show:a}),t,n.createElement(l,null),n.createElement(s,{setShow:o,show:a}))}},2335:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,a,o,i,c=r(7294),l=r(5697),s=r.n(l),u=r(4839),f=r.n(u),m=r(2993),p=r.n(m),d=r(6494),h=r.n(d),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",C="http-equiv",O="innerHTML",A="itemprop",S="name",k="property",N="rel",j="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",U="titleTemplate",R=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,v.TITLE),r=Q(e,U);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},G=function(e){return Q(e,M)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===N&&"canonical"===e[r].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==O&&c!==E&&c!==A||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=h()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(v.BODY,n),le(v.HTML,a),ce(f,m);var p={baseTag:se(v.BASE,r),linkTags:se(v.LINK,o),metaTags:se(v.META,i),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(H):r.getAttribute(H)!==i.join(",")&&r.setAttribute(H,i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[x[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,a=fe(r,n),[c.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=x[e]||e;if(r===O||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(v.BASE,t,n),bodyAttributes:me(y,r,n),htmlAttributes:me(b,a,n),link:me(v.LINK,o,n),meta:me(v.META,i,n),noscript:me(v.NOSCRIPT,c,n),script:me(v.SCRIPT,l,n),style:me(v.STYLE,s,n),title:me(v.TITLE,{title:f,titleAttributes:m},n)}},de=f()((function(e){return{baseTag:$([T,P],e),bodyAttributes:Z(y,e),defer:Q(e,I),encode:Q(e,_),htmlAttributes:Z(b,e),linkTags:J(v.LINK,[N,T],e),metaTags:J(v.META,[S,w,C,k,A],e),noscriptTags:J(v.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:J(v.SCRIPT,[j,O],e),styleTags:J(v.STYLE,[E],e),title:W(e),titleAttributes:Z(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return B(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return z({},a,((t={})[n.type]=i,t.titleAttributes=z({},o),t));case v.BODY:return z({},a,{bodyAttributes:z({},o)});case v.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((r={})[n.type]=z({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(Y(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=r(9499),be=r(5444),ge=function(e){var t=e.title,r=e.description,n=e.image,a=e.article,o=(0,ye.useLocation)().pathname,i=(0,be.K2)(we).site.siteMetadata,l=i.defaultTitle,s=i.titleTemplate,u=i.defaultDescription,f=i.siteUrl,m=i.defaultImage,p=i.twitterUsername,d={title:t||l,description:r||u,image:""+f+(n||m),url:""+f+o};return c.createElement(he,{title:d.title,titleTemplate:s},c.createElement("meta",{name:"description",content:d.description}),c.createElement("meta",{name:"image",content:d.image}),d.url&&c.createElement("meta",{property:"og:url",content:d.url}),!a?null:c.createElement("meta",{property:"og:type",content:"article"}),d.title&&c.createElement("meta",{property:"og:title",content:d.title}),d.description&&c.createElement("meta",{property:"og:description",content:d.description}),d.image&&c.createElement("meta",{property:"og:image",content:d.image}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&c.createElement("meta",{name:"twitter:creator",content:p}),d.title&&c.createElement("meta",{name:"twitter:title",content:d.title}),d.description&&c.createElement("meta",{name:"twitter:description",content:d.description}),d.image&&c.createElement("meta",{name:"twitter:image",content:d.image}))},ve=ge;ge.defaultProps={title:null,description:null,image:null,article:!1};var we="4202924991"},8692:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b02357d31223e6433716eb1c8fc31ec7/32d27/logo.svg","srcSet":"/static/b02357d31223e6433716eb1c8fc31ec7/015bf/logo.svg 37w,\\n/static/b02357d31223e6433716eb1c8fc31ec7/60c38/logo.svg 74w,\\n/static/b02357d31223e6433716eb1c8fc31ec7/32d27/logo.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/static/b02357d31223e6433716eb1c8fc31ec7/91c39/logo.webp 37w,\\n/static/b02357d31223e6433716eb1c8fc31ec7/67e33/logo.webp 74w,\\n/static/b02357d31223e6433716eb1c8fc31ec7/10986/logo.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":30}')}}]);
//# sourceMappingURL=859b0f5c02cebaa82ac90f7309561fb7959bff29-ad1afce0f779f13d1827.js.map