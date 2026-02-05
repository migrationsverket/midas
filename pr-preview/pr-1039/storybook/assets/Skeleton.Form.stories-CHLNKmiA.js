import{j as e,l}from"./iframe-Zc8QEBEs.js";import{S as t}from"./Skeleton-COugEeGI.js";import{T as p}from"./TextField--YnPVZXC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BV4lR-ui.js";import"./utils-B5Ft6r77.js";import"./TextField-CxWd8tKU.js";import"./FieldError-RKqcL0cn.js";import"./Text-D3gJufSD.js";import"./useFocusRing-DVsvUXQz.js";import"./index-D1lEo7Ix.js";import"./index-CTsCTBIR.js";import"./Text-DJvoMdLY.js";import"./RSPContexts-D6ksqvWo.js";import"./Form-DfY9cbLS.js";import"./useFormValidation-Bbgo3ES6.js";import"./Group-CKckRe83.js";import"./Input-DZ9uveSC.js";import"./Hidden-CwlmQhVF.js";import"./Button-CVF2QLQE.js";import"./useLabels-B1tM-n7Q.js";import"./useButton-CeK3qSVj.js";import"./useTextField-wdLBLz1l.js";import"./useControlledState--JkDKSQL.js";import"./useField-CvXnBGYy.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BMEK7aOq.js";import"./Dialog-DhvD1and.js";import"./OverlayArrow-DK_Hqowl.js";import"./useResizeObserver-BHwzkzeg.js";import"./Collection-DNsKHJEo.js";import"./index-BjRnP0Cx.js";import"./Separator-BawHnKHm.js";import"./SelectionManager-C89loMqR.js";import"./useEvent-sXQWxw0f.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Db61joGp.js";import"./useDescription-Bmj6vDCw.js";import"./ListKeyboardDelegate-ra7BEp36.js";import"./PressResponder-DqvWa8Dy.js";import"./useLocalizedStringFormatter-BktvRcda.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6Zd2BsO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DAd_ytwS.js";import"./Button-Dkxo3GyP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bj4PzUKr.js";import"./createLucideIcon-BfbY4clK.js";import"./x-DLzHvAkE.js";import"./Heading-C0aUvMQS.js";import"./info-CCkJueSN.js";import"./Popover-CyWwcwZc.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
