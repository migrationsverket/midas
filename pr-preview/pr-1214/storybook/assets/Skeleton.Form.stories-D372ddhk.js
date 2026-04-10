import{j as e,l}from"./iframe-B22LvWbW.js";import{S as t}from"./Skeleton-C2kP3Zbx.js";import{T as p}from"./TextField-DrIAlHYW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DfeM_-Bg.js";import"./utils-BoCAfGQj.js";import"./FieldError-CaBPVaas.js";import"./Text-igIwftJt.js";import"./useFocusRing-COZ-KdCj.js";import"./index-COlz_oEn.js";import"./index-Ce19_x3I.js";import"./Text-C_6Wg08c.js";import"./RSPContexts-C7KIxgyf.js";import"./Form-loZ3Ref_.js";import"./Group-BQeFUN6h.js";import"./Input-CAiTMh7r.js";import"./Hidden-BOXGnL4u.js";import"./Button-DKfTRRv_.js";import"./useLabel-BMEjxuHj.js";import"./useLabels-CG8ZEWvO.js";import"./useButton-D-9O1J5B.js";import"./useTextField-CfmZtV3A.js";import"./useControlledState-IKfTJ6C0.js";import"./useField-CuA4l6HP.js";import"./TextField.module-DdivwlC8.js";import"./Label-YYnb5gHM.js";import"./Dialog-BqQxdS0P.js";import"./OverlayArrow-B3TmF933.js";import"./useResizeObserver-c0n_8mJZ.js";import"./Collection-CdjXBLNw.js";import"./index-DuOmNTUm.js";import"./Separator-BrFHALxw.js";import"./SelectionManager-CsU5-DFp.js";import"./useEvent-DcI05E6D.js";import"./scrollIntoView-7H8hj9e6.js";import"./SelectionIndicator-BOQ4NAlt.js";import"./useDescription-CWKmEZRS.js";import"./ListKeyboardDelegate-BeR0xWC1.js";import"./PressResponder-BNw9Ut1n.js";import"./useLocalizedStringFormatter-Cax5_603.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnYENIvM.js";import"./getScrollParent-BHXVU5eY.js";import"./VisuallyHidden-BkHBxjny.js";import"./Dialog-CPqTyhcA.js";import"./x-Dgd0H-9L.js";import"./createLucideIcon-B8tzovcT.js";import"./useLocalizedStringFormatter-Bx-OZ9xC.js";import"./Heading-CoAlJEvR.js";import"./Button-sJK-n8WP.js";import"./Button.module-BB7N-cLd.js";import"./info-BgeGSH12.js";import"./Popover-v0UKaGbn.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
