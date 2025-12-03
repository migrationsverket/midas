import{j as e,l}from"./iframe-DAWhaW2t.js";import{S as t}from"./Skeleton-DiAKvL7o.js";import{T as d}from"./TextField-DytwmJxH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DxA5FX4H.js";import"./utils-BR5sLtXt.js";import"./TextField-DaiTrnUj.js";import"./FieldError-Ba9bdy0b.js";import"./Text-D2IArQsC.js";import"./useFocusRing-BovWNloU.js";import"./index-D684xh88.js";import"./index-domxwQpS.js";import"./Text-CgRVAj4B.js";import"./RSPContexts-CAzvZUzf.js";import"./Form-B0ZxuZFK.js";import"./useFormValidation-DvW8pyhT.js";import"./Group-BnbaiT3j.js";import"./Input-BX5vuXOM.js";import"./Hidden-B7a6sUEi.js";import"./Button-B8FC0WHw.js";import"./useLabels-CwJrZ3kb.js";import"./useButton-Df4qwn4n.js";import"./useTextField-DLzrNh7c.js";import"./useControlledState-y8wjQEhG.js";import"./useField-DSvnQz-g.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-cXH1BtTt.js";import"./Dialog-D7IhSSCS.js";import"./OverlayArrow-DTlGkn-r.js";import"./useResizeObserver-CRTqY8le.js";import"./Collection-C1NcBIdQ.js";import"./index-BBuRyoIs.js";import"./Separator-CJccQN9g.js";import"./SelectionManager-Ct_s9VeM.js";import"./useEvent-CayB1s0N.js";import"./scrollIntoView-BWTP8Mlk.js";import"./SelectionIndicator-DzeJSSXw.js";import"./useDescription-BQlYcHFl.js";import"./ListKeyboardDelegate-D6_gwslt.js";import"./PressResponder-tovDBpy9.js";import"./useLocalizedStringFormatter-Bud54IOx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ciw6Mddl.js";import"./VisuallyHidden-z0IVTDH3.js";import"./Button-B_JidUJl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGsrEw_W.js";import"./createLucideIcon-DPsPtM0A.js";import"./x-GRNLuSgY.js";import"./Heading-0ZDi0Y6q.js";import"./info-BFF3jV6F.js";import"./Popover-DUZiWOye.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
