import{j as e,l}from"./iframe-h7DJPtOw.js";import{S as t}from"./Skeleton-C10EigDJ.js";import{T as p}from"./TextField-gY3rdWSi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-MW5jcOei.js";import"./utils-B7-Bl9CW.js";import"./TextField-LSsyExY3.js";import"./FieldError-DSs28XHB.js";import"./Text-zGp9it5Y.js";import"./useFocusRing-C0B_q-wz.js";import"./index-gfjDpAp0.js";import"./index-B7hCCELA.js";import"./Text-pnui6lio.js";import"./RSPContexts-CHFDj9zC.js";import"./Form-c2mv9S55.js";import"./useFormValidation-DVnx7CoV.js";import"./Group-C1gr5TL9.js";import"./Input-RqX7WhgN.js";import"./Hidden-PJsUPrnx.js";import"./Button-Bz7LmfPv.js";import"./useLabels-CUHQrXEe.js";import"./useButton-D0LQ7Q37.js";import"./useTextField-6f_cLbpm.js";import"./useControlledState-CHLpwHvy.js";import"./useField-BwCSMjcm.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BDhooHWI.js";import"./Dialog-C7IIzuYp.js";import"./OverlayArrow-BgIc1esP.js";import"./useResizeObserver-Dj2MVZVc.js";import"./Collection-dPIksrtz.js";import"./index-B6Wg72uJ.js";import"./Separator-tDLzujqY.js";import"./SelectionManager-Blqy6USp.js";import"./useEvent-F0VW7Ro7.js";import"./scrollIntoView-CTHtuwhy.js";import"./SelectionIndicator-Bd1YUc_h.js";import"./useDescription-CjXQS0Cs.js";import"./ListKeyboardDelegate-P0Ijk9LY.js";import"./PressResponder-CtxkqonA.js";import"./useLocalizedStringFormatter-BcxKr6tQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DwNXqpWq.js";import"./VisuallyHidden-CWdOAX5N.js";import"./Button-CJ449eRf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CUL5z0zQ.js";import"./createLucideIcon-CfnHEixt.js";import"./x-BbFSvcrs.js";import"./Heading-3fa6_PGE.js";import"./info-i6cdOdrR.js";import"./Popover-_VbJ2NJm.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
