import{j as e,l}from"./iframe-D49zqrLc.js";import{S as t}from"./Skeleton-BjGjlrni.js";import{T as p}from"./TextField-idKNN_-J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-xN-eCIC0.js";import"./utils-DdKwVxXO.js";import"./FieldError-CNr2Wry7.js";import"./Text-gxnzhlQB.js";import"./useFocusRing--JbYat2w.js";import"./index-CIcuBPP4.js";import"./index-Gblu_uca.js";import"./Text-BHKGtyr7.js";import"./RSPContexts-BB17GfA4.js";import"./Form-CGqphfov.js";import"./Group-BpoIKBD4.js";import"./Input-DCVWDyBK.js";import"./Hidden-BxWMNY2q.js";import"./Button-J3Iz-Is0.js";import"./useLabel-DknYPbVU.js";import"./useLabels-CkRRpiK4.js";import"./useButton-CxrKCV_E.js";import"./useTextField-ads8gc7M.js";import"./useControlledState-DfjmYRRj.js";import"./useField-boYe1x_I.js";import"./TextField.module-DdivwlC8.js";import"./Label-CmFZQvGJ.js";import"./Dialog-DYguNK-1.js";import"./OverlayArrow-YRNDl_Wq.js";import"./useResizeObserver-64wSONLm.js";import"./Collection-CzY8nsaY.js";import"./index-Djqzw61o.js";import"./Separator-CFWN8q7z.js";import"./SelectionManager-BmBUzZWk.js";import"./useEvent-BNdUgJ17.js";import"./scrollIntoView-vmM-KOvz.js";import"./SelectionIndicator-B6VviSvn.js";import"./useDescription-2_Msdgp6.js";import"./ListKeyboardDelegate-B6Q_xrg3.js";import"./PressResponder-DaHVHwXx.js";import"./useLocalizedStringFormatter-CsaBVSjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSR9xidZ.js";import"./getScrollParent-ailHkxD7.js";import"./VisuallyHidden-BCA1C0LI.js";import"./ModalOverlay-DUYQFCIC.js";import"./x-DZqz0o0J.js";import"./createLucideIcon-DrHl8fY3.js";import"./useLocalizedStringFormatter-D9dAP4k5.js";import"./Heading-DQ6cPxlP.js";import"./Button-CsehA-0Y.js";import"./Button.module-BB7N-cLd.js";import"./info-Dwrij3Ao.js";import"./Popover-B6RfJOw0.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
