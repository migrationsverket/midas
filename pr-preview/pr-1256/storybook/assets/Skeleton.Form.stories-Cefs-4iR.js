import{j as e,l}from"./iframe-CdIQ5N7i.js";import{S as t}from"./Skeleton-BaCdEkfa.js";import{T as p}from"./TextField-CNaLLoT7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B1I6zSPO.js";import"./utils-BvbfqFty.js";import"./FieldError-DJ-HR3RU.js";import"./Text-s2Qhe30V.js";import"./useFocusRing-CAL8UmMI.js";import"./index-QXcgcGVQ.js";import"./index-azuTNlQK.js";import"./Text-uW2g-Rij.js";import"./RSPContexts-CLmzGhES.js";import"./Form-B0G4WvdU.js";import"./Group-GT3GuVWM.js";import"./Input-CYu6oXCT.js";import"./Hidden-BNc7AwrM.js";import"./Button-UiktFLbJ.js";import"./useLabel-BNWj_Gss.js";import"./useLabels-BEQABj6w.js";import"./useButton-iVPzxrJK.js";import"./useTextField-BVCH004n.js";import"./useControlledState-BRvuk5rm.js";import"./useField-FRI832V4.js";import"./TextField.module-DdivwlC8.js";import"./Label-C5yvvB9E.js";import"./Dialog-DvB2HcO3.js";import"./OverlayArrow-BzOb33Ml.js";import"./useResizeObserver-fQDQHxcX.js";import"./Collection-BNNDqxaK.js";import"./index-CAdlUQcW.js";import"./Separator-DISlP-zV.js";import"./SelectionManager-DUIeCRl1.js";import"./useEvent-CJQiJoWr.js";import"./scrollIntoView-DQzQ-CtO.js";import"./SelectionIndicator-C8xnssq6.js";import"./useDescription--y6wfX3r.js";import"./ListKeyboardDelegate-BRa5xE-n.js";import"./PressResponder-W6JnnhzP.js";import"./useLocalizedStringFormatter-Thbc0p-z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwnKHfBJ.js";import"./getScrollParent-B0hpSf3_.js";import"./VisuallyHidden-BhdIXlKy.js";import"./ModalOverlay-D3doyH6r.js";import"./x-CLOMyykU.js";import"./createLucideIcon-D9zj-qmC.js";import"./useLocalizedStringFormatter-YNJ9gtMz.js";import"./Heading-CYqOGIzN.js";import"./Button-kx69_fzD.js";import"./Button.module-BB7N-cLd.js";import"./info-BkSnkljK.js";import"./Popover-Bi_1XBV1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
