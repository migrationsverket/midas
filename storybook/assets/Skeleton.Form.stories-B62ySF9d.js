import{j as e,l}from"./iframe-TjYTyBIA.js";import{S as t}from"./Skeleton-iYI9_yVY.js";import{T as p}from"./TextField-F2yX27HS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DXxN-j3m.js";import"./utils-B2jU_PXd.js";import"./TextField-BU6RD7X7.js";import"./FieldError-Bc9pveKo.js";import"./Text-BkOzDRnY.js";import"./useFocusRing-2DlQQnAW.js";import"./index-BzxihWEi.js";import"./index-D9BjRmkk.js";import"./Text-C9TF991Y.js";import"./RSPContexts-IGt6m-sM.js";import"./Form-GSJN0Uyu.js";import"./useFormValidation-CeJWDr9L.js";import"./Group-2K8946t4.js";import"./Input-dvizKyGi.js";import"./Hidden-Bk8kC44C.js";import"./Button-DfGK-ytd.js";import"./useLabels-BFnK5R4R.js";import"./useButton-EM8J5NvE.js";import"./useTextField-5p42HyBq.js";import"./useControlledState-DRcN3zts.js";import"./useField-DJHv4sS4.js";import"./TextField.module-1fNSVGjT.js";import"./Label-Bc0ITZCg.js";import"./Dialog-3snVtcBm.js";import"./OverlayArrow-VYU31Vg3.js";import"./useResizeObserver-Bp3XTfau.js";import"./Collection-QZG0Os4g.js";import"./index-DnZT8snr.js";import"./Separator-Br4fwH0A.js";import"./SelectionManager-DTo-Zj2V.js";import"./useEvent-onuK9vqA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C0rBB3SQ.js";import"./useDescription-Bc-rlWkY.js";import"./ListKeyboardDelegate-R82ob_wj.js";import"./PressResponder-B9ZcG7i4.js";import"./useLocalizedStringFormatter-BthcVXxR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4-yEZx5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bgu6hP_b.js";import"./Button-Lepv9VS_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3ettQfp.js";import"./createLucideIcon-CEDLvmmT.js";import"./x-BMgB1TfF.js";import"./Heading-CXTRw5XU.js";import"./info-DcNPWdVu.js";import"./Popover-DlkEn3St.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
