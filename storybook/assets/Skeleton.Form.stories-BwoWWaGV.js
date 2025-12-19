import{j as e,l}from"./iframe-CAhUTzpa.js";import{S as t}from"./Skeleton-CEL4FZwL.js";import{T as p}from"./TextField-Boh9B80B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DAXcPrxr.js";import"./utils-BBEb1i5a.js";import"./TextField-C3BzTobi.js";import"./FieldError-BNkxmj-u.js";import"./Text-DytUCpzS.js";import"./useFocusRing-DXkBxwcs.js";import"./index-laAtK-vd.js";import"./index-C0V27OqG.js";import"./Text-Dc50-ZiZ.js";import"./RSPContexts-C0EMNRL0.js";import"./Form-BT-tAfh7.js";import"./useFormValidation-BaOTM6Qe.js";import"./Group-uynE1wPp.js";import"./Input-CSM6KDUU.js";import"./Hidden-BSm-jApx.js";import"./Button-Bw4aoosc.js";import"./useLabels-LVaI7Ckp.js";import"./useButton-30T4O4rB.js";import"./useTextField-DdEC4wKZ.js";import"./useControlledState-BCuX3ll3.js";import"./useField-CcZ_CJQd.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-6AsbOmxL.js";import"./Dialog-CJYw2RFr.js";import"./OverlayArrow-DKTnq9TC.js";import"./useResizeObserver-Bs_xAFtz.js";import"./Collection-B9Z6ePs_.js";import"./index-BYTdbooY.js";import"./Separator-1EiuOh5S.js";import"./SelectionManager-CMYerw5D.js";import"./useEvent-CBu_soYi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ds1w6LMQ.js";import"./useDescription-CeOYRicD.js";import"./ListKeyboardDelegate-UMeU1xj9.js";import"./PressResponder-Cox4OqQa.js";import"./useLocalizedStringFormatter-Dooq5aoS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5kfj1-j.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DXeRsBp-.js";import"./Button-CEwmyXrj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cg4zfByW.js";import"./createLucideIcon-d4-YdXSh.js";import"./x-BoMw_Obi.js";import"./Heading-DQZUCzZD.js";import"./info-DQVMF0cE.js";import"./Popover-CsDif3Uo.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
