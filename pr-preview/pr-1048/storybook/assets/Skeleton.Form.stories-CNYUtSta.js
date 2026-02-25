import{j as e,l}from"./iframe-BIYycVtF.js";import{S as t}from"./Skeleton-D1mtN_AQ.js";import{T as p}from"./TextField-DO_I9G1D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-G56p2Ym_.js";import"./utils-CQyQJNz7.js";import"./useObjectRef-Dnttuos9.js";import"./FieldError-BsWqYage.js";import"./Text-A1nWhzuO.js";import"./useFocusRing-_u8e-JUw.js";import"./useFocusable-DRoMEDqQ.js";import"./index-CH0u5tNJ.js";import"./index-Dx5ixs9i.js";import"./Text-B1YyVTq1.js";import"./RSPContexts-B6TKKvZV.js";import"./Form-CvaXZ-x_.js";import"./useFormValidation-CJX6c1NG.js";import"./Group-1K9N6LGR.js";import"./Input-CWPgjlDo.js";import"./Hidden-AGqSstUV.js";import"./Button-xCxR0kSd.js";import"./useLabels-DC_FEenW.js";import"./useButton-BNdOFr74.js";import"./useTextField-D41AFEDa.js";import"./useControlledState-C6aaDo-s.js";import"./useField-BJy-oEwD.js";import"./TextField.module-DdivwlC8.js";import"./Label-DYI4Hi0v.js";import"./Dialog-7czyXmUB.js";import"./OverlayArrow-DFDW9jlO.js";import"./useResizeObserver-eM6IJa4E.js";import"./Collection-emX73nrZ.js";import"./CollectionBuilder-5cVLOiMR.js";import"./index-2x7kCp5n.js";import"./Separator-CalRW1Eu.js";import"./SelectionManager-EfHU5LpS.js";import"./useEvent-B9CnIbJl.js";import"./scrollIntoView-Bo1Xab6M.js";import"./SelectionIndicator-qZAjNlSO.js";import"./useDescription-DVfA0GtU.js";import"./ListKeyboardDelegate-C3gxtFmw.js";import"./PressResponder-B9WZc19F.js";import"./useLocalizedStringFormatter-BW8yoNsi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bwz2spCR.js";import"./getScrollParent-BVUiVP-B.js";import"./VisuallyHidden-CK9a4W9O.js";import"./Button-D9Any6-B.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKDdPfco.js";import"./createLucideIcon-S6aGlHi1.js";import"./x-CohE59zs.js";import"./Heading-BG47WcTa.js";import"./info-CPdajoQQ.js";import"./Popover-DvmrTdrb.js";const ue={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const xe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,xe as __namedExportsOrder,ue as default};
