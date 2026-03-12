import{j as e,l}from"./iframe-BaJYC4hW.js";import{S as t}from"./Skeleton-PE_fT4PX.js";import{T as p}from"./TextField-BeAx7i4M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D3CHilz_.js";import"./utils-CV_LYzzD.js";import"./FieldError-GCWNqEfA.js";import"./Text-Nc4TUeua.js";import"./useFocusRing-GVDVIwTN.js";import"./index-DOOXPPqc.js";import"./index-C6g9yftp.js";import"./Text-x8DptRje.js";import"./RSPContexts-CIUsqnNZ.js";import"./Form-Boa4uwor.js";import"./useFormValidation-BMvqAl64.js";import"./Group-DJ1ATq43.js";import"./Input-DkgzsVUD.js";import"./Hidden-DlyKOOC9.js";import"./Button-MJDkUy4E.js";import"./useLabels-0RFifNrF.js";import"./useButton-CbZN5rLr.js";import"./useTextField-CpF8VCOt.js";import"./useControlledState-Du80Dryz.js";import"./useField-DXKisOI4.js";import"./TextField.module-DdivwlC8.js";import"./Label-DnUotgag.js";import"./Dialog-CWIpoAXJ.js";import"./OverlayArrow-CTMw4k8R.js";import"./useResizeObserver-Do18AYBG.js";import"./Collection-BoKZxKVw.js";import"./index-D1wpFRTD.js";import"./Separator-BTXMi4mI.js";import"./SelectionManager-BASpGvsc.js";import"./useEvent-BWCZrvaR.js";import"./scrollIntoView-UyFo11w1.js";import"./SelectionIndicator-Cuj5Ukeh.js";import"./useDescription-DRlONNEs.js";import"./ListKeyboardDelegate-Du9U_2I9.js";import"./PressResponder-C74Ch0Px.js";import"./useLocalizedStringFormatter-D3VNkE2Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BBub105m.js";import"./getScrollParent-CQuJqaKr.js";import"./VisuallyHidden-D97yOK8y.js";import"./x-BqrUYLd-.js";import"./createLucideIcon-1N_QsJVR.js";import"./useLocalizedStringFormatter-BpY-3ExX.js";import"./Heading-BUeT4e7x.js";import"./Button-CGkZxjHk.js";import"./Button.module-D_C6WeTN.js";import"./info-DEzfTWv0.js";import"./Popover-D3YB1_OK.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
