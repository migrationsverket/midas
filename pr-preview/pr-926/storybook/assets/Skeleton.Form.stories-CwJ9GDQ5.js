import{j as e,l}from"./iframe-FtEa7VQj.js";import{S as t}from"./Skeleton-cE6EkoG2.js";import{T as d}from"./TextField-CzjHPoyj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-db_DkkTv.js";import"./utils-COfxaHf8.js";import"./FieldError-ClKp2imH.js";import"./Text-ESAF9nxg.js";import"./useFocusRing-D8XlJGR3.js";import"./index-DAEPIqsi.js";import"./index-loZrsOH8.js";import"./Text-DiMsQpYZ.js";import"./RSPContexts-BCdKzl2o.js";import"./Form-w2pCOEv6.js";import"./useFormValidation-CZtyidDU.js";import"./Group-C5cyidco.js";import"./Input-DqgVu2W3.js";import"./Hidden-DvRPXbsY.js";import"./Button-Dqxngb1_.js";import"./useLabels-BKIUEpC2.js";import"./useButton-cS6iWc3P.js";import"./useTextField-COuSDOkd.js";import"./useControlledState-CCkxZ5nC.js";import"./useField-Bzl4_aAY.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Oub4KePl.js";import"./Dialog-BKLolvfT.js";import"./OverlayArrow-mq7tAYNM.js";import"./useResizeObserver-Crg5DKff.js";import"./Collection-Aylh_77m.js";import"./index-BDcn4SpJ.js";import"./Separator-fIkq8orD.js";import"./SelectionManager-D_wMjdMu.js";import"./useEvent-S9LJqkM-.js";import"./scrollIntoView-DgbQWClN.js";import"./SelectionIndicator-DwyyQNvW.js";import"./useDescription-BpV-4EC3.js";import"./ListKeyboardDelegate-DMu8IpBO.js";import"./PressResponder-P5z6VbJ-.js";import"./useLocalizedStringFormatter-iKxxmVnK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2Nxm4kL.js";import"./VisuallyHidden-DfcEnh0s.js";import"./useLocalizedStringFormatter-DEPSzweY.js";import"./Button-BHyJkgwt.js";import"./Button.module-CtQ1deO8.js";import"./x-DiP6oz7r.js";import"./createLucideIcon-BFKkZNi-.js";import"./Heading-CR3FQ06N.js";import"./info-0PYjxuJb.js";import"./Popover-DpWEsjXP.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
