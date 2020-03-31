function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,o){if(t){const i=c(t,e,n,o);return t[0](i)}}function c(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}function u(t){return null==t?"":t}const d="undefined"!=typeof window;let f=d?()=>window.performance.now():()=>Date.now(),p=d?t=>requestAnimationFrame(t):t;const h=new Set;function g(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&p(g)}function m(t){let e;return 0===h.size&&p(g),{promise:new Promise(n=>{h.add(e={c:t,f:n})}),abort(){h.delete(e)}}}function v(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function x(){return w(" ")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const j=new Set;let E,D=0;function C(t,e,n,o,i,s,r,l=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);a+=100*t+`%{${r(o,1-o)}}\n`}const u=a+`100% {${r(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,f=t.ownerDocument;j.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(b("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${i}ms 1 both`,D+=1,d}function F(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),D-=i,D||p(()=>{D||(j.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),j.clear())}))}function I(t){E=t}const O=[],S=[],B=[],A=[],T=Promise.resolve();let M=!1;function N(t){B.push(t)}function R(t){A.push(t)}let U=!1;const P=new Set;function q(){if(!U){U=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];I(e),z(e.$$)}for(O.length=0;S.length;)S.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];P.has(e)||(P.add(e),e())}B.length=0}while(O.length);for(;A.length;)A.pop()();M=!1,U=!1,P.clear()}}function z(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let L;function W(){return L||(L=Promise.resolve(),L.then(()=>{L=null})),L}function Y(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const G=new Set;let H;function J(){H={r:0,c:[],p:H}}function K(){H.r||i(H.c),H=H.p}function Q(t,e){t&&t.i&&(G.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push(()=>{G.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const X={duration:0};function Z(n,o,r,l){let c=o(n,r),a=l?0:1,u=null,d=null,p=null;function h(){p&&F(n,p)}function g(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:s=0,duration:r=300,easing:l=e,tick:v=t,css:$}=c||X,y={start:f()+s,b:o};o||(y.group=H,H.r+=1),u?d=y:($&&(h(),p=C(n,a,o,r,s,l,$)),o&&v(0,1),u=g(y,r),N(()=>Y(n,o,"start")),m(t=>{if(d&&t>d.start&&(u=g(d,r),d=null,Y(n,u.b,"start"),$&&(h(),p=C(n,a,u.b,u.duration,0,l,c.css))),u)if(t>=u.end)v(a=u.b,1-a),Y(n,u.b,"end"),d||(u.b?h():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*l(e/u.duration),v(a,1-a)}return!(!u&&!d)}))}return{run(t){s(c)?W().then(()=>{c=c(),v(t)}):v(t)},end(){h(),u=d=null}}}function tt(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function et(t){t&&t.c()}function nt(t,e,o){const{fragment:r,on_mount:l,on_destroy:c,after_update:a}=t.$$;r&&r.m(e,o),N(()=>{const e=l.map(n).filter(s);c?c.push(...e):i(e),t.$$.on_mount=[]}),a.forEach(N)}function ot(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(O.push(t),M||(M=!0,T.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,s,r,l,c,a=[-1]){const u=E;I(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a};let p=!1;if(f.ctx=s?s(e,d,(t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=i)&&(f.bound[t]&&f.bound[t](i),p&&it(e,t)),n}):[],f.update(),p=!0,i(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&Q(e.$$.fragment),nt(e,n.target,n.anchor),q()}I(u)}class rt{$destroy(){ot(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function lt(t){const e=t-1;return e*e*e+1}function ct(t,{delay:e=0,duration:n=400,easing:o=lt}){const i=getComputedStyle(t),s=+i.opacity,r=parseFloat(i.height),l=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),a=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),f=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*s};`+`height: ${t*r}px;`+`padding-top: ${t*l}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*a}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*d}px;`+`border-bottom-width: ${t*f}px;`}}function at(t,e,n){const o=t.slice();return o[24]=e[n],o[26]=n,o}function ut(t){let e,n,o,i;function s(e){t[20].call(null,e)}function r(e){t[21].call(null,e)}var l=t[0][t[1]];function c(t){let e={};return void 0!==t[3]&&(e.transitionIn=t[3]),void 0!==t[4]&&(e.transitionOut=t[4]),{props:e}}if(l){var a=new l(c(t));S.push(()=>tt(a,"transitionIn",s)),S.push(()=>tt(a,"transitionOut",r))}return{c(){a&&et(a.$$.fragment),o=w("")},m(t,e){a&&nt(a,t,e),$(t,o,e),i=!0},p(t,i){const u={};if(!e&&8&i&&(e=!0,u.transitionIn=t[3],R(()=>e=!1)),!n&&16&i&&(n=!0,u.transitionOut=t[4],R(()=>n=!1)),l!==(l=t[0][t[1]])){if(a){J();const t=a;V(t.$$.fragment,1,0,()=>{ot(t,1)}),K()}l?(a=new l(c(t)),S.push(()=>tt(a,"transitionIn",s)),S.push(()=>tt(a,"transitionOut",r)),et(a.$$.fragment),Q(a.$$.fragment,1),nt(a,o.parentNode,o)):a=null}else l&&a.$set(u)},i(t){i||(a&&Q(a.$$.fragment,t),i=!0)},o(t){a&&V(a.$$.fragment,t),i=!1},d(t){t&&y(o),a&&ot(a,t)}}}function dt(t){let e,n,o,i,s;function r(...e){return t[22](t[26],...e)}return{c(){e=b("li"),n=b("button"),i=x(),_(n,"class",o="svelte-fp-indicator-list-item-btn "+(t[1]===t[26]?"svelte-fp-active":"")+" svelte-1jw5ih0"),_(e,"class","svelte-fp-indicator-list-item svelte-1jw5ih0")},m(t,o,l){$(t,e,o),v(e,n),v(e,i),l&&s(),s=k(n,"click",r)},p(e,i){t=e,2&i&&o!==(o="svelte-fp-indicator-list-item-btn "+(t[1]===t[26]?"svelte-fp-active":"")+" svelte-1jw5ih0")&&_(n,"class",o)},d(t){t&&y(e),s()}}}function ft(t){let e,n,o,s,r,l,c,a,d,f,p,h,g,m,w,j,E,D=t[2]&&ut(t),C=t[0],F=[];for(let e=0;e<C.length;e+=1)F[e]=dt(at(t,C,e));return{c(){e=b("div"),n=b("div"),D&&D.c(),o=x(),s=b("div"),r=b("button"),r.textContent="appearUp",l=x(),c=b("button"),c.textContent="appearDown",a=x(),d=b("button"),d.textContent="disappearUp",f=x(),p=b("button"),p.textContent="disappearDown",h=x(),g=b("div"),m=b("ul");for(let t=0;t<F.length;t+=1)F[t].c();_(s,"class","svelte-fp-debug svelte-1jw5ih0"),_(m,"class","svelte-fp-indicator-list svelte-1jw5ih0"),_(g,"class","svelte-fp-indicator svelte-1jw5ih0"),_(n,"class","svelte-fp-container svelte-1jw5ih0"),_(e,"class",w=u(t[5])+" svelte-1jw5ih0")},m(u,y,b){$(u,e,y),v(e,n),D&&D.m(n,null),v(n,o),v(n,s),v(s,r),v(s,l),v(s,c),v(s,a),v(s,d),v(s,f),v(s,p),v(n,h),v(n,g),v(g,m);for(let t=0;t<F.length;t+=1)F[t].m(m,null);j=!0,b&&i(E),E=[k(window,"keydown",t[19]),k(r,"click",t[8]),k(c,"click",t[9]),k(d,"click",t[10]),k(p,"click",t[11]),k(e,"wheel",t[23])]},p(t,[e]){if(t[2]?D?(D.p(t,e),Q(D,1)):(D=ut(t),D.c(),Q(D,1),D.m(n,o)):D&&(J(),V(D,1,1,()=>{D=null}),K()),3&e){let n;for(C=t[0],n=0;n<C.length;n+=1){const o=at(t,C,n);F[n]?F[n].p(o,e):(F[n]=dt(o),F[n].c(),F[n].m(m,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=C.length}},i(t){j||(Q(D),j=!0)},o(t){V(D),j=!1},d(t){t&&y(e),D&&D.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(F,t),i(E)}}}function pt(t,e,n){let{class:o=""}=e,{pages:i=[]}=e,{animationDuration:s=750}=e,{arrows:r=!1}=e,l=`${o} svelte-fp-wrapper`,c=0,a=0,u=!0,d={duration:s,y:-100},f={duration:s,y:100};const p=t=>{let e=t.deltaY,n=(new Date).getTime();console.log(`${s} < ${n} - ${a}`),s<n-a&&(a=n,e<0?h():e>0&&g())},h=async()=>{c>0&&(b(),n(1,c--,c),v()),console.log("scroll up")},g=async()=>{c<i.length-1&&(y(),n(1,c++,c),$()),console.log("scroll down")},m=t=>{if(r)switch(console.log(t),t.key){case"arrowDown":g();break;case"arrowUp":h();break;default:console.log(t.key)}},v=()=>{n(3,d={duration:s,y:-200}),n(2,u=!0)},$=()=>{n(3,d={duration:s,y:200}),n(2,u=!0)},y=()=>{n(4,f={duration:s,y:200}),n(2,u=!1)},b=()=>{n(4,f={duration:s,y:-200}),n(2,u=!1)};return t.$set=t=>{"class"in t&&n(12,o=t.class),"pages"in t&&n(0,i=t.pages),"animationDuration"in t&&n(13,s=t.animationDuration),"arrows"in t&&n(14,r=t.arrows)},[i,c,u,d,f,l,p,m,v,$,y,b,o,s,r,a,()=>{n(2,u=!u)},h,g,t=>m(t),function(t){d=t,n(3,d)},function(t){f=t,n(4,f)},t=>n(1,c=t),t=>p(t)]}class ht extends rt{constructor(t){var e;super(),document.getElementById("svelte-1jw5ih0-style")||((e=b("style")).id="svelte-1jw5ih0-style",e.textContent=".svelte-fp-wrapper.svelte-1jw5ih0{height:100vh;overflow:hidden;left:0;right:0;top:0;bottom:0}.svelte-fp-container.svelte-1jw5ih0{height:inherit;width:inherit;position:relative}.svelte-fp-debug.svelte-1jw5ih0{height:100vh;overflow:hidden;position:absolute;left:0;right:0;top:0;bottom:0}.svelte-fp-indicator.svelte-1jw5ih0{height:inherit;width:5rem;overflow:hidden;position:absolute;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list.svelte-1jw5ih0{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-1jw5ih0{margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-1jw5ih0{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-1jw5ih0{background-color:#767676}@media only screen and (max-width: 600px){.svelte-fp-indicator.svelte-1jw5ih0{display:none}}",v(document.head,e)),st(this,t,pt,ft,r,{class:12,pages:0,animationDuration:13,arrows:14})}}function gt(n){let o,r,d,p,h;const g=n[6].default,v=l(g,n,n[5],null),w=v||{c:t,m:t,d:t};return{c(){o=b("section"),w&&w.c(),_(o,"class",r=u(n[2])+" svelte-3ygkbx")},m(t,e){$(t,o,e),w&&w.m(o,null),h=!0},p(t,[e]){v&&v.p&&32&e&&v.p(c(g,t,t[5],null),a(g,t[5],e,null)),(!h||4&e&&r!==(r=u(t[2])+" svelte-3ygkbx"))&&_(o,"class",r)},i(i){h||(Q(w,i),N(()=>{p&&p.end(1),d||(d=function(n,o,i){let r,l,c=o(n,i),a=!1,u=0;function d(){r&&F(n,r)}function p(){const{delay:o=0,duration:i=300,easing:s=e,tick:p=t,css:h}=c||X;h&&(r=C(n,0,1,i,o,s,h,u++)),p(0,1);const g=f()+o,v=g+i;l&&l.abort(),a=!0,N(()=>Y(n,!0,"start")),l=m(t=>{if(a){if(t>=v)return p(1,0),Y(n,!0,"end"),d(),a=!1;if(t>=g){const e=s((t-g)/i);p(e,1-e)}}return a})}let h=!1;return{start(){h||(F(n),s(c)?(c=c(),W().then(p)):p())},invalidate(){h=!1},end(){a&&(d(),a=!1)}}}(o,ct,n[0])),d.start()}),h=!0)},o(r){V(w,r),d&&d.invalidate(),p=function(n,o,r){let l,c=o(n,r),a=!0;const u=H;function d(){const{delay:o=0,duration:s=300,easing:r=e,tick:d=t,css:p}=c||X;p&&(l=C(n,1,0,s,o,r,p));const h=f()+o,g=h+s;N(()=>Y(n,!1,"start")),m(t=>{if(a){if(t>=g)return d(0,1),Y(n,!1,"end"),--u.r||i(u.c),!1;if(t>=h){const e=r((t-h)/s);d(1-e,e)}}return a})}return u.r+=1,s(c)?W().then(()=>{c=c(),d()}):d(),{end(t){t&&c.tick&&c.tick(1,0),a&&(l&&F(n,l),a=!1)}}}(o,ct,n[1]),h=!1},d(t){t&&y(o),w&&w.d(t),t&&p&&p.end()}}}function mt(t,e,n){let{class:o=""}=e,{center:i=!1}=e,{transitionIn:s={duration:750}}=e,{transitionOut:r={duration:750}}=e,l=`${o} svelte-fp-section`;i&&(l=`${l} svelte-fp-flexbox-center`);let{$$slots:c={},$$scope:a}=e;return t.$set=t=>{"class"in t&&n(3,o=t.class),"center"in t&&n(4,i=t.center),"transitionIn"in t&&n(0,s=t.transitionIn),"transitionOut"in t&&n(1,r=t.transitionOut),"$$scope"in t&&n(5,a=t.$$scope)},[s,r,l,o,i,a,c]}class vt extends rt{constructor(t){var e;super(),document.getElementById("svelte-3ygkbx-style")||((e=b("style")).id="svelte-3ygkbx-style",e.textContent="section.svelte-3ygkbx{height:inherit;position:relative}slot.svelte-3ygkbx{position:absolute}.svelte-fp-flexbox-center.svelte-3ygkbx{display:flex;justify-content:center;align-items:center}",v(document.head,e)),st(this,t,mt,gt,r,{class:3,center:4,transitionIn:0,transitionOut:1})}}function $t(t){let e,n,o,s;const r=t[15].default,d=l(r,t,t[14],null);return{c(){e=b("div"),d&&d.c(),_(e,"class",n=u(t[0])+" svelte-16f3vc6")},m(n,r,l){$(n,e,r),d&&d.m(e,null),o=!0,l&&i(s),s=[k(window,"keydown",t[16]),k(e,"wheel",t[17])]},p(t,[e]){d&&d.p&&16384&e&&d.p(c(r,t,t[14],null),a(r,t[14],e,null))},i(t){o||(Q(d,t),o=!0)},o(t){V(d,t),o=!1},d(t){t&&y(e),d&&d.d(t),i(s)}}}function yt(t,e,n){let{class:o=""}=e,{pages:i=[]}=e,{animationDuration:s=750}=e,{arrows:r=!1}=e,l=`${o} svelte-fp-wrapper`,c=0,a=0,u=!0,d={duration:s};const f=t=>{let e=t.deltaY,n=(new Date).getTime();console.log(`${s} < ${n} - ${a}`),s<n-a&&(a=n,e<0?h():e>0&&g())},p=()=>{u=!u},h=()=>{c>0&&c--,console.log("scroll up")},g=()=>{c<i.length-1&&(p(),c++,p()),console.log("scroll down")},m=t=>{if(r)switch(console.log(t),t.key){case"arrowDown":g();break;case"arrowUp":h();break;default:console.log(t.key)}};let{$$slots:v={},$$scope:$}=e;return t.$set=t=>{"class"in t&&n(3,o=t.class),"pages"in t&&n(4,i=t.pages),"animationDuration"in t&&n(5,s=t.animationDuration),"arrows"in t&&n(6,r=t.arrows),"$$scope"in t&&n(14,$=t.$$scope)},[l,f,m,o,i,s,r,c,a,u,d,p,h,g,$,v,t=>m(t),t=>f(t)]}class bt extends rt{constructor(t){var e;super(),document.getElementById("svelte-16f3vc6-style")||((e=b("style")).id="svelte-16f3vc6-style",e.textContent=".svelte-fp-wrapper.svelte-16f3vc6{height:100vh;overflow:hidden;left:0;right:0;top:0;bottom:0}",v(document.head,e)),st(this,t,yt,$t,r,{class:3,pages:4,animationDuration:5,arrows:6})}}function wt(e){let n,o,i,s;const r=e[5].default,d=l(r,e,e[4],null),f=d||{c:t,m:t,d:t};return{c(){n=b("section"),f&&f.c(),_(n,"class",o=u(e[1])+" svelte-3ygkbx"),n.hidden=!0},m(t,e){$(t,n,e),f&&f.m(n,null),s=!0},p(t,[e]){d&&d.p&&16&e&&d.p(c(r,t,t[4],null),a(r,t[4],e,null)),(!s||2&e&&o!==(o=u(t[1])+" svelte-3ygkbx"))&&_(n,"class",o)},i(t){s||(Q(f,t),N(()=>{i||(i=Z(n,ct,e[0],!0)),i.run(1)}),s=!0)},o(t){V(f,t),i||(i=Z(n,ct,e[0],!1)),i.run(0),s=!1},d(t){t&&y(n),f&&f.d(t),t&&i&&i.end()}}}function xt(t,e,n){let{class:o=""}=e,{center:i=!1}=e,{transition:s={duration:750}}=e,r=`${o} svelte-fp-section`;i&&(r=`${r} svelte-fp-flexbox-center`);let{$$slots:l={},$$scope:c}=e;return t.$set=t=>{"class"in t&&n(2,o=t.class),"center"in t&&n(3,i=t.center),"transition"in t&&n(0,s=t.transition),"$$scope"in t&&n(4,c=t.$$scope)},[s,r,o,i,c,l]}class kt extends rt{constructor(t){var e;super(),document.getElementById("svelte-3ygkbx-style")||((e=b("style")).id="svelte-3ygkbx-style",e.textContent="section.svelte-3ygkbx{height:inherit;position:relative}slot.svelte-3ygkbx{position:absolute}.svelte-fp-flexbox-center.svelte-3ygkbx{display:flex;justify-content:center;align-items:center}",v(document.head,e)),st(this,t,xt,wt,r,{class:2,center:3,transition:0})}}export{ht as Fullpage,bt as FullpageS,vt as FullpageSection,kt as FullpageSectionS};
