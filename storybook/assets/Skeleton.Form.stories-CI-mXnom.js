import{j as e,l}from"./iframe-Dl_ZEAw_.js";import{S as t}from"./Skeleton-Dy1sA9Pq.js";import{T as p}from"./TextField-BK4jnoc_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-r1oxrnxq.js";import"./utils-qArlt3QR.js";import"./TextField-CBPqaRvd.js";import"./FieldError-UQabDpKY.js";import"./Text-CFgDWcau.js";import"./useFocusRing-BadRLYOI.js";import"./index-BBK-ahHU.js";import"./index-9pBu4mcS.js";import"./Text-LOlP3muv.js";import"./RSPContexts-H1zv-_Zf.js";import"./Form-Pc85qXYh.js";import"./useFormValidation-vxZMHFxu.js";import"./Group-DboOVmDu.js";import"./Input-ZlSfxA6e.js";import"./Hidden-I_e1q7UG.js";import"./Button-Bhf2TykO.js";import"./useLabels-CH32VCLn.js";import"./useButton-CgsE8t_H.js";import"./useTextField-DWfHNTEK.js";import"./useControlledState-BBjZ-p-J.js";import"./useField-DyugcTbx.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C1MZzlub.js";import"./Dialog-CZxCBWib.js";import"./OverlayArrow-CcD4Fo11.js";import"./useResizeObserver-DA_A696h.js";import"./Collection-DH0CocWE.js";import"./index-CLGNexvb.js";import"./Separator-C0uzKyW4.js";import"./SelectionManager-kDqWfjBV.js";import"./useEvent-BKVERzXX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqabxLAl.js";import"./useDescription-_k4XNsw_.js";import"./ListKeyboardDelegate-DxE_0iuR.js";import"./PressResponder-D7N53MSk.js";import"./useLocalizedStringFormatter-CZjhQNpd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxIx03pf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kMLlKce4.js";import"./Button-COrJAjql.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DU3dXRGP.js";import"./createLucideIcon-xHw9Gsln.js";import"./x-BXfpE1Va.js";import"./Heading-1v9YPZX2.js";import"./info-CC-RdadS.js";import"./Popover-Df9ufV0W.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
