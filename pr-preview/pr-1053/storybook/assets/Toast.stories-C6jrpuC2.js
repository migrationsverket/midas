import{r as i,R as Q,j as r}from"./iframe-CY7earj9.js";import{r as M}from"./index-BMlkIDuL.js";import{c as A}from"./clsx-Ciqy0D92.js";import{F as we}from"./FeedbackStatusIcon-BnvGhNSd.js";import{s as G}from"./index-Bz5K3veL.js";import{c as F,a as Ce,d as Ne,$ as Re}from"./utils-BHj0WwlJ.js";import{b as Ie,g as Ve,x as I,G as T,c as Ae}from"./useFocusRing-D0zrayrq.js";import{$ as H}from"./useLocalizedStringFormatter-CXnWH6sO.js";import{B as x}from"./Button-DqjjUYYg.js";import{X as Se}from"./x-CXFUVrZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvjoN402.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-_3e5Batb.js";import"./info-Cy3fZjjt.js";import"./check-CPvnX8tP.js";import"./useLocalizedStringFormatter-CYqH8VQ7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./Button.module-Co5e5YHp.js";import"./Button-Cn9gwPsg.js";import"./Hidden-BWeB5vvs.js";import"./useLabels-B26E6Lmi.js";import"./useButton-D33c8uF-.js";import"./VisuallyHidden-BYqRYUAd.js";const O=1,V=Symbol.for("react-aria-landmark-manager");function Fe(t){return document.addEventListener("react-aria-landmark-manager-change",t),()=>document.removeEventListener("react-aria-landmark-manager-change",t)}function D(){if(typeof document>"u")return null;let t=document[V];return t&&t.version>=O?t:(document[V]=new De,document.dispatchEvent(new CustomEvent("react-aria-landmark-manager-change")),document[V])}function je(){return G.useSyncExternalStore(Fe,D,D)}class De{setupIfNeeded(){this.isListening||(document.addEventListener("keydown",this.f6Handler,{capture:!0}),document.addEventListener("focusin",this.focusinHandler,{capture:!0}),document.addEventListener("focusout",this.focusoutHandler,{capture:!0}),this.isListening=!0)}teardownIfNeeded(){!this.isListening||this.landmarks.length>0||this.refCount>0||(document.removeEventListener("keydown",this.f6Handler,{capture:!0}),document.removeEventListener("focusin",this.focusinHandler,{capture:!0}),document.removeEventListener("focusout",this.focusoutHandler,{capture:!0}),this.isListening=!1)}focusLandmark(e,n){var s,a;(a=this.landmarks.find(o=>o.ref.current===e))===null||a===void 0||(s=a.focus)===null||s===void 0||s.call(a,n)}getLandmarksByRole(e){return new Set(this.landmarks.filter(n=>n.role===e))}getLandmarkByRole(e){return this.landmarks.find(n=>n.role===e)}addLandmark(e){if(this.setupIfNeeded(),this.landmarks.find(a=>a.ref===e.ref)||!e.ref.current)return;if(this.landmarks.filter(a=>a.role==="main").length>1,this.landmarks.length===0){this.landmarks=[e],this.checkLabels(e.role);return}let n=0,s=this.landmarks.length-1;for(;n<=s;){let a=Math.floor((n+s)/2),o=e.ref.current.compareDocumentPosition(this.landmarks[a].ref.current);!!(o&Node.DOCUMENT_POSITION_PRECEDING||o&Node.DOCUMENT_POSITION_CONTAINS)?n=a+1:s=a-1}this.landmarks.splice(n,0,e),this.checkLabels(e.role)}updateLandmark(e){let n=this.landmarks.findIndex(s=>s.ref===e.ref);n>=0&&(this.landmarks[n]={...this.landmarks[n],...e},this.checkLabels(this.landmarks[n].role))}removeLandmark(e){this.landmarks=this.landmarks.filter(n=>n.ref!==e),this.teardownIfNeeded()}checkLabels(e){let n=this.getLandmarksByRole(e);n.size>1&&[...n].filter(s=>!s.label)}closestLandmark(e){let n=new Map(this.landmarks.map(a=>[a.ref.current,a])),s=e;for(;s&&!n.has(s)&&s!==document.body&&s.parentElement;)s=s.parentElement;return n.get(s)}getNextLandmark(e,{backward:n}){var s;let a=this.closestLandmark(e),o=n?this.landmarks.length-1:0;a&&(o=this.landmarks.indexOf(a)+(n?-1:1));let u=()=>{if(o<0){if(!e.dispatchEvent(new CustomEvent("react-aria-landmark-navigation",{detail:{direction:"backward"},bubbles:!0,cancelable:!0})))return!0;o=this.landmarks.length-1}else if(o>=this.landmarks.length){if(!e.dispatchEvent(new CustomEvent("react-aria-landmark-navigation",{detail:{direction:"forward"},bubbles:!0,cancelable:!0})))return!0;o=0}return o<0||o>=this.landmarks.length};if(u())return;let m=o;for(;!((s=this.landmarks[o].ref.current)===null||s===void 0)&&s.closest("[aria-hidden=true]");){if(o+=n?-1:1,u())return;if(o===m)break}return this.landmarks[o]}f6Handler(e){e.key==="F6"&&(e.altKey?this.focusMain():this.navigate(e.target,e.shiftKey))&&(e.preventDefault(),e.stopPropagation())}focusMain(){let e=this.getLandmarkByRole("main");return e&&e.ref.current&&document.contains(e.ref.current)?(this.focusLandmark(e.ref.current,"forward"),!0):!1}navigate(e,n){let s=this.getNextLandmark(e,{backward:n});if(!s)return!1;if(s.lastFocused){let a=s.lastFocused;if(document.body.contains(a))return a.focus(),!0}return s.ref.current&&document.contains(s.ref.current)?(this.focusLandmark(s.ref.current,n?"backward":"forward"),!0):!1}focusinHandler(e){let n=this.closestLandmark(e.target);n&&n.ref.current!==e.target&&this.updateLandmark({ref:n.ref,lastFocused:e.target});let s=e.relatedTarget;if(s){let a=this.closestLandmark(s);a&&a.ref.current===s&&a.blur()}}focusoutHandler(e){let n=e.target,s=e.relatedTarget;if(!s||s===document){let a=this.closestLandmark(n);a&&a.ref.current===n&&a.blur()}}createLandmarkController(){let e=this;return e.refCount++,e.setupIfNeeded(),{navigate(n,s){let a=s?.from||document.activeElement;return e.navigate(a,n==="backward")},focusNext(n){let s=n?.from||document.activeElement;return e.navigate(s,!1)},focusPrevious(n){let s=n?.from||document.activeElement;return e.navigate(s,!0)},focusMain(){return e.focusMain()},dispose(){e&&(e.refCount--,e.teardownIfNeeded(),e=null)}}}registerLandmark(e){return this.landmarks.find(n=>n.ref===e.ref)?this.updateLandmark(e):this.addLandmark(e),()=>this.removeLandmark(e.ref)}constructor(){this.landmarks=[],this.isListening=!1,this.refCount=0,this.version=O,this.f6Handler=this.f6Handler.bind(this),this.focusinHandler=this.focusinHandler.bind(this),this.focusoutHandler=this.focusoutHandler.bind(this)}}function Qe(t,e){const{role:n,"aria-label":s,"aria-labelledby":a,focus:o}=t;let u=je(),m=s||a,[v,p]=i.useState(!1),f=i.useCallback(()=>{p(!0)},[p]),h=i.useCallback(()=>{p(!1)},[p]);return F(()=>{if(u)return u.registerLandmark({ref:e,label:m,role:n,focus:o||f,blur:h})},[u,m,e,n,o,f,h]),i.useEffect(()=>{var l;v&&((l=e.current)===null||l===void 0||l.focus())},[v,e]),{landmarkProps:{role:n,tabIndex:v?-1:void 0,"aria-label":s,"aria-labelledby":a}}}var U={};U={close:"إغلاق",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} إشعار`,other:()=>`${e.number(t.count)} إشعارات`})}.`};var z={};z={close:"Затвори",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} известие`,other:()=>`${e.number(t.count)} известия`})}.`};var K={};K={close:"Zavřít",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} oznámení`,other:()=>`${e.number(t.count)} oznámení`})}.`};var q={};q={close:"Luk",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} besked`,other:()=>`${e.number(t.count)} beskeder`})}.`};var W={};W={close:"Schließen",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} Benachrichtigung`,other:()=>`${e.number(t.count)} Benachrichtigungen`})}.`};var Z={};Z={close:"Κλείσιμο",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} ειδοποίηση`,other:()=>`${e.number(t.count)} ειδοποιήσεις`})}.`};var J={};J={close:"Close",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} notification`,other:()=>`${e.number(t.count)} notifications`})}.`};var X={};X={close:"Cerrar",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} notificación`,other:()=>`${e.number(t.count)} notificaciones`})}.`};var Y={};Y={close:"Sule",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} teatis`,other:()=>`${e.number(t.count)} teatist`})}.`};var ee={};ee={close:"Sulje",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} ilmoitus`,other:()=>`${e.number(t.count)} ilmoitusta`})}.`};var te={};te={close:"Fermer",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} notification`,other:()=>`${e.number(t.count)} notifications`})}.`};var ne={};ne={close:"סגור",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} התראה`,other:()=>`${e.number(t.count)} התראות`})}.`};var se={};se={close:"Zatvori",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} obavijest`,other:()=>`${e.number(t.count)} obavijesti`})}.`};var ae={};ae={close:"Bezárás",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} értesítés`,other:()=>`${e.number(t.count)} értesítés`})}.`};var oe={};oe={close:"Chiudi",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} notifica`,other:()=>`${e.number(t.count)} notifiche`})}.`};var re={};re={close:"閉じる",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} 個の通知`,other:()=>`${e.number(t.count)} 個の通知`})}。`};var ie={};ie={close:"닫기",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)}개 알림`,other:()=>`${e.number(t.count)}개 알림`})}.`};var ue={};ue={close:"Uždaryti",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} pranešimas`,other:()=>`${e.number(t.count)} pranešimai`})}.`};var le={};le={close:"Aizvērt",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} paziņojums`,other:()=>`${e.number(t.count)} paziņojumi`})}.`};var ce={};ce={close:"Lukk",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} varsling`,other:()=>`${e.number(t.count)} varsler`})}.`};var de={};de={close:"Sluiten",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} melding`,other:()=>`${e.number(t.count)} meldingen`})}.`};var me={};me={close:"Zamknij",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} powiadomienie`,few:()=>`${e.number(t.count)} powiadomienia`,many:()=>`${e.number(t.count)} powiadomień`,other:()=>`${e.number(t.count)} powiadomienia`})}.`};var pe={};pe={close:"Fechar",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} notificação`,other:()=>`${e.number(t.count)} notificações`})}.`};var fe={};fe={close:"Fechar",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} notificação`,other:()=>`${e.number(t.count)} notificações`})}.`};var be={};be={close:"Închideţi",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} notificare`,other:()=>`${e.number(t.count)} notificări`})}.`};var he={};he={close:"Закрыть",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} уведомление`,other:()=>`${e.number(t.count)} уведомления`})}.`};var $e={};$e={close:"Zatvoriť",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} oznámenie`,few:()=>`${e.number(t.count)} oznámenia`,other:()=>`${e.number(t.count)} oznámení`})}.`};var ve={};ve={close:"Zapri",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} obvestilo`,two:()=>`${e.number(t.count)} obvestili`,few:()=>`${e.number(t.count)} obvestila`,other:()=>`${e.number(t.count)} obvestil`})}.`};var ge={};ge={close:"Zatvori",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} obaveštenje`,other:()=>`${e.number(t.count)} obaveštenja`})}.`};var xe={};xe={close:"Stäng",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} meddelande`,other:()=>`${e.number(t.count)} meddelanden`})}.`};var ke={};ke={close:"Kapat",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} bildirim`,other:()=>`${e.number(t.count)} bildirim`})}.`};var ye={};ye={close:"Закрити",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} сповіщення`,other:()=>`${e.number(t.count)} сповіщення`})}.`};var Te={};Te={close:"关闭",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} 个通知`,other:()=>`${e.number(t.count)} 个通知`})}。`};var _e={};_e={close:"關閉",notifications:(t,e)=>`${e.plural(t.count,{one:()=>`${e.number(t.count)} 個通知`,other:()=>`${e.number(t.count)} 個通知`})}。`};var j={};j={"ar-AE":U,"bg-BG":z,"cs-CZ":K,"da-DK":q,"de-DE":W,"el-GR":Z,"en-US":J,"es-ES":X,"et-EE":Y,"fi-FI":ee,"fr-FR":te,"he-IL":ne,"hr-HR":se,"hu-HU":ae,"it-IT":oe,"ja-JP":re,"ko-KR":ie,"lt-LT":ue,"lv-LV":le,"nb-NO":ce,"nl-NL":de,"pl-PL":me,"pt-BR":pe,"pt-PT":fe,"ro-RO":be,"ru-RU":he,"sk-SK":$e,"sl-SI":ve,"sr-SP":ge,"sv-SE":xe,"tr-TR":ke,"uk-UA":ye,"zh-CN":Te,"zh-TW":_e};function Me(t){return t&&t.__esModule?t.default:t}function Ge(t,e,n){let{key:s,timer:a,timeout:o}=t.toast;i.useEffect(()=>{if(!(a==null||o==null))return a.reset(o),()=>{a.pause()}},[a,o]);let u=Ce(),m=Ne(),v=H(Me(j),"@react-aria/toast"),[p,f]=i.useState(!1);return F(()=>{f(!0)},[]),{toastProps:{...Ie(t,{labelable:!0}),role:"alertdialog","aria-modal":"false","aria-labelledby":t["aria-labelledby"]||u,"aria-describedby":t["aria-describedby"]||m,tabIndex:0},contentProps:{role:"alert","aria-atomic":"true","aria-hidden":p?void 0:"true"},titleProps:{id:u},descriptionProps:{id:m},closeButtonProps:{"aria-label":v.format("close"),onPress:()=>e.close(s)}}}function He(t){return t&&t.__esModule?t.default:t}function Oe(t,e,n){let s=H(He(j),"@react-aria/toast"),{landmarkProps:a}=Qe({role:"region","aria-label":t["aria-label"]||s.format("notifications",{count:e.visibleToasts.length})},n),o=i.useRef(!1),u=i.useRef(!1),m=i.useCallback(()=>{o.current||u.current?e.pauseAll():e.resumeAll()},[e]),{hoverProps:v}=Ve({onHoverStart:()=>{o.current=!0,m()},onHoverEnd:()=>{o.current=!1,m()}}),p=i.useRef([]),f=i.useRef(e.visibleToasts),h=i.useRef(null);F(()=>{if(h.current===-1||e.visibleToasts.length===0||!n.current){p.current=[],f.current=e.visibleToasts;return}if(p.current=[...n.current.querySelectorAll('[role="alertdialog"]')],f.current.length===e.visibleToasts.length&&e.visibleToasts.every((d,b)=>d.key===f.current[b].key)){f.current=e.visibleToasts;return}let c=f.current.map((d,b)=>({...d,i:b,isRemoved:!e.visibleToasts.some($=>d.key===$.key)})),P=c.findIndex(d=>d.i===h.current&&d.isRemoved);if(P>-1){var y;if(I()==="pointer"&&(!((y=l.current)===null||y===void 0)&&y.isConnected))T(l.current);else{let d=0,b,$;for(;d<=P;)c[d].isRemoved||($=Math.max(0,d-1)),d++;for(;d<c.length;){if(!c[d].isRemoved){b=d-1;break}d++}$===void 0&&b===void 0&&($=0),$>=0&&$<p.current.length?T(p.current[$]):b>=0&&b<p.current.length&&T(p.current[b])}}f.current=e.visibleToasts},[e.visibleToasts,n]);let l=i.useRef(null),{focusWithinProps:Le}=Ae({onFocusWithin:c=>{u.current=!0,l.current=c.relatedTarget,m()},onBlurWithin:()=>{u.current=!1,l.current=null,m()}});return i.useEffect(()=>{var c;e.visibleToasts.length===0&&(!((c=l.current)===null||c===void 0)&&c.isConnected)&&(I()==="pointer"?T(l.current):l.current.focus(),l.current=null)},[n,e.visibleToasts.length]),i.useEffect(()=>()=>{var c;!((c=l.current)===null||c===void 0)&&c.isConnected&&(I()==="pointer"?T(l.current):l.current.focus(),l.current=null)},[n]),{regionProps:Re(a,v,Le,{tabIndex:-1,"data-react-aria-top-layer":!0,onFocus:c=>{let P=c.target.closest('[role="alertdialog"]');h.current=p.current.findIndex(y=>y===P)},onBlur:()=>{h.current=-1}})}}function S(t={}){let{maxVisibleToasts:e=1,wrapUpdate:n}=t,s=i.useMemo(()=>new Pe({maxVisibleToasts:e,wrapUpdate:n}),[e,n]);return Ee(s)}function Ee(t){let e=i.useCallback(a=>t.subscribe(a),[t]),n=i.useCallback(()=>t.visibleToasts,[t]);return{visibleToasts:G.useSyncExternalStore(e,n,n),add:(a,o)=>t.add(a,o),close:a=>t.close(a),pauseAll:()=>t.pauseAll(),resumeAll:()=>t.resumeAll()}}class Pe{runWithWrapUpdate(e,n){this.wrapUpdate?this.wrapUpdate(e,n):e()}subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}add(e,n={}){let s="_"+Math.random().toString(36).slice(2),a={...n,content:e,key:s,timer:n.timeout?new Ue(()=>this.close(s),n.timeout):void 0};return this.queue.unshift(a),this.updateVisibleToasts("add"),s}close(e){let n=this.queue.findIndex(o=>o.key===e);if(n>=0){var s,a;(s=(a=this.queue[n]).onClose)===null||s===void 0||s.call(a),this.queue.splice(n,1)}this.updateVisibleToasts("remove")}updateVisibleToasts(e){this.visibleToasts=this.queue.slice(0,this.maxVisibleToasts),this.runWithWrapUpdate(()=>{for(let n of this.subscriptions)n()},e)}pauseAll(){for(let e of this.visibleToasts)e.timer&&e.timer.pause()}resumeAll(){for(let e of this.visibleToasts)e.timer&&e.timer.resume()}clear(){this.queue=[],this.updateVisibleToasts("clear")}constructor(e){this.queue=[],this.subscriptions=new Set,this.visibleToasts=[];var n;this.maxVisibleToasts=(n=e?.maxVisibleToasts)!==null&&n!==void 0?n:1/0,this.wrapUpdate=e?.wrapUpdate}}class Ue{reset(e){this.remaining=e,this.resume()}pause(){this.timerId!=null&&(clearTimeout(this.timerId),this.timerId=null,this.remaining-=Date.now()-this.startTime)}resume(){this.remaining<=0||(this.startTime=Date.now(),this.timerId=setTimeout(()=>{this.timerId=null,this.remaining=0,this.callback()},this.remaining))}constructor(e,n){this.startTime=null,this.remaining=n,this.callback=e}}const ze="_toastRegion_1gp8e_49",Ke="_toast_1gp8e_49",qe="_success_1gp8e_98",We="_info_1gp8e_106",Ze="_important_1gp8e_114",Je="_warning_1gp8e_122",Xe="_icon_1gp8e_130",Ye="_toastContent_1gp8e_144",et="_toastMessage_1gp8e_151",tt="_viewTransition_1gp8e_157",nt="_slideInTop_1gp8e_1",st="_slideInEnd_1gp8e_1",at="_slideOutTop_1gp8e_1",ot="_slideOutEnd_1gp8e_1",g={toastRegion:ze,toast:Ke,success:qe,info:We,important:Ze,warning:Je,icon:Xe,toastContent:Ye,toastMessage:et,viewTransition:tt,slideInTop:nt,slideInEnd:st,slideOutTop:at,slideOutEnd:ot},Be={wrapUpdate(t){"startViewTransition"in document?document.startViewTransition(()=>{M.flushSync(t)}):t()},maxVisibleToasts:5},_=new Pe(Be),k=t=>{const e=Ee(_);return e.visibleToasts.length>0?M.createPortal(r.jsx(E,{...t,state:e}),document.body):null},N=({children:t,...e})=>{const n=S(Be);return r.jsxs(r.Fragment,{children:[typeof t=="function"?t(n):t,n.visibleToasts.length>0&&r.jsx(E,{...e,state:n})]})};function E({state:t,className:e,...n}){const s=Q.useRef(null),{regionProps:a}=Oe(n,t,s);return r.jsx("div",{...a,ref:s,className:A(g.toastRegion,e),children:t.visibleToasts.map(o=>r.jsx(R,{toast:o,state:t},o.key))})}function R({state:t,className:e,...n}){const s=Q.useRef(null),{toastProps:a,contentProps:o,titleProps:u,closeButtonProps:m}=Ge(n,t);return r.jsxs("div",{...a,ref:s,className:A(g.toast,g[n.toast.content.type],e),style:{viewTransitionName:n.toast.key,viewTransitionClass:g.viewTransition},children:[r.jsxs("div",{...o,className:A(g.toastContent,o.className),children:[r.jsx(we,{"aria-hidden":!0,className:g.icon,status:n.toast.content.type}),r.jsxs("div",{children:[r.jsx("p",{className:g.toastMessage,...u,children:n.toast.content.message}),n.toast.content.children]})]}),r.jsx(x,{variant:"icon",...m,children:r.jsx(Se,{size:20,"aria-hidden":!0})})]})}try{E.displayName="ToastRegion",E.__docgenInfo={description:"",displayName:"ToastRegion",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"ToastState<T>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:'"Notifications"'},description:"An accessibility label for the toast region.",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{R.displayName="Toast",R.__docgenInfo={description:"",displayName:"Toast",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"ToastState<T>"}},toast:{defaultValue:null,description:"The toast object.",name:"toast",required:!0,type:{name:"QueuedToast<T>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{S.displayName="useToastState",S.__docgenInfo={description:`Provides state management for a toast queue. Toasts display brief, temporary notifications
of actions, errors, or other events in an application.`,displayName:"useToastState",props:{maxVisibleToasts:{defaultValue:null,description:"The maximum number of toasts to display at a time.",name:"maxVisibleToasts",required:!1,type:{name:"number"}},wrapUpdate:{defaultValue:null,description:"Function to wrap updates in (i.e. document.startViewTransition()).",name:"wrapUpdate",required:!1,type:{name:"((fn: () => void, action: ToastAction) => void)"}}}}}catch{}try{k.displayName="GlobalToastRegion",k.__docgenInfo={description:"",displayName:"GlobalToastRegion",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:'"Notifications"'},description:"An accessibility label for the toast region.",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{N.displayName="ToastProvider",N.__docgenInfo={description:"",displayName:"ToastProvider",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:'"Notifications"'},description:"An accessibility label for the toast region.",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const Ct={component:k,subcomponents:{ToastProvider:N,ToastRegion:E,Toast:R},title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:"Toast visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser. Det finns två sätt att använda toast: **globalt** med `toastQueue` eller **lokalt** med `ToastProvider`.\n\n### MidasToast\n\nObjektet som skickas till `.add()`:\n\n| Egenskap | Typ | Beskrivning |\n|----------|-----|-------------|\n| `message` | `string` | Meddelandetext |\n| `type` | `'success' \\| 'info' \\| 'important' \\| 'warning'` | Variant |\n| `children` | `ReactNode` | Valfritt extra innehåll |\n\n### ToastState / toastQueue\n\nMetoderna som finns på `state` (från `ToastProvider`) och `toastQueue` (global):\n\n| Metod | Returtyp | Beskrivning |\n|-------|----------|-------------|\n| `.add(content, options?)` | `string` | Lägger till en toast, returnerar en nyckel |\n| `.close(key)` | `void` | Stänger en toast programmatiskt |\n| `.visibleToasts` | `QueuedToast[]` | Lista av synliga toasts |\n\nOptions till `.add()`: `{ timeout?: number, onClose?: () => void }`"}}}},B={parameters:{docs:{description:{story:"Använd `GlobalToastRegion` och `toastQueue` för en global kö. Placera `<GlobalToastRegion />` någonstans i appen och anropa `toastQueue.add()` var som helst."},source:{code:`import { GlobalToastRegion, toastQueue } from '@midas-ds/components'

<GlobalToastRegion />

<Button
  onPress={() =>
    toastQueue.add(
      { type: 'success', message: 'Toasten är klar' },
      { timeout: 5000 },
    )
  }
>
  Visa toast
</Button>`}}},render:()=>r.jsxs(r.Fragment,{children:[r.jsx(k,{}),r.jsx(x,{onPress:()=>_.add({type:"success",message:"Toasten är klar"},{timeout:5e3}),children:"Visa toast"})]})},L={parameters:{docs:{description:{story:"Använd `ToastProvider` för en lokal kö. Providern ger tillgång till `state` via render props, och toast-regionen renderas automatiskt intill innehållet."},source:{code:`import { ToastProvider } from '@midas-ds/components'

<ToastProvider>
  {state => (
    <Button
      onPress={() =>
        state.add(
          { type: 'success', message: 'Lokalt meddelande' },
          { timeout: 5000 },
        )
      }
    >
      Visa lokal toast
    </Button>
  )}
</ToastProvider>`}}},render:()=>r.jsx("div",{style:{height:200},children:r.jsx(N,{children:t=>r.jsx(x,{onPress:()=>t.add({type:"success",message:"Lokalt meddelande"},{timeout:5e3}),children:"Visa lokal toast"})})})},w={name:"Varianter",parameters:{docs:{description:{story:"Toast har fyra varianter: `success`, `info`, `important` och `warning`."},source:{code:`toastQueue.add({ type: 'success', message: '...' })
toastQueue.add({ type: 'info', message: '...' })
toastQueue.add({ type: 'important', message: '...' })
toastQueue.add({ type: 'warning', message: '...' })`}}},render:()=>{const t=["success","info","important","warning"];return r.jsxs(r.Fragment,{children:[r.jsx(k,{}),r.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:t.map(e=>r.jsx(x,{onPress:()=>_.add({type:e,message:`Detta är en ${e}-toast`},{timeout:5e3}),children:e},e))})]})}},C={name:"Programmatisk stängning",parameters:{docs:{description:{story:"`.add()` returnerar en nyckel som kan användas för att stänga en toast med `.close()`. Callbacken `onClose` triggas oavsett om toasten stängs manuellt eller via timeout."},source:{code:`const key = toastQueue.add(
  { type: 'info', message: 'Bearbetar...' },
)

// Stäng toasten programmatiskt
toastQueue.close(key)

// Eller med onClose-callback
toastQueue.add(
  { type: 'success', message: 'Filen sparades' },
  {
    timeout: 5000,
    onClose: () => console.log('Toasten stängdes'),
  },
)`}}},render:()=>{let t;return r.jsxs(r.Fragment,{children:[r.jsx(k,{}),r.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[r.jsx(x,{onPress:()=>{t=_.add({type:"info",message:"Denna toast stängs inte automatiskt"})},children:"Visa toast"}),r.jsx(x,{onPress:()=>{t&&_.close(t)},children:"Stäng programmatiskt"})]})]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Använd \`GlobalToastRegion\` och \`toastQueue\` för en global kö. Placera \`<GlobalToastRegion />\` någonstans i appen och anropa \`toastQueue.add()\` var som helst.'
      },
      source: {
        code: \`import { GlobalToastRegion, toastQueue } from '@midas-ds/components'

<GlobalToastRegion />

<Button
  onPress={() =>
    toastQueue.add(
      { type: 'success', message: 'Toasten är klar' },
      { timeout: 5000 },
    )
  }
>
  Visa toast
</Button>\`
      }
    }
  },
  render: () => <>
      <GlobalToastRegion />
      <Button onPress={() => toastQueue.add({
      type: 'success',
      message: 'Toasten är klar'
    }, {
      timeout: 5000
    })}>
        Visa toast
      </Button>
    </>
}`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Använd \`ToastProvider\` för en lokal kö. Providern ger tillgång till \`state\` via render props, och toast-regionen renderas automatiskt intill innehållet.'
      },
      source: {
        code: \`import { ToastProvider } from '@midas-ds/components'

<ToastProvider>
  {state => (
    <Button
      onPress={() =>
        state.add(
          { type: 'success', message: 'Lokalt meddelande' },
          { timeout: 5000 },
        )
      }
    >
      Visa lokal toast
    </Button>
  )}
</ToastProvider>\`
      }
    }
  },
  render: () => <div style={{
    height: 200
  }}>
      <ToastProvider>
        {state => <Button onPress={() => state.add({
        type: 'success',
        message: 'Lokalt meddelande'
      }, {
        timeout: 5000
      })}>
            Visa lokal toast
          </Button>}
      </ToastProvider>
    </div>
}`,...L.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Varianter',
  parameters: {
    docs: {
      description: {
        story: 'Toast har fyra varianter: \`success\`, \`info\`, \`important\` och \`warning\`.'
      },
      source: {
        code: \`toastQueue.add({ type: 'success', message: '...' })
toastQueue.add({ type: 'info', message: '...' })
toastQueue.add({ type: 'important', message: '...' })
toastQueue.add({ type: 'warning', message: '...' })\`
      }
    }
  },
  render: () => {
    const types: MidasToast['type'][] = ['success', 'info', 'important', 'warning'];
    return <>
        <GlobalToastRegion />
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
          {types.map(type => <Button key={type} onPress={() => toastQueue.add({
          type,
          message: \`Detta är en \${type}-toast\`
        }, {
          timeout: 5000
        })}>
              {type}
            </Button>)}
        </div>
      </>;
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Programmatisk stängning',
  parameters: {
    docs: {
      description: {
        story: '\`.add()\` returnerar en nyckel som kan användas för att stänga en toast med \`.close()\`. Callbacken \`onClose\` triggas oavsett om toasten stängs manuellt eller via timeout.'
      },
      source: {
        code: \`const key = toastQueue.add(
  { type: 'info', message: 'Bearbetar...' },
)

// Stäng toasten programmatiskt
toastQueue.close(key)

// Eller med onClose-callback
toastQueue.add(
  { type: 'success', message: 'Filen sparades' },
  {
    timeout: 5000,
    onClose: () => console.log('Toasten stängdes'),
  },
)\`
      }
    }
  },
  render: () => {
    let currentKey: string | undefined;
    return <>
        <GlobalToastRegion />
        <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>
          <Button onPress={() => {
          currentKey = toastQueue.add({
            type: 'info',
            message: 'Denna toast stängs inte automatiskt'
          });
        }}>
            Visa toast
          </Button>
          <Button onPress={() => {
          if (currentKey) toastQueue.close(currentKey);
        }}>
            Stäng programmatiskt
          </Button>
        </div>
      </>;
  }
}`,...C.parameters?.docs?.source}}};const Nt=["Global","Local","Variants","ProgrammaticClose"];export{B as Global,L as Local,C as ProgrammaticClose,w as Variants,Nt as __namedExportsOrder,Ct as default};
