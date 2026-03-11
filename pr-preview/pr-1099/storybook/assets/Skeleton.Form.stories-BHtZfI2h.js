import{j as e,l}from"./iframe-COAE3Z9t.js";import{S as t}from"./Skeleton-BYjGQjOb.js";import{T as p}from"./TextField-BBATqQbR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bw7jNTyP.js";import"./utils-CJTCHx3j.js";import"./FieldError-BUClrU9H.js";import"./Text-CHPBuoo7.js";import"./useFocusRing-DgA4QWCK.js";import"./index-B8ayM9Q4.js";import"./index-D6Rzgd1u.js";import"./Text-D5jwfrrb.js";import"./RSPContexts-DDx5Z7r8.js";import"./Form-DRlLMzfE.js";import"./useFormValidation-Ci8Vocq6.js";import"./Group-CfoV75tv.js";import"./Input-Bb0ox7ht.js";import"./Hidden-DT0_4oHH.js";import"./Button-DkXMbdmz.js";import"./useLabels-BGror0wH.js";import"./useButton-CNbG0xHv.js";import"./useTextField-BrtqHMTO.js";import"./useControlledState-CTgjAYDB.js";import"./useField-DGHNroJj.js";import"./TextField.module-DdivwlC8.js";import"./Label-CF0gTG6U.js";import"./Dialog-ByRpqEAM.js";import"./OverlayArrow-RufaqvEt.js";import"./useResizeObserver-DORdwtk3.js";import"./Collection-ByMpo7I3.js";import"./index-CzqqtctD.js";import"./Separator-CvsTyE1s.js";import"./SelectionManager-BvBNk-rF.js";import"./useEvent-DxDv-_7a.js";import"./scrollIntoView-HBj0czqw.js";import"./SelectionIndicator-ChKBr26Q.js";import"./useDescription-CznxHAqb.js";import"./ListKeyboardDelegate-CiqA-C_A.js";import"./PressResponder-CTqg1NS1.js";import"./useLocalizedStringFormatter-DNGn7vgv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dq7kupw9.js";import"./getScrollParent-BVX3VPRd.js";import"./VisuallyHidden-Wni-KnVe.js";import"./Button-Bowambor.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D1UulV0U.js";import"./createLucideIcon-DDrtG7WW.js";import"./x-3pGmhthR.js";import"./Heading-BQQ2Aro1.js";import"./info-lMvUFSo-.js";import"./Popover-Ch-U9TCE.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
