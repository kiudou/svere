import r,{useRef as n,useState as t,useEffect as e}from"react";var o=function(){return(o=Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r}).apply(this,arguments)},u={element:"div",id:"svelte-wrapper"};export default function(a,c){return function(l){var i=n(null),s=n(null),v=t(!1),f=v[0],p=v[1];return e((function(){var r,n,t=/on([A-Z]{1,}[a-zA-Z]*)/,e=/watch([A-Z]{1,}[a-zA-Z]*)/;s.current=new a({target:i.current,props:l});var o=[];for(var u in l){var c=u.match(t),v=u.match(e);c&&"function"==typeof l[u]&&(null===(r=s.current)||void 0===r||r.$on(""+c[1][0].toLowerCase()+c[1].slice(1),l[u])),v&&"function"==typeof l[u]&&o.push([""+v[1][0].toLowerCase()+v[1].slice(1),l[u]])}if(o.length){var f=null===(n=s.current)||void 0===n?void 0:n.$$.update;f&&(s.current.$$.update=function(){o.forEach((function(r){var n,t,e=r[0],o=r[1],u=null===(n=s.current)||void 0===n?void 0:n.$$.props[e],a=null===(t=s.current)||void 0===t?void 0:t.$$.ctx[u];a&&o(a)})),f.apply(null,arguments)})}return function(){var r;null===(r=s.current)||void 0===r||r.$destroy()}}),[]),e((function(){var r;f?null===(r=s.current)||void 0===r||r.$set(l):p(!0)}),[l]),c=function(r){return r?Object.assign({},u,r):u}(c),r.createElement(c.element,{ref:i,id:c.id,className:c.className,style:o({},c.styles)})}}
