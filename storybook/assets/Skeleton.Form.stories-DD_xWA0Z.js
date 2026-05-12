import{j as e,l}from"./iframe-DXV5yNVg.js";import{S as t}from"./Skeleton-jCoLvvRY.js";import{T as p}from"./TextField-Bp9I9bUy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BHbqBWko.js";import"./utils-D2X0V_ch.js";import"./FieldError-BqMBz98l.js";import"./Text-CKvHTakV.js";import"./useFocusRing-D5WWltRW.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./Text-CBeHelAL.js";import"./RSPContexts-CFPuUxx1.js";import"./Form-ChJqqoAq.js";import"./Group-2TNpPRTn.js";import"./Input-DkCtsT4u.js";import"./Hidden-D1mzcqIQ.js";import"./Button-BFHR6RXp.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./useTextField-BYn9VW6y.js";import"./useControlledState-gqmUfamI.js";import"./useField-zA9g1QiW.js";import"./TextField.module-DdivwlC8.js";import"./Label-D4bRHScp.js";import"./Dialog-CbPWg4ki.js";import"./OverlayArrow-BFyUX9eS.js";import"./useResizeObserver-B-tmIu7G.js";import"./Collection-BHKWOZuO.js";import"./index-DLzlm1NY.js";import"./Separator-Cnj1iZa1.js";import"./SelectionManager-DOb3wefr.js";import"./useEvent-BKSnxFNZ.js";import"./scrollIntoView-Gtl3EXZL.js";import"./SelectionIndicator-BAznZF8p.js";import"./useDescription-Br6-58Tk.js";import"./ListKeyboardDelegate-qY0cUxF-.js";import"./PressResponder-jCanc_1p.js";import"./useLocalizedStringFormatter-DMugWIr_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cln5OJdR.js";import"./getScrollParent-DEOaQKh5.js";import"./VisuallyHidden-BEiLaXoC.js";import"./ModalOverlay-BP6gum9g.js";import"./x-C8jYBObA.js";import"./createLucideIcon-BzcStSQs.js";import"./useLocalizedStringFormatter-C4UT3jd4.js";import"./Heading-DF9E9mda.js";import"./Button-BlXLhIpL.js";import"./Button.module-BB7N-cLd.js";import"./info-DJyPwCkZ.js";import"./Popover-CvGVI1s-.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
