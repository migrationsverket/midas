import{j as e,l}from"./iframe-yDDvrWXA.js";import{S as t}from"./Skeleton-mcXr4-ee.js";import{T as p}from"./TextField-DOR_kW2d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase--aDndTgq.js";import"./utils-g-F492tU.js";import"./FieldError-CjrZ6id8.js";import"./Text-lgWPOHfn.js";import"./useFocusRing-B8EF4-Pv.js";import"./index-C7Z2RoQQ.js";import"./index-D5oXpZJ0.js";import"./Text-zKZPeGrs.js";import"./RSPContexts-BHMRgdEM.js";import"./Form-BRcNXWLY.js";import"./Group-su1k1c30.js";import"./Input-DSWEXy8D.js";import"./Hidden-DwvTSKmX.js";import"./Button-BKPyufTm.js";import"./useLabel-HsQrSNDJ.js";import"./useLabels-BAb68OIq.js";import"./useButton-C0YlumWP.js";import"./useTextField-DmpQQ6rN.js";import"./useControlledState-DZNSaZzu.js";import"./useField-CiiIrWAP.js";import"./TextField.module-DdivwlC8.js";import"./Label-wcwbAFHI.js";import"./Dialog-BIVF5l3c.js";import"./OverlayArrow-BVlIZqtw.js";import"./useResizeObserver-UxJsu0zz.js";import"./Collection-CFU2EU6h.js";import"./index-DJj8GrZs.js";import"./Separator-CWwUj7FU.js";import"./SelectionManager-Dt46tqv0.js";import"./useEvent-DV78v9xt.js";import"./scrollIntoView-n_Hd7XfS.js";import"./SelectionIndicator-DDv3iAvt.js";import"./useDescription-BnCt_ups.js";import"./ListKeyboardDelegate-hpjtAvgx.js";import"./PressResponder-D3VvKhEM.js";import"./useLocalizedStringFormatter-Dx4LUfLz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjLrtpML.js";import"./getScrollParent-0zuGuC-1.js";import"./VisuallyHidden-B50WqWni.js";import"./ModalOverlay-RBO65Y0S.js";import"./x-8p5vQLYx.js";import"./createLucideIcon-BAD1RTf1.js";import"./useLocalizedStringFormatter-CwuLAbHo.js";import"./Heading-63_DxrY4.js";import"./Button-DrFRlYBv.js";import"./Button.module-BB7N-cLd.js";import"./info-e015rBQN.js";import"./Popover-B03679Io.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
