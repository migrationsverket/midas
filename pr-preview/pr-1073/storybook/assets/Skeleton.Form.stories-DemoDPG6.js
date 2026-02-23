import{j as e,l}from"./iframe-CeCAp685.js";import{S as t}from"./Skeleton-Zms2qCVc.js";import{T as p}from"./TextField-B8u_Ml2Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-l7vfEecd.js";import"./utils-COZ-VSjk.js";import"./FieldError-aZ4tQBIh.js";import"./Text-OHvhFpdo.js";import"./useFocusRing-Bh0QYcZA.js";import"./index-NSorO2Ba.js";import"./index-BRisY6m3.js";import"./Text-BD2V775c.js";import"./RSPContexts-CyFxiidX.js";import"./Form-ClAmGACA.js";import"./useFormValidation-C4KFIaMR.js";import"./Group-DYloaGPs.js";import"./Input-BcrF7prZ.js";import"./Hidden-DL0LnJvP.js";import"./Button-0wuCXx93.js";import"./useLabels-Dg5MFTni.js";import"./useButton-MOpcSjMV.js";import"./useTextField-B1f4LkBQ.js";import"./useControlledState-Dps_NbAf.js";import"./useField-B0v1Y4ts.js";import"./TextField.module-B0rcsDrm.js";import"./Label-b1aLL6HQ.js";import"./Dialog-SD2XHtbf.js";import"./OverlayArrow-BbkrtxzH.js";import"./useResizeObserver-B3cttXhP.js";import"./Collection-KDzXr54v.js";import"./index-BAAd046U.js";import"./Separator-Dd_YeU7-.js";import"./SelectionManager-0GA5VoNT.js";import"./useEvent-teEO8Cf_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D8WnGrhr.js";import"./useDescription-B3frf935.js";import"./ListKeyboardDelegate-vJRFFTIb.js";import"./PressResponder-DLEVeqMj.js";import"./useLocalizedStringFormatter-DDDWDqSE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFJVtK1g.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C9bjb32j.js";import"./Button-DO76dX9X.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiwTvhuf.js";import"./createLucideIcon-DSHxLsIU.js";import"./x-D2ttmjes.js";import"./Heading-B4mtSUFj.js";import"./info-Dm45ywBv.js";import"./Popover-CxKoBaBv.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
