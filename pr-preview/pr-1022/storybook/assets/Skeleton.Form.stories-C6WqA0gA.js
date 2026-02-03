import{j as e,l}from"./iframe-Yd_3Uapz.js";import{S as t}from"./Skeleton-D7M0uw8F.js";import{T as p}from"./TextField-BSylrLk6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CCnCel-f.js";import"./utils-6lRm6Tee.js";import"./TextField-DqvcU0pp.js";import"./FieldError-nG5jWdlR.js";import"./Text-Ppy1xlW_.js";import"./useFocusRing-BXLc5uur.js";import"./index-7qq0zYgX.js";import"./index-BOW1adYN.js";import"./Text-B4Lb8X2G.js";import"./RSPContexts-E-uPdC6l.js";import"./Form-BaJRF_22.js";import"./useFormValidation-BuYW0ODW.js";import"./Group-CLHNLMIC.js";import"./Input-Bz7FdIS5.js";import"./Hidden-DV_FdnSF.js";import"./Button-CtSuRHbF.js";import"./useLabels-CBAQ5XKc.js";import"./useButton-BBbRN2vI.js";import"./useTextField-C0KmbMod.js";import"./useControlledState-CcJGCIAf.js";import"./useField-Cd_M8AeU.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DwXN3gXX.js";import"./Dialog-DCxYnSBo.js";import"./OverlayArrow-pz_JS7iH.js";import"./useResizeObserver-DQ0HlEBx.js";import"./Collection-DOCXhwSD.js";import"./index-CP2WQlQA.js";import"./Separator-C8Dl4hGC.js";import"./SelectionManager-pVgmciQy.js";import"./useEvent-DeXrWnv_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BrIFsEya.js";import"./useDescription-BugULMIn.js";import"./ListKeyboardDelegate-Cj2F-fBs.js";import"./PressResponder-BMmlZBha.js";import"./useLocalizedStringFormatter-I01atqXI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9aW9IZG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DlJI08Uo.js";import"./Button-r50ETdbi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-02LtWaa0.js";import"./createLucideIcon-BG79myAo.js";import"./x-CszsXm-U.js";import"./Heading-B7Kjgc7K.js";import"./info-BIlvkAIz.js";import"./Popover-DQNsucQI.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
