import{j as e,l}from"./iframe-C8RsNfgP.js";import{S as t}from"./Skeleton-ad3Yg2aK.js";import{T as p}from"./TextField-DdrZsIxn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-0ff9tgyv.js";import"./utils-CoNQ4mwz.js";import"./FieldError-Dx0wLbZk.js";import"./Text-COO1Tk0x.js";import"./useFocusRing-Cez6wS5f.js";import"./index-D8K4fX28.js";import"./index-Di6EYout.js";import"./Text-C2A-yzmp.js";import"./RSPContexts-DnHOF8LL.js";import"./Form-_BW7u1yO.js";import"./Group-DXZilGFj.js";import"./Input-BIxzzi3V.js";import"./Hidden-BIvUufzC.js";import"./Button-A6crx_HM.js";import"./useLabel-DX_Dt9l7.js";import"./useLabels-IRIn0Uy0.js";import"./useButton-CHMv5Y4_.js";import"./useTextField-BIRklZ0Y.js";import"./useControlledState-LFxBnaBs.js";import"./useField-CTSoVGUk.js";import"./TextField.module-DdivwlC8.js";import"./Label-PfsZVWpI.js";import"./Dialog-B1YZPLrY.js";import"./OverlayArrow-9TJsQCNt.js";import"./useResizeObserver-DyyEm7tl.js";import"./Collection-B6ieSp3r.js";import"./index-Db_2pBFe.js";import"./Separator-CK2ElXWA.js";import"./SelectionManager-CBA1K6Fq.js";import"./useEvent-Bt-5AhA-.js";import"./scrollIntoView-D2l_qE3A.js";import"./SelectionIndicator-CXMu-wz6.js";import"./useDescription-CbZGxods.js";import"./ListKeyboardDelegate-B2GotOUx.js";import"./PressResponder-CsdNKVT2.js";import"./useLocalizedStringFormatter-6GffOhcG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YvurAC38.js";import"./getScrollParent-DXaGcTkj.js";import"./VisuallyHidden-D7WZRGTo.js";import"./ModalOverlay---ngcfhz.js";import"./x-D8ZbVwK0.js";import"./createLucideIcon-BIQyFJ8n.js";import"./useLocalizedStringFormatter-CdlaUYB9.js";import"./Heading-BmK9CANu.js";import"./Button-Cfe9iLIu.js";import"./Button.module-BB7N-cLd.js";import"./info-CW9rTFtw.js";import"./Popover-BAo-GLwB.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
