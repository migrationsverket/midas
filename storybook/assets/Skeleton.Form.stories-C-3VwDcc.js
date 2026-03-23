import{j as e,l}from"./iframe-ulpsKcT6.js";import{S as t}from"./Skeleton-BgHZ9mPs.js";import{T as d}from"./TextField-eDfzD5Qi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DYm9omhV.js";import"./utils-wsoE-YNW.js";import"./FieldError-X6YJI5lY.js";import"./Text-BD59FbNH.js";import"./useFocusRing-uQD3awjb.js";import"./index-BsXSE8I4.js";import"./index-CMHJHtf7.js";import"./Text-fcHQfrbB.js";import"./RSPContexts-JveuaJOR.js";import"./Form-DEgitFyV.js";import"./Group-PTt6C5kO.js";import"./Input-CmvjNF48.js";import"./Hidden-BdWVHvUH.js";import"./Button-BwU617iF.js";import"./useLabels-DWWSSIyp.js";import"./useButton-Dd5iumUB.js";import"./useTextField-DvTX9qnd.js";import"./useControlledState-DiDj3wpx.js";import"./useField-CscAiOFH.js";import"./TextField.module-DdivwlC8.js";import"./Label--CGAEl1O.js";import"./Dialog-SUpWsxOo.js";import"./OverlayArrow-CrMMQ2rG.js";import"./useResizeObserver-DZ1FhQMh.js";import"./Collection-9kZQCZkz.js";import"./index-cpnXaknH.js";import"./Separator-DksJbz4B.js";import"./SelectionManager-BGfyixg7.js";import"./useEvent-CR-1WX1Q.js";import"./scrollIntoView-75XzEUIn.js";import"./SelectionIndicator-BjrtELIW.js";import"./useDescription-BFyYIavq.js";import"./ListKeyboardDelegate-CUnJLkJW.js";import"./PressResponder-DAdAsYUA.js";import"./useLocalizedStringFormatter-Bcmhp4XT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bqq32HlQ.js";import"./getScrollParent-Dm65XKk9.js";import"./VisuallyHidden-81lySEYl.js";import"./x-XMblJbQX.js";import"./createLucideIcon-B2ayFkn-.js";import"./useLocalizedStringFormatter-CL-EvLJE.js";import"./Heading-ByQKxrjH.js";import"./Button-DwrmJOqW.js";import"./Button.module-BB7N-cLd.js";import"./info-BiqiEVan.js";import"./Popover-g2UtUlrC.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
