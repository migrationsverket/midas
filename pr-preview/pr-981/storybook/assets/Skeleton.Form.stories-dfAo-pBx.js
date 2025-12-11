import{j as e,l}from"./iframe-CmunamRf.js";import{S as t}from"./Skeleton-B2p30zeS.js";import{T as p}from"./TextField-B3vUzWaS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-TTs2xh8s.js";import"./utils-Do45Qf3w.js";import"./TextField-jaFncHZU.js";import"./FieldError-DG3EzHGA.js";import"./Text-7Mv1aRO9.js";import"./useFocusRing-DFmjP9RI.js";import"./index-BzS_2Nae.js";import"./index-CuMnXGnl.js";import"./Text-DoOol8PB.js";import"./RSPContexts-BHCYibY1.js";import"./Form-B_SA6qDB.js";import"./useFormValidation-e1uzRsDW.js";import"./Group-DOuwV7fc.js";import"./Input-B_REN51b.js";import"./Hidden-UzlcYpta.js";import"./Button-I_qPWlHX.js";import"./useLabels-TxZzTxtJ.js";import"./useButton-DK3uhVHY.js";import"./useTextField-CaFTgdMk.js";import"./useControlledState-CMrkhqrU.js";import"./useField-BNCtOcHp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D4SsXjUR.js";import"./Dialog-BUKFdovJ.js";import"./OverlayArrow-Cuooq3hj.js";import"./useResizeObserver-BMs2Lb56.js";import"./Collection-CGde15hM.js";import"./index-Bi8Rutwx.js";import"./Separator-zXZL7aqG.js";import"./SelectionManager-BYqaFR_n.js";import"./useEvent-BFMxJZE1.js";import"./scrollIntoView-BgicmmuX.js";import"./SelectionIndicator-7yX63bIk.js";import"./useDescription-hVP8LGT1.js";import"./ListKeyboardDelegate-yTTov5y5.js";import"./PressResponder-DE7epYFQ.js";import"./useLocalizedStringFormatter-BdmLjVnV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CUywN_ok.js";import"./VisuallyHidden-Cp_LZnsq.js";import"./Button-BDNFHLWn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B-CkpdIL.js";import"./createLucideIcon--1kAEzMd.js";import"./x-BRYbY-gr.js";import"./Heading-DRcWHY0O.js";import"./info-65bBuQAj.js";import"./Popover-DifjSUDF.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
