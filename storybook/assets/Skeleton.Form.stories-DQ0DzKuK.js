import{j as e,l}from"./iframe-DAdLp1QF.js";import{S as t}from"./Skeleton-BruW3HOE.js";import{T as p}from"./TextField-Gv9W1F1G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DD2AfKAd.js";import"./utils-ByUIGDWY.js";import"./TextField-D21XclzZ.js";import"./FieldError-FVxfyxcS.js";import"./Text-SxkkCqAs.js";import"./useFocusRing-D53tZ_0K.js";import"./index-DoL8Y7w4.js";import"./index-QU8jILku.js";import"./Text-CopR-Qh3.js";import"./RSPContexts-D2jy_A4X.js";import"./Form-CunIAvBc.js";import"./useFormValidation-Csyf_1Q2.js";import"./Group-DQXpyrMc.js";import"./Input-DZHYgmsM.js";import"./Hidden-B_XHwn2B.js";import"./Button-fvyThmWu.js";import"./useLabels-Ca5jvo4m.js";import"./useButton-D93eGxVU.js";import"./useTextField-CBtFWLA6.js";import"./useControlledState-Cjv7AWlH.js";import"./useField-I0_MMok3.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B_97ycLG.js";import"./Dialog-Do83UJSD.js";import"./OverlayArrow-DLensElf.js";import"./useResizeObserver-EV8RWbU7.js";import"./Collection-MgqcXUJ1.js";import"./index-9ORdlLf0.js";import"./Separator-j1BXl5YZ.js";import"./SelectionManager-Drlu2O8r.js";import"./useEvent-DlPeIjzj.js";import"./scrollIntoView-DYxQjL77.js";import"./SelectionIndicator-B-OFG3Yf.js";import"./useDescription-CybEfZFS.js";import"./ListKeyboardDelegate-Xd6EmlYN.js";import"./PressResponder-DCu-6Uju.js";import"./useLocalizedStringFormatter-CNpWk1vP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ijb0Zcwq.js";import"./VisuallyHidden-Ctoge_gF.js";import"./Button-DQbQp0QJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzYUMjPp.js";import"./createLucideIcon-DWkxk0NR.js";import"./x-D7c1f2O5.js";import"./Heading-CaYbTykr.js";import"./info-hzhf19VQ.js";import"./Popover-BWE5DCEV.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
