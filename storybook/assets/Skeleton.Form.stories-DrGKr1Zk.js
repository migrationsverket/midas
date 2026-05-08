import{j as e,l}from"./iframe-Wguf_Vhy.js";import{S as t}from"./Skeleton-B8ZXKJwl.js";import{T as p}from"./TextField-CC8tbmn6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2JEizeh.js";import"./utils-Cayzu3dl.js";import"./FieldError-BgJaT6Rf.js";import"./Text-BApMudW2.js";import"./useFocusRing-BMPGM_9a.js";import"./index-Bm1qHM15.js";import"./index-CtVtkHSB.js";import"./Text-D697qKcG.js";import"./RSPContexts-DhG_A9LD.js";import"./Form-FggfkEks.js";import"./Group-C0LDHsLm.js";import"./Input-Borbf7By.js";import"./Hidden-YVq9ta1r.js";import"./Button-BzF2ZkA0.js";import"./useLabel-tYdicVQf.js";import"./useLabels-vxl1SBYw.js";import"./useButton-CeOXStth.js";import"./useTextField-GAKGcDg8.js";import"./useControlledState-BlF8Bv-9.js";import"./useField-BDcsyyOt.js";import"./TextField.module-DdivwlC8.js";import"./Label-BwphzhnD.js";import"./Dialog-BeohllCS.js";import"./OverlayArrow-Vo-iL8qO.js";import"./useResizeObserver-B4uFZilJ.js";import"./Collection-DVuI5cgK.js";import"./index-C7F45JvX.js";import"./Separator-B11vY-6A.js";import"./SelectionManager-PUFdyFS7.js";import"./useEvent-DJgQxyut.js";import"./scrollIntoView-B9bW_vYG.js";import"./SelectionIndicator-Ca_0lo5K.js";import"./useDescription-eDDocBsi.js";import"./ListKeyboardDelegate-BoNyATYx.js";import"./PressResponder-D_DY215S.js";import"./useLocalizedStringFormatter-CLhcV9N0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DRum0qO9.js";import"./getScrollParent-BHQ6aUJm.js";import"./VisuallyHidden-kcCEeVgO.js";import"./ModalOverlay-289ygUXv.js";import"./x-C-si90AP.js";import"./createLucideIcon-2JkbB8ZB.js";import"./useLocalizedStringFormatter-CNmg9gE-.js";import"./Heading-CFOJwOMj.js";import"./Button-CZM9PIob.js";import"./Button.module-BB7N-cLd.js";import"./info-BLgRDO_3.js";import"./Popover-CNJSBtqe.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
