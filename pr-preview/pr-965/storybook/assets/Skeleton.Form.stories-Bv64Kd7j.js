import{j as e,l}from"./iframe-NjzEciz2.js";import{S as t}from"./Skeleton-Cw7Jg76x.js";import{T as d}from"./TextField-Cqn1NvDg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BRe8M4Td.js";import"./utils-BO22LAuU.js";import"./TextField-BS9JvKWL.js";import"./FieldError-C8GxvgK1.js";import"./Text-BMhjNDEU.js";import"./useFocusRing-pzFTAHVD.js";import"./index-JjVsGnxi.js";import"./index-BPnXoL28.js";import"./Text-DKwC3A1F.js";import"./RSPContexts-Ct4MhcNR.js";import"./Form-BX_pqHln.js";import"./useFormValidation-Lb1IQGde.js";import"./Group-Bkl10009.js";import"./Input-CZE_TdIP.js";import"./Hidden-C0J6_IGJ.js";import"./Button-CtzhNdTl.js";import"./useLabels-zRKHb-LF.js";import"./useButton-Ca2UVS6J.js";import"./useTextField-DkVAfl93.js";import"./useControlledState-DnclevfP.js";import"./useField-CJ6x7qGV.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BEL1V2Zs.js";import"./Dialog-BjLqyjRK.js";import"./OverlayArrow-BmDQ44gs.js";import"./useResizeObserver-CAx_rZrz.js";import"./Collection-CqkIhza4.js";import"./index-CTdlL6Pn.js";import"./Separator-B8MsEARJ.js";import"./SelectionManager-BxPU3mw2.js";import"./useEvent-GifwgeES.js";import"./scrollIntoView-CcG1gBOc.js";import"./SelectionIndicator-CIl18lf7.js";import"./useDescription-CunDP7hR.js";import"./ListKeyboardDelegate-B8LmX6q-.js";import"./PressResponder-TYf01ZVu.js";import"./useLocalizedStringFormatter-axeaHqCF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DS_CqlsL.js";import"./VisuallyHidden-0o86jBm3.js";import"./Button-BGeEKZH3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0TL2D3I.js";import"./createLucideIcon-CQYq2UEE.js";import"./x-DJaQw8Gn.js";import"./Heading-CBj0diMM.js";import"./info-GyqFWXkf.js";import"./Popover-CWRwlPoj.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
