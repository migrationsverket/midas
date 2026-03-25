import{j as e,l}from"./iframe-DynRW4HM.js";import{S as t}from"./Skeleton-CyxfsORE.js";import{T as d}from"./TextField-DWzAgDf1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BbXUSOMQ.js";import"./utils-wI83z-IC.js";import"./FieldError-CNSWJfvH.js";import"./Text-DyP2OCNX.js";import"./useFocusRing-Ccc6VB4N.js";import"./index-Dlo0bpld.js";import"./index-B5QOT-C7.js";import"./Text-CeGvnbH5.js";import"./RSPContexts-Cw8qzvbL.js";import"./Form-0XQ-NRq9.js";import"./Group-DdLW2_hW.js";import"./Input-CWhWt8lD.js";import"./Hidden-ilD6RPA6.js";import"./Button-CFOPGSLm.js";import"./useLabels-DQKocp6Q.js";import"./useButton-CnY6hm7P.js";import"./useTextField-DrCKTRDm.js";import"./useControlledState-CKdYrkOm.js";import"./useField-D6nWXFYm.js";import"./TextField.module-DdivwlC8.js";import"./Label-DvrE_NHc.js";import"./Dialog-DENxhEqh.js";import"./OverlayArrow-C9oNbfdF.js";import"./useResizeObserver-BdFds01N.js";import"./Collection-BAgBqaGo.js";import"./index-yLTbmAG2.js";import"./Separator-Cv0bt__P.js";import"./SelectionManager-DPIJMcll.js";import"./useEvent-D88FFhaJ.js";import"./scrollIntoView-BeaiGgFN.js";import"./SelectionIndicator-Bokccf1O.js";import"./useDescription-DGfjZI1Z.js";import"./ListKeyboardDelegate-CdUfRLzn.js";import"./PressResponder-CmSSFEDB.js";import"./useLocalizedStringFormatter-pKVfkyKC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CH7Kjv5N.js";import"./getScrollParent-Ck8UnBVY.js";import"./VisuallyHidden-HbDYDEMR.js";import"./x-Bsg9N661.js";import"./createLucideIcon-DGkkD8Qb.js";import"./useLocalizedStringFormatter-D3oqCIEX.js";import"./Heading-DAs09SW9.js";import"./Button-BvN-UdiG.js";import"./Button.module-BB7N-cLd.js";import"./info-RYImjmeq.js";import"./Popover-D-I8ODqK.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
