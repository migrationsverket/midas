import{j as e,l}from"./iframe-RkEpx7ni.js";import{S as t}from"./Skeleton-H_96-0NA.js";import{T as p}from"./TextField-BbwG0evo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BlNcqZaZ.js";import"./utils-B679VK9X.js";import"./FieldError-BBX_Ykc_.js";import"./Text-BGMtfqCs.js";import"./useFocusRing-BlNPnF8L.js";import"./index-goo2gDrg.js";import"./index-DxX5hx9t.js";import"./Text-C1lDc3gF.js";import"./RSPContexts-C64Y1eJJ.js";import"./Form-D_eVyLWz.js";import"./useFormValidation-C6JG9BVC.js";import"./Group-CT-LsEdo.js";import"./Input-BWJHRJLo.js";import"./Hidden-CZ7CBwUl.js";import"./Button-g4l6mPYD.js";import"./useLabels-xGg1dRYQ.js";import"./useButton-KyyZ2_fP.js";import"./useTextField-CMtMV5Wa.js";import"./useControlledState-CwCz7UAe.js";import"./useField-BVTdh--K.js";import"./TextField.module-Cm6797Xw.js";import"./Label-BrWn0EBI.js";import"./Dialog-D7TD1ze6.js";import"./OverlayArrow-CVx-1z4E.js";import"./useResizeObserver-61DcnlhT.js";import"./Collection-CgY1rek1.js";import"./index-DcJwTbuE.js";import"./Separator-tflavVo2.js";import"./SelectionManager-BVsm7uU1.js";import"./useEvent-B7oskemw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dt95h1eU.js";import"./useDescription--nrXx0r0.js";import"./ListKeyboardDelegate-_gXQplax.js";import"./PressResponder-Cm6tbCUn.js";import"./useLocalizedStringFormatter-DI3yj5Q3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3kQ3QyBc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bkb3QPlD.js";import"./Button-DYQbXjbn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPcGQfa-.js";import"./createLucideIcon-cwFcj7Hk.js";import"./x-BKxU2Zo_.js";import"./Heading-vpfIDZEf.js";import"./info-BQcLWynh.js";import"./Popover-G63esFkG.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
