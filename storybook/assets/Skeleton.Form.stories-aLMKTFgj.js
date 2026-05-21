import{j as e,l}from"./iframe-DWEKRq51.js";import{S as t}from"./Skeleton-B8rVKWHV.js";import{T as p}from"./TextField-C-1kP-AE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-p5edc5DP.js";import"./utils-CvB-FF5L.js";import"./FieldError-MXzqgYJW.js";import"./Text-DNCNcmFD.js";import"./useFocusRing-oyMjxI0a.js";import"./index-Du9C_P01.js";import"./index-MiMvQR0t.js";import"./Text-BNtmLJ5Q.js";import"./RSPContexts-Cwb07yZR.js";import"./Form-DTx40CXW.js";import"./Group-GsD_OCkz.js";import"./Input-DdOuc8_g.js";import"./Hidden-6-qbYCow.js";import"./Button-Bw7IRosA.js";import"./useLabel-07pv796X.js";import"./useLabels-P5GsSUyo.js";import"./useButton-CoUdGt-0.js";import"./useTextField-MbP2dyiG.js";import"./useControlledState-BpWescyC.js";import"./useField-BhhYiwGD.js";import"./TextField.module-DdivwlC8.js";import"./Label-CftGObrQ.js";import"./Dialog-31znzm89.js";import"./OverlayArrow-DoyV8V5a.js";import"./useResizeObserver-BiEPZYAp.js";import"./Collection-DgwJjlxw.js";import"./index-ZJcgO-78.js";import"./Separator-00c_RoBF.js";import"./SelectionManager-J7bJBg_Z.js";import"./useEvent-CTaznQxk.js";import"./scrollIntoView-CPfbYeEn.js";import"./SelectionIndicator-CTz6ddff.js";import"./useDescription-FiAMJAPm.js";import"./ListKeyboardDelegate-o9CjPHxf.js";import"./PressResponder-CFhbO3pj.js";import"./useLocalizedStringFormatter-Dh-ctuYo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DWKhMLsb.js";import"./getScrollParent-C8jbhUL1.js";import"./VisuallyHidden-D7nX5YNu.js";import"./ModalOverlay-BfreD5Mb.js";import"./x-DF20yF-2.js";import"./createLucideIcon-BuZoCqNM.js";import"./useLocalizedStringFormatter-BRwZafvm.js";import"./Heading-zr1kb0sx.js";import"./Button-CpAjWvzP.js";import"./Button.module-BB7N-cLd.js";import"./info-CGR3MvR0.js";import"./Popover-aw6phdmO.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
