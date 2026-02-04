import{j as e,l}from"./iframe-AzeRMI6E.js";import{S as t}from"./Skeleton-DqZHWtoc.js";import{T as p}from"./TextField-DwXmDQPX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B9DFWzF1.js";import"./utils-C6Ogk0cQ.js";import"./TextField-DGkasBkN.js";import"./FieldError-Bhumxp-K.js";import"./Text-DifqYix-.js";import"./useFocusRing-IRQc2pc2.js";import"./index-6ebY7xVy.js";import"./index-BUDprfFK.js";import"./Text-CgQK_TBj.js";import"./RSPContexts-zi7bfW4c.js";import"./Form-Cpd_U7HJ.js";import"./useFormValidation-Fw-45rMv.js";import"./Group-DHQGRHxT.js";import"./Input-N0X16INo.js";import"./Hidden-DlywG7Qa.js";import"./Button-BM_9r6cn.js";import"./useLabels-CKRjxM8h.js";import"./useButton-F4pMDae2.js";import"./useTextField-BxMcuNOz.js";import"./useControlledState-KwKgHDy1.js";import"./useField-BOUewxY-.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CsHKhuPA.js";import"./Dialog-8UUQmDqb.js";import"./OverlayArrow-DnyVe5Yt.js";import"./useResizeObserver-ClCLhwuI.js";import"./Collection-CDhyUV2N.js";import"./index-d-6dDUYh.js";import"./Separator-yNfoQZtW.js";import"./SelectionManager-uTGJdGpQ.js";import"./useEvent-hvkR2q06.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0GlzpJ_.js";import"./useDescription-DaNElkfk.js";import"./ListKeyboardDelegate--oU5vUq4.js";import"./PressResponder-DByLmu6r.js";import"./useLocalizedStringFormatter-C14yyg5V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8nb0CDz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cdl-x6Ak.js";import"./Button-Dymh8tI2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3Cc5nzM.js";import"./createLucideIcon-Cbaqp_e4.js";import"./x-CXoFC9Eh.js";import"./Heading-CKa78Z7t.js";import"./info-CjOPVPlC.js";import"./Popover-P4PXPuEU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
