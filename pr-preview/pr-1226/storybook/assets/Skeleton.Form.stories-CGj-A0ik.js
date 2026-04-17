import{j as e,l}from"./iframe-BspZq9tj.js";import{S as t}from"./Skeleton-DFgQ1oKO.js";import{T as p}from"./TextField-DcgQNs-2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CaCATmN-.js";import"./utils-DAmpme0n.js";import"./FieldError-CWZFsZje.js";import"./Text-DJFK0YJf.js";import"./useFocusRing-ZSLB6af2.js";import"./index-CNFgOk2C.js";import"./index-CYPXKPzf.js";import"./Text-D4utVkCo.js";import"./RSPContexts-CPwEBVvI.js";import"./Form-D4R1YekT.js";import"./Group-C5bte03E.js";import"./Input-BA9l2p_L.js";import"./Hidden-BxNHn6hu.js";import"./Button-W6h6LqJQ.js";import"./useLabel-SKuz0xAF.js";import"./useLabels-DTPL2hi6.js";import"./useButton-Du_s3oIP.js";import"./useTextField-CWwIEGt6.js";import"./useControlledState-BFbpEbwN.js";import"./useField-DEHFco72.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bx2FMeQ6.js";import"./Dialog-DTaRZt9n.js";import"./OverlayArrow-D-O01WwV.js";import"./useResizeObserver-iRDz0PCC.js";import"./Collection-UMJcuUuS.js";import"./index-CgOuGLE0.js";import"./Separator-rxcASnPy.js";import"./SelectionManager-Dtp9ZmKg.js";import"./useEvent-SgyYcF3m.js";import"./scrollIntoView-BoOeRgl-.js";import"./SelectionIndicator-C4bCSSqv.js";import"./useDescription-D5AIqWjS.js";import"./ListKeyboardDelegate-DWzGTbDd.js";import"./PressResponder-DxMBIfA0.js";import"./useLocalizedStringFormatter-Cea7ejb5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqI0Oqar.js";import"./getScrollParent-DmWmoZNO.js";import"./VisuallyHidden-mXHZbk3a.js";import"./ModalOverlay-T8T40r7e.js";import"./x-B87ahrOa.js";import"./createLucideIcon-DZ4T53Ud.js";import"./useLocalizedStringFormatter-CSYYDYLy.js";import"./Heading-2memYd0M.js";import"./Button-CgVYtA8O.js";import"./Button.module-BB7N-cLd.js";import"./info-Bxsw_oHy.js";import"./Popover-C5QtIM1u.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
