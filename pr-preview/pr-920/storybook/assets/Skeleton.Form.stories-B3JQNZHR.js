import{j as e,l}from"./iframe-DmzrtX3u.js";import{S as t}from"./Skeleton-DtAzV4cq.js";import{T as d}from"./TextField-CUkpoBXe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-zPjtaG40.js";import"./utils-Oc8X9Dut.js";import"./FieldError-8YrpNVDd.js";import"./Text-CUUMtVou.js";import"./useFocusRing-DiXFM6IK.js";import"./index-DK6gMfte.js";import"./index-DRO8jrzk.js";import"./Text-4zuef1by.js";import"./RSPContexts-CprwvviT.js";import"./Form-DfGv2lRJ.js";import"./useFormValidation-BUBxaK0p.js";import"./Group-D085-2mZ.js";import"./Input-BaRQ6O3Z.js";import"./Hidden-DYOxjREs.js";import"./Button-D1_GOLvy.js";import"./useLabels-LOtlQFBi.js";import"./useButton-DTNBbrec.js";import"./useTextField-lbt2Meqw.js";import"./useControlledState-C4k0njb5.js";import"./useField-CDS7IwME.js";import"./TextField.module-DGUQcbB9.js";import"./Label-9R_eE0XF.js";import"./Dialog-CRjHYzjN.js";import"./OverlayArrow-C6XsSHkt.js";import"./useResizeObserver-Cr2A4NTB.js";import"./Collection-bSGJMgl1.js";import"./index-Dyl1EEkC.js";import"./Separator-DiB9F3Vn.js";import"./SelectionManager-Brf4mELr.js";import"./useEvent-CSOa97Sz.js";import"./scrollIntoView-CddCsQNc.js";import"./SelectionIndicator-CSWiBIw2.js";import"./useDescription-C6boHjI1.js";import"./ListKeyboardDelegate-idfi318R.js";import"./PressResponder-Ds8b88LR.js";import"./useLocalizedStringFormatter-CNEzkPvm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DmfcLomM.js";import"./VisuallyHidden-BdOo9cjO.js";import"./useLocalizedStringFormatter-C4X_axr3.js";import"./Button-DBXHyq-A.js";import"./Button.module-CtQ1deO8.js";import"./x-h_g8GD-U.js";import"./createLucideIcon-d42gtct_.js";import"./Heading-Te6eeXsF.js";import"./info-erINa-3j.js";import"./Popover-Cuq4ur-n.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
