import{j as e,l}from"./iframe-BmAdb1PA.js";import{S as t}from"./Skeleton-B2rRYYB1.js";import{T as p}from"./TextField-CQe3fRZ2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2HiMVc1.js";import"./utils-CCClzR0P.js";import"./FieldError-BFmjoeTz.js";import"./Text-CWRsvaQ5.js";import"./useFocusRing-DjzcYn69.js";import"./index-DmkiqM0D.js";import"./index-YmFjrc3B.js";import"./Text-GqXtxiSt.js";import"./RSPContexts-C9Yi9HqJ.js";import"./Form-DuBFRND4.js";import"./Group-DHPBGzHI.js";import"./Input-wS3uVeCW.js";import"./Hidden-B3pD7GY2.js";import"./Button-MRSjvKjG.js";import"./useLabel-DyZBKx42.js";import"./useLabels-ChZyghoP.js";import"./useButton-CgLkstip.js";import"./useTextField-DB_mL8mV.js";import"./useControlledState-Dv2Kshwg.js";import"./useField-CiSiXV_i.js";import"./TextField.module-DdivwlC8.js";import"./Label-DFIRf3yh.js";import"./Dialog-yx5dXLdt.js";import"./OverlayArrow-BsSGgpI2.js";import"./useResizeObserver-BVaU9idB.js";import"./Collection-YyAEhVk9.js";import"./index-BlhtBE4W.js";import"./Separator-BH67y9r3.js";import"./SelectionManager-DiqOcHkc.js";import"./useEvent-CnZp3rBE.js";import"./scrollIntoView-BvBTMwmY.js";import"./SelectionIndicator-D0ZbJgrH.js";import"./useDescription-Dk0a0Fsb.js";import"./ListKeyboardDelegate-DxdtfhPW.js";import"./PressResponder-C7yYm5Yb.js";import"./useLocalizedStringFormatter-DY8Y5mpq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-U_IkXvLC.js";import"./getScrollParent-7DjJo_eW.js";import"./VisuallyHidden-DDq5yWsw.js";import"./x-BgO40Plk.js";import"./createLucideIcon-CbxvyYW-.js";import"./useLocalizedStringFormatter-1TllYdpt.js";import"./Heading-863fHQRC.js";import"./Button-Cxe1PoSr.js";import"./Button.module-BB7N-cLd.js";import"./info-D0UtNGvd.js";import"./Popover-C_HFXddi.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
