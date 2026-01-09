import{j as e,l}from"./iframe-zfNSE992.js";import{S as t}from"./Skeleton-D-LDSylQ.js";import{T as p}from"./TextField-dbdA0Dqa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C4W5dglC.js";import"./utils-B2SfFvVK.js";import"./TextField-Dh2KypHo.js";import"./FieldError-tjW0lz2J.js";import"./Text-Bl3fcot9.js";import"./useFocusRing-CI59KcKl.js";import"./index-CnTZzMrs.js";import"./index-D3448pLr.js";import"./Text-CHvMVhnB.js";import"./RSPContexts-CPw4lDId.js";import"./Form-6PQG0HwU.js";import"./useFormValidation-K1-ScRZ6.js";import"./Group-DpdCNFXc.js";import"./Input-DlM3ex9A.js";import"./Hidden-DgIIwhxN.js";import"./Button-DC5DfWyL.js";import"./useLabels-CjQ9ItwL.js";import"./useButton-DIQ3lO2m.js";import"./useTextField-CtJ9LcA7.js";import"./useControlledState-CIBWwPsl.js";import"./useField-CONU5j_T.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-tGIiThem.js";import"./Dialog-D8-e6XCB.js";import"./OverlayArrow-diGZdjTK.js";import"./useResizeObserver-DBO1Nm8L.js";import"./Collection-CNmZWZMw.js";import"./index-CeZtCSPC.js";import"./Separator-Cha28dSh.js";import"./SelectionManager-BL7qS2k3.js";import"./useEvent-BF95CLEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2KX-6U1.js";import"./useDescription-CxH9sory.js";import"./ListKeyboardDelegate-BcysRdmZ.js";import"./PressResponder-DA6YHTJ4.js";import"./useLocalizedStringFormatter-CJ_FBxg6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkh2xnu2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wYdlkGlt.js";import"./Button-DBGCil-H.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BJ90h7Po.js";import"./createLucideIcon-BiSgLEsQ.js";import"./x-ahQW_gYz.js";import"./Heading-in0uxqkQ.js";import"./info-CTFYqTck.js";import"./Popover-BmxvQgJ2.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
