import{j as e,l}from"./iframe-Da36InMg.js";import{S as t}from"./Skeleton-De2sGmCX.js";import{T as p}from"./TextField-IbxbwYWd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BYGy_BeK.js";import"./utils-CHXZEpsb.js";import"./TextField-DKhG9kfm.js";import"./FieldError-DdDYB_s_.js";import"./Text-BrXpqahc.js";import"./useFocusRing-PWqs4TW9.js";import"./index-CaZlPwUz.js";import"./index-Di1QGlpo.js";import"./Text-UbtOGoYO.js";import"./RSPContexts-BsaudI60.js";import"./Form-CPfmFs5J.js";import"./useFormValidation-DJDlUrPu.js";import"./Group-DXkxMY61.js";import"./Input-Dngsr9Yb.js";import"./Hidden-CWBgmXhh.js";import"./Button-C9KA9u1r.js";import"./useLabels-Bp-J3Y5-.js";import"./useButton-C2CUOyHb.js";import"./useTextField-C41GIDAY.js";import"./useControlledState-CA4_YWUf.js";import"./useField-USVqeQGP.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DOu-JEPP.js";import"./Dialog-BKe9Hfgr.js";import"./OverlayArrow-xlLv6U70.js";import"./useResizeObserver-zSLuHZKb.js";import"./Collection-i8cKfObX.js";import"./index-BnwfX8pc.js";import"./Separator-D1z883Jc.js";import"./SelectionManager-Dbt8q9np.js";import"./useEvent-DIDPEC78.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DB25faN4.js";import"./useDescription-BI7Uumxx.js";import"./ListKeyboardDelegate-RfE4x_5K.js";import"./PressResponder-mujXrtzJ.js";import"./useLocalizedStringFormatter-wrWdFXU1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwSGSDHA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-a6Yj5g4U.js";import"./Button-CXuDImk2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLWMEVc4.js";import"./createLucideIcon-CXcjDiHx.js";import"./x-CjhM0Bjo.js";import"./Heading-DyQRIaZu.js";import"./info-2BC-avJp.js";import"./Popover-qbNdFZ9z.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
