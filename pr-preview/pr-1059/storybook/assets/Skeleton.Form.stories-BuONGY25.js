import{j as e,l}from"./iframe-CgVDPXCW.js";import{S as t}from"./Skeleton-CSI6A5QW.js";import{T as p}from"./TextField-h2Xu64gN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-flpMTQQO.js";import"./utils-DcVVHZ67.js";import"./FieldError-BON66wFU.js";import"./Text-By5oRQCE.js";import"./useFocusRing-DNBotD7g.js";import"./index-DvqiEU7D.js";import"./index-KB8h2jjm.js";import"./Text-C_oGJ_xm.js";import"./RSPContexts-4u-QqjZM.js";import"./Form-DaNhyeML.js";import"./useFormValidation-B0q062rA.js";import"./Group-C-0CY4ak.js";import"./Input-CxgzhI7t.js";import"./Hidden-CXNfA9DQ.js";import"./Button-CQnF2GG8.js";import"./useLabels-BHxP37I4.js";import"./useButton-BWlYYLVQ.js";import"./useTextField-DnjEhot0.js";import"./useControlledState-CaasPkxS.js";import"./useField-BOKIbcIE.js";import"./TextField.module-DpzeWGpt.js";import"./Label-3HbgeRSE.js";import"./Dialog-Ca64OFxi.js";import"./OverlayArrow-Cm8tZIC_.js";import"./useResizeObserver-CZxhDXA0.js";import"./Collection-BhV9AUYd.js";import"./index-B9AEiTqw.js";import"./Separator-CSLPClBC.js";import"./SelectionManager-BH57UAK3.js";import"./useEvent-D87hVJVV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Her58Z3x.js";import"./useDescription-gbmfQOlg.js";import"./ListKeyboardDelegate-BBIA4umz.js";import"./PressResponder-Bmle_dll.js";import"./useLocalizedStringFormatter-D49bO5T8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmXbO9r2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ded5YgLE.js";import"./Button-D1lh8tZn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-als5sVnS.js";import"./createLucideIcon-xwY9ORJx.js";import"./x-4d7UDHPb.js";import"./Heading-BaeXS2ez.js";import"./info-CIcIyD_Y.js";import"./Popover-LQ7rUTaz.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
