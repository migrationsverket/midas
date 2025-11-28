import{j as e,l}from"./iframe-Bb5Ll2Q_.js";import{S as t}from"./Skeleton-CwIWVqkf.js";import{T as d}from"./TextField-DUbtTFf0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DocnODon.js";import"./utils-DUu2sqhX.js";import"./TextField-BSZpouzF.js";import"./FieldError-DHSOLBGK.js";import"./Text-ATBrkPw2.js";import"./useFocusRing-Che-PLf9.js";import"./index-hJZDNH39.js";import"./index-DaWpECPB.js";import"./Text-DGL_pGNa.js";import"./RSPContexts-BF108fh5.js";import"./Form-DMk9kVb1.js";import"./useFormValidation-CmG_kr67.js";import"./Group-xUoghdpe.js";import"./Input-COsfqzdN.js";import"./Hidden-CIkUgucj.js";import"./Button-CLgs0RHO.js";import"./useLabels-B4ytSInX.js";import"./useButton-Drix0Soe.js";import"./useTextField-Crat3jGl.js";import"./useControlledState-CQTokbDY.js";import"./useField-SUENPtea.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BfGjPsAJ.js";import"./Dialog-CsqxZxHZ.js";import"./OverlayArrow-DIocl6xa.js";import"./useResizeObserver-DQ_T9M9d.js";import"./Collection-DcqfTVLD.js";import"./index-DIszDctj.js";import"./Separator-CDZt8W4n.js";import"./SelectionManager-CNhGT5Rw.js";import"./useEvent-DFeGPwZo.js";import"./scrollIntoView-xcKTDZvX.js";import"./SelectionIndicator-v0XOazhO.js";import"./useDescription-C_IELAs0.js";import"./ListKeyboardDelegate-B6kaB3YJ.js";import"./PressResponder-CFEyG_-H.js";import"./useLocalizedStringFormatter-BmXF49Fn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dwp_thdi.js";import"./VisuallyHidden-BT0heQ-H.js";import"./Button-DcMiNBaO.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-r0kj4Pje.js";import"./createLucideIcon-BTIRr7kd.js";import"./x-na7-pW2Y.js";import"./Heading-nnfuclA9.js";import"./info-DpzzwP6m.js";import"./Popover-Bf4yOUJ_.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
