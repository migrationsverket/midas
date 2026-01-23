import{j as e,l}from"./iframe-B5mKUI4c.js";import{S as t}from"./Skeleton-DnXn6cQx.js";import{T as p}from"./TextField-C-oHO6vU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bd4aUsQi.js";import"./utils-DeW7LaO1.js";import"./TextField-SXvqvKg7.js";import"./FieldError-CWRNW1G1.js";import"./Text-BYCbsMCs.js";import"./useFocusRing-CgbRETJq.js";import"./index-BhZP_iQU.js";import"./index-4ahidsI-.js";import"./Text-B1l_WlEL.js";import"./RSPContexts-hkEluX4Q.js";import"./Form-fo64gJbw.js";import"./useFormValidation-D5XvDLkr.js";import"./Group-DWJAzhU4.js";import"./Input-qyS3RiSD.js";import"./Hidden-CSsTijhC.js";import"./Button-BrTPVwzK.js";import"./useLabels-B2xIaWSz.js";import"./useButton-BO8k0dou.js";import"./useTextField-BYZ5nwm1.js";import"./useControlledState-xvk7L9VL.js";import"./useField-B5R57QYN.js";import"./TextField.module-1fNSVGjT.js";import"./Label--rM9mR8h.js";import"./Dialog-GsIV9oY6.js";import"./OverlayArrow-D2-mpB-W.js";import"./useResizeObserver-C41Yibf-.js";import"./Collection-BWT2TfPW.js";import"./index-DU05F0qm.js";import"./Separator-CZyYGJp1.js";import"./SelectionManager-BQ7PwXNj.js";import"./useEvent-Bfj_pgkR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DkbBQGb2.js";import"./useDescription-DtjJIqI8.js";import"./ListKeyboardDelegate-rL_uqiBQ.js";import"./PressResponder-PkRvg21X.js";import"./useLocalizedStringFormatter-9u2UdEi1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKzpCpBP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Xt4BPEfK.js";import"./Button-DdQrsI7w.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgKQ4iI2.js";import"./createLucideIcon-ByiINced.js";import"./x-CzqSHOZc.js";import"./Heading-BnvherGp.js";import"./info-z8YWGbZA.js";import"./Popover-Bmqihs8u.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
