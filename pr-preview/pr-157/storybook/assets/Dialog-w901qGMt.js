import{$ as gt}from"./Button-CSKZEJUE.js";import{w as se,s as xt,G as ht,j as K,a as Et,k as Ee,R as wt,D as re,b as we,$ as yt,v as Ct,t as ce,n as ie,c as ye,S as Pt,T as St,f as Ce,y as Pe,z as de}from"./useFocusable-CUvAewCR.js";import{a as Tt}from"./RSPContexts-Djf1EgA4.js";import{r as m,R as y}from"./index-ClcD9ViR.js";import{a as Rt,$ as Lt}from"./PressResponder-BlG14Tb7.js";import{a as Ot,$ as Dt}from"./useControlledState-DFHhQ_7Z.js";import{c as It,a as Mt}from"./FocusScope-Do-PkUts.js";import{F as Ht}from"./index-ZuzByk-F.js";import{b as At}from"./Hidden-CB9z-rbJ.js";import{$ as Nt}from"./context-C9cAOQ0o.js";import{a as Se}from"./useCollator-ZDMRt11h.js";import{$ as _t}from"./useLocalizedStringFormatter-Dv05nzCb.js";import{a as Ft}from"./VisuallyHidden-CU0vF0eT.js";function zt(){return typeof window.ResizeObserver<"u"}function ue(e){const{ref:t,box:r,onResize:o}=e;m.useEffect(()=>{let n=t==null?void 0:t.current;if(n)if(zt()){const l=new window.ResizeObserver(d=>{d.length&&o()});return l.observe(n,{box:r}),()=>{n&&l.unobserve(n)}}else return window.addEventListener("resize",o,!1),()=>{window.removeEventListener("resize",o,!1)}},[o,t,r])}function ne(e,t=-1/0,r=1/0){return Math.min(Math.max(e,t),r)}function kt(e){let{ref:t,onInteractOutside:r,isDisabled:o,onInteractOutsideStart:n}=e,l=m.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),d=se(s=>{r&&G(s,t)&&(n&&n(s),l.current.isPointerDown=!0)}),i=se(s=>{r&&r(s)});m.useEffect(()=>{let s=l.current;if(o)return;const c=t.current,a=xt(c);if(typeof PointerEvent<"u"){let f=p=>{s.isPointerDown&&G(p,t)&&i(p),s.isPointerDown=!1};return a.addEventListener("pointerdown",d,!0),a.addEventListener("pointerup",f,!0),()=>{a.removeEventListener("pointerdown",d,!0),a.removeEventListener("pointerup",f,!0)}}else{let f=$=>{s.ignoreEmulatedMouseEvents?s.ignoreEmulatedMouseEvents=!1:s.isPointerDown&&G($,t)&&i($),s.isPointerDown=!1},p=$=>{s.ignoreEmulatedMouseEvents=!0,s.isPointerDown&&G($,t)&&i($),s.isPointerDown=!1};return a.addEventListener("mousedown",d,!0),a.addEventListener("mouseup",f,!0),a.addEventListener("touchstart",d,!0),a.addEventListener("touchend",p,!0),()=>{a.removeEventListener("mousedown",d,!0),a.removeEventListener("mouseup",f,!0),a.removeEventListener("touchstart",d,!0),a.removeEventListener("touchend",p,!0)}}},[t,o,d,i])}function G(e,t){if(e.button>0)return!1;if(e.target){const r=e.target.ownerDocument;if(!r||!r.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}const _={top:"top",bottom:"top",left:"left",right:"left"},V={top:"bottom",bottom:"top",left:"right",right:"left"},Bt={top:"left",left:"top"},le={top:"height",left:"width"},Te={width:"totalWidth",height:"totalHeight"},X={};let P=typeof document<"u"?window.visualViewport:null;function fe(e){let t=0,r=0,o=0,n=0,l=0,d=0,i={};var s;let c=((s=P==null?void 0:P.scale)!==null&&s!==void 0?s:1)>1;if(e.tagName==="BODY"){let u=document.documentElement;o=u.clientWidth,n=u.clientHeight;var a;t=(a=P==null?void 0:P.width)!==null&&a!==void 0?a:o;var f;r=(f=P==null?void 0:P.height)!==null&&f!==void 0?f:n,i.top=u.scrollTop||e.scrollTop,i.left=u.scrollLeft||e.scrollLeft,P&&(l=P.offsetTop,d=P.offsetLeft)}else({width:t,height:r,top:l,left:d}=Y(e)),i.top=e.scrollTop,i.left=e.scrollLeft,o=t,n=r;if(ht()&&(e.tagName==="BODY"||e.tagName==="HTML")&&c){i.top=0,i.left=0;var p;l=(p=P==null?void 0:P.pageTop)!==null&&p!==void 0?p:0;var $;d=($=P==null?void 0:P.pageLeft)!==null&&$!==void 0?$:0}return{width:t,height:r,totalWidth:o,totalHeight:n,scroll:i,top:l,left:d}}function Wt(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function pe(e,t,r,o,n,l,d){var i;let s=(i=n.scroll[e])!==null&&i!==void 0?i:0,c=o[le[e]],a=o.scroll[_[e]]+l,f=c+o.scroll[_[e]]-l,p=t-s+d[e]-o[_[e]],$=t-s+r+d[e]-o[_[e]];return p<a?a-p:$>f?Math.max(f-$,a-p):0}function Kt(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function $e(e){if(X[e])return X[e];let[t,r]=e.split(" "),o=_[t]||"right",n=Bt[o];_[r]||(r="center");let l=le[o],d=le[n];return X[e]={placement:t,crossPlacement:r,axis:o,crossAxis:n,size:l,crossSize:d},X[e]}function ee(e,t,r,o,n,l,d,i,s,c){let{placement:a,crossPlacement:f,axis:p,crossAxis:$,size:u,crossSize:x}=o,v={};var b;v[$]=(b=e[$])!==null&&b!==void 0?b:0;var g,C,L,S;f==="center"?v[$]+=(((g=e[x])!==null&&g!==void 0?g:0)-((C=r[x])!==null&&C!==void 0?C:0))/2:f!==$&&(v[$]+=((L=e[x])!==null&&L!==void 0?L:0)-((S=r[x])!==null&&S!==void 0?S:0)),v[$]+=l;const h=e[$]-r[x]+s+c,H=e[$]+e[x]-s-c;if(v[$]=ne(v[$],h,H),a===p){const A=i?d[u]:t[Te[u]];v[V[p]]=Math.floor(A-e[p]+n)}else v[p]=Math.floor(e[p]+e[u]+n);return v}function Ut(e,t,r,o,n,l,d,i){const s=o?r.height:t[Te.height];var c;let a=e.top!=null?r.top+e.top:r.top+(s-((c=e.bottom)!==null&&c!==void 0?c:0)-d);var f,p,$,u,x,v;let b=i!=="top"?Math.max(0,t.height+t.top+((f=t.scroll.top)!==null&&f!==void 0?f:0)-a-(((p=n.top)!==null&&p!==void 0?p:0)+(($=n.bottom)!==null&&$!==void 0?$:0)+l)):Math.max(0,a+d-(t.top+((u=t.scroll.top)!==null&&u!==void 0?u:0))-(((x=n.top)!==null&&x!==void 0?x:0)+((v=n.bottom)!==null&&v!==void 0?v:0)+l));return Math.min(t.height-l*2,b)}function me(e,t,r,o,n,l){let{placement:d,axis:i,size:s}=l;var c,a;if(d===i)return Math.max(0,r[i]-e[i]-((c=e.scroll[i])!==null&&c!==void 0?c:0)+t[i]-((a=o[i])!==null&&a!==void 0?a:0)-o[V[i]]-n);var f;return Math.max(0,e[s]+e[i]+e.scroll[i]-t[i]-r[i]-r[s]-((f=o[i])!==null&&f!==void 0?f:0)-o[V[i]]-n)}function Yt(e,t,r,o,n,l,d,i,s,c,a,f,p,$,u,x){let v=$e(e),{size:b,crossAxis:g,crossSize:C,placement:L,crossPlacement:S}=v,h=ee(t,i,r,v,a,f,c,p,u,x),H=a,A=me(i,c,t,n,l+a,v);if(d&&o[b]>A){let Q=$e(`${V[L]} ${S}`),bt=ee(t,i,r,Q,a,f,c,p,u,x);me(i,c,t,n,l+a,Q)>A&&(v=Q,h=bt,H=a)}let I="bottom";v.axis==="top"?v.placement==="top"?I="top":v.placement==="bottom"&&(I="bottom"):v.crossAxis==="top"&&(v.crossPlacement==="top"?I="bottom":v.crossPlacement==="bottom"&&(I="top"));let w=pe(g,h[g],r[C],i,s,l,c);h[g]+=w;let R=Ut(h,i,c,p,n,l,r.height,I);$&&$<R&&(R=$),r.height=Math.min(r.height,R),h=ee(t,i,r,v,H,f,c,p,u,x),w=pe(g,h[g],r[C],i,s,l,c),h[g]+=w;let O={},z=t[g]+.5*t[C]-h[g]-n[_[g]];const M=u/2+x;var k,B,N,T;const W=_[g]==="left"?((k=n.left)!==null&&k!==void 0?k:0)+((B=n.right)!==null&&B!==void 0?B:0):((N=n.top)!==null&&N!==void 0?N:0)+((T=n.bottom)!==null&&T!==void 0?T:0),J=r[C]-W-u/2-x,$t=t[g]+u/2-(h[g]+n[_[g]]),mt=t[g]+t[C]-u/2-(h[g]+n[_[g]]),vt=ne(z,$t,mt);return O[g]=ne(vt,M,J),{position:h,maxHeight:R,arrowOffsetLeft:O.left,arrowOffsetTop:O.top,placement:v.placement}}function jt(e){let{placement:t,targetNode:r,overlayNode:o,scrollNode:n,padding:l,shouldFlip:d,boundaryElement:i,offset:s,crossOffset:c,maxHeight:a,arrowSize:f=0,arrowBoundaryOffset:p=0}=e,$=o instanceof HTMLElement?Zt(o):document.documentElement,u=$===document.documentElement;const x=window.getComputedStyle($).position;let v=!!x&&x!=="static",b=u?Y(r):ve(r,$);if(!u){let{marginTop:O,marginLeft:z}=window.getComputedStyle(r);b.top+=parseInt(O,10)||0,b.left+=parseInt(z,10)||0}let g=Y(o),C=Kt(o);var L,S;g.width+=((L=C.left)!==null&&L!==void 0?L:0)+((S=C.right)!==null&&S!==void 0?S:0);var h,H;g.height+=((h=C.top)!==null&&h!==void 0?h:0)+((H=C.bottom)!==null&&H!==void 0?H:0);let A=Wt(n),I=fe(i),w=fe($),R=i.tagName==="BODY"?Y($):ve($,i);return $.tagName==="HTML"&&i.tagName==="BODY"&&(w.scroll.top=0,w.scroll.left=0),Yt(t,b,g,A,C,l,d,I,w,R,s,c,v,a,f,p)}function Y(e){let{top:t,left:r,width:o,height:n}=e.getBoundingClientRect(),{scrollTop:l,scrollLeft:d,clientTop:i,clientLeft:s}=document.documentElement;return{top:t+l-i,left:r+d-s,width:o,height:n}}function ve(e,t){let r=window.getComputedStyle(e),o;if(r.position==="fixed"){let{top:n,left:l,width:d,height:i}=e.getBoundingClientRect();o={top:n,left:l,width:d,height:i}}else{o=Y(e);let n=Y(t),l=window.getComputedStyle(t);n.top+=(parseInt(l.borderTopWidth,10)||0)-t.scrollTop,n.left+=(parseInt(l.borderLeftWidth,10)||0)-t.scrollLeft,o.top-=n.top,o.left-=n.left}return o.top-=parseInt(r.marginTop,10)||0,o.left-=parseInt(r.marginLeft,10)||0,o}function Zt(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position==="static"&&!be(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!be(t);)t=t.parentElement;return t||document.documentElement}function be(e){let t=window.getComputedStyle(e);return t.transform!=="none"||/transform|perspective/.test(t.willChange)||t.filter!=="none"||t.contain==="paint"||"backdropFilter"in t&&t.backdropFilter!=="none"||"WebkitBackdropFilter"in t&&t.WebkitBackdropFilter!=="none"}const Re=new WeakMap;function Gt(e){let{triggerRef:t,isOpen:r,onClose:o}=e;m.useEffect(()=>{if(!r||o===null)return;let n=l=>{let d=l.target;if(!t.current||d instanceof Node&&!d.contains(t.current)||l.target instanceof HTMLInputElement||l.target instanceof HTMLTextAreaElement)return;let i=o||Re.get(t.current);i&&i()};return window.addEventListener("scroll",n,!0),()=>{window.removeEventListener("scroll",n,!0)}},[r,o,t])}let E=typeof document<"u"?window.visualViewport:null;function Xt(e){let{direction:t}=Nt(),{arrowSize:r=0,targetRef:o,overlayRef:n,scrollRef:l=n,placement:d="bottom",containerPadding:i=12,shouldFlip:s=!0,boundaryElement:c=typeof document<"u"?document.body:null,offset:a=0,crossOffset:f=0,shouldUpdatePosition:p=!0,isOpen:$=!0,onClose:u,maxHeight:x,arrowBoundaryOffset:v=0}=e,[b,g]=m.useState(null),C=[p,d,n.current,o.current,l.current,i,s,c,a,f,$,t,x,v,r],L=m.useRef(E==null?void 0:E.scale);m.useEffect(()=>{$&&(L.current=E==null?void 0:E.scale)},[$]);let S=m.useCallback(()=>{if(p===!1||!$||!n.current||!o.current||!c||(E==null?void 0:E.scale)!==L.current)return;let w=null;if(l.current&&l.current.contains(document.activeElement)){var R;let T=(R=document.activeElement)===null||R===void 0?void 0:R.getBoundingClientRect(),W=l.current.getBoundingClientRect();var O;if(w={type:"top",offset:((O=T==null?void 0:T.top)!==null&&O!==void 0?O:0)-W.top},w.offset>W.height/2){w.type="bottom";var z;w.offset=((z=T==null?void 0:T.bottom)!==null&&z!==void 0?z:0)-W.bottom}}let M=n.current;if(!x&&n.current){var k;M.style.top="0px",M.style.bottom="";var B;M.style.maxHeight=((B=(k=window.visualViewport)===null||k===void 0?void 0:k.height)!==null&&B!==void 0?B:window.innerHeight)+"px"}let N=jt({placement:Vt(d,t),overlayNode:n.current,targetNode:o.current,scrollNode:l.current||n.current,padding:i,shouldFlip:s,boundaryElement:c,offset:a,crossOffset:f,maxHeight:x,arrowSize:r,arrowBoundaryOffset:v});if(N.position){if(M.style.top="",M.style.bottom="",M.style.left="",M.style.right="",Object.keys(N.position).forEach(T=>M.style[T]=N.position[T]+"px"),M.style.maxHeight=N.maxHeight!=null?N.maxHeight+"px":"",w&&document.activeElement&&l.current){let T=document.activeElement.getBoundingClientRect(),W=l.current.getBoundingClientRect(),J=T[w.type]-W[w.type];l.current.scrollTop+=J-w.offset}g(N)}},C);K(S,C),qt(S),ue({ref:n,onResize:S}),ue({ref:o,onResize:S});let h=m.useRef(!1);K(()=>{let w,R=()=>{h.current=!0,clearTimeout(w),w=setTimeout(()=>{h.current=!1},500),S()},O=()=>{h.current&&R()};return E==null||E.addEventListener("resize",R),E==null||E.addEventListener("scroll",O),()=>{E==null||E.removeEventListener("resize",R),E==null||E.removeEventListener("scroll",O)}},[S]);let H=m.useCallback(()=>{h.current||u==null||u()},[u,h]);Gt({triggerRef:o,isOpen:$,onClose:u&&H});var A,I;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...b==null?void 0:b.position,maxHeight:(A=b==null?void 0:b.maxHeight)!==null&&A!==void 0?A:"100vh"}},placement:(I=b==null?void 0:b.placement)!==null&&I!==void 0?I:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:b==null?void 0:b.arrowOffsetLeft,top:b==null?void 0:b.arrowOffsetTop}},updatePosition:S}}function qt(e){K(()=>(window.addEventListener("resize",e,!1),()=>{window.removeEventListener("resize",e,!1)}),[e])}function Vt(e,t){return t==="rtl"?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}const F=[];function Jt(e,t){let{onClose:r,shouldCloseOnBlur:o,isOpen:n,isDismissable:l=!1,isKeyboardDismissDisabled:d=!1,shouldCloseOnInteractOutside:i}=e;m.useEffect(()=>(n&&F.push(t),()=>{let u=F.indexOf(t);u>=0&&F.splice(u,1)}),[n,t]);let s=()=>{F[F.length-1]===t&&r&&r()},c=u=>{(!i||i(u.target))&&F[F.length-1]===t&&(u.stopPropagation(),u.preventDefault())},a=u=>{(!i||i(u.target))&&(F[F.length-1]===t&&(u.stopPropagation(),u.preventDefault()),s())},f=u=>{u.key==="Escape"&&!d&&!u.nativeEvent.isComposing&&(u.stopPropagation(),u.preventDefault(),s())};kt({ref:t,onInteractOutside:l&&n?a:void 0,onInteractOutsideStart:c});let{focusWithinProps:p}=Et({isDisabled:!o,onBlurWithin:u=>{!u.relatedTarget||It(u.relatedTarget)||(!i||i(u.relatedTarget))&&(r==null||r())}}),$=u=>{u.target===u.currentTarget&&u.preventDefault()};return{overlayProps:{onKeyDown:f,...p},underlayProps:{onPointerDown:$}}}function Qt(e,t,r){let{type:o}=e,{isOpen:n}=t;m.useEffect(()=>{r&&r.current&&Re.set(r.current,t.close)});let l;o==="menu"?l=!0:o==="listbox"&&(l="listbox");let d=Ee();return{triggerProps:{"aria-haspopup":l,"aria-expanded":n,"aria-controls":n?d:void 0,onPress:t.toggle},overlayProps:{id:d}}}const te=typeof document<"u"&&window.visualViewport,eo=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let q=0,oe;function to(e={}){let{isDisabled:t}=e;K(()=>{if(!t)return q++,q===1&&(wt()?oe=ro():oe=oo()),()=>{q--,q===0&&oe()}},[t])}function oo(){return re(U(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),U(document.documentElement,"overflow","hidden"))}function ro(){let e,t,r=c=>{e=Se(c.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=U(e,"overscrollBehavior","contain"))},o=c=>{if(!e||e===document.documentElement||e===document.body){c.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&c.preventDefault()},n=c=>{let a=c.target;xe(a)&&a!==document.activeElement&&(c.preventDefault(),i(),a.style.transform="translateY(-2000px)",a.focus(),requestAnimationFrame(()=>{a.style.transform=""})),t&&t()},l=c=>{let a=c.target;xe(a)&&(i(),a.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{a.style.transform="",te&&(te.height<window.innerHeight?requestAnimationFrame(()=>{ge(a)}):te.addEventListener("resize",()=>ge(a),{once:!0}))}))},d=null,i=()=>{if(d)return;let c=()=>{window.scrollTo(0,0)},a=window.pageXOffset,f=window.pageYOffset;d=re(j(window,"scroll",c),U(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),U(document.documentElement,"overflow","hidden"),U(document.body,"marginTop",`-${f}px`),()=>{window.scrollTo(a,f)}),window.scrollTo(0,0)},s=re(j(document,"touchstart",r,{passive:!1,capture:!0}),j(document,"touchmove",o,{passive:!1,capture:!0}),j(document,"touchend",n,{passive:!1,capture:!0}),j(document,"focus",l,!0));return()=>{t==null||t(),d==null||d(),s()}}function U(e,t,r){let o=e.style[t];return e.style[t]=r,()=>{e.style[t]=o}}function j(e,t,r,o){return e.addEventListener(t,r,o),()=>{e.removeEventListener(t,r,o)}}function ge(e){let t=document.scrollingElement||document.documentElement,r=e;for(;r&&r!==t;){let o=Se(r);if(o!==document.documentElement&&o!==document.body&&o!==r){let n=o.getBoundingClientRect().top,l=r.getBoundingClientRect().top;l>n+r.clientHeight&&(o.scrollTop+=l-n)}r=o.parentElement}}function xe(e){return e instanceof HTMLInputElement&&!eo.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var Le={};Le={dismiss:"تجاهل"};var Oe={};Oe={dismiss:"Отхвърляне"};var De={};De={dismiss:"Odstranit"};var Ie={};Ie={dismiss:"Luk"};var Me={};Me={dismiss:"Schließen"};var He={};He={dismiss:"Απόρριψη"};var Ae={};Ae={dismiss:"Dismiss"};var Ne={};Ne={dismiss:"Descartar"};var _e={};_e={dismiss:"Lõpeta"};var Fe={};Fe={dismiss:"Hylkää"};var ze={};ze={dismiss:"Rejeter"};var ke={};ke={dismiss:"התעלם"};var Be={};Be={dismiss:"Odbaci"};var We={};We={dismiss:"Elutasítás"};var Ke={};Ke={dismiss:"Ignora"};var Ue={};Ue={dismiss:"閉じる"};var Ye={};Ye={dismiss:"무시"};var je={};je={dismiss:"Atmesti"};var Ze={};Ze={dismiss:"Nerādīt"};var Ge={};Ge={dismiss:"Lukk"};var Xe={};Xe={dismiss:"Negeren"};var qe={};qe={dismiss:"Zignoruj"};var Ve={};Ve={dismiss:"Descartar"};var Je={};Je={dismiss:"Dispensar"};var Qe={};Qe={dismiss:"Revocare"};var et={};et={dismiss:"Пропустить"};var tt={};tt={dismiss:"Zrušiť"};var ot={};ot={dismiss:"Opusti"};var rt={};rt={dismiss:"Odbaci"};var nt={};nt={dismiss:"Avvisa"};var lt={};lt={dismiss:"Kapat"};var it={};it={dismiss:"Скасувати"};var at={};at={dismiss:"取消"};var st={};st={dismiss:"關閉"};var ct={};ct={"ar-AE":Le,"bg-BG":Oe,"cs-CZ":De,"da-DK":Ie,"de-DE":Me,"el-GR":He,"en-US":Ae,"es-ES":Ne,"et-EE":_e,"fi-FI":Fe,"fr-FR":ze,"he-IL":ke,"hr-HR":Be,"hu-HU":We,"it-IT":Ke,"ja-JP":Ue,"ko-KR":Ye,"lt-LT":je,"lv-LV":Ze,"nb-NO":Ge,"nl-NL":Xe,"pl-PL":qe,"pt-BR":Ve,"pt-PT":Je,"ro-RO":Qe,"ru-RU":et,"sk-SK":tt,"sl-SI":ot,"sr-SP":rt,"sv-SE":nt,"tr-TR":lt,"uk-UA":it,"zh-CN":at,"zh-TW":st};function no(e){return e&&e.__esModule?e.default:e}function he(e){let{onDismiss:t,...r}=e,o=_t(no(ct),"@react-aria/overlays"),n=Ot(r,o.format("dismiss")),l=()=>{t&&t()};return y.createElement(Ft,null,y.createElement("button",{...n,tabIndex:-1,onClick:l,style:{width:1,height:1}}))}let Z=new WeakMap,D=[];function lo(e,t=document.body){let r=new Set(e),o=new Set,n=s=>{for(let p of s.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add(p);let c=p=>{if(r.has(p)||p.parentElement&&o.has(p.parentElement)&&p.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let $ of r)if(p.contains($))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},a=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),f=c(s);if(f===NodeFilter.FILTER_ACCEPT&&l(s),f!==NodeFilter.FILTER_REJECT){let p=a.nextNode();for(;p!=null;)l(p),p=a.nextNode()}},l=s=>{var c;let a=(c=Z.get(s))!==null&&c!==void 0?c:0;s.getAttribute("aria-hidden")==="true"&&a===0||(a===0&&s.setAttribute("aria-hidden","true"),o.add(s),Z.set(s,a+1))};D.length&&D[D.length-1].disconnect(),n(t);let d=new MutationObserver(s=>{for(let c of s)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...r,...o].some(a=>a.contains(c.target))){for(let a of c.removedNodes)a instanceof Element&&(r.delete(a),o.delete(a));for(let a of c.addedNodes)(a instanceof HTMLElement||a instanceof SVGElement)&&(a.dataset.liveAnnouncer==="true"||a.dataset.reactAriaTopLayer==="true")?r.add(a):a instanceof Element&&n(a)}});d.observe(t,{childList:!0,subtree:!0});let i={observe(){d.observe(t,{childList:!0,subtree:!0})},disconnect(){d.disconnect()}};return D.push(i),()=>{d.disconnect();for(let s of o){let c=Z.get(s);c!=null&&(c===1?(s.removeAttribute("aria-hidden"),Z.delete(s)):Z.set(s,c-1))}i===D[D.length-1]?(D.pop(),D.length&&D[D.length-1].observe()):D.splice(D.indexOf(i),1)}}function io(e,t){let{triggerRef:r,popoverRef:o,isNonModal:n,isKeyboardDismissDisabled:l,shouldCloseOnInteractOutside:d,...i}=e,{overlayProps:s,underlayProps:c}=Jt({isOpen:t.isOpen&&!i["data-react-aria-top-layer"],onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!n,isKeyboardDismissDisabled:l,shouldCloseOnInteractOutside:d},o),{overlayProps:a,arrowProps:f,placement:p}=Xt({...i,targetRef:r,overlayRef:o,isOpen:t.isOpen,onClose:n?t.close:void 0});return to({isDisabled:n||!t.isOpen}),K(()=>{if(t.isOpen&&!n&&o.current)return lo([o.current])},[n,t.isOpen,o]),{popoverProps:we(s,a),arrowProps:f,underlayProps:c,placement:p}}const ao=m.createContext({});function so(){var e;return(e=m.useContext(ao))!==null&&e!==void 0?e:{}}const dt=y.createContext(null);function co(e){let t=yt(),{portalContainer:r=t?null:document.body,isExiting:o}=e,[n,l]=m.useState(!1),d=m.useMemo(()=>({contain:n,setContain:l}),[n,l]),{getContainer:i}=so();if(!e.portalContainer&&i&&(r=i()),!r)return null;let s=e.children;return e.disableFocusManagement||(s=y.createElement(Mt,{restoreFocus:!0,contain:n&&!o},s)),s=y.createElement(dt.Provider,{value:d},y.createElement(Rt,null,s)),Ht.createPortal(s,r)}function uo(){let e=m.useContext(dt),t=e==null?void 0:e.setContain;K(()=>{t==null||t(!0)},[t])}function fo(e,t){let{role:r="dialog"}=e,o=Ct();o=e["aria-label"]?void 0:o;let n=m.useRef(!1);return m.useEffect(()=>{if(t.current&&!t.current.contains(document.activeElement)){ce(t.current);let l=setTimeout(()=>{document.activeElement===t.current&&(n.current=!0,t.current&&(t.current.blur(),ce(t.current)),n.current=!1)},500);return()=>{clearTimeout(l)}}},[t]),uo(),{dialogProps:{...ie(e,{labelable:!0}),role:r,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||o,onBlur:l=>{n.current&&l.stopPropagation()}},titleProps:{id:o}}}function ut(e){let[t,r]=Dt(e.isOpen,e.defaultOpen||!1,e.onOpenChange);const o=m.useCallback(()=>{r(!0)},[r]),n=m.useCallback(()=>{r(!1)},[r]),l=m.useCallback(()=>{r(!t)},[r,t]);return{isOpen:t,setOpen:r,open:o,close:n,toggle:l}}function po(e){let t=ut(e),[r,o]=m.useState(null),[n,l]=m.useState([]),d=()=>{l([]),t.close()};return{focusStrategy:r,...t,open(c=null){o(c),t.open()},toggle(c=null){o(c),t.toggle()},close(){d()},expandedKeysStack:n,openSubmenu:(c,a)=>{l(f=>a>f.length?f:[...f.slice(0,a),c])},closeSubmenu:(c,a)=>{l(f=>f[a]===c?f.slice(0,a):f)}}}const $o=m.createContext({placement:"bottom"}),ft=m.createContext(null);function mo(e,t){[e,t]=ye(e,t,ft);let r=m.useContext(ae),o=ut(e),n=e.isOpen!=null||e.defaultOpen!=null||!r?o:r,l=Pt(t,n.isOpen)||e.isExiting||!1;if(At()){let i=e.children;return typeof i=="function"&&(i=i({trigger:e.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),y.createElement(y.Fragment,null,i)}return n&&!n.isOpen&&!l?null:y.createElement(vo,{...e,triggerRef:e.triggerRef,state:n,popoverRef:t,isExiting:l})}const Mo=m.forwardRef(mo);function vo({state:e,isExiting:t,UNSTABLE_portalContainer:r,...o}){let n=m.useRef(null),[l,d]=m.useState(0);K(()=>{n.current&&e.isOpen&&d(n.current.getBoundingClientRect().width)},[e.isOpen,n]);var i;let{popoverProps:s,underlayProps:c,arrowProps:a,placement:f}=io({...o,offset:(i=o.offset)!==null&&i!==void 0?i:8,arrowSize:l},e),p=o.popoverRef,$=St(p,!!f)||o.isEntering||!1,u=Ce({...o,defaultClassName:"react-aria-Popover",values:{trigger:o.trigger||null,placement:f,isEntering:$,isExiting:t}}),x={...s.style,...u.style};return y.createElement(co,{...o,isExiting:t,portalContainer:r},!o.isNonModal&&e.isOpen&&y.createElement("div",{"data-testid":"underlay",...c,style:{position:"fixed",inset:0}}),y.createElement("div",{...we(ie(o),s),...u,ref:p,slot:o.slot||void 0,style:x,"data-trigger":o.trigger,"data-placement":f,"data-entering":$||void 0,"data-exiting":t||void 0},!o.isNonModal&&y.createElement(he,{onDismiss:e.close}),y.createElement($o.Provider,{value:{...a,placement:f,ref:n}},u.children),y.createElement(he,{onDismiss:e.close})))}const bo=m.createContext(null),pt=m.createContext(null),ae=m.createContext(null);function Ho(e){let t=po(e),r=m.useRef(null),{triggerProps:o,overlayProps:n}=Qt({type:"dialog"},t,r);return o.id=Ee(),n["aria-labelledby"]=o.id,y.createElement(Pe,{values:[[ae,t],[bo,t],[pt,n],[ft,{trigger:"DialogTrigger",triggerRef:r}]]},y.createElement(Lt,{...o,ref:r,isPressed:t.isOpen},e.children))}function go(e,t){let r=e["aria-labelledby"];[e,t]=ye(e,t,pt);let{dialogProps:o,titleProps:n}=fo({...e,"aria-labelledby":r},t),l=m.useContext(ae);!o["aria-label"]&&!o["aria-labelledby"]&&(e["aria-labelledby"]?o["aria-labelledby"]=e["aria-labelledby"]:console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));let d=Ce({defaultClassName:"react-aria-Dialog",className:e.className,style:e.style,children:e.children,values:{close:(l==null?void 0:l.close)||(()=>{})}});return y.createElement("section",{...ie(e),...o,...d,ref:t,slot:e.slot||void 0},y.createElement(Pe,{values:[[Tt,{slots:{[de]:{},title:{...n,level:2}}}],[gt,{slots:{[de]:{},close:{onPress:()=>l==null?void 0:l.close()}}}]]},d.children))}const Ao=m.forwardRef(go);export{Ho as $,Mo as a,ut as b,ue as c,ae as d,ft as e,Qt as f,lo as g,pt as h,Ao as i};