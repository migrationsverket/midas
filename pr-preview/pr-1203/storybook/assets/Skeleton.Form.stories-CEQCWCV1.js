import{j as e,l}from"./iframe-BObKWO8P.js";import{S as t}from"./Skeleton-DYKj-sqf.js";import{T as p}from"./TextField-90ET3Tlo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-TW2Yc7vT.js";import"./utils-L1ZXEAM0.js";import"./FieldError-C85eAV5x.js";import"./Text-B0SIJ0ar.js";import"./useFocusRing-CEJP2sKk.js";import"./index-DZLGwHwk.js";import"./index-w-ZTYn4u.js";import"./Text-BL0-OeDh.js";import"./RSPContexts--YEt9orp.js";import"./Form-DVIWY3z8.js";import"./Group-DN6AoKzN.js";import"./Input-Sgu-PXBi.js";import"./Hidden-pBI9L9bQ.js";import"./Button-Bj1Gx374.js";import"./useLabel-CCF_4gB4.js";import"./useLabels-CPcqYQYg.js";import"./useButton-0-s8uA0b.js";import"./useTextField-BGTqg0R_.js";import"./useControlledState-2AKkTK1v.js";import"./useField-B2ENXugf.js";import"./TextField.module-DdivwlC8.js";import"./Label-hCroOn6u.js";import"./Dialog-Ja_3xXAy.js";import"./OverlayArrow-BMD8KIF5.js";import"./useResizeObserver-3VgU2Mfv.js";import"./Collection-BvFqWJhU.js";import"./index-Bvyw-qy_.js";import"./Separator-DNK48uvM.js";import"./SelectionManager-CHzFMA0s.js";import"./useEvent-BEm0Eqbv.js";import"./scrollIntoView-CMGg4YQW.js";import"./SelectionIndicator-BgMQIXdK.js";import"./useDescription-CgE9sFBH.js";import"./ListKeyboardDelegate-BWCuCnFj.js";import"./PressResponder-E3b5fKgd.js";import"./useLocalizedStringFormatter-DdHSxoKc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DfesOHlA.js";import"./getScrollParent-BEOCR9gy.js";import"./VisuallyHidden-C2-WAH_L.js";import"./x-Ci83I339.js";import"./createLucideIcon-Bq0_1Yjp.js";import"./useLocalizedStringFormatter-Bt1-Aj9O.js";import"./Heading-xn6cGSx1.js";import"./Button-CF3n8BCq.js";import"./Button.module-BB7N-cLd.js";import"./info-C3U6dhG6.js";import"./Popover-C2N9jWDY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
