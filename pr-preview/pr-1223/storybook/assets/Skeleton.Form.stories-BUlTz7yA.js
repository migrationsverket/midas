import{j as e,l}from"./iframe-JYgA1KQi.js";import{S as t}from"./Skeleton-DtKSOyle.js";import{T as p}from"./TextField-D-AztzFT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C9M_ak0B.js";import"./utils-ChLKnNJg.js";import"./FieldError-BlsJhfcN.js";import"./Text-D9TOgsmN.js";import"./useFocusRing-C06MErgQ.js";import"./index--lNTANJm.js";import"./index-L3mAy6mP.js";import"./Text-D50EAg-o.js";import"./RSPContexts-gejQyHLH.js";import"./Form-r6wIXJmO.js";import"./Group-B675t2Fv.js";import"./Input-B1FGNxTx.js";import"./Hidden-0YDp5zxo.js";import"./Button-w7gIenY9.js";import"./useLabel-DxtLEE3Y.js";import"./useLabels-DSacGDBd.js";import"./useButton-Beja3uNl.js";import"./useTextField-DbI1Iik8.js";import"./useControlledState-CXI3Yibh.js";import"./useField-QQnG48hk.js";import"./TextField.module-DdivwlC8.js";import"./Label-DSIP6ZhT.js";import"./Dialog-DLppZ60P.js";import"./OverlayArrow-B2TJrPfo.js";import"./useResizeObserver-BiImtN7c.js";import"./Collection-BNq3e9X1.js";import"./index-C7yQKzyG.js";import"./Separator-BItHUN8S.js";import"./SelectionManager-CiWhjYbj.js";import"./useEvent-BOB9fAnz.js";import"./scrollIntoView-D2aT1v_d.js";import"./SelectionIndicator-Cg3C4rFl.js";import"./useDescription-CE0NAOWk.js";import"./ListKeyboardDelegate-CImt9RlX.js";import"./PressResponder-B0xgXgFS.js";import"./useLocalizedStringFormatter-CVst0Jjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DS0nLW82.js";import"./getScrollParent-zw9jGmc3.js";import"./VisuallyHidden-Cov8ReYV.js";import"./ModalOverlay-D0_8i7ni.js";import"./x-C1kwUoON.js";import"./createLucideIcon-UApEV6S6.js";import"./useLocalizedStringFormatter-j9dnYAXL.js";import"./Heading-BHTxTGKK.js";import"./Button-MMPxX2Zb.js";import"./Button.module-BB7N-cLd.js";import"./info-D7hO4-PY.js";import"./Popover-CB-DEkvg.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
