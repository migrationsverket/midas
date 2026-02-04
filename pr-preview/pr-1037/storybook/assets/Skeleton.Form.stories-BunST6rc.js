import{j as e,l}from"./iframe-avvwDBBp.js";import{S as t}from"./Skeleton-DkNIrwsc.js";import{T as p}from"./TextField-JrxBJSQy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DEvHT08j.js";import"./utils-C6AdICJ7.js";import"./TextField-DTO31SCI.js";import"./FieldError-CUJ1nOb_.js";import"./Text-nuNh7stK.js";import"./useFocusRing-x-yt5vcP.js";import"./index-Cc2TyXf4.js";import"./index-F0yeFPaK.js";import"./Text-BuEQRuhi.js";import"./RSPContexts-BJmPPlkw.js";import"./Form-Y4ksqzXf.js";import"./useFormValidation-BlOMbcO_.js";import"./Group-B8i9DsPR.js";import"./Input-Cc51j71D.js";import"./Hidden-Ft7ifkXt.js";import"./Button-B34KA-9Z.js";import"./useLabels-BaAeHDSr.js";import"./useButton-C6RHTzzZ.js";import"./useTextField-CQXoPTmb.js";import"./useControlledState-BQt9Xj6g.js";import"./useField-X5Ne7bxX.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BNmurno_.js";import"./Dialog-CXi0lKvB.js";import"./OverlayArrow-19GsMW1S.js";import"./useResizeObserver-CDLAZHnJ.js";import"./Collection-nNhJNYKC.js";import"./index-CUhqqiIc.js";import"./Separator-D2SIzjzz.js";import"./SelectionManager-DAyBKSt5.js";import"./useEvent-DK7Zb_XO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-jzK5UQW7.js";import"./useDescription-BiPsPzZk.js";import"./ListKeyboardDelegate-CykXfXkf.js";import"./PressResponder-nCvL8pYp.js";import"./useLocalizedStringFormatter-C0xDl-WG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5BK6QLk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bjg7bFep.js";import"./Button-Bc5upLYd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDByPaCr.js";import"./createLucideIcon-H9RUqqbe.js";import"./x-BecIAGDD.js";import"./Heading-CcX-zHd2.js";import"./info-D-GFsriY.js";import"./Popover-CtWJu6lm.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
