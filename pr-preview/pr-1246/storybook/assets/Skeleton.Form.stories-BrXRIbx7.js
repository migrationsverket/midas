import{j as e,l}from"./iframe-D7aktJQV.js";import{S as t}from"./Skeleton-CrycvJrX.js";import{T as p}from"./TextField-BNKcUjai.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-2gLG9sXW.js";import"./utils-DNmLi0Ns.js";import"./FieldError-CgOE4cX4.js";import"./Text-DYj0Y-WB.js";import"./useFocusRing-BIeXmF9F.js";import"./index-D1nxkkFw.js";import"./index-BhjnNFRZ.js";import"./Text-DVQHaLD4.js";import"./RSPContexts-BW1FMwMd.js";import"./Form-C922N3ok.js";import"./Group-D6C5clZk.js";import"./Input-CAywiR04.js";import"./Hidden-B0OViUit.js";import"./Button-2JoqP8wJ.js";import"./useLabel-yzdCyS6F.js";import"./useLabels-DjGMth6f.js";import"./useButton-D9uxvQZx.js";import"./useTextField-BeAzynaV.js";import"./useControlledState-1uGcLhZ_.js";import"./useField-B0Fny93Q.js";import"./TextField.module-DdivwlC8.js";import"./Label-NM61z3GX.js";import"./Dialog-BvVkdRgj.js";import"./OverlayArrow-C76sK5jk.js";import"./useResizeObserver-D5zOd01J.js";import"./Collection-DzqeZ_-Z.js";import"./index-DxT1THtT.js";import"./Separator-BD3R25SH.js";import"./SelectionManager-CA5zQPsy.js";import"./useEvent-D7_OBK7N.js";import"./scrollIntoView-DKDMhDyf.js";import"./SelectionIndicator-DJ7uEc0n.js";import"./useDescription-NFTwlXYl.js";import"./ListKeyboardDelegate-Dwvuav7G.js";import"./PressResponder-C9r0Gjew.js";import"./useLocalizedStringFormatter-DRhhdLG7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-De76PqFR.js";import"./getScrollParent-Dt9wHwKE.js";import"./VisuallyHidden-ClpBCcmK.js";import"./ModalOverlay-DfDeEDlt.js";import"./x-z9l8IXo0.js";import"./createLucideIcon-Bis6T-wM.js";import"./useLocalizedStringFormatter-V3f1g4sa.js";import"./Heading-DQyNlRyp.js";import"./Button-D5CfzWf4.js";import"./Button.module-BB7N-cLd.js";import"./info-DXQSwoXw.js";import"./Popover-BjaklVsd.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
