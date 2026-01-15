import{j as e,l}from"./iframe-B2hXki5s.js";import{S as t}from"./Skeleton-GULc0YBS.js";import{T as p}from"./TextField-DY6e1Zc5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D-kqMWx5.js";import"./utils-D-cZNYk5.js";import"./TextField-mrgESTDg.js";import"./FieldError-tZ4Rxwzl.js";import"./Text-CkCJ-ZN3.js";import"./useFocusRing-HF0eSiIK.js";import"./index-DvCY6ndx.js";import"./index-nI6qS4bb.js";import"./Text-zXbuoED7.js";import"./RSPContexts-F7HE9ubk.js";import"./Form-BsF31Wh3.js";import"./useFormValidation-CtQu6qK-.js";import"./Group-Au2fPCtq.js";import"./Input-BiuVZnf-.js";import"./Hidden-CxUrxLhM.js";import"./Button-CCrDbf-3.js";import"./useLabels-DD9ZOY8B.js";import"./useButton-DA4tSPb8.js";import"./useTextField-BgtOFUOF.js";import"./useControlledState-77pcsCop.js";import"./useField-Ckjgyi8D.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CoP76uki.js";import"./Dialog-WGfNDMap.js";import"./OverlayArrow-Bh5NOhbd.js";import"./useResizeObserver-Bi9af0bD.js";import"./Collection-Dp_lyYLW.js";import"./index-orpHTWTf.js";import"./Separator-B07anHP2.js";import"./SelectionManager--esGLOr8.js";import"./useEvent-CvQwc1qa.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D4YsfIeE.js";import"./useDescription-Co8q0X78.js";import"./ListKeyboardDelegate-y75oqEKX.js";import"./PressResponder-BWSaERrU.js";import"./useLocalizedStringFormatter-CgQtT4cY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUH2hfEw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-91aD8JD1.js";import"./Button-lNOPEuzW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCY5sa9P.js";import"./createLucideIcon-CoTtBMM7.js";import"./x-B_8C5-wm.js";import"./Heading-BZJ9VZkt.js";import"./info-BFMwj_GW.js";import"./Popover-D2xy3UEV.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
