import{j as e,l}from"./iframe-0ay5Cl7Z.js";import{S as t}from"./Skeleton-DOmJ91Xb.js";import{T as p}from"./TextField-Dohqj4uN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2mNoQBB.js";import"./utils-OwhIF6Yv.js";import"./useObjectRef-DG4zbPWe.js";import"./FieldError-BsAQJ2uy.js";import"./Text-DfthMNVx.js";import"./useFocusRing-BCxb_ufh.js";import"./useFocusable-B634M_Fb.js";import"./index-9qv7Fem8.js";import"./index-U-aVmNqW.js";import"./Text-BGuljUD0.js";import"./RSPContexts-CAeNAO0k.js";import"./Form-U_9riSua.js";import"./useFormValidation-Cy5tbrL6.js";import"./Group-BpsT-UME.js";import"./Input-CGiKSPDo.js";import"./Hidden-BzPJJaE1.js";import"./Button-DxAruj7U.js";import"./number-DfkVkf0F.js";import"./useLabels-BQsB-eC9.js";import"./useButton-Dk5PjSpe.js";import"./useTextField-BqqX8DDI.js";import"./useControlledState-BZfBuZ3A.js";import"./useField-DyriZxff.js";import"./TextField.module-DdivwlC8.js";import"./Label-BEvqZhj3.js";import"./Dialog-CsrRoGz5.js";import"./OverlayArrow-EcjdagTC.js";import"./useResizeObserver-DERZdo11.js";import"./Collection-DvvkxIOw.js";import"./CollectionBuilder-BTJH7Kto.js";import"./index-Dfbi8MRN.js";import"./Separator-hQ70M9LX.js";import"./SelectionManager-Cp7KGgYq.js";import"./useEvent-5vUs9lWK.js";import"./scrollIntoView-DBszQ3_a.js";import"./SelectionIndicator-zqXirjR8.js";import"./useDescription-f161JRhm.js";import"./ListKeyboardDelegate-vxkeYpMQ.js";import"./PressResponder-4fh9PZSY.js";import"./useLocalizedStringFormatter-Bev7EFEw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-MDYFQ4gP.js";import"./getScrollParent-Bg5c39wC.js";import"./VisuallyHidden-DQAFa958.js";import"./Button-C9_6wCAg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CA3dvWhn.js";import"./createLucideIcon-C-V0PVLC.js";import"./x-CV-T8NX-.js";import"./Heading-CLuq4JDV.js";import"./info-BX7F8BJn.js";import"./Popover-MJVDCkTa.js";const xe={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,fe as __namedExportsOrder,xe as default};
