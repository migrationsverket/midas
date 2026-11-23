import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-BWPDF9mI.js";import{i as r,n as i,r as a,t as o}from"./FileListItem-BPBM64hn.js";import{n as s,t as c}from"./Modal-BiPzSRzw.js";import{n as l}from"./iframe-ByY5cIto.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{u=t(n(),1),r(),i(),s(),d=l(),f={component:a,subcomponents:{FileListItem:o},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,d.jsxs)(a,{...e,children:[(0,d.jsx)(o,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,d.jsx)(o,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,d.jsx)(o,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},p={},m={render:e=>(0,d.jsxs)(a,{...e,children:[(0,d.jsx)(o,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,d.jsx)(o,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},h={tags:[`!snapshot`],render:e=>(0,d.jsx)(a,{...e,children:[]})},g={tags:[`!snapshot`],parameters:{docs:{description:{story:"Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears."}}},render:e=>(0,d.jsx)(a,{...e,children:(0,d.jsx)(o,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,onCancel:()=>{}})})},_={render:e=>(0,d.jsx)(a,{...e,children:(0,d.jsx)(o,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}})})},v={parameters:{docs:{description:{story:"`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to."}}},render:e=>(0,d.jsx)(a,{...e,children:(0,d.jsx)(o,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`success`,onDelete:()=>{}})})},y={render:e=>(0,d.jsx)(a,{...e,children:(0,d.jsx)(o,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})})},b={parameters:{docs:{description:{story:"Pass `onPreview` to show a preview button next to the delete button. It is only shown for idle and completed files, and opening the preview is up to you."}}},render:e=>(0,d.jsxs)(a,{...e,children:[(0,d.jsx)(o,{fileName:`passport.jpg`,fileSize:`2.1 MB`,status:`success`,onPreview:()=>{},onDelete:()=>{}}),(0,d.jsx)(o,{fileName:`certificate.pdf`,fileSize:`340 KB`,onPreview:()=>{},onDelete:()=>{}}),(0,d.jsx)(o,{fileName:`photo.png`,fileSize:`4.8 MB`,status:`uploading`,progress:40,onPreview:()=>{},onCancel:()=>{}}),(0,d.jsx)(o,{fileName:`notes.docx`,fileSize:`45 KB`,onDelete:()=>{}})]})},x=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22480%22%20height%3D%22320%22%3E%3Crect%20width%3D%22480%22%20height%3D%22320%22%20fill%3D%22%23d6e4ea%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%2290%22%20r%3D%2240%22%20fill%3D%22%23f2c94c%22%2F%3E%3Cpath%20d%3D%22M0%20320%20L160%20140%20L280%20260%20L360%20180%20L480%20320%20Z%22%20fill%3D%22%234f7f8f%22%2F%3E%3C%2Fsvg%3E`,S=e=>{let[t,n]=u.useState(null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{...e,children:(0,d.jsx)(o,{fileName:`landscape.svg`,fileSize:`1 KB`,status:`success`,onPreview:()=>n(`landscape.svg`),onDelete:()=>{}})}),(0,d.jsx)(c,{title:t??``,isOpen:t!==null,onOpenChange:e=>!e&&n(null),children:(0,d.jsx)(`img`,{src:x,alt:t??``,style:{display:`block`,maxWidth:`100%`}})})]})},C={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{docs:{description:{story:"FileList has no viewer of its own. Here the app opens the image in a `Modal` when the preview button is pressed."}}},render:e=>(0,d.jsx)(S,{...e})},w={render:e=>(0,d.jsxs)(a,{...e,children:[(0,d.jsx)(o,{fileName:`idle-file.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,d.jsx)(o,{fileName:`large-video.mp4`,fileSize:`128 MB`,status:`uploading`,progress:40,onCancel:()=>{}}),(0,d.jsx)(o,{fileName:`cover-letter.docx`,fileSize:`45 KB`,status:`success`,onDelete:()=>{}}),(0,d.jsx)(o,{fileName:`references.pdf`,fileSize:`3.4 MB`,status:`error`,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onDelete:()=>{}})]})},T=()=>{let[e,t]=u.useState(`uploading`),[n,r]=u.useState(0);return u.useEffect(()=>{if(e!==`uploading`)return;if(n>=100){let e=setTimeout(()=>t(`success`),300);return()=>clearTimeout(e)}let i=setTimeout(()=>r(e=>Math.min(e+20,100)),200);return()=>clearTimeout(i)},[e,n]),(0,d.jsx)(a,{"aria-label":`Test`,children:(0,d.jsx)(o,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,progress:e===`uploading`?n:void 0,onCancel:()=>{},onDelete:()=>{}})})},E={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.`}}},render:()=>(0,d.jsx)(T,{})},D=()=>{let[e,t]=u.useState(`uploading`);return u.useEffect(()=>{if(e!==`uploading`)return;let n=setTimeout(()=>t(`error`),1500);return()=>clearTimeout(n)},[e]),(0,d.jsx)(a,{"aria-label":`Test`,children:(0,d.jsx)(o,{fileName:`resume.pdf`,fileSize:`1.2 MB`,status:e,errorMessage:`Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.`,onCancel:()=>{},onDelete:()=>{}})})},O={tags:[`!snapshot`],parameters:{docs:{description:{story:`Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.`}}},render:()=>(0,d.jsx)(D,{})},k=({initialFiles:e})=>{let[t,n]=u.useState(e);return(0,d.jsx)(a,{"aria-label":`Test`,children:t.map(e=>(0,d.jsx)(o,{fileName:e,onDelete:()=>n(t=>t.filter(t=>t!==e))},e))})},A={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,d.jsx)(k,{...e})},j=[`Default`,`WithoutFileSize`,`Empty`,`Uploading`,`UploadingDeterminate`,`Success`,`Error`,`WithPreview`,`PreviewInModal`,`MixedStates`,`AnimatedCompletion`,`AnimatedFailure`,`FocusManagementTest`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // Reproduced twice on the same machine, back to back, no code changes in
  // between: fails visual regression with "Could not capture a stable
  // screenshot within 5000ms." Quarantined until root-caused — see PR #1367.
  tags: ['!snapshot'],
  render: args => <FileList {...args}>
      {[]}
    </FileList>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='large-video.mp4' fileSize='128 MB' status='uploading' progress={40} onCancel={() => {
      // noop — in a real app, abort the in-flight upload request here
    }} />
    </FileList>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' fileSize='1.2 MB' status='error' errorMessage='Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the upload-complete animation: determinate progress reaching 100%, then a ring and checkmark that settle into a persistent success indicator rather than disappearing — success needs to stay visually distinct from idle.'
      }
    }
  },
  render: () => <AnimatedCompletionDemo />
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the upload-failure transition: the icon collapses with no checkmark flourish, and the error message reveals below.'
      }
    }
  },
  render: () => <AnimatedFailureDemo />
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => <FocusTestContainer {...args} />
}`,...A.parameters?.docs?.source}}}})))()}M();export{E as AnimatedCompletion,O as AnimatedFailure,p as Default,h as Empty,y as Error,A as FocusManagementTest,w as MixedStates,C as PreviewInModal,v as Success,g as Uploading,_ as UploadingDeterminate,b as WithPreview,m as WithoutFileSize,j as __namedExportsOrder,f as default};