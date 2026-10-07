import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,r as n,t as r}from"./Tooltip-CpeZqL_U.js";import{a as i,i as a,n as o}from"./iframe-Bv0kx7Fl.js";import{n as s,t as c}from"./Button-B5C-T8qg.js";import{n as l,t as u}from"./save-CkObnXOV.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l(),i(),n(),s(),d=o(),f=e=>(0,d.jsx)(`div`,{style:{padding:`5rem`,display:`flex`,justifyContent:`center`},children:(0,d.jsxs)(t,{isOpen:e.isOpen,children:[(0,d.jsx)(c,{variant:`icon`,"aria-label":`Spara`,children:(0,d.jsx)(u,{})}),(0,d.jsx)(r,{...e})]})}),p={component:r,subcomponents:{TooltipTrigger:t},title:`Components/Tooltip`,tags:[`autodocs`],parameters:{layout:`centered`,a11y:{test:`todo`}},args:{children:`Spara`},render:f},m={},h={tags:[`!snapshot`],args:{className:`test-class`,isOpen:!0}},g={tags:[`!snapshot`],args:{placement:`top`,isOpen:!0}},_={args:{placement:`start`,isOpen:!0},tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,d.jsx)(a,{locale:`ar-AR`,children:(0,d.jsx)(f,{...e})})},v=[`Primary`,`Open`,`Placement`,`PlacementStartRTL`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // Reproduced twice on the same machine, back to back, no code changes in
  // between: pixel diffs (~429px, ~1%) against its own prior-run reference.
  // Likely the open/close transition not fully settling — \`isOpen: true\`
  // forces the tooltip in on mount. All three isOpen:true Tooltip stories
  // (this one, Placement, PlacementStartRTL) have independently flaked at
  // least once. Quarantined until root-caused, see PR #1367.
  tags: ['!snapshot'],
  args: {
    className: 'test-class',
    isOpen: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  // Same flakiness as Open above — pixel diffs between consecutive runs,
  // no code changes. Quarantined until root-caused, see PR #1367.
  tags: ['!snapshot'],
  args: {
    placement: 'top',
    isOpen: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  // Same flakiness as Open/Placement above — flaked on a 3rd run after not
  // flaking on the first 2 (all three isOpen: true Tooltip stories have now
  // independently flaked at least once). Quarantined until root-caused, see
  // PR #1367.
  args: {
    placement: 'start',
    isOpen: true
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => <I18nProvider locale='ar-AR'>
      <Render {...args} />
    </I18nProvider>
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as Open,g as Placement,_ as PlacementStartRTL,m as Primary,v as __namedExportsOrder,p as default};