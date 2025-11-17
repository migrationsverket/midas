import{j as e,l}from"./iframe-5OPxOFOo.js";import{S as t}from"./Skeleton-CZW1B-qP.js";import{T as d}from"./TextField-CLgyKBGG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BaQj4rfv.js";import"./utils-y7VQpXmV.js";import"./TextField-mtx0fyLN.js";import"./FieldError-DsFnT5cH.js";import"./Text-LE0QZyiT.js";import"./useFocusRing-YAhHe-vS.js";import"./index-Bl-U2zRt.js";import"./index--CP_AI-C.js";import"./Text-DJ8ddDqj.js";import"./RSPContexts-Bvl2qDvi.js";import"./Form-CrU0CZmU.js";import"./useFormValidation-Bc1me9n6.js";import"./Group-Dz3qv3v1.js";import"./Input-DDF2Yccy.js";import"./Hidden-B8S2zPTS.js";import"./Button-DwYUQnyK.js";import"./useLabels-DFrgstvf.js";import"./useButton-DEtSmmrP.js";import"./useTextField-D3hRTkk3.js";import"./useControlledState-C3eWgmLl.js";import"./useField-B5Gn1WPy.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CPJGnTQu.js";import"./Dialog-C2kRLA1K.js";import"./OverlayArrow-CB3yFPwQ.js";import"./useResizeObserver-BdtodvEi.js";import"./Collection-DrYOgb_L.js";import"./index-Bhd8KZ-L.js";import"./Separator-CnjFkCy-.js";import"./SelectionManager-Byjjl2Ny.js";import"./useEvent-Dz5VVAtu.js";import"./scrollIntoView-BziE6UoW.js";import"./SelectionIndicator-org_szYd.js";import"./useDescription-BnvkbMBx.js";import"./ListKeyboardDelegate-g1kRYTEr.js";import"./PressResponder-CTBn48Ct.js";import"./useLocalizedStringFormatter-CJrXU8gl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-ClkZa6SK.js";import"./VisuallyHidden-D4M_6Oa3.js";import"./useLocalizedStringFormatter-Butfipwt.js";import"./Button-CZG4l204.js";import"./Button.module-CtQ1deO8.js";import"./x-Dh9h_nLx.js";import"./createLucideIcon-DTp8xoi7.js";import"./Heading-DysyouUu.js";import"./info-CHVIPInP.js";import"./Popover-BKLrGn4p.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
