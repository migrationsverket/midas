import{j as e,l}from"./iframe-BvrUArBU.js";import{S as t}from"./Skeleton-yyLPSI9k.js";import{T as p}from"./TextField-BjdTM4K-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dn8LmxJH.js";import"./utils-C_lYNAOR.js";import"./TextField-CVtgm_VP.js";import"./FieldError-BP3wi4fG.js";import"./Text-DY3vNu9D.js";import"./useFocusRing-wAugWugz.js";import"./index-DcrVl_28.js";import"./index-DsaZsgX_.js";import"./Text-DjPIzR5K.js";import"./RSPContexts-CN08SUZd.js";import"./Form-C8yRaKQA.js";import"./useFormValidation-D9uyR9jZ.js";import"./Group-CM34THtk.js";import"./Input-D9qVF5qL.js";import"./Hidden-ClBR-m0d.js";import"./Button-D7XroJJX.js";import"./useLabels-BzNgkpLP.js";import"./useButton-BGbib_XA.js";import"./useTextField-BHUG7xcD.js";import"./useControlledState-Oju3a5HH.js";import"./useField-CQVxkpdB.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dz1jRugp.js";import"./Dialog-UAiO6WLN.js";import"./OverlayArrow-DldZ6yOg.js";import"./useResizeObserver-BvmQKMtJ.js";import"./Collection-DldinV_q.js";import"./index-B5UowPUY.js";import"./Separator-xTgfNddk.js";import"./SelectionManager-lkH-7A41.js";import"./useEvent-mzwxisiy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CShAyJpD.js";import"./useDescription-BcB0MmhA.js";import"./ListKeyboardDelegate-6NSF_a9x.js";import"./PressResponder-7YhYw-GQ.js";import"./useLocalizedStringFormatter-D-QUy42V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mNwIO0Io.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dgw8VeyT.js";import"./Button-opugJ3Pw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGIaKyQn.js";import"./createLucideIcon-CC3ddONH.js";import"./x-DZ0dfeFo.js";import"./Heading-ZB9RXTIw.js";import"./info-Dy2Qn0kI.js";import"./Popover-G-IXtm8s.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
