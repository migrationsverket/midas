import{j as e,l}from"./iframe-NQwQ8Ipc.js";import{S as t}from"./Skeleton-zPxrLDKX.js";import{T as p}from"./TextField-9l_g2tlH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-o1bahDXt.js";import"./utils-CagmBR4h.js";import"./TextField-BRX9y51P.js";import"./FieldError-aq8gcakB.js";import"./Text-C_uAOKRC.js";import"./useFocusRing-ChWSchxP.js";import"./index-D5MLpHUU.js";import"./index-Cvu387iz.js";import"./Text-YxgCEkkP.js";import"./RSPContexts-BtehIcvf.js";import"./Form-xiO26wzP.js";import"./useFormValidation-C3YSdpOu.js";import"./Group-GgoDtfVb.js";import"./Input-C1NaQe7T.js";import"./Hidden-CMhcaOTC.js";import"./Button-BD9SwyBt.js";import"./useLabels-B0KRHn3k.js";import"./useButton-CEbDpz1S.js";import"./useTextField-CIuWwWbd.js";import"./useControlledState-C5kK2k2z.js";import"./useField-Dfen7gtH.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DU1KZilr.js";import"./Dialog-B1XSLwxn.js";import"./OverlayArrow-DbAqa-xg.js";import"./useResizeObserver-Bf2XUjIv.js";import"./Collection-CgH9y7rA.js";import"./index-BoF2Q7cm.js";import"./Separator-BMs47c8O.js";import"./SelectionManager-CF8t7v__.js";import"./useEvent-zLeWJTeo.js";import"./scrollIntoView-BHqusxUp.js";import"./SelectionIndicator-BaEmZcqu.js";import"./useDescription-Dgt-8WJE.js";import"./ListKeyboardDelegate-BPHDB0oM.js";import"./PressResponder-CU_iIlAi.js";import"./useLocalizedStringFormatter-Cw0M4ILW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DOXk8-VT.js";import"./VisuallyHidden-DcGuHUr7.js";import"./Button-CDPGYKZu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5C2l5IJ.js";import"./createLucideIcon-pmY9-a6l.js";import"./x-BAa2SIzJ.js";import"./Heading-MJ45rYTR.js";import"./info-CThQYv_2.js";import"./Popover-DZXAIx4I.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
