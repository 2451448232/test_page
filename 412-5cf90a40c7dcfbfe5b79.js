"use strict";(self.webpackChunkgatsby_starter_advanced=self.webpackChunkgatsby_starter_advanced||[]).push([[412],{2412:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(300),a=n(7294),r=n(7762);n(186);let i;const c=new WeakMap,s=navigator.connection||navigator.mozConnection||navigator.webkitConnection,l=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function d(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function u(e,t,n,o,a,r){const i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=n.has(t);function l(e){this.removeEventListener("load",l);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{d(this,c),null==a||a({wasCached:s})})).catch((e=>{d(this,c),null==r||r(e)})):(d(this,c),null==a||a({wasCached:s}))}return i.addEventListener("load",l),null==o||o({wasCached:s}),Array.from(i.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),i.complete&&l.call(i,{currentTarget:i}),()=>{i&&i.removeEventListener("load",l)}}function g(e,t,a,r,l,d,g){if(!(0,o.h)()){let o;const v=(m=()=>{o=u(e,t,a,l,d,g)},"IntersectionObserver"in window?(i||(i=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==s?void 0:s.effectiveType)||null!=s&&s.saveData?"2500px":"1250px"})),function(e){return c.set(e,m),i.observe(e),function(){i&&e&&(c.delete(e),i.unobserve(e))}}):function(){return m(),function(){}}),f=v(e);var b,h;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=r.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(h=r.objectPosition)?h:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(932).then(n.t.bind(n,7932,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),f()}}var m;return u(e,t,a,l,d,g)}function b(e){let{image:t,loading:n="lazy",isLoading:i,isLoaded:c,imgClassName:s,imgStyle:d={},objectPosition:u,backgroundColor:g,objectFit:b="cover"}=e,h=(0,o._)(e,l);const{width:m,height:v,layout:f,images:w,placeholder:y,backgroundColor:p}=t;return d=(0,o.a)({objectFit:b,objectPosition:u,backgroundColor:g},d),(0,r.renderToStaticMarkup)(a.createElement(o.L,{layout:f,width:m,height:v},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,f,m,v,p,b,u))),a.createElement(o.M,(0,o.a)({},h,{width:m,height:v,className:s},(0,o.b)(i,c,w,n,d)))))}}}]);
//# sourceMappingURL=412-5cf90a40c7dcfbfe5b79.js.map