import{j as e,l}from"./iframe-D7Ymg_mK.js";import{S as t}from"./Skeleton-rIDi1inV.js";import{T as d}from"./TextField-BZKF-4gi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CqoJ9tkj.js";import"./utils-kIFV34ck.js";import"./TextField-DGlM0L17.js";import"./FieldError-CsP61a2L.js";import"./Text-9YYjoimb.js";import"./useFocusRing-Bl9_YbgB.js";import"./index-vaQrj-3c.js";import"./index-B0QmpyiM.js";import"./Text-DAtUy53c.js";import"./RSPContexts-BZleg50n.js";import"./Form-NoSEts35.js";import"./useFormValidation-C-qAShxs.js";import"./Group-C8w-zBDs.js";import"./Input-CDtn660D.js";import"./Hidden-BCS-fde6.js";import"./Button-C0Ip64qm.js";import"./useLabels-BTNuMlRw.js";import"./useButton-BwjaRMSI.js";import"./useTextField-CfEuT84J.js";import"./useControlledState-B4Qeg9Wh.js";import"./useField-Cr8xxzOP.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DEdXHCfc.js";import"./Dialog-BgTvyp6J.js";import"./OverlayArrow-CezQPCx0.js";import"./useResizeObserver-W476ZHv4.js";import"./Collection-CGTtR3LJ.js";import"./index-DQPYp39o.js";import"./Separator-BqqUrY7Q.js";import"./SelectionManager-Eaoc1XY4.js";import"./useEvent-X_lfAaQd.js";import"./scrollIntoView-7Dx5Mga0.js";import"./SelectionIndicator-CrsNcvet.js";import"./useDescription-4mWfG2Nh.js";import"./ListKeyboardDelegate-DkQMjMf1.js";import"./PressResponder-JpvvyYD2.js";import"./useLocalizedStringFormatter-C60pseOF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-4xXul_sF.js";import"./VisuallyHidden-DIX_96la.js";import"./Button-C9Sv5uf1.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DfS2oHAS.js";import"./createLucideIcon-BztK-xjn.js";import"./x-BokWoqhe.js";import"./Heading-DefGGl1T.js";import"./info-h8TSkkUQ.js";import"./Popover-0GSzDp5n.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
