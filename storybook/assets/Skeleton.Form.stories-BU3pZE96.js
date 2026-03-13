import{j as e,l}from"./iframe-Bj3rykqq.js";import{S as t}from"./Skeleton-DlL1-qJd.js";import{T as p}from"./TextField-Bf7p-Uet.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DGbvJ0HP.js";import"./utils-BPR6QYXC.js";import"./FieldError-CGmgGZmu.js";import"./Text-D5Hv1XGK.js";import"./useFocusRing-C7uadSDO.js";import"./index-Cayhktc8.js";import"./index-CnCGQqbA.js";import"./Text-DPxIPb0k.js";import"./RSPContexts-Cy2kM2_o.js";import"./Form-Dizw0pBP.js";import"./useFormValidation-CYMzGIyK.js";import"./Group-DMknLoGk.js";import"./Input-Brwhl1LE.js";import"./Hidden-H2J0AFM4.js";import"./Button-BY6aKs9R.js";import"./useLabels-C9jhOE8d.js";import"./useButton-5QuuU98A.js";import"./useTextField-BEFy2JUH.js";import"./useControlledState-RfhzWKsJ.js";import"./useField-BMzGe7LS.js";import"./TextField.module-DdivwlC8.js";import"./Label-bvwpiHl9.js";import"./Dialog-CDz5q8XN.js";import"./OverlayArrow-BPwbOk4G.js";import"./useResizeObserver-D9o13XW_.js";import"./Collection-Cj9-B7W9.js";import"./index-BC12g_-D.js";import"./Separator-myLEeVCT.js";import"./SelectionManager-BkdSTgS9.js";import"./useEvent-Z7oo2rlc.js";import"./scrollIntoView-GIX096WN.js";import"./SelectionIndicator-DW_78Rrm.js";import"./useDescription-DOgLYOne.js";import"./ListKeyboardDelegate-CIZwYtIR.js";import"./PressResponder-CBnYRDYm.js";import"./useLocalizedStringFormatter-B6y89RBX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzEmLsjx.js";import"./getScrollParent-B0dYpp2l.js";import"./VisuallyHidden-DZrJwb84.js";import"./x-BjCQEpYP.js";import"./createLucideIcon-CZGOASFZ.js";import"./useLocalizedStringFormatter-B96CwRWL.js";import"./Heading-SaNHDBgy.js";import"./Button-DJUV-Oif.js";import"./Button.module-D_C6WeTN.js";import"./info-B6mPVH9Q.js";import"./Popover-BybWTMpG.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
