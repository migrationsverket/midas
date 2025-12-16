import{j as e,l}from"./iframe-DfEAdNVs.js";import{S as t}from"./Skeleton-xTk2Fhma.js";import{T as p}from"./TextField-CfMs10Ot.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BqSi5_o4.js";import"./utils--wYGBqGD.js";import"./TextField-DIQhd92d.js";import"./FieldError-CAId1xXE.js";import"./Text-DuPzytE6.js";import"./useFocusRing-Bzp-C8p6.js";import"./index-CtqVMxj3.js";import"./index-SEkB6HYi.js";import"./Text-DpvNcKrC.js";import"./RSPContexts-DhsCvUzP.js";import"./Form-CSqKcCG3.js";import"./useFormValidation-BUhsxUna.js";import"./Group-CV1DmkVm.js";import"./Input-DiIWsarT.js";import"./Hidden-BEs-n291.js";import"./Button-BdvjUnuo.js";import"./useLabels-Cu5mk1YJ.js";import"./useButton-DrZxE4--.js";import"./useTextField-D72ClbFt.js";import"./useControlledState-BAEcE39B.js";import"./useField-BRFh-PYl.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-hRjdpc8o.js";import"./Dialog-CFVpeWib.js";import"./OverlayArrow-Cr7E5qeY.js";import"./useResizeObserver-CPp6mll5.js";import"./Collection-C7VFDuOa.js";import"./index-DbAd4bBs.js";import"./Separator-4U33ToD_.js";import"./SelectionManager-XIcBhoKr.js";import"./useEvent-MCyBQRS6.js";import"./scrollIntoView-DuSKKvBp.js";import"./SelectionIndicator-DhNoYZyp.js";import"./useDescription-DBgTN9Qp.js";import"./ListKeyboardDelegate-jNBEcwRO.js";import"./PressResponder-DaxMlHv_.js";import"./useLocalizedStringFormatter-8MmEPB2N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-560_08lX.js";import"./VisuallyHidden-alWOUvdL.js";import"./Button-He3J7woG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCX7Zdi0.js";import"./createLucideIcon-Caura_NC.js";import"./x-Cc5QfUhK.js";import"./Heading-R00i0ykR.js";import"./info-DST0GV0b.js";import"./Popover-BkWjVVkU.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
