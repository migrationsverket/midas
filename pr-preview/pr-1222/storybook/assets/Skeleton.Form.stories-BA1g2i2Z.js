import{j as e,l}from"./iframe-DD86HrH2.js";import{S as t}from"./Skeleton-B74QgYGc.js";import{T as p}from"./TextField-CS98uLtx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CQC_8Pps.js";import"./utils-COpPBJUa.js";import"./FieldError-DI4cB23D.js";import"./Text-DuibH3v7.js";import"./useFocusRing-BexPlixw.js";import"./index-BRqGpYZa.js";import"./index-c37RaAEE.js";import"./Text-CmsABE1n.js";import"./RSPContexts-OgLCyc19.js";import"./Form-CeuJdreE.js";import"./Group-B11b6zrd.js";import"./Input-DaAIxGI2.js";import"./Hidden-DxNA2jAI.js";import"./Button-Dlxsdkdy.js";import"./useLabel-Bo2GeM8m.js";import"./useLabels-C7ZzmUeQ.js";import"./useButton-D2fUs3pD.js";import"./useTextField-BtX9gWJC.js";import"./useControlledState-k07B6mZK.js";import"./useField-K4C8pkC3.js";import"./TextField.module-DdivwlC8.js";import"./Label-SzfbAhNJ.js";import"./Dialog-CrlKk7BZ.js";import"./OverlayArrow-CgrBU6Ge.js";import"./useResizeObserver-B3pATvfR.js";import"./Collection-CJicqcV9.js";import"./index-BMz79FiH.js";import"./Separator-B4Ge26sb.js";import"./SelectionManager-BvPH3Yxz.js";import"./useEvent-ChusgNbw.js";import"./scrollIntoView-CuCYXK6V.js";import"./SelectionIndicator-BdMqMuAi.js";import"./useDescription-CyBHIiEQ.js";import"./ListKeyboardDelegate-qA9M4eDd.js";import"./PressResponder-BhsHjNTF.js";import"./useLocalizedStringFormatter-CL-qCV33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CWGeksXq.js";import"./getScrollParent-CvIpxtIQ.js";import"./VisuallyHidden-DI8ejz9M.js";import"./ModalOverlay-C5rtQ2Yv.js";import"./x-BX_qSKOQ.js";import"./createLucideIcon-DzgrZqcN.js";import"./useLocalizedStringFormatter-rPCKOnn1.js";import"./Heading-BxI44wnh.js";import"./Button-BFvCKzsz.js";import"./Button.module-BB7N-cLd.js";import"./info-6PV5BiCf.js";import"./Popover-Dusd1fK0.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
