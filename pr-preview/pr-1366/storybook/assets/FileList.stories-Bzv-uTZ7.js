import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{c as r,d as i,o as a}from"./SelectionIndicator-BL9XZvXv.js";import{r as o,t as ee}from"./VisuallyHidden-dqv8B1bR.js";import{n as s}from"./iframe-BZ3CMePt.js";import{n as c,t as te}from"./FieldError-C07tWK78.js";import{n as l,t as u}from"./clsx-BbIth5Jl.js";import{n as d,t as ne}from"./Button-Bn8jl4gx.js";import{n as f,t as p}from"./createLucideIcon-BrsN-CPt.js";import{n as m,t as re}from"./FeedbackStatusIcon-BSo7KW1R.js";import{n as ie,t as ae}from"./x-PqIRWUdI.js";import{n as oe,t as se}from"./useLocalizedStringFormatter-D_gcXY2n.js";import{n as ce,t as le}from"./ProgressBar-D6Fil42v.js";var h,g;function ue(){return(ue=e((()=>{f(),h=[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],g=p(`trash-2`,h)})))()}var de,fe,pe,me,he,ge,_e,ve,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{de=`_fileList_1s9dh_1`,fe=`_fileListItem_1s9dh_18`,pe=`_row_1s9dh_25`,me=`_iconSlot_1s9dh_46`,he=`_progressIcon_1s9dh_70`,ge=`_ring_1s9dh_87`,_e=`_successRing_1s9dh_1`,ve=`_checkmark_1s9dh_111`,_=`_successCheckmark_1s9dh_1`,v=`_successIcon_1s9dh_126`,y=`_errorReveal_1s9dh_173`,b=`_fileInfo_1s9dh_179`,x=`_fileName_1s9dh_187`,S=`_fileSize_1s9dh_196`,C=`_deleteButton_1s9dh_202`,w={fileList:de,fileListItem:fe,row:pe,iconSlot:me,progressIcon:he,ring:ge,successRing:_e,checkmark:ve,successCheckmark:_,successIcon:v,errorReveal:y,fileInfo:b,fileName:x,fileSize:S,deleteButton:C}})))()}var E,D,O,k;function A(){return(A=e((()=>{E=n(),i(),l(),T(),D=s(),O=({className:e,children:t,...n})=>{let i=(0,E.useRef)(null);return(0,D.jsx)(r,{children:(0,D.jsxs)(`ul`,{...n,ref:i,tabIndex:-1,className:u(w.fileList,e),children:[(0,D.jsx)(k,{containerRef:i}),t]})})},k=({containerRef:e})=>{let t=a(),n=(0,E.useRef)(t);return(0,E.useEffect)(()=>{n.current=t}),(0,E.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},O.__docgenInfo={description:``,methods:[],displayName:`FileList`}})))()}var j,M,N;function P(){return(P=e((()=>{j={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`},M={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`},N={en:j,sv:M}})))()}var F,I,L;function R(){return(R=e((()=>{F=n(),ue(),ie(),o(),d(),ce(),m(),c(),se(),l(),T(),P(),I=s(),L=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:i,onCancel:a,onDelete:o,className:s})=>{let c=oe(N),l=n===`uploading`,d=n===`success`,f=n===`error`&&!!i,p=(0,F.useId)(),m=l?a??o:o;return(0,I.jsxs)(`li`,{className:u(w.fileListItem,s),"data-status":n,children:[(0,I.jsxs)(`div`,{className:w.row,children:[(0,I.jsxs)(`span`,{className:w.iconSlot,children:[(0,I.jsx)(le,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":`${c.format(`uploading`)} ${e}`,"aria-hidden":!l||void 0,className:w.progressIcon}),(0,I.jsx)(`span`,{className:w.ring,"aria-hidden":!0}),(0,I.jsx)(re,{status:`success`,role:d?`img`:void 0,"aria-label":c.format(`uploadComplete`),"aria-hidden":!d||void 0,size:16,className:u(w.checkmark,w.successIcon)})]}),(0,I.jsxs)(`span`,{className:w.fileInfo,children:[(0,I.jsx)(`span`,{className:w.fileName,children:e}),t&&(0,I.jsx)(`span`,{className:w.fileSize,children:t})]}),m&&(0,I.jsx)(ne,{variant:`icon`,onPress:m,"aria-label":`${c.format(l?`cancelUpload`:`removeFile`)} ${e}`,"aria-describedby":f?p:void 0,className:w.deleteButton,children:l?(0,I.jsx)(ae,{size:20,"aria-hidden":!0}):(0,I.jsx)(g,{size:20,"aria-hidden":!0})})]}),(0,I.jsx)(`div`,{id:p,className:w.errorReveal,children:i&&(0,I.jsx)(te,{isInvalid:!0,children:i})}),(0,I.jsxs)(ee,{role:`status`,children:[d&&`${c.format(`uploadComplete`)}: ${e}`,f&&`${e}: ${i}`]})]})},L.__docgenInfo={description:``,methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:``},fileSize:{required:!1,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'` —\nthis is where you'd abort the in-flight request (e.g.\n`XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` has no concept of\n"uploaded" vs "local only" — if the file is already persisted\nserver-side by the time this fires, deleting it there too is your call.'},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var z,B,V,H,U,W,G,K,q,J,Y,ye,X,Z,Q,be,$,xe;function Se(){return(Se=e((()=>{z=t(n(),1),A(),R(),B=s(),V={component:O,subcomponents:{FileListItem:L},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,B.jsxs)(O,{...e,children:[(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},H={},U={render:e=>(0,B.jsxs)(O,{...e,children:[(0,B.jsx)(L,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},W={tags:[`!snapshot`],render:e=>(0,B.jsx)(O,{...e,children:[]})},G={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,B.jsx)(O,{...e,children:(0,B.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},K={render:e=>(0,B.jsx)(O,{...e,children:(0,B.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},q={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,B.jsx)(O,{...e,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},J={render:e=>(0,B.jsx)(O,{...e,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})})},Y={render:e=>(0,B.jsxs)(O,{...e,children:[(0,B.jsx)(L,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,B.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})]})},ye=()=>{let[e,t]=z.useState(`uploading`),[n,r]=z.useState(0);return z.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,B.jsx)(O,{"aria-label":`Test`,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},X={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,B.jsx)(ye,{})},Z=()=>{let[e,t]=z.useState(`uploading`);return z.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,B.jsx)(O,{"aria-label":`Test`,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onCancel:()=>{},onDelete:()=>{}})})},Q={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,B.jsx)(Z,{})},be=({initialFiles:e})=>{let[t,n]=z.useState(e);return(0,B.jsx)(O,{"aria-label":`Test`,children:t.map(e=>(0,B.jsx)(L,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},$={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,B.jsx)(be,{...e})},xe=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`MixedStates`,`AnimatedCompletion`,`AnimatedFailure`,`FocusManagementTest`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  // Reproduced twice on the same machine, back to back, no code changes in
  // between: fails visual regression with "Could not capture a stable
  // screenshot within 5000ms." Quarantined until root-caused — see PR #1367.
  tags: ['!snapshot'],
  render: args => <FileList {...args}>
      {[]}
    </FileList>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: "Use \`onCancel\`, not \`onDelete\`, while \`status='uploading'\` — that's where you'd abort the actual in-flight request (\`XMLHttpRequest.abort()\`/\`AbortController.abort()\`). \`onDelete\` still works as a fallback if \`onCancel\` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."
      }
    }
  },
  render: args => <FileList {...args}>
      <FileListItem fileName='large-video.mp4' fileSize='128 MB' status='uploading' onCancel={() => {
      // noop — in a real app, abort the in-flight upload request here
    }} />
    </FileList>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='large-video.mp4' fileSize='128 MB' status='uploading' progress={40} onCancel={() => {
      // noop — in a real app, abort the in-flight upload request here
    }} />
    </FileList>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`FileList\` has no concept of an upload having completed vs. a file only ever existing locally — by the time \`status='success'\` is set, the file is presumably already persisted server-side. \`onDelete\` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."
      }
    }
  },
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='success' onDelete={() => {
      // noop — in a real app, this is likely a server-side delete call
    }} />
    </FileList>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='error' errorMessage='Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='idle-file.pdf' fileSize='1.2 MB' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='large-video.mp4' fileSize='128 MB' status='uploading' progress={40} onCancel={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' fileSize='45 KB' status='success' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='references.pdf' fileSize='3.4 MB' status='error' errorMessage='Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.'
      }
    }
  },
  render: () => <AnimatedCompletionDemo />
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.'
      }
    }
  },
  render: () => <AnimatedFailureDemo />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => <FocusTestContainer {...args} />
}`,...$.parameters?.docs?.source}}}})))()}Se();export{X as AnimatedCompletion,Q as AnimatedFailure,H as Default,W as Empty,J as Error,$ as FocusManagementTest,Y as MixedStates,q as Success,G as Uploading,K as UploadingDeterminate,U as WithoutFileSize,xe as __namedExportsOrder,V as default};