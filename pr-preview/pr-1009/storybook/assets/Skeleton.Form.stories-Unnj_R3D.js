import{j as e,l}from"./iframe-BU6kIGzE.js";import{S as t}from"./Skeleton-CYCyvVvR.js";import{T as p}from"./TextField-qslq0V2e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BD8Ndz77.js";import"./utils-DwBB38ip.js";import"./TextField-CrzbavrF.js";import"./FieldError-CUk6ZN6c.js";import"./Text-JypUyMeF.js";import"./useFocusRing-Dvp7gJRw.js";import"./index-Dv6U3VwT.js";import"./index-DyZImytF.js";import"./Text-CQspy15V.js";import"./RSPContexts-BRqazcIV.js";import"./Form-D_2Tzhhs.js";import"./useFormValidation-DTxNX5vp.js";import"./Group-CfmetJY-.js";import"./Input-CnWilOKS.js";import"./Hidden-CGqS0Jzf.js";import"./Button-DOwpnfPC.js";import"./useLabels-DikblKAC.js";import"./useButton-DOAxkkBc.js";import"./useTextField-CYhGNxMz.js";import"./useControlledState-CCRLFJ5Q.js";import"./useField-Dy2in3Zn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BPdaWe9B.js";import"./Dialog-xlRMg6iz.js";import"./OverlayArrow-Bl3KLXNF.js";import"./useResizeObserver-B94eBDEG.js";import"./Collection-BF4xCepe.js";import"./index-DnHLYRqW.js";import"./Separator-XoRWK5dX.js";import"./SelectionManager-C271GyWd.js";import"./useEvent-Bzt2Vkll.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-eeJzDz1Z.js";import"./useDescription-B-6CLxOX.js";import"./ListKeyboardDelegate-2S5HS31x.js";import"./PressResponder-Ds6sB9YM.js";import"./useLocalizedStringFormatter-E1-lnqHI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvjedF0u.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BjLN-Bea.js";import"./Button-DUCzx4_4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dkmyjsow.js";import"./createLucideIcon-BFaI5vBG.js";import"./x-DLGK6h12.js";import"./Heading-Z4JZUrow.js";import"./info-8oCdIKAu.js";import"./Popover-Ds96ofCc.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
