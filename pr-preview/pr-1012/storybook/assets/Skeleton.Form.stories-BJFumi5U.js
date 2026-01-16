import{j as e,l}from"./iframe-C-bTQS5b.js";import{S as t}from"./Skeleton-B8FEQNhz.js";import{T as p}from"./TextField-CFkRszAn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bnb71XaA.js";import"./utils-BN4n3pVV.js";import"./TextField-BB4B8ySD.js";import"./FieldError-C20ZhlYT.js";import"./Text-Bor6iAR0.js";import"./useFocusRing-CnEIlzX4.js";import"./index-0H14NhtQ.js";import"./index-Cdo4-yyt.js";import"./Text-jh07sOT3.js";import"./RSPContexts-Dzh2LgXf.js";import"./Form-DyfKXbQx.js";import"./useFormValidation-BEi1mUsa.js";import"./Group-CwzsM6BS.js";import"./Input-DN322aqy.js";import"./Hidden-Cyhjgpq-.js";import"./Button-BaZzqN3-.js";import"./useLabels-BAE89oEy.js";import"./useButton-DzG_bmRJ.js";import"./useTextField-BejlpbaL.js";import"./useControlledState-De-wF9dR.js";import"./useField-DTo9M87M.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DavlJIZx.js";import"./Dialog-CpV7l1oB.js";import"./OverlayArrow-AcCh0_2A.js";import"./useResizeObserver-DSNbTo1E.js";import"./Collection-DJupDp9-.js";import"./index-B-jpAc1r.js";import"./Separator-CV1a4Byn.js";import"./SelectionManager-PaMbHRLL.js";import"./useEvent-zzI8eDEU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-YJhM_483.js";import"./useDescription-CP6yOtdD.js";import"./ListKeyboardDelegate-CQZdD3fG.js";import"./PressResponder-BNQ1tNC7.js";import"./useLocalizedStringFormatter-fekdwmGJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DgWtZEj0.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRZO2hdA.js";import"./Button-DUHsSslZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_i8rKrL.js";import"./createLucideIcon-DAQi76Bv.js";import"./x-CIXfz7i3.js";import"./Heading-CSE4Iek0.js";import"./info-cOXElt1d.js";import"./Popover-BXMWwqlC.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
