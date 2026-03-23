import{j as e,l}from"./iframe-BEfu4cuV.js";import{S as t}from"./Skeleton-Bq59NLZj.js";import{T as d}from"./TextField-BtHjyJ2q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BGTSI-D5.js";import"./utils-BeR4bg4o.js";import"./FieldError-RSI06Lef.js";import"./Text-BC7EJkoa.js";import"./useFocusRing-C6rqVt89.js";import"./index-BZsmp3Wz.js";import"./index-XFYlP6zW.js";import"./Text-Cvg6C9XG.js";import"./RSPContexts-BAhkEONY.js";import"./Form-CziSx__h.js";import"./Group-BgZaktBI.js";import"./Input-CwNBuFyA.js";import"./Hidden-DbtYdw9n.js";import"./Button-DwT05Yas.js";import"./useLabels-Cc8XnrID.js";import"./useButton-DfYe28nP.js";import"./useTextField-DBuQInhj.js";import"./useControlledState-DrRQ3ZH3.js";import"./useField-PSDLB5ry.js";import"./TextField.module-DdivwlC8.js";import"./Label-DXwM8wXB.js";import"./Dialog-06TGaPLA.js";import"./OverlayArrow-CMjmhszM.js";import"./useResizeObserver-Bn_SDZGm.js";import"./Collection-BbeK18M5.js";import"./index-BumNEWW1.js";import"./Separator-IJyLqDMM.js";import"./SelectionManager-D2Bv4BF3.js";import"./useEvent--stzEwau.js";import"./scrollIntoView-B2G8ZQve.js";import"./SelectionIndicator-0ZDh-mJx.js";import"./useDescription-Bd5nXxJ0.js";import"./ListKeyboardDelegate-BwiHoAty.js";import"./PressResponder-DQXva7NF.js";import"./useLocalizedStringFormatter-Bskkm3TD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-METBmI9k.js";import"./getScrollParent-EJnTNbj6.js";import"./VisuallyHidden-CLBjEdEZ.js";import"./x-Dz0TYTCE.js";import"./createLucideIcon-BxYC1ZwZ.js";import"./useLocalizedStringFormatter-DJkiKMK1.js";import"./Heading-DSlhrNwf.js";import"./Button-CNvrI9qG.js";import"./Button.module-BB7N-cLd.js";import"./info-YAW-rBsC.js";import"./Popover-Cq7h5R0J.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
