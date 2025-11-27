import{j as e,l}from"./iframe-BcYLPvvG.js";import{S as t}from"./Skeleton-BCNSw9ML.js";import{T as d}from"./TextField-Dt3LnXNJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DEXvatvA.js";import"./utils-DuGQH1VB.js";import"./TextField-BZZyHQyP.js";import"./FieldError-DiuvsHLT.js";import"./Text-Ctvw4Oon.js";import"./useFocusRing-mtX7PO0G.js";import"./index-8OTKUVm4.js";import"./index-DIjlvTAp.js";import"./Text-BmaZQl73.js";import"./RSPContexts-BtVOhJLL.js";import"./Form-wxpWhKM7.js";import"./useFormValidation-84Kof8wr.js";import"./Group-kOYOeOJW.js";import"./Input-BHzYlSWp.js";import"./Hidden-tUEU5F-V.js";import"./Button-Dk0RbBuY.js";import"./useLabels-h9x39qhJ.js";import"./useButton-CxdPVYy7.js";import"./useTextField-eRV-Ef8i.js";import"./useControlledState-Cl08l4Il.js";import"./useField-DopM9hg3.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Bit6Cf-h.js";import"./Dialog-D-fPsuyf.js";import"./OverlayArrow-BkRfPN1b.js";import"./useResizeObserver-DePrYVsQ.js";import"./Collection-CCHEZMzV.js";import"./index-Mki23RMT.js";import"./Separator-BUeiXq91.js";import"./SelectionManager-CDiMoMVa.js";import"./useEvent-HfrKpO3k.js";import"./scrollIntoView-BpuKwFUC.js";import"./SelectionIndicator-zLjbsGri.js";import"./useDescription-BkSntyEJ.js";import"./ListKeyboardDelegate-O58EAQ7o.js";import"./PressResponder-K1Un6ieo.js";import"./useLocalizedStringFormatter-CEq-wPRG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DblQOhU2.js";import"./VisuallyHidden-B8-euVpR.js";import"./Button-C21XDfHm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C15hJ3-x.js";import"./createLucideIcon-h4XNnCB9.js";import"./x-xAvv45r1.js";import"./Heading-B9CW9bk0.js";import"./info-DCBVzFQl.js";import"./Popover-Bqe-56I-.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
