import{j as e,l}from"./iframe-DfM6kEgP.js";import{S as t}from"./Skeleton-sjbzSrs0.js";import{T as p}from"./TextField-HdSFhgPJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CUXJo1JP.js";import"./utils-D8PGfxYb.js";import"./FieldError-D7g57v3N.js";import"./Text-BibBkfuq.js";import"./useFocusRing-IDQhhoIK.js";import"./index-DJ_VatpF.js";import"./index-C5hIZfwH.js";import"./Text-19RelmEi.js";import"./RSPContexts-BeTSInpY.js";import"./Form-QMfqrVHt.js";import"./useFormValidation-BQsgNnye.js";import"./Group-Dj2SQDcn.js";import"./Input-D0dqnymk.js";import"./Hidden-B-o_Z7ot.js";import"./Button-Czn9lX0K.js";import"./useLabels-SIl08feW.js";import"./useButton-MJN3qUWn.js";import"./useTextField-BAx9P39W.js";import"./useControlledState-kzArnBYE.js";import"./useField-DDZqH5hv.js";import"./TextField.module-DdivwlC8.js";import"./Label-if6eFtKI.js";import"./Dialog-OKjalaOk.js";import"./OverlayArrow-DiNb5Fu3.js";import"./useResizeObserver-Dhz32DFD.js";import"./Collection-09IBPkRq.js";import"./index-3kktDTdc.js";import"./Separator-CRnSeFy5.js";import"./SelectionManager-Dcw7EeBz.js";import"./useEvent-gEY0uIrq.js";import"./scrollIntoView-DF5-5d4s.js";import"./SelectionIndicator-B7PNH1gU.js";import"./useDescription-CAoO2SDf.js";import"./ListKeyboardDelegate-zBpsm9mR.js";import"./PressResponder--6CUqe1-.js";import"./useLocalizedStringFormatter-DnY2UHeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsUrANvt.js";import"./getScrollParent-C3WNykc8.js";import"./VisuallyHidden-B1MOHF_-.js";import"./x-YUyJRI2G.js";import"./createLucideIcon-DO7HuIXt.js";import"./useLocalizedStringFormatter-BjlGfbr7.js";import"./Heading-Dh4ztEp9.js";import"./Button-6n3SyLgE.js";import"./Button.module-D_C6WeTN.js";import"./info-DjPwzfYU.js";import"./Popover--A1GvFMU.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
