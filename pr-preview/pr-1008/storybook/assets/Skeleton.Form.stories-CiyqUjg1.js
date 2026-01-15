import{j as e,l}from"./iframe-Cjp05Xvk.js";import{S as t}from"./Skeleton-CPAZtmkD.js";import{T as p}from"./TextField-bn2FE7o6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BNg9apHE.js";import"./utils-B7KUpLVX.js";import"./TextField-Ab3geyXW.js";import"./FieldError-DJAw2gVJ.js";import"./Text-CY50v26A.js";import"./useFocusRing-MuyneAO_.js";import"./index-DQoebJgT.js";import"./index-BqZRieL_.js";import"./Text-BqqvV1Lx.js";import"./RSPContexts-BXs3MdzJ.js";import"./Form-B-AII52H.js";import"./useFormValidation-C6Bi5OeS.js";import"./Group-CvmyvYvU.js";import"./Input-DwkIqD-V.js";import"./Hidden-nSg4a4bn.js";import"./Button-BQdRHNfD.js";import"./useLabels-DKrB5MGQ.js";import"./useButton-CCylroM-.js";import"./useTextField-BBHsan9u.js";import"./useControlledState-C9vPwLiF.js";import"./useField-ChHqYgaR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ho67qEXm.js";import"./Dialog-Dk6djaYU.js";import"./OverlayArrow-B2pRkLMy.js";import"./useResizeObserver-7BmFqOFA.js";import"./Collection-UMAXBFiQ.js";import"./index-CRzahONy.js";import"./Separator-CXjDjCJ6.js";import"./SelectionManager-DcRQnitR.js";import"./useEvent-CmHPTiIB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_yFhE-I.js";import"./useDescription-BtBb2fRe.js";import"./ListKeyboardDelegate-BF1tQzOA.js";import"./PressResponder-B-5n5lr4.js";import"./useLocalizedStringFormatter-nEop6Uh_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-SCOxJd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BiBWBoz6.js";import"./Button-QxYJDAqE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DqBPpOm5.js";import"./createLucideIcon-DtASArT9.js";import"./x--z0bIiWF.js";import"./Heading-AKJQvmhA.js";import"./info-Bc0e6oJa.js";import"./Popover-CUOeLxvu.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
