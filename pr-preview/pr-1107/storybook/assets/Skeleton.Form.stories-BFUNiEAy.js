import{j as e,l}from"./iframe-Bf1Ah5rB.js";import{S as t}from"./Skeleton-jTMwUbJS.js";import{T as p}from"./TextField-B1-vZgbG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DvMEtK8_.js";import"./utils-DXJEO7_N.js";import"./FieldError-BasXWSrV.js";import"./Text-BHf7sfPg.js";import"./useFocusRing-DSdU7aAS.js";import"./index-Dbyil8jF.js";import"./index-CF1c_2Pb.js";import"./Text-DhXeS_DS.js";import"./RSPContexts-kOrZQZ_t.js";import"./Form-CPG4PSsf.js";import"./useFormValidation-ywlfRHkn.js";import"./Group-CgNi-4KH.js";import"./Input-CZCBYimv.js";import"./Hidden-Cbiq0OqP.js";import"./Button-CnYQaxyi.js";import"./useLabels-B4_UAfBy.js";import"./useButton-DSIJ1kYo.js";import"./useTextField-ZWCNtOR-.js";import"./useControlledState-C7EdL_Lb.js";import"./useField-DVUjy4Hh.js";import"./TextField.module-DdivwlC8.js";import"./Label-CT4kdzOW.js";import"./Dialog-DMo2WVxs.js";import"./OverlayArrow-D4fzUYmv.js";import"./useResizeObserver-CLqob_Ia.js";import"./Collection-CeaFj-zL.js";import"./index-BkrJk2hY.js";import"./Separator-CYB-nHSA.js";import"./SelectionManager-CfAasErd.js";import"./useEvent-BxaPwLOP.js";import"./scrollIntoView-GI-dTWRJ.js";import"./SelectionIndicator-CnH_HEy_.js";import"./useDescription-CpnzDPEn.js";import"./ListKeyboardDelegate-57vVEhHE.js";import"./PressResponder-9r-iyqIh.js";import"./useLocalizedStringFormatter-tsrFn-Jf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ELYvfrXm.js";import"./getScrollParent-BUiYsgTc.js";import"./VisuallyHidden-CeYEhVtC.js";import"./x-DLmn2Tbc.js";import"./createLucideIcon-upfVu1an.js";import"./useLocalizedStringFormatter-8eSi0SDt.js";import"./Heading-BE9Oh088.js";import"./Button-BY8ZqICl.js";import"./Button.module-D_C6WeTN.js";import"./info-CMvclEBg.js";import"./Popover-B4bekajS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
