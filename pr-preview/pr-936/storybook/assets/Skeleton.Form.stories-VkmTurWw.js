import{j as e,l}from"./iframe-3Z2-UshW.js";import{S as t}from"./Skeleton-BMIQDoip.js";import{T as d}from"./TextField-R1jzt6i7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DmSL_KwG.js";import"./utils-DEJEJRgi.js";import"./TextField-BXXXP5Cx.js";import"./FieldError-DmQsB8WI.js";import"./Text-ByU-HJWg.js";import"./useFocusRing-MmHLX3s6.js";import"./index-CQUvP9Mk.js";import"./index-DuVB00BP.js";import"./Text-Df63k-we.js";import"./RSPContexts-sdVomez5.js";import"./Form-CiemASY7.js";import"./useFormValidation-CbbZBDTD.js";import"./Group-DVM01X4_.js";import"./Input-CrIcD9VI.js";import"./Hidden-B6h_oo_l.js";import"./Button-C8_JRtOx.js";import"./useLabels-CV70o-W_.js";import"./useButton-DNg2H_lv.js";import"./useTextField-BbdPnTUs.js";import"./useControlledState-BqwBnLxL.js";import"./useField-CB47h_B1.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-flCSl7br.js";import"./Dialog-SPehNYWz.js";import"./OverlayArrow-10n9KVZe.js";import"./useResizeObserver-CtNkq48b.js";import"./Collection-xR152A_l.js";import"./index-B__vAUfW.js";import"./Separator-B_bNR9hy.js";import"./SelectionManager-N2qnNMvi.js";import"./useEvent-B_HlG0i4.js";import"./scrollIntoView-3g7sHIC3.js";import"./SelectionIndicator-70hAQtwW.js";import"./useDescription-tzBSixbv.js";import"./ListKeyboardDelegate-BsVXku3W.js";import"./PressResponder-Cs_9oaJ5.js";import"./useLocalizedStringFormatter-DdpoOagV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C96p0Vxo.js";import"./VisuallyHidden-D1KaaG2i.js";import"./useLocalizedStringFormatter-DBDYzHUi.js";import"./Button-C4wHIXhX.js";import"./Button.module-CtQ1deO8.js";import"./x-CMZuM501.js";import"./createLucideIcon-CuTJpoE2.js";import"./Heading-AX-x11vK.js";import"./info-D4aIi2zj.js";import"./Popover-JPLRXw9o.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
