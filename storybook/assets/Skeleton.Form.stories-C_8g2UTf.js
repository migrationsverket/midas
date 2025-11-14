import{j as e,l}from"./iframe-DZEIteCN.js";import{S as t}from"./Skeleton-Ck4AnC-r.js";import{T as d}from"./TextField-IDTVW6cF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CRatZKSC.js";import"./utils-eXp6hAHi.js";import"./TextField-D8FjOsAk.js";import"./FieldError-ChK9olYH.js";import"./Text-Cc24C9N6.js";import"./useFocusRing-TrwNJxcu.js";import"./index-DKBVfWmd.js";import"./index-hdIbQAxi.js";import"./Text-DBxfC0s8.js";import"./RSPContexts-BY213k3w.js";import"./Form-CYimGHgO.js";import"./useFormValidation-WsqUix1q.js";import"./Group-Czx_93hD.js";import"./Input-Bfg0Qrr6.js";import"./Hidden-GV6GWw5Y.js";import"./Button-DNUZR8YI.js";import"./useLabels-jjULFaK5.js";import"./useButton-BciHUgcd.js";import"./useTextField-DFsYXydC.js";import"./useControlledState-BuIMy712.js";import"./useField-VRRBZlgt.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-ClH6DcdC.js";import"./Dialog-C2lqbijt.js";import"./OverlayArrow-B-1TW-rO.js";import"./useResizeObserver-CQg9Zy5h.js";import"./Collection-DX2AptDc.js";import"./index-DttypQS5.js";import"./Separator-CCtYyU8S.js";import"./SelectionManager-BONroPUw.js";import"./useEvent-UJPseaF2.js";import"./scrollIntoView-CNZ7FSWt.js";import"./SelectionIndicator-CIU88Fcj.js";import"./useDescription-sB8LMHwe.js";import"./ListKeyboardDelegate-C7-VKLYg.js";import"./PressResponder-BQ4aD7hz.js";import"./useLocalizedStringFormatter-D6LBwpE0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cr6boEsG.js";import"./VisuallyHidden-CPxzvlXi.js";import"./useLocalizedStringFormatter-CfhNe-rq.js";import"./Button-CX_w9LKp.js";import"./Button.module-CtQ1deO8.js";import"./x-Cku9hc0_.js";import"./createLucideIcon-8k5sNgIw.js";import"./Heading-Cho1JDkX.js";import"./info-CKd3BTFv.js";import"./Popover-DhKC5VXQ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
