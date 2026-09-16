import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{E as r,O as i,n as a,r as o,t as s}from"./iframe-T8IErB2Z.js";import{n as c,t as l}from"./clsx-CR09tJUg.js";import{t as u}from"./Button-DSYka9D1.js";import{n as d,o as ee,t as f}from"./lucide-react-Czq9it2u.js";import{r as te,t as p}from"./intl-6qDptcWY.js";import{t as m}from"./button-D_LmNvxL.js";import{n as ne,t as re}from"./FeedbackStatusIcon-De-rGSFS.js";import{n as ie,t as h}from"./field-error-CVHnyywx.js";import{t as g}from"./ProgressBar-bpi-4nxM.js";import{t as _}from"./progress-bar-CmHft9sc.js";var v,y,b,x,S,C,w,T,E,D,O=e((()=>{v=`_fileList_1njop_1`,y=`_fileListItem_1njop_10`,b=`_row_1njop_15`,x=`_error_1njop_26`,S=`_statusIcon_1njop_30`,C=`_fileInfo_1njop_38`,w=`_fileName_1njop_46`,T=`_fileSize_1njop_55`,E=`_deleteButton_1njop_61`,D={fileList:v,fileListItem:y,row:b,error:x,statusIcon:S,fileInfo:C,fileName:w,fileSize:T,deleteButton:E}})),k,A,j,M,N=e((()=>{k=t(n(),1),a(),c(),O(),A=s(),j=({className:e,children:t,...n})=>{let r=(0,k.useRef)(null);return(0,A.jsx)(i,{children:(0,A.jsxs)(`ul`,{...n,ref:r,tabIndex:-1,className:l(D.fileList,e),children:[(0,A.jsx)(M,{containerRef:r}),t]})})},M=({containerRef:e})=>{let t=r(),n=(0,k.useRef)(t);return(0,k.useEffect)(()=>{n.current=t}),(0,k.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},j.__docgenInfo={description:``,methods:[],displayName:`FileList`}})),P,F,I,L=e((()=>{P={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`},F={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`},I={en:P,sv:F}})),R,z,ae=e((()=>{f(),a(),m(),_(),ne(),h(),p(),c(),O(),L(),R=s(),z=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:i,onCancel:a,onDelete:s,className:c})=>{let f=te(I),p=n===`uploading`,m=p?a??s:s;return(0,R.jsxs)(`li`,{className:l(D.fileListItem,c),children:[(0,R.jsxs)(`div`,{className:l(D.row,n===`error`&&D.error),children:[n===`uploading`&&(0,R.jsx)(g,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":f.format(`uploading`),className:D.statusIcon}),n===`success`&&(0,R.jsx)(re,{status:`success`,"aria-hidden":!0,className:D.statusIcon}),(0,R.jsxs)(`span`,{className:D.fileInfo,children:[(0,R.jsx)(`span`,{className:D.fileName,children:e}),t&&(0,R.jsx)(`span`,{className:D.fileSize,children:t})]}),m&&(0,R.jsx)(u,{variant:`icon`,onPress:m,"aria-label":`${f.format(p?`cancelUpload`:`removeFile`)} ${e}`,className:D.deleteButton,children:p?(0,R.jsx)(d,{size:20,"aria-hidden":!0}):(0,R.jsx)(ee,{size:20,"aria-hidden":!0})})]}),n===`error`&&i&&(0,R.jsx)(ie,{isInvalid:!0,className:D.error,children:i}),n===`success`&&(0,R.jsx)(o,{role:`status`,children:f.format(`uploadComplete`)})]})},z.__docgenInfo={description:``,methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:``},fileSize:{required:!1,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'` —\nthis is where you'd abort the in-flight request (e.g.\n`XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:'Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` has no concept of\n"uploaded" vs "local only" — if the file is already persisted\nserver-side by the time this fires, deleting it there too is your call.'},className:{required:!1,tsType:{name:`string`},description:``}}}})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{B=t(n(),1),N(),ae(),V=s(),H={component:j,subcomponents:{FileListItem:z},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,V.jsxs)(j,{...e,children:[(0,V.jsx)(z,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,V.jsx)(z,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,V.jsx)(z,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},U={},W={render:e=>(0,V.jsxs)(j,{...e,children:[(0,V.jsx)(z,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,V.jsx)(z,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},G={render:e=>(0,V.jsx)(j,{...e,children:[]})},K={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(z,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},q={render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(z,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},J={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(z,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},Y={render:e=>(0,V.jsx)(j,{...e,children:(0,V.jsx)(z,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})})},X={render:e=>(0,V.jsxs)(j,{...e,children:[(0,V.jsx)(z,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,V.jsx)(z,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,V.jsx)(z,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,V.jsx)(z,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Det gick inte bra`,onDelete:()=>{}})]})},Z=({initialFiles:e})=>{let[t,n]=B.useState(e);return(0,V.jsx)(j,{"aria-label":`Test`,children:t.map(e=>(0,V.jsx)(z,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},Q={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,V.jsx)(Z,{...e})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  // @ts-expect-error initialFiles exists only on the test container, not FileList
  render: args => <FocusTestContainer {...args} />
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`MixedStates`,`FocusManagementTest`]}))();export{U as Default,G as Empty,Y as Error,Q as FocusManagementTest,X as MixedStates,J as Success,K as Uploading,q as UploadingDeterminate,W as WithoutFileSize,$ as __namedExportsOrder,H as default};