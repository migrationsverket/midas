import{j as e,l}from"./iframe-D6iOFlNk.js";import{S as t}from"./Skeleton-DaLETymg.js";import{T as p}from"./TextField-BOAeuHA3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-q7P_vONl.js";import"./utils-CD1tK_62.js";import"./TextField-BP7snlb2.js";import"./FieldError-BlY0sckk.js";import"./Text-aL4nWdoT.js";import"./useFocusRing-upgm9Lvd.js";import"./index-cK5OqLVZ.js";import"./index-BOUWd1Up.js";import"./Text-D5zoqrMb.js";import"./RSPContexts-BvwPJGsb.js";import"./Form-CPEZg61n.js";import"./useFormValidation-Cs82m8dT.js";import"./Group-DD1PfB3C.js";import"./Input-6iqbT1mi.js";import"./Hidden-Cd_aaCcf.js";import"./Button-B4EeNfOQ.js";import"./useLabels-CZQ88t08.js";import"./useButton-84WMXec5.js";import"./useTextField-X7zOl3Pb.js";import"./useControlledState-DejCxbfT.js";import"./useField-BS28cROS.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ByJL_z4L.js";import"./Dialog-D2nUFJ93.js";import"./OverlayArrow-DGiQBfyt.js";import"./useResizeObserver-0neNMj4N.js";import"./Collection-BkN69H6H.js";import"./index-zGMbwrwu.js";import"./Separator-i4x5yLEI.js";import"./SelectionManager-C73wsRfe.js";import"./useEvent-ClK_-pLi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgEE-HPU.js";import"./useDescription-CuOT9qT9.js";import"./ListKeyboardDelegate-BuJFcrKe.js";import"./PressResponder-dFieFUDI.js";import"./useLocalizedStringFormatter-BIP2SAND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaI16aPT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CIEzbUDk.js";import"./Button-CjctI97I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAscfSQt.js";import"./createLucideIcon-Gwq4fNDs.js";import"./x-CmRgogil.js";import"./Heading-Dk1N_l44.js";import"./info-BWts4tgg.js";import"./Popover-Dvcj7Ba1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
