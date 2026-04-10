import{j as e,l}from"./iframe-DbRIiPJf.js";import{S as t}from"./Skeleton-BZX9lg6e.js";import{T as p}from"./TextField-DNIaPRlZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DcjElkhJ.js";import"./utils-CylrHtqj.js";import"./FieldError-BlTKrD9e.js";import"./Text-Bl7omTF2.js";import"./useFocusRing-CzsT9eqz.js";import"./index-CWx_6wJr.js";import"./index-CYF8mrWB.js";import"./Text-BWzS2USX.js";import"./RSPContexts-RxxWGpWl.js";import"./Form-DKNQStX3.js";import"./Group-C_ZA0uHw.js";import"./Input-DBUD3kdX.js";import"./Hidden-CLmG6Qjv.js";import"./Button-Bu-vq5J8.js";import"./useLabel-D5V8M1AU.js";import"./useLabels-CWkCWE-a.js";import"./useButton-ydqzzVJH.js";import"./useTextField-Fl3Oq0YZ.js";import"./useControlledState-CkgwQtqz.js";import"./useField-Dc--rdEY.js";import"./TextField.module-DdivwlC8.js";import"./Label-B0PLsM6Z.js";import"./Dialog-D_2eTWHX.js";import"./OverlayArrow-Cdun6Sbd.js";import"./useResizeObserver-CSdE0Caq.js";import"./Collection-B4ubqx70.js";import"./index-BZFoeM-h.js";import"./Separator-D4uDxJfh.js";import"./SelectionManager-DTAr5YEZ.js";import"./useEvent-BDJFflUb.js";import"./scrollIntoView-DyOkJKzq.js";import"./SelectionIndicator-D8qE1ns6.js";import"./useDescription-o_hCOQgG.js";import"./ListKeyboardDelegate-B3d6mxcZ.js";import"./PressResponder-DBZgubCT.js";import"./useLocalizedStringFormatter-BhEsaq13.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BgBqCX5B.js";import"./getScrollParent-B52noiPs.js";import"./VisuallyHidden-OjEI7nCv.js";import"./Dialog-CBm6AzQl.js";import"./x-gq1nGzx6.js";import"./createLucideIcon-DWTxx8ko.js";import"./useLocalizedStringFormatter-Bz5dx8x0.js";import"./Heading-VhFSBXsH.js";import"./Button-ClLfQI_I.js";import"./Button.module-BB7N-cLd.js";import"./info-BYtc9nMD.js";import"./Popover-C6o3sMeS.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
