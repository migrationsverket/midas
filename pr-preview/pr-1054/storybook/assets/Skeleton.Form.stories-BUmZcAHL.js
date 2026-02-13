import{j as e,l}from"./iframe-BJoNrLOB.js";import{S as t}from"./Skeleton-CTesSMf9.js";import{T as p}from"./TextField-CbpKBvzK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BHUA9yqc.js";import"./utils-8eOeUZvs.js";import"./FieldError-BeL_eVmM.js";import"./Text-Nm20Pdh1.js";import"./useFocusRing-xf59S3G4.js";import"./index-TiYrZJQV.js";import"./index-BrwANR0V.js";import"./Text-CXbyhWc_.js";import"./RSPContexts-CCiC92U9.js";import"./Form-Dl7Kj9Mq.js";import"./useFormValidation-MpE-MHxZ.js";import"./Group-ZMalOpZC.js";import"./Input-VlwYDG4z.js";import"./Hidden-CN18PH3U.js";import"./Button-BoY_ExKw.js";import"./useLabels-Dsw7O8PH.js";import"./useButton-Dmh7lGXM.js";import"./useTextField-DvmZphOA.js";import"./useControlledState-DXjBUGo4.js";import"./useField-BeLJlWfS.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DC8z0e73.js";import"./Dialog-DHZzYmYR.js";import"./OverlayArrow-CZ19wXXV.js";import"./useResizeObserver-Cc5YSlIU.js";import"./Collection-D-wvIYwO.js";import"./index-CtHKFZnr.js";import"./Separator-CgFexpSf.js";import"./SelectionManager-C5N71AQX.js";import"./useEvent-B_iQ0eAu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B7MHA78e.js";import"./useDescription-BwTDoIfu.js";import"./ListKeyboardDelegate-CJschMJ8.js";import"./PressResponder-BA7OUFak.js";import"./useLocalizedStringFormatter-Ck15hl-3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTTNfr-O.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bokzl-n3.js";import"./Button-C_BpUAF5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-elsdN5ae.js";import"./createLucideIcon-BX3h9Owr.js";import"./x-DSXcAS6f.js";import"./Heading-C7tT-cfJ.js";import"./info-1ZTJbKVh.js";import"./Popover-DjkV7LeP.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
