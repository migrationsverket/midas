import{j as e,l}from"./iframe-5gY8uiZp.js";import{S as t}from"./Skeleton-CJ-xJt1y.js";import{T as p}from"./TextField-mkuaDNDK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-mwJRwxUP.js";import"./utils-DECZjV3X.js";import"./TextField-77v4TWyy.js";import"./FieldError-Cj22ksHa.js";import"./Text-DX1n20pB.js";import"./useFocusRing-Boel07eM.js";import"./index-TGVZlA7L.js";import"./index-CLK4xEXj.js";import"./Text-C5V7OBlJ.js";import"./RSPContexts-B5FLXJGX.js";import"./Form-D863ir3x.js";import"./useFormValidation-15BdVQVt.js";import"./Group-C7P4wTCw.js";import"./Input-DWjveu92.js";import"./Hidden-CJ0_VQq2.js";import"./Button-CTvN5iBJ.js";import"./useLabels-Di96fV3Q.js";import"./useButton-4X48dbK-.js";import"./useTextField-B7b4wiTP.js";import"./useControlledState-D5A6R61M.js";import"./useField-D1C0IxMP.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dw9DWsMU.js";import"./Dialog-D_ZI3bEp.js";import"./OverlayArrow-Br5tT-gW.js";import"./useResizeObserver-D3WtM-cD.js";import"./Collection-sT0T17lb.js";import"./index-B5Ph--6G.js";import"./Separator-BifO5n1N.js";import"./SelectionManager-Dewgj96Z.js";import"./useEvent-DxUtadp_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dwnht8Fn.js";import"./useDescription-07SEN0Vw.js";import"./ListKeyboardDelegate-DaE3jdMq.js";import"./PressResponder-U6d0dn2T.js";import"./useLocalizedStringFormatter-DZ0rZsWI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DckjZn6o.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CoBV_pcx.js";import"./Button-VUiFd7fg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_Dnj8gb8.js";import"./createLucideIcon-B1QC88uT.js";import"./x-BqJtwxOC.js";import"./Heading-ftpgvw5S.js";import"./info-COZxM15j.js";import"./Popover-CV2sNt58.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
