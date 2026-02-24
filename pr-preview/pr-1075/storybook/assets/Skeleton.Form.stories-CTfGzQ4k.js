import{j as e,l}from"./iframe-DJytE9jg.js";import{S as t}from"./Skeleton-C5kMUdiP.js";import{T as p}from"./TextField-Bjxxc5KN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DBzmzsvi.js";import"./utils-VHUq0skz.js";import"./FieldError-B3osPoIK.js";import"./Text-Bdh14pRr.js";import"./useFocusRing-Vnrwenoe.js";import"./index-B-f9OSEP.js";import"./index-PioAU-tD.js";import"./Text-DlvIzI2Z.js";import"./RSPContexts-C8SqMLv_.js";import"./Form-DHzUoCnh.js";import"./useFormValidation-DfqdalkR.js";import"./Group-BabpW-qL.js";import"./Input-BzK-096S.js";import"./Hidden-DKrVS7N8.js";import"./Button-CVNkhFVY.js";import"./useLabels-CkATJGoJ.js";import"./useButton-CQ5agqnn.js";import"./useTextField-CUl71Zcl.js";import"./useControlledState-_v_byBHa.js";import"./useField-B0waFkY3.js";import"./TextField.module-DdivwlC8.js";import"./Label-C4pO9QF9.js";import"./Dialog-Y8I3ROtx.js";import"./OverlayArrow-CN5zkL29.js";import"./useResizeObserver-C2e7Sh_i.js";import"./Collection-DU_4Nury.js";import"./index-CINcpYxA.js";import"./Separator-BJk2G1nv.js";import"./SelectionManager-BfwpH8_C.js";import"./useEvent-DGji_m9a.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-YHfiMVAf.js";import"./useDescription-DI9NSFVt.js";import"./ListKeyboardDelegate-ZZ_q-Bvn.js";import"./PressResponder-B7Uzk7f9.js";import"./useLocalizedStringFormatter-CxnQTRGL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSMEgQKX.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CffJ4x8N.js";import"./Button-C9t41CsC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DspRbcc6.js";import"./createLucideIcon-BQp7PZIZ.js";import"./x-ClmUGKux.js";import"./Heading-D9CTNomY.js";import"./info-ySbVyaUx.js";import"./Popover-xFSM5Mcp.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
