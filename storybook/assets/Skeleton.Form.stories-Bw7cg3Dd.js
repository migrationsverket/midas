import{j as e,l}from"./iframe-8IAuJWNM.js";import{S as t}from"./Skeleton-BXyIt_ag.js";import{T as p}from"./TextField-EYKuHLcI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-H3HD1FYK.js";import"./utils-DyygkSlh.js";import"./TextField-BO1TzSFL.js";import"./FieldError-CadBMv3M.js";import"./Text-BjJSlFEE.js";import"./useFocusRing-B47DL3hX.js";import"./index-CB6TLzp4.js";import"./index-BmMgCWbD.js";import"./Text-BPO4namz.js";import"./RSPContexts-SKLp7B5s.js";import"./Form-CjpCQL1Q.js";import"./useFormValidation-BTqQXxAG.js";import"./Group-DFUFAPcE.js";import"./Input-C7N5ePwD.js";import"./Hidden-BPY21Mhp.js";import"./Button-BA4G7Dp7.js";import"./useLabels-Cjx1sCZW.js";import"./useButton-DKZseVPF.js";import"./useTextField-BcsYtwGj.js";import"./useControlledState-B1Gkxy2y.js";import"./useField-KDqZZJ02.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DgBcmBnc.js";import"./Dialog-Cqry6Aon.js";import"./OverlayArrow-oQTy-OmX.js";import"./useResizeObserver-Cmytyy8J.js";import"./Collection-cCOjAfI9.js";import"./index-N0Knnvj8.js";import"./Separator-WVGlWIcl.js";import"./SelectionManager-CBXhApTy.js";import"./useEvent-Bg6Tse3j.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C5I6stQh.js";import"./useDescription-CmF9R5md.js";import"./ListKeyboardDelegate-VBWxipQV.js";import"./PressResponder-BW5YywL4.js";import"./useLocalizedStringFormatter-BLtacC3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Be_Cfo3p.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BFkso3TE.js";import"./Button-DaIiUukL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVRAeowb.js";import"./createLucideIcon-B5ClGLmI.js";import"./x-ChuqJttK.js";import"./Heading-Zpm27S2Z.js";import"./info-ukyOXwhb.js";import"./Popover-NfGU5fTW.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
