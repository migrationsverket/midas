import{j as e,l}from"./iframe-Gk5MEbtf.js";import{S as t}from"./Skeleton-DRbhSBqL.js";import{T as p}from"./TextField--LQxQPH2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CxgeuHWH.js";import"./utils-FYzLBBKM.js";import"./TextField-2WD5lV8m.js";import"./FieldError-Baa_Kzdb.js";import"./Text-IP7yd6GC.js";import"./useFocusRing-WCMdeDPk.js";import"./index-BR8-lUkO.js";import"./index-D_XTGtZn.js";import"./Text-B-qEqFBc.js";import"./RSPContexts-D7f3u4-c.js";import"./Form-AuxABJFX.js";import"./useFormValidation-DHhvC1R-.js";import"./Group-zEW9EYC3.js";import"./Input-Bh6iF670.js";import"./Hidden-DGa8KKgC.js";import"./Button-BwdIuzcz.js";import"./useLabels-C555CKHB.js";import"./useButton-Df05FaMj.js";import"./useTextField-DBqyAHfj.js";import"./useControlledState-D6DRt1-U.js";import"./useField-Dxt7Dh66.js";import"./TextField.module-DpzeWGpt.js";import"./Label-Clq3Brpr.js";import"./Dialog-DccWkxj-.js";import"./OverlayArrow-ChTybOlo.js";import"./useResizeObserver-B5v0NhcV.js";import"./Collection-CTg3a-LF.js";import"./index-C5D58yZq.js";import"./Separator-Buy2ykEb.js";import"./SelectionManager-D4T18dtQ.js";import"./useEvent-kxVIpsfo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DE0dXJyi.js";import"./useDescription-C6ibjGIG.js";import"./ListKeyboardDelegate-sTv_qp8F.js";import"./PressResponder-DBCFch6O.js";import"./useLocalizedStringFormatter-CJFI85ze.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DK3Qf2Z4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BZBSJD1a.js";import"./Button-B5zSSp1x.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BIW-Yh1F.js";import"./createLucideIcon-BsHpl2bp.js";import"./x-DLbbIzYm.js";import"./Heading-4zMnqe9X.js";import"./info-CdwyBqaO.js";import"./Popover-DDGcUx6m.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
