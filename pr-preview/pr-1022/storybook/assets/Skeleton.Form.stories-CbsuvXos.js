import{j as e,l}from"./iframe-DMnXhvY8.js";import{S as t}from"./Skeleton-DBsx4PEj.js";import{T as p}from"./TextField-CrwlI8Fa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-7LVQP58q.js";import"./utils-Cr6fPQeE.js";import"./TextField-CPmTL9dG.js";import"./FieldError-iahkZMae.js";import"./Text-DMCoF6zG.js";import"./useFocusRing-8otf3cSz.js";import"./index-DAqnwmB7.js";import"./index-DIi78pwy.js";import"./Text-CFJ7Rv8f.js";import"./RSPContexts-KhvNbaiD.js";import"./Form-BFZEhpvQ.js";import"./useFormValidation-ByGzq6xW.js";import"./Group-BYMw2XRb.js";import"./Input-BS90HIeP.js";import"./Hidden-DPa8I1Gp.js";import"./Button-D4fHUSQK.js";import"./useLabels-B1zcB8t6.js";import"./useButton-DHyzBCn2.js";import"./useTextField-BuMNl-g1.js";import"./useControlledState-4XYSNIgm.js";import"./useField-DY-_TNf0.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DveEX_ua.js";import"./Dialog-C9ObGWO4.js";import"./OverlayArrow-DT_Vt4aE.js";import"./useResizeObserver-DR7N0dFs.js";import"./Collection-CLg-pTOV.js";import"./index-DPCanXGU.js";import"./Separator-BeNXkxBh.js";import"./SelectionManager-GiV4_WOF.js";import"./useEvent-hoUK_fBs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CLOiqyn5.js";import"./useDescription-UUruAZG-.js";import"./ListKeyboardDelegate-BdgHwj63.js";import"./PressResponder-Dg9oXRH4.js";import"./useLocalizedStringFormatter-BVxr3gfN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfdoS3FP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C2H7BXVT.js";import"./Button-E5A4z9FY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxRi-Ufl.js";import"./createLucideIcon-DykDHhyw.js";import"./x-CRcPQVxQ.js";import"./Heading-skeK9R6X.js";import"./info-C0-TzniS.js";import"./Popover-DWL3uBQh.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
