import{j as e,l}from"./iframe-rItT_jfY.js";import{S as t}from"./Skeleton-CYqeXHQm.js";import{T as d}from"./TextField-ClxOevtj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DM5RiOt0.js";import"./utils-CPF4-yP8.js";import"./TextField-DFOzO-ha.js";import"./FieldError-Cvsb7is6.js";import"./Text-DDMiWQFi.js";import"./useFocusRing-DGFc7HbQ.js";import"./index-BnPbWBMv.js";import"./index-D8DgLnGQ.js";import"./Text-FNlrqDfC.js";import"./RSPContexts-DzXYmQki.js";import"./Form-xZZMOzJK.js";import"./useFormValidation-C8P0UNS6.js";import"./Group-B7xOX0uR.js";import"./Input-DLD4_IPw.js";import"./Hidden-n1HYXibJ.js";import"./Button-B5QUqElW.js";import"./useLabels-BtpKNtTB.js";import"./useButton-BqLzl4IJ.js";import"./useTextField-BepY0cYc.js";import"./useControlledState-Bzf4gGGh.js";import"./useField-7Rs9hAAC.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CVA51VOr.js";import"./Dialog-BZhjlrsa.js";import"./OverlayArrow-CHMM6Trm.js";import"./useResizeObserver-DHx_VHvt.js";import"./Collection-QxkacQyP.js";import"./index-lTN4k8mO.js";import"./Separator-DP_B8qjA.js";import"./SelectionManager-ClX1YJNW.js";import"./useEvent-Dh1rWvm4.js";import"./scrollIntoView-f5b4LpVi.js";import"./SelectionIndicator-DzyDNqXF.js";import"./useDescription-CcHx15SB.js";import"./ListKeyboardDelegate-DIxIliT5.js";import"./PressResponder-Q0fo8lIs.js";import"./useLocalizedStringFormatter-CTRxJDJV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BSPxFyqb.js";import"./VisuallyHidden-BJd1ReHn.js";import"./Button-DrR1Xrnd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-MQKdyit4.js";import"./createLucideIcon-B9nFww81.js";import"./x-CzCgO8Qu.js";import"./Heading-B-doG5oq.js";import"./info-C9mgKuUL.js";import"./Popover-BungVBqP.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
