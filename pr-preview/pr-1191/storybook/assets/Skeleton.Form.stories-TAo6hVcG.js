import{j as e,l}from"./iframe-eNlvCIQC.js";import{S as t}from"./Skeleton-Pc-DZ6Wv.js";import{T as p}from"./TextField-BQZZxyWR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2RFUIuD.js";import"./utils-DazIc8Hv.js";import"./FieldError-D9ddsGCi.js";import"./Text-CCBMvhvi.js";import"./useFocusRing-BmmlkTDk.js";import"./index-BZeDSjH7.js";import"./index-DngAPwAT.js";import"./Text-DpGTS3fY.js";import"./RSPContexts-B8tIFTcn.js";import"./Form-Da29Si70.js";import"./Group-tWso2G9U.js";import"./Input-U924Lu33.js";import"./Hidden-BdbKhiKI.js";import"./Button-CefyB9za.js";import"./useLabel-B0k3Io0S.js";import"./useLabels-Dlb0vDOj.js";import"./useButton-DwspZCKK.js";import"./useTextField-Bk4zHeKd.js";import"./useControlledState-CSVjjcGV.js";import"./useField-9uUI2YDc.js";import"./TextField.module-DdivwlC8.js";import"./Label-CTeuWWlw.js";import"./Dialog-DxjjJKfq.js";import"./OverlayArrow-D9KVdFUQ.js";import"./useResizeObserver-DczUUuVk.js";import"./Collection-CMTcach8.js";import"./index-BV0sPe_Z.js";import"./Separator-DnGnZN6a.js";import"./SelectionManager-DLfWiJnu.js";import"./useEvent-HQfQnMMl.js";import"./scrollIntoView-pjXXtg-k.js";import"./SelectionIndicator-DZbg7n9J.js";import"./useDescription-DnXOma0q.js";import"./ListKeyboardDelegate-CmGfhmDQ.js";import"./PressResponder-C1xsG6pQ.js";import"./useLocalizedStringFormatter-B8bz883m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lxBfVS8z.js";import"./getScrollParent-Bm_fO-Gz.js";import"./VisuallyHidden-C4bD4gli.js";import"./x-DfVN5ZiU.js";import"./createLucideIcon-CwcksuKO.js";import"./useLocalizedStringFormatter-CfUiywgS.js";import"./Heading-BCsoVbgU.js";import"./Button-CcMDkuHu.js";import"./Button.module-BB7N-cLd.js";import"./info-9PS8MsSX.js";import"./Popover-B-hplDqU.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
