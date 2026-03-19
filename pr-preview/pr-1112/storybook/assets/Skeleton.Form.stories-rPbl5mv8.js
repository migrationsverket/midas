import{j as e,l}from"./iframe-DS0O0j7b.js";import{S as t}from"./Skeleton-DDZdjIa8.js";import{T as p}from"./TextField-BjzVA16Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BgYyM85A.js";import"./utils-C_Y1VJyB.js";import"./FieldError-obiFspMo.js";import"./Text-24RRIPeu.js";import"./useFocusRing-C0d3_IpO.js";import"./index-D3Tr-KQh.js";import"./index-oPvKfDWU.js";import"./Text-img0UXBQ.js";import"./RSPContexts-xBE5IiKT.js";import"./Form-C58mAzIV.js";import"./useFormValidation-BQZAIrPT.js";import"./Group-DNJHoR3l.js";import"./Input-CPe7jG_u.js";import"./Hidden-kaUfFbEZ.js";import"./Button-Dmgtf1bQ.js";import"./useLabels-CDMzy8g3.js";import"./useButton-8RAVO9uW.js";import"./useTextField-CfmO-j_f.js";import"./useControlledState-YiR0L17D.js";import"./useField-BQuOWwRW.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bm3TVIjz.js";import"./Dialog-CDSJtmr9.js";import"./OverlayArrow-JrQrw2d7.js";import"./useResizeObserver-CqGku4Sv.js";import"./Collection-CHi4IpgR.js";import"./index-D5ydEaOw.js";import"./Separator-wJ82o0SV.js";import"./SelectionManager-Ch-PpRgv.js";import"./useEvent-D-WGugyX.js";import"./scrollIntoView-BMpUAOeO.js";import"./SelectionIndicator-D5gv17Ml.js";import"./useDescription-BRpvpR9v.js";import"./ListKeyboardDelegate-DTV_dm1Z.js";import"./PressResponder-Q0iL0rxl.js";import"./useLocalizedStringFormatter-DgIs-M2f.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Z5KKNti_.js";import"./getScrollParent-DZsWhqqY.js";import"./VisuallyHidden-bAykpqel.js";import"./x-DcON_b5s.js";import"./createLucideIcon-BttQnoLZ.js";import"./useLocalizedStringFormatter-C9AMm5n0.js";import"./Heading-BEVhbzAA.js";import"./Button-DB7_h4Ph.js";import"./Button.module-BB7N-cLd.js";import"./info-B8jiwM2B.js";import"./Popover-WAqSoKDJ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
