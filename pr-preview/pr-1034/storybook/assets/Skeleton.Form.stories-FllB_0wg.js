import{j as e,l}from"./iframe-BDLZKJUa.js";import{S as t}from"./Skeleton-orsM4T8x.js";import{T as p}from"./TextField-CYj8Xfrx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DmGyAZnd.js";import"./utils-BN5a6ONf.js";import"./TextField-DOeCnMuo.js";import"./FieldError-CQnsXSuf.js";import"./Text-6K4677wX.js";import"./useFocusRing-B5FtCOQQ.js";import"./index-BCWLJOvr.js";import"./index-DfTmM_Vy.js";import"./Text-DDCBPVqL.js";import"./RSPContexts-Da5lgWhk.js";import"./Form-DSI4EmM7.js";import"./useFormValidation-DTB8faqq.js";import"./Group-BIiGizVe.js";import"./Input-DUYnuxQ7.js";import"./Hidden-U_iFDsIn.js";import"./Button-C9Vdx1Sb.js";import"./useLabels-BQwmeXXN.js";import"./useButton-BOuekyb0.js";import"./useTextField-V_xpj0z0.js";import"./useControlledState-CBybevG0.js";import"./useField-CuQudl8J.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BlaegGMT.js";import"./Dialog-D7Es1WGH.js";import"./OverlayArrow-QNfjNgOu.js";import"./useResizeObserver-VvJt-x1H.js";import"./Collection-Ctbsu1Ee.js";import"./index-DDU-vaR7.js";import"./Separator-xkqDT2LV.js";import"./SelectionManager-BY3loXtx.js";import"./useEvent-uVAMedq9.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqeOPuev.js";import"./useDescription-C_6bjMde.js";import"./ListKeyboardDelegate-BkFW1SaD.js";import"./PressResponder-D5MifUCz.js";import"./useLocalizedStringFormatter-grQ0fku2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B63-4vFi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C2Ytvwha.js";import"./Button-BBKL1eD8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-00J5Ylgv.js";import"./createLucideIcon-1UHjhtvK.js";import"./x--FAB3bcS.js";import"./Heading-Bk2nMs7M.js";import"./info-KDp5-baz.js";import"./Popover-XETSsvY6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
