import{j as e,l}from"./iframe-C-mFL-y5.js";import{S as t}from"./Skeleton-fwiWcjMA.js";import{T as p}from"./TextField-BLmU2EIn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CgwP4Wg_.js";import"./utils-D1nXJARU.js";import"./FieldError-5__MdH0k.js";import"./Text-BMqghmwo.js";import"./useFocusRing-BcE_QfPF.js";import"./index-BdrHlOMt.js";import"./index-D51JQnab.js";import"./Text-CCSjYwix.js";import"./RSPContexts-D19sCzde.js";import"./Form-BnpClDkZ.js";import"./Group-BxnUnKSO.js";import"./Input-B5Q3TADs.js";import"./Hidden-9ao8Y1ps.js";import"./Button-muDgoa96.js";import"./useLabel-CZgom9Hr.js";import"./useLabels-Ch3SsTuY.js";import"./useButton-DAL_GXyF.js";import"./useTextField-BP8G-PJi.js";import"./useControlledState-CYklShRN.js";import"./useField-CphlyUa3.js";import"./TextField.module-DdivwlC8.js";import"./Label-BxMrMk0X.js";import"./Dialog-WebbvSm0.js";import"./OverlayArrow-nWr6c9HG.js";import"./useResizeObserver-DrASn_A-.js";import"./Collection-DRq2lVha.js";import"./index-Bcf3xR78.js";import"./Separator-DJqe26Xu.js";import"./SelectionManager-CaouC3k9.js";import"./useEvent-B7aauAUS.js";import"./scrollIntoView-CtFeL4L4.js";import"./SelectionIndicator-Bw_ZnN4X.js";import"./useDescription-BVglMPey.js";import"./ListKeyboardDelegate-f6Ccs6WJ.js";import"./PressResponder-BWzfoJUd.js";import"./useLocalizedStringFormatter-DwJHjI96.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcLd249e.js";import"./getScrollParent-doaue_Gl.js";import"./VisuallyHidden-CO1695QU.js";import"./ModalOverlay-Clj-aakT.js";import"./x-CfBPXENx.js";import"./createLucideIcon-B54AhZJE.js";import"./useLocalizedStringFormatter-BY-aq0y_.js";import"./Heading-DaXl97NH.js";import"./Button-DbyCtJuo.js";import"./Button.module-BB7N-cLd.js";import"./info-DjTbkYaz.js";import"./Popover-i66B81cw.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
