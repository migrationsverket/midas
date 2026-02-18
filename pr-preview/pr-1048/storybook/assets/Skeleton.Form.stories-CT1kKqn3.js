import{j as e,l}from"./iframe-DGcUF2qp.js";import{S as t}from"./Skeleton-DYWysQus.js";import{T as p}from"./TextField-B_034t2x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B4Jaslka.js";import"./utils-C-g9IEHW.js";import"./FieldError-BuaTWgbZ.js";import"./Text-DL34Z6xI.js";import"./useFocusRing-C3JE--XH.js";import"./index-Bg1abCEO.js";import"./index-6FNMycov.js";import"./Text-DxpETNh1.js";import"./RSPContexts-DKg32s8o.js";import"./Form-De-D48Sg.js";import"./useFormValidation-BkBYuxfH.js";import"./Group-Bwq1pMnA.js";import"./Input-DhSHlGR1.js";import"./Hidden-DOf4aCVT.js";import"./Button-9W9ESKk6.js";import"./number-DfkVkf0F.js";import"./useLabels-BWET_vJS.js";import"./useButton-CxyzWvKY.js";import"./useTextField-BYywxUeg.js";import"./useControlledState-BY4jsp46.js";import"./useField-C6LcJdMu.js";import"./TextField.module-Cm6797Xw.js";import"./Label-CG9x1TMh.js";import"./Dialog-B3uOHczp.js";import"./OverlayArrow-CNzC3Wiq.js";import"./useResizeObserver-7CmSTaLc.js";import"./Collection-BHHJS68Q.js";import"./index-9gKA1Giu.js";import"./Separator-DAYXuI2I.js";import"./SelectionManager-DN9c7-ZC.js";import"./useEvent-C8sq29ir.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY22CEnJ.js";import"./useDescription-SjgewDGU.js";import"./ListKeyboardDelegate-D1qTWSED.js";import"./PressResponder-BupWutZX.js";import"./useLocalizedStringFormatter-M0xxk-YJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RPVP9h17.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CFai959P.js";import"./Modal-CcPUcTIL.js";import"./Button-BDoKvS7o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-E6uNiOFA.js";import"./createLucideIcon-vaKNso9Q.js";import"./x-CQouQTE6.js";import"./Heading-Bft_YpUD.js";import"./info-w3a2jKL-.js";import"./Popover-CpNrjDWb.js";const ge={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ue=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ue as __namedExportsOrder,ge as default};
