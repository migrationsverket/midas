import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{c as r,d as i,o as a}from"./SelectionIndicator-BL9XZvXv.js";import{r as o,t as ee}from"./VisuallyHidden-dqv8B1bR.js";import{n as s}from"./iframe-CwBYV3Ki.js";import{n as c,t as te}from"./FieldError-B8lOU-4j.js";import{n as l,t as u}from"./clsx-BbIth5Jl.js";import{n as d,t as f}from"./Button-CHRTbQMa.js";import{n as ne,t as re}from"./createLucideIcon-BrsN-CPt.js";import{n as ie,t as ae}from"./FeedbackStatusIcon-B9f2jdSs.js";import{n as oe,t as se}from"./x-PqIRWUdI.js";import{n as ce,t as le}from"./useLocalizedStringFormatter-BYp9Zluz.js";import{n as ue,t as de}from"./ProgressBar-D71562G6.js";var p,m;function h(){return(h=e((()=>{ne(),p=[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],m=re(`trash-2`,p)})))()}var fe,pe,me,he,ge,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{fe=`_fileList_1ra56_1`,pe=`_fileListItem_1ra56_18`,me=`_row_1ra56_25`,he=`_iconSlot_1ra56_46`,ge=`_progressIcon_1ra56_70`,g=`_ring_1ra56_87`,_=`_successRing_1ra56_1`,v=`_checkmark_1ra56_111`,y=`_successCheckmark_1ra56_1`,b=`_successIcon_1ra56_138`,x=`_errorReveal_1ra56_185`,S=`_fileInfo_1ra56_191`,C=`_fileName_1ra56_199`,w=`_fileSize_1ra56_208`,T=`_deleteButton_1ra56_214`,E={fileList:fe,fileListItem:pe,row:me,iconSlot:he,progressIcon:ge,ring:g,successRing:_,checkmark:v,successCheckmark:y,successIcon:b,errorReveal:x,fileInfo:S,fileName:C,fileSize:w,deleteButton:T}})))()}var O,k,A,j;function M(){return(M=e((()=>{O=n(),i(),l(),D(),k=s(),A=({className:e,children:t,...n})=>{let i=(0,O.useRef)(null);return(0,k.jsx)(r,{children:(0,k.jsxs)(`ul`,{...n,ref:i,tabIndex:-1,className:u(E.fileList,e),children:[(0,k.jsx)(j,{containerRef:i}),t]})})},j=({containerRef:e})=>{let t=a(),n=(0,O.useRef)(t);return(0,O.useEffect)(()=>{n.current=t}),(0,O.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},A.__docgenInfo={description:``,methods:[],displayName:`FileList`}})))()}var N,P,F;function _e(){return(_e=e((()=>{N={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`},P={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`},F={en:N,sv:P}})))()}var I,L;function R(){return(R=e((()=>{h(),oe(),o(),d(),ue(),ie(),c(),le(),l(),D(),_e(),I=s(),L=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:i,onCancel:a,onDelete:o,className:s})=>{let c=ce(F),l=n===`uploading`,d=l?a??o:o;return(0,I.jsxs)(`li`,{className:u(E.fileListItem,s),"data-status":n,children:[(0,I.jsxs)(`div`,{className:E.row,children:[(0,I.jsxs)(`span`,{className:E.iconSlot,children:[(0,I.jsx)(de,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":c.format(`uploading`),"aria-hidden":!l||void 0,className:E.progressIcon}),(0,I.jsx)(`span`,{className:E.ring,"aria-hidden":!0}),(0,I.jsx)(ae,{status:`success`,"aria-hidden":!0,size:16,className:u(E.checkmark,E.successIcon)})]}),(0,I.jsxs)(`span`,{className:E.fileInfo,children:[(0,I.jsx)(`span`,{className:E.fileName,children:e}),t&&(0,I.jsx)(`span`,{className:E.fileSize,children:t})]}),d&&(0,I.jsx)(f,{variant:`icon`,onPress:d,"aria-label":`${c.format(l?`cancelUpload`:`removeFile`)} ${e}`,className:E.deleteButton,children:l?(0,I.jsx)(se,{size:20,"aria-hidden":!0}):(0,I.jsx)(m,{size:20,"aria-hidden":!0})})]}),(0,I.jsx)(`div`,{className:E.errorReveal,children:i&&(0,I.jsx)(te,{isInvalid:!0,children:i})}),(0,I.jsx)(ee,{role:`status`,children:n===`success`?c.format(`uploadComplete`):``})]})},L.__docgenInfo={description:``,methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:``},fileSize:{required:!1,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'` —\nthis is where you'd abort the in-flight request (e.g.\n`XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` has no concept of\n"uploaded" vs "local only" — if the file is already persisted\nserver-side by the time this fires, deleting it there too is your call.'},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var z,B,V,H,U,W,G,K,q,J,Y,ve,X,ye,be,Z,xe,Q,Se,$,Ce;function we(){return(we=e((()=>{z=t(n(),1),d(),M(),R(),B=s(),V={component:A,subcomponents:{FileListItem:L},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,B.jsxs)(A,{...e,children:[(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},H={},U={render:e=>(0,B.jsxs)(A,{...e,children:[(0,B.jsx)(L,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},W={tags:[`!snapshot`],render:e=>(0,B.jsx)(A,{...e,children:[]})},G={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,B.jsx)(A,{...e,children:(0,B.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},K={render:e=>(0,B.jsx)(A,{...e,children:(0,B.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},q={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,B.jsx)(A,{...e,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},J={render:e=>(0,B.jsx)(A,{...e,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})})},Y={render:e=>(0,B.jsxs)(A,{...e,children:[(0,B.jsx)(L,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,B.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,B.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})]})},ve=()=>{let[e,t]=z.useState(`uploading`),[n,r]=z.useState(0);return z.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,B.jsx)(A,{"aria-label":`Test`,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},X={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,B.jsx)(ve,{})},ye=2e3,be=()=>{let[e,t]=z.useState(`uploading`),[n,r]=z.useState(0);return z.useEffect(()=>{if(e===`success`){let e=setTimeout(()=>t(`idle`),ye);return()=>clearTimeout(e)}if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,justifyItems:`start`},children:[(0,B.jsx)(A,{"aria-label":`Test`,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})}),(0,B.jsx)(f,{variant:`secondary`,onPress:()=>{r(0),t(`uploading`)},children:`Replay`})]})},Z={tags:[`!snapshot`],parameters:{docs:{description:{story:"For apps that want a calm list after uploading: play the success animation, then switch to `status='idle'` once it has finished (about 2 seconds). The checkmark fades and the icon slot collapses. `FileList` keeps `success` and `idle` distinct, the switch is the app's choice."}}},render:()=>(0,B.jsx)(be,{})},xe=()=>{let[e,t]=z.useState(`uploading`);return z.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,B.jsx)(A,{"aria-label":`Test`,children:(0,B.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Det gick inte bra`,onCancel:()=>{},onDelete:()=>{}})})},Q={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,B.jsx)(xe,{})},Se=({initialFiles:e})=>{let[t,n]=z.useState(e);return(0,B.jsx)(A,{"aria-label":`Test`,children:t.map(e=>(0,B.jsx)(L,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},$={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,B.jsx)(Se,{...e})},Ce=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`MixedStates`,`AnimatedCompletion`,`AnimatedSettleToIdle`,`AnimatedFailure`,`FocusManagementTest`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='error' errorMessage='Det gick inte bra' onDelete={() => {
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
      <FileListItem fileName='references.pdf' fileSize='3.4 MB' status='error' errorMessage='Det gick inte bra' onDelete={() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: "For apps that want a calm list after uploading: play the success animation, then switch to \`status='idle'\` once it has finished (about 2 seconds). The checkmark fades and the icon slot collapses. \`FileList\` keeps \`success\` and \`idle\` distinct, the switch is the app's choice."
      }
    }
  },
  render: () => <SettleToIdleDemo />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}we();export{X as AnimatedCompletion,Q as AnimatedFailure,Z as AnimatedSettleToIdle,H as Default,W as Empty,J as Error,$ as FocusManagementTest,Y as MixedStates,q as Success,G as Uploading,K as UploadingDeterminate,U as WithoutFileSize,Ce as __namedExportsOrder,V as default};