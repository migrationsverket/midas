import{j as e,l}from"./iframe-D_RLRaO3.js";import{S as t}from"./Skeleton-yQbQOHuq.js";import{T as d}from"./TextField-B_1ts_bQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DbQ6xlb-.js";import"./utils-BlqKQH7t.js";import"./TextField-6-RvQsCm.js";import"./FieldError-CLCPHxAE.js";import"./Text-BuBdqt_E.js";import"./useFocusRing-DLvend6y.js";import"./index-BdZm9yDI.js";import"./index-CLauSptU.js";import"./Text-B2nU6iIt.js";import"./RSPContexts-C-7yHdm5.js";import"./Form-lzVeGsdG.js";import"./useFormValidation-DdWaKx-M.js";import"./Group-CtrsqpQ7.js";import"./Input-CDZ0V4V8.js";import"./Hidden-DFjx3PZR.js";import"./Button-u0QZa7Fn.js";import"./useLabels-D_fUya2Q.js";import"./useButton-D0Ww05Nb.js";import"./useTextField-CNM1YrHg.js";import"./useControlledState-BFob-p1I.js";import"./useField-BcNwyeKj.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CKfxvLZ1.js";import"./Dialog-CwmWdhJm.js";import"./OverlayArrow-DXgFn0bE.js";import"./useResizeObserver-C2dZ-Udt.js";import"./Collection-BXpYpuHa.js";import"./index-Dmj2XFJ6.js";import"./Separator-B9neSB_O.js";import"./SelectionManager-BQ3woPmb.js";import"./useEvent-D1OomJ4P.js";import"./scrollIntoView-Dm-OSLLN.js";import"./SelectionIndicator-Cq7sdARx.js";import"./useDescription-MuK9kXs1.js";import"./ListKeyboardDelegate-DzNijRHj.js";import"./PressResponder-C4jhDrkT.js";import"./useLocalizedStringFormatter-DNatSRRY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DErfkRCT.js";import"./VisuallyHidden-Bv5E6YOy.js";import"./Button-CmlIBVdc.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B7X7aezu.js";import"./createLucideIcon-tmDJTb0C.js";import"./x-D4f4_rt6.js";import"./Heading-zbAesl1A.js";import"./info-B9Cq6StL.js";import"./Popover-FFmuhwtL.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
