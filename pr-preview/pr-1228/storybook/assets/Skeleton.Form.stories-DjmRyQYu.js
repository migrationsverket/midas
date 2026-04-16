import{j as e,l}from"./iframe-Xm_9cv73.js";import{S as t}from"./Skeleton-6tiuUz6_.js";import{T as p}from"./TextField-D5UvCAer.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-qoUJf2jI.js";import"./utils-BrYTleyQ.js";import"./FieldError-DghDJU9N.js";import"./Text-83WNws37.js";import"./useFocusRing-B1Kohi3p.js";import"./index-Cjq5DljI.js";import"./index-B7N2Cx5U.js";import"./Text-C4UzyOu1.js";import"./RSPContexts-D8VaqtGQ.js";import"./Form-bvdt1e3R.js";import"./Group-CCaYHNjE.js";import"./Input-Bkd8beF6.js";import"./Hidden-BZlSwNP_.js";import"./Button-DVfOBJT3.js";import"./useLabel-DzdXQuC_.js";import"./useLabels-C-FgVELl.js";import"./useButton-BE-XYmko.js";import"./useTextField-DhuoEbb8.js";import"./useControlledState-B_fJsoKU.js";import"./useField-CVw2OaLJ.js";import"./TextField.module-DdivwlC8.js";import"./Label-CdcGa_gF.js";import"./Dialog-C69eZzVq.js";import"./OverlayArrow-SVU9nlq4.js";import"./useResizeObserver-BmXoXVDq.js";import"./Collection-DrnWUacn.js";import"./index-BdyOfa6A.js";import"./Separator-Dp2EBKtN.js";import"./SelectionManager-CkZyscrj.js";import"./useEvent-IJcG7rNp.js";import"./scrollIntoView-DLCl9E_L.js";import"./SelectionIndicator-DtMeBzWu.js";import"./useDescription-jUlzP2-m.js";import"./ListKeyboardDelegate-Bo3okK2V.js";import"./PressResponder-CKN6Vp37.js";import"./useLocalizedStringFormatter-Df4Fg5xM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwL4Kwi0.js";import"./getScrollParent-DW5MB0xc.js";import"./VisuallyHidden-BGkpKKxN.js";import"./ModalOverlay-C-mWmmh2.js";import"./x-CXw9u6Gz.js";import"./createLucideIcon-9sC3-GJ0.js";import"./useLocalizedStringFormatter-DWIBY6KU.js";import"./Heading-Bg7Vp_mI.js";import"./Button-Da8bQidF.js";import"./Button.module-BB7N-cLd.js";import"./info-DlFwDLPB.js";import"./Popover-B9hrRJtJ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
