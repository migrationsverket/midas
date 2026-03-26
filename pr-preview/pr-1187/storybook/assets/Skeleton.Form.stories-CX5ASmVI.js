import{j as e,l}from"./iframe-CM25YVMI.js";import{S as t}from"./Skeleton-BMOnU7GY.js";import{T as p}from"./TextField-iNJGC26a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DYCGKEuc.js";import"./utils-B96ufrPs.js";import"./FieldError-DrjYFklj.js";import"./Text-DDiDpkRq.js";import"./useFocusRing-leQD3u2F.js";import"./index-DYgoHuTv.js";import"./index-Dkdrw9MX.js";import"./Text-D4mHh6eT.js";import"./RSPContexts-BEyD-TmB.js";import"./Form-COfnJ4dZ.js";import"./Group-X-eushgm.js";import"./Input-B_XB7CeP.js";import"./Hidden-Bkjvz6Ri.js";import"./Button-vkdXqgie.js";import"./useLabel-Bns7seSC.js";import"./useLabels-61TYLMjS.js";import"./useButton-B_beWRfB.js";import"./useTextField-B_mduAgG.js";import"./useControlledState-FG_bUeqE.js";import"./useField-BcLvgBhR.js";import"./TextField.module-DdivwlC8.js";import"./Label-DbArHAot.js";import"./Dialog-CXgkCXNO.js";import"./OverlayArrow-ChaPryvr.js";import"./useResizeObserver-CFbbKVqW.js";import"./Collection-DyNLDyBt.js";import"./index-CLVOANuP.js";import"./Separator-Bz2npnjj.js";import"./SelectionManager-DAIHpPMl.js";import"./useEvent-BJWNvlK2.js";import"./scrollIntoView-CM-wWI7V.js";import"./SelectionIndicator-CXCiqDeB.js";import"./useDescription-D-2ki_PT.js";import"./ListKeyboardDelegate-B1WwTEns.js";import"./PressResponder-urDmkW73.js";import"./useLocalizedStringFormatter-B8uPJVbi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnwPZMvr.js";import"./getScrollParent-CcTlIiv2.js";import"./VisuallyHidden-CwsE6PRe.js";import"./x-B7ImzBTw.js";import"./createLucideIcon-Br4oCZrR.js";import"./useLocalizedStringFormatter-DdE69EWU.js";import"./Heading-Bq6iHTA4.js";import"./Button-CImuJsqD.js";import"./Button.module-BB7N-cLd.js";import"./info-Dv7psBLN.js";import"./Popover-CZRhKMgS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
