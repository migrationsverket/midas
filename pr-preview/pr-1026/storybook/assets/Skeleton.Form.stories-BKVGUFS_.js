import{j as e,l}from"./iframe-DE94JxKi.js";import{S as t}from"./Skeleton-CM18rhot.js";import{T as p}from"./TextField-B9JsCOP0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DEhMYbMt.js";import"./utils-BSOOAzhj.js";import"./TextField-aUKeFaK4.js";import"./FieldError-BXtDsO41.js";import"./Text-DfN54vrW.js";import"./useFocusRing-DmvBk8aR.js";import"./index-BQx7fnJU.js";import"./index-hBdvredO.js";import"./Text-DHcXS7hp.js";import"./RSPContexts-B_fFGJM5.js";import"./Form-BOsKgB3e.js";import"./useFormValidation-B28FtqGe.js";import"./Group-C3m33pKV.js";import"./Input-CmSqzZdi.js";import"./Hidden-BxoJfOoH.js";import"./Button-Dg3ONjJw.js";import"./useLabels-D7kdm8Gs.js";import"./useButton-BdK2-QNE.js";import"./useTextField-BCtL7hz6.js";import"./useControlledState-DaJ4jGU6.js";import"./useField-DbCKfJpx.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CadFwBlo.js";import"./Dialog-kpVHHP8R.js";import"./OverlayArrow-C-PVuf_t.js";import"./useResizeObserver-xuVMWkyr.js";import"./Collection-_6FJlRQd.js";import"./index-B_B9ITvM.js";import"./Separator-BhGklFKs.js";import"./SelectionManager-BIzWN-JW.js";import"./useEvent-DHt8qmHW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqGgoiG-.js";import"./useDescription-CR6YrqIA.js";import"./ListKeyboardDelegate-1nrdAhpB.js";import"./PressResponder-Dw3eCBzO.js";import"./useLocalizedStringFormatter-Cru1T8gU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoTI_cXn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B9PXbOcp.js";import"./Button-DMOZPxBs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CqNL9jQY.js";import"./createLucideIcon-DBTUrtr9.js";import"./x-Gg2oVTGU.js";import"./Heading-DaFoQP0H.js";import"./info-CUtZ3Z-P.js";import"./Popover-BOrfsaYl.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
