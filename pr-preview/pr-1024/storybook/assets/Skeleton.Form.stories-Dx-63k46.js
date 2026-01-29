import{j as e,l}from"./iframe-BFfxWrax.js";import{S as t}from"./Skeleton-CogVcsYQ.js";import{T as p}from"./TextField-B2kGCOtj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-KCtFKqzd.js";import"./utils-C8IykF9r.js";import"./TextField-BoTHcncv.js";import"./FieldError-CzwgIoCO.js";import"./Text-CEYrRu-P.js";import"./useFocusRing-DxTvBZDR.js";import"./index-DV5X86sq.js";import"./index-CLdRZTnk.js";import"./Text-Bhj_DbeZ.js";import"./RSPContexts-Bb44GcTO.js";import"./Form-DTIVZCo5.js";import"./useFormValidation-GM6fJea0.js";import"./Group-DYEjssYz.js";import"./Input-Y8ksXyF1.js";import"./Hidden-B6F1QNEg.js";import"./Button-C3IeQ2N5.js";import"./useLabels-DvNW6A8N.js";import"./useButton-BbUUQ9F5.js";import"./useTextField-DTdlju0_.js";import"./useControlledState-HqAin-M6.js";import"./useField-BvLlyQY4.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DmDD21Z5.js";import"./Dialog-BpOw2c4w.js";import"./OverlayArrow-BvhWaaGN.js";import"./useResizeObserver-DCdPtZtC.js";import"./Collection-DldGlNHn.js";import"./index-Dow7YCmP.js";import"./Separator-DRUufS6Z.js";import"./SelectionManager-BzJ3qBxx.js";import"./useEvent-DtkOHSGp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ch46GEFT.js";import"./useDescription-DV4u1qz6.js";import"./ListKeyboardDelegate-B9GXBaZH.js";import"./PressResponder-3F0_3fmd.js";import"./useLocalizedStringFormatter-DvfqzT1M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXb6KWbz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ca_DY3bR.js";import"./Button-C0MNS1vn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cg3NQL_5.js";import"./createLucideIcon-CbYcBAPq.js";import"./x-w0Zhu9bS.js";import"./Heading-BjLhsWhp.js";import"./info-DY2xtnVi.js";import"./Popover-BUxNyRXV.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
