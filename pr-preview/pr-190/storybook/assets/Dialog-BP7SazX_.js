import{$ as So}from"./Button-BvTLClQx.js";import{w as Ae,s as Ao,z as Mo,j as W,b as ko,k as ie,S as Bo,A as ve,c as ee,$ as To,n as V,o as Ro,v as ae,m as Fo,d as ze,B as Lo,Q as Ko,p as Io,T as Oo,t as Me,a as ue,U as _o,V as zo,f as te,C as X,E as Ho,h as No,e as Uo,D as jo,G as ke}from"./useFocusable-CI7IKKVh.js";import{a as Wo}from"./RSPContexts-Djf1EgA4.js";import{r as b,R as v}from"./index-ClcD9ViR.js";import{$ as Vo,a as Go,b as Yo,c as He,d as Zo,f as qo}from"./Collection-C4MnC92I.js";import{$ as Xo,a as Jo,b as Qo,c as er}from"./Separator-CIU4dNV7.js";import{a as tr}from"./Text-B5xeh108.js";import{l as or,f as rr,$ as Ne,a as nr,b as Ue}from"./SelectionManager-DRGqbt9A.js";import{a as ar,$ as je}from"./PressResponder-B8JDidd-.js";import{a as lr,$ as We}from"./useControlledState-CccRFgkZ.js";import{$ as Ve}from"./useLocalizedStringFormatter-B63kKuQ6.js";import{c as sr,a as Ge}from"./FocusScope-DXS1oVaO.js";import{F as ir}from"./index-ZuzByk-F.js";import{b as ur}from"./Hidden-Cj803rEv.js";import{$ as cr}from"./context-WoXASG7e.js";import{b as Ye}from"./ListKeyboardDelegate-DaTzZypo.js";import{a as dr}from"./VisuallyHidden-CLrU_C9N.js";function fr(){return typeof window.ResizeObserver<"u"}function xe(t){const{ref:e,box:o,onResize:r}=t;b.useEffect(()=>{let n=e==null?void 0:e.current;if(n)if(fr()){const a=new window.ResizeObserver(u=>{u.length&&r()});return a.observe(n,{box:o}),()=>{n&&a.unobserve(n)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,e,o])}function he(t,e=-1/0,o=1/0){return Math.min(Math.max(t,e),o)}function pr(t){let{ref:e,onInteractOutside:o,isDisabled:r,onInteractOutsideStart:n}=t,a=b.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),u=Ae(s=>{o&&oe(s,e)&&(n&&n(s),a.current.isPointerDown=!0)}),l=Ae(s=>{o&&o(s)});b.useEffect(()=>{let s=a.current;if(r)return;const c=e.current,i=Ao(c);if(typeof PointerEvent<"u"){let p=$=>{s.isPointerDown&&oe($,e)&&l($),s.isPointerDown=!1};return i.addEventListener("pointerdown",u,!0),i.addEventListener("pointerup",p,!0),()=>{i.removeEventListener("pointerdown",u,!0),i.removeEventListener("pointerup",p,!0)}}else{let p=d=>{s.ignoreEmulatedMouseEvents?s.ignoreEmulatedMouseEvents=!1:s.isPointerDown&&oe(d,e)&&l(d),s.isPointerDown=!1},$=d=>{s.ignoreEmulatedMouseEvents=!0,s.isPointerDown&&oe(d,e)&&l(d),s.isPointerDown=!1};return i.addEventListener("mousedown",u,!0),i.addEventListener("mouseup",p,!0),i.addEventListener("touchstart",u,!0),i.addEventListener("touchend",$,!0),()=>{i.removeEventListener("mousedown",u,!0),i.removeEventListener("mouseup",p,!0),i.removeEventListener("touchstart",u,!0),i.removeEventListener("touchend",$,!0)}}},[e,r,u,l])}function oe(t,e){if(t.button>0)return!1;if(t.target){const o=t.target.ownerDocument;if(!o||!o.documentElement.contains(t.target)||t.target.closest("[data-react-aria-top-layer]"))return!1}return e.current&&!e.current.contains(t.target)}const H={top:"top",bottom:"top",left:"left",right:"left"},le={top:"bottom",bottom:"top",left:"right",right:"left"},$r={top:"left",left:"top"},ye={top:"height",left:"width"},Ze={width:"totalWidth",height:"totalHeight"},re={};let B=typeof document<"u"?window.visualViewport:null;function Be(t){let e=0,o=0,r=0,n=0,a=0,u=0,l={};var s;let c=((s=B==null?void 0:B.scale)!==null&&s!==void 0?s:1)>1;if(t.tagName==="BODY"){let f=document.documentElement;r=f.clientWidth,n=f.clientHeight;var i;e=(i=B==null?void 0:B.width)!==null&&i!==void 0?i:r;var p;o=(p=B==null?void 0:B.height)!==null&&p!==void 0?p:n,l.top=f.scrollTop||t.scrollTop,l.left=f.scrollLeft||t.scrollLeft,B&&(a=B.offsetTop,u=B.offsetLeft)}else({width:e,height:o,top:a,left:u}=q(t)),l.top=t.scrollTop,l.left=t.scrollLeft,r=e,n=o;if(Mo()&&(t.tagName==="BODY"||t.tagName==="HTML")&&c){l.top=0,l.left=0;var $;a=($=B==null?void 0:B.pageTop)!==null&&$!==void 0?$:0;var d;u=(d=B==null?void 0:B.pageLeft)!==null&&d!==void 0?d:0}return{width:e,height:o,totalWidth:r,totalHeight:n,scroll:l,top:a,left:u}}function br(t){return{top:t.scrollTop,left:t.scrollLeft,width:t.scrollWidth,height:t.scrollHeight}}function Te(t,e,o,r,n,a,u){var l;let s=(l=n.scroll[t])!==null&&l!==void 0?l:0,c=r[ye[t]],i=r.scroll[H[t]]+a,p=c+r.scroll[H[t]]-a,$=e-s+u[t]-r[H[t]],d=e-s+o+u[t]-r[H[t]];return $<i?i-$:d>p?Math.max(p-d,i-$):0}function mr(t){let e=window.getComputedStyle(t);return{top:parseInt(e.marginTop,10)||0,bottom:parseInt(e.marginBottom,10)||0,left:parseInt(e.marginLeft,10)||0,right:parseInt(e.marginRight,10)||0}}function Re(t){if(re[t])return re[t];let[e,o]=t.split(" "),r=H[e]||"right",n=$r[r];H[o]||(o="center");let a=ye[r],u=ye[n];return re[t]={placement:e,crossPlacement:o,axis:r,crossAxis:n,size:a,crossSize:u},re[t]}function be(t,e,o,r,n,a,u,l,s,c){let{placement:i,crossPlacement:p,axis:$,crossAxis:d,size:f,crossSize:y}=r,m={};var x;m[d]=(x=t[d])!==null&&x!==void 0?x:0;var h,w,F,E;p==="center"?m[d]+=(((h=t[y])!==null&&h!==void 0?h:0)-((w=o[y])!==null&&w!==void 0?w:0))/2:p!==d&&(m[d]+=((F=t[y])!==null&&F!==void 0?F:0)-((E=o[y])!==null&&E!==void 0?E:0)),m[d]+=a;const g=t[d]-o[y]+s+c,I=t[d]+t[y]-s-c;if(m[d]=he(m[d],g,I),i===$){const L=l?u[f]:e[Ze[f]];m[le[$]]=Math.floor(L-t[$]+n)}else m[$]=Math.floor(t[$]+t[f]+n);return m}function gr(t,e,o,r,n,a,u,l){const s=r?o.height:e[Ze.height];var c;let i=t.top!=null?o.top+t.top:o.top+(s-((c=t.bottom)!==null&&c!==void 0?c:0)-u);var p,$,d,f,y,m;let x=l!=="top"?Math.max(0,e.height+e.top+((p=e.scroll.top)!==null&&p!==void 0?p:0)-i-((($=n.top)!==null&&$!==void 0?$:0)+((d=n.bottom)!==null&&d!==void 0?d:0)+a)):Math.max(0,i+u-(e.top+((f=e.scroll.top)!==null&&f!==void 0?f:0))-(((y=n.top)!==null&&y!==void 0?y:0)+((m=n.bottom)!==null&&m!==void 0?m:0)+a));return Math.min(e.height-a*2,x)}function Fe(t,e,o,r,n,a){let{placement:u,axis:l,size:s}=a;var c,i;if(u===l)return Math.max(0,o[l]-t[l]-((c=t.scroll[l])!==null&&c!==void 0?c:0)+e[l]-((i=r[l])!==null&&i!==void 0?i:0)-r[le[l]]-n);var p;return Math.max(0,t[s]+t[l]+t.scroll[l]-e[l]-o[l]-o[s]-((p=r[l])!==null&&p!==void 0?p:0)-r[le[l]]-n)}function vr(t,e,o,r,n,a,u,l,s,c,i,p,$,d,f,y){let m=Re(t),{size:x,crossAxis:h,crossSize:w,placement:F,crossPlacement:E}=m,g=be(e,l,o,m,i,p,c,$,f,y),I=i,L=Fe(l,c,e,n,a+i,m);if(u&&r[x]>L){let U=Re(`${le[F]} ${E}`),pe=be(e,l,o,U,i,p,c,$,f,y);Fe(l,c,e,n,a+i,U)>L&&(m=U,g=pe,I=i)}let A="bottom";m.axis==="top"?m.placement==="top"?A="top":m.placement==="bottom"&&(A="bottom"):m.crossAxis==="top"&&(m.crossPlacement==="top"?A="bottom":m.crossPlacement==="bottom"&&(A="top"));let C=Te(h,g[h],o[w],l,s,a,c);g[h]+=C;let T=gr(g,l,c,$,n,a,o.height,A);d&&d<T&&(T=d),o.height=Math.min(o.height,T),g=be(e,l,o,m,I,p,c,$,f,y),C=Te(h,g[h],o[w],l,s,a,c),g[h]+=C;let R={},P=e[h]+.5*e[w]-g[h]-n[H[h]];const M=f/2+y;var N,_,K,k;const z=H[h]==="left"?((N=n.left)!==null&&N!==void 0?N:0)+((_=n.right)!==null&&_!==void 0?_:0):((K=n.top)!==null&&K!==void 0?K:0)+((k=n.bottom)!==null&&k!==void 0?k:0),G=o[w]-z-f/2-y,Y=e[h]+f/2-(g[h]+n[H[h]]),de=e[h]+e[w]-f/2-(g[h]+n[H[h]]),fe=he(P,Y,de);return R[h]=he(fe,M,G),{position:g,maxHeight:T,arrowOffsetLeft:R.left,arrowOffsetTop:R.top,placement:m.placement}}function xr(t){let{placement:e,targetNode:o,overlayNode:r,scrollNode:n,padding:a,shouldFlip:u,boundaryElement:l,offset:s,crossOffset:c,maxHeight:i,arrowSize:p=0,arrowBoundaryOffset:$=0}=t,d=r instanceof HTMLElement?hr(r):document.documentElement,f=d===document.documentElement;const y=window.getComputedStyle(d).position;let m=!!y&&y!=="static",x=f?q(o):Le(o,d);if(!f){let{marginTop:R,marginLeft:P}=window.getComputedStyle(o);x.top+=parseInt(R,10)||0,x.left+=parseInt(P,10)||0}let h=q(r),w=mr(r);var F,E;h.width+=((F=w.left)!==null&&F!==void 0?F:0)+((E=w.right)!==null&&E!==void 0?E:0);var g,I;h.height+=((g=w.top)!==null&&g!==void 0?g:0)+((I=w.bottom)!==null&&I!==void 0?I:0);let L=br(n),A=Be(l),C=Be(d),T=l.tagName==="BODY"?q(d):Le(d,l);return d.tagName==="HTML"&&l.tagName==="BODY"&&(C.scroll.top=0,C.scroll.left=0),vr(e,x,h,L,w,a,u,A,C,T,s,c,m,i,p,$)}function q(t){let{top:e,left:o,width:r,height:n}=t.getBoundingClientRect(),{scrollTop:a,scrollLeft:u,clientTop:l,clientLeft:s}=document.documentElement;return{top:e+a-l,left:o+u-s,width:r,height:n}}function Le(t,e){let o=window.getComputedStyle(t),r;if(o.position==="fixed"){let{top:n,left:a,width:u,height:l}=t.getBoundingClientRect();r={top:n,left:a,width:u,height:l}}else{r=q(t);let n=q(e),a=window.getComputedStyle(e);n.top+=(parseInt(a.borderTopWidth,10)||0)-e.scrollTop,n.left+=(parseInt(a.borderLeftWidth,10)||0)-e.scrollLeft,r.top-=n.top,r.left-=n.left}return r.top-=parseInt(o.marginTop,10)||0,r.left-=parseInt(o.marginLeft,10)||0,r}function hr(t){let e=t.offsetParent;if(e&&e===document.body&&window.getComputedStyle(e).position==="static"&&!Ke(e)&&(e=document.documentElement),e==null)for(e=t.parentElement;e&&!Ke(e);)e=e.parentElement;return e||document.documentElement}function Ke(t){let e=window.getComputedStyle(t);return e.transform!=="none"||/transform|perspective/.test(e.willChange)||e.filter!=="none"||e.contain==="paint"||"backdropFilter"in e&&e.backdropFilter!=="none"||"WebkitBackdropFilter"in e&&e.WebkitBackdropFilter!=="none"}const qe=new WeakMap;function yr(t){let{triggerRef:e,isOpen:o,onClose:r}=t;b.useEffect(()=>{if(!o||r===null)return;let n=a=>{let u=a.target;if(!e.current||u instanceof Node&&!u.contains(e.current)||a.target instanceof HTMLInputElement||a.target instanceof HTMLTextAreaElement)return;let l=r||qe.get(e.current);l&&l()};return window.addEventListener("scroll",n,!0),()=>{window.removeEventListener("scroll",n,!0)}},[o,r,e])}let D=typeof document<"u"?window.visualViewport:null;function Er(t){let{direction:e}=cr(),{arrowSize:o=0,targetRef:r,overlayRef:n,scrollRef:a=n,placement:u="bottom",containerPadding:l=12,shouldFlip:s=!0,boundaryElement:c=typeof document<"u"?document.body:null,offset:i=0,crossOffset:p=0,shouldUpdatePosition:$=!0,isOpen:d=!0,onClose:f,maxHeight:y,arrowBoundaryOffset:m=0}=t,[x,h]=b.useState(null),w=[$,u,n.current,r.current,a.current,l,s,c,i,p,d,e,y,m,o],F=b.useRef(D==null?void 0:D.scale);b.useEffect(()=>{d&&(F.current=D==null?void 0:D.scale)},[d]);let E=b.useCallback(()=>{if($===!1||!d||!n.current||!r.current||!c||(D==null?void 0:D.scale)!==F.current)return;let C=null;if(a.current&&a.current.contains(document.activeElement)){var T;let k=(T=document.activeElement)===null||T===void 0?void 0:T.getBoundingClientRect(),z=a.current.getBoundingClientRect();var R;if(C={type:"top",offset:((R=k==null?void 0:k.top)!==null&&R!==void 0?R:0)-z.top},C.offset>z.height/2){C.type="bottom";var P;C.offset=((P=k==null?void 0:k.bottom)!==null&&P!==void 0?P:0)-z.bottom}}let M=n.current;if(!y&&n.current){var N;M.style.top="0px",M.style.bottom="";var _;M.style.maxHeight=((_=(N=window.visualViewport)===null||N===void 0?void 0:N.height)!==null&&_!==void 0?_:window.innerHeight)+"px"}let K=xr({placement:Cr(u,e),overlayNode:n.current,targetNode:r.current,scrollNode:a.current||n.current,padding:l,shouldFlip:s,boundaryElement:c,offset:i,crossOffset:p,maxHeight:y,arrowSize:o,arrowBoundaryOffset:m});if(K.position){if(M.style.top="",M.style.bottom="",M.style.left="",M.style.right="",Object.keys(K.position).forEach(k=>M.style[k]=K.position[k]+"px"),M.style.maxHeight=K.maxHeight!=null?K.maxHeight+"px":"",C&&document.activeElement&&a.current){let k=document.activeElement.getBoundingClientRect(),z=a.current.getBoundingClientRect(),G=k[C.type]-z[C.type];a.current.scrollTop+=G-C.offset}h(K)}},w);W(E,w),Pr(E),xe({ref:n,onResize:E}),xe({ref:r,onResize:E});let g=b.useRef(!1);W(()=>{let C,T=()=>{g.current=!0,clearTimeout(C),C=setTimeout(()=>{g.current=!1},500),E()},R=()=>{g.current&&T()};return D==null||D.addEventListener("resize",T),D==null||D.addEventListener("scroll",R),()=>{D==null||D.removeEventListener("resize",T),D==null||D.removeEventListener("scroll",R)}},[E]);let I=b.useCallback(()=>{g.current||f==null||f()},[f,g]);yr({triggerRef:r,isOpen:d,onClose:f&&I});var L,A;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...x==null?void 0:x.position,maxHeight:(L=x==null?void 0:x.maxHeight)!==null&&L!==void 0?L:"100vh"}},placement:(A=x==null?void 0:x.placement)!==null&&A!==void 0?A:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:x==null?void 0:x.arrowOffsetLeft,top:x==null?void 0:x.arrowOffsetTop}},updatePosition:E}}function Pr(t){W(()=>(window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}),[t])}function Cr(t,e){return e==="rtl"?t.replace("start","right").replace("end","left"):t.replace("start","left").replace("end","right")}const j=[];function wr(t,e){let{onClose:o,shouldCloseOnBlur:r,isOpen:n,isDismissable:a=!1,isKeyboardDismissDisabled:u=!1,shouldCloseOnInteractOutside:l}=t;b.useEffect(()=>(n&&j.push(e),()=>{let f=j.indexOf(e);f>=0&&j.splice(f,1)}),[n,e]);let s=()=>{j[j.length-1]===e&&o&&o()},c=f=>{(!l||l(f.target))&&j[j.length-1]===e&&(f.stopPropagation(),f.preventDefault())},i=f=>{(!l||l(f.target))&&(j[j.length-1]===e&&(f.stopPropagation(),f.preventDefault()),s())},p=f=>{f.key==="Escape"&&!u&&!f.nativeEvent.isComposing&&(f.stopPropagation(),f.preventDefault(),s())};pr({ref:e,onInteractOutside:a&&n?i:void 0,onInteractOutsideStart:c});let{focusWithinProps:$}=ko({isDisabled:!r,onBlurWithin:f=>{!f.relatedTarget||sr(f.relatedTarget)||(!l||l(f.relatedTarget))&&(o==null||o())}}),d=f=>{f.target===f.currentTarget&&f.preventDefault()};return{overlayProps:{onKeyDown:p,...$},underlayProps:{onPointerDown:d}}}function Xe(t,e,o){let{type:r}=t,{isOpen:n}=e;b.useEffect(()=>{o&&o.current&&qe.set(o.current,e.close)});let a;r==="menu"?a=!0:r==="listbox"&&(a="listbox");let u=ie();return{triggerProps:{"aria-haspopup":a,"aria-expanded":n,"aria-controls":n?u:void 0,onPress:e.toggle},overlayProps:{id:u}}}const me=typeof document<"u"&&window.visualViewport,Dr=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let ne=0,ge;function Sr(t={}){let{isDisabled:e}=t;W(()=>{if(!e)return ne++,ne===1&&(Bo()?ge=Mr():ge=Ar()),()=>{ne--,ne===0&&ge()}},[e])}function Ar(){return ve(Z(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),Z(document.documentElement,"overflow","hidden"))}function Mr(){let t,e,o=c=>{t=Ye(c.target,!0),!(t===document.documentElement&&t===document.body)&&t instanceof HTMLElement&&window.getComputedStyle(t).overscrollBehavior==="auto"&&(e=Z(t,"overscrollBehavior","contain"))},r=c=>{if(!t||t===document.documentElement||t===document.body){c.preventDefault();return}t.scrollHeight===t.clientHeight&&t.scrollWidth===t.clientWidth&&c.preventDefault()},n=c=>{let i=c.target;Oe(i)&&i!==document.activeElement&&(c.preventDefault(),l(),i.style.transform="translateY(-2000px)",i.focus(),requestAnimationFrame(()=>{i.style.transform=""})),e&&e()},a=c=>{let i=c.target;Oe(i)&&(l(),i.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{i.style.transform="",me&&(me.height<window.innerHeight?requestAnimationFrame(()=>{Ie(i)}):me.addEventListener("resize",()=>Ie(i),{once:!0}))}))},u=null,l=()=>{if(u)return;let c=()=>{window.scrollTo(0,0)},i=window.pageXOffset,p=window.pageYOffset;u=ve(J(window,"scroll",c),Z(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),Z(document.documentElement,"overflow","hidden"),Z(document.body,"marginTop",`-${p}px`),()=>{window.scrollTo(i,p)}),window.scrollTo(0,0)},s=ve(J(document,"touchstart",o,{passive:!1,capture:!0}),J(document,"touchmove",r,{passive:!1,capture:!0}),J(document,"touchend",n,{passive:!1,capture:!0}),J(document,"focus",a,!0));return()=>{e==null||e(),u==null||u(),s()}}function Z(t,e,o){let r=t.style[e];return t.style[e]=o,()=>{t.style[e]=r}}function J(t,e,o,r){return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}function Ie(t){let e=document.scrollingElement||document.documentElement,o=t;for(;o&&o!==e;){let r=Ye(o);if(r!==document.documentElement&&r!==document.body&&r!==o){let n=r.getBoundingClientRect().top,a=o.getBoundingClientRect().top;a>n+o.clientHeight&&(r.scrollTop+=a-n)}o=r.parentElement}}function Oe(t){return t instanceof HTMLInputElement&&!Dr.has(t.type)||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}var Je={};Je={dismiss:"تجاهل"};var Qe={};Qe={dismiss:"Отхвърляне"};var et={};et={dismiss:"Odstranit"};var tt={};tt={dismiss:"Luk"};var ot={};ot={dismiss:"Schließen"};var rt={};rt={dismiss:"Απόρριψη"};var nt={};nt={dismiss:"Dismiss"};var at={};at={dismiss:"Descartar"};var lt={};lt={dismiss:"Lõpeta"};var st={};st={dismiss:"Hylkää"};var it={};it={dismiss:"Rejeter"};var ut={};ut={dismiss:"התעלם"};var ct={};ct={dismiss:"Odbaci"};var dt={};dt={dismiss:"Elutasítás"};var ft={};ft={dismiss:"Ignora"};var pt={};pt={dismiss:"閉じる"};var $t={};$t={dismiss:"무시"};var bt={};bt={dismiss:"Atmesti"};var mt={};mt={dismiss:"Nerādīt"};var gt={};gt={dismiss:"Lukk"};var vt={};vt={dismiss:"Negeren"};var xt={};xt={dismiss:"Zignoruj"};var ht={};ht={dismiss:"Descartar"};var yt={};yt={dismiss:"Dispensar"};var Et={};Et={dismiss:"Revocare"};var Pt={};Pt={dismiss:"Пропустить"};var Ct={};Ct={dismiss:"Zrušiť"};var wt={};wt={dismiss:"Opusti"};var Dt={};Dt={dismiss:"Odbaci"};var St={};St={dismiss:"Avvisa"};var At={};At={dismiss:"Kapat"};var Mt={};Mt={dismiss:"Скасувати"};var kt={};kt={dismiss:"取消"};var Bt={};Bt={dismiss:"關閉"};var Tt={};Tt={"ar-AE":Je,"bg-BG":Qe,"cs-CZ":et,"da-DK":tt,"de-DE":ot,"el-GR":rt,"en-US":nt,"es-ES":at,"et-EE":lt,"fi-FI":st,"fr-FR":it,"he-IL":ut,"hr-HR":ct,"hu-HU":dt,"it-IT":ft,"ja-JP":pt,"ko-KR":$t,"lt-LT":bt,"lv-LV":mt,"nb-NO":gt,"nl-NL":vt,"pl-PL":xt,"pt-BR":ht,"pt-PT":yt,"ro-RO":Et,"ru-RU":Pt,"sk-SK":Ct,"sl-SI":wt,"sr-SP":Dt,"sv-SE":St,"tr-TR":At,"uk-UA":Mt,"zh-CN":kt,"zh-TW":Bt};function kr(t){return t&&t.__esModule?t.default:t}function _e(t){let{onDismiss:e,...o}=t,r=Ve(kr(Tt),"@react-aria/overlays"),n=lr(o,r.format("dismiss")),a=()=>{e&&e()};return v.createElement(dr,null,v.createElement("button",{...n,tabIndex:-1,onClick:a,style:{width:1,height:1}}))}let Q=new WeakMap,O=[];function Br(t,e=document.body){let o=new Set(t),r=new Set,n=s=>{for(let $ of s.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))o.add($);let c=$=>{if(o.has($)||$.parentElement&&r.has($.parentElement)&&$.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let d of o)if($.contains(d))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},i=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),p=c(s);if(p===NodeFilter.FILTER_ACCEPT&&a(s),p!==NodeFilter.FILTER_REJECT){let $=i.nextNode();for(;$!=null;)a($),$=i.nextNode()}},a=s=>{var c;let i=(c=Q.get(s))!==null&&c!==void 0?c:0;s.getAttribute("aria-hidden")==="true"&&i===0||(i===0&&s.setAttribute("aria-hidden","true"),r.add(s),Q.set(s,i+1))};O.length&&O[O.length-1].disconnect(),n(e);let u=new MutationObserver(s=>{for(let c of s)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...o,...r].some(i=>i.contains(c.target))){for(let i of c.removedNodes)i instanceof Element&&(o.delete(i),r.delete(i));for(let i of c.addedNodes)(i instanceof HTMLElement||i instanceof SVGElement)&&(i.dataset.liveAnnouncer==="true"||i.dataset.reactAriaTopLayer==="true")?o.add(i):i instanceof Element&&n(i)}});u.observe(e,{childList:!0,subtree:!0});let l={observe(){u.observe(e,{childList:!0,subtree:!0})},disconnect(){u.disconnect()}};return O.push(l),()=>{u.disconnect();for(let s of r){let c=Q.get(s);c!=null&&(c===1?(s.removeAttribute("aria-hidden"),Q.delete(s)):Q.set(s,c-1))}l===O[O.length-1]?(O.pop(),O.length&&O[O.length-1].observe()):O.splice(O.indexOf(l),1)}}function Tr(t,e){let{triggerRef:o,popoverRef:r,isNonModal:n,isKeyboardDismissDisabled:a,shouldCloseOnInteractOutside:u,...l}=t,{overlayProps:s,underlayProps:c}=wr({isOpen:e.isOpen&&!l["data-react-aria-top-layer"],onClose:e.close,shouldCloseOnBlur:!0,isDismissable:!n,isKeyboardDismissDisabled:a,shouldCloseOnInteractOutside:u},r),{overlayProps:i,arrowProps:p,placement:$}=Er({...l,targetRef:o,overlayRef:r,isOpen:e.isOpen,onClose:n?e.close:void 0});return Sr({isDisabled:n||!e.isOpen}),W(()=>{if(e.isOpen&&!n&&r.current)return Br([r.current])},[n,e.isOpen,r]),{popoverProps:ee(s,i),arrowProps:p,underlayProps:c,placement:$}}const Rr=b.createContext({});function Fr(){var t;return(t=b.useContext(Rr))!==null&&t!==void 0?t:{}}const Rt=v.createContext(null);function Lr(t){let e=To(),{portalContainer:o=e?null:document.body,isExiting:r}=t,[n,a]=b.useState(!1),u=b.useMemo(()=>({contain:n,setContain:a}),[n,a]),{getContainer:l}=Fr();if(!t.portalContainer&&l&&(o=l()),!o)return null;let s=t.children;return t.disableFocusManagement||(s=v.createElement(Ge,{restoreFocus:!0,contain:n&&!r},s)),s=v.createElement(Rt.Provider,{value:u},v.createElement(ar,null,s)),ir.createPortal(s,o)}function Kr(){let t=b.useContext(Rt),e=t==null?void 0:t.setContain;W(()=>{e==null||e(!0)},[e])}var Ft={};Ft={longPressMessage:"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"};var Lt={};Lt={longPressMessage:"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"};var Kt={};Kt={longPressMessage:"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"};var It={};It={longPressMessage:"Langt tryk eller tryk på Alt + pil ned for at åbne menuen"};var Ot={};Ot={longPressMessage:"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"};var _t={};_t={longPressMessage:"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"};var zt={};zt={longPressMessage:"Long press or press Alt + ArrowDown to open menu"};var Ht={};Ht={longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"};var Nt={};Nt={longPressMessage:"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"};var Ut={};Ut={longPressMessage:"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"};var jt={};jt={longPressMessage:"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."};var Wt={};Wt={longPressMessage:"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"};var Vt={};Vt={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"};var Gt={};Gt={longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"};var Yt={};Yt={longPressMessage:"Premere a lungo o premere Alt + Freccia giù per aprire il menu"};var Zt={};Zt={longPressMessage:"長押しまたは Alt+下矢印キーでメニューを開く"};var qt={};qt={longPressMessage:"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"};var Xt={};Xt={longPressMessage:"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."};var Jt={};Jt={longPressMessage:"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"};var Qt={};Qt={longPressMessage:"Langt trykk eller trykk Alt + PilNed for å åpne menyen"};var eo={};eo={longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"};var to={};to={longPressMessage:"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"};var oo={};oo={longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"};var ro={};ro={longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"};var no={};no={longPressMessage:"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"};var ao={};ao={longPressMessage:"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"};var lo={};lo={longPressMessage:"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"};var so={};so={longPressMessage:"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"};var io={};io={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"};var uo={};uo={longPressMessage:"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"};var co={};co={longPressMessage:"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"};var fo={};fo={longPressMessage:"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"};var po={};po={longPressMessage:"长按或按 Alt + 向下方向键以打开菜单"};var $o={};$o={longPressMessage:"長按或按 Alt+向下鍵以開啟功能表"};var bo={};bo={"ar-AE":Ft,"bg-BG":Lt,"cs-CZ":Kt,"da-DK":It,"de-DE":Ot,"el-GR":_t,"en-US":zt,"es-ES":Ht,"et-EE":Nt,"fi-FI":Ut,"fr-FR":jt,"he-IL":Wt,"hr-HR":Vt,"hu-HU":Gt,"it-IT":Yt,"ja-JP":Zt,"ko-KR":qt,"lt-LT":Xt,"lv-LV":Jt,"nb-NO":Qt,"nl-NL":eo,"pl-PL":to,"pt-BR":oo,"pt-PT":ro,"ro-RO":no,"ru-RU":ao,"sk-SK":lo,"sl-SI":so,"sr-SP":io,"sv-SE":uo,"tr-TR":co,"uk-UA":fo,"zh-CN":po,"zh-TW":$o};function Ir(t){return t&&t.__esModule?t.default:t}function Or(t,e,o){let{type:r="menu",isDisabled:n,trigger:a="press"}=t,u=ie(),{triggerProps:l,overlayProps:s}=Xe({type:r},e,o),c=d=>{if(!n&&!(a==="longPress"&&!d.altKey)&&o&&o.current)switch(d.key){case"Enter":case" ":if(a==="longPress")return;case"ArrowDown":"continuePropagation"in d||d.stopPropagation(),d.preventDefault(),e.toggle("first");break;case"ArrowUp":"continuePropagation"in d||d.stopPropagation(),d.preventDefault(),e.toggle("last");break;default:"continuePropagation"in d&&d.continuePropagation()}},i=Ve(Ir(bo),"@react-aria/menu"),{longPressProps:p}=or({isDisabled:n||a!=="longPress",accessibilityDescription:i.format("longPressMessage"),onLongPressStart(){e.close()},onLongPress(){e.open("first")}}),$={onPressStart(d){d.pointerType!=="touch"&&d.pointerType!=="keyboard"&&!n&&e.open(d.pointerType==="virtual"?"first":null)},onPress(d){d.pointerType==="touch"&&!n&&e.toggle()}};return delete l.onPress,{menuTriggerProps:{...l,...a==="press"?$:p,id:u,onKeyDown:c},menuProps:{...s,"aria-labelledby":u,autoFocus:e.focusStrategy||!0,onClose:e.close}}}const mo=new WeakMap;function _r(t,e,o){let{shouldFocusWrap:r=!0,onKeyDown:n,onKeyUp:a,...u}=t;!t["aria-label"]&&!t["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let l=V(t,{labelable:!0}),{listProps:s}=Xo({...u,ref:o,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return mo.set(e,{onClose:t.onClose,onAction:t.onAction}),{menuProps:ee(l,{onKeyDown:n,onKeyUp:a},{role:"menu",...s,onKeyDown:c=>{var i;c.key!=="Escape"&&((i=s.onKeyDown)===null||i===void 0||i.call(s,c))}})}}function zr(t,e,o){let{id:r,key:n,closeOnSelect:a,isVirtualized:u,"aria-haspopup":l,onPressStart:s,onPressUp:c,onPress:i,onPressChange:p,onPressEnd:$,onHoverStart:d,onHoverChange:f,onHoverEnd:y,onKeyDown:m,onKeyUp:x,onFocus:h,onFocusChange:w,onBlur:F,selectionManager:E=e.selectionManager}=t,g=!!l,I=g&&t["aria-expanded"]==="true";var L;let A=(L=t.isDisabled)!==null&&L!==void 0?L:E.isDisabled(n);var C;let T=(C=t.isSelected)!==null&&C!==void 0?C:E.isSelected(n),R=mo.get(e),P=e.collection.getItem(n),M=t.onClose||R.onClose,N=Ro(),_=S=>{var $e;if(!g){if(!(P==null||($e=P.props)===null||$e===void 0)&&$e.onAction?P.props.onAction():t.onAction&&t.onAction(n),R.onAction){let Do=R.onAction;Do(n)}S.target instanceof HTMLAnchorElement&&P&&N.open(S.target,S,P.props.href,P.props.routerOptions)}},K="menuitem";g||(E.selectionMode==="single"?K="menuitemradio":E.selectionMode==="multiple"&&(K="menuitemcheckbox"));let k=ae(),z=ae(),G=ae(),Y={id:r,"aria-disabled":A||void 0,role:K,"aria-label":t["aria-label"],"aria-labelledby":k,"aria-describedby":[z,G].filter(Boolean).join(" ")||void 0,"aria-controls":t["aria-controls"],"aria-haspopup":l,"aria-expanded":t["aria-expanded"]};E.selectionMode!=="none"&&!g&&(Y["aria-checked"]=T),u&&(Y["aria-posinset"]=P==null?void 0:P.index,Y["aria-setsize"]=Jo(e.collection));let de=S=>{S.pointerType==="keyboard"&&_(S),s==null||s(S)},fe=S=>{S.pointerType!=="keyboard"&&(_(S),!g&&M&&(a??(E.selectionMode!=="multiple"||E.isLink(n)))&&M()),c==null||c(S)},{itemProps:U,isFocused:pe}=rr({selectionManager:E,key:n,ref:o,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:De,isPressed:yo}=Fo({onPressStart:de,onPress:i,onPressUp:fe,onPressChange:p,onPressEnd:$,isDisabled:A}),{hoverProps:Eo}=ze({isDisabled:A,onHoverStart(S){!Lo()&&!(I&&l==="dialog")&&(E.setFocused(!0),E.setFocusedKey(n)),d==null||d(S)},onHoverChange:f,onHoverEnd:y}),{keyboardProps:Po}=Oo({onKeyDown:S=>{if(S.repeat){S.continuePropagation();return}switch(S.key){case" ":!A&&E.selectionMode==="none"&&!g&&a!==!1&&M&&M();break;case"Enter":!A&&a!==!1&&!g&&M&&M();break;default:g||S.continuePropagation(),m==null||m(S);break}},onKeyUp:x}),{focusProps:Co}=Ko({onBlur:F,onFocus:h,onFocusChange:w}),Se=V(P==null?void 0:P.props);delete Se.id;let wo=Io(P==null?void 0:P.props);return{menuItemProps:{...Y,...ee(Se,wo,g?{onFocus:U.onFocus,"data-key":U["data-key"]}:U,De,Eo,Po,Co),tabIndex:U.tabIndex!=null&&I?-1:U.tabIndex},labelProps:{id:k},descriptionProps:{id:z},keyboardShortcutProps:{id:G},isFocused:pe,isSelected:T,isPressed:yo,isDisabled:A}}function Hr(t){let{heading:e,"aria-label":o}=t,r=ie();return{itemProps:{role:"presentation"},headingProps:e?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":o,"aria-labelledby":e?r:void 0}}}function Nr(t,e){let{role:o="dialog"}=t,r=ae();r=t["aria-label"]?void 0:r;let n=b.useRef(!1);return b.useEffect(()=>{if(e.current&&!e.current.contains(document.activeElement)){Me(e.current);let a=setTimeout(()=>{document.activeElement===e.current&&(n.current=!0,e.current&&(e.current.blur(),Me(e.current)),n.current=!1)},500);return()=>{clearTimeout(a)}}},[e]),Kr(),{dialogProps:{...V(t,{labelable:!0}),role:o,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||r,onBlur:a=>{n.current&&a.stopPropagation()}},titleProps:{id:r}}}function go(t){let[e,o]=We(t.isOpen,t.defaultOpen||!1,t.onOpenChange);const r=b.useCallback(()=>{o(!0)},[o]),n=b.useCallback(()=>{o(!1)},[o]),a=b.useCallback(()=>{o(!e)},[o,e]);return{isOpen:e,setOpen:o,open:r,close:n,toggle:a}}function vo(t){let e=go(t),[o,r]=b.useState(null),[n,a]=b.useState([]),u=()=>{a([]),e.close()};return{focusStrategy:o,...e,open(c=null){r(c),e.open()},toggle(c=null){r(c),e.toggle()},close(){u()},expandedKeysStack:n,openSubmenu:(c,i)=>{a(p=>i>p.length?p:[...p.slice(0,i),c])},closeSubmenu:(c,i)=>{a(p=>p[i]===c?p.slice(0,i):p)}}}class Ur{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let o=this.keyMap.get(e);var r;return o&&(r=o.prevKey)!==null&&r!==void 0?r:null}getKeyAfter(e){let o=this.keyMap.get(e);var r;return o&&(r=o.nextKey)!==null&&r!==void 0?r:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){var o;return(o=this.keyMap.get(e))!==null&&o!==void 0?o:null}at(e){const o=[...this.getKeys()];return this.getItem(o[e])}constructor(e,{expandedKeys:o}={}){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e,o=o||new Set;let r=l=>{if(this.keyMap.set(l.key,l),l.childNodes&&(l.type==="section"||o.has(l.key)))for(let s of l.childNodes)r(s)};for(let l of e)r(l);let n=null,a=0;for(let[l,s]of this.keyMap)n?(n.nextKey=l,s.prevKey=n.key):(this.firstKey=l,s.prevKey=void 0),s.type==="item"&&(s.index=a++),n=s,n.nextKey=void 0;var u;this.lastKey=(u=n==null?void 0:n.key)!==null&&u!==void 0?u:null}}function jr(t){let{onExpandedChange:e}=t,[o,r]=We(t.expandedKeys?new Set(t.expandedKeys):void 0,t.defaultExpandedKeys?new Set(t.defaultExpandedKeys):new Set,e),n=Ne(t),a=b.useMemo(()=>t.disabledKeys?new Set(t.disabledKeys):new Set,[t.disabledKeys]),u=nr(t,b.useCallback(s=>new Ur(s,{expandedKeys:o}),[o]),null);return b.useEffect(()=>{n.focusedKey!=null&&!u.getItem(n.focusedKey)&&n.setFocusedKey(null)},[u,n.focusedKey]),{collection:u,expandedKeys:o,disabledKeys:a,toggleKey:s=>{r(Wr(o,s))},setExpandedKeys:r,selectionManager:new Ue(u,n)}}function Wr(t,e){let o=new Set(t);return o.has(e)?o.delete(e):o.add(e),o}const Vr=b.createContext({placement:"bottom"}),Pe=b.createContext(null);function Gr(t,e){[t,e]=ue(t,e,Pe);let o=b.useContext(ce),r=go(t),n=t.isOpen!=null||t.defaultOpen!=null||!o?r:o,a=_o(e,n.isOpen)||t.isExiting||!1;if(ur()){let l=t.children;return typeof l=="function"&&(l=l({trigger:t.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),v.createElement(v.Fragment,null,l)}return n&&!n.isOpen&&!a?null:v.createElement(Yr,{...t,triggerRef:t.triggerRef,state:n,popoverRef:e,isExiting:a})}const hn=b.forwardRef(Gr);function Yr({state:t,isExiting:e,UNSTABLE_portalContainer:o,...r}){let n=b.useRef(null),[a,u]=b.useState(0);W(()=>{n.current&&t.isOpen&&u(n.current.getBoundingClientRect().width)},[t.isOpen,n]);var l;let{popoverProps:s,underlayProps:c,arrowProps:i,placement:p}=Tr({...r,offset:(l=r.offset)!==null&&l!==void 0?l:8,arrowSize:a},t),$=r.popoverRef,d=zo($,!!p)||r.isEntering||!1,f=te({...r,defaultClassName:"react-aria-Popover",values:{trigger:r.trigger||null,placement:p,isEntering:d,isExiting:e}}),y={...s.style,...f.style};return v.createElement(Lr,{...r,isExiting:e,portalContainer:o},!r.isNonModal&&t.isOpen&&v.createElement("div",{"data-testid":"underlay",...c,style:{position:"fixed",inset:0}}),v.createElement("div",{...ee(V(r),s),...f,ref:$,slot:r.slot||void 0,style:y,"data-trigger":r.trigger,"data-placement":p,"data-entering":d||void 0,"data-exiting":e||void 0},!r.isNonModal&&v.createElement(_e,{onDismiss:t.close}),v.createElement(Vr.Provider,{value:{...i,placement:p,ref:n}},f.children),v.createElement(_e,{onDismiss:t.close})))}const Zr=b.createContext({}),xo=b.createContext(null),Ce=b.createContext(null),we=b.createContext(null),se=b.createContext(null);function yn(t){let e=vo(t),o=b.useRef(null),{menuTriggerProps:r,menuProps:n}=Or({...t,type:"menu"},e,o),[a,u]=b.useState(null),l=b.useCallback(()=>{o.current&&u(o.current.offsetWidth+"px")},[o]);xe({ref:o,onResize:l});let s=b.useRef(null);return v.createElement(X,{values:[[xo,{...n,ref:s}],[ce,e],[we,e],[Pe,{trigger:"MenuTrigger",triggerRef:o,scrollRef:s,placement:"bottom start",style:{"--trigger-width":a}}]]},v.createElement(je,{...r,ref:o,isPressed:e.isOpen},t.children))}const qr=b.createContext(null);function Xr(t,e){return[t,e]=ue(t,e,xo),v.createElement(Go,{content:v.createElement(Yo,t)},o=>o.size>0&&v.createElement(Jr,{props:t,collection:o,menuRef:e}))}function Jr({props:t,collection:e,menuRef:o}){let r=jr({...t,collection:e,children:void 0}),n=b.useContext(we),{isVirtualized:a,CollectionRoot:u}=b.useContext(He),{menuProps:l}=_r({...t,isVirtualized:a,onClose:t.onClose||(n==null?void 0:n.close)},r,o),s=te({defaultClassName:"react-aria-Menu",className:t.className,style:t.style,values:{}});return v.createElement(Ge,null,v.createElement("div",{...V(t),...l,...s,ref:o,slot:t.slot||void 0,onScroll:t.onScroll},v.createElement(X,{values:[[Ce,r],[Qo,{elementType:"div"}],[Zo,{name:"MenuSection",render:en}],[qr,{parentMenuRef:o}],[Ee,null],[se,r.selectionManager]]},v.createElement(u,{collection:e,persistedKeys:qo(r.selectionManager.focusedKey),scrollRef:o}))))}const En=b.forwardRef(Xr);class Qr extends Ue{get focusedKey(){return this.parent.focusedKey}get isFocused(){return this.parent.isFocused}setFocusedKey(e,o){return this.parent.setFocusedKey(e,o)}setFocused(e){this.parent.setFocused(e)}get childFocusStrategy(){return this.parent.childFocusStrategy}constructor(e,o){super(e.collection,o),this.parent=e}}function en(t,e,o,r="react-aria-MenuSection"){var n,a;let u=b.useContext(Ce),{CollectionBranch:l}=b.useContext(He),[s,c]=jo();var i;let{headingProps:p,groupProps:$}=Hr({heading:c,"aria-label":(i=o.props["aria-label"])!==null&&i!==void 0?i:void 0}),d=te({defaultClassName:r,className:(n=o.props)===null||n===void 0?void 0:n.className,style:(a=o.props)===null||a===void 0?void 0:a.style,values:{}}),f=b.useContext(se),y=Ne(t),m=t.selectionMode!=null?new Qr(f,y):f;return v.createElement("section",{...V(t),...$,...d,ref:e},v.createElement(X,{values:[[er,{...p,ref:s}],[se,m]]},v.createElement(l,{collection:u.collection,parent:o})))}const Ee=b.createContext(null),Pn=Vo("item",function(e,o,r){var n;[e,o]=ue(e,o,Ee);let a=(n=Ho(Ee))===null||n===void 0?void 0:n.id,u=b.useContext(Ce),l=No(o),s=b.useContext(se),{menuItemProps:c,labelProps:i,descriptionProps:p,keyboardShortcutProps:$,...d}=zr({...e,id:a,key:r.key,selectionManager:s},u,l),{isFocusVisible:f,focusProps:y}=Uo(),{hoverProps:m,isHovered:x}=ze({isDisabled:d.isDisabled}),h=te({...e,id:void 0,children:r.rendered,defaultClassName:"react-aria-MenuItem",values:{...d,isHovered:x,isFocusVisible:f,selectionMode:s.selectionMode,selectionBehavior:s.selectionBehavior,hasSubmenu:!!e["aria-haspopup"],isOpen:e["aria-expanded"]==="true"}}),w=e.href?"a":"div";return v.createElement(w,{...ee(c,y,m),...h,ref:l,"data-disabled":d.isDisabled||void 0,"data-hovered":x||void 0,"data-focused":d.isFocused||void 0,"data-focus-visible":f||void 0,"data-pressed":d.isPressed||void 0,"data-selected":d.isSelected||void 0,"data-selection-mode":s.selectionMode==="none"?void 0:s.selectionMode,"data-has-submenu":!!e["aria-haspopup"]||void 0,"data-open":e["aria-expanded"]==="true"||void 0},v.createElement(X,{values:[[tr,{slots:{label:i,description:p}}],[Zr,$]]},h.children))}),ho=b.createContext(null),ce=b.createContext(null);function Cn(t){let e=vo(t),o=b.useRef(null),{triggerProps:r,overlayProps:n}=Xe({type:"dialog"},e,o);return r.id=ie(),n["aria-labelledby"]=r.id,v.createElement(X,{values:[[ce,e],[we,e],[ho,n],[Pe,{trigger:"DialogTrigger",triggerRef:o}]]},v.createElement(je,{...r,ref:o,isPressed:e.isOpen},t.children))}function tn(t,e){let o=t["aria-labelledby"];[t,e]=ue(t,e,ho);let{dialogProps:r,titleProps:n}=Nr({...t,"aria-labelledby":o},e),a=b.useContext(ce);!r["aria-label"]&&!r["aria-labelledby"]&&(t["aria-labelledby"]?r["aria-labelledby"]=t["aria-labelledby"]:console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));let u=te({defaultClassName:"react-aria-Dialog",className:t.className,style:t.style,children:t.children,values:{close:(a==null?void 0:a.close)||(()=>{})}});return v.createElement("section",{...V(t),...r,...u,ref:e,slot:t.slot||void 0},v.createElement(X,{values:[[Wo,{slots:{[ke]:{},title:{...n,level:2}}}],[So,{slots:{[ke]:{},close:{onPress:()=>a==null?void 0:a.close()}}}]]},u.children))}const wn=b.forwardRef(tn);export{yn as $,hn as a,En as b,Pn as c,Or as d,go as e,xe as f,ce as g,Pe as h,Cn as i,Br as j,ho as k,wn as l};