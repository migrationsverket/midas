import{j as e,l}from"./iframe-CbAzJO9N.js";import{S as t}from"./Skeleton-rlafXtlD.js";import{T as p}from"./TextField-NumzkamV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cjmelu_y.js";import"./utils-B0jB1E5G.js";import"./FieldError-Q76E79z-.js";import"./Text-Cb6mQNAQ.js";import"./useFocusRing-Cvfx5XiJ.js";import"./index-CIpD7d_z.js";import"./index-zxdvsBHT.js";import"./Text-B0GIqCDR.js";import"./RSPContexts-CdwstRL7.js";import"./Form-VNKUe-wT.js";import"./Group-CDs_4aSR.js";import"./Input-D5NZNnfE.js";import"./Hidden-j-F0-7Lz.js";import"./Button-_5CpY_LG.js";import"./useLabel-DdRCBCBY.js";import"./useLabels-BUHgLQ-5.js";import"./useButton-CrpkGmXn.js";import"./useTextField-DYWRCY-s.js";import"./useControlledState-DjmxdyV_.js";import"./useField-CBtm8xuD.js";import"./TextField.module-DdivwlC8.js";import"./Label-ExQDaYWm.js";import"./Dialog-DW2Inq1H.js";import"./OverlayArrow-Dv4tydTP.js";import"./useResizeObserver-CrcmnwKx.js";import"./Collection-D60D3pRD.js";import"./index-hbx092to.js";import"./Separator-BZo3Gu1p.js";import"./SelectionManager-DBlz5uU6.js";import"./useEvent-VV5wi-lK.js";import"./scrollIntoView-CfANcw89.js";import"./SelectionIndicator-QNGy80KY.js";import"./useDescription-x0RZZUcB.js";import"./ListKeyboardDelegate-C6dnv3Af.js";import"./PressResponder-BTxBJQy3.js";import"./useLocalizedStringFormatter-DJXPkqTe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bskg7DBL.js";import"./getScrollParent-4mlCzyaP.js";import"./VisuallyHidden-Dhjqn-q1.js";import"./ModalOverlay-DvNGtE2h.js";import"./x-CrcasNM6.js";import"./createLucideIcon-lx1Wi4QI.js";import"./useLocalizedStringFormatter-AKU0Mz00.js";import"./Heading-5Uwbhg9g.js";import"./Button-Cly75nHE.js";import"./Button.module-BB7N-cLd.js";import"./info-BPfNumPG.js";import"./Popover-C2Zhsq-R.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
