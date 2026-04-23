import{j as e,l}from"./iframe-9FvbyuW0.js";import{S as t}from"./Skeleton-CJ75pDlb.js";import{T as p}from"./TextField-JlyfSRCY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CJnhJpDc.js";import"./utils-DbV0Y6c3.js";import"./FieldError-DXeE9aRb.js";import"./Text-DiUsHtEy.js";import"./useFocusRing-Vad-IAyW.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./Text-rctLJTJW.js";import"./RSPContexts--6FiGTU6.js";import"./Form-CxEXbquf.js";import"./Group-BTtkthVR.js";import"./Input-bNYEqfXu.js";import"./Hidden-DVuO0yGr.js";import"./Button-C6F5UViI.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./useTextField-CDf8M08J.js";import"./useControlledState-DTpS52De.js";import"./useField-BA20b1Lr.js";import"./TextField.module-DdivwlC8.js";import"./Label-BCnHYHUz.js";import"./Dialog-DpcokjtD.js";import"./OverlayArrow-DLBSeoRI.js";import"./useResizeObserver-BPk5j--a.js";import"./Collection-jHqWKKLK.js";import"./index-CygLUfk4.js";import"./Separator-BjFOZDkA.js";import"./SelectionManager-Bi6U6zzO.js";import"./useEvent-CbyPD6wK.js";import"./scrollIntoView-Cg5eRwi4.js";import"./SelectionIndicator-CSw75rQk.js";import"./useDescription-BGTuXDEN.js";import"./ListKeyboardDelegate-CMUv_TXp.js";import"./PressResponder-DGAC22GT.js";import"./useLocalizedStringFormatter-4mf_lvzF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPdj6FLI.js";import"./getScrollParent-L3WWZsSI.js";import"./VisuallyHidden-C2w5ZOiK.js";import"./ModalOverlay-DGTRQLvx.js";import"./x-DkE65F2h.js";import"./createLucideIcon-BM_MsqvO.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";import"./Heading-CQ5wBLPw.js";import"./Button-2CN5Xnme.js";import"./Button.module-BB7N-cLd.js";import"./info-BgeEpHk4.js";import"./Popover-DvoNYVBo.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
