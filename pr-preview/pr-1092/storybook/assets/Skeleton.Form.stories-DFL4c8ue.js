import{j as e,l}from"./iframe-C_rSI28S.js";import{S as t}from"./Skeleton-DzNV4VVY.js";import{T as p}from"./TextField-BF4btheT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cw-inrUa.js";import"./utils-B9fitk-d.js";import"./FieldError-B2EZQXDz.js";import"./Text-C0Ky8cuO.js";import"./useFocusRing-1c7-b3IG.js";import"./index-D-oq6Wi4.js";import"./index-DhVgnvLi.js";import"./Text-D8Oj8wTT.js";import"./RSPContexts-CccBVtRj.js";import"./Form-cbeWN56Y.js";import"./useFormValidation-JyWYvn9r.js";import"./Group-BiTB_Ifj.js";import"./Input-D9Y0N6wl.js";import"./Hidden-DkMo9DJh.js";import"./Button-BZMldgT_.js";import"./useLabels-BB_4cBjW.js";import"./useButton-BJxdkC7q.js";import"./useTextField-BLjqu1CJ.js";import"./useControlledState-Bu5qipFz.js";import"./useField-Be67gG5q.js";import"./TextField.module-DdivwlC8.js";import"./Label-c80iETpH.js";import"./Dialog-DMbz8tWh.js";import"./OverlayArrow-GDHlNZL-.js";import"./useResizeObserver-CLjwbffR.js";import"./Collection-DQPpNpIp.js";import"./index-CMNlANvy.js";import"./Separator-DseIPh_7.js";import"./SelectionManager-OOYxevrX.js";import"./useEvent-Bpac53ZB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C8GAWl4j.js";import"./useDescription-w-LKIPXs.js";import"./ListKeyboardDelegate-D1l7F5b-.js";import"./PressResponder-DbjOz25Q.js";import"./useLocalizedStringFormatter-CS1E0pV3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CALY2agj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DjxO6q8B.js";import"./Button-DfJo8lJp.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-iM29cO5J.js";import"./createLucideIcon-DJNcDtcF.js";import"./x-Bm_2sjYb.js";import"./Heading-BD3WCdNS.js";import"./info-o1XDVXkp.js";import"./Popover-BpG9x7Y0.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
