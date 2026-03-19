import{j as e,l}from"./iframe-f7w4ng_k.js";import{S as t}from"./Skeleton-Cc3GesOe.js";import{T as d}from"./TextField-CuyozssE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CodhjFnx.js";import"./utils-CsngUmKh.js";import"./FieldError-CSW0NKF8.js";import"./Text-DxL6Rji7.js";import"./useFocusRing-D2_28YrY.js";import"./index-BPHMLxna.js";import"./index-AUNQREmD.js";import"./Text-KyyKZpMF.js";import"./RSPContexts-B8g52CrK.js";import"./Form-B1Ks0hwY.js";import"./Group-BH48pCuV.js";import"./Input-MG-MEaLF.js";import"./Hidden-CTte53jM.js";import"./Button-Cc-TNn9L.js";import"./useLabels-C80eq718.js";import"./useButton-D4PZb1F-.js";import"./useTextField-CSx09bq-.js";import"./useControlledState-HdtZioBu.js";import"./useField-BdJOpr4_.js";import"./TextField.module-DdivwlC8.js";import"./Label-7RGnAXjp.js";import"./Dialog-BRU9u9Wh.js";import"./OverlayArrow-D1HxMZWG.js";import"./useResizeObserver-CFNpAzLe.js";import"./Collection-DrdDzDeL.js";import"./index-gUPZ6ud7.js";import"./Separator-ZDxrAl7P.js";import"./SelectionManager-CKpI-EM2.js";import"./useEvent-CYtWltky.js";import"./scrollIntoView-BbkBiiSm.js";import"./SelectionIndicator-CJWR_V4T.js";import"./useDescription-s0qvynA_.js";import"./ListKeyboardDelegate-B3ktNGKK.js";import"./PressResponder-B-imVtyL.js";import"./useLocalizedStringFormatter-Cul2dCid.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQeprfcc.js";import"./getScrollParent-RY3Tj0rv.js";import"./VisuallyHidden-C0OILqoq.js";import"./x--g3_ok1a.js";import"./createLucideIcon-BKDiJvQY.js";import"./useLocalizedStringFormatter-BW0f4aMp.js";import"./Heading-Dw8tjQVL.js";import"./Button-DjmPZJ5Y.js";import"./Button.module-BB7N-cLd.js";import"./info-B49eaUag.js";import"./Popover-DEjwl-hQ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
