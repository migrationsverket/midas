import{j as e,l}from"./iframe-B91-x9Zu.js";import{S as t}from"./Skeleton-CEzGl8g6.js";import{T as p}from"./TextField-BeimFyOz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-De0goIcT.js";import"./utils-BDq5TyEB.js";import"./TextField-Cpa38aiF.js";import"./FieldError-CWETj3Vl.js";import"./Text-BfJqqx0j.js";import"./useFocusRing-CVRmAsyH.js";import"./index-BXX4d8bD.js";import"./index-DN9ppUS7.js";import"./Text-Dax5tWzo.js";import"./RSPContexts-B5qBvukQ.js";import"./Form-BZn8tv4U.js";import"./useFormValidation-B6kHCZJ0.js";import"./Group-DYG2hXzO.js";import"./Input-DKgSEAc5.js";import"./Hidden-BYWp7QJL.js";import"./Button-DX88RyMP.js";import"./useLabels-Dwk7hNIX.js";import"./useButton-DST6NVbU.js";import"./useTextField-F9r4DyAD.js";import"./useControlledState-BrOLRbiU.js";import"./useField-DuGzXB7t.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-XXYib5Pf.js";import"./Dialog-BHcXoJaA.js";import"./OverlayArrow-B3LgCbWf.js";import"./useResizeObserver-BzC1JvQl.js";import"./Collection-Db-WTB6b.js";import"./index-Dh1J3Jws.js";import"./Separator-B1ywj6iL.js";import"./SelectionManager-BuCjJjD3.js";import"./useEvent-CZcdSbJd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C7VGJBNi.js";import"./useDescription-C659JRkX.js";import"./ListKeyboardDelegate-wp5rssSn.js";import"./PressResponder-BUy7-lee.js";import"./useLocalizedStringFormatter-tMYY7oTH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSd-_azi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-rbN5cvZ7.js";import"./Button-BHZ4Xr_y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0-nSA3b.js";import"./createLucideIcon-BFyGBevv.js";import"./x-CKESvSm0.js";import"./Heading-B_bc6UXm.js";import"./info-DVS-AOjB.js";import"./Popover-DQtrO59A.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
