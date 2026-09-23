import{i as e}from"./preload-helper-CT_b8DTk.js";import{t,z as n}from"./iframe-d4XypKrm.js";import{t as r}from"./exports-DcicId79.js";import{t as i}from"./Button-DgSvR4eE.js";import{b as a,t as o}from"./lucide-react-XKeFj7bk.js";import{t as s}from"./button-ChlTqC1A.js";import{n as c,r as l,t as u}from"./Tooltip-DjEe-hp_.js";var d,f,p,m,h,g,_,v;e((()=>{o(),r(),l(),s(),d=t(),f=e=>(0,d.jsx)(`div`,{style:{padding:`5rem`,display:`flex`,justifyContent:`center`},children:(0,d.jsxs)(c,{isOpen:e.isOpen,children:[(0,d.jsx)(i,{variant:`icon`,"aria-label":`Spara`,children:(0,d.jsx)(a,{})}),(0,d.jsx)(u,{...e})]})}),p={component:u,subcomponents:{TooltipTrigger:c},title:`Components/Tooltip`,tags:[`autodocs`],parameters:{layout:`centered`,a11y:{test:`todo`}},args:{children:`Spara`},render:f},m={},h={tags:[`!snapshot`],args:{className:`test-class`,isOpen:!0}},g={tags:[`!snapshot`],args:{placement:`top`,isOpen:!0}},_={args:{placement:`start`,isOpen:!0},tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,d.jsx)(n,{locale:`ar-AR`,children:(0,d.jsx)(f,{...e})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Primary`,`Open`,`Placement`,`PlacementStartRTL`]}))();export{h as Open,g as Placement,_ as PlacementStartRTL,m as Primary,v as __namedExportsOrder,p as default};