import{j as e,l}from"./iframe-CwLkjgpT.js";import{S as t}from"./Skeleton-Dis2tP8G.js";import{T as p}from"./TextField-BIotQ_iM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C-zk_ZiH.js";import"./utils-DSWzARDZ.js";import"./TextField-HTGadteH.js";import"./FieldError-D0HGPYoR.js";import"./Text-BZsBZWaE.js";import"./useFocusRing-DAwt605V.js";import"./index-DksoI_g-.js";import"./index-B5Ydvek1.js";import"./RSPContexts-5uc_6UdN.js";import"./Form-DyQS-Rx8.js";import"./useFormValidation-DYTV0QoP.js";import"./Group-7o8s51Es.js";import"./Input-7bLPdQ52.js";import"./Hidden-DdX0U8LA.js";import"./Button-CQyRRKMW.js";import"./useLabels-C8OlSCO5.js";import"./useButton-BS52WYPg.js";import"./useTextField-BI3tjPnv.js";import"./useControlledState-aJ_MxFDE.js";import"./useField-Bu-u-nKx.js";import"./TextField.module-1-_3qsJZ.js";import"./Text-BQIFYXN4.js";import"./Label-D-92omIG.js";import"./Dialog-PD56cuDU.js";import"./OverlayArrow-Bj1Y5OAh.js";import"./useResizeObserver-zNonKEnh.js";import"./Collection-CBg4ukBX.js";import"./index-kdVZxqd5.js";import"./Separator-Z-GnE651.js";import"./SelectionManager-C1UZmZTF.js";import"./useEvent-D_IHmf9Z.js";import"./scrollIntoView-CO_UKuN0.js";import"./SelectionIndicator-CO6cAmp2.js";import"./useDescription-DbGCeq7X.js";import"./ListKeyboardDelegate-CNEKZ9v2.js";import"./PressResponder-DaJ7LY8c.js";import"./useLocalizedStringFormatter-4a_u7Il3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C95P398o.js";import"./VisuallyHidden-DcUNvP8l.js";import"./Button-DtGuvUjf.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BIv7akwD.js";import"./createLucideIcon-DeGNxWTw.js";import"./x-717PqAvY.js";import"./Heading-DmQGtzi_.js";import"./info-DnhfSu3G.js";import"./Popover-DXbYzZFC.js";import"./FieldError-DGr3c4Fy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
