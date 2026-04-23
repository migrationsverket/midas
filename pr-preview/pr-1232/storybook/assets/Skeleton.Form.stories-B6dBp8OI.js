import{j as e,l}from"./iframe-CM9gzC_-.js";import{S as t}from"./Skeleton-Ciib1P76.js";import{T as p}from"./TextField-D8qexgeV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CLWmP1Ll.js";import"./utils-CXcBw8mX.js";import"./FieldError-Br-BXIw9.js";import"./Text-Bft1iTTC.js";import"./useFocusRing-Bz17EpSW.js";import"./index-CVH0l-Rs.js";import"./index-Bg9NulRa.js";import"./Text-DvQTbzsU.js";import"./RSPContexts-BGBhlXAt.js";import"./Form-C7eTyKCv.js";import"./Group-CFJbaa2e.js";import"./Input-Cgewi5HM.js";import"./Hidden-D0XxjEDh.js";import"./Button-4PfHMxFE.js";import"./useLabel-DNzyNjQ0.js";import"./useLabels-_1rwYSL1.js";import"./useButton-BDzD217S.js";import"./useTextField-BsaCBvZg.js";import"./useControlledState-D7RofSAB.js";import"./useField-DZeEaImT.js";import"./TextField.module-DdivwlC8.js";import"./Label-DEaMeTX8.js";import"./Dialog-D2hci_5_.js";import"./OverlayArrow-DDdq8LLH.js";import"./useResizeObserver-ChNZACRA.js";import"./Collection-BtQP2I1Q.js";import"./index-BDQxevPm.js";import"./Separator-Cz6RPDpT.js";import"./SelectionManager-CoSHJlpm.js";import"./useEvent-CmguT4Gg.js";import"./scrollIntoView-3rRtgk00.js";import"./SelectionIndicator-CXNqpn4L.js";import"./useDescription-BQW7Zq6D.js";import"./ListKeyboardDelegate-DZJ2K8C0.js";import"./PressResponder-CMByKJLe.js";import"./useLocalizedStringFormatter-DGUVN_Wt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-chQcOBj7.js";import"./getScrollParent-B7Te1-pw.js";import"./VisuallyHidden-CyPA52id.js";import"./ModalOverlay-CDYj_QTs.js";import"./x-CRr9CCYv.js";import"./createLucideIcon-gLaeDi4P.js";import"./useLocalizedStringFormatter-DuVOZRpg.js";import"./Heading-DcYuxKBt.js";import"./Button-DVDe5XTB.js";import"./Button.module-BB7N-cLd.js";import"./info-DSV1pWOH.js";import"./Popover-CpRqXlTL.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
