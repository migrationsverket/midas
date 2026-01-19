import{j as e,l}from"./iframe-CIadKzdu.js";import{S as t}from"./Skeleton-BIAnwn_f.js";import{T as p}from"./TextField-B6naPId5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-q5VwN5WM.js";import"./utils-DJPrropT.js";import"./TextField-BCZlC88W.js";import"./FieldError-DvZEkmKh.js";import"./Text-D5AYdaUH.js";import"./useFocusRing-Cx6NGDs8.js";import"./index-eDsXbqKn.js";import"./index-lKxGNrLV.js";import"./Text-MV4z5RP3.js";import"./RSPContexts-B0-J_gY5.js";import"./Form-B0qehKJ0.js";import"./useFormValidation-CbBxKz-1.js";import"./Group-BNflyKrC.js";import"./Input-CmcmFZqE.js";import"./Hidden-kJ8IT1EO.js";import"./Button-DWV-W5ps.js";import"./useLabels-EmpP_-hk.js";import"./useButton-ChIla9FM.js";import"./useTextField-MKDy3haf.js";import"./useControlledState-DulzVG2b.js";import"./useField-Vb42F4IT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D9jq9JnS.js";import"./Dialog-vJ84OY4R.js";import"./OverlayArrow-CVlv4gLj.js";import"./useResizeObserver-Dain9kfp.js";import"./Collection-CuqHIG9l.js";import"./index-DJg3KfkY.js";import"./Separator-CcJw4JmH.js";import"./SelectionManager-CirZ2bQ2.js";import"./useEvent-CpZmOcxi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-itVqOOaa.js";import"./useDescription-CpAdjwu7.js";import"./ListKeyboardDelegate-Bd9RyyDr.js";import"./PressResponder-COk2EHa3.js";import"./useLocalizedStringFormatter-DqJJo-SC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CSpOvMxI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D0TfLuCq.js";import"./Button-CpzbrA9E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AWWTtLk1.js";import"./createLucideIcon-CNkLKi9D.js";import"./x-q28ujAI-.js";import"./Heading-Cfj5vBSD.js";import"./info-DVe6ievT.js";import"./Popover-B68gghcY.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
