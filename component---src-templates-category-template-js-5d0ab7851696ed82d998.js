"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[322],{6876:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(5444),l=a(2359),c=function(){var e=(0,r.K2)("1449469102").allMdx.nodes;return n.createElement("div",{className:"widget"},n.createElement("h2",{className:"mb-6"},"Latest Post"),e.map((function(e){var t=e.frontmatter,a=t.title,c=t.slug,i=t.image;return n.createElement("div",{className:"feature-post"},n.createElement(r.rU,{to:"/"+c,key:e.id},n.createElement(l.G,{image:(0,l.d)(i),alt:a,className:"feature-post-image"})),n.createElement("div",{className:"post-details"},n.createElement("h2",null,n.createElement(r.rU,{to:"/"+c,key:e.id},a))))})))},i=function(){var e=(0,r.K2)("3824322444").allMdx.distinct;return n.createElement("div",{className:"content widget"},n.createElement("h2",null,"Categories"),e.map((function(e,t){return n.createElement("div",{className:"tag-item",key:t},n.createElement(r.rU,{to:"/"+e,className:"category"},e))})))},m=function(){return n.createElement(n.Fragment,null,n.createElement(i,null))},o=function(){return n.createElement("div",{className:"sidebar"},n.createElement(m,null),n.createElement(c,null))}},8562:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(2359),l=a(5444),c=function(e){var t=e.frontmatter,a=(e.excerpt,t.title),c=t.description,i=t.image,m=t.slug,o=t.category;return n.createElement("article",{className:"px-6 mb-14"},n.createElement(l.rU,{to:"/"+m},n.createElement(r.G,{image:(0,r.d)(i),alt:a,className:"post-img mb-5 img-radius"})),n.createElement("div",{className:"content"},n.createElement("div",{className:"categories  mb-3"},n.createElement(l.rU,{to:"/"+o},o)),n.createElement("h2",{className:"mb-3 "},n.createElement(l.rU,{to:"/"+m},a)),n.createElement("p",null,c)))},i=a(6876),m=function(e){var t=e.posts,a=e.title;return n.createElement(n.Fragment,null,n.createElement("div",{className:"container blog-layout pt-16 "},n.createElement("div",{className:"articles"},n.createElement("h1",{className:"page-title text-2xl mb-12 px-6"},a),n.createElement("div",{className:"article-container"},t.map((function(e){return n.createElement(c,Object.assign({key:e.id},e))})))),n.createElement(i.Z,null)))}},2248:function(e,t,a){var n=a(7294),r=a(5414),l=a(9499),c=a(5444),i=function(e){var t=e.title,a=e.description,i=e.image,o=e.article,s=(0,l.useLocation)().pathname,u=(0,c.K2)(m).site.siteMetadata,d=u.defaultTitle,E=u.titleTemplate,p=u.defaultDescription,g=u.siteUrl,f=u.defaultImage,v=u.twitterUsername,N={title:t||d,description:a||p,image:""+g+(i||f),url:""+g+s};return n.createElement(r.q,{title:N.title,titleTemplate:E},n.createElement("meta",{name:"description",content:N.description}),n.createElement("meta",{name:"image",content:N.image}),N.url&&n.createElement("meta",{property:"og:url",content:N.url}),!o?null:n.createElement("meta",{property:"og:type",content:"article"}),N.title&&n.createElement("meta",{property:"og:title",content:N.title}),N.description&&n.createElement("meta",{property:"og:description",content:N.description}),N.image&&n.createElement("meta",{property:"og:image",content:N.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),v&&n.createElement("meta",{name:"twitter:creator",content:v}),N.title&&n.createElement("meta",{name:"twitter:title",content:N.title}),N.description&&n.createElement("meta",{name:"twitter:description",content:N.description}),N.image&&n.createElement("meta",{name:"twitter:image",content:N.image}))};t.Z=i,i.defaultProps={title:null,description:null,image:null,article:!1};var m="4202924991"},9414:function(e,t,a){a.r(t);var n=a(7294),r=a(2650),l=a(8562),c=a(2248);t.default=function(e){var t=e.data.categories.nodes,a=e.pageContext.category;return n.createElement(r.Z,null,n.createElement(c.Z,{title:a}),n.createElement(l.Z,{posts:t,title:a}))}}}]);
//# sourceMappingURL=component---src-templates-category-template-js-5d0ab7851696ed82d998.js.map