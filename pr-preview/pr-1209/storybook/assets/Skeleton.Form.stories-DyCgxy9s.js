import{j as e,l}from"./iframe-CEYCzj7u.js";import{S as t}from"./Skeleton-CzE9ARVu.js";import{T as p}from"./TextField-XXsfsMjg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BF0ex0kh.js";import"./utils-AQIE0kDv.js";import"./FieldError-BW7B152f.js";import"./Text-BtotI6hp.js";import"./useFocusRing-Dp-W9h8R.js";import"./index-BT04Vy5P.js";import"./index-BaKsLBWM.js";import"./Text-BKjU8N6L.js";import"./RSPContexts-vK1IDStc.js";import"./Form-C-hDIK2G.js";import"./Group-CGDtkb1O.js";import"./Input-DLHz4SZ9.js";import"./Hidden-BwxAj0d8.js";import"./Button-C7JuJvDF.js";import"./useLabel-BMWHmK7D.js";import"./useLabels-BdGOjTVQ.js";import"./useButton-15OKOO7P.js";import"./useTextField-CLrsVGLU.js";import"./useControlledState-BgNKedVs.js";import"./useField-hWGv7I8v.js";import"./TextField.module-DdivwlC8.js";import"./Label-CWkCAxQ5.js";import"./Dialog-__ogyhBQ.js";import"./OverlayArrow-CryUpgVZ.js";import"./useResizeObserver-ByR6jXTM.js";import"./Collection-C16s-VZy.js";import"./index-BY5MwQGH.js";import"./Separator-iR4yv8Ww.js";import"./SelectionManager-G6B6xgaW.js";import"./useEvent-B9xcl8_k.js";import"./scrollIntoView-BCOX-ymx.js";import"./SelectionIndicator-6aWYUD_t.js";import"./useDescription-7tiDq9ws.js";import"./ListKeyboardDelegate-BNrqLeaN.js";import"./PressResponder-Daz5dWoT.js";import"./useLocalizedStringFormatter-DsBO9UZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rud58Vjt.js";import"./getScrollParent-DNFkay4Z.js";import"./VisuallyHidden-B3AOW4Om.js";import"./Dialog-9iEeQYdN.js";import"./x-ubboyZZG.js";import"./createLucideIcon-Djfjk74V.js";import"./useLocalizedStringFormatter-B6vMXcu5.js";import"./Heading-BRZF6O29.js";import"./Button-DjNzlNeH.js";import"./Button.module-BB7N-cLd.js";import"./info-C8moI5QB.js";import"./Popover-CSxEPm7k.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
