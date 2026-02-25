import{j as e,l}from"./iframe-8Cp1Y9sE.js";import{S as t}from"./Skeleton-CIxu9z3e.js";import{T as p}from"./TextField-BV4FJ_i2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B8G_etEy.js";import"./utils-DlEPF17n.js";import"./useObjectRef-BvAFkytn.js";import"./FieldError-eZOVGEUO.js";import"./Text-D3HiTtCB.js";import"./useFocusRing-CVuxSJk8.js";import"./useFocusable-B-HsSGrd.js";import"./index-CQNUcSLQ.js";import"./index-BHWdZgLR.js";import"./Text-Dvlujitk.js";import"./RSPContexts-jWKLjCHM.js";import"./Form-D0YVSgpe.js";import"./useFormValidation-CQuIVPML.js";import"./Group-DxyXtAiD.js";import"./Input-DxdD0EpX.js";import"./Hidden-BnGBIuvq.js";import"./Button-CqMXkvRN.js";import"./number-DfkVkf0F.js";import"./useLabels-CjRcy63q.js";import"./useButton-J5AmJIR7.js";import"./useTextField-DbSmU1Kw.js";import"./useControlledState-DUF8qyUE.js";import"./useField-Baz6LKsn.js";import"./TextField.module-DdivwlC8.js";import"./Label-orMAHA-y.js";import"./Dialog-CZoFL8MM.js";import"./OverlayArrow-Cf2TuAv-.js";import"./useResizeObserver-B3a9AYPm.js";import"./Collection-DueA55zD.js";import"./CollectionBuilder-BKRTkR5P.js";import"./index-Cds1W7-y.js";import"./Separator-B4IDBh6R.js";import"./SelectionManager-ClNl5D9k.js";import"./useEvent-BWoUQZjL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjxxUBwE.js";import"./useDescription-BOEa2vWJ.js";import"./ListKeyboardDelegate-D5IX5CD1.js";import"./PressResponder-DeEiw1Gx.js";import"./useLocalizedStringFormatter-D6BMfFml.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxqOZvIB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CBA6IUNJ.js";import"./Button-CS2QwEY0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDGZG5jK.js";import"./createLucideIcon-BJQalJwk.js";import"./x-7Ctj6V0e.js";import"./Heading-D7HlTSWz.js";import"./info-9zpSoT-N.js";import"./Popover-BD9QDUSP.js";const xe={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,fe as __namedExportsOrder,xe as default};
