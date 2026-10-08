import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{I as r,M as i,_t as a,a as o,ct as s,g as c,h as l,n as u,o as d,rt as f,st as p,t as ee,vt as m}from"./useHover-HIgY4R0z.js";import{C as h,S as te,_ as g,m as ne,p as re,v as ie,y as ae}from"./utils-DmT07BLw.js";import{t as oe}from"./react-dom-CvX0TCLz.js";import{t as se}from"./shim-DTZXyK8i.js";import{n as ce,r as le}from"./useLocalizedStringFormatter-C3Bjg1IJ.js";import{n as ue}from"./iframe-BbZcth8b.js";import{n as de,t as fe}from"./clsx-BbIth5Jl.js";import{n as pe,t as _}from"./Button-CWoDBW--.js";import{n as me,t as he}from"./FeedbackStatusIcon-C9IU8CXY.js";import{n as ge,t as _e}from"./x-PqIRWUdI.js";function ve(e){return document.addEventListener(`react-aria-landmark-manager-change`,e),()=>document.removeEventListener(`react-aria-landmark-manager-change`,e)}function ye(){if(typeof document>`u`)return null;let e=document[b];return e&&e.version>=y?e:(document[b]=new Ce,document.dispatchEvent(new CustomEvent(`react-aria-landmark-manager-change`)),document[b])}function be(){return(0,Se.useSyncExternalStore)(ve,ye,ye)}function xe(e,t){let{role:n,"aria-label":r,"aria-labelledby":i,focus:a}=e,o=be(),s=r||i,[c,l]=(0,v.useState)(!1),u=(0,v.useCallback)(()=>{l(!0)},[l]),d=(0,v.useCallback)(()=>{l(!1)},[l]);return te(()=>{if(o)return o.registerLandmark({ref:t,label:s,role:n,focus:a||u,blur:d})},[o,s,t,n,a,u,d]),(0,v.useEffect)(()=>{c&&t.current?.focus()},[c,t]),{landmarkProps:{role:n,tabIndex:c?-1:void 0,"aria-label":r,"aria-labelledby":i}}}var v,Se,y,b,Ce;function we(){return(we=e((()=>{s(),h(),v=n(),Se=se(),y=1,b=Symbol.for(`react-aria-landmark-manager`),Ce=class{constructor(){this.landmarks=[],this.isListening=!1,this.refCount=0,this.version=y,this.f6Handler=this.f6Handler.bind(this),this.focusinHandler=this.focusinHandler.bind(this),this.focusoutHandler=this.focusoutHandler.bind(this)}setupIfNeeded(){this.isListening||=(document.addEventListener(`keydown`,this.f6Handler,{capture:!0}),document.addEventListener(`focusin`,this.focusinHandler,{capture:!0}),document.addEventListener(`focusout`,this.focusoutHandler,{capture:!0}),!0)}teardownIfNeeded(){!this.isListening||this.landmarks.length>0||this.refCount>0||(document.removeEventListener(`keydown`,this.f6Handler,{capture:!0}),document.removeEventListener(`focusin`,this.focusinHandler,{capture:!0}),document.removeEventListener(`focusout`,this.focusoutHandler,{capture:!0}),this.isListening=!1)}focusLandmark(e,t){this.landmarks.find(t=>t.ref.current===e)?.focus?.(t)}getLandmarksByRole(e){return new Set(this.landmarks.filter(t=>t.role===e))}getLandmarkByRole(e){return this.landmarks.find(t=>t.role===e)}addLandmark(e){if(this.setupIfNeeded(),this.landmarks.find(t=>t.ref===e.ref)||!e.ref.current)return;if(this.landmarks.filter(e=>e.role===`main`).length,this.landmarks.length===0){this.landmarks=[e],this.checkLabels(e.role);return}let t=0,n=this.landmarks.length-1;for(;t<=n;){let r=Math.floor((t+n)/2),i=e.ref.current.compareDocumentPosition(this.landmarks[r].ref.current);i&Node.DOCUMENT_POSITION_PRECEDING||i&Node.DOCUMENT_POSITION_CONTAINS?t=r+1:n=r-1}this.landmarks.splice(t,0,e),this.checkLabels(e.role)}updateLandmark(e){let t=this.landmarks.findIndex(t=>t.ref===e.ref);t>=0&&(this.landmarks[t]={...this.landmarks[t],...e},this.checkLabels(this.landmarks[t].role))}removeLandmark(e){this.landmarks=this.landmarks.filter(t=>t.ref!==e),this.teardownIfNeeded()}checkLabels(e){let t=this.getLandmarksByRole(e);t.size>1&&[...t].filter(e=>!e.label).length}closestLandmark(e){let t=new Map(this.landmarks.map(e=>[e.ref.current,e])),n=e;for(;n&&!t.has(n)&&n!==document.body&&n.parentElement;)n=n.parentElement;return t.get(n)}getNextLandmark(e,{backward:t}){let n=this.closestLandmark(e),r=t?this.landmarks.length-1:0;n&&(r=this.landmarks.indexOf(n)+(t?-1:1));let i=()=>{if(r<0){if(!e.dispatchEvent(new CustomEvent(`react-aria-landmark-navigation`,{detail:{direction:`backward`},bubbles:!0,cancelable:!0})))return!0;r=this.landmarks.length-1}else if(r>=this.landmarks.length){if(!e.dispatchEvent(new CustomEvent(`react-aria-landmark-navigation`,{detail:{direction:`forward`},bubbles:!0,cancelable:!0})))return!0;r=0}return r<0||r>=this.landmarks.length};if(i())return;let a=r;for(;this.landmarks[r].ref.current?.closest(`[aria-hidden=true]`);){if(r+=t?-1:1,i())return;if(r===a)break}return this.landmarks[r]}f6Handler(e){e.key===`F6`&&(e.altKey?this.focusMain():this.navigate(p(e),e.shiftKey))&&(e.preventDefault(),e.stopPropagation())}focusMain(){let e=this.getLandmarkByRole(`main`);return e&&e.ref.current&&e.ref.current.isConnected?(this.focusLandmark(e.ref.current,`forward`),!0):!1}navigate(e,t){let n=this.getNextLandmark(e,{backward:t});if(!n)return!1;if(n.lastFocused){let e=n.lastFocused;if(f(document.body,e))return e.focus(),!0}return n.ref.current&&n.ref.current.isConnected?(this.focusLandmark(n.ref.current,t?`backward`:`forward`),!0):!1}focusinHandler(e){let t=this.closestLandmark(p(e));t&&t.ref.current!==p(e)&&this.updateLandmark({ref:t.ref,lastFocused:p(e)});let n=e.relatedTarget;if(n){let e=this.closestLandmark(n);e&&e.ref.current===n&&e.blur()}}focusoutHandler(e){let t=p(e),n=e.relatedTarget;if(!n||n===document){let e=this.closestLandmark(t);e&&e.ref.current===t&&e.blur()}}createLandmarkController(){let e=this;return e.refCount++,e.setupIfNeeded(),{navigate(t,n){let r=n?.from||document.activeElement;return e.navigate(r,t===`backward`)},focusNext(t){let n=t?.from||document.activeElement;return e.navigate(n,!1)},focusPrevious(t){let n=t?.from||document.activeElement;return e.navigate(n,!0)},focusMain(){return e.focusMain()},dispose(){e&&=(e.refCount--,e.teardownIfNeeded(),null)}}}registerLandmark(e){return this.landmarks.find(t=>t.ref===e.ref)?this.updateLandmark(e):this.addLandmark(e),()=>this.removeLandmark(e.ref)}}})))()}var x;function Te(){return(Te=e((()=>{x={},x={close:`إغلاق`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{625}\u{634}\u{639}\u{627}\u{631}`,other:()=>`${t.number(e.count)} \u{625}\u{634}\u{639}\u{627}\u{631}\u{627}\u{62A}`})}.`}})))()}var S;function Ee(){return(Ee=e((()=>{S={},S={close:`Затвори`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{435}`,other:()=>`${t.number(e.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{44F}`})}.`}})))()}var C;function De(){return(De=e((()=>{C={},C={close:`Zavřít`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} ozn\xe1men\xed`,other:()=>`${t.number(e.count)} ozn\xe1men\xed`})}.`}})))()}var w;function Oe(){return(Oe=e((()=>{w={},w={close:`Luk`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} besked`,other:()=>`${t.number(e.count)} beskeder`})}.`}})))()}var T;function ke(){return(ke=e((()=>{T={},T={close:`Schließen`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} Benachrichtigung`,other:()=>`${t.number(e.count)} Benachrichtigungen`})}.`}})))()}var E;function Ae(){return(Ae=e((()=>{E={},E={close:`Κλείσιμο`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3AF}\u{3B7}\u{3C3}\u{3B7}`,other:()=>`${t.number(e.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3B9}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`})}.`}})))()}var D;function je(){return(je=e((()=>{D={},D={close:`Close`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notification`,other:()=>`${t.number(e.count)} notifications`})}.`}})))()}var O;function Me(){return(Me=e((()=>{O={},O={close:`Cerrar`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notificaci\xf3n`,other:()=>`${t.number(e.count)} notificaciones`})}.`}})))()}var k;function Ne(){return(Ne=e((()=>{k={},k={close:`Sule`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} teatis`,other:()=>`${t.number(e.count)} teatist`})}.`}})))()}var A;function Pe(){return(Pe=e((()=>{A={},A={close:`Sulje`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} ilmoitus`,other:()=>`${t.number(e.count)} ilmoitusta`})}.`}})))()}var j;function Fe(){return(Fe=e((()=>{j={},j={close:`Fermer`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notification`,other:()=>`${t.number(e.count)} notifications`})}.`}})))()}var M;function Ie(){return(Ie=e((()=>{M={},M={close:`סגור`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D4}`,other:()=>`${t.number(e.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D5}\u{5EA}`})}.`}})))()}var N;function Le(){return(Le=e((()=>{N={},N={close:`Zatvori`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} obavijest`,other:()=>`${t.number(e.count)} obavijesti`})}.`}})))()}var P;function Re(){return(Re=e((()=>{P={},P={close:`Bezárás`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \xe9rtes\xedt\xe9s`,other:()=>`${t.number(e.count)} \xe9rtes\xedt\xe9s`})}.`}})))()}var F;function ze(){return(ze=e((()=>{F={},F={close:`Chiudi`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notifica`,other:()=>`${t.number(e.count)} notifiche`})}.`}})))()}var I;function Be(){return(Be=e((()=>{I={},I={close:`閉じる`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`,other:()=>`${t.number(e.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`})}\u{3002}`}})))()}var L;function Ve(){return(Ve=e((()=>{L={},L={close:`닫기`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)}\u{AC1C} \u{C54C}\u{B9BC}`,other:()=>`${t.number(e.count)}\u{AC1C} \u{C54C}\u{B9BC}`})}.`}})))()}var R;function He(){return(He=e((()=>{R={},R={close:`Uždaryti`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} prane\u{161}imas`,other:()=>`${t.number(e.count)} prane\u{161}imai`})}.`}})))()}var Ue;function We(){return(We=e((()=>{Ue={},Ue={close:`Aizvērt`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} pazi\u{146}ojums`,other:()=>`${t.number(e.count)} pazi\u{146}ojumi`})}.`}})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge={},Ge={close:`Lukk`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} varsling`,other:()=>`${t.number(e.count)} varsler`})}.`}})))()}var qe;function Je(){return(Je=e((()=>{qe={},qe={close:`Sluiten`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} melding`,other:()=>`${t.number(e.count)} meldingen`})}.`}})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye={},Ye={close:`Zamknij`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} powiadomienie`,few:()=>`${t.number(e.count)} powiadomienia`,many:()=>`${t.number(e.count)} powiadomie\u{144}`,other:()=>`${t.number(e.count)} powiadomienia`})}.`}})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze={},Ze={close:`Fechar`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notifica\xe7\xe3o`,other:()=>`${t.number(e.count)} notifica\xe7\xf5es`})}.`}})))()}var $e;function et(){return(et=e((()=>{$e={},$e={close:`Fechar`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notifica\xe7\xe3o`,other:()=>`${t.number(e.count)} notifica\xe7\xf5es`})}.`}})))()}var tt;function nt(){return(nt=e((()=>{tt={},tt={close:`Închideţi`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notificare`,other:()=>`${t.number(e.count)} notific\u{103}ri`})}.`}})))()}var rt;function it(){return(it=e((()=>{rt={},rt={close:`Закрыть`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{435}`,other:()=>`${t.number(e.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{44F}`})}.`}})))()}var at;function ot(){return(ot=e((()=>{at={},at={close:`Zatvoriť`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} ozn\xe1menie`,few:()=>`${t.number(e.count)} ozn\xe1menia`,other:()=>`${t.number(e.count)} ozn\xe1men\xed`})}.`}})))()}var st;function ct(){return(ct=e((()=>{st={},st={close:`Zapri`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} obvestilo`,two:()=>`${t.number(e.count)} obvestili`,few:()=>`${t.number(e.count)} obvestila`,other:()=>`${t.number(e.count)} obvestil`})}.`}})))()}var lt;function ut(){return(ut=e((()=>{lt={},lt={close:`Zatvori`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} obave\u{161}tenje`,other:()=>`${t.number(e.count)} obave\u{161}tenja`})}.`}})))()}var dt;function ft(){return(ft=e((()=>{dt={},dt={close:`Stäng`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} meddelande`,other:()=>`${t.number(e.count)} meddelanden`})}.`}})))()}var pt;function mt(){return(mt=e((()=>{pt={},pt={close:`Kapat`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} bildirim`,other:()=>`${t.number(e.count)} bildirim`})}.`}})))()}var ht;function gt(){return(gt=e((()=>{ht={},ht={close:`Закрити`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`,other:()=>`${t.number(e.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`})}.`}})))()}var _t;function vt(){return(vt=e((()=>{_t={},_t={close:`关闭`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{4E2A}\u{901A}\u{77E5}`,other:()=>`${t.number(e.count)} \u{4E2A}\u{901A}\u{77E5}`})}\u{3002}`}})))()}var yt;function bt(){return(bt=e((()=>{yt={},yt={close:`關閉`,notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} \u{500B}\u{901A}\u{77E5}`,other:()=>`${t.number(e.count)} \u{500B}\u{901A}\u{77E5}`})}\u{3002}`}})))()}var z;function xt(){return(xt=e((()=>{Te(),Ee(),De(),Oe(),ke(),Ae(),je(),Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),z={},z={"ar-AE":x,"bg-BG":S,"cs-CZ":C,"da-DK":w,"de-DE":T,"el-GR":E,"en-US":D,"es-ES":O,"et-EE":k,"fi-FI":A,"fr-FR":j,"he-IL":M,"hr-HR":N,"hu-HU":P,"it-IT":F,"ja-JP":I,"ko-KR":L,"lt-LT":R,"lv-LV":Ue,"nb-NO":Ge,"nl-NL":qe,"pl-PL":Ye,"pt-BR":Ze,"pt-PT":$e,"ro-RO":tt,"ru-RU":rt,"sk-SK":at,"sl-SI":st,"sr-SP":lt,"sv-SE":dt,"tr-TR":pt,"uk-UA":ht,"zh-CN":_t,"zh-TW":yt}})))()}function St(e){return e&&e.__esModule?e.default:e}function Ct(e,t,n){let{key:r,timer:i,timeout:a}=e.toast;(0,wt.useEffect)(()=>{if(i!=null&&a!=null)return i.reset(a),()=>{i.pause()}},[i,a]);let o=ie(),s=g(),c=ce(St(z),`@react-aria/toast`),[u,d]=(0,wt.useState)(!1);return te(()=>{d(!0)},[]),{toastProps:{...l(e,{labelable:!0}),role:`alertdialog`,"aria-modal":`false`,"aria-labelledby":e[`aria-labelledby`]||o,"aria-describedby":e[`aria-describedby`]||s,tabIndex:0},contentProps:{role:`alert`,"aria-atomic":`true`,"aria-hidden":u?void 0:`true`},titleProps:{id:o},descriptionProps:{id:s},closeButtonProps:{"aria-label":c.format(`close`),onPress:()=>t.close(r)}}}var wt;function Tt(){return(Tt=e((()=>{c(),xt(),ae(),h(),le(),wt=n()})))()}function Et(e){return e&&e.__esModule?e.default:e}function Dt(e,t,n){let r=ce(Et(z),`@react-aria/toast`),{landmarkProps:s}=xe({role:`region`,"aria-label":e[`aria-label`]||r.format(`notifications`,{count:t.visibleToasts.length})},n),c=(0,B.useRef)(!1),l=(0,B.useRef)(!1),u=(0,B.useCallback)(()=>{c.current||l.current?t.pauseAll():t.resumeAll()},[t]),{hoverProps:d}=ee({onHoverStart:()=>{c.current=!0,u()},onHoverEnd:()=>{c.current=!1,u()}}),f=(0,B.useRef)([]),m=(0,B.useRef)(t.visibleToasts),h=(0,B.useRef)(null);te(()=>{if(h.current===-1||t.visibleToasts.length===0||!n.current){f.current=[],m.current=t.visibleToasts;return}if(f.current=[...n.current.querySelectorAll(`[role="alertdialog"]`)],m.current.length===t.visibleToasts.length&&t.visibleToasts.every((e,t)=>e.key===m.current[t].key)){m.current=t.visibleToasts;return}let e=m.current.map((e,n)=>({...e,i:n,isRemoved:!t.visibleToasts.some(t=>e.key===t.key)})),r=e.findIndex(e=>e.i===h.current&&e.isRemoved);if(r>-1){if(i()===`pointer`&&g.current?.isConnected)a(g.current);else{let t=0,n,i;for(;t<=r;)e[t].isRemoved||(i=Math.max(0,t-1)),t++;for(;t<e.length;){if(!e[t].isRemoved){n=t-1;break}t++}i===void 0&&n===void 0&&(i=0),i>=0&&i<f.current.length?a(f.current[i]):n>=0&&n<f.current.length&&a(f.current[n])}}m.current=t.visibleToasts},[t.visibleToasts,n]);let g=(0,B.useRef)(null),{focusWithinProps:ne}=o({onFocusWithin:e=>{l.current=!0,g.current=e.relatedTarget,u()},onBlurWithin:()=>{l.current=!1,g.current=null,u()}});return(0,B.useEffect)(()=>{t.visibleToasts.length===0&&g.current?.isConnected&&(i()===`pointer`?a(g.current):g.current.focus(),g.current=null)},[n,t.visibleToasts.length]),(0,B.useEffect)(()=>()=>{g.current?.isConnected&&(i()===`pointer`?a(g.current):g.current.focus(),g.current=null)},[n]),{regionProps:re(s,d,ne,{tabIndex:-1,"data-react-aria-top-layer":!0,onFocus:e=>{let t=p(e).closest(`[role="alertdialog"]`);h.current=f.current.findIndex(e=>e===t)},onBlur:()=>{h.current=-1}})}}var B;function Ot(){return(Ot=e((()=>{m(),s(),r(),xt(),ne(),d(),u(),we(),h(),le(),B=n()})))()}function kt(e={}){let{maxVisibleToasts:t=1,wrapUpdate:n}=e;return At((0,V.useMemo)(()=>new Mt({maxVisibleToasts:t,wrapUpdate:n}),[t,n]))}function At(e){let t=(0,V.useCallback)(t=>e.subscribe(t),[e]),n=(0,V.useCallback)(()=>e.visibleToasts,[e]);return{visibleToasts:(0,jt.useSyncExternalStore)(t,n,n),add:(t,n)=>e.add(t,n),close:t=>e.close(t),pauseAll:()=>e.pauseAll(),resumeAll:()=>e.resumeAll()}}var V,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{V=n(),jt=se(),Mt=class{constructor(e){this.queue=[],this.subscriptions=new Set,this.visibleToasts=[],this.maxVisibleToasts=e?.maxVisibleToasts??1/0,this.wrapUpdate=e?.wrapUpdate}runWithWrapUpdate(e,t){this.wrapUpdate?this.wrapUpdate(e,t):e()}subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}add(e,t={}){let n=`_`+Math.random().toString(36).slice(2),r={...t,content:e,key:n,timer:t.timeout?new Nt(()=>this.close(n),t.timeout):void 0};return this.queue.unshift(r),this.updateVisibleToasts(`add`),n}close(e){let t=this.queue.findIndex(t=>t.key===e);t>=0&&(this.queue[t].onClose?.(),this.queue.splice(t,1)),this.updateVisibleToasts(`remove`)}updateVisibleToasts(e){this.visibleToasts=this.queue.slice(0,this.maxVisibleToasts),this.runWithWrapUpdate(()=>{for(let e of this.subscriptions)e()},e)}pauseAll(){for(let e of this.visibleToasts)e.timer&&e.timer.pause()}resumeAll(){for(let e of this.visibleToasts)e.timer&&e.timer.resume()}clear(){this.queue=[],this.updateVisibleToasts(`clear`)}},Nt=class{constructor(e,t){this.startTime=null,this.remaining=t,this.callback=e}reset(e){this.remaining=e,this.resume()}pause(){this.timerId!=null&&(clearTimeout(this.timerId),this.timerId=null,this.remaining-=Date.now()-this.startTime)}resume(){this.remaining<=0||(this.startTime=Date.now(),this.timerId=setTimeout(()=>{this.timerId=null,this.remaining=0,this.callback()},this.remaining))}}})))()}var Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,H;function Yt(){return(Yt=e((()=>{Ft=`_toastRegion_1vq8s_49`,It=`_toast_1vq8s_49`,Lt=`_success_1vq8s_98`,Rt=`_info_1vq8s_106`,zt=`_important_1vq8s_114`,Bt=`_warning_1vq8s_122`,Vt=`_icon_1vq8s_130`,Ht=`_toastContent_1vq8s_144`,Ut=`_toastMessage_1vq8s_151`,Wt=`_viewTransition_1vq8s_157`,Gt=`_slideInTop_1vq8s_1`,Kt=`_slideInEnd_1vq8s_1`,qt=`_slideOutTop_1vq8s_1`,Jt=`_slideOutEnd_1vq8s_1`,H={toastRegion:Ft,toast:It,success:Lt,info:Rt,important:zt,warning:Bt,icon:Vt,toastContent:Ht,toastMessage:Ut,viewTransition:Wt,slideInTop:Gt,slideInEnd:Kt,slideOutTop:qt,slideOutEnd:Jt}})))()}function U({state:e,className:t,...n}){let r=Xt.useRef(null),{regionProps:i}=Dt(n,e,r);return(0,G.jsx)(`div`,{...i,ref:r,className:fe(H.toastRegion,t),children:e.visibleToasts.map(t=>(0,G.jsx)(W,{toast:t,state:e},t.key))})}function W({state:e,className:t,...n}){let r=Xt.useRef(null),{toastProps:i,contentProps:a,titleProps:o,closeButtonProps:s}=Ct(n,e,r);return(0,G.jsxs)(`div`,{...i,ref:r,className:fe(H.toast,H[n.toast.content.type],t),style:{viewTransitionName:n.toast.key,viewTransitionClass:H.viewTransition},children:[(0,G.jsxs)(`div`,{...a,className:fe(H.toastContent,a.className),children:[(0,G.jsx)(he,{"aria-hidden":!0,className:H.icon,status:n.toast.content.type}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`p`,{className:H.toastMessage,...o,children:n.toast.content.message}),n.toast.content.children]})]}),(0,G.jsx)(_,{variant:`icon`,...s,children:(0,G.jsx)(_e,{size:20,"aria-hidden":!0})})]})}var Xt,Zt,G,Qt,K,q,J;function $t(){return($t=e((()=>{pe(),Tt(),Ot(),Pt(),Xt=t(n(),1),Zt=oe(),Yt(),ge(),de(),me(),G=ue(),Qt={wrapUpdate(e){`startViewTransition`in document?document.startViewTransition(()=>{(0,Zt.flushSync)(e)}):e()},maxVisibleToasts:5},K=new Mt(Qt),q=e=>{let t=At(K);return t.visibleToasts.length>0?(0,Zt.createPortal)((0,G.jsx)(U,{...e,state:t}),document.body):null},J=({children:e,...t})=>{let n=kt(Qt);return(0,G.jsxs)(G.Fragment,{children:[typeof e==`function`?e(n):e,n.visibleToasts.length>0&&(0,G.jsx)(U,{...t,state:n})]})},J.__docgenInfo={description:``,methods:[],displayName:`ToastProvider`,props:{children:{required:!1,tsType:{name:`union`,raw:`| ((state: ToastState<MidasToast>) => React.ReactNode)
| React.ReactNode`,elements:[{name:`unknown`},{name:`ReactReactNode`,raw:`React.ReactNode`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`AriaToastRegionProps`]},U.__docgenInfo={description:``,methods:[],displayName:`ToastRegion`,props:{state:{required:!0,tsType:{name:`ToastState`,elements:[{name:`T`}],raw:`ToastState<T>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`AriaToastRegionProps`]},W.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{state:{required:!0,tsType:{name:`ToastState`,elements:[{name:`T`}],raw:`ToastState<T>`},description:``},toast:{required:!0,tsType:{name:`QueuedToast`,elements:[{name:`T`}],raw:`QueuedToast<T>`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`AriaToastProps`]}})))()}var Y,en,X,Z,Q,$,tn;function nn(){return(nn=e((()=>{$t(),pe(),Y=ue(),en={component:q,subcomponents:{ToastProvider:J,ToastRegion:U,Toast:W},title:`Components/Toast`,tags:[`autodocs`],parameters:{docs:{description:{component:"Toast visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser. Det finns två sätt att använda toast: **globalt** med `toastQueue` eller **lokalt** med `ToastProvider`.\n\n### MidasToast\n\nObjektet som skickas till `.add()`:\n\n| Egenskap | Typ | Beskrivning |\n|----------|-----|-------------|\n| `message` | `string` | Meddelandetext |\n| `type` | `'success' \\| 'info' \\| 'important' \\| 'warning'` | Variant |\n| `children` | `ReactNode` | Valfritt extra innehåll |\n\n### ToastState / toastQueue\n\nMetoderna som finns på `state` (från `ToastProvider`) och `toastQueue` (global):\n\n| Metod | Returtyp | Beskrivning |\n|-------|----------|-------------|\n| `.add(content, options?)` | `string` | Lägger till en toast, returnerar en nyckel |\n| `.close(key)` | `void` | Stänger en toast programmatiskt |\n| `.visibleToasts` | `QueuedToast[]` | Lista av synliga toasts |\n\nOptions till `.add()`: `{ timeout?: number, onClose?: () => void }`"}}}},X={parameters:{docs:{description:{story:"Använd `GlobalToastRegion` och `toastQueue` för en global kö. Placera `<GlobalToastRegion />` någonstans i appen och anropa `toastQueue.add()` var som helst."},source:{code:`import { GlobalToastRegion, toastQueue } from '@midas-ds/components'

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
</Button>`}}},render:()=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(q,{}),(0,Y.jsx)(_,{onPress:()=>K.add({type:`success`,message:`Toasten är klar`},{timeout:5e3}),children:`Visa toast`})]})},Z={parameters:{docs:{description:{story:"Använd `ToastProvider` för en lokal kö. Providern ger tillgång till `state` via render props, och toast-regionen renderas automatiskt intill innehållet."},source:{code:`import { ToastProvider } from '@midas-ds/components'

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
</ToastProvider>`}}},render:()=>(0,Y.jsx)(`div`,{style:{height:200},children:(0,Y.jsx)(J,{children:e=>(0,Y.jsx)(_,{onPress:()=>e.add({type:`success`,message:`Lokalt meddelande`},{timeout:5e3}),children:`Visa lokal toast`})})})},Q={name:`Varianter`,parameters:{docs:{description:{story:"Toast har fyra varianter: `success`, `info`, `important` och `warning`."},source:{code:`toastQueue.add({ type: 'success', message: '...' })
toastQueue.add({ type: 'info', message: '...' })
toastQueue.add({ type: 'important', message: '...' })
toastQueue.add({ type: 'warning', message: '...' })`}}},render:()=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(q,{}),(0,Y.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:[`success`,`info`,`important`,`warning`].map(e=>(0,Y.jsx)(_,{onPress:()=>K.add({type:e,message:`Detta är en ${e}-toast`},{timeout:5e3}),children:e},e))})]})},$={name:`Programmatisk stängning`,parameters:{docs:{description:{story:"`.add()` returnerar en nyckel som kan användas för att stänga en toast med `.close()`. Callbacken `onClose` triggas oavsett om toasten stängs manuellt eller via timeout."},source:{code:`const key = toastQueue.add(
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
)`}}},render:()=>{let e;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(q,{}),(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,Y.jsx)(_,{onPress:()=>{e=K.add({type:`info`,message:`Denna toast stängs inte automatiskt`})},children:`Visa toast`}),(0,Y.jsx)(_,{onPress:()=>{e&&K.close(e)},children:`Stäng programmatiskt`})]})]})}},tn=[`Global`,`Local`,`Variants`,`ProgrammaticClose`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}nn();export{X as Global,Z as Local,$ as ProgrammaticClose,Q as Variants,tn as __namedExportsOrder,en as default};