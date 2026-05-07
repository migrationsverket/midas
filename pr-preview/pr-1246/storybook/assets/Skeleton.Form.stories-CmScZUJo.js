import{j as e,l}from"./iframe-Dy3Rw66z.js";import{S as t}from"./Skeleton-CxF7rLSb.js";import{T as p}from"./TextField-DsyFTRzW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CxlPTmXs.js";import"./utils-DtZwbp1W.js";import"./FieldError-CRQYtwdw.js";import"./Text-CjiLEpJA.js";import"./useFocusRing-OfUNuA-J.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./Text-BOYOdsAw.js";import"./RSPContexts-C0IvGsnI.js";import"./Form-wengfQtM.js";import"./Group-m_LNitHg.js";import"./Input-DYmzIH_X.js";import"./Hidden-BiAiu52X.js";import"./Button-DWNrJ0qN.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./useTextField-D0gzukQn.js";import"./useControlledState-CujSUpWY.js";import"./useField-CNgzpJU1.js";import"./TextField.module-DdivwlC8.js";import"./Label-B4GuKtlR.js";import"./Dialog-bkeEYBpC.js";import"./OverlayArrow-JVmpp-8a.js";import"./useResizeObserver-C9I6YQo1.js";import"./Collection-B5ifOA6k.js";import"./index-B66NDRAz.js";import"./Separator-CBYmdaTi.js";import"./SelectionManager-CfByhG1g.js";import"./useEvent-DcOaT4Vn.js";import"./scrollIntoView-DNWLzZw6.js";import"./SelectionIndicator-D2Bve7Mk.js";import"./useDescription-BNi02mG9.js";import"./ListKeyboardDelegate-BafHrM3o.js";import"./PressResponder-CmoNFUc_.js";import"./useLocalizedStringFormatter-CUaO5Dey.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D6VEx1B6.js";import"./getScrollParent-sGEfSoh4.js";import"./VisuallyHidden-ke2bwlqF.js";import"./ModalOverlay-BHj0afcc.js";import"./x-BY2wOibv.js";import"./createLucideIcon-CGcaihwO.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./Heading-CVTdlCZ7.js";import"./Button-Cl_Vf5i1.js";import"./Button.module-BB7N-cLd.js";import"./info-CP5B5L4I.js";import"./Popover-M-vUiPMz.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
