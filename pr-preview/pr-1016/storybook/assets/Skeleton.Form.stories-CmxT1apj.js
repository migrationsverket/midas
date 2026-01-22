import{j as e,l}from"./iframe-fyvob5pV.js";import{S as t}from"./Skeleton-jOMTVox3.js";import{T as p}from"./TextField-B6QHNmBj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dvth7xaC.js";import"./utils-ZHg57NPT.js";import"./TextField-C1gEGKcH.js";import"./FieldError-_70I33O6.js";import"./Text-DgXAg_jZ.js";import"./useFocusRing-CefW_QDX.js";import"./index-DeYDX39H.js";import"./index-YdXWAPci.js";import"./Text-DkAg-CHN.js";import"./RSPContexts-CFyQYNsz.js";import"./Form-x2mvhheS.js";import"./useFormValidation-DqszraAo.js";import"./Group-C0-Hv0oL.js";import"./Input-DNZDGi31.js";import"./Hidden-BUh53Qty.js";import"./Button-Cg4ndPMc.js";import"./useLabels-De8j202R.js";import"./useButton-BWNkf0-B.js";import"./useTextField-DqAaCvYO.js";import"./useControlledState-3Trks7iT.js";import"./useField-2PAzhLbD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B2UNVC5N.js";import"./Dialog-DMOav4NC.js";import"./OverlayArrow-B5QqyFHq.js";import"./useResizeObserver-da6VNBuq.js";import"./Collection-B71LPDM_.js";import"./index-Y2Or3rvv.js";import"./Separator-f5I0JjZ6.js";import"./SelectionManager-CeD3aTpx.js";import"./useEvent-JeGL7mSw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjORemxc.js";import"./useDescription-BEPPLOWX.js";import"./ListKeyboardDelegate-CNox7fi5.js";import"./PressResponder-vS2tGprJ.js";import"./useLocalizedStringFormatter-C-nDJOl1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-anbmUjdE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B4V5xJ__.js";import"./Button-CyxqdNO0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CN8LIDfv.js";import"./createLucideIcon-nzmbSsyS.js";import"./x-vbaUtfu9.js";import"./Heading-Bbo5K6Vi.js";import"./info-C2P6cAg_.js";import"./Popover-BQVIFuBN.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
