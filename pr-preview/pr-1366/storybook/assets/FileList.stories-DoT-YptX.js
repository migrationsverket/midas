import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{U as r,V as i,n as a,r as ee,t as o}from"./iframe-B3LMt5Ml.js";import{n as s,t as c}from"./clsx-Cni7g_Rs.js";import{t as te}from"./Button-CREaDiw0.js";import{c as ne,n as re,t as l}from"./lucide-react-XKeFj7bk.js";import{r as ie,t as u}from"./intl-h17Eldke.js";import{t as d}from"./button-CMOC0DcM.js";import{n as ae,t as oe}from"./FeedbackStatusIcon-Clc7uf7s.js";import{n as se,t as ce}from"./field-error-Dle2CuDZ.js";import{t as le}from"./ProgressBar-8WGnoArp.js";import{t as ue}from"./progress-bar-DXoNBUT1.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{f=`_fileList_19isi_1`,p=`_fileListItem_19isi_18`,m=`_row_19isi_25`,h=`_iconSlot_19isi_46`,g=`_progressIcon_19isi_70`,_=`_ring_19isi_87`,v=`_successRing_19isi_1`,y=`_checkmark_19isi_111`,b=`_successCheckmark_19isi_1`,x=`_successIcon_19isi_126`,S=`_errorReveal_19isi_180`,C=`_fileInfo_19isi_186`,w=`_fileName_19isi_194`,T=`_fileSize_19isi_203`,E=`_deleteButton_19isi_209`,D={fileList:f,fileListItem:p,row:m,iconSlot:h,progressIcon:g,ring:_,successRing:v,checkmark:y,successCheckmark:b,successIcon:x,errorReveal:S,fileInfo:C,fileName:w,fileSize:T,deleteButton:E}})),k,A,j,M,de=e((()=>{k=t(n(),1),a(),s(),O(),A=o(),j=({className:e,children:t,...n})=>{let i=(0,k.useRef)(null);return(0,A.jsx)(r,{children:(0,A.jsxs)(`ul`,{...n,ref:i,tabIndex:-1,className:c(D.fileList,e),children:[(0,A.jsx)(M,{containerRef:i}),t]})})},M=({containerRef:e})=>{let t=i(),n=(0,k.useRef)(t);return(0,k.useEffect)(()=>{n.current=t}),(0,k.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},j.__docgenInfo={description:``,methods:[],displayName:`FileList`}})),N,P,F,fe=e((()=>{N={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`},P={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`},F={en:N,sv:P}})),I,L,pe=e((()=>{l(),a(),d(),ue(),ae(),ce(),u(),s(),O(),fe(),I=o(),L=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:i,onCancel:a,onDelete:o,className:s})=>{let l=ie(F),u=n===`uploading`,d=u?a??o:o;return(0,I.jsxs)(`li`,{className:c(D.fileListItem,s),"data-status":n,children:[(0,I.jsxs)(`div`,{className:D.row,children:[(0,I.jsxs)(`span`,{className:D.iconSlot,children:[(0,I.jsx)(le,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":l.format(`uploading`),"aria-hidden":u?void 0:!0,className:D.progressIcon}),(0,I.jsx)(`span`,{className:D.ring,"aria-hidden":!0}),(0,I.jsx)(oe,{status:`success`,"aria-hidden":!0,size:16,className:c(D.checkmark,D.successIcon)})]}),(0,I.jsxs)(`span`,{className:D.fileInfo,children:[(0,I.jsx)(`span`,{className:D.fileName,children:e}),t&&(0,I.jsx)(`span`,{className:D.fileSize,children:t})]}),d&&(0,I.jsx)(te,{variant:`icon`,onPress:d,"aria-label":`${l.format(u?`cancelUpload`:`removeFile`)} ${e}`,className:D.deleteButton,children:u?(0,I.jsx)(re,{size:20,"aria-hidden":!0}):(0,I.jsx)(ne,{size:20,"aria-hidden":!0})})]}),(0,I.jsx)(`div`,{className:D.errorReveal,children:i&&(0,I.jsx)(se,{isInvalid:!0,children:i})}),(0,I.jsx)(ee,{role:`status`,children:n===`success`?l.format(`uploadComplete`):``})]})},L.__docgenInfo={description:``,methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:``},fileSize:{required:!1,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'` —\nthis is where you'd abort the in-flight request (e.g.\n`XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` has no concept of\n"uploaded" vs "local only" — if the file is already persisted\nserver-side by the time this fires, deleting it there too is your call.'},className:{required:!1,tsType:{name:`string`},description:``}}}})),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,me,$,he;e((()=>{R=t(n(),1),de(),pe(),z=o(),B={component:j,subcomponents:{FileListItem:L},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},V={},H={render:e=>(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(L,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},U={tags:[`!snapshot`],render:e=>(0,z.jsx)(j,{...e,children:[]})},W={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},G={render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},K={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},q={render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})})},J={render:e=>(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(L,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,z.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})]})},Y=()=>{let[e,t]=R.useState(`uploading`),[n,r]=R.useState(0);return R.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,z.jsx)(j,{"aria-label":`Test`,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},X={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,z.jsx)(Y,{})},Z=()=>{let[e,t]=R.useState(`uploading`);return R.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,z.jsx)(j,{"aria-label":`Test`,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Det gick inte bra`,onCancel:()=>{},onDelete:()=>{}})})},Q={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,z.jsx)(Z,{})},me=({initialFiles:e})=>{let[t,n]=R.useState(e);return(0,z.jsx)(j,{"aria-label":`Test`,children:t.map(e=>(0,z.jsx)(L,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},$={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,z.jsx)(me,{...e})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  // Reproduced twice on the same machine, back to back, no code changes in
  // between: fails visual regression with "Could not capture a stable
  // screenshot within 5000ms." Quarantined until root-caused — see PR #1367.
  tags: ['!snapshot'],
  render: args => <FileList {...args}>
      {[]}
    </FileList>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='large-video.mp4' fileSize='128 MB' status='uploading' progress={40} onCancel={() => {
      // noop — in a real app, abort the in-flight upload request here
    }} />
    </FileList>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='error' errorMessage='Det gick inte bra' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},he=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`MixedStates`,`AnimatedCompletion`,`AnimatedFailure`,`FocusManagementTest`]}))();export{X as AnimatedCompletion,Q as AnimatedFailure,V as Default,U as Empty,q as Error,$ as FocusManagementTest,J as MixedStates,K as Success,W as Uploading,G as UploadingDeterminate,H as WithoutFileSize,he as __namedExportsOrder,B as default};