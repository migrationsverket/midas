import{j as e,l}from"./iframe-DTmGM0Lv.js";import{S as t}from"./Skeleton-DRJLHnq_.js";import{T as d}from"./TextField-Ugq6zCk3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bwv2nUu4.js";import"./utils-C-Csm_HJ.js";import"./TextField-lVrDsxxP.js";import"./FieldError-D7K2RoId.js";import"./Text-Crv0LT4D.js";import"./useFocusRing-_YauK2g0.js";import"./index-9zDrbBb1.js";import"./index-DKIj2TXJ.js";import"./Text-Tc8CVOKC.js";import"./RSPContexts-C1nPx2yc.js";import"./Form-DykSM_BA.js";import"./useFormValidation-DlnAOivs.js";import"./Group-swqRP27x.js";import"./Input-BIIFIjz-.js";import"./Hidden-CaRTDRny.js";import"./Button-DN-n-_G7.js";import"./useLabels-C5zC1qPP.js";import"./useButton-brZar4lw.js";import"./useTextField-3faV3wYV.js";import"./useControlledState-BAsSmE__.js";import"./useField-BBA-zNTz.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-gehhzikc.js";import"./Dialog-Dlc_C0oT.js";import"./OverlayArrow-B52Jfxwx.js";import"./useResizeObserver-BsFE6UdA.js";import"./Collection-3Jo0cLOv.js";import"./index-B_kdZ9Te.js";import"./Separator-BWN0xGUd.js";import"./SelectionManager-BbAfZ0mT.js";import"./useEvent-DBYFGLr3.js";import"./scrollIntoView-BjH_T2Ul.js";import"./SelectionIndicator-DpxouZDt.js";import"./useDescription-99fnbxA2.js";import"./ListKeyboardDelegate-CVMEsyfC.js";import"./PressResponder-Dwt-qJQF.js";import"./useLocalizedStringFormatter-D9SQN2sw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-w8StByxs.js";import"./VisuallyHidden-BlCXdrZt.js";import"./Button-DVo1A0DB.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D7G7Bxto.js";import"./createLucideIcon-IkfxPgvv.js";import"./x-vYF2MqhL.js";import"./Heading-CAk8AN96.js";import"./info-BqS23j0q.js";import"./Popover-KxNg_wqI.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
