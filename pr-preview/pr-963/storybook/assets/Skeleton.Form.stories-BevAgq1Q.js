import{j as e,l}from"./iframe-DuaKi7xD.js";import{S as t}from"./Skeleton-Dga-8Kdh.js";import{T as d}from"./TextField-yH7dkN-e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DCideqZ_.js";import"./utils-BCB57b2F.js";import"./TextField-B9pFxynO.js";import"./FieldError-H771sQdp.js";import"./Text-CQdB-g-f.js";import"./useFocusRing-CQC8CYmg.js";import"./index-D03P8HqJ.js";import"./index-Ch7u2l1l.js";import"./Text-BSDD80o3.js";import"./RSPContexts-Dp-lO0G2.js";import"./Form-DibndPIs.js";import"./useFormValidation-B8lCzVVQ.js";import"./Group-CIoYZdfL.js";import"./Input-DYNm0iR9.js";import"./Hidden-DKSH1Rie.js";import"./Button-C2VTZsyg.js";import"./useLabels-CpVDs9CP.js";import"./useButton-DBitaRdE.js";import"./useTextField-Cv5deoUh.js";import"./useControlledState-DAMN56Mb.js";import"./useField-Cu-a3CrC.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BZBLIiUE.js";import"./Dialog-CXAViKrp.js";import"./OverlayArrow-Csf7zr_A.js";import"./useResizeObserver-CYs8NOIf.js";import"./Collection-BrbeAAJJ.js";import"./index-uZ48yn5V.js";import"./Separator-CddXaqSa.js";import"./SelectionManager-Dfyyw9Ox.js";import"./useEvent-BT4STeC0.js";import"./scrollIntoView-CssqY3lX.js";import"./SelectionIndicator-_Z4rczi7.js";import"./useDescription-h7oYQVdW.js";import"./ListKeyboardDelegate-DrqN3Bz_.js";import"./PressResponder-CzqIdO87.js";import"./useLocalizedStringFormatter-j_Zj2lr5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bl2sq5hu.js";import"./VisuallyHidden-DOdw6P18.js";import"./Button-B9O2nQjc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH44G-u9.js";import"./createLucideIcon-BniL5whM.js";import"./x-BaABe5aY.js";import"./Heading-uceAp6q4.js";import"./info-uyk6d1fQ.js";import"./Popover-Sb6B6YNt.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
