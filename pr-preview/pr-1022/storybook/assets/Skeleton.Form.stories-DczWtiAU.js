import{j as e,l}from"./iframe-CCE7bbwH.js";import{S as t}from"./Skeleton-DYcVoQOC.js";import{T as p}from"./TextField-CVQ-Y2t9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BXWu640y.js";import"./utils-BVaE8NLk.js";import"./TextField-BSzV4QJt.js";import"./FieldError-CyHhaVe9.js";import"./Text-DdG9vEac.js";import"./useFocusRing-COIr_sUJ.js";import"./index-Dp5GmYi7.js";import"./index-aGo1ZsQs.js";import"./Text-CRHS6IkK.js";import"./RSPContexts-Cc7Msy4D.js";import"./Form-DxWxZ3xE.js";import"./useFormValidation-Cqln8SK2.js";import"./Group-By0h_gUZ.js";import"./Input-Bgg2VV-c.js";import"./Hidden-D5Jk713G.js";import"./Button-lT9_7AJU.js";import"./useLabels-Dd7McQGF.js";import"./useButton-CI7aYhes.js";import"./useTextField-P-502Bm1.js";import"./useControlledState-DRIq_96A.js";import"./useField-DXX-h2WN.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DogWNTqP.js";import"./Dialog-PtRmFe2T.js";import"./OverlayArrow-DOPldFRC.js";import"./useResizeObserver-CVA3a0jT.js";import"./Collection-DLzY31xD.js";import"./index-DmIQK8yC.js";import"./Separator-DFseeV5i.js";import"./SelectionManager-CQ2i0OB5.js";import"./useEvent-O9CTpKHV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C6rJyLIB.js";import"./useDescription-BMgwLMUv.js";import"./ListKeyboardDelegate-CNikrRlR.js";import"./PressResponder-DEnmPFca.js";import"./useLocalizedStringFormatter-r_KtojUx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BFXFhG36.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPHyXCRO.js";import"./Button-Dw3HUc-4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRJLM8ja.js";import"./createLucideIcon-Dc7mzXcy.js";import"./x-5WBMPsQp.js";import"./Heading-B9UX25UO.js";import"./info-DulROV-1.js";import"./Popover-CjxbSaN4.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
