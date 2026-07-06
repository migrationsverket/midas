import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CFcu8seH.js";import{i as n,n as r,r as i,t as a}from"./FileListItem-Dfq6Hc0g.js";var o,s,c,l,u,d;e((()=>{n(),r(),o=t(),s={component:i,subcomponents:{FileListItem:a},title:`Components/FileList`,tags:[`autodocs`],args:{"aria-label":`Uploaded files`},render:e=>(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(a,{fileName:`resume.pdf`,fileSize:`1.2 MB`,onDelete:()=>{}}),(0,o.jsx)(a,{fileName:`cover-letter.docx`,fileSize:`45 KB`,onDelete:()=>{}}),(0,o.jsx)(a,{fileName:`references.pdf`,fileSize:`3.4 MB`,onDelete:()=>{}})]})},c={},l={render:e=>(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(a,{fileName:`resume.pdf`,onDelete:()=>{}}),(0,o.jsx)(a,{fileName:`cover-letter.docx`,onDelete:()=>{}})]})},u={render:e=>(0,o.jsx)(i,{...e,children:[]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      <FileListItem fileName='resume.pdf' onDelete={() => {
      // noop
    }} />
      <FileListItem fileName='cover-letter.docx' onDelete={() => {
      // noop
    }} />
    </FileList>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <FileList {...args}>
      {[]}
    </FileList>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithoutFileSize`,`Empty`]}))();export{c as Default,u as Empty,l as WithoutFileSize,d as __namedExportsOrder,s as default};