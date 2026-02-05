import{j as e,l}from"./iframe-JaJw4f7V.js";import{S as t}from"./Skeleton-ClK8K3k5.js";import{T as p}from"./TextField-CHJSTlOH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-_umHOOs7.js";import"./utils-CiBzJ336.js";import"./TextField-ZCFTsT6v.js";import"./FieldError-LdU8dMtl.js";import"./Text-BS3Ivz4K.js";import"./useFocusRing-UFPGKc_I.js";import"./index-Cz39_mtL.js";import"./index-B3G3P3vm.js";import"./Text-DKa2NLkX.js";import"./RSPContexts-L3Du4l0W.js";import"./Form-C2RsKPnO.js";import"./useFormValidation-BUCZo95t.js";import"./Group-2uJJXykK.js";import"./Input-BnLYlNF1.js";import"./Hidden-D0Dtcxd_.js";import"./Button-BNgll4Za.js";import"./useLabels-K8RTE3y-.js";import"./useButton-C_Iz2y8G.js";import"./useTextField-FQoj7CiH.js";import"./useControlledState-C32RUdaE.js";import"./useField-CxzyvlHo.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DTup1mfH.js";import"./Dialog-C2heK__L.js";import"./OverlayArrow-DDtQ5meo.js";import"./useResizeObserver-B5E3Xlh9.js";import"./Collection-CiQe6VOS.js";import"./index-gOh7a-g6.js";import"./Separator-Cvq30Dpj.js";import"./SelectionManager-DUjG5DsX.js";import"./useEvent-DlS508sr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9K3UV_S.js";import"./useDescription-DImf0UX5.js";import"./ListKeyboardDelegate-DiKlfXRL.js";import"./PressResponder-CPnHHEUa.js";import"./useLocalizedStringFormatter-Brc7ObIZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fJE5O-Tw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C0JdxdWR.js";import"./Button-CEh1IEm-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGp_mLDv.js";import"./createLucideIcon-Ct39Qqpq.js";import"./x-CYOQLw97.js";import"./Heading-CVAPxIf9.js";import"./info-mw4rprEj.js";import"./Popover-oGE609at.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
