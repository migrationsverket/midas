import{j as e,l}from"./iframe-CWKpWNkk.js";import{S as t}from"./Skeleton-BEPD52J2.js";import{T as p}from"./TextField-CrOiwtg3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-QnRtYC6f.js";import"./utils-DZaHz_Vy.js";import"./FieldError-CQ-FvnYz.js";import"./Text-C7LaV_aB.js";import"./useFocusRing-CpL5jV2W.js";import"./index-B6G90j2w.js";import"./index-ky1MVl1j.js";import"./Text-Ds_oVnWP.js";import"./RSPContexts-BCpmha9C.js";import"./Form-ClSFU7sX.js";import"./Group-C9US1aCF.js";import"./Input-Dl4b6tmI.js";import"./Hidden-bt019v0w.js";import"./Button-apqjWUoz.js";import"./useLabel-CVerH1Jx.js";import"./useLabels-CpFnq5uL.js";import"./useButton-DMvYi67o.js";import"./useTextField-CSQ8xXA8.js";import"./useControlledState-DvoS3sKo.js";import"./useField-CPp_IGdL.js";import"./TextField.module-DdivwlC8.js";import"./Label-DOnkAzhc.js";import"./Dialog-oKb8weP7.js";import"./OverlayArrow-BQEkmKGr.js";import"./useResizeObserver-DF1U3k9v.js";import"./Collection-B8p0MI6F.js";import"./index-DpCjz9aE.js";import"./Separator-B3w0uZHa.js";import"./SelectionManager-BLRpOlsc.js";import"./useEvent-Bvf1pRIU.js";import"./scrollIntoView-EiYcHJPI.js";import"./SelectionIndicator-DXuHsU9n.js";import"./useDescription-DoPJm1n-.js";import"./ListKeyboardDelegate-EIc5NKm6.js";import"./PressResponder-D9mL1KKw.js";import"./useLocalizedStringFormatter-CzLna1TA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuvQWEod.js";import"./getScrollParent-8ZOlHmZ1.js";import"./VisuallyHidden-CUqCo7Kt.js";import"./ModalOverlay-DEjIIPXs.js";import"./x-BvIy6Ou7.js";import"./createLucideIcon-DmuvpfBU.js";import"./useLocalizedStringFormatter-JVYCQbQZ.js";import"./Heading-D-lMrc2Q.js";import"./Button-WdsjujPh.js";import"./Button.module-BB7N-cLd.js";import"./info-Cy_crO9Y.js";import"./Popover-B5gHq_qy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
