import{j as e,l}from"./iframe-to6ZPd-o.js";import{S as t}from"./Skeleton-TFZ3P_RO.js";import{T as d}from"./TextField-BMMo2xU-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BV29JwTV.js";import"./utils-BaBklhKO.js";import"./TextField-CNurr7dt.js";import"./FieldError-kqWMyMLO.js";import"./Text-rl71NDZH.js";import"./useFocusRing-mcA5BXJm.js";import"./index-BF--nVYl.js";import"./index-BCIYHMkX.js";import"./Text-Fu0lberS.js";import"./RSPContexts-Cl_-pRdh.js";import"./Form-MGDjvuyG.js";import"./useFormValidation-BqiN7hi-.js";import"./Group-CYQgFCxc.js";import"./Input-Cedsavpk.js";import"./Hidden-CKtvUpX0.js";import"./Button-BbbNB3BB.js";import"./useLabels-D7I-5sOB.js";import"./useButton-CGov8omT.js";import"./useTextField-BiBUmWa1.js";import"./useControlledState-D9LO3zyF.js";import"./useField-BzvU-3EX.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Bv566uFP.js";import"./Dialog-C5ua9aEL.js";import"./OverlayArrow-COMC2aM9.js";import"./useResizeObserver-Cex-N81r.js";import"./Collection-BQfUNU7j.js";import"./index-QilTSXto.js";import"./Separator-B_OYQdM-.js";import"./SelectionManager-DDcFZp9F.js";import"./useEvent-BcWNErzH.js";import"./scrollIntoView-CSwMpNjZ.js";import"./SelectionIndicator-DLpwXe8j.js";import"./useDescription-CRtdpkuv.js";import"./ListKeyboardDelegate-w5o95QTT.js";import"./PressResponder-I1STTir0.js";import"./useLocalizedStringFormatter-he1K6QfO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CrXDP40W.js";import"./VisuallyHidden-rAuGCWJa.js";import"./Button-33ZWPybi.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-aWUqleFc.js";import"./createLucideIcon-DyGCeJBI.js";import"./x-BOSIFXhh.js";import"./Heading-C85iSoNW.js";import"./info-DJysSRKw.js";import"./Popover-HSF0T-3Y.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
