import{j as e,l}from"./iframe-DHxMEyk6.js";import{S as t}from"./Skeleton-R3_PqseU.js";import{T as p}from"./TextField-BUjndzSa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CwwncDOD.js";import"./utils-C_yGkqEQ.js";import"./FieldError-C2Sc9U8m.js";import"./Text-C0s7dJ5a.js";import"./useFocusRing-BkOUJVy3.js";import"./index-BsabDiUe.js";import"./index-D8JeEhpq.js";import"./Text-CSs2JSPr.js";import"./RSPContexts-xSY5mLjc.js";import"./Form-BSJcOZpD.js";import"./Group-BjRO1dfk.js";import"./Input-DpbKxiDC.js";import"./Hidden-CkZgcLGH.js";import"./Button-BpC7kCwC.js";import"./useLabel-BTR3XuI0.js";import"./useLabels-Yo5aFm_3.js";import"./useButton-Br-Hv-S3.js";import"./useTextField-RCL-8rD7.js";import"./useControlledState-DToB7jqX.js";import"./useField-C7HbmUXj.js";import"./TextField.module-DdivwlC8.js";import"./Label-DQd7EZ-D.js";import"./Dialog-DHWoKmMp.js";import"./OverlayArrow-DEbxoFZ7.js";import"./useResizeObserver-D7DQf7l-.js";import"./Collection-BN9__hjp.js";import"./index-DG8_ZRly.js";import"./Separator-YeRgmhmU.js";import"./SelectionManager-zlWcTFKf.js";import"./useEvent-D9bVVAaY.js";import"./scrollIntoView-Cwf4WFKd.js";import"./SelectionIndicator-B1SEN247.js";import"./useDescription-BbVhVBC-.js";import"./ListKeyboardDelegate-hIKANMJz.js";import"./PressResponder-DIfR31-k.js";import"./useLocalizedStringFormatter-DWzf9Q6R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CVkPTCT8.js";import"./getScrollParent-Cb_GBxXJ.js";import"./VisuallyHidden-oG0E9KZu.js";import"./Modal-DRJAq7kg.js";import"./x-BasF0MYi.js";import"./createLucideIcon-uDhXojJY.js";import"./useLocalizedStringFormatter-C4FoF24Q.js";import"./Heading-Clo58xYm.js";import"./Button-DTaKScGa.js";import"./Button.module-BB7N-cLd.js";import"./info-BxNSSHO4.js";import"./Popover-Ju86AZEg.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
