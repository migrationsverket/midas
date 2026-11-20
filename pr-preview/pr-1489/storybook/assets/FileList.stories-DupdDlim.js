import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{n as r,t as i}from"./clsx-Cb5F7C4j.js";import{r as a,t as o}from"./VisuallyHidden-D6xo-vmp.js";import{n as s,t as ee}from"./FieldError-CzFVwSKw.js";import{o as c,r as l,t as u}from"./FocusScope-CguwfPD3.js";import{n as d,t as f}from"./Button-DSLPWgqZ.js";import{n as p,t as m}from"./createLucideIcon-B8cGKaCi.js";import{n as h,t as te}from"./FeedbackStatusIcon-CY0JA-00.js";import{n as g,t as ne}from"./x-D15tZFun.js";import{n as re,t as _}from"./useLocalizedStringFormatter-Dm8iVRyu.js";import{n as v,t as y}from"./Modal-DSFnb0Xr.js";import{n as b,t as ie}from"./ProgressBar-DxEQZ3JB.js";import{n as x}from"./iframe-BSrQmcWL.js";var S,ae;function C(){return(C=e((()=>{p(),S={name:`eye`,size:24,node:[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]},S.node,ae=m(S)})))()}var w,oe;function se(){return(se=e((()=>{p(),w={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]},w.node,oe=m(w)})))()}var ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,T,E,D;function O(){return(O=e((()=>{ce=`_fileList_2pw69_1`,le=`_fileListItem_2pw69_18`,ue=`_row_2pw69_25`,de=`_iconSlot_2pw69_46`,fe=`_progressIcon_2pw69_70`,pe=`_ring_2pw69_82`,me=`_successRing_2pw69_1`,he=`_checkmark_2pw69_106`,ge=`_successCheckmark_2pw69_1`,_e=`_successIcon_2pw69_121`,ve=`_errorReveal_2pw69_163`,ye=`_fileInfo_2pw69_169`,be=`_fileName_2pw69_177`,xe=`_fileSize_2pw69_186`,T=`_previewButton_2pw69_192`,E=`_deleteButton_2pw69_193`,D={fileList:ce,fileListItem:le,row:ue,iconSlot:de,progressIcon:fe,ring:pe,successRing:me,checkmark:he,successCheckmark:ge,successIcon:_e,errorReveal:ve,fileInfo:ye,fileName:be,fileSize:xe,previewButton:T,deleteButton:E}})))()}var k,A,j,M;function N(){return(N=e((()=>{k=n(),c(),r(),O(),A=x(),j=({className:e,children:t,...n})=>{let r=(0,k.useRef)(null);return(0,A.jsx)(l,{children:(0,A.jsxs)(`ul`,{...n,ref:r,tabIndex:-1,className:i(D.fileList,e),children:[(0,A.jsx)(M,{containerRef:r}),t]})})},M=({containerRef:e})=>{let t=u(),n=(0,k.useRef)(t);return(0,k.useEffect)(()=>{n.current=t}),(0,k.useEffect)(()=>{let t=e.current;if(!t)return;let r=new MutationObserver(e=>{e.some(e=>e.removedNodes.length>0)&&document.activeElement===document.body&&(n.current?.focusFirst({tabbable:!0})||t.focus())});return r.observe(t,{childList:!0}),()=>r.disconnect()},[e]),null},j.__docgenInfo={description:"A list of files the user has picked or uploaded, one `FileListItem` per\nfile. Give it an `aria-label` that says what the files are for.",methods:[],displayName:`FileList`}})))()}var P,Se,Ce;function we(){return(we=e((()=>{P={removeFile:`Remove`,cancelUpload:`Cancel`,uploading:`Uploading`,uploadComplete:`Upload complete`,uploadFailed:`Upload failed`,previewFile:`Preview`},Se={removeFile:`Ta bort`,cancelUpload:`Avbryt`,uploading:`Laddar upp`,uploadComplete:`Uppladdning klar`,uploadFailed:`Uppladdning misslyckades`,previewFile:`Förhandsgranska`},Ce={en:P,sv:Se}})))()}var F,I,L,Te;function Ee(){return(Ee=e((()=>{F=n(),C(),se(),g(),a(),d(),b(),h(),s(),_(),r(),O(),we(),I=x(),L=({fileName:e,fileSize:t,status:n=`idle`,progress:r,errorMessage:a,onCancel:s,onDelete:c,onPreview:l,className:u})=>{let d=re(Ce),p=n===`uploading`,m=n===`success`,h=n===`error`,g=h&&!!a,_=(0,F.useId)(),v=(0,F.useId)(),y=m?d.format(`uploadComplete`):h?d.format(`uploadFailed`):void 0,b=[y&&v,g&&_].filter(Boolean).join(` `)||void 0,x=p?s??c:c,S=!!l&&!p,C=(0,F.useRef)(null),w=(0,F.useRef)(!1);return(0,F.useLayoutEffect)(()=>{w.current&&(w.current=!1,C.current?.focus())},[S]),(0,I.jsxs)(`li`,{className:i(D.fileListItem,u),"data-status":n,children:[(0,I.jsxs)(`div`,{className:D.row,children:[(0,I.jsxs)(`span`,{className:D.iconSlot,children:[p&&(0,I.jsx)(ie,{shape:`circular`,small:!0,value:r,isIndeterminate:r===void 0,"aria-label":`${d.format(`uploading`)} ${e}`,className:D.progressIcon}),(0,I.jsx)(`span`,{className:D.ring,"aria-hidden":!0}),m&&(0,I.jsx)(te,{status:`success`,"aria-hidden":!0,size:16,className:i(D.checkmark,D.successIcon)})]}),y&&(0,I.jsx)(o,{id:v,children:y}),(0,I.jsxs)(`span`,{className:D.fileInfo,children:[(0,I.jsx)(`span`,{className:D.fileName,children:e}),t&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(o,{children:`, `}),(0,I.jsx)(`span`,{className:D.fileSize,children:t})]})]}),S&&(0,I.jsx)(Te,{hadFocusRef:w,variant:`icon`,onPress:l,"aria-label":`${d.format(`previewFile`)} ${e}`,"aria-describedby":b,className:D.previewButton,children:(0,I.jsx)(ae,{size:20,"aria-hidden":!0})}),x&&(0,I.jsx)(f,{ref:C,variant:`icon`,onPress:x,"aria-label":`${d.format(p?`cancelUpload`:`removeFile`)} ${e}`,"aria-describedby":b,className:D.deleteButton,children:p?(0,I.jsx)(ne,{size:20,"aria-hidden":!0}):(0,I.jsx)(oe,{size:20,"aria-hidden":!0})})]}),(0,I.jsx)(`div`,{id:_,className:D.errorReveal,children:a&&(0,I.jsx)(ee,{isInvalid:!0,children:a})}),(0,I.jsxs)(o,{role:`status`,children:[m&&`${d.format(`uploadComplete`)}: ${e}`,g&&`${e}: ${a}`]})]})},Te=({hadFocusRef:e,...t})=>{let n=(0,F.useRef)(null);return(0,F.useLayoutEffect)(()=>{let t=n.current;return()=>{t&&document.activeElement===t&&(e.current=!0)}},[e]),(0,I.jsx)(f,{...t,ref:n})},L.__docgenInfo={description:"A row in a `FileList`, showing one file and its upload status.",methods:[],displayName:`FileListItem`,props:{fileName:{required:!0,tsType:{name:`string`},description:`Shown in the row, and used in the buttons' accessible names.`},fileSize:{required:!1,tsType:{name:`string`},description:"Shown after the file name, already formatted, e.g. `'1.2 MB'`."},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'uploading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`Where the file is in the upload. Decides what the row shows, and whether
its button cancels or deletes.
@default 'idle'`,defaultValue:{value:`'idle'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:"0-100. Only meaningful when `status='uploading'`; omit for indeterminate."},errorMessage:{required:!1,tsType:{name:`string`},description:"Shown below the row when `status='error'`."},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the cancel button is pressed while `status='uploading'`.\nThis is where you'd abort the in-flight request, e.g. with\n`XMLHttpRequest.abort()` or `AbortController.abort()`. Falls back to\n`onDelete` if omitted, so an in-progress upload isn't silently left\nrunning in the background with no way to stop it."},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Called when the delete button is pressed for any status other than\n`uploading` (use `onCancel` for that). `FileList` doesn't know whether a\nfile is uploaded or only local. If it's already stored server-side when\nthis fires, deleting it there too is up to you."},onPreview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Shows a preview button next to the delete button. Hidden while
\`uploading\`, when cancelling is the main action in the row. Shown when
an upload failed, since the file is still on the user's device and they
can check what they picked. Opening the preview, e.g. in a \`Modal\` or
another component, is up to you.`},className:{required:!1,tsType:{name:`string`},description:"Class name for the row's `<li>`."}}}})))()}var R,z,De,B,V,H,U,W,G,K,q,Oe,ke,J,Y,Ae,X,je,Z,Q,$,Me;function Ne(){return(Ne=e((()=>{R=t(n(),1),N(),Ee(),v(),z=x(),De={component:j,subcomponents:{FileListItem:L},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},B={},V={render:e=>(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(L,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},H={tags:[`!snapshot`],render:e=>(0,z.jsx)(j,{...e,children:[]})},U={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},W={render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},G={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},K={render:e=>(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})})},q={parameters:{docs:{description:{story:"Pass `onPreview` to show a preview button next to the delete button. It is only shown for idle and completed files, and opening the preview is up to you."}}},render:e=>(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(L,{fileName:`passport.jpg`,fileSize:`2.1 MB`,status:`success`,onPreview:()=>{},onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`certificate.pdf`,fileSize:`340 KB`,onPreview:()=>{},onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`photo.png`,fileSize:`4.8 MB`,status:`uploading`,progress:40,onPreview:()=>{},onCancel:()=>{}}),(0,z.jsx)(L,{fileName:`notes.docx`,fileSize:`45 KB`,onDelete:()=>{}})]})},Oe=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22480%22%20height%3D%22320%22%3E%3Crect%20width%3D%22480%22%20height%3D%22320%22%20fill%3D%22%23d6e4ea%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%2290%22%20r%3D%2240%22%20fill%3D%22%23f2c94c%22%2F%3E%3Cpath%20d%3D%22M0%20320%20L160%20140%20L280%20260%20L360%20180%20L480%20320%20Z%22%20fill%3D%22%234f7f8f%22%2F%3E%3C%2Fsvg%3E`,ke=e=>{let[t,n]=R.useState(null);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j,{...e,children:(0,z.jsx)(L,{fileName:`landscape.svg`,fileSize:`1 KB`,status:`success`,onPreview:()=>n(`landscape.svg`),onDelete:()=>{}})}),(0,z.jsx)(y,{title:t??``,isOpen:t!==null,onOpenChange:e=>!e&&n(null),children:(0,z.jsx)(`img`,{src:Oe,alt:t??``,style:{display:`block`,maxWidth:`100%`}})})]})},J={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{docs:{description:{story:"FileList has no viewer of its own. Here the app opens the image in a `Modal` when the preview button is pressed."}}},render:e=>(0,z.jsx)(ke,{...e})},Y={render:e=>(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(L,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,z.jsx)(L,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,z.jsx)(L,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})]})},Ae=()=>{let[e,t]=R.useState(`uploading`),[n,r]=R.useState(0);return R.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,z.jsx)(j,{"aria-label":`Test`,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},X={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,z.jsx)(Ae,{})},je=()=>{let[e,t]=R.useState(`uploading`);return R.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,z.jsx)(j,{"aria-label":`Test`,children:(0,z.jsx)(L,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onCancel:()=>{},onDelete:()=>{}})})},Z={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,z.jsx)(je,{})},Q=({initialFiles:e})=>{let[t,n]=R.useState(e);return(0,z.jsx)(j,{"aria-label":`Test`,children:t.map(e=>(0,z.jsx)(L,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},$={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,z.jsx)(Q,{...e})},Me=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`WithPreview`,`PreviewInModal`,`MixedStates`,`AnimatedCompletion`,`AnimatedFailure`,`FocusManagementTest`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  // Reproduced twice on the same machine, back to back, no code changes in
  // between: fails visual regression with "Could not capture a stable
  // screenshot within 5000ms." Quarantined until root-caused — see PR #1367.
  tags: ['!snapshot'],
  render: args => <FileList {...args}>
      {[]}
    </FileList>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='large-video.mp4' fileSize='128 MB' status='uploading' progress={40} onCancel={() => {
      // noop — in a real app, abort the in-flight upload request here
    }} />
    </FileList>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='error' errorMessage='Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`onPreview\` to show a preview button next to the delete button. It is only shown for idle and completed files, and opening the preview is up to you.'
      }
    }
  },
  render: args => <FileList {...args}>
      <FileListItem fileName='passport.jpg' fileSize='2.1 MB' status='success' onPreview={() => {
      // noop
    }} onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='certificate.pdf' fileSize='340 KB' onPreview={() => {
      // noop
    }} onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='photo.png' fileSize='4.8 MB' status='uploading' progress={40} onPreview={() => {
      // noop
    }} onCancel={() => {
      // noop
    }} />
      <FileListItem fileName='notes.docx' fileSize='45 KB' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // Only used by the tests, to show that the app can open its own preview.
  // Hidden from Storybook and docs, and the screenshot would be the same as
  // WithPreview since the modal only opens on press
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    docs: {
      description: {
        story: 'FileList has no viewer of its own. Here the app opens the image in a \`Modal\` when the preview button is pressed.'
      }
    }
  },
  render: args => <PreviewInModalContainer {...args} />
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.'
      }
    }
  },
  render: () => <AnimatedFailureDemo />
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => <FocusTestContainer {...args} />
}`,...$.parameters?.docs?.source}}}})))()}Ne();export{X as AnimatedCompletion,Z as AnimatedFailure,B as Default,H as Empty,K as Error,$ as FocusManagementTest,Y as MixedStates,J as PreviewInModal,G as Success,U as Uploading,W as UploadingDeterminate,q as WithPreview,V as WithoutFileSize,Me as __namedExportsOrder,De as default};