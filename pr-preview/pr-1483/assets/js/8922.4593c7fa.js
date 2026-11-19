"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8922"],{35349(e,t,s){s.d(t,{$:()=>u});var a=s(31085),n=s(25298),o=s(47782),r=s(81876),i=s(10995),l=s(18232),d=JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}');let c={success:n.A,info:o.A,important:r.A,warning:i.A},m={success:"ok",info:"information",important:"importantInformation",warning:"warning"},u=e=>{let{status:t,"aria-label":s,size:n=20,...o}=e,r=(0,l.o)(d),i=c[t];return(0,a.jsx)(i,{"aria-label":s||r.format(m[t]),size:n,...o})}},3281(e,t,s){s.r(t),s.d(t,{Global:()=>d,Local:()=>c,ProgrammaticClose:()=>u,Variants:()=>m,VariantsOpen:()=>g,default:()=>l});var a=s(31085),n=s(68379),o=s(26282),r=s(14041),i=s(59344);let l={component:n.r$,subcomponents:{ToastProvider:n.tE,ToastRegion:n.kZ,Toast:n.y8},title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:"Toast visar korta, tillf\xe4lliga meddelanden om \xe5tg\xe4rder, fel eller andra h\xe4ndelser. Det finns tv\xe5 s\xe4tt att anv\xe4nda toast: **globalt** med `toastQueue` eller **lokalt** med `ToastProvider`.\n\n### MidasToast\n\nObjektet som skickas till `.add()`:\n\n| Egenskap | Typ | Beskrivning |\n|----------|-----|-------------|\n| `message` | `string` | Meddelandetext |\n| `type` | `'success' \\| 'info' \\| 'important' \\| 'warning'` | Variant |\n| `children` | `ReactNode` | Valfritt extra inneh\xe5ll |\n\n### ToastState / toastQueue\n\nMetoderna som finns p\xe5 `state` (fr\xe5n `ToastProvider`) och `toastQueue` (global):\n\n| Metod | Returtyp | Beskrivning |\n|-------|----------|-------------|\n| `.add(content, options?)` | `string` | L\xe4gger till en toast, returnerar en nyckel |\n| `.close(key)` | `void` | St\xe4nger en toast programmatiskt |\n| `.visibleToasts` | `QueuedToast[]` | Lista av synliga toasts |\n\nOptions till `.add()`: `{ timeout?: number, onClose?: () => void }`"}}}},d={parameters:{docs:{description:{story:"Anv\xe4nd `GlobalToastRegion` och `toastQueue` f\xf6r en global k\xf6. Placera `<GlobalToastRegion />` n\xe5gonstans i appen och anropa `toastQueue.add()` var som helst."},source:{code:`import { GlobalToastRegion, toastQueue } from '@midas-ds/components'

<GlobalToastRegion />

<Button
  onPress={() =>
    toastQueue.add(
      { type: 'success', message: 'Toasten \xe4r klar' },
      { timeout: 5000 },
    )
  }
>
  Visa toast
</Button>`}}},render:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.r$,{}),(0,a.jsx)(o.$,{onPress:()=>n.ni.add({type:"success",message:"Toasten \xe4r klar"},{timeout:5e3}),children:"Visa toast"})]})},c={parameters:{docs:{description:{story:"Anv\xe4nd `ToastProvider` f\xf6r en lokal k\xf6. Providern ger tillg\xe5ng till `state` via render props, och toast-regionen renderas automatiskt intill inneh\xe5llet."},source:{code:`import { ToastProvider } from '@midas-ds/components'

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
</ToastProvider>`}}},render:()=>(0,a.jsx)("div",{style:{height:200},children:(0,a.jsx)(n.tE,{children:e=>(0,a.jsx)(o.$,{onPress:()=>e.add({type:"success",message:"Lokalt meddelande"},{timeout:5e3}),children:"Visa lokal toast"})})})},m={name:"Varianter",parameters:{docs:{description:{story:"Toast har fyra varianter: `success`, `info`, `important` och `warning`."},source:{code:`toastQueue.add({ type: 'success', message: '...' })
toastQueue.add({ type: 'info', message: '...' })
toastQueue.add({ type: 'important', message: '...' })
toastQueue.add({ type: 'warning', message: '...' })`}}},render:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.r$,{}),(0,a.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:["success","info","important","warning"].map(e=>(0,a.jsx)(o.$,{onPress:()=>n.ni.add({type:e,message:`Detta \xe4r en ${e}-toast`},{timeout:5e3}),children:e},e))})]})},u={name:"Programmatisk st\xe4ngning",parameters:{docs:{description:{story:"`.add()` returnerar en nyckel som kan anv\xe4ndas f\xf6r att st\xe4nga en toast med `.close()`. Callbacken `onClose` triggas oavsett om toasten st\xe4ngs manuellt eller via timeout."},source:{code:`const key = toastQueue.add(
  { type: 'info', message: 'Bearbetar...' },
)

// St\xe4ng toasten programmatiskt
toastQueue.close(key)

// Eller med onClose-callback
toastQueue.add(
  { type: 'success', message: 'Filen sparades' },
  {
    timeout: 5000,
    onClose: () => console.log('Toasten st\xe4ngdes'),
  },
)`}}},render:()=>{let e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.r$,{}),(0,a.jsxs)("div",{style:{display:"flex",gap:"0.5rem"},children:[(0,a.jsx)(o.$,{onPress:()=>{e=n.ni.add({type:"info",message:"Denna toast st\xe4ngs inte automatiskt"})},children:"Visa toast"}),(0,a.jsx)(o.$,{onPress:()=>{e&&n.ni.close(e)},children:"St\xe4ng programmatiskt"})]})]})}},g={tags:["!dev","!autodocs"],render:()=>{let[e]=(0,r.useState)(()=>{let e=new i.Vv({maxVisibleToasts:5});for(let t of["success","info","important","warning"])e.add({type:t,message:`Detta \xe4r en ${t}-toast`});return e}),t=(0,i.oS)(e);return(0,a.jsx)("div",{style:{height:"30rem"},children:(0,a.jsx)(n.kZ,{state:t})})}}},68379(e,t,s){s.d(t,{kZ:()=>f,r$:()=>h,ni:()=>v,y8:()=>y,tE:()=>k});var a=s(31085),n=s(26282),o=s(43403),r=s(11630),i=s(59344),l=s(14041),d=s(43144);let c={toastRegion:"toastRegion_qT4T",toast:"toast_fS3w",success:"success_xzAn",info:"info_b9n9",important:"important_Ujdl",warning:"warning_Kv7x",icon:"icon_jrmy",toastContent:"toastContent_STUG",toastMessage:"toastMessage_Ekty",viewTransition:"viewTransition_xM0h",slideInTop:"slideInTop_banh",slideInEnd:"slideInEnd_kM5e",slideOutTop:"slideOutTop_nGl4",slideOutEnd:"slideOutEnd_yn8p"};var m=s(64922),u=s(74677),g=s(35349);let p={wrapUpdate(e){"startViewTransition"in document?document.startViewTransition(()=>{(0,d.flushSync)(e)}).ready.catch(()=>void 0):e()},maxVisibleToasts:5},v=new i.Vv(p),h=e=>{let t=(0,i.oS)(v);return t.visibleToasts.length>0?(0,d.createPortal)((0,a.jsx)(f,{...e,state:t}),document.body):null},k=e=>{let{children:t,...s}=e,n=(0,i.GY)(p);return(0,a.jsxs)(a.Fragment,{children:["function"==typeof t?t(n):t,n.visibleToasts.length>0&&(0,a.jsx)(f,{...s,state:n})]})};function f(e){let{state:t,className:s,...n}=e,r=l.useRef(null),{regionProps:i}=(0,o.J)(n,t,r);return(0,a.jsx)("div",{...i,ref:r,className:(0,u.A)(c.toastRegion,s),children:t.visibleToasts.map(e=>(0,a.jsx)(y,{toast:e,state:t},e.key))})}function y(e){let{state:t,className:s,...o}=e,i=l.useRef(null),{toastProps:d,contentProps:p,titleProps:v,closeButtonProps:h}=(0,r.d)(o,t,i);return(0,a.jsxs)("div",{...d,ref:i,className:(0,u.A)(c.toast,c[o.toast.content.type],s),style:{viewTransitionName:o.toast.key,viewTransitionClass:c.viewTransition},children:[(0,a.jsxs)("div",{...p,className:(0,u.A)(c.toastContent,p.className),children:[(0,a.jsx)(g.$,{"aria-hidden":!0,className:c.icon,status:o.toast.content.type}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:c.toastMessage,...v,children:o.toast.content.message}),o.toast.content.children]})]}),(0,a.jsx)(n.$,{variant:"icon",...h,children:(0,a.jsx)(m.A,{size:20,"aria-hidden":!0})})]})}},81876(e,t,s){s.d(t,{A:()=>o});var a=s(94202);let n={name:"flag",size:24,node:[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]]};n.node;let o=(0,a.A)(n)},10995(e,t,s){s.d(t,{A:()=>o});var a=s(94202);let n={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};n.node;let o=(0,a.A)(n)},64922(e,t,s){s.d(t,{A:()=>o});var a=s(94202);let n={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};n.node;let o=(0,a.A)(n)}}]);