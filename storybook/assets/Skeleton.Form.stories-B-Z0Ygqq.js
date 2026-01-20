import{j as e,l}from"./iframe-Co0SsNj6.js";import{S as t}from"./Skeleton-CvDgxmIW.js";import{T as p}from"./TextField-BIoUX6uF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-9ie_uri3.js";import"./utils-DoIZJ7cj.js";import"./TextField-BlpZ5z-j.js";import"./FieldError-BD2HEwuR.js";import"./Text-4sNYTzks.js";import"./useFocusRing-9k5ozzKg.js";import"./index-D1rsIpeY.js";import"./index-DMENUWva.js";import"./Text-BSTUUX0z.js";import"./RSPContexts-CrZ3ys4B.js";import"./Form-BKJfkX3I.js";import"./useFormValidation-DXVxdhpA.js";import"./Group-CnUSXpYb.js";import"./Input-B0TW0hOQ.js";import"./Hidden-CossIpZl.js";import"./Button-0-4Kgh6r.js";import"./useLabels-LGizr97P.js";import"./useButton-Cob-AGV8.js";import"./useTextField-CgD0NSef.js";import"./useControlledState-CAAFyILJ.js";import"./useField-C47SklL7.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C0IITPi0.js";import"./Dialog-CKF9-Ac4.js";import"./OverlayArrow-RtLaAtvr.js";import"./useResizeObserver-Btkcsgi2.js";import"./Collection-C0IDLnfh.js";import"./index-D0DFVPuZ.js";import"./Separator-CObRPdSZ.js";import"./SelectionManager-BMm7iJXk.js";import"./useEvent-DRV4VT7N.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CF_YgRba.js";import"./useDescription-BDzmu5j_.js";import"./ListKeyboardDelegate-C4U2P3XN.js";import"./PressResponder-CTi1DIIf.js";import"./useLocalizedStringFormatter-BcSWiZ19.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CdvcH_Kd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-m5iKMMV5.js";import"./Button-6Dau2X37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc2vZIqX.js";import"./createLucideIcon-groEP49X.js";import"./x-DSoxV8Ho.js";import"./Heading-BX87Ibq6.js";import"./info-DeWotBib.js";import"./Popover-CU9jXD-T.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
