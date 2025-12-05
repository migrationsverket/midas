import{j as e,l}from"./iframe-h2rc799w.js";import{S as t}from"./Skeleton-CrxgUxSr.js";import{T as p}from"./TextField-Be3R0nCO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BgXnsKDg.js";import"./utils-BB9uagM0.js";import"./TextField-CheMkHF3.js";import"./FieldError-CfA1E9Cr.js";import"./Text-27Q9b70a.js";import"./useFocusRing-DRX1lRuz.js";import"./index-3OTH1Fm_.js";import"./index-G1IiyRC6.js";import"./Text-DsxDpOP5.js";import"./RSPContexts-BnV9B0rn.js";import"./Form-qPwhvMcL.js";import"./useFormValidation-BdPzBVxm.js";import"./Group-CaAJ8Gix.js";import"./Input-BgBNdPUV.js";import"./Hidden-BntBCqP1.js";import"./Button-aEgurUrk.js";import"./useLabels-Cl8l3w4c.js";import"./useButton-B6xkXiLt.js";import"./useTextField-CO6ZeyOh.js";import"./useControlledState-Ct_TMVrN.js";import"./useField-C9cVhCtn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1wWsQ0d.js";import"./Dialog-CswqvEyv.js";import"./OverlayArrow-CQsJ102Z.js";import"./useResizeObserver-DCz3NH35.js";import"./Collection-DlcQIz-5.js";import"./index-CEjXMnWE.js";import"./Separator-B_RiQERZ.js";import"./SelectionManager-5hW9T5Ct.js";import"./useEvent-CdaZAnXg.js";import"./scrollIntoView-DTpX4Jlf.js";import"./SelectionIndicator-BZAhdg1J.js";import"./useDescription-EraDlspF.js";import"./ListKeyboardDelegate-DjvKI5jM.js";import"./PressResponder-CE9nmrbW.js";import"./useLocalizedStringFormatter-jfgdaXR-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CKkHc3h5.js";import"./VisuallyHidden-D7CzkyTI.js";import"./Button-Do-smi34.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ckdz1WVj.js";import"./createLucideIcon-9cYvQa7e.js";import"./x-D0r1H_Zm.js";import"./Heading-yRrz7Ihh.js";import"./info-D-Dgif4_.js";import"./Popover-kXAtl7Nh.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
