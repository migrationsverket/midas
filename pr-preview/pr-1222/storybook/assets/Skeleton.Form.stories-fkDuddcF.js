import{j as e,l}from"./iframe-CU1z8ZWO.js";import{S as t}from"./Skeleton-FEKZ2eaG.js";import{T as p}from"./TextField-DnkT3vbA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DPj3ZXGc.js";import"./utils-DVqGwfeZ.js";import"./FieldError-I8SPxjsf.js";import"./Text-YKX6wkOC.js";import"./useFocusRing-Bwwpl-Rq.js";import"./index-I_kl0fWJ.js";import"./index-C-Y4ipn9.js";import"./Text-ChUFIC2p.js";import"./RSPContexts-CauR0OIy.js";import"./Form-DBPJ3l-c.js";import"./Group-BTX-dbq1.js";import"./Input-CU9pw7dH.js";import"./Hidden-N7huL-Y5.js";import"./Button-BdGWlDvU.js";import"./useLabel-D4QSJjhu.js";import"./useLabels-DWo5evaA.js";import"./useButton-BI7SC1MX.js";import"./useTextField-DDK0jYRD.js";import"./useControlledState-CUj5ZMiu.js";import"./useField-BnC0fsgX.js";import"./TextField.module-DdivwlC8.js";import"./Label-C6iliZZn.js";import"./Dialog-DbKpoTYu.js";import"./OverlayArrow-Cy9G6xXf.js";import"./useResizeObserver-C2c0MTCb.js";import"./Collection-CzqXpYks.js";import"./index-DMFDmPIt.js";import"./Separator-Bzx9Vn_K.js";import"./SelectionManager-DWS42UG-.js";import"./useEvent-Bq6uqUQY.js";import"./scrollIntoView-BgxrN33L.js";import"./SelectionIndicator-BCZrxYeQ.js";import"./useDescription-CR7aQf8r.js";import"./ListKeyboardDelegate-CVJvgYEq.js";import"./PressResponder-Bu4rUZG4.js";import"./useLocalizedStringFormatter-CFmlUqTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6On8J8R.js";import"./getScrollParent-xYS8wAXV.js";import"./VisuallyHidden-BrIjXOit.js";import"./ModalOverlay-BVAF_K5P.js";import"./x-ChoXe0cH.js";import"./createLucideIcon-CaHhpyoi.js";import"./useLocalizedStringFormatter-Dvrj7zKe.js";import"./Heading-BR9AhlKG.js";import"./Button-DkJeYqVL.js";import"./Button.module-BB7N-cLd.js";import"./info-DCUGTQL1.js";import"./Popover-D0jDir5i.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
