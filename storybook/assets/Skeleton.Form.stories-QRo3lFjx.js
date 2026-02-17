import{j as e,l}from"./iframe-BMI9LcwD.js";import{S as t}from"./Skeleton-BDK_mBVF.js";import{T as p}from"./TextField-BAbC_oll.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CBvRFWgb.js";import"./utils-CUKuiloA.js";import"./FieldError-Bn65JKdh.js";import"./Text-IBNi6CET.js";import"./useFocusRing-DwyCmeGr.js";import"./index-fsqC8uXs.js";import"./index-CWh_0PxX.js";import"./Text-Cp8-jRoc.js";import"./RSPContexts-CxOtl2I6.js";import"./Form-Bs26BAsB.js";import"./useFormValidation-DnRBQ596.js";import"./Group-ePoBbAde.js";import"./Input-DfPo5E2k.js";import"./Hidden-DWYxNcIi.js";import"./Button-Czr2XHcN.js";import"./useLabels-ipZVyWiu.js";import"./useButton-BpdaM1mY.js";import"./useTextField-WEoR-zcU.js";import"./useControlledState-DULbg8rB.js";import"./useField-DH6BC-q1.js";import"./TextField.module-Cm6797Xw.js";import"./Label-Ct42ojgi.js";import"./Dialog-vljkxQ9V.js";import"./OverlayArrow-Dj2AKU3c.js";import"./useResizeObserver-CQSDfOyj.js";import"./Collection-C9qQT55G.js";import"./index-DQGXGJO2.js";import"./Separator-GbiomVNC.js";import"./SelectionManager-BW1J4nQm.js";import"./useEvent-Cmtr8QN3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Vv5l6iKe.js";import"./useDescription-DUAcqLRU.js";import"./ListKeyboardDelegate-5qCRRvR5.js";import"./PressResponder-DZQXcwaC.js";import"./useLocalizedStringFormatter-BGq9CHdg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-AzXRvNI3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CqjPFeZK.js";import"./Button-k6WQaZpy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzttMcKh.js";import"./createLucideIcon-BUDo9TFX.js";import"./x-HbCAtCPY.js";import"./Heading-BS2BXfs4.js";import"./info-BFI_YHZ6.js";import"./Popover-CjYy3DoX.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
