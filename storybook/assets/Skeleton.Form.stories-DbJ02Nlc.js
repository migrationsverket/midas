import{j as e,l}from"./iframe-CJiLO33n.js";import{S as t}from"./Skeleton-BEhLkS0H.js";import{T as d}from"./TextField-D7JtUsnT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C2biP1ij.js";import"./utils-BwIbfVvT.js";import"./FieldError-Dd2S8Fqt.js";import"./Text-Cu_x9kkp.js";import"./useFocusRing-BwtfOiN2.js";import"./index-DCLVDLzL.js";import"./index-CWQvnVll.js";import"./Text-B20Rga9k.js";import"./RSPContexts-T3bE05r6.js";import"./Form-CzM7f-FM.js";import"./Group-BSts2WQT.js";import"./Input-swurc7cY.js";import"./Hidden-GX2Gt-Bh.js";import"./Button-BPl7GMUn.js";import"./useLabels-CLDCP1oZ.js";import"./useButton-CDfLXD9h.js";import"./useTextField-EHlUx0Cb.js";import"./useControlledState-sn3ZKmd0.js";import"./useField-BDsDA6Qn.js";import"./TextField.module-DdivwlC8.js";import"./Label-BjMsnx-W.js";import"./Dialog-Ifg-_Dys.js";import"./OverlayArrow-BB9H5V-4.js";import"./useResizeObserver-RtJjUC71.js";import"./Collection-j5V17JOV.js";import"./index-B5c10GPd.js";import"./Separator-CfH_KHh1.js";import"./SelectionManager-BGpjjaC5.js";import"./useEvent-B4Mg-F-r.js";import"./scrollIntoView-CqRJ3xkb.js";import"./SelectionIndicator-DcydaaTe.js";import"./useDescription-t2KTHtwf.js";import"./ListKeyboardDelegate-D0q8X-cK.js";import"./PressResponder-C191u1IG.js";import"./useLocalizedStringFormatter-BwFxFA-j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dhf1ggeJ.js";import"./getScrollParent-CrmutzXr.js";import"./VisuallyHidden-DMMbRnDT.js";import"./x-CEEDctr_.js";import"./createLucideIcon-DApbN3tp.js";import"./useLocalizedStringFormatter-CDDiG4UU.js";import"./Heading-Bl8ISOL7.js";import"./Button-u-2V4ARC.js";import"./Button.module-BB7N-cLd.js";import"./info-CKD6Bj3O.js";import"./Popover-DH2CFCE5.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
