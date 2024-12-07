import{r as g,j as A,P as nt,a as ee,y as Xe,h as Rt,i as qe,u as vt,o as Ge,b as Ke,e as st,f as ne,k as Ue,m as Ze,S as Je,l as Qe,F as tn,D as en,p as nn,d as on,n as rn}from"./index-CI2e3cps.js";var sn="Label",oe=g.forwardRef((t,e)=>A.jsx(nt.label,{...t,ref:e,onMouseDown:n=>{var r;n.target.closest("button, input, select, textarea")||((r=t.onMouseDown)==null||r.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));oe.displayName=sn;var re=oe;const cn=Xe("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),an=g.forwardRef(({className:t,...e},n)=>A.jsx(re,{ref:n,className:ee(cn(),t),...e}));an.displayName=re.displayName;function ln(t){const[e,n]=g.useState(void 0);return Rt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,c;if("borderBoxSize"in i){const a=i.borderBoxSize,l=Array.isArray(a)?a[0]:a;s=l.inlineSize,c=l.blockSize}else s=t.offsetWidth,c=t.offsetHeight;n({width:s,height:c})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}const fn=["top","right","bottom","left"],G=Math.min,F=Math.max,mt=Math.round,pt=Math.floor,I=t=>({x:t,y:t}),un={left:"right",right:"left",bottom:"top",top:"bottom"},dn={start:"end",end:"start"};function Ot(t,e,n){return F(t,G(e,n))}function X(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function ot(t){return t.split("-")[1]}function Dt(t){return t==="x"?"y":"x"}function Mt(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(q(t))?"y":"x"}function _t(t){return Dt(K(t))}function pn(t,e,n){n===void 0&&(n=!1);const o=ot(t),r=_t(t),i=Mt(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=gt(s)),[s,gt(s)]}function hn(t){const e=gt(t);return[St(t),e,St(e)]}function St(t){return t.replace(/start|end/g,e=>dn[e])}function mn(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}function gn(t,e,n,o){const r=ot(t);let i=mn(q(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(St)))),i}function gt(t){return t.replace(/left|right|bottom|top/g,e=>un[e])}function xn(t){return{top:0,right:0,bottom:0,left:0,...t}}function ie(t){return typeof t!="number"?xn(t):{top:t,right:t,bottom:t,left:t}}function xt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function qt(t,e,n){let{reference:o,floating:r}=t;const i=K(e),s=_t(e),c=Mt(s),a=q(e),l=i==="y",u=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let d;switch(a){case"top":d={x:u,y:o.y-r.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-r.width,y:f};break;default:d={x:o.x,y:o.y}}switch(ot(e)){case"start":d[s]-=p*(n&&l?-1:1);break;case"end":d[s]+=p*(n&&l?-1:1);break}return d}const wn=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:f}=qt(l,o,a),p=o,d={},h=0;for(let m=0;m<c.length;m++){const{name:w,fn:x}=c[m],{x:v,y:P,data:y,reset:b}=await x({x:u,y:f,initialPlacement:o,placement:p,strategy:r,middlewareData:d,rects:l,platform:s,elements:{reference:t,floating:e}});u=v??u,f=P??f,d={...d,[w]:{...d[w],...y}},b&&h<=50&&(h++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(l=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:u,y:f}=qt(l,p,a)),m=-1)}return{x:u,y:f,placement:p,strategy:r,middlewareData:d}};async function ct(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:d=0}=X(e,t),h=ie(d),w=c[p?f==="floating"?"reference":"floating":f],x=xt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:l,rootBoundary:u,strategy:a})),v=f==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,P=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),y=await(i.isElement==null?void 0:i.isElement(P))?await(i.getScale==null?void 0:i.getScale(P))||{x:1,y:1}:{x:1,y:1},b=xt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:P,strategy:a}):v);return{top:(x.top-b.top+h.top)/y.y,bottom:(b.bottom-x.bottom+h.bottom)/y.y,left:(x.left-b.left+h.left)/y.x,right:(b.right-x.right+h.right)/y.x}}const vn=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:u=0}=X(t,e)||{};if(l==null)return{};const f=ie(u),p={x:n,y:o},d=_t(r),h=Mt(d),m=await s.getDimensions(l),w=d==="y",x=w?"top":"left",v=w?"bottom":"right",P=w?"clientHeight":"clientWidth",y=i.reference[h]+i.reference[d]-p[d]-i.floating[h],b=p[d]-i.reference[d],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let S=R?R[P]:0;(!S||!await(s.isElement==null?void 0:s.isElement(R)))&&(S=c.floating[P]||i.floating[h]);const _=y/2-b/2,k=S/2-m[h]/2-1,N=G(f[x],k),$=G(f[v],k),L=N,E=S-m[h]-$,O=S/2-m[h]/2+_,H=Ot(L,O,E),D=!a.arrow&&ot(r)!=null&&O!==H&&i.reference[h]/2-(O<L?N:$)-m[h]/2<0,M=D?O<L?O-L:O-E:0;return{[d]:p[d]+M,data:{[d]:H,centerOffset:O-H-M,...D&&{alignmentOffset:M}},reset:D}}}),yn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...w}=X(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const x=q(r),v=K(c),P=q(c)===c,y=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=p||(P||!m?[gt(c)]:hn(c)),R=h!=="none";!p&&R&&b.push(...gn(c,m,h,y));const S=[c,...b],_=await ct(e,w),k=[];let N=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&k.push(_[x]),f){const O=pn(r,s,y);k.push(_[O[0]],_[O[1]])}if(N=[...N,{placement:r,overflows:k}],!k.every(O=>O<=0)){var $,L;const O=((($=i.flip)==null?void 0:$.index)||0)+1,H=S[O];if(H)return{data:{index:O,overflows:N},reset:{placement:H}};let D=(L=N.filter(M=>M.overflows[0]<=0).sort((M,C)=>M.overflows[1]-C.overflows[1])[0])==null?void 0:L.placement;if(!D)switch(d){case"bestFit":{var E;const M=(E=N.filter(C=>{if(R){const T=K(C.placement);return T===v||T==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(T=>T>0).reduce((T,B)=>T+B,0)]).sort((C,T)=>C[1]-T[1])[0])==null?void 0:E[0];M&&(D=M);break}case"initialPlacement":D=c;break}if(r!==D)return{reset:{placement:D}}}return{}}}};function Gt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Kt(t){return fn.some(e=>t[e]>=0)}const bn=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=X(t,e);switch(o){case"referenceHidden":{const i=await ct(e,{...r,elementContext:"reference"}),s=Gt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Kt(s)}}}case"escaped":{const i=await ct(e,{...r,altBoundary:!0}),s=Gt(i,n.floating);return{data:{escapedOffsets:s,escaped:Kt(s)}}}default:return{}}}}};async function Pn(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=q(n),c=ot(n),a=K(n)==="y",l=["left","top"].includes(s)?-1:1,u=i&&a?-1:1,f=X(e,t);let{mainAxis:p,crossAxis:d,alignmentAxis:h}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&typeof h=="number"&&(d=c==="end"?h*-1:h),a?{x:d*u,y:p*l}:{x:p*l,y:d*u}}const An=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=e,a=await Pn(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:s}}}}},Cn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x,y:v}=w;return{x,y:v}}},...a}=X(t,e),l={x:n,y:o},u=await ct(e,a),f=K(q(r)),p=Dt(f);let d=l[p],h=l[f];if(i){const w=p==="y"?"top":"left",x=p==="y"?"bottom":"right",v=d+u[w],P=d-u[x];d=Ot(v,d,P)}if(s){const w=f==="y"?"top":"left",x=f==="y"?"bottom":"right",v=h+u[w],P=h-u[x];h=Ot(v,h,P)}const m=c.fn({...e,[p]:d,[f]:h});return{...m,data:{x:m.x-n,y:m.y-o,enabled:{[p]:i,[f]:s}}}}}},Rn=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:c=0,mainAxis:a=!0,crossAxis:l=!0}=X(t,e),u={x:n,y:o},f=K(r),p=Dt(f);let d=u[p],h=u[f];const m=X(c,e),w=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(a){const P=p==="y"?"height":"width",y=i.reference[p]-i.floating[P]+w.mainAxis,b=i.reference[p]+i.reference[P]-w.mainAxis;d<y?d=y:d>b&&(d=b)}if(l){var x,v;const P=p==="y"?"width":"height",y=["top","left"].includes(q(r)),b=i.reference[f]-i.floating[P]+(y&&((x=s.offset)==null?void 0:x[f])||0)+(y?0:w.crossAxis),R=i.reference[f]+i.reference[P]+(y?0:((v=s.offset)==null?void 0:v[f])||0)-(y?w.crossAxis:0);h<b?h=b:h>R&&(h=R)}return{[p]:d,[f]:h}}}},On=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:i,platform:s,elements:c}=e,{apply:a=()=>{},...l}=X(t,e),u=await ct(e,l),f=q(r),p=ot(r),d=K(r)==="y",{width:h,height:m}=i.floating;let w,x;f==="top"||f==="bottom"?(w=f,x=p===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(x=f,w=p==="end"?"top":"bottom");const v=m-u.top-u.bottom,P=h-u.left-u.right,y=G(m-u[w],v),b=G(h-u[x],P),R=!e.middlewareData.shift;let S=y,_=b;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(_=P),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(S=v),R&&!p){const N=F(u.left,0),$=F(u.right,0),L=F(u.top,0),E=F(u.bottom,0);d?_=h-2*(N!==0||$!==0?N+$:F(u.left,u.right)):S=m-2*(L!==0||E!==0?L+E:F(u.top,u.bottom))}await a({...e,availableWidth:_,availableHeight:S});const k=await s.getDimensions(c.floating);return h!==k.width||m!==k.height?{reset:{rects:!0}}:{}}}};function yt(){return typeof window<"u"}function rt(t){return se(t)?(t.nodeName||"").toLowerCase():"#document"}function j(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(se(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function se(t){return yt()?t instanceof Node||t instanceof j(t).Node:!1}function W(t){return yt()?t instanceof Element||t instanceof j(t).Element:!1}function V(t){return yt()?t instanceof HTMLElement||t instanceof j(t).HTMLElement:!1}function Ut(t){return!yt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof j(t).ShadowRoot}function lt(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=z(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function Sn(t){return["table","td","th"].includes(rt(t))}function bt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Nt(t){const e=Tt(),n=W(t)?z(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function En(t){let e=U(t);for(;V(e)&&!tt(e);){if(Nt(e))return e;if(bt(e))return null;e=U(e)}return null}function Tt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(rt(t))}function z(t){return j(t).getComputedStyle(t)}function Pt(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function U(t){if(rt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ut(t)&&t.host||Y(t);return Ut(e)?e.host:e}function ce(t){const e=U(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&lt(e)?e:ce(e)}function at(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=ce(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=j(r);if(i){const c=Et(s);return e.concat(s,s.visualViewport||[],lt(r)?r:[],c&&n?at(c):[])}return e.concat(r,at(r,[],n))}function Et(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ae(t){const e=z(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=V(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,c=mt(n)!==i||mt(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function $t(t){return W(t)?t:t.contextElement}function Q(t){const e=$t(t);if(!V(e))return I(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=ae(e);let s=(i?mt(n.width):n.width)/o,c=(i?mt(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Dn=I(0);function le(t){const e=j(t);return!Tt()||!e.visualViewport?Dn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Mn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==j(t)?!1:e}function J(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=$t(t);let s=I(1);e&&(o?W(o)&&(s=Q(o)):s=Q(t));const c=Mn(i,n,o)?le(i):I(0);let a=(r.left+c.x)/s.x,l=(r.top+c.y)/s.y,u=r.width/s.x,f=r.height/s.y;if(i){const p=j(i),d=o&&W(o)?j(o):o;let h=p,m=Et(h);for(;m&&o&&d!==h;){const w=Q(m),x=m.getBoundingClientRect(),v=z(m),P=x.left+(m.clientLeft+parseFloat(v.paddingLeft))*w.x,y=x.top+(m.clientTop+parseFloat(v.paddingTop))*w.y;a*=w.x,l*=w.y,u*=w.x,f*=w.y,a+=P,l+=y,h=j(m),m=Et(h)}}return xt({width:u,height:f,x:a,y:l})}function Lt(t,e){const n=Pt(t).scrollLeft;return e?e.left+n:J(Y(t)).left+n}function fe(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(n?0:Lt(t,o)),i=o.top+e.scrollTop;return{x:r,y:i}}function _n(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=Y(o),c=e?bt(e.floating):!1;if(o===s||c&&i)return n;let a={scrollLeft:0,scrollTop:0},l=I(1);const u=I(0),f=V(o);if((f||!f&&!i)&&((rt(o)!=="body"||lt(s))&&(a=Pt(o)),V(o))){const d=J(o);l=Q(o),u.x=d.x+o.clientLeft,u.y=d.y+o.clientTop}const p=s&&!f&&!i?fe(s,a,!0):I(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+u.x+p.x,y:n.y*l.y-a.scrollTop*l.y+u.y+p.y}}function Nn(t){return Array.from(t.getClientRects())}function Tn(t){const e=Y(t),n=Pt(t),o=t.ownerDocument.body,r=F(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=F(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Lt(t);const c=-n.scrollTop;return z(o).direction==="rtl"&&(s+=F(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function $n(t,e){const n=j(t),o=Y(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,a=0;if(r){i=r.width,s=r.height;const l=Tt();(!l||l&&e==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:c,y:a}}function Ln(t,e){const n=J(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=V(t)?Q(t):I(1),s=t.clientWidth*i.x,c=t.clientHeight*i.y,a=r*i.x,l=o*i.y;return{width:s,height:c,x:a,y:l}}function Zt(t,e,n){let o;if(e==="viewport")o=$n(t,n);else if(e==="document")o=Tn(Y(t));else if(W(e))o=Ln(e,n);else{const r=le(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return xt(o)}function ue(t,e){const n=U(t);return n===e||!W(n)||tt(n)?!1:z(n).position==="fixed"||ue(n,e)}function kn(t,e){const n=e.get(t);if(n)return n;let o=at(t,[],!1).filter(c=>W(c)&&rt(c)!=="body"),r=null;const i=z(t).position==="fixed";let s=i?U(t):t;for(;W(s)&&!tt(s);){const c=z(s),a=Nt(s);!a&&c.position==="fixed"&&(r=null),(i?!a&&!r:!a&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||lt(s)&&!a&&ue(t,s))?o=o.filter(u=>u!==s):r=c,s=U(s)}return e.set(t,o),o}function Fn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?bt(e)?[]:kn(e,this._c):[].concat(n),o],c=s[0],a=s.reduce((l,u)=>{const f=Zt(e,u,r);return l.top=F(f.top,l.top),l.right=G(f.right,l.right),l.bottom=G(f.bottom,l.bottom),l.left=F(f.left,l.left),l},Zt(e,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function jn(t){const{width:e,height:n}=ae(t);return{width:e,height:n}}function Hn(t,e,n){const o=V(e),r=Y(e),i=n==="fixed",s=J(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const a=I(0);if(o||!o&&!i)if((rt(e)!=="body"||lt(r))&&(c=Pt(e)),o){const p=J(e,!0,i,e);a.x=p.x+e.clientLeft,a.y=p.y+e.clientTop}else r&&(a.x=Lt(r));const l=r&&!o&&!i?fe(r,c):I(0),u=s.left+c.scrollLeft-a.x-l.x,f=s.top+c.scrollTop-a.y-l.y;return{x:u,y:f,width:s.width,height:s.height}}function At(t){return z(t).position==="static"}function Jt(t,e){if(!V(t)||z(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Y(t)===n&&(n=n.ownerDocument.body),n}function de(t,e){const n=j(t);if(bt(t))return n;if(!V(t)){let r=U(t);for(;r&&!tt(r);){if(W(r)&&!At(r))return r;r=U(r)}return n}let o=Jt(t,e);for(;o&&Sn(o)&&At(o);)o=Jt(o,e);return o&&tt(o)&&At(o)&&!Nt(o)?n:o||En(t)||n}const Wn=async function(t){const e=this.getOffsetParent||de,n=this.getDimensions,o=await n(t.floating);return{reference:Hn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function zn(t){return z(t).direction==="rtl"}const Bn={convertOffsetParentRelativeRectToViewportRelativeRect:_n,getDocumentElement:Y,getClippingRect:Fn,getOffsetParent:de,getElementRects:Wn,getClientRects:Nn,getDimensions:jn,getScale:Q,isElement:W,isRTL:zn};function In(t,e){let n=null,o;const r=Y(t);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),i();const{left:l,top:u,width:f,height:p}=t.getBoundingClientRect();if(c||e(),!f||!p)return;const d=pt(u),h=pt(r.clientWidth-(l+f)),m=pt(r.clientHeight-(u+p)),w=pt(l),v={rootMargin:-d+"px "+-h+"px "+-m+"px "+-w+"px",threshold:F(0,G(1,a))||1};let P=!0;function y(b){const R=b[0].intersectionRatio;if(R!==a){if(!P)return s();R?s(!1,R):o=setTimeout(()=>{s(!1,1e-7)},1e3)}P=!1}try{n=new IntersectionObserver(y,{...v,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,v)}n.observe(t)}return s(!0),i}function Vn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=$t(t),u=r||i?[...l?at(l):[],...at(e)]:[];u.forEach(x=>{r&&x.addEventListener("scroll",n,{passive:!0}),i&&x.addEventListener("resize",n)});const f=l&&c?In(l,n):null;let p=-1,d=null;s&&(d=new ResizeObserver(x=>{let[v]=x;v&&v.target===l&&d&&(d.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var P;(P=d)==null||P.observe(e)})),n()}),l&&!a&&d.observe(l),d.observe(e));let h,m=a?J(t):null;a&&w();function w(){const x=J(t);m&&(x.x!==m.x||x.y!==m.y||x.width!==m.width||x.height!==m.height)&&n(),m=x,h=requestAnimationFrame(w)}return n(),()=>{var x;u.forEach(v=>{r&&v.removeEventListener("scroll",n),i&&v.removeEventListener("resize",n)}),f==null||f(),(x=d)==null||x.disconnect(),d=null,a&&cancelAnimationFrame(h)}}const Yn=An,Xn=Cn,qn=yn,Gn=On,Kn=bn,Qt=vn,Un=Rn,Zn=(t,e,n)=>{const o=new Map,r={platform:Bn,...n},i={...r.platform,_c:o};return wn(t,e,{...r,platform:i})};var ht=typeof document<"u"?g.useLayoutEffect:g.useEffect;function wt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!wt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!wt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function pe(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function te(t,e){const n=pe(t);return Math.round(e*n)/n}function Ct(t){const e=g.useRef(t);return ht(()=>{e.current=t}),e}function Jn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:a,open:l}=t,[u,f]=g.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,d]=g.useState(o);wt(p,o)||d(o);const[h,m]=g.useState(null),[w,x]=g.useState(null),v=g.useCallback(C=>{C!==R.current&&(R.current=C,m(C))},[]),P=g.useCallback(C=>{C!==S.current&&(S.current=C,x(C))},[]),y=i||h,b=s||w,R=g.useRef(null),S=g.useRef(null),_=g.useRef(u),k=a!=null,N=Ct(a),$=Ct(r),L=Ct(l),E=g.useCallback(()=>{if(!R.current||!S.current)return;const C={placement:e,strategy:n,middleware:p};$.current&&(C.platform=$.current),Zn(R.current,S.current,C).then(T=>{const B={...T,isPositioned:L.current!==!1};O.current&&!wt(_.current,B)&&(_.current=B,qe.flushSync(()=>{f(B)}))})},[p,e,n,$,L]);ht(()=>{l===!1&&_.current.isPositioned&&(_.current.isPositioned=!1,f(C=>({...C,isPositioned:!1})))},[l]);const O=g.useRef(!1);ht(()=>(O.current=!0,()=>{O.current=!1}),[]),ht(()=>{if(y&&(R.current=y),b&&(S.current=b),y&&b){if(N.current)return N.current(y,b,E);E()}},[y,b,E,N,k]);const H=g.useMemo(()=>({reference:R,floating:S,setReference:v,setFloating:P}),[v,P]),D=g.useMemo(()=>({reference:y,floating:b}),[y,b]),M=g.useMemo(()=>{const C={position:n,left:0,top:0};if(!D.floating)return C;const T=te(D.floating,u.x),B=te(D.floating,u.y);return c?{...C,transform:"translate("+T+"px, "+B+"px)",...pe(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:T,top:B}},[n,c,D.floating,u.x,u.y]);return g.useMemo(()=>({...u,update:E,refs:H,elements:D,floatingStyles:M}),[u,E,H,D,M])}const Qn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Qt({element:o.current,padding:r}).fn(n):{}:o?Qt({element:o,padding:r}).fn(n):{}}}},to=(t,e)=>({...Yn(t),options:[t,e]}),eo=(t,e)=>({...Xn(t),options:[t,e]}),no=(t,e)=>({...Un(t),options:[t,e]}),oo=(t,e)=>({...qn(t),options:[t,e]}),ro=(t,e)=>({...Gn(t),options:[t,e]}),io=(t,e)=>({...Kn(t),options:[t,e]}),so=(t,e)=>({...Qn(t),options:[t,e]});var co="Arrow",he=g.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return A.jsx(nt.svg,{...i,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:A.jsx("polygon",{points:"0,0 30,0 15,10"})})});he.displayName=co;var ao=he;function lo(t,e=[]){let n=[];function o(i,s){const c=g.createContext(s),a=n.length;n=[...n,s];function l(f){const{scope:p,children:d,...h}=f,m=(p==null?void 0:p[t][a])||c,w=g.useMemo(()=>h,Object.values(h));return A.jsx(m.Provider,{value:w,children:d})}function u(f,p){const d=(p==null?void 0:p[t][a])||c,h=g.useContext(d);if(h)return h;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${i}\``)}return l.displayName=i+"Provider",[l,u]}const r=()=>{const i=n.map(s=>g.createContext(s));return function(c){const a=(c==null?void 0:c[t])||i;return g.useMemo(()=>({[`__scope${t}`]:{...c,[t]:a}}),[c,a])}};return r.scopeName=t,[o,fo(r,...e)]}function fo(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const o=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const s=o.reduce((c,{useScope:a,scopeName:l})=>{const f=a(i)[`__scope${l}`];return{...c,...f}},{});return g.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var kt="Popper",[me,ge]=lo(kt),[uo,xe]=me(kt),we=t=>{const{__scopePopper:e,children:n}=t,[o,r]=g.useState(null);return A.jsx(uo,{scope:e,anchor:o,onAnchorChange:r,children:n})};we.displayName=kt;var ve="PopperAnchor",ye=g.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=xe(ve,n),s=g.useRef(null),c=vt(e,s);return g.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:A.jsx(nt.div,{...r,ref:c})});ye.displayName=ve;var Ft="PopperContent",[po,ho]=me(Ft),be=g.forwardRef((t,e)=>{var Wt,zt,Bt,It,Vt,Yt;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:a=!0,collisionBoundary:l=[],collisionPadding:u=0,sticky:f="partial",hideWhenDetached:p=!1,updatePositionStrategy:d="optimized",onPlaced:h,...m}=t,w=xe(Ft,n),[x,v]=g.useState(null),P=vt(e,it=>v(it)),[y,b]=g.useState(null),R=ln(y),S=(R==null?void 0:R.width)??0,_=(R==null?void 0:R.height)??0,k=o+(i!=="center"?"-"+i:""),N=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},$=Array.isArray(l)?l:[l],L=$.length>0,E={padding:N,boundary:$.filter(go),altBoundary:L},{refs:O,floatingStyles:H,placement:D,isPositioned:M,middlewareData:C}=Jn({strategy:"fixed",placement:k,whileElementsMounted:(...it)=>Vn(...it,{animationFrame:d==="always"}),elements:{reference:w.anchor},middleware:[to({mainAxis:r+_,alignmentAxis:s}),a&&eo({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?no():void 0,...E}),a&&oo({...E}),ro({...E,apply:({elements:it,rects:Xt,availableWidth:Be,availableHeight:Ie})=>{const{width:Ve,height:Ye}=Xt.reference,dt=it.floating.style;dt.setProperty("--radix-popper-available-width",`${Be}px`),dt.setProperty("--radix-popper-available-height",`${Ie}px`),dt.setProperty("--radix-popper-anchor-width",`${Ve}px`),dt.setProperty("--radix-popper-anchor-height",`${Ye}px`)}}),y&&so({element:y,padding:c}),xo({arrowWidth:S,arrowHeight:_}),p&&io({strategy:"referenceHidden",...E})]}),[T,B]=Ce(D),ut=Ge(h);Rt(()=>{M&&(ut==null||ut())},[M,ut]);const Fe=(Wt=C.arrow)==null?void 0:Wt.x,je=(zt=C.arrow)==null?void 0:zt.y,He=((Bt=C.arrow)==null?void 0:Bt.centerOffset)!==0,[We,ze]=g.useState();return Rt(()=>{x&&ze(window.getComputedStyle(x).zIndex)},[x]),A.jsx("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...H,transform:M?H.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:We,"--radix-popper-transform-origin":[(It=C.transformOrigin)==null?void 0:It.x,(Vt=C.transformOrigin)==null?void 0:Vt.y].join(" "),...((Yt=C.hide)==null?void 0:Yt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:A.jsx(po,{scope:n,placedSide:T,onArrowChange:b,arrowX:Fe,arrowY:je,shouldHideArrow:He,children:A.jsx(nt.div,{"data-side":T,"data-align":B,...m,ref:P,style:{...m.style,animation:M?void 0:"none"}})})})});be.displayName=Ft;var Pe="PopperArrow",mo={top:"bottom",right:"left",bottom:"top",left:"right"},Ae=g.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=ho(Pe,o),s=mo[i.placedSide];return A.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:A.jsx(ao,{...r,ref:n,style:{...r.style,display:"block"}})})});Ae.displayName=Pe;function go(t){return t!==null}var xo=t=>({name:"transformOrigin",options:t,fn(e){var w,x,v;const{placement:n,rects:o,middlewareData:r}=e,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,c=s?0:t.arrowWidth,a=s?0:t.arrowHeight,[l,u]=Ce(n),f={start:"0%",center:"50%",end:"100%"}[u],p=(((x=r.arrow)==null?void 0:x.x)??0)+c/2,d=(((v=r.arrow)==null?void 0:v.y)??0)+a/2;let h="",m="";return l==="bottom"?(h=s?f:`${p}px`,m=`${-a}px`):l==="top"?(h=s?f:`${p}px`,m=`${o.floating.height+a}px`):l==="right"?(h=`${-a}px`,m=s?f:`${d}px`):l==="left"&&(h=`${o.floating.width+a}px`,m=s?f:`${d}px`),{data:{x:h,y:m}}}});function Ce(t){const[e,n="center"]=t.split("-");return[e,n]}var wo=we,Re=ye,vo=be,yo=Ae,jt="Popover",[Oe,Lo]=Ke(jt,[ge]),ft=ge(),[bo,Z]=Oe(jt),Se=t=>{const{__scopePopover:e,children:n,open:o,defaultOpen:r,onOpenChange:i,modal:s=!1}=t,c=ft(e),a=g.useRef(null),[l,u]=g.useState(!1),[f=!1,p]=on({prop:o,defaultProp:r,onChange:i});return A.jsx(wo,{...c,children:A.jsx(bo,{scope:e,contentId:rn(),triggerRef:a,open:f,onOpenChange:p,onOpenToggle:g.useCallback(()=>p(d=>!d),[p]),hasCustomAnchor:l,onCustomAnchorAdd:g.useCallback(()=>u(!0),[]),onCustomAnchorRemove:g.useCallback(()=>u(!1),[]),modal:s,children:n})})};Se.displayName=jt;var Ee="PopoverAnchor",Po=g.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=Z(Ee,n),i=ft(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:c}=r;return g.useEffect(()=>(s(),()=>c()),[s,c]),A.jsx(Re,{...i,...o,ref:e})});Po.displayName=Ee;var De="PopoverTrigger",Me=g.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=Z(De,n),i=ft(n),s=vt(e,r.triggerRef),c=A.jsx(nt.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":Le(r.open),...o,ref:s,onClick:st(t.onClick,r.onOpenToggle)});return r.hasCustomAnchor?c:A.jsx(Re,{asChild:!0,...i,children:c})});Me.displayName=De;var Ht="PopoverPortal",[Ao,Co]=Oe(Ht,{forceMount:void 0}),_e=t=>{const{__scopePopover:e,forceMount:n,children:o,container:r}=t,i=Z(Ht,e);return A.jsx(Ao,{scope:e,forceMount:n,children:A.jsx(ne,{present:n||i.open,children:A.jsx(nn,{asChild:!0,container:r,children:o})})})};_e.displayName=Ht;var et="PopoverContent",Ne=g.forwardRef((t,e)=>{const n=Co(et,t.__scopePopover),{forceMount:o=n.forceMount,...r}=t,i=Z(et,t.__scopePopover);return A.jsx(ne,{present:o||i.open,children:i.modal?A.jsx(Ro,{...r,ref:e}):A.jsx(Oo,{...r,ref:e})})});Ne.displayName=et;var Ro=g.forwardRef((t,e)=>{const n=Z(et,t.__scopePopover),o=g.useRef(null),r=vt(e,o),i=g.useRef(!1);return g.useEffect(()=>{const s=o.current;if(s)return Ue(s)},[]),A.jsx(Ze,{as:Je,allowPinchZoom:!0,children:A.jsx(Te,{...t,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:st(t.onCloseAutoFocus,s=>{var c;s.preventDefault(),i.current||(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:st(t.onPointerDownOutside,s=>{const c=s.detail.originalEvent,a=c.button===0&&c.ctrlKey===!0,l=c.button===2||a;i.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:st(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),Oo=g.forwardRef((t,e)=>{const n=Z(et,t.__scopePopover),o=g.useRef(!1),r=g.useRef(!1);return A.jsx(Te,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var s,c;(s=t.onCloseAutoFocus)==null||s.call(t,i),i.defaultPrevented||(o.current||(c=n.triggerRef.current)==null||c.focus(),i.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:i=>{var a,l;(a=t.onInteractOutside)==null||a.call(t,i),i.defaultPrevented||(o.current=!0,i.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const s=i.target;((l=n.triggerRef.current)==null?void 0:l.contains(s))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&r.current&&i.preventDefault()}})}),Te=g.forwardRef((t,e)=>{const{__scopePopover:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:i,disableOutsidePointerEvents:s,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:u,...f}=t,p=Z(et,n),d=ft(n);return Qe(),A.jsx(tn,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:i,children:A.jsx(en,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:u,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:l,onDismiss:()=>p.onOpenChange(!1),children:A.jsx(vo,{"data-state":Le(p.open),role:"dialog",id:p.contentId,...d,...f,ref:e,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),$e="PopoverClose",So=g.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=Z($e,n);return A.jsx(nt.button,{type:"button",...o,ref:e,onClick:st(t.onClick,()=>r.onOpenChange(!1))})});So.displayName=$e;var Eo="PopoverArrow",Do=g.forwardRef((t,e)=>{const{__scopePopover:n,...o}=t,r=ft(n);return A.jsx(yo,{...r,...o,ref:e})});Do.displayName=Eo;function Le(t){return t?"open":"closed"}var Mo=Se,_o=Me,No=_e,ke=Ne;const ko=Mo,Fo=_o,To=g.forwardRef(({className:t,align:e="center",sideOffset:n=4,...o},r)=>A.jsx(No,{children:A.jsx(ke,{ref:r,align:e,sideOffset:n,className:ee("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...o})}));To.displayName=ke.displayName;export{Re as A,vo as C,an as L,ko as P,wo as R,yo as a,Fo as b,ge as c,To as d,ln as u};
