import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{c as r,d as i,o as a}from"./SelectionIndicator-BL9XZvXv.js";import{r as o,t as ee}from"./VisuallyHidden-dqv8B1bR.js";import{n as s}from"./iframe-BUczjp85.js";import{n as c,t as te}from"./FieldError-DhHAP4-R.js";import{n as l,t as u}from"./clsx-BbIth5Jl.js";import{n as d,t as ne}from"./Button-Dvmeb9hG.js";import{n as re,t as ie}from"./createLucideIcon-BrsN-CPt.js";import{n as ae,t as oe}from"./FeedbackStatusIcon-Cr_4_sgy.js";import{n as se,t as ce}from"./x-PqIRWUdI.js";import{n as le,t as ue}from"./useLocalizedStringFormatter-CISc9Awe.js";import{n as de,t as fe}from"./ProgressBar-Dzp4IWlz.js";var f,p;function m(){return(m=e((()=>{re(),f=[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],p=ie(`trash-2`,f)})))()}var h,pe,me,he,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{h=`_fileList_1s9dh_1`,pe=`_fileListItem_1s9dh_18`,me=`_row_1s9dh_25`,he=`_iconSlot_1s9dh_46`,g=`_progressIcon_1s9dh_70`,_=`_ring_1s9dh_87`,v=`_successRing_1s9dh_1`,y=`_checkmark_1s9dh_111`,b=`_successCheckmark_1s9dh_1`,x=`_successIcon_1s9dh_126`,S=`_errorReveal_1s9dh_173`,C=`_fileInfo_1s9dh_179`,w=`_fileName_1s9dh_187`,T=`_fileSize_1s9dh_196`,E=`_deleteButton_1s9dh_202`,D={fileList:h,fileListItem:pe,row:me,iconSlot:he,progressIcon:g,ring:_,successRing:v,checkmark:y,successCheckmark:b,successIcon:x,errorReveal:S,fileInfo:C,fileName:w,fileSize:T,deleteButton:E}})))()}var k,A,j,M;function N(){return(N=e((()=>{k=n(),i(),l(),O(),A=s(),j=({className:e,children:t,...n})=>{let i=(0,k.useRef)(null);return(0,A.jsx)(r,{children:(0,A.jsxs)(`ul`,{...n,ref:i,tabIndex:-1,className:u(D.fileList,e),children:[(0,A.jsx)(M,{containerRef:i}),t]})})},M=({containerRef:e})=>{let t=a(),n=(0,k.useRef)(t);return(0,k.useEffect)(()=>{n.current=t}),(0,k.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},j.__docgenInfo={description:``,methods:[],displayName:`FileList`}})))()}var P,F,ge;function I(){return(I=e((()=>{P={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`},F={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`},ge={en:P,sv:F}})))()}var L,R;function z(){return(z=e((()=>{m(),se(),o(),d(),de(),ae(),c(),ue(),l(),O(),I(),L=s(),R=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:i,onCancel:a,onDelete:o,className:s})=>{let c=le(ge),l=n===`uploading`,d=l?a??o:o;return(0,L.jsxs)(`li`,{className:u(D.fileListItem,s),"data-status":n,children:[(0,L.jsxs)(`div`,{className:D.row,children:[(0,L.jsxs)(`span`,{className:D.iconSlot,children:[(0,L.jsx)(fe,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":c.format(`uploading`),"aria-hidden":!l||void 0,className:D.progressIcon}),(0,L.jsx)(`span`,{className:D.ring,"aria-hidden":!0}),(0,L.jsx)(oe,{status:`success`,"aria-hidden":!0,size:16,className:u(D.checkmark,D.successIcon)})]}),(0,L.jsxs)(`span`,{className:D.fileInfo,children:[(0,L.jsx)(`span`,{className:D.fileName,children:e}),t&&(0,L.jsx)(`span`,{className:D.fileSize,children:t})]}),d&&(0,L.jsx)(ne,{variant:`icon`,onPress:d,"aria-label":`${c.format(l?`cancelUpload`:`removeFile`)} ${e}`,className:D.deleteButton,children:l?(0,L.jsx)(ce,{size:20,"aria-hidden":!0}):(0,L.jsx)(p,{size:20,"aria-hidden":!0})})]}),(0,L.jsx)(`div`,{className:D.errorReveal,children:i&&(0,L.jsx)(te,{isInvalid:!0,children:i})}),(0,L.jsx)(ee,{role:`status`,children:n===`success`?c.format(`uploadComplete`):``})]})},R.__docgenInfo={description:``,methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:``},fileSize:{required:!1,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'` —\nthis is where you'd abort the in-flight request (e.g.\n`XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` has no concept of\n"uploaded" vs "local only" — if the file is already persisted\nserver-side by the time this fires, deleting it there too is your call.'},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var B,V,H,U,W,G,K,q,J,Y,X,_e,Z,ve,Q,ye,$,be;function xe(){return(xe=e((()=>{B=t(n(),1),N(),z(),V=s(),H={component:j,subcomponents:{FileListItem:R},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,V.jsxs)(j,{...e,children:[(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},U={},W={render:e=>(0,V.jsxs)(j,{...e,children:[(0,V.jsx)(R,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},G={tags:[`!snapshot`],render:e=>(0,V.jsx)(j,{...e,children:[]})},K={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(R,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},q={render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(R,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},J={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},Y={render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})})},X={render:e=>(0,V.jsxs)(j,{...e,children:[(0,V.jsx)(R,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,V.jsx)(R,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,V.jsx)(R,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})]})},_e=()=>{let[e,t]=B.useState(`uploading`),[n,r]=B.useState(0);return B.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,V.jsx)(j,{"aria-label":`Test`,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},Z={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,V.jsx)(_e,{})},ve=()=>{let[e,t]=B.useState(`uploading`);return B.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,V.jsx)(j,{"aria-label":`Test`,children:(0,V.jsx)(R,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Det gick inte bra`,onCancel:()=>{},onDelete:()=>{}})})},Q={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,V.jsx)(ve,{})},ye=({initialFiles:e})=>{let[t,n]=B.useState(e);return(0,V.jsx)(j,{"aria-label":`Test`,children:t.map(e=>(0,V.jsx)(R,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},$={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,V.jsx)(ye,{...e})},be=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`MixedStates`,`AnimatedCompletion`,`AnimatedFailure`,`FocusManagementTest`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  // Reproduced twice on the same machine, back to back, no code changes in
  // between: fails visual regression with "Could not capture a stable
  // screenshot within 5000ms." Quarantined until root-caused — see PR #1367.
  tags: ['!snapshot'],
  render: args => <FileList {...args}>
      {[]}
    </FileList>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='large-video.mp4' fileSize='128 MB' status='uploading' progress={40} onCancel={() => {
      // noop — in a real app, abort the in-flight upload request here
    }} />
    </FileList>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='error' errorMessage='Det gick inte bra' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.'
      }
    }
  },
  render: () => <AnimatedCompletionDemo />
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
}`,...$.parameters?.docs?.source}}}})))()}xe();export{Z as AnimatedCompletion,Q as AnimatedFailure,U as Default,G as Empty,Y as Error,$ as FocusManagementTest,X as MixedStates,J as Success,K as Uploading,q as UploadingDeterminate,W as WithoutFileSize,be as __namedExportsOrder,H as default};