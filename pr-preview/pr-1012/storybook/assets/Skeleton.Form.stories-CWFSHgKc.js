import{j as e,l}from"./iframe-qoW9tZaT.js";import{S as t}from"./Skeleton-CCJNanrJ.js";import{T as p}from"./TextField-DyM925_5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-aAn50tsd.js";import"./utils-CTxYHgfD.js";import"./TextField-DXLhG8g4.js";import"./FieldError-DE19xuEt.js";import"./Text-DwKAJAla.js";import"./useFocusRing-B6LARHo7.js";import"./index-bWzt5b9S.js";import"./index-BiO5NgKw.js";import"./Text-CYhV6FXp.js";import"./RSPContexts-DxChSUOo.js";import"./Form-BQeevNnQ.js";import"./useFormValidation-BnwIZj_P.js";import"./Group-BUwT5NP3.js";import"./Input-AVWyu6im.js";import"./Hidden-BS4srMlH.js";import"./Button-B0Fu5HXr.js";import"./useLabels-B9eAX_KZ.js";import"./useButton-C2Ne_uvp.js";import"./useTextField-CBwLvLKO.js";import"./useControlledState-C0UVa0XM.js";import"./useField-DngBv23z.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-fjZFM601.js";import"./Dialog-D-9AEPg-.js";import"./OverlayArrow-CCAwihsK.js";import"./useResizeObserver-CjlNJV09.js";import"./Collection-BVbkFK2L.js";import"./index-C0fhMHrq.js";import"./Separator-Cru_BpWB.js";import"./SelectionManager-zjIT78cX.js";import"./useEvent-DDnu5cND.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cy56j8FR.js";import"./useDescription-5krC5hm9.js";import"./ListKeyboardDelegate-C967icmU.js";import"./PressResponder-DHwVYLfF.js";import"./useLocalizedStringFormatter-D4YZU2AG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CHc5UgF5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRq5SFSs.js";import"./Button-CPAvH5KE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZDYT37P.js";import"./createLucideIcon-BjNk3Fmr.js";import"./x-DguWE13t.js";import"./Heading-Ds5MlqHc.js";import"./info-Dhd9HzUF.js";import"./Popover-BxOOkRRk.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
