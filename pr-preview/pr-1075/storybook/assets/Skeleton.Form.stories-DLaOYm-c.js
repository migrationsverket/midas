import{j as e,l}from"./iframe-DTgf2yWr.js";import{S as t}from"./Skeleton-Ce9v0e7s.js";import{T as p}from"./TextField-D4lc5I6K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C-mDr_lL.js";import"./utils-DzwNYuTN.js";import"./FieldError-D0N2b3Uz.js";import"./Text-bWE3sRjS.js";import"./useFocusRing-CP7gcATu.js";import"./index-vkqPEYc_.js";import"./index-BH-DXcRM.js";import"./Text-BnRqnZ91.js";import"./RSPContexts-B_H1Uz4-.js";import"./Form-CxvCqnnD.js";import"./useFormValidation-Bjsb6Uuq.js";import"./Group-DtHBNqvy.js";import"./Input-BmLtWtA-.js";import"./Hidden-CB9dI_i8.js";import"./Button-DsiJh3rg.js";import"./useLabels-BOW8HuY_.js";import"./useButton-C1yhLz7X.js";import"./useTextField-Ca-oLaHa.js";import"./useControlledState-SjDZU1Af.js";import"./useField-CIGO5Ju_.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bkfg9EaC.js";import"./Dialog-BWOoWvA2.js";import"./OverlayArrow-BOY7m4yS.js";import"./useResizeObserver-BEv_VwN-.js";import"./Collection-C0O46JBs.js";import"./index-BLfu4a51.js";import"./Separator-CtW0zblt.js";import"./SelectionManager-xfeP_COB.js";import"./useEvent-DuxHD3US.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CcmcrDmB.js";import"./useDescription-Bv7lMAxy.js";import"./ListKeyboardDelegate-bR_oZAxF.js";import"./PressResponder-CCQ2ymDO.js";import"./useLocalizedStringFormatter-DNR4J-Wr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DWaJ-2B4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DLhSHTT7.js";import"./Button-ni8lscHZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDsobOj3.js";import"./createLucideIcon-D9vwcDME.js";import"./x-Dr1VccyY.js";import"./Heading-BBS5QCZB.js";import"./info-ChOzVc1T.js";import"./Popover-KtTwqxdv.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
