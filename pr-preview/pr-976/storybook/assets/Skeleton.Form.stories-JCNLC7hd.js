import{j as e,l}from"./iframe-BEnukkSz.js";import{S as t}from"./Skeleton-CRuYj_UE.js";import{T as p}from"./TextField-BKUJ87Ky.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CDNdPFCj.js";import"./utils-BbU1CVYT.js";import"./TextField-McPJ5CYS.js";import"./FieldError-Bwl06kWX.js";import"./Text-DeqrOkdQ.js";import"./useFocusRing-CoFg4iIP.js";import"./index-CsvThf5c.js";import"./index-XX1rAQcD.js";import"./Text-t8HEv2as.js";import"./RSPContexts-Dqt4Tvru.js";import"./Form-JA4VLDpe.js";import"./useFormValidation-DeA6ARBW.js";import"./Group-Ccc3wAU_.js";import"./Input-B2YvohdH.js";import"./Hidden-B9TQXGL0.js";import"./Button-BqfWUXxO.js";import"./useLabels-ugYGghQ_.js";import"./useButton-D_d4gnP9.js";import"./useTextField-CNO5IBaR.js";import"./useControlledState-rz1_euMV.js";import"./useField-DblSzxct.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C5yrJJU3.js";import"./Dialog-DRuhD6ii.js";import"./OverlayArrow-Bt075tAw.js";import"./useResizeObserver-dVu7hdDW.js";import"./Collection-B4DYHjSB.js";import"./index-SFb8YED0.js";import"./Separator-B5kuziys.js";import"./SelectionManager-etTWarXv.js";import"./useEvent-DAOaZ6v6.js";import"./scrollIntoView-BomYB8lz.js";import"./SelectionIndicator-CiUDKmaB.js";import"./useDescription-73K0p83_.js";import"./ListKeyboardDelegate-BLoDMx7u.js";import"./PressResponder-c074QkNe.js";import"./useLocalizedStringFormatter-BYVAgv0U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BLEprXuX.js";import"./VisuallyHidden-CJIG9rle.js";import"./Button-Dm5kz4rE.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-CMLQkYUH.js";import"./createLucideIcon-duiEOPcW.js";import"./x-CoXyzLMZ.js";import"./Heading-glCZ44Mw.js";import"./info-c0HBTqXD.js";import"./Popover-aDX4Z1ab.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
