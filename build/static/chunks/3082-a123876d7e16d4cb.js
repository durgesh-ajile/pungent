(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3082],{3082:function(t,e,o){var n;n=function(t,e){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,o){t.exports=o(5)()},function(e,o){e.exports=t},function(t,o){t.exports=e},function(t,e){t.exports=function(t,e,o){var n=t.direction,r=t.value;switch(n){case"top":return o.top+r<e.top&&o.bottom>e.bottom&&o.left<e.left&&o.right>e.right;case"left":return o.left+r<e.left&&o.bottom>e.bottom&&o.top<e.top&&o.right>e.right;case"bottom":return o.bottom-r>e.bottom&&o.left<e.left&&o.right>e.right&&o.top<e.top;case"right":return o.right-r>e.right&&o.left<e.left&&o.top<e.top&&o.bottom>e.bottom}}},function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return y}));var n=o(1),r=o.n(n),i=o(2),a=o.n(i),l=o(0),c=o.n(l),u=o(3),s=o.n(u);function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var y=function(t){function e(t){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?b(t):e}(this,h(e).call(this,t)),m(b(o),"getContainer",(function(){return o.props.containment||window})),m(b(o),"addEventListener",(function(t,e,n,r){var i;o.debounceCheck||(o.debounceCheck={});var a=function(){i=null,o.check()},l={target:t,fn:r>-1?function(){i||(i=setTimeout(a,r||0))}:function(){clearTimeout(i),i=setTimeout(a,n||0)},getLastTimeout:function(){return i}};t.addEventListener(e,l.fn),o.debounceCheck[e]=l})),m(b(o),"startWatching",(function(){o.debounceCheck||o.interval||(o.props.intervalCheck&&(o.interval=setInterval(o.check,o.props.intervalDelay)),o.props.scrollCheck&&o.addEventListener(o.getContainer(),"scroll",o.props.scrollDelay,o.props.scrollThrottle),o.props.resizeCheck&&o.addEventListener(window,"resize",o.props.resizeDelay,o.props.resizeThrottle),!o.props.delayedCall&&o.check())})),m(b(o),"stopWatching",(function(){if(o.debounceCheck)for(var t in o.debounceCheck)if(o.debounceCheck.hasOwnProperty(t)){var e=o.debounceCheck[t];clearTimeout(e.getLastTimeout()),e.target.removeEventListener(t,e.fn),o.debounceCheck[t]=null}o.debounceCheck=null,o.interval&&(o.interval=clearInterval(o.interval))})),m(b(o),"check",(function(){var t,e,n=o.node;if(!n)return o.state;if(t=function(t){return void 0===t.width&&(t.width=t.right-t.left),void 0===t.height&&(t.height=t.bottom-t.top),t}(o.roundRectDown(n.getBoundingClientRect())),o.props.containment){var r=o.props.containment.getBoundingClientRect();e={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else e={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=o.props.offset||{};"object"===p(i)&&(e.top+=i.top||0,e.left+=i.left||0,e.bottom-=i.bottom||0,e.right-=i.right||0);var a={top:t.top>=e.top,left:t.left>=e.left,bottom:t.bottom<=e.bottom,right:t.right<=e.right},l=t.height>0&&t.width>0,c=l&&a.top&&a.left&&a.bottom&&a.right;if(l&&o.props.partialVisibility){var u=t.top<=e.bottom&&t.bottom>=e.top&&t.left<=e.right&&t.right>=e.left;"string"===typeof o.props.partialVisibility&&(u=a[o.props.partialVisibility]),c=o.props.minTopValue?u&&t.top<=e.bottom-o.props.minTopValue:u}"string"===typeof i.direction&&"number"===typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),c=s()(i,t,e));var f=o.state;return o.state.isVisible!==c&&(f={isVisible:c,visibilityRect:a},o.setState(f),o.props.onChange&&o.props.onChange(c)),f})),o.state={isVisible:null,visibilityRect:{}},o}var o,n,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),o=e,(n=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(t){this.node=a.a.findDOMNode(this),this.props.active&&!t.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(t){return{top:Math.floor(t.top),left:Math.floor(t.left),bottom:Math.floor(t.bottom),right:Math.floor(t.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&f(o.prototype,n),i&&f(o,i),e}(r.a.Component);m(y,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),m(y,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!==typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(t,e,o){"use strict";var n=o(6);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,o,r,i,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var o={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},function(t,e,o){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},t.exports=n(o(7294),o(3935))}}]);