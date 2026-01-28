import{j as e,l}from"./iframe-CQYEjdz_.js";import{S as t}from"./Skeleton-Xb5-hmgN.js";import{T as p}from"./TextField-8UwVn-qq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BXlaql8J.js";import"./utils-CsTu9ikS.js";import"./TextField-CKhA4AA4.js";import"./FieldError-DI5FZj2R.js";import"./Text-D3mzemNj.js";import"./useFocusRing-DlWhQp2A.js";import"./index-Vqw8ZxGg.js";import"./index-COoMP5iC.js";import"./Text-C9HsrLdv.js";import"./RSPContexts-CSrO3WzH.js";import"./Form-C3zHxAYs.js";import"./useFormValidation-CFo8G_qj.js";import"./Group-Yg1GwsIt.js";import"./Input-DbdeXgaZ.js";import"./Hidden-4CIPvtTu.js";import"./Button-CvToZ011.js";import"./useLabels-h4L6WHo6.js";import"./useButton-BvkZHVI6.js";import"./useTextField-CUnPMd7N.js";import"./useControlledState-08K4jq70.js";import"./useField-6eaY4RPJ.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CwePbPJo.js";import"./Dialog-DAlZfEPF.js";import"./OverlayArrow-B4ro6Pni.js";import"./useResizeObserver-BD123XaL.js";import"./Collection-BAUdRdO0.js";import"./index-Ca1-4qPN.js";import"./Separator-B4Jqf19c.js";import"./SelectionManager-DPVZxLwg.js";import"./useEvent-BdUP91sh.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-kTOIYhGF.js";import"./useDescription-CR3C3alu.js";import"./ListKeyboardDelegate-C62sOce2.js";import"./PressResponder-CFUlCqbp.js";import"./useLocalizedStringFormatter-D_GTQ1_w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-nxFZqJiI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CRBj22op.js";import"./Button-Cg9zZZ7J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Nl9tDDDD.js";import"./createLucideIcon-B-IrTLpd.js";import"./x-BbpD6m52.js";import"./Heading-Bj5hgxJD.js";import"./info-DjSzIBk8.js";import"./Popover-Cigo6uiU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
