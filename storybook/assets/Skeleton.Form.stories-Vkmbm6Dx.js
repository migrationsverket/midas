import{j as e,l}from"./iframe-CfD08JHH.js";import{S as t}from"./Skeleton-64tJIHDy.js";import{T as p}from"./TextField-BLjUIINY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D6mqH5hz.js";import"./utils-D9GPP0o0.js";import"./FieldError-BgTli7tr.js";import"./Text-CrZg_N--.js";import"./useFocusRing-DbZlBvT3.js";import"./index-CkGKPUJ7.js";import"./index-Bb2OgbnK.js";import"./Text-DobS2R06.js";import"./RSPContexts-DzlmE6Vu.js";import"./Form-CxynQJgr.js";import"./useFormValidation-D39AauB2.js";import"./Group-BNmld_Hb.js";import"./Input-XoVK4P3y.js";import"./Hidden-_wiLvPg0.js";import"./Button-CxMmpQq_.js";import"./useLabels-B8yJmO2W.js";import"./useButton-BtewcnCZ.js";import"./useTextField-pzmZVcRA.js";import"./useControlledState-qZuV6rTK.js";import"./useField-C6N5VUN_.js";import"./TextField.module-DdivwlC8.js";import"./Label-DaHUe__s.js";import"./Dialog-BuZ5e6rP.js";import"./OverlayArrow-BAY2ltM6.js";import"./useResizeObserver-wbkaKojC.js";import"./Collection-CIMmwsxn.js";import"./index-cRxFTsXn.js";import"./Separator-CFJjpTXb.js";import"./SelectionManager-jZG-N2MR.js";import"./useEvent-CFcLw1G-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFhcN9II.js";import"./useDescription-M-hiH2ur.js";import"./ListKeyboardDelegate-B6JGmauI.js";import"./PressResponder-BhAyL_vF.js";import"./useLocalizedStringFormatter-BtUZDJNi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rvKxZqVA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CyIL-gS9.js";import"./Button-BDhh5PYr.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DgtxZ7Zy.js";import"./createLucideIcon-DPrY6SpC.js";import"./x-BxwHOpJf.js";import"./Heading-COjECUAj.js";import"./info-DhtIJPz_.js";import"./Popover-u78J-cP8.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
