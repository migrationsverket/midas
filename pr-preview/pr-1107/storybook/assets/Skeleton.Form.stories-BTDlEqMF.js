import{j as e,l}from"./iframe-C--goO8e.js";import{S as t}from"./Skeleton-BXEp7Cor.js";import{T as p}from"./TextField-CHguqVLv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CO4gSQKt.js";import"./utils-DSxiF1Cp.js";import"./FieldError-Dwje_tcE.js";import"./Text-DfLs60II.js";import"./useFocusRing-BcZJn3fC.js";import"./index-DvAhHsax.js";import"./index-DLC2Qh-Q.js";import"./Text-9OutCub2.js";import"./RSPContexts-DBlfftlT.js";import"./Form-BhOwk5Rh.js";import"./useFormValidation--rHLyQTt.js";import"./Group-DDNc2PMe.js";import"./Input-Mff7IJb-.js";import"./Hidden-GH0AX83d.js";import"./Button-BI3Iq_aE.js";import"./useLabels-CvgKtUT-.js";import"./useButton-Xz1kmXFC.js";import"./useTextField-CyuAZqkj.js";import"./useControlledState-X-QYJxtN.js";import"./useField-BxRSRWrc.js";import"./TextField.module-DdivwlC8.js";import"./Label-QPXtgJsU.js";import"./Dialog-peyoAljX.js";import"./OverlayArrow-DjhTHSCV.js";import"./useResizeObserver-OFVIQs8l.js";import"./Collection-C5fmw-uG.js";import"./index-BuKZ05EQ.js";import"./Separator-BFK302df.js";import"./SelectionManager-QCyNYMjo.js";import"./useEvent-teLk4nYd.js";import"./scrollIntoView-Zj7kw8yy.js";import"./SelectionIndicator-DiVi5b4I.js";import"./useDescription-DPoM5gP_.js";import"./ListKeyboardDelegate-B2rGKOlU.js";import"./PressResponder-jLBzhJOQ.js";import"./useLocalizedStringFormatter-Ci2N_wM7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df7BSnEy.js";import"./getScrollParent-gKv46a13.js";import"./VisuallyHidden-C4dWGUSD.js";import"./x-xvoCsFgY.js";import"./createLucideIcon-pUc5o6Nr.js";import"./useLocalizedStringFormatter-L0RS7m21.js";import"./Heading-DorcuOCz.js";import"./Button-D9Z4rzGT.js";import"./Button.module-BB7N-cLd.js";import"./info-CJ3HCdpW.js";import"./Popover-BcKZVJBG.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
