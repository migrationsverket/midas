import{j as e,l}from"./iframe-DLM7OJJC.js";import{S as t}from"./Skeleton-DPQknof-.js";import{T as p}from"./TextField-C0xGsubE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-yitY069t.js";import"./utils-Cg8VeQnF.js";import"./TextField-CKf_o07w.js";import"./FieldError-CwZhaUl8.js";import"./Text-Dr_1HWjJ.js";import"./useFocusRing-BfFb_8Xs.js";import"./index-C6cGHGyr.js";import"./index-VUDeKwzR.js";import"./Text-DWcHOJVH.js";import"./RSPContexts-BjmElr_9.js";import"./Form-CYp4zRoP.js";import"./useFormValidation-A4eZ-XSk.js";import"./Group-R3eIeMzU.js";import"./Input-DK2j63DH.js";import"./Hidden-sRnIF3aJ.js";import"./Button-CBWZM7hn.js";import"./useLabels-vojnNhU5.js";import"./useButton-CFLlN0xE.js";import"./useTextField-CM634RkI.js";import"./useControlledState-B4ZGdE6T.js";import"./useField-BqYJVQFT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CPsclgEs.js";import"./Dialog-BlN1z6y9.js";import"./OverlayArrow-D70KZkbQ.js";import"./useResizeObserver-DpEoFmLb.js";import"./Collection-BwFjuWWy.js";import"./index-Dluxzn8c.js";import"./Separator-D2iQC7Vu.js";import"./SelectionManager-B96WbDoz.js";import"./useEvent-CsCU74as.js";import"./scrollIntoView-DcUPLUcg.js";import"./SelectionIndicator-C5yvm9jm.js";import"./useDescription-BJBYRQLH.js";import"./ListKeyboardDelegate-xtVCS6J0.js";import"./PressResponder-C-bnnjQE.js";import"./useLocalizedStringFormatter-De_gwEZD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DonKrAv1.js";import"./VisuallyHidden-CvL4kn3L.js";import"./Button-D3MIvMYJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZBSwjU5.js";import"./createLucideIcon-5PLI4glS.js";import"./x-BrX8Cp6W.js";import"./Heading-CDL9YwFd.js";import"./info-RHSRw1L2.js";import"./Popover-CHu-QnWJ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
