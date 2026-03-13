import{j as e,l}from"./iframe-DNJYs6qz.js";import{S as t}from"./Skeleton-DcnwQYEX.js";import{T as p}from"./TextField-CamE-4si.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DULgzncV.js";import"./utils-aX0iHzRl.js";import"./FieldError-BrrWeg-t.js";import"./Text-DnOEsXYA.js";import"./useFocusRing-CX_Euf5u.js";import"./index-DAO1nJ__.js";import"./index--Rga-YK_.js";import"./Text-DlzD_a6_.js";import"./RSPContexts-BQ-Rh700.js";import"./Form-DEinUDSu.js";import"./useFormValidation-0nAA1zAL.js";import"./Group-DS9KpzMo.js";import"./Input-B50gs5w8.js";import"./Hidden-CpGOqaLl.js";import"./Button-CZyV5Mpk.js";import"./useLabels-3Hv0LYEO.js";import"./useButton-W-teLibw.js";import"./useTextField-B8P53YXq.js";import"./useControlledState-CtAp0QIN.js";import"./useField-CxoJpysk.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dp09jK-H.js";import"./Dialog-DJrQXOW7.js";import"./OverlayArrow-CTkIgP-Z.js";import"./useResizeObserver-CAvb7KEN.js";import"./Collection-BM28iyKb.js";import"./index-Bp3s1rJf.js";import"./Separator-CmX4QdK_.js";import"./SelectionManager-CQdEZCxu.js";import"./useEvent-Z2WvN-8m.js";import"./scrollIntoView-D1v9x2ju.js";import"./SelectionIndicator-CZ_49dW3.js";import"./useDescription-Dmw9BzGw.js";import"./ListKeyboardDelegate-CVvGU0Ro.js";import"./PressResponder-DsiIsuz5.js";import"./useLocalizedStringFormatter-CFHnDqzL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfhQ3nLP.js";import"./getScrollParent-B8wVHIEy.js";import"./VisuallyHidden-BjCBN869.js";import"./x-4zOHDniK.js";import"./createLucideIcon-BSLbnE3k.js";import"./useLocalizedStringFormatter-CUnRcS0k.js";import"./Heading-BRtwQXho.js";import"./Button-DOGWCVYm.js";import"./Button.module-D_C6WeTN.js";import"./info-Ds2WqMCN.js";import"./Popover-CMcYm0qE.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
