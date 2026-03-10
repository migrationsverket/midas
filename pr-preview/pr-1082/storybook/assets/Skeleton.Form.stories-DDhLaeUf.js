import{j as e,l}from"./iframe-CsxWE5EL.js";import{S as t}from"./Skeleton-dxcbqwqu.js";import{T as p}from"./TextField-Dxsptyp-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C210Cnmv.js";import"./utils-P0665-nd.js";import"./FieldError-A-GMFzj3.js";import"./Text-DUbIGWON.js";import"./useFocusRing-Dx7Mqj5I.js";import"./index-BAsiWoUz.js";import"./index-DKO6MG4x.js";import"./Text-3LyazC5v.js";import"./RSPContexts-DOv8Dn-z.js";import"./Form-BDEr0D_A.js";import"./useFormValidation-CrcNBzjy.js";import"./Group-BRkscI25.js";import"./Input-1DEsAORU.js";import"./Hidden-BqRB_zEB.js";import"./Button-CDY69ujX.js";import"./useLabels-h1mkGsRa.js";import"./useButton-BpMa8VN4.js";import"./useTextField-B_U5cObQ.js";import"./useControlledState-57nrhz75.js";import"./useField-qgzZoiS2.js";import"./TextField.module-DdivwlC8.js";import"./Label-C7IIDDt7.js";import"./Dialog-DKwgXXFo.js";import"./OverlayArrow-ChfjKiLu.js";import"./useResizeObserver-qJq3SY9_.js";import"./Collection-QyDzYr0n.js";import"./index-CNoJbepi.js";import"./Separator-C76nJCig.js";import"./SelectionManager-7GG-2FbB.js";import"./useEvent-Dd6OJrln.js";import"./scrollIntoView-MA0b_M3P.js";import"./SelectionIndicator-D79xjCK7.js";import"./useDescription-52SWgKDA.js";import"./ListKeyboardDelegate-D9S_djJW.js";import"./PressResponder-DWwJnZge.js";import"./useLocalizedStringFormatter-Z1dagDOh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tx7xcwso.js";import"./getScrollParent-pI-jvfbG.js";import"./VisuallyHidden-nLPm3Kol.js";import"./Button-yd2G3ZOl.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-P5TE6vXt.js";import"./createLucideIcon-CCm7dT8n.js";import"./x-4V_XJgsU.js";import"./Heading-Dzo7FbaI.js";import"./info-gv2Ig60z.js";import"./Popover-CET7FXjD.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
