import{j as e,l}from"./iframe-DdBf1SRL.js";import{S as t}from"./Skeleton-Bhiw81So.js";import{T as p}from"./TextField-DcKoAg4Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DpqHSF2y.js";import"./utils-DMchxVzX.js";import"./FieldError-CxsQvr-l.js";import"./Text-BubyCo8k.js";import"./useFocusRing-B7kbWjnk.js";import"./index-CkQqcEDO.js";import"./index-Dx_kN6Ou.js";import"./Text-Crsqw0eJ.js";import"./RSPContexts-DeLkFkii.js";import"./Form-BnkXR6RV.js";import"./Group-Dz-A39lc.js";import"./Input-BZTpPI0z.js";import"./Hidden-DnCBwxQo.js";import"./Button-DfVfuE86.js";import"./useLabel-Cmr2t4Vn.js";import"./useLabels-BTBbAQZZ.js";import"./useButton-Bi1rLOkK.js";import"./useTextField-BwJPM4sj.js";import"./useControlledState-aSEVnCiN.js";import"./useField-B-UKPEcq.js";import"./TextField.module-DdivwlC8.js";import"./Label-B60R5RDz.js";import"./Dialog-BZoFiE8g.js";import"./OverlayArrow-BVMBp9Sx.js";import"./useResizeObserver-Vt9UesdB.js";import"./Collection-iaZXBrxK.js";import"./index-DpcT8N6d.js";import"./Separator-Cuqf8mp-.js";import"./SelectionManager-DWXdlFy8.js";import"./useEvent-DSMuUAnY.js";import"./scrollIntoView-BZzoMKS8.js";import"./SelectionIndicator-CuhYxI4d.js";import"./useDescription-zrMNjBsf.js";import"./ListKeyboardDelegate-B9CnOcQ4.js";import"./PressResponder-Dw1Tvwi2.js";import"./useLocalizedStringFormatter-B5aKiSMw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C5_-IwUt.js";import"./getScrollParent-FpAGmNqP.js";import"./VisuallyHidden-TAipgByj.js";import"./ModalOverlay-TV_D2hAq.js";import"./x-DQUfmUsq.js";import"./createLucideIcon-DMjdayIV.js";import"./useLocalizedStringFormatter-D9iDsPFm.js";import"./Heading-0gJfGgeH.js";import"./Button-BcNKuXh9.js";import"./Button.module-BB7N-cLd.js";import"./info-mMeset4C.js";import"./Popover-wLY7u0qX.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
