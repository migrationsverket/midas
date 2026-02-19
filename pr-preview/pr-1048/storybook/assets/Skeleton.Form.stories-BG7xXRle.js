import{j as e,l}from"./iframe-DvfEE2EA.js";import{S as t}from"./Skeleton-CMw63SDm.js";import{T as p}from"./TextField-oACNnNdT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cy_J-xQ0.js";import"./utils-EccCoJST.js";import"./FieldError-DJlVVmti.js";import"./Text-CYxj4XUp.js";import"./useFocusRing-DvRoLobF.js";import"./index-C-FPbYY0.js";import"./index-C-7AJHKG.js";import"./Text-JM8wZQts.js";import"./RSPContexts-BybK4INx.js";import"./Form-CACDamyx.js";import"./useFormValidation-BV0cpNq4.js";import"./Group-C4sMBp7H.js";import"./Input-BfQAZesE.js";import"./Hidden-E4LKVjJ3.js";import"./Button-BEsFQT6R.js";import"./number-DfkVkf0F.js";import"./useLabels-BDWRbz34.js";import"./useButton-Cby6Hv6a.js";import"./useTextField-Bw36CqRH.js";import"./useControlledState-BMOgnCDq.js";import"./useField-DtIRcX32.js";import"./TextField.module-Dhscz2t0.js";import"./Label-B7Zem9bP.js";import"./Dialog-Bf1mwFUJ.js";import"./OverlayArrow-C7-nyh-D.js";import"./useResizeObserver-Cg-d0UwX.js";import"./Collection-CZl-6v5x.js";import"./index-BlYdPTc5.js";import"./Separator-C2SqFLQ9.js";import"./SelectionManager-DBVqzXni.js";import"./useEvent-Dt-7Obwe.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CfqI11BI.js";import"./useDescription-BHTjELwq.js";import"./ListKeyboardDelegate-BTNuIJ29.js";import"./PressResponder-87t-uR6-.js";import"./useLocalizedStringFormatter-7gPqsvUW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lGFdxzxT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DJTtwLDL.js";import"./Modal-BKYtvUWS.js";import"./Button-CA8_LeWe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CdetPKX0.js";import"./createLucideIcon-BJb0Fm1J.js";import"./x-DwluPr-j.js";import"./Heading-B7XRRO6d.js";import"./info-GKwazr5J.js";import"./Popover-Df_-00wq.js";const ge={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ue=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ue as __namedExportsOrder,ge as default};
