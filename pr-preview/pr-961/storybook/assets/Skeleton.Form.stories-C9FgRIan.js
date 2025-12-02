import{j as e,l}from"./iframe-CMUJ4oTW.js";import{S as t}from"./Skeleton-amDlOYlQ.js";import{T as d}from"./TextField-IMN9kwwd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Coff4lSZ.js";import"./utils-Bw5kKF0Y.js";import"./TextField-CJQ3YwSy.js";import"./FieldError-DUZ2Lyg_.js";import"./Text-CmjU0gZm.js";import"./useFocusRing-CCdJUNbr.js";import"./index-BXUeCXEl.js";import"./index-BRxHMroZ.js";import"./Text-C-O23Bwp.js";import"./RSPContexts-Dtm3ZRmN.js";import"./Form--t2c7OLT.js";import"./useFormValidation-xJ9GZNEB.js";import"./Group-nMq0aZjt.js";import"./Input-18snL8DR.js";import"./Hidden-D0lp5d68.js";import"./Button-Bqzmv4VE.js";import"./useLabels-CskVNZCZ.js";import"./useButton-B2z_QK8p.js";import"./useTextField-DO4EQLEf.js";import"./useControlledState-7-Wnf2ZS.js";import"./useField-DVSpKNSf.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D-lRvOG_.js";import"./Dialog-B0_TAXmw.js";import"./OverlayArrow-DWgBWshG.js";import"./useResizeObserver-Y9QGu1gT.js";import"./Collection-C6ZXRVc5.js";import"./index-CbWpJrB5.js";import"./Separator-DpWZxbBX.js";import"./SelectionManager-CXOD0jbX.js";import"./useEvent-DIWN8gNy.js";import"./scrollIntoView-Bpk-j4gT.js";import"./SelectionIndicator-CzWSNeVF.js";import"./useDescription-CjJLap45.js";import"./ListKeyboardDelegate-D0ZmEh2C.js";import"./PressResponder-B5Ba_dPV.js";import"./useLocalizedStringFormatter-CO8ox3aE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CNXWRTC7.js";import"./VisuallyHidden-B5co-kC4.js";import"./Button-D8hA4J4_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cyjs_x30.js";import"./createLucideIcon-TEce3gz9.js";import"./x-CKLycj6S.js";import"./Heading-CxhuX0Al.js";import"./info-czgCSxtX.js";import"./Popover-Bh__myN3.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
