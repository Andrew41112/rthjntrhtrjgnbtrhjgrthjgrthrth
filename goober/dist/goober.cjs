let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,a=/\n+/g,s=(e,t)=>{let r="",l="",a="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+o+";":l+="f"==n[1]?s(o,n):n+"{"+s(o,"k"==n[1]?"":t)+"}":"object"==typeof o?l+=s(o,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=s.p?s.p(n,o):n+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+l},n={},o=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+o(e[r]);return t}return e},c=(e,t,c,p,i)=>{let u=o(e),d=n[u]||(n[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!n[d]){let t=u!==e?e:(e=>{let t,s,n=[{}];for(;t=r.exec(e.replace(l,""));)t[4]?n.shift():t[3]?(s=t[3].replace(a," ").trim(),n.unshift(n[0][s]=n[0][s]||{})):n[0][t[1]]=t[2].replace(a," ").trim();return n[0]})(e);n[d]=s(i?{["@keyframes "+d]:t}:t,c?"":"."+d)}let f=c&&n.g?n.g:null;return c&&(n.g=n[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(n[d],t,p,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":s(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"");function i(e){let r=this||{},l=e.call?e(r.p):e;return c(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let u,d,f,g=i.bind({g:1}),b=i.bind({k:1});exports.css=i,exports.extractCss=e=>{let r=t(e),l=r.data;return r.data="",l},exports.glob=g,exports.keyframes=b,exports.setup=function(e,t,r,l){s.p=t,u=e,d=r,f=l},exports.styled=function(e,t){let r=this||{};return function(){let l=arguments;function a(s,n){let o=Object.assign({},s),c=o.className||a.className;r.p=Object.assign({theme:d&&d()},o),r.o=/ *go\d+/.test(c),o.className=i.apply(r,l)+(c?" "+c:""),t&&(o.ref=n);let p=e;return e[0]&&(p=o.as||e,delete o.as),f&&p[0]&&f(o),u(p,o)}return t?t(a):a}};
