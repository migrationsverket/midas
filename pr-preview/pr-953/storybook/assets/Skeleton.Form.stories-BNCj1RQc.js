import{j as e,l}from"./iframe-BJQsUCMR.js";import{S as t}from"./Skeleton-Ch4Ozbyq.js";import{T as p}from"./TextField-BtKYX_SG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D-Ru2v7l.js";import"./utils-Cr7K8WJR.js";import"./TextField-fCjjWraL.js";import"./FieldError-zgxijUai.js";import"./Text-Cc4_9gUZ.js";import"./useFocusRing-DlRtsXUX.js";import"./index-B-fdDFbP.js";import"./index-BHjUdtJS.js";import"./Text-BimK0k6U.js";import"./RSPContexts-BI01sb8g.js";import"./Form-Cc0eM_JQ.js";import"./useFormValidation-BiEbn1a3.js";import"./Group-DQusP5OH.js";import"./Input-BV3-DR8v.js";import"./Hidden-o6EY_DbG.js";import"./Button-BQ9IF-8b.js";import"./useLabels-BH12XE_O.js";import"./useButton-CrSiIYdq.js";import"./useTextField-pZ61dwV1.js";import"./useControlledState-DJCuFP0v.js";import"./useField-CaQW11iG.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BL_6rRp2.js";import"./Dialog-BzC6JDiP.js";import"./OverlayArrow-CVLixwYq.js";import"./useResizeObserver-0JCOC-KO.js";import"./Collection-uC_HUdxp.js";import"./index-CgFsjumR.js";import"./Separator-DHPzP9m9.js";import"./SelectionManager-DAa-cbbJ.js";import"./useEvent-DG3fzSzi.js";import"./scrollIntoView-DB1hrIB-.js";import"./SelectionIndicator-BBOdvufD.js";import"./useDescription-CKj4G0W7.js";import"./ListKeyboardDelegate-Bka3ub3I.js";import"./PressResponder-D2a5bvYe.js";import"./useLocalizedStringFormatter-CePtc58O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DhO5ZbSM.js";import"./VisuallyHidden-CIBvHJ7K.js";import"./Button-Cuv97NKO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMFy_0c_.js";import"./createLucideIcon-DwyOL3g6.js";import"./x-DY2fwmz2.js";import"./Heading-puME5rnC.js";import"./info--lUqQmMo.js";import"./Popover-6d4uiwK_.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
