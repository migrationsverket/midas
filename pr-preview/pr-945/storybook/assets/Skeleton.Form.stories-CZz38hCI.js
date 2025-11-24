import{j as e,l}from"./iframe-Cur_B9x6.js";import{S as t}from"./Skeleton-M7Pk7XDE.js";import{T as d}from"./TextField-DA28DmXK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CLm_o970.js";import"./utils-BHg8G-Z9.js";import"./TextField-DrkQI8bg.js";import"./FieldError-DnpHL-2i.js";import"./Text-QTfkrrvd.js";import"./useFocusRing-CRuZSqUo.js";import"./index-CTduu0cI.js";import"./index-CqyIpgV0.js";import"./Text-D7rZbanu.js";import"./RSPContexts-Cyp8LEBH.js";import"./Form-BGQST69-.js";import"./useFormValidation-bdXELRtu.js";import"./Group-DIFWClQa.js";import"./Input-D5GTKVFR.js";import"./Hidden-SFeirINQ.js";import"./Button-BeG5EWPQ.js";import"./useLabels-iG7AllCV.js";import"./useButton-DpJaITZj.js";import"./useTextField-DGYBO8st.js";import"./useControlledState-DxtyO0YE.js";import"./useField-V2skQNbm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CbJYWk6_.js";import"./Dialog-OJGHz4e9.js";import"./OverlayArrow-kdhbq-tl.js";import"./useResizeObserver-vym_1DSH.js";import"./Collection-B_d6wNNo.js";import"./index-BB6WX98C.js";import"./Separator-CWpxlPgY.js";import"./SelectionManager-wZNnkYvf.js";import"./useEvent-Clrc5ouE.js";import"./scrollIntoView-CsmGj11v.js";import"./SelectionIndicator-CcuU4sT1.js";import"./useDescription-C3Xbbjp6.js";import"./ListKeyboardDelegate-C7laatx8.js";import"./PressResponder-WwNUR1MY.js";import"./useLocalizedStringFormatter-bd-N5t6G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C9gbFImE.js";import"./VisuallyHidden-CNgGjdlH.js";import"./Button-D0lF0KE2.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CIxK5Ezl.js";import"./createLucideIcon-PM3bnbfq.js";import"./x-Cbbv-5j9.js";import"./Heading-CcG3dCOs.js";import"./info-vBy2wOK3.js";import"./Popover-B1ONg7yX.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
