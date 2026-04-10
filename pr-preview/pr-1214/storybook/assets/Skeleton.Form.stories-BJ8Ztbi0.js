import{j as e,l}from"./iframe-CjS4NLOn.js";import{S as t}from"./Skeleton-BN3sW5Oy.js";import{T as p}from"./TextField-BT_kUllh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-f1lFdRvU.js";import"./utils-Bd-AzVom.js";import"./FieldError-mjdlktiQ.js";import"./Text-BbW2XwBz.js";import"./useFocusRing-DglKaSCo.js";import"./index-BAKX6Q0C.js";import"./index-Bkm3VJ40.js";import"./Text-CX-M1xx_.js";import"./RSPContexts-kqnwGWDt.js";import"./Form-BO2cd7HV.js";import"./Group-D5gxugEo.js";import"./Input-qegJS3K7.js";import"./Hidden-DQ5FusQj.js";import"./Button-Dd-c5XOo.js";import"./useLabel-BNspr0mf.js";import"./useLabels-Dg9_l0gi.js";import"./useButton-K15jCtz1.js";import"./useTextField-DnwCAK_R.js";import"./useControlledState-BbWK1__y.js";import"./useField-B9WQ8ZUl.js";import"./TextField.module-DdivwlC8.js";import"./Label-BnCfDUoG.js";import"./Dialog-Dc12lFt1.js";import"./OverlayArrow-Cp2ICLCM.js";import"./useResizeObserver-BOPoLO7H.js";import"./Collection-D4qV2wHW.js";import"./index-BAbiaVhP.js";import"./Separator-CpprL7gR.js";import"./SelectionManager-BCUC7b48.js";import"./useEvent-CiAr47a4.js";import"./scrollIntoView-2fiPBvL-.js";import"./SelectionIndicator-CWcDMFoj.js";import"./useDescription-CBNmeEe_.js";import"./ListKeyboardDelegate-8fQbIU8o.js";import"./PressResponder-C_CMVuXZ.js";import"./useLocalizedStringFormatter-gid5zSz2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ctB5lWfz.js";import"./getScrollParent-CSIbG2HY.js";import"./VisuallyHidden-CY_5XPqM.js";import"./Modal-B4gH7KQG.js";import"./x-Dux1vDQf.js";import"./createLucideIcon-DkfyV_c3.js";import"./useLocalizedStringFormatter-FU720mIV.js";import"./Heading-pmYegQEd.js";import"./Button-iv9BguPP.js";import"./Button.module-BB7N-cLd.js";import"./info-k4HkQ0Eq.js";import"./Popover-B-u84laR.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
