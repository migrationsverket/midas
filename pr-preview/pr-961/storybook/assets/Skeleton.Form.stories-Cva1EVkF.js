import{j as e,l}from"./iframe-DzWavng1.js";import{S as t}from"./Skeleton-C9EXdJYT.js";import{T as d}from"./TextField-9cZQDjO9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CgytsJTL.js";import"./utils-DZ771gTW.js";import"./TextField-C2dvobkJ.js";import"./FieldError-B0hGaN2H.js";import"./Text-ePkty29E.js";import"./useFocusRing-BOScdwIf.js";import"./index-BqUojVv0.js";import"./index-3sde6yQY.js";import"./Text-DA35gZzh.js";import"./RSPContexts-DGc80Od4.js";import"./Form-AOBXIEea.js";import"./useFormValidation-Bm0uK9_x.js";import"./Group-CewnB-LY.js";import"./Input-DySOpKnr.js";import"./Hidden-ZA6QDtq5.js";import"./Button-BvaWFHt-.js";import"./useLabels-roEh_XUF.js";import"./useButton-CgRo_gBu.js";import"./useTextField-DrWim-03.js";import"./useControlledState-lHw30NeI.js";import"./useField-DgP7ROp1.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-pIcxOt8i.js";import"./Dialog-ByrVMFC8.js";import"./OverlayArrow-CzXrQ9SA.js";import"./useResizeObserver-CQn7OSpd.js";import"./Collection-DS74y2Hd.js";import"./index-DJ9boy3L.js";import"./Separator-bMTI7EmG.js";import"./SelectionManager-BbeYuJOR.js";import"./useEvent-5ivb094s.js";import"./scrollIntoView-BAE8WRGI.js";import"./SelectionIndicator-BvQjS5SY.js";import"./useDescription-B5og04Tz.js";import"./ListKeyboardDelegate-Dq9zMlZb.js";import"./PressResponder-BG4AA7ZS.js";import"./useLocalizedStringFormatter-DkL1-w21.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-dwiGZhPf.js";import"./VisuallyHidden-u0dD8pVG.js";import"./Button-C9cedukw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-enb0CHJT.js";import"./createLucideIcon-CC0DruiB.js";import"./x-CWmC_5LK.js";import"./Heading-BDScHeSe.js";import"./info-DpnZATZq.js";import"./Popover-wDjiywCJ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
