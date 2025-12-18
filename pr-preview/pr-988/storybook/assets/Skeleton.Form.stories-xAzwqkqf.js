import{j as e,l}from"./iframe-SsTP6rfd.js";import{S as t}from"./Skeleton-D50BvXpW.js";import{T as p}from"./TextField-Cyo08V3A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-lnRHd4nD.js";import"./utils-xovjPneb.js";import"./TextField-DFYlsbSI.js";import"./FieldError-aNZ3_Z4n.js";import"./Text-BUE0kzAW.js";import"./useFocusRing-CLCXPOxW.js";import"./index-Bcr6E3JC.js";import"./index-LQvR83KO.js";import"./Text-BYhtQlzN.js";import"./RSPContexts-2kwram0O.js";import"./Form-D1X6lCD7.js";import"./useFormValidation-BfwjaNDO.js";import"./Group-L9rflH3K.js";import"./Input-CdTpo9oO.js";import"./Hidden-CFG7p1De.js";import"./Button-eerNJBVZ.js";import"./useLabels-CRKcuuZE.js";import"./useButton-BoBFAXLN.js";import"./useTextField-BgiErNeM.js";import"./useControlledState-BXOXeEl0.js";import"./useField-BXKsv6Nk.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DlyznXzy.js";import"./Dialog-COZNtIzJ.js";import"./OverlayArrow-Dxekro-s.js";import"./useResizeObserver-Gf-k7ja1.js";import"./Collection-DeinId22.js";import"./index-DPDwApPx.js";import"./Separator-CBiq70mz.js";import"./SelectionManager-Cvvws_4w.js";import"./useEvent-BTT-Ciqv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2ubSQgL.js";import"./useDescription-Cc-NjIDj.js";import"./ListKeyboardDelegate-QMc0p2wE.js";import"./PressResponder-CGyAUkDY.js";import"./useLocalizedStringFormatter-DeNsFJ4P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CCa2oAKd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CwQb82jS.js";import"./Button-Bb1EL28B.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9q4ftJk.js";import"./createLucideIcon-B4PKFn84.js";import"./x-CbXdnvOX.js";import"./Heading-Bb6ZtnB2.js";import"./info-BQ1pR6Z2.js";import"./Popover-C1AUHTTf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
