import{j as e,l}from"./iframe-COqMOSQZ.js";import{S as t}from"./Skeleton-Ch5i8NVz.js";import{T as p}from"./TextField-E1QxDO0U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DksJwfCP.js";import"./utils-UGJ7-PFb.js";import"./TextField-DR8QGCsW.js";import"./FieldError-DnPw9jnQ.js";import"./Text-Eq2bpnOV.js";import"./useFocusRing-J0hskc8K.js";import"./index-DAvvxpHq.js";import"./index-B56B2ZaE.js";import"./Text-Dxr2WYg8.js";import"./RSPContexts-Dj5PWvfk.js";import"./Form-MmG3Q7sS.js";import"./useFormValidation-ZZTMqVsr.js";import"./Group-CBe4eCe9.js";import"./Input-HMKvqUU6.js";import"./Hidden-C7_4vCTh.js";import"./Button-DsgoKRnG.js";import"./useLabels-ClszDTN2.js";import"./useButton-Cs35Lthr.js";import"./useTextField-C_bca6c6.js";import"./useControlledState-D0vR2tZf.js";import"./useField-Bg2RgZz3.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CM3u3xy2.js";import"./Dialog-CbXjmLSY.js";import"./OverlayArrow--TSHaOdr.js";import"./useResizeObserver-BiLq-uV0.js";import"./Collection-C4Q7pTvT.js";import"./index-Q1n7-YMV.js";import"./Separator-BR1R69TH.js";import"./SelectionManager-CiYu_tiO.js";import"./useEvent-BuGTfmKx.js";import"./scrollIntoView-DQDJTohY.js";import"./SelectionIndicator-CnCbl57Q.js";import"./useDescription-OZCat0wf.js";import"./ListKeyboardDelegate-BphbFQlv.js";import"./PressResponder-DWurSds1.js";import"./useLocalizedStringFormatter-v3zQxbki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BUiggGc1.js";import"./VisuallyHidden-D6ffzidu.js";import"./Button-WZo8m9qX.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-CXPg-yOg.js";import"./createLucideIcon-Duz8ZquI.js";import"./x-BOXIcHuP.js";import"./Heading-BsCY6yok.js";import"./info-CsEenOg0.js";import"./Popover-CjDw-FNZ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
