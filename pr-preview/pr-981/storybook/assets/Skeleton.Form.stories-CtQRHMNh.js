import{j as e,l}from"./iframe-DBywrjRl.js";import{S as t}from"./Skeleton-6TlaUnQU.js";import{T as p}from"./TextField-DY4x6tse.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-lZYEVJWf.js";import"./utils-C-8jxnFS.js";import"./TextField-DV7S8_x2.js";import"./FieldError-BNQQruOL.js";import"./Text-D38z605_.js";import"./useFocusRing-CGlcWS9k.js";import"./index-Cpu-cEhv.js";import"./index-P3BrwvSu.js";import"./Text-C5neFPa3.js";import"./RSPContexts-CZ2dorfb.js";import"./Form-BGMUpMH5.js";import"./useFormValidation-DPDjlvP6.js";import"./Group-Bmvs1NkM.js";import"./Input-Dw0YJtdA.js";import"./Hidden-79NJLlf0.js";import"./Button-D_E0QrGY.js";import"./useLabels-DRimalMh.js";import"./useButton-B7cADDRU.js";import"./useTextField-B8pznWe6.js";import"./useControlledState-CHDzfq-U.js";import"./useField-gVPT3IMc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CdBS-jC6.js";import"./Dialog-BDl78Vuv.js";import"./OverlayArrow-oyFXlDLr.js";import"./useResizeObserver-CkCBTxIL.js";import"./Collection-5AgW_aoK.js";import"./index-DRE7QTp1.js";import"./Separator-yjBlW27q.js";import"./SelectionManager-DiyyYEzW.js";import"./useEvent-9QG8B8xJ.js";import"./scrollIntoView-DPAZbUL2.js";import"./SelectionIndicator-kuF2SRU2.js";import"./useDescription-BkB7oLNC.js";import"./ListKeyboardDelegate-BQyLRtPA.js";import"./PressResponder-sWsumx_-.js";import"./useLocalizedStringFormatter-CSTI3d-a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DnWvmp_C.js";import"./VisuallyHidden-jGgGT3kZ.js";import"./Button-CSQaj_XW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-x3VZR5IH.js";import"./createLucideIcon-DLAcgX9Y.js";import"./x-CMTwpFUB.js";import"./Heading-rY-wDdYP.js";import"./info-D4TVZB6L.js";import"./Popover-CvPJ9zn-.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
