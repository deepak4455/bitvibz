"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[322],{1046:function(e,t,a){a.d(t,{w_:function(){return o}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.createContext&&r.createContext(n),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),s(e.child))}))}function o(e){return function(t){return r.createElement(m,l({attr:l({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var a,n=e.attr,c=e.size,s=e.title,o=i(e,["attr","size","title"]),m=c||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==c?r.createElement(c.Consumer,null,(function(e){return t(e)})):t(n)}},9533:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(5444),c=a(2359),l=function(){var e=(0,n.K2)("1449469102").allMdx.nodes;return r.createElement("div",{className:"widget"},r.createElement("h2",{class:"mb-6"},"Latest Post"),e.map((function(e){var t=e.frontmatter,a=t.title,l=t.slug,i=t.category,s=t.image;return r.createElement("div",{class:"feature-post"},r.createElement(n.rU,{to:"/"+l,key:e.id},r.createElement(c.G,{image:(0,c.d)(s),alt:a,className:"feature-post-image"})),r.createElement("div",{class:"post-details"},r.createElement("h2",null,r.createElement(n.rU,{to:"/"+l,key:e.id},a)),r.createElement("div",{class:"tags"},r.createElement(n.rU,{to:"/"+i},i))))})))},i=function(){var e=(0,n.K2)("3824322444").allMdx.distinct;return r.createElement("div",{class:"content widget"},r.createElement("h2",null,"Categories"),e.map((function(e,t){return r.createElement("div",{class:"tag-item",key:t},r.createElement(n.rU,{to:"/"+e,className:"category"},e))})))},s=function(){return r.createElement(r.Fragment,null,r.createElement(i,null))},o=function(){return r.createElement("div",{class:"content widget"},r.createElement("h2",null,"Promotion"),r.createElement(c.S,{src:"../../assets/images/1.jpg",alt:"author",className:"img",__imageData:a(899)}))},m=function(){return r.createElement("div",{className:"sidebar"},r.createElement(o,null),r.createElement(l,null),r.createElement(s,null))}},8741:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(5444),c=a(1279),l=a(1852),i=a(9295),s=a(2359),o=function(){var e=(0,r.useState)(!1),t=e[0],o=e[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"py-4 px-3 header-section"},r.createElement("div",{className:"container header-container"},r.createElement("div",{className:"mobile-menu"},r.createElement("button",{"aria-hidden":"true",onClick:function(){return o(!t)}},r.createElement(c.q5Q,null))),r.createElement("div",{className:"branding"},r.createElement(n.rU,{to:"/"},r.createElement(s.S,{src:"../assets/images/logo.svg",alt:"website logo",__imageData:a(8692)}))),r.createElement("div",{className:"nav-menu"},r.createElement(n.rU,{to:"/",activeClassName:"active-link"},"Home"),r.createElement(n.rU,{to:"/About",activeClassName:"active-link"},"About"),r.createElement(n.rU,{to:"/Contact",activeClassName:"active-link"},"Contact"),r.createElement(n.rU,{to:"/404",activeClassName:"active-link"},"404"),r.createElement(n.rU,{to:"/",activeClassName:"active-link"},"Recipes")),r.createElement("div",{className:"dark-mode"},r.createElement("button",{"aria-label":"enable dark mode"},r.createElement(l.s1t,null))),r.createElement("div",{className:"social-links"},r.createElement("a",{href:"https://www.facebook.com/",rel:"noreferrer",target:"_blank"},r.createElement(c.s5I,null)),r.createElement("a",{href:"https://www.instagram.com/",rel:"noreferrer",target:"_blank"},r.createElement(c.Bpw,null)),r.createElement("a",{href:"https://www.pinterest.com/",rel:"noreferrer",target:"_blank"},r.createElement(i.nCo,null))))),r.createElement("div",{className:t?"drawer drawer-is-active":"drawer"},r.createElement("div",{class:"drawer-overlay",onClick:function(){return o(!t)}}),r.createElement("div",{class:"drawer-content"},r.createElement("div",{class:"drawer-head p-5"},r.createElement("div",{class:"drawer-logo"},r.createElement(s.S,{src:"../assets/images/logo.svg",alt:"website logo",__imageData:a(8692)})),r.createElement("button",{onClick:function(){return o(!t)}},r.createElement(c.oHP,null))),r.createElement("div",{class:"drawer-menu"},r.createElement(n.rU,{onClick:function(){return o(!t)},to:"/",activeClassName:"d-active-link"},"Home"),r.createElement(n.rU,{onClick:function(){return o(!t)},to:"/About",activeClassName:"d-active-link"},"About"),r.createElement(n.rU,{onClick:function(){return o(!t)},to:"/Contact",activeClassName:"d-active-link"},"Contact"),r.createElement(n.rU,{onClick:function(){return o(!t)},to:"/404",activeClassName:"d-active-link"},"404")),r.createElement("div",{class:"drawer-social-links"},r.createElement("h4",null,"Follow us"),r.createElement("div",{class:"social-icons"},r.createElement("a",{onClick:function(){return o(!t)},href:"https://www.facebook.com/",rel:"noreferrer",target:"_blank"},r.createElement(c.s5I,null)),r.createElement("a",{onClick:function(){return o(!t)},href:"https://www.instagram.com/",rel:"noreferrer",target:"_blank"},r.createElement(c.Bpw,null)),r.createElement("a",{onClick:function(){return o(!t)},href:"https://www.pinterest.com/",rel:"noreferrer",target:"_blank"},r.createElement(i.nCo,null)))))))},m=function(){var e=(0,n.K2)("426988268");return r.createElement("footer",{className:"footer section px-3 py-6"},r.createElement("div",{class:"container"},r.createElement("div",{className:"copyright"},"© ",(new Date).getFullYear()," ",r.createElement("span",null,e.site.siteMetadata.title)," Built with",r.createElement("a",{style:{marginLeft:"4px"},href:"https://www.gatsbyjs.com/"},"Gatsby")),r.createElement("div",{class:"footer-menu"},r.createElement(n.rU,{to:"/"},"Home"),r.createElement(n.rU,{to:"/About"},"About us"),r.createElement(n.rU,{to:"/Privacy"},"Privacy Policy"),r.createElement(n.rU,{to:"Contact"},"Contact us"))))},u=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(o,null),t,r.createElement(m,null))}},8562:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(2359),c=a(5444),l=function(e){var t=e.frontmatter,a=e.excerpt,l=t.title,i=t.image,s=t.slug,o=t.category;return r.createElement("article",{class:"px-4 mb-16"},r.createElement(c.rU,{to:"/"+s},r.createElement(n.G,{image:(0,n.d)(i),alt:l,className:"post-img mb-5 img-radius"})),r.createElement("div",{class:"content"},r.createElement("div",{class:"categories  mb-3"},r.createElement(c.rU,{to:"/"+o},o)),r.createElement("h2",{className:"mb-3 "},r.createElement(c.rU,{to:"/"+s},l)),r.createElement("p",null,a)))},i=a(9533),s=function(e){var t=e.posts,a=e.title;return r.createElement("div",{class:"container blog-layout pt-20 "},r.createElement("div",{class:"articles"},r.createElement("h3",{className:"page-title text-2xl mb-12 ml-4"},a),r.createElement("div",{class:"article-container"},t.map((function(e){return r.createElement(l,Object.assign({key:e.id},e))})))),r.createElement(i.Z,null))}},9414:function(e,t,a){a.r(t);var r=a(7294),n=a(8741),c=a(8562);t.default=function(e){var t=e.data.categories.nodes,a=e.pageContext.category;return r.createElement(n.Z,null,r.createElement(c.Z,{posts:t,title:a}))}},8692:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bitvibz/static/b02357d31223e6433716eb1c8fc31ec7/32d27/logo.svg","srcSet":"/bitvibz/static/b02357d31223e6433716eb1c8fc31ec7/015bf/logo.svg 37w,\\n/bitvibz/static/b02357d31223e6433716eb1c8fc31ec7/60c38/logo.svg 74w,\\n/bitvibz/static/b02357d31223e6433716eb1c8fc31ec7/32d27/logo.svg 148w","sizes":"(min-width: 148px) 148px, 100vw"},"sources":[{"srcSet":"/bitvibz/static/b02357d31223e6433716eb1c8fc31ec7/91c39/logo.webp 37w,\\n/bitvibz/static/b02357d31223e6433716eb1c8fc31ec7/67e33/logo.webp 74w,\\n/bitvibz/static/b02357d31223e6433716eb1c8fc31ec7/10986/logo.webp 148w","type":"image/webp","sizes":"(min-width: 148px) 148px, 100vw"}]},"width":148,"height":30}')},899:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8c858","images":{"fallback":{"src":"/bitvibz/static/847a4e1d7b5baf3451ea8e58c5e4f51e/7cde5/1.jpg","srcSet":"/bitvibz/static/847a4e1d7b5baf3451ea8e58c5e4f51e/a0f24/1.jpg 214w,\\n/bitvibz/static/847a4e1d7b5baf3451ea8e58c5e4f51e/0065f/1.jpg 428w,\\n/bitvibz/static/847a4e1d7b5baf3451ea8e58c5e4f51e/7cde5/1.jpg 855w","sizes":"(min-width: 855px) 855px, 100vw"},"sources":[{"srcSet":"/bitvibz/static/847a4e1d7b5baf3451ea8e58c5e4f51e/8d9bf/1.webp 214w,\\n/bitvibz/static/847a4e1d7b5baf3451ea8e58c5e4f51e/21804/1.webp 428w,\\n/bitvibz/static/847a4e1d7b5baf3451ea8e58c5e4f51e/a3b48/1.webp 855w","type":"image/webp","sizes":"(min-width: 855px) 855px, 100vw"}]},"width":855,"height":555}')}}]);
//# sourceMappingURL=component---src-templates-category-template-js-acbd1769b03511286747.js.map