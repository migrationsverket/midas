import{j as e,l}from"./iframe-CgL5jpdX.js";import{S as t}from"./Skeleton-BbtbyL_g.js";import{T as p}from"./TextField-Buc7sTSH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DZJQlizh.js";import"./utils-BwYOvAb8.js";import"./FieldError-BH_BPKHD.js";import"./Text-C7o90fsQ.js";import"./useFocusRing-CzWgPPi5.js";import"./index-IcQzFznC.js";import"./index-BLmwPxgC.js";import"./Text-MhlqGevy.js";import"./RSPContexts-TxIrKy65.js";import"./Form-CeL7g4an.js";import"./useFormValidation-YoD1TmSM.js";import"./Group-DWHhnbql.js";import"./Input-QdmhBDJl.js";import"./Hidden-C2oIje6j.js";import"./Button-Z-LnhU8E.js";import"./useLabels-B9veE0Tg.js";import"./useButton-CzcDwR1N.js";import"./useTextField-B45MsQB8.js";import"./useControlledState-CyaCWJoJ.js";import"./useField-BsmAT2vs.js";import"./TextField.module-DdivwlC8.js";import"./Label-dskcD2CD.js";import"./Dialog-DSbqG3ZJ.js";import"./OverlayArrow-Dxv48tTs.js";import"./useResizeObserver-NI893z-o.js";import"./Collection-9AeLgQUg.js";import"./index-CO57A9Dx.js";import"./Separator-CbbfB2UR.js";import"./SelectionManager-o0XZ8hoX.js";import"./useEvent-DWxTDEgS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DqnlVpg0.js";import"./useDescription-B8kyRAqY.js";import"./ListKeyboardDelegate-BZdKy9GG.js";import"./PressResponder-CuXLg06j.js";import"./useLocalizedStringFormatter-sPHgE0bP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bik81p2q.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BsEPRBBE.js";import"./Button-DSLJU119.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D5fFi2pk.js";import"./createLucideIcon-CxmWxSan.js";import"./x-Cp-TOvNz.js";import"./Heading-YDvkZKr1.js";import"./info-CRsRYZJj.js";import"./Popover-CwlylJ2g.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
