import{j as e,l}from"./iframe-DhO1D3QS.js";import{S as t}from"./Skeleton-CZxPeEIC.js";import{T as p}from"./TextField-CO3vqbXV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C8S0jv7b.js";import"./utils-CSNCD2yj.js";import"./FieldError-BUEn5Oe2.js";import"./Text-_SRXujoE.js";import"./useFocusRing-CQcNXJs3.js";import"./index-LXpDKKNQ.js";import"./index-DoTz7Iqr.js";import"./Text-CzyDiWSu.js";import"./RSPContexts-6O3ucjMQ.js";import"./Form-DQnVBK_C.js";import"./Group-C20hGe4g.js";import"./Input-C6g8_Qf3.js";import"./Hidden-I1lhyBbs.js";import"./Button-C3UugFSS.js";import"./useLabel-DkS0rVDY.js";import"./useLabels-DLba56LZ.js";import"./useButton-CWHmgq4Y.js";import"./useTextField-C_37wv57.js";import"./useControlledState-C9CuHrJu.js";import"./useField-DoQL0GGr.js";import"./TextField.module-DdivwlC8.js";import"./Label-BEbcJJ-0.js";import"./Dialog-DnbLLgMq.js";import"./OverlayArrow-Bt3V5xwN.js";import"./useResizeObserver-Dy2ut44h.js";import"./Collection-Cimwf5Zr.js";import"./index-Bc5wjcDh.js";import"./Separator-CAP_u--M.js";import"./SelectionManager-BiDDZLNk.js";import"./useEvent-CAEIwGNs.js";import"./scrollIntoView-aGeNnyvC.js";import"./SelectionIndicator-DS0PCRu2.js";import"./useDescription-CghzDXw0.js";import"./ListKeyboardDelegate-D5nCii-g.js";import"./PressResponder-Dn7Sr3dQ.js";import"./useLocalizedStringFormatter-BuzJnweE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8lt5G5V.js";import"./getScrollParent-CDShaaNJ.js";import"./VisuallyHidden-D9luNuIh.js";import"./ModalOverlay-D2epRYB1.js";import"./x-CdBi1_si.js";import"./createLucideIcon-DKHdgiD6.js";import"./useLocalizedStringFormatter-D1NPH8NW.js";import"./Heading-43GdhHJh.js";import"./Button-Do0NIfC4.js";import"./Button.module-BB7N-cLd.js";import"./info-DClxFg8y.js";import"./Popover-yvf1XY0m.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
