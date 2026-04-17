import{j as e,l}from"./iframe-DAlGZfQW.js";import{S as t}from"./Skeleton-Om0yguEK.js";import{T as p}from"./TextField-B1koq0Iz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BurqOTv8.js";import"./utils-C0mXnx3L.js";import"./FieldError-CkH1bdUQ.js";import"./Text-LSJ9RRHV.js";import"./useFocusRing-aL1wDNV0.js";import"./index-ZTPDuQtA.js";import"./index-DeUwXnwW.js";import"./Text-BD2SYZAb.js";import"./RSPContexts-ogBeYVaG.js";import"./Form-DSNATSPd.js";import"./Group-BzULb40h.js";import"./Input--HBA1EQM.js";import"./Hidden-o3xiVHpT.js";import"./Button-DEU34lA6.js";import"./useLabel-Bq6n8TDb.js";import"./useLabels-oTyQAigb.js";import"./useButton-DzfauRnx.js";import"./useTextField-BdwaRRev.js";import"./useControlledState-CvHTtUWm.js";import"./useField-BW3jrAKK.js";import"./TextField.module-DdivwlC8.js";import"./Label-x7AqFGig.js";import"./Dialog-oZrWN6-T.js";import"./OverlayArrow-D9PTXaeg.js";import"./useResizeObserver-BmlX3wcb.js";import"./Collection-DdampRoJ.js";import"./index-Bt3b7xy3.js";import"./Separator-BDHwiclq.js";import"./SelectionManager-DJWipqTn.js";import"./useEvent-CF3bDdPT.js";import"./scrollIntoView-DhLsBgUV.js";import"./SelectionIndicator-D-XJWEBG.js";import"./useDescription-7yGeAH-h.js";import"./ListKeyboardDelegate-2D-TSKOA.js";import"./PressResponder-BPzeGbel.js";import"./useLocalizedStringFormatter-Db4mYuAv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DykFtkea.js";import"./getScrollParent-CPI0vVZ2.js";import"./VisuallyHidden-CtB5gR65.js";import"./ModalOverlay-BGHVT9Lo.js";import"./x-4pQMUwmc.js";import"./createLucideIcon-D-D7lNm8.js";import"./useLocalizedStringFormatter-Bb6HaDEh.js";import"./Heading-7wa5xHuv.js";import"./Button-xgyBGP3u.js";import"./Button.module-BB7N-cLd.js";import"./info-CyGQFkmI.js";import"./Popover-4SaABhvX.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
