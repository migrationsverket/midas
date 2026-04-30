import{j as e,l}from"./iframe-Ex-KEKbR.js";import{S as t}from"./Skeleton-BuLlBT9T.js";import{T as p}from"./TextField-CxMZaaiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B79_bFpb.js";import"./utils-Dq_8TIe4.js";import"./FieldError-CgmLooUG.js";import"./Text-CeEAoIdH.js";import"./useFocusRing-H-1VYNNS.js";import"./index-DADZxfgg.js";import"./index-DTNdKqrN.js";import"./Text-DJaiOuNK.js";import"./RSPContexts-DxlwqgCa.js";import"./Form-CXAt5UpX.js";import"./Group-uGzZW66D.js";import"./Input-CN9bHUmc.js";import"./Hidden-CyDaCMoS.js";import"./Button-C8JSYTF8.js";import"./useLabel-iQaKdHKt.js";import"./useLabels-PlDzf5VQ.js";import"./useButton-It03dpfb.js";import"./useTextField-BU2Zn2Z3.js";import"./useControlledState-OUr4VazD.js";import"./useField-BOXq6rqV.js";import"./TextField.module-DdivwlC8.js";import"./Label-C9Jm7gW_.js";import"./Dialog-CRxTXFHb.js";import"./OverlayArrow-BEp85xx4.js";import"./useResizeObserver-EpcjSYJm.js";import"./Collection-Bge0dQHT.js";import"./index-CJUwhwxK.js";import"./Separator-dkZZPlDE.js";import"./SelectionManager-XXgR8HaZ.js";import"./useEvent-B4t1a7CS.js";import"./scrollIntoView-D4kGYOib.js";import"./SelectionIndicator-DgoNvaWX.js";import"./useDescription-Bk4LSLU-.js";import"./ListKeyboardDelegate-Bg6ymlV0.js";import"./PressResponder-fPkhSkCj.js";import"./useLocalizedStringFormatter-C1SYv3sl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BtJRc29T.js";import"./getScrollParent-ClgoPRH9.js";import"./VisuallyHidden-B1UrQI4k.js";import"./ModalOverlay--BWN3whO.js";import"./x-D_4t1M2T.js";import"./createLucideIcon-CnalT5R6.js";import"./useLocalizedStringFormatter-CTOyl-7s.js";import"./Heading-Hwdatq5V.js";import"./Button-BAZVnFvD.js";import"./Button.module-BB7N-cLd.js";import"./info-1tlzplCu.js";import"./Popover-CPeSqkYI.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
