import{j as e,l}from"./iframe-CSEJNTkK.js";import{S as t}from"./Skeleton-DsEMo9SX.js";import{T as p}from"./TextField-5boWETKa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DBInooza.js";import"./utils-DeJFKvWK.js";import"./FieldError-H0rNPMcB.js";import"./Text-D9jZWUtn.js";import"./useFocusRing-DrHJkNXb.js";import"./index-D143hsf1.js";import"./index-BMO83btm.js";import"./Text-BZVryx1n.js";import"./RSPContexts-zt9dEm9A.js";import"./Form-CVVOpC8n.js";import"./useFormValidation-87lR2aCk.js";import"./Group-MAMmxmJQ.js";import"./Input-1qwjsdE2.js";import"./Hidden-UvxDhw7H.js";import"./Button-C9VKeO5Q.js";import"./useLabels-BgO5uamo.js";import"./useButton-BhgtOeCo.js";import"./useTextField-C0CKpIct.js";import"./useControlledState-B4wBbeGG.js";import"./useField-CAM1ffXR.js";import"./TextField.module-DdivwlC8.js";import"./Label-92kQ6Ymf.js";import"./Dialog-DqyXwleY.js";import"./OverlayArrow-B7DoErx8.js";import"./useResizeObserver-D1WfdjA5.js";import"./Collection-DvLNFqPF.js";import"./index-DIm73aBC.js";import"./Separator-ClKeK0UH.js";import"./SelectionManager-BMfttRP9.js";import"./useEvent-DJ2zukRQ.js";import"./scrollIntoView-fZBPi3kj.js";import"./SelectionIndicator-DYhuORWP.js";import"./useDescription-FN-9a8Gv.js";import"./ListKeyboardDelegate-D5_-PZiv.js";import"./PressResponder-l8533rDQ.js";import"./useLocalizedStringFormatter-BfRcdDUG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BjMOhDnG.js";import"./getScrollParent-BjkCtlKv.js";import"./VisuallyHidden-D49iMATH.js";import"./x-DUi-rfHM.js";import"./createLucideIcon-ttv-_pDn.js";import"./useLocalizedStringFormatter-BQyjPzmq.js";import"./Heading-L0LPPdCM.js";import"./Button-BNNwT8-I.js";import"./Button.module-D_C6WeTN.js";import"./info-Arzt1sWe.js";import"./Popover-Td1HiOam.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
