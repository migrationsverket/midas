import{j as e,l}from"./iframe-DZlNJ8S4.js";import{S as t}from"./Skeleton-l-yKQ9Tq.js";import{T as d}from"./TextField-BdCYI2QI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B_Y0mMfy.js";import"./utils-B9k6LEuL.js";import"./TextField-gSiOM4-x.js";import"./FieldError-Slpr0HzK.js";import"./Text-D4o9xbR1.js";import"./useFocusRing-Be4o6Un8.js";import"./index-DC3wIA-C.js";import"./index-DR5hiXYB.js";import"./Text-CdVje7KY.js";import"./RSPContexts-Ct6xn_7s.js";import"./Form-QFInxnNp.js";import"./useFormValidation-DA7hKUI3.js";import"./Group-DINZVnG5.js";import"./Input-wUwDDZR8.js";import"./Hidden-C6Hj6bpW.js";import"./Button-DZzK2L52.js";import"./useLabels-f8gjmpAz.js";import"./useButton-Zpg8HNK7.js";import"./useTextField-t8ae-k2J.js";import"./useControlledState-CQnmbS5S.js";import"./useField-BUkOR3W7.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B5X5fIw4.js";import"./Dialog-CuElgxjX.js";import"./OverlayArrow-ymAXnaqq.js";import"./useResizeObserver-Lx-RW7M4.js";import"./Collection-CmQUFjR9.js";import"./index-BmZvxrs_.js";import"./Separator-_p1JhXcX.js";import"./SelectionManager-CYH7FyPU.js";import"./useEvent-DdCye5gc.js";import"./scrollIntoView-qmizfuqo.js";import"./SelectionIndicator-aDV9sGHg.js";import"./useDescription-cDUSzPki.js";import"./ListKeyboardDelegate-DEaZYZM5.js";import"./PressResponder-C78eOqbT.js";import"./useLocalizedStringFormatter-DCAuiTpO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bdfnz0Kn.js";import"./VisuallyHidden-6-uiIxz8.js";import"./useLocalizedStringFormatter-WQhR5XKG.js";import"./Button-CXMyUl9m.js";import"./Button.module-CtQ1deO8.js";import"./x-Cu3No43V.js";import"./createLucideIcon-CyJv2oB_.js";import"./Heading-Bey1w6G0.js";import"./info-DKVT7bMN.js";import"./Popover-Cp8im4X8.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
