import{j as e,l}from"./iframe-Co8ouiR0.js";import{S as t}from"./Skeleton-xzqHcLVs.js";import{T as p}from"./TextField-CiWIaBPe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-PwcpbfUZ.js";import"./utils-CaTFkK5X.js";import"./FieldError-CEGfntdp.js";import"./Text-DtfYRBf1.js";import"./useFocusRing-Dxdgl-gF.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./Text-B5_C6N3n.js";import"./RSPContexts-DtYDmIKY.js";import"./Form-Ckl-USsE.js";import"./Group-CFHeoX-M.js";import"./Input-aufJAFK1.js";import"./Hidden-TJ2PhhZw.js";import"./Button-BP9TK4Xh.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./useTextField-vKxQkpA7.js";import"./useControlledState-CaplsX9m.js";import"./useField-CC0WBTcL.js";import"./TextField.module-DdivwlC8.js";import"./Label-hXq40l1q.js";import"./Dialog-CvlWZS6m.js";import"./OverlayArrow-C6d9GNbe.js";import"./useResizeObserver-B51hn-QD.js";import"./Collection-DINZb8zb.js";import"./index-B_luancG.js";import"./Separator-BapWEfbs.js";import"./SelectionManager-BWBhr4BK.js";import"./useEvent-Cm1cXmjt.js";import"./scrollIntoView-DvPgTXx8.js";import"./SelectionIndicator-DWiIapfM.js";import"./useDescription-HAOJ4Hrg.js";import"./ListKeyboardDelegate-CsIF4ql5.js";import"./PressResponder-D7LEbecv.js";import"./useLocalizedStringFormatter-DQmIYKST.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CnViS2qk.js";import"./getScrollParent-BedhNeW7.js";import"./VisuallyHidden-DHiWfcqJ.js";import"./ModalOverlay-CCKnw6s9.js";import"./x-BzzbKOkA.js";import"./createLucideIcon-CuuVQ0Rb.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";import"./Heading-BCJk9rok.js";import"./Button-BOgReN_Q.js";import"./Button.module-BB7N-cLd.js";import"./info-SKV308y7.js";import"./Popover-0v0Nff7R.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
