import{j as e,l}from"./iframe-CZr0KooT.js";import{S as t}from"./Skeleton-BOzxZd3F.js";import{T as p}from"./TextField-DWf4a0E7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BS-rzJRo.js";import"./utils-C5atDzqm.js";import"./FieldError-CZucTPlY.js";import"./Text-DasSw5Lo.js";import"./useFocusRing-B8L-HrJZ.js";import"./index-By5QsIbW.js";import"./index-BLMOfdQA.js";import"./Text-BIiEvqpP.js";import"./RSPContexts-BdxpiS-s.js";import"./Form-C0THYwkm.js";import"./Group-CWWaXOIl.js";import"./Input-GHmM1NN2.js";import"./Hidden-DSnmYJrK.js";import"./Button-BW2eFo1r.js";import"./useLabel-BC4w3s3i.js";import"./useLabels-DBo1sJWI.js";import"./useButton-DL-yMXOz.js";import"./useTextField-BpMBGabS.js";import"./useControlledState-BYpa5spl.js";import"./useField-GqIJPyEy.js";import"./TextField.module-DdivwlC8.js";import"./Label-FRGLFgSn.js";import"./Dialog-CrSZXTKg.js";import"./OverlayArrow-DlIcz3UG.js";import"./useResizeObserver-DSJ0-9gG.js";import"./Collection-DTHlVKOq.js";import"./index-BSRvY494.js";import"./Separator-DwKrjug2.js";import"./SelectionManager-BFXs2QF5.js";import"./useEvent-D8s-tVaX.js";import"./scrollIntoView-CIALb2MR.js";import"./SelectionIndicator-konGZj98.js";import"./useDescription-Q_xHtQSY.js";import"./ListKeyboardDelegate-YvmZM1FZ.js";import"./PressResponder-yeA3wPi_.js";import"./useLocalizedStringFormatter-BJKNLBfJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-AmsNMW2r.js";import"./getScrollParent-zZf70wh8.js";import"./VisuallyHidden-f7pY2arW.js";import"./ModalOverlay-PL2EwKXh.js";import"./x-DO3x21yI.js";import"./createLucideIcon-DctSE2KV.js";import"./useLocalizedStringFormatter-BF6CSovG.js";import"./Heading-D0aM9vsP.js";import"./Button-Cg4eDy57.js";import"./Button.module-BB7N-cLd.js";import"./info-DNP-Yd4B.js";import"./Popover-Dk2OxN23.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
