(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9939],{7942:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},c=n(4957),a=n(9898),i=n(639);var f={};function l(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=a.useRouter(),s=u.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),u=n[0],a=n[1];return{href:u,as:e.as?c.resolveHref(o,e.as):a||u}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var m=(t=u.default.Children.only(v))&&"object"===typeof t&&t.ref,_=i.useIntersection({rootMargin:"200px"}),E=r(_,2),O=E[0],w=E[1],j=u.default.useCallback((function(e){O(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,O]);u.default.useEffect((function(){var e=w&&n&&c.isLocalURL(p),t="undefined"!==typeof g?g:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,w,g,n,o]);var k={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:a}))}(e,o,p,d,h,y,b,g)},onMouseEnter:function(e){c.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof g?g:o&&o.locale,L=o&&o.isLocaleDomain&&c.getDomainLocale(d,x,o&&o.locales,o&&o.domainLocales);k.href=L||c.addBasePath(c.addLocale(d,x,o&&o.defaultLocale))}return u.default.cloneElement(t,k)};t.default=s},639:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=o.useRef(),f=o.useState(!1),l=r(f,2),s=l[0],p=l[1],d=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||s||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,c=r.elements;return c.set(e,t),u.observe(e),function(){c.delete(e),u.unobserve(e),0===c.size&&(u.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!c&&!s){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),u=n(6286),c="undefined"!==typeof IntersectionObserver;var a=new Map},9496:function(e,t,n){"use strict";n.r(t);var r=n(8216),o=n(5997),u=n(169),c=n(8184),a=n(2953),i=n(7294),f=n(8180),l=n(1670),s=n(3506),p=n(6269),d=n(9501),v=n(5893);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var y=function(e){(0,u.Z)(n,e);var t=h(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Z,{}),(0,v.jsx)(l.Z,{pageTitle:"Our Pricing",BGImage:"bg-four"}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(p.Z,{}),(0,v.jsx)(d.Z,{})]})}}]),n}(i.Component);t.default=y},9650:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return n(9496)}])},1664:function(e,t,n){e.exports=n(7942)},1163:function(e,t,n){e.exports=n(9898)},1164:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[5608,1818,9774,2888,179],(function(){return t=9650,e(e.s=t);var t}));var t=e.O();_N_E=t}]);