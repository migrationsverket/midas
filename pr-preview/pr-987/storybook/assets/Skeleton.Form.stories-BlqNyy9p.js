import{j as e,l}from"./iframe-C6_-e7NK.js";import{S as t}from"./Skeleton-BcXMfXk1.js";import{T as p}from"./TextField-B7xZhFfx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-1k_zZwRr.js";import"./utils-Bbmqvbo3.js";import"./TextField-OQJHmuSn.js";import"./FieldError-DV33LILC.js";import"./Text-F1WQVY7m.js";import"./useFocusRing-BXSkyUM9.js";import"./index-DPxO6KUo.js";import"./index-Bwwn4N2G.js";import"./Text-DRnoGrtX.js";import"./RSPContexts-Bh1Fxq0q.js";import"./Form-V3kbBiWO.js";import"./useFormValidation-CMpXllZv.js";import"./Group-Dox46yMc.js";import"./Input-DB7DdrWq.js";import"./Hidden-BPDqmKbL.js";import"./Button-CdXu0ILf.js";import"./useLabels-JWkxwXER.js";import"./useButton-BMxkS-67.js";import"./useTextField-BcFXVHGn.js";import"./useControlledState--v8NGJnX.js";import"./useField-DP5dlwby.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C_kXs5BT.js";import"./Dialog-BwhCXn8z.js";import"./OverlayArrow-8UZhrLZD.js";import"./useResizeObserver-DBBABA7S.js";import"./Collection-BCEQyPRW.js";import"./index-BOUigGyV.js";import"./Separator-DpbotVHq.js";import"./SelectionManager-CMrFD8ch.js";import"./useEvent-CioOrUcI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DrCpW3qH.js";import"./useDescription-fi3Mvgag.js";import"./ListKeyboardDelegate-BcVPg-Er.js";import"./PressResponder-BBEZd6RW.js";import"./useLocalizedStringFormatter-D7bjjg4_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yxJB0HZv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BCTu162M.js";import"./Button-DxcAJTpN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-FHnrTC9O.js";import"./createLucideIcon-D6PH1BXQ.js";import"./x-KVb9IDQ9.js";import"./Heading-B_mxpdS_.js";import"./info-BYbh7dqa.js";import"./Popover-wRopwrAm.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
