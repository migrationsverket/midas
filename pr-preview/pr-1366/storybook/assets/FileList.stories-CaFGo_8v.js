import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{c as r,d as i,o as a}from"./SelectionIndicator-BL9XZvXv.js";import{r as o,t as s}from"./VisuallyHidden-dqv8B1bR.js";import{n as c}from"./iframe-BT0kXp8C.js";import{n as l,t as ee}from"./FieldError-CZe0iVvs.js";import{n as u,t as d}from"./clsx-BbIth5Jl.js";import{n as f,t as te}from"./Button-CShefNJE.js";import{n as p,t as m}from"./createLucideIcon-BrsN-CPt.js";import{n as h,t as ne}from"./FeedbackStatusIcon-JKGCmXlG.js";import{n as g,t as re}from"./x-PqIRWUdI.js";import{n as ie,t as _}from"./useLocalizedStringFormatter-DHjwaN4E.js";import{n as v,t as ae}from"./ProgressBar-rVSnTcsY.js";var y,oe;function b(){return(b=e((()=>{p(),y=[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],oe=m(`trash-2`,y)})))()}var x,se,ce,le,ue,de,fe,pe,me,he,ge,_e,S,C,w,T;function E(){return(E=e((()=>{x=`_fileList_mb5n3_1`,se=`_fileListItem_mb5n3_18`,ce=`_row_mb5n3_25`,le=`_iconSlot_mb5n3_46`,ue=`_progressIcon_mb5n3_70`,de=`_ring_mb5n3_82`,fe=`_successRing_mb5n3_1`,pe=`_checkmark_mb5n3_106`,me=`_successCheckmark_mb5n3_1`,he=`_successIcon_mb5n3_121`,ge=`_errorReveal_mb5n3_163`,_e=`_fileInfo_mb5n3_169`,S=`_fileName_mb5n3_177`,C=`_fileSize_mb5n3_186`,w=`_deleteButton_mb5n3_192`,T={fileList:x,fileListItem:se,row:ce,iconSlot:le,progressIcon:ue,ring:de,successRing:fe,checkmark:pe,successCheckmark:me,successIcon:he,errorReveal:ge,fileInfo:_e,fileName:S,fileSize:C,deleteButton:w}})))()}var D,O,k,A;function j(){return(j=e((()=>{D=n(),i(),u(),E(),O=c(),k=({className:e,children:t,...n})=>{let i=(0,D.useRef)(null);return(0,O.jsx)(r,{children:(0,O.jsxs)(`ul`,{...n,ref:i,tabIndex:-1,className:d(T.fileList,e),children:[(0,O.jsx)(A,{containerRef:i}),t]})})},A=({containerRef:e})=>{let t=a(),n=(0,D.useRef)(t);return(0,D.useEffect)(()=>{n.current=t}),(0,D.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},k.__docgenInfo={description:``,methods:[],displayName:`FileList`}})))()}var M,N,P;function F(){return(F=e((()=>{M={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`,uploadFailed:`Upload failed`},N={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`,uploadFailed:`Uppladdning misslyckades`},P={en:M,sv:N}})))()}var I,L,R;function z(){return(z=e((()=>{I=n(),b(),g(),o(),f(),v(),h(),l(),_(),u(),E(),F(),L=c(),R=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:i,onCancel:a,onDelete:o,className:c})=>{let l=ie(P),u=n===`uploading`,f=n===`success`,p=n===`error`,m=p&&!!i,h=(0,I.useId)(),g=(0,I.useId)(),_=f?l.format(`uploadComplete`):p?l.format(`uploadFailed`):void 0,v=[_&&g,m&&h].filter(Boolean).join(` `)||void 0,y=u?a??o:o;return(0,L.jsxs)(`li`,{className:d(T.fileListItem,c),"data-status":n,children:[(0,L.jsxs)(`div`,{className:T.row,children:[(0,L.jsxs)(`span`,{className:T.iconSlot,children:[u&&(0,L.jsx)(ae,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":`${l.format(`uploading`)} ${e}`,className:T.progressIcon}),(0,L.jsx)(`span`,{className:T.ring,"aria-hidden":!0}),f&&(0,L.jsx)(ne,{status:`success`,"aria-hidden":!0,size:16,className:d(T.checkmark,T.successIcon)})]}),_&&(0,L.jsx)(s,{id:g,children:_}),(0,L.jsxs)(`span`,{className:T.fileInfo,children:[(0,L.jsx)(`span`,{className:T.fileName,children:e}),t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(s,{children:`, `}),(0,L.jsx)(`span`,{className:T.fileSize,children:t})]})]}),y&&(0,L.jsx)(te,{variant:`icon`,onPress:y,"aria-label":`${l.format(u?`cancelUpload`:`removeFile`)} ${e}`,"aria-describedby":v,className:T.deleteButton,children:u?(0,L.jsx)(re,{size:20,"aria-hidden":!0}):(0,L.jsx)(oe,{size:20,"aria-hidden":!0})})]}),(0,L.jsx)(`div`,{id:h,className:T.errorReveal,children:i&&(0,L.jsx)(ee,{isInvalid:!0,children:i})}),(0,L.jsxs)(s,{role:`status`,children:[f&&`${l.format(`uploadComplete`)}: ${e}`,m&&`${e}: ${i}`]})]})},R.__docgenInfo={description:``,methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:``},fileSize:{required:!1,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'` —\nthis is where you'd abort the in-flight request (e.g.\n`XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` has no concept of\n"uploaded" vs "local only" — if the file is already persisted\nserver-side by the time this fires, deleting it there too is your call.'},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var B,V,ve,H,U,W,G,K,q,J,Y,ye,X,Z,Q,be,$,xe;function Se(){return(Se=e((()=>{B=t(n(),1),j(),z(),V=c(),ve={component:k,subcomponents:{FileListItem:R},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,V.jsxs)(k,{...e,children:[(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},H={},U={render:e=>(0,V.jsxs)(k,{...e,children:[(0,V.jsx)(R,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},W={tags:[`!snapshot`],render:e=>(0,V.jsx)(k,{...e,children:[]})},G={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,V.jsx)(k,{...e,children:(0,V.jsx)(R,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},K={render:e=>(0,V.jsx)(k,{...e,children:(0,V.jsx)(R,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},q={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,V.jsx)(k,{...e,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},J={render:e=>(0,V.jsx)(k,{...e,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})})},Y={render:e=>(0,V.jsxs)(k,{...e,children:[(0,V.jsx)(R,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,V.jsx)(R,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})]})},ye=()=>{let[e,t]=B.useState(`uploading`),[n,r]=B.useState(0);return B.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,V.jsx)(k,{"aria-label":`Test`,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},X={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,V.jsx)(ye,{})},Z=()=>{let[e,t]=B.useState(`uploading`);return B.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,V.jsx)(k,{"aria-label":`Test`,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onCancel:()=>{},onDelete:()=>{}})})},Q={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,V.jsx)(Z,{})},be=({initialFiles:e})=>{let[t,n]=B.useState(e);return(0,V.jsx)(k,{"aria-label":`Test`,children:t.map(e=>(0,V.jsx)(R,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},$={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,V.jsx)(be,{...e})},xe=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`MixedStates`,`AnimatedCompletion`,`AnimatedFailure`,`FocusManagementTest`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}Se();export{X as AnimatedCompletion,Q as AnimatedFailure,H as Default,W as Empty,J as Error,$ as FocusManagementTest,Y as MixedStates,q as Success,G as Uploading,K as UploadingDeterminate,U as WithoutFileSize,xe as __namedExportsOrder,ve as default};