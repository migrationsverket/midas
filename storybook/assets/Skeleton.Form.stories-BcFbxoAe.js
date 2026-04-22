import{j as e,l}from"./iframe-DIPCj7z0.js";import{S as t}from"./Skeleton-C7QDoAI2.js";import{T as p}from"./TextField-BMEYa7gU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CaOwHeCj.js";import"./utils-1Jw3myEp.js";import"./FieldError-XsW3k3ta.js";import"./Text-DfA3YTZF.js";import"./useFocusRing-CGC0Rs2i.js";import"./index-BMYuBTg8.js";import"./index-CLZ6wIud.js";import"./Text-CutZY7em.js";import"./RSPContexts-COR8iAs7.js";import"./Form-Dqy01Zmd.js";import"./Group-DmXP4qj7.js";import"./Input-io2_dlmK.js";import"./Hidden-DixPPjgd.js";import"./Button-XWLhDASZ.js";import"./useLabel-BuVDKvpb.js";import"./useLabels-a5aS50Gu.js";import"./useButton-B6P9-uWq.js";import"./useTextField-Gi9lLcxJ.js";import"./useControlledState-BD_nezFk.js";import"./useField-DyYmemdb.js";import"./TextField.module-DdivwlC8.js";import"./Label-BTBJQ3TD.js";import"./Dialog-BRQpSR1m.js";import"./OverlayArrow-BZA9xyhr.js";import"./useResizeObserver-6MYBTeZJ.js";import"./Collection-DlaTgdHp.js";import"./index-BtYgIjFq.js";import"./Separator-D67jdWyC.js";import"./SelectionManager-C1peoY7k.js";import"./useEvent-C_MGKzuJ.js";import"./scrollIntoView-BoRCBfrM.js";import"./SelectionIndicator-BBRkAeK5.js";import"./useDescription-FuIsSDja.js";import"./ListKeyboardDelegate-DJcS2y8P.js";import"./PressResponder-CF389slw.js";import"./useLocalizedStringFormatter-CetMLESo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYTiBTJq.js";import"./getScrollParent-CrP1MxC4.js";import"./VisuallyHidden-B7PA1Ynv.js";import"./ModalOverlay-Cy-0_4Nk.js";import"./x-i9MPadT4.js";import"./createLucideIcon-BXzguI7t.js";import"./useLocalizedStringFormatter-CD9GRZFK.js";import"./Heading-BZjt7HWH.js";import"./Button-Dd5S0QsR.js";import"./Button.module-BB7N-cLd.js";import"./info-DREV89Uo.js";import"./Popover-CMPrkTUX.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
