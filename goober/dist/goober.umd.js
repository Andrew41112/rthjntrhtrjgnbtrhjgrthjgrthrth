!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).goober={})}(this,function(e){let t={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||t,r=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,a=/\n+/g,o=(e,t)=>{let l="",r="",n="";for(let a in e){let s=e[a];"@"==a[0]?"i"==a[1]?l=a+" "+s+";":r+="f"==a[1]?o(s,a):a+"{"+o(s,"k"==a[1]?"":t)+"}":"object"==typeof s?r+=o(s,t?t.replace(/([^,])+/g,e=>a.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=s&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=o.p?o.p(a,s):a+":"+s+";")}return l+(t&&n?t+"{"+n+"}":n)+r},s={},c=e=>{if("object"==typeof e){let t="";for(let l in e)t+=l+c(e[l]);return t}return e},i=(e,t,l,i,f)=>{let p=c(e),d=s[p]||(s[p]=(e=>{let t=0,l=11;for(;t<e.length;)l=101*l+e.charCodeAt(t++)>>>0;return"go"+l})(p));if(!s[d]){let t=p!==e?e:(e=>{let t,l,o=[{}];for(;t=r.exec(e.replace(n,""));)t[4]?o.shift():t[3]?(l=t[3].replace(a," ").trim(),o.unshift(o[0][l]=o[0][l]||{})):o[0][t[1]]=t[2].replace(a," ").trim();return o[0]})(e);s[d]=o(f?{["@keyframes "+d]:t}:t,l?"":"."+d)}let u=l&&s.g?s.g:null;return l&&(s.g=s[d]),((e,t,l,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=l?e+t.data:t.data+e)})(s[d],t,i,u),d},f=(e,t,l)=>e.reduce((e,r,n)=>{let a=t[n];if(a&&a.call){let e=a(l),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+r+(null==a?"":a)},"");function p(e){let t=this||{},r=e.call?e(t.p):e;return i(r.unshift?r.raw?f(r,[].slice.call(arguments,1),t.p):r.reduce((e,l)=>Object.assign(e,l&&l.call?l(t.p):l),{}):r,l(t.target),t.g,t.o,t.k)}let d,u,g,b=p.bind({g:1}),h=p.bind({k:1});e.css=p,e.extractCss=e=>{let t=l(e),r=t.data;return t.data="",r},e.glob=b,e.keyframes=h,e.setup=function(e,t,l,r){o.p=t,d=e,u=l,g=r},e.styled=function(e,t){let l=this||{};return function(){let r=arguments;function n(a,o){let s=Object.assign({},a),c=s.className||n.className;l.p=Object.assign({theme:u&&u()},s),l.o=/ *go\d+/.test(c),s.className=p.apply(l,r)+(c?" "+c:""),t&&(s.ref=o);let i=e;return e[0]&&(i=s.as||e,delete s.as),g&&i[0]&&g(s),d(i,s)}return t?t(n):n}}});
