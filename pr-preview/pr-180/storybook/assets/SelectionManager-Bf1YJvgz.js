import{r as v,R as z}from"./index-ClcD9ViR.js";import{r as de}from"./index-ZuzByk-F.js";import{$ as he}from"./FocusScope-Do-PkUts.js";import{I as ye,m as ae,b as N,J as pe,F as ve,o as fe,t as Q,K as te,L as le,M as be}from"./useFocusable-CUvAewCR.js";import{a as ie,b as me,c as se}from"./scrollIntoView-CFanVOW_.js";import{$ as Ke}from"./context-C9cAOQ0o.js";import{$ as ge}from"./useDescription-D06dHw1z.js";import{$ as Se}from"./useControlledState-DFHhQ_7Z.js";const $e=500;function we(s){let{isDisabled:e,onLongPressStart:t,onLongPressEnd:l,onLongPress:i,threshold:c=$e,accessibilityDescription:n}=s;const a=v.useRef(void 0);let{addGlobalListener:f,removeGlobalListener:k}=ye(),{pressProps:S}=ae({isDisabled:e,onPressStart(y){if(y.continuePropagation(),(y.pointerType==="mouse"||y.pointerType==="touch")&&(t&&t({...y,type:"longpressstart"}),a.current=setTimeout(()=>{y.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),i&&i({...y,type:"longpress"}),a.current=void 0},c),y.pointerType==="touch")){let h=E=>{E.preventDefault()};f(y.target,"contextmenu",h,{once:!0}),f(window,"pointerup",()=>{setTimeout(()=>{k(y.target,"contextmenu",h)},30)},{once:!0})}},onPressEnd(y){a.current&&clearTimeout(a.current),l&&(y.pointerType==="mouse"||y.pointerType==="touch")&&l({...y,type:"longpressend"})}}),T=ge(i&&!e?n:void 0);return{longPressProps:N(S,T)}}function X(s){return pe()?s.altKey:s.ctrlKey}function V(s){return ve()?s.metaKey:s.ctrlKey}const xe=1e3;function Pe(s){let{keyboardDelegate:e,selectionManager:t,onTypeSelect:l}=s,i=v.useRef({search:"",timeout:void 0}).current,c=n=>{let a=De(n.key);if(!(!a||n.ctrlKey||n.metaKey||!n.currentTarget.contains(n.target))){if(a===" "&&i.search.trim().length>0&&(n.preventDefault(),"continuePropagation"in n||n.stopPropagation()),i.search+=a,e.getKeyForSearch!=null){let f=e.getKeyForSearch(i.search,t.focusedKey);f==null&&(f=e.getKeyForSearch(i.search)),f!=null&&(t.setFocusedKey(f),l&&l(f))}clearTimeout(i.timeout),i.timeout=setTimeout(()=>{i.search=""},xe)}};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?c:void 0}}}function De(s){return s.length===1||!/^[A-Z]/i.test(s)?s:""}function Ve(s){let{selectionManager:e,keyboardDelegate:t,ref:l,autoFocus:i=!1,shouldFocusWrap:c=!1,disallowEmptySelection:n=!1,disallowSelectAll:a=!1,selectOnFocus:f=e.selectionBehavior==="replace",disallowTypeAhead:k=!1,shouldUseVirtualFocus:S,allowsTabNavigation:T=!1,isVirtualized:y,scrollRef:h=l,linkBehavior:E="action"}=s,{direction:D}=Ke(),d=fe(),K=o=>{var m;if(o.altKey&&o.key==="Tab"&&o.preventDefault(),!(!((m=l.current)===null||m===void 0)&&m.contains(o.target)))return;const g=(u,U)=>{if(u!=null){if(e.isLink(u)&&E==="selection"&&f&&!X(o)){var L;de.flushSync(()=>{e.setFocusedKey(u,U)});let _=(L=h.current)===null||L===void 0?void 0:L.querySelector(`[data-key="${CSS.escape(u.toString())}"]`),ee=e.getItemProps(u);_&&d.open(_,o,ee.href,ee.routerOptions);return}if(e.setFocusedKey(u,U),e.isLink(u)&&E==="override")return;o.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&!X(o)&&e.replaceSelection(u)}};switch(o.key){case"ArrowDown":if(t.getKeyBelow){var w,P,x;let u=e.focusedKey!=null?(w=t.getKeyBelow)===null||w===void 0?void 0:w.call(t,e.focusedKey):(P=t.getFirstKey)===null||P===void 0?void 0:P.call(t);u==null&&c&&(u=(x=t.getFirstKey)===null||x===void 0?void 0:x.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),g(u))}break;case"ArrowUp":if(t.getKeyAbove){var A,r,B;let u=e.focusedKey!=null?(A=t.getKeyAbove)===null||A===void 0?void 0:A.call(t,e.focusedKey):(r=t.getLastKey)===null||r===void 0?void 0:r.call(t);u==null&&c&&(u=(B=t.getLastKey)===null||B===void 0?void 0:B.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),g(u))}break;case"ArrowLeft":if(t.getKeyLeftOf){var q,G,W;let u=e.focusedKey!=null?(q=t.getKeyLeftOf)===null||q===void 0?void 0:q.call(t,e.focusedKey):null;u==null&&c&&(u=D==="rtl"?(G=t.getFirstKey)===null||G===void 0?void 0:G.call(t,e.focusedKey):(W=t.getLastKey)===null||W===void 0?void 0:W.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),g(u,D==="rtl"?"first":"last"))}break;case"ArrowRight":if(t.getKeyRightOf){var H,j,J;let u=e.focusedKey!=null?(H=t.getKeyRightOf)===null||H===void 0?void 0:H.call(t,e.focusedKey):null;u==null&&c&&(u=D==="rtl"?(j=t.getLastKey)===null||j===void 0?void 0:j.call(t,e.focusedKey):(J=t.getFirstKey)===null||J===void 0?void 0:J.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),g(u,D==="rtl"?"last":"first"))}break;case"Home":if(t.getFirstKey){o.preventDefault();let u=t.getFirstKey(e.focusedKey,V(o));e.setFocusedKey(u),u!=null&&(V(o)&&o.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&e.replaceSelection(u))}break;case"End":if(t.getLastKey){o.preventDefault();let u=t.getLastKey(e.focusedKey,V(o));e.setFocusedKey(u),u!=null&&(V(o)&&o.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&e.replaceSelection(u))}break;case"PageDown":if(t.getKeyPageBelow&&e.focusedKey!=null){let u=t.getKeyPageBelow(e.focusedKey);u!=null&&(o.preventDefault(),g(u))}break;case"PageUp":if(t.getKeyPageAbove&&e.focusedKey!=null){let u=t.getKeyPageAbove(e.focusedKey);u!=null&&(o.preventDefault(),g(u))}break;case"a":V(o)&&e.selectionMode==="multiple"&&a!==!0&&(o.preventDefault(),e.selectAll());break;case"Escape":!n&&e.selectedKeys.size!==0&&(o.stopPropagation(),o.preventDefault(),e.clearSelection());break;case"Tab":if(!T){if(o.shiftKey)l.current.focus();else{let u=he(l.current,{tabbable:!0}),U,L;do L=u.lastChild(),L&&(U=L);while(L);U&&!U.contains(document.activeElement)&&le(U)}break}}},p=v.useRef({top:0,left:0});ie(h,"scroll",y?void 0:()=>{var o,m,g,w;p.current={top:(g=(o=h.current)===null||o===void 0?void 0:o.scrollTop)!==null&&g!==void 0?g:0,left:(w=(m=h.current)===null||m===void 0?void 0:m.scrollLeft)!==null&&w!==void 0?w:0}});let b=o=>{if(e.isFocused){o.currentTarget.contains(o.target)||e.setFocused(!1);return}if(o.currentTarget.contains(o.target)){if(e.setFocused(!0),e.focusedKey==null){var m,g;let x=r=>{r!=null&&(e.setFocusedKey(r),f&&e.replaceSelection(r))},A=o.relatedTarget;var w,P;A&&o.currentTarget.compareDocumentPosition(A)&Node.DOCUMENT_POSITION_FOLLOWING?x((w=e.lastSelectedKey)!==null&&w!==void 0?w:(m=t.getLastKey)===null||m===void 0?void 0:m.call(t)):x((P=e.firstSelectedKey)!==null&&P!==void 0?P:(g=t.getFirstKey)===null||g===void 0?void 0:g.call(t))}else!y&&h.current&&(h.current.scrollTop=p.current.top,h.current.scrollLeft=p.current.left);if(e.focusedKey!=null&&h.current){let x=h.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);x&&(x.contains(document.activeElement)||le(x),te()==="keyboard"&&se(x,{containingElement:l.current}))}}},$=o=>{o.currentTarget.contains(o.relatedTarget)||e.setFocused(!1)};const F=v.useRef(i);v.useEffect(()=>{if(F.current){var o,m;let P=null;var g;i==="first"&&(P=(g=(o=t.getFirstKey)===null||o===void 0?void 0:o.call(t))!==null&&g!==void 0?g:null);var w;i==="last"&&(P=(w=(m=t.getLastKey)===null||m===void 0?void 0:m.call(t))!==null&&w!==void 0?w:null);let x=e.selectedKeys;if(x.size){for(let A of x)if(e.canSelectItem(A)){P=A;break}}e.setFocused(!0),e.setFocusedKey(P),P==null&&!S&&l.current&&Q(l.current)}},[]);let R=v.useRef(e.focusedKey);v.useEffect(()=>{if(e.isFocused&&e.focusedKey!=null&&(e.focusedKey!==R.current||F.current)&&h.current&&l.current){let o=te(),m=l.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);if(!m)return;(o==="keyboard"||F.current)&&(me(h.current,m),o!=="virtual"&&se(m,{containingElement:l.current}))}!S&&e.isFocused&&e.focusedKey==null&&R.current!=null&&l.current&&Q(l.current),R.current=e.focusedKey,F.current=!1}),ie(l,"react-aria-focus-scope-restore",o=>{o.preventDefault(),e.setFocused(!0)});let C={onKeyDown:K,onFocus:b,onBlur:$,onMouseDown(o){h.current===o.target&&o.preventDefault()}},{typeSelectProps:I}=Pe({keyboardDelegate:t,selectionManager:e});k||(C=N(I,C));let O;return S||(O=e.focusedKey==null?0:-1),{collectionProps:{...C,tabIndex:O}}}function qe(s){let{selectionManager:e,key:t,ref:l,shouldSelectOnPressUp:i,shouldUseVirtualFocus:c,focus:n,isDisabled:a,onAction:f,allowsDifferentPressOrigin:k,linkBehavior:S="action"}=s,T=fe(),y=r=>{if(r.pointerType==="keyboard"&&X(r))e.toggleSelection(t);else{if(e.selectionMode==="none")return;if(e.isLink(t)){if(S==="selection"&&l.current){let B=e.getItemProps(t);T.open(l.current,r,B.href,B.routerOptions),e.setSelectedKeys(e.selectedKeys);return}else if(S==="override"||S==="none")return}e.selectionMode==="single"?e.isSelected(t)&&!e.disallowEmptySelection?e.toggleSelection(t):e.replaceSelection(t):r&&r.shiftKey?e.extendSelection(t):e.selectionBehavior==="toggle"||r&&(V(r)||r.pointerType==="touch"||r.pointerType==="virtual")?e.toggleSelection(t):e.replaceSelection(t)}};v.useEffect(()=>{t===e.focusedKey&&e.isFocused&&!c&&(n?n():document.activeElement!==l.current&&l.current&&Q(l.current))},[l,t,e.focusedKey,e.childFocusStrategy,e.isFocused,c]),a=a||e.isDisabled(t);let h={};!c&&!a?h={tabIndex:t===e.focusedKey?0:-1,onFocus(r){r.target===l.current&&e.setFocusedKey(t)}}:a&&(h.onMouseDown=r=>{r.preventDefault()});let E=e.isLink(t)&&S==="override",D=e.isLink(t)&&S!=="selection"&&S!=="none",d=!a&&e.canSelectItem(t)&&!E,K=(f||D)&&!a,p=K&&(e.selectionBehavior==="replace"?!d:!d||e.isEmpty),b=K&&d&&e.selectionBehavior==="replace",$=p||b,F=v.useRef(null),R=$&&d,C=v.useRef(!1),I=v.useRef(!1),O=r=>{if(f&&f(),D&&l.current){let B=e.getItemProps(t);T.open(l.current,r,B.href,B.routerOptions)}},o={};i?(o.onPressStart=r=>{F.current=r.pointerType,C.current=R,r.pointerType==="keyboard"&&(!$||oe())&&y(r)},k?(o.onPressUp=p?void 0:r=>{r.pointerType!=="keyboard"&&d&&y(r)},o.onPress=p?O:void 0):o.onPress=r=>{if(p||b&&r.pointerType!=="mouse"){if(r.pointerType==="keyboard"&&!ne())return;O(r)}else r.pointerType!=="keyboard"&&d&&y(r)}):(o.onPressStart=r=>{F.current=r.pointerType,C.current=R,I.current=p,d&&(r.pointerType==="mouse"&&!p||r.pointerType==="keyboard"&&(!K||oe()))&&y(r)},o.onPress=r=>{(r.pointerType==="touch"||r.pointerType==="pen"||r.pointerType==="virtual"||r.pointerType==="keyboard"&&$&&ne()||r.pointerType==="mouse"&&I.current)&&($?O(r):d&&y(r))}),h["data-key"]=t,o.preventFocusOnPress=c;let{pressProps:m,isPressed:g}=ae(o),w=b?r=>{F.current==="mouse"&&(r.stopPropagation(),r.preventDefault(),O(r))}:void 0,{longPressProps:P}=we({isDisabled:!R,onLongPress(r){r.pointerType==="touch"&&(y(r),e.setSelectionBehavior("toggle"))}}),x=r=>{F.current==="touch"&&C.current&&r.preventDefault()},A=e.isLink(t)?r=>{be.isOpening||r.preventDefault()}:void 0;return{itemProps:N(h,d||p?m:{},R?P:{},{onDoubleClick:w,onDragStartCapture:x,onClick:A}),isPressed:g,isSelected:e.isSelected(t),isFocused:e.isFocused&&e.focusedKey===t,isDisabled:a,allowsSelection:d,hasAction:$}}function ne(){let s=window.event;return(s==null?void 0:s.key)==="Enter"}function oe(){let s=window.event;return(s==null?void 0:s.key)===" "||(s==null?void 0:s.code)==="Space"}class Fe{build(e,t){return this.context=t,re(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if(z.isValidElement(t)&&t.type===z.Fragment)yield*this.iterateCollection({children:t.props.children,items:l});else if(typeof t=="function"){if(!l)throw new Error("props.children was a function but props.items is missing");let i=0;for(let c of l)yield*this.getFullNode({value:c,index:i},{renderer:t}),i++}else{let i=[];z.Children.forEach(t,n=>{n&&i.push(n)});let c=0;for(let n of i){let a=this.getFullNode({element:n,index:c},{});for(let f of a)c++,yield f}}}getKey(e,t,l,i){if(e.key!=null)return e.key;if(t.type==="cell"&&t.key!=null)return`${i}${t.key}`;let c=t.value;if(c!=null){var n;let a=(n=c.key)!==null&&n!==void 0?n:c.id;if(a==null)throw new Error("No key found for item");return a}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,i){if(z.isValidElement(e.element)&&e.element.type===z.Fragment){let d=[];z.Children.forEach(e.element.props.children,p=>{d.push(p)});var c;let K=(c=e.index)!==null&&c!==void 0?c:0;for(const p of d)yield*this.getFullNode({element:p,index:K++},t,l,i);return}let n=e.element;if(!n&&e.value&&t&&t.renderer){let d=this.cache.get(e.value);if(d&&(!d.shouldInvalidate||!d.shouldInvalidate(this.context))){d.index=e.index,d.parentKey=i?i.key:null,yield d;return}n=t.renderer(e.value)}if(z.isValidElement(n)){let d=n.type;if(typeof d!="function"&&typeof d.getCollectionNode!="function"){let $=n.type;throw new Error(`Unknown element <${$}> in collection.`)}let K=d.getCollectionNode(n.props,this.context);var a;let p=(a=e.index)!==null&&a!==void 0?a:0,b=K.next();for(;!b.done&&b.value;){let $=b.value;e.index=p;var f;let F=(f=$.key)!==null&&f!==void 0?f:null;F==null&&(F=$.element?null:this.getKey(n,e,t,l));let C=[...this.getFullNode({...$,key:F,index:p,wrapper:ke(e.wrapper,$.wrapper)},this.getChildState(t,$),l?`${l}${n.key}`:n.key,i)];for(let I of C){var k,S;I.value=(S=(k=$.value)!==null&&k!==void 0?k:e.value)!==null&&S!==void 0?S:null,I.value&&this.cache.set(I.value,I);var T;if(e.type&&I.type!==e.type)throw new Error(`Unsupported type <${Y(I.type)}> in <${Y((T=i==null?void 0:i.type)!==null&&T!==void 0?T:"unknown parent type")}>. Only <${Y(e.type)}> is supported.`);p++,yield I}b=K.next(C)}return}if(e.key==null||e.type==null)return;let y=this;var h,E;let D={type:e.type,props:e.props,key:e.key,parentKey:i?i.key:null,value:(h=e.value)!==null&&h!==void 0?h:null,level:i?i.level+1:0,index:e.index,rendered:e.rendered,textValue:(E=e.textValue)!==null&&E!==void 0?E:"","aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes||!1,childNodes:re(function*(){if(!e.hasChildNodes||!e.childNodes)return;let d=0;for(let K of e.childNodes()){K.key!=null&&(K.key=`${D.key}${K.key}`);let p=y.getFullNode({...K,index:d},y.getChildState(t,K),D.key,D);for(let b of p)d++,yield b}})};yield D}constructor(){this.cache=new WeakMap}}function re(s){let e=[],t=null;return{*[Symbol.iterator](){for(let l of e)yield l;t||(t=s());for(let l of t)e.push(l),yield l}}}function ke(s,e){if(s&&e)return t=>s(e(t));if(s)return s;if(e)return e}function Y(s){return s[0].toUpperCase()+s.slice(1)}function Ge(s,e,t){let l=v.useMemo(()=>new Fe,[]),{children:i,items:c,collection:n}=s;return v.useMemo(()=>{if(n)return n;let f=l.build({children:i,items:c},t);return e(f)},[l,i,c,n,t,e])}function Te(s,e){return typeof e.getChildren=="function"?e.getChildren(s.key):s.childNodes}function Ee(s){return Ie(s,0)}function Ie(s,e){if(e<0)return;let t=0;for(let l of s){if(t===e)return l;t++}}function We(s){let e;for(let t of s)e=t;return e}function Z(s,e,t){if(e.parentKey===t.parentKey)return e.index-t.index;let l=[...ce(s,e),e],i=[...ce(s,t),t],c=l.slice(0,i.length).findIndex((n,a)=>n!==i[a]);return c!==-1?(e=l[c],t=i[c],e.index-t.index):l.findIndex(n=>n===t)>=0?1:(i.findIndex(n=>n===e)>=0,-1)}function ce(s,e){let t=[],l=e;for(;(l==null?void 0:l.parentKey)!=null;)l=s.getItem(l.parentKey),l&&t.unshift(l);return t}class M extends Set{constructor(e,t,l){super(e),e instanceof M?(this.anchorKey=t??e.anchorKey,this.currentKey=l??e.currentKey):(this.anchorKey=t??null,this.currentKey=l??null)}}function Ae(s,e){if(s.size!==e.size)return!1;for(let t of s)if(!e.has(t))return!1;return!0}function He(s){let{selectionMode:e="none",disallowEmptySelection:t=!1,allowDuplicateSelectionEvents:l,selectionBehavior:i="toggle",disabledBehavior:c="all"}=s,n=v.useRef(!1),[,a]=v.useState(!1),f=v.useRef(null),k=v.useRef(null),[,S]=v.useState(null),T=v.useMemo(()=>ue(s.selectedKeys),[s.selectedKeys]),y=v.useMemo(()=>ue(s.defaultSelectedKeys,new M),[s.defaultSelectedKeys]),[h,E]=Se(T,y,s.onSelectionChange),D=v.useMemo(()=>s.disabledKeys?new Set(s.disabledKeys):new Set,[s.disabledKeys]),[d,K]=v.useState(i);i==="replace"&&d==="toggle"&&typeof h=="object"&&h.size===0&&K("replace");let p=v.useRef(i);return v.useEffect(()=>{i!==p.current&&(K(i),p.current=i)},[i]),{selectionMode:e,disallowEmptySelection:t,selectionBehavior:d,setSelectionBehavior:K,get isFocused(){return n.current},setFocused(b){n.current=b,a(b)},get focusedKey(){return f.current},get childFocusStrategy(){return k.current},setFocusedKey(b,$="first"){f.current=b,k.current=$,S(b)},selectedKeys:h,setSelectedKeys(b){(l||!Ae(b,h))&&E(b)},disabledKeys:D,disabledBehavior:c}}function ue(s,e){return s?s==="all"?"all":new M(s):e}class je{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){if(this.state.selectionMode==="none")return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys==="all"?this.canSelectItem(t):this.state.selectedKeys.has(t)}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(l=>t.has(l)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let i=this.collection.getItem(l);(!e||i&&Z(this.collection,i,e)<0)&&(e=i)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get lastSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let i=this.collection.getItem(l);(!e||i&&Z(this.collection,i,e)>0)&&(e=i)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l;if(this.state.selectedKeys==="all")l=new M([t],t,t);else{let n=this.state.selectedKeys;var i;let a=(i=n.anchorKey)!==null&&i!==void 0?i:t;l=new M(n,a,t);var c;for(let f of this.getKeyRange(a,(c=n.currentKey)!==null&&c!==void 0?c:t))l.delete(f);for(let f of this.getKeyRange(t,a))this.canSelectItem(f)&&l.add(f)}this.state.setSelectedKeys(l)}getKeyRange(e,t){let l=this.collection.getItem(e),i=this.collection.getItem(t);return l&&i?Z(this.collection,l,i)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){var l;if(!((l=this.layoutDelegate)===null||l===void 0)&&l.getKeyRange)return this.layoutDelegate.getKeyRange(e,t);let i=[],c=e;for(;c!=null;){let n=this.collection.getItem(c);if(n&&(n.type==="item"||n.type==="cell"&&this.allowsCellSelection)&&i.push(c),c===t)return i;c=this.collection.getKeyAfter(c)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type==="cell"&&this.allowsCellSelection)return e;for(;t&&t.type!=="item"&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!=="item"?null:t.key}toggleSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l=new M(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);l.has(t)?l.delete(t):this.canSelectItem(t)&&(l.add(t),l.anchorKey=t,l.currentKey=t),!(this.disallowEmptySelection&&l.size===0)&&this.state.setSelectedKeys(l)}replaceSelection(e){if(this.selectionMode==="none")return;let t=this.getKey(e);if(t==null)return;let l=this.canSelectItem(t)?new M([t],t,t):new M;this.state.setSelectedKeys(l)}setSelectedKeys(e){if(this.selectionMode==="none")return;let t=new M;for(let l of e){let i=this.getKey(l);if(i!=null&&(t.add(i),this.selectionMode==="single"))break}this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l!=null;){if(this.canSelectItem(l)){var i;let n=this.collection.getItem(l);(n==null?void 0:n.type)==="item"&&e.push(l);var c;n!=null&&n.hasChildNodes&&(this.allowsCellSelection||n.type!=="item")&&t((c=(i=Ee(Te(n,this.collection)))===null||i===void 0?void 0:i.key)!==null&&c!==void 0?c:null)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){!this.isSelectAll&&this.selectionMode==="multiple"&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new M)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior==="toggle"||t&&(t.pointerType==="touch"||t.pointerType==="virtual")?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){var t;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(e))return!1;let l=this.collection.getItem(e);return!(!l||!(l==null||(t=l.props)===null||t===void 0)&&t.isDisabled||l.type==="cell"&&!this.allowsCellSelection)}isDisabled(e){var t,l;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(e)||!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.isDisabled))}isLink(e){var t,l;return!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.href)}getItemProps(e){var t;return(t=this.collection.getItem(e))===null||t===void 0?void 0:t.props}constructor(e,t,l){this.collection=e,this.state=t;var i;this.allowsCellSelection=(i=l==null?void 0:l.allowsCellSelection)!==null&&i!==void 0?i:!1,this._isSelectAll=null,this.layoutDelegate=(l==null?void 0:l.layoutDelegate)||null}}export{He as $,Ge as a,je as b,Pe as c,Ve as d,Te as e,qe as f,we as g,We as h,Ie as i,Ee as j};