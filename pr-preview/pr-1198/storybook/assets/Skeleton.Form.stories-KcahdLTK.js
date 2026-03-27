import{j as e,l}from"./iframe-BUTiSP7z.js";import{S as t}from"./Skeleton-mMdgHWZz.js";import{T as p}from"./TextField-8C4VLY5L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2DE6_OA.js";import"./utils-BgvO5RRu.js";import"./FieldError-CYEkkCc9.js";import"./Text-D5N8Dzak.js";import"./useFocusRing-Ba-KD3wP.js";import"./index-xHN4e2Es.js";import"./index-DtSReIsm.js";import"./Text-LYM_b1_z.js";import"./RSPContexts-DLLJ83nY.js";import"./Form-B4-dBuGl.js";import"./Group-CR6JA3qy.js";import"./Input-45D5XBuv.js";import"./Hidden-ByRZ-jrH.js";import"./Button-Bo24jbF_.js";import"./useLabel-DayWlGa1.js";import"./useLabels-BFR96MD7.js";import"./useButton-DroPnLuM.js";import"./useTextField-qftoGqFa.js";import"./useControlledState-BxwH6ylP.js";import"./useField-I3F-HNPn.js";import"./TextField.module-DdivwlC8.js";import"./Label-DC1bcPJ1.js";import"./Dialog-BFNQg584.js";import"./OverlayArrow-BzQ4rdrs.js";import"./useResizeObserver-Cmuu9av7.js";import"./Collection-DeFuXwuS.js";import"./index-tTPz6UBg.js";import"./Separator-BWfRG8h5.js";import"./SelectionManager-Brl3pYHf.js";import"./useEvent-2q7qEvPm.js";import"./scrollIntoView-BjuxrAKf.js";import"./SelectionIndicator-DqHv8nAD.js";import"./useDescription-D2qADDFs.js";import"./ListKeyboardDelegate-B0dCPn5_.js";import"./PressResponder-BuSeeOio.js";import"./useLocalizedStringFormatter-PGtNsfZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D4tSn6Fc.js";import"./getScrollParent-UEEitPqy.js";import"./VisuallyHidden-xIEwbCvt.js";import"./x-BTgbWRg1.js";import"./createLucideIcon-hh9ZE-Di.js";import"./useLocalizedStringFormatter-D6S3a2W6.js";import"./Heading-DNFpWkEI.js";import"./Button-Ktwig2Cy.js";import"./Button.module-BB7N-cLd.js";import"./info-CN1KOzbn.js";import"./Popover-B0aqqU3A.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
