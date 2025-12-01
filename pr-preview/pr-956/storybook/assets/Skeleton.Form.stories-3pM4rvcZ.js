import{j as e,l}from"./iframe-sg9dJLsH.js";import{S as t}from"./Skeleton-BuvjVbB6.js";import{T as d}from"./TextField-CN4JUOFm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D9bzlhJu.js";import"./utils-CuYvAqJx.js";import"./TextField-EZeDD8x1.js";import"./FieldError-BrQNt60r.js";import"./Text-1XpSl3_S.js";import"./useFocusRing-CEQfJAUz.js";import"./index-Csa_AQe7.js";import"./index-6sLC6slB.js";import"./Text-qPBHnq8h.js";import"./RSPContexts-CFIQgWNj.js";import"./Form-BW-VziKc.js";import"./useFormValidation-DNlbGXcC.js";import"./Group-CJhSz8vh.js";import"./Input-B9JlF-Qe.js";import"./Hidden-CxJfSG1h.js";import"./Button-BKCBYEjA.js";import"./useLabels-Coj_Gh5d.js";import"./useButton-BnqHgeWw.js";import"./useTextField-B6sqZEPf.js";import"./useControlledState-gOtQm8WB.js";import"./useField-CH0W7eg0.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-8R61jkbz.js";import"./Dialog-b9ceggbf.js";import"./OverlayArrow-DY_x2ajs.js";import"./useResizeObserver-Dib9irc4.js";import"./Collection-CdGVV1_d.js";import"./index-BoUdIBrk.js";import"./Separator-CjELUWHF.js";import"./SelectionManager-BDfLTNFi.js";import"./useEvent-CrKV8Qc1.js";import"./scrollIntoView-BLU2Y2Qy.js";import"./SelectionIndicator-BJdQjGrY.js";import"./useDescription-BlZdZ_En.js";import"./ListKeyboardDelegate-DsDQks9q.js";import"./PressResponder-Cvb-cV0O.js";import"./useLocalizedStringFormatter-mDQ95DtQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CyzZu9IT.js";import"./VisuallyHidden-BZkmQQPq.js";import"./Button-B-3midel.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-oI-bADgc.js";import"./createLucideIcon-CR8l7k0W.js";import"./x-BuVDIX29.js";import"./Heading-CotChgLt.js";import"./info-CXEA8Qwm.js";import"./Popover-CqP2AKA6.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
