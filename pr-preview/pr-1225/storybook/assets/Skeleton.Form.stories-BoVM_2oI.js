import{j as e,l}from"./iframe-BsjwZNBI.js";import{S as t}from"./Skeleton-CpFUYzp0.js";import{T as p}from"./TextField-Bc8V_NKj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-a0bT0DCr.js";import"./utils-DYyBIiF3.js";import"./FieldError-D8jlKqgQ.js";import"./Text-CAl4ECWA.js";import"./useFocusRing-C6pIr3Cw.js";import"./index-3FCY3Hw8.js";import"./index-mMukGJMX.js";import"./Text-lI4j22eJ.js";import"./RSPContexts-DsjC0Jzf.js";import"./Form-BPWLMBhz.js";import"./Group-CaJ55WRK.js";import"./Input-LN6ra5tV.js";import"./Hidden-B7nyiEix.js";import"./Button-RMvP7Zi7.js";import"./useLabel-zdvU6Gzq.js";import"./useLabels-BUVWty__.js";import"./useButton-IYi6gdVO.js";import"./useTextField-BqNbAQx5.js";import"./useControlledState-DSo337QI.js";import"./useField-DyZ12IOD.js";import"./TextField.module-DdivwlC8.js";import"./Label-CHsERhGd.js";import"./Dialog-n6NgD9rD.js";import"./OverlayArrow-CqCBe6cd.js";import"./useResizeObserver-BOr7Ttpr.js";import"./Collection-CgV2ccPo.js";import"./index-BsRC0pIN.js";import"./Separator-Dc7-7pSt.js";import"./SelectionManager-Cheph0Dh.js";import"./useEvent-Ce5NelAS.js";import"./scrollIntoView-Dj0SH0aW.js";import"./SelectionIndicator-dCH3KFUc.js";import"./useDescription-BBYDL9dC.js";import"./ListKeyboardDelegate-C8IRF0A7.js";import"./PressResponder-CMvnrM33.js";import"./useLocalizedStringFormatter-uzycqsy8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-xaEmAiB_.js";import"./getScrollParent-Ciimyvfo.js";import"./VisuallyHidden-BLVEBQnn.js";import"./ModalOverlay-D4kTi5LZ.js";import"./x-DNQ7ZgzB.js";import"./createLucideIcon-wuciem56.js";import"./useLocalizedStringFormatter-DjpujwKI.js";import"./Heading-CF6sSghd.js";import"./Button--2JTIhzL.js";import"./Button.module-BB7N-cLd.js";import"./info-CGJdKM5O.js";import"./Popover-GUkqRCLM.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
