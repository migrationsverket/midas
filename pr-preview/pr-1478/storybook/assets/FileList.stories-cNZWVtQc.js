import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{n as r,t as i}from"./clsx-Cb5F7C4j.js";import{r as a,t as o}from"./VisuallyHidden-D6xo-vmp.js";import{n as ee,t as te}from"./FieldError-tlrzNLLk.js";import{o as s,r as c,t as l}from"./FocusScope-CguwfPD3.js";import{n as u,t as ne}from"./Button-0LS54158.js";import{n as d,t as f}from"./createLucideIcon-B8cGKaCi.js";import{n as p,t as re}from"./FeedbackStatusIcon-B-KWRqTb.js";import{n as m,t as ie}from"./x-D15tZFun.js";import{n as ae,t as h}from"./useLocalizedStringFormatter-jMGhd2fz.js";import{n as g,t as oe}from"./ProgressBar-CueLfXSd.js";import{n as _}from"./iframe-rO7NPwkc.js";var v,se;function y(){return(y=e((()=>{d(),v={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]},v.node,se=f(v)})))()}var ce,b,x,S,C,w,le,ue,de,fe,pe,me,he,T,E,D;function O(){return(O=e((()=>{ce=`_fileList_mb5n3_1`,b=`_fileListItem_mb5n3_18`,x=`_row_mb5n3_25`,S=`_iconSlot_mb5n3_46`,C=`_progressIcon_mb5n3_70`,w=`_ring_mb5n3_82`,le=`_successRing_mb5n3_1`,ue=`_checkmark_mb5n3_106`,de=`_successCheckmark_mb5n3_1`,fe=`_successIcon_mb5n3_121`,pe=`_errorReveal_mb5n3_163`,me=`_fileInfo_mb5n3_169`,he=`_fileName_mb5n3_177`,T=`_fileSize_mb5n3_186`,E=`_deleteButton_mb5n3_192`,D={fileList:ce,fileListItem:b,row:x,iconSlot:S,progressIcon:C,ring:w,successRing:le,checkmark:ue,successCheckmark:de,successIcon:fe,errorReveal:pe,fileInfo:me,fileName:he,fileSize:T,deleteButton:E}})))()}var k,A,j,M;function N(){return(N=e((()=>{k=n(),s(),r(),O(),A=_(),j=({className:e,children:t,...n})=>{let r=(0,k.useRef)(null);return(0,A.jsx)(c,{children:(0,A.jsxs)(`ul`,{...n,ref:r,tabIndex:-1,className:i(D.fileList,e),children:[(0,A.jsx)(M,{containerRef:r}),t]})})},M=({containerRef:e})=>{let t=l(),n=(0,k.useRef)(t);return(0,k.useEffect)(()=>{n.current=t}),(0,k.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},j.__docgenInfo={description:``,methods:[],displayName:`FileList`}})))()}var P,F,I;function L(){return(L=e((()=>{P={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`,uploadFailed:`Upload failed`},F={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`,uploadFailed:`Uppladdning misslyckades`},I={en:P,sv:F}})))()}var R,z,B;function ge(){return(ge=e((()=>{R=n(),y(),m(),a(),u(),g(),p(),ee(),h(),r(),O(),L(),z=_(),B=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:a,onCancel:ee,onDelete:s,className:c})=>{let l=ae(I),u=n===`uploading`,d=n===`success`,f=n===`error`,p=f&&!!a,m=(0,R.useId)(),h=(0,R.useId)(),g=d?l.format(`uploadComplete`):f?l.format(`uploadFailed`):void 0,_=[g&&h,p&&m].filter(Boolean).join(` `)||void 0,v=u?ee??s:s;return(0,z.jsxs)(`li`,{className:i(D.fileListItem,c),"data-status":n,children:[(0,z.jsxs)(`div`,{className:D.row,children:[(0,z.jsxs)(`span`,{className:D.iconSlot,children:[u&&(0,z.jsx)(oe,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":`${l.format(`uploading`)} ${e}`,className:D.progressIcon}),(0,z.jsx)(`span`,{className:D.ring,"aria-hidden":!0}),d&&(0,z.jsx)(re,{status:`success`,"aria-hidden":!0,size:16,className:i(D.checkmark,D.successIcon)})]}),g&&(0,z.jsx)(o,{id:h,children:g}),(0,z.jsxs)(`span`,{className:D.fileInfo,children:[(0,z.jsx)(`span`,{className:D.fileName,children:e}),t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o,{children:`, `}),(0,z.jsx)(`span`,{className:D.fileSize,children:t})]})]}),v&&(0,z.jsx)(ne,{variant:`icon`,onPress:v,"aria-label":`${l.format(u?`cancelUpload`:`removeFile`)} ${e}`,"aria-describedby":_,className:D.deleteButton,children:u?(0,z.jsx)(ie,{size:20,"aria-hidden":!0}):(0,z.jsx)(se,{size:20,"aria-hidden":!0})})]}),(0,z.jsx)(`div`,{id:m,className:D.errorReveal,children:a&&(0,z.jsx)(te,{isInvalid:!0,children:a})}),(0,z.jsxs)(o,{role:`status`,children:[d&&`${l.format(`uploadComplete`)}: ${e}`,p&&`${e}: ${a}`]})]})},B.__docgenInfo={description:``,methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:``},fileSize:{required:!1,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'` —\nthis is where you'd abort the in-flight request (e.g.\n`XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` has no concept of\n"uploaded" vs "local only" — if the file is already persisted\nserver-side by the time this fires, deleting it there too is your call.'},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var V,H,_e,U,W,G,K,q,J,Y,X,ve,Z,ye,Q,be,$,xe;function Se(){return(Se=e((()=>{V=t(n(),1),N(),ge(),H=_(),_e={component:j,subcomponents:{FileListItem:B},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,H.jsxs)(j,{...e,children:[(0,H.jsx)(B,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,H.jsx)(B,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,H.jsx)(B,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},U={},W={render:e=>(0,H.jsxs)(j,{...e,children:[(0,H.jsx)(B,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,H.jsx)(B,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},G={tags:[`!snapshot`],render:e=>(0,H.jsx)(j,{...e,children:[]})},K={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,H.jsx)(j,{...e,children:(0,H.jsx)(B,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},q={render:e=>(0,H.jsx)(j,{...e,children:(0,H.jsx)(B,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},J={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,H.jsx)(j,{...e,children:(0,H.jsx)(B,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},Y={render:e=>(0,H.jsx)(j,{...e,children:(0,H.jsx)(B,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})})},X={render:e=>(0,H.jsxs)(j,{...e,children:[(0,H.jsx)(B,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,H.jsx)(B,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,H.jsx)(B,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,H.jsx)(B,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})]})},ve=()=>{let[e,t]=V.useState(`uploading`),[n,r]=V.useState(0);return V.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,H.jsx)(j,{"aria-label":`Test`,children:(0,H.jsx)(B,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},Z={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,H.jsx)(ve,{})},ye=()=>{let[e,t]=V.useState(`uploading`);return V.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,H.jsx)(j,{"aria-label":`Test`,children:(0,H.jsx)(B,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onCancel:()=>{},onDelete:()=>{}})})},Q={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,H.jsx)(ye,{})},be=({initialFiles:e})=>{let[t,n]=V.useState(e);return(0,H.jsx)(j,{"aria-label":`Test`,children:t.map(e=>(0,H.jsx)(B,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},$={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,H.jsx)(be,{...e})},xe=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`MixedStates`,`AnimatedCompletion`,`AnimatedFailure`,`FocusManagementTest`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='error' errorMessage='Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.' onDelete={() => {
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
      <FileListItem fileName='references.pdf' fileSize='3.4 MB' status='error' errorMessage='Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.' onDelete={() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Se();export{Z as AnimatedCompletion,Q as AnimatedFailure,U as Default,G as Empty,Y as Error,$ as FocusManagementTest,X as MixedStates,J as Success,K as Uploading,q as UploadingDeterminate,W as WithoutFileSize,xe as __namedExportsOrder,_e as default};