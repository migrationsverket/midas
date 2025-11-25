import{j as e,l}from"./iframe-DDE2q2jJ.js";import{S as t}from"./Skeleton-QndC_LvA.js";import{T as d}from"./TextField-CwqEys9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-2wOCZW2h.js";import"./utils-a9bcQ49A.js";import"./TextField--xDcQ0ij.js";import"./FieldError-DCUvG-Rb.js";import"./Text-Cm5UVo2w.js";import"./useFocusRing-B3mA85Wg.js";import"./index-Dbi_VTwK.js";import"./index-lUxujH5K.js";import"./Text-BwkS_7yz.js";import"./RSPContexts-CFPL8A-7.js";import"./Form-aBGoIlkF.js";import"./useFormValidation-D-eBHu1L.js";import"./Group-BANN4LLf.js";import"./Input-RneRPNWa.js";import"./Hidden-By32gRxz.js";import"./Button-HCOG5F4J.js";import"./useLabels-DDbF2kwS.js";import"./useButton-fYhOhmoU.js";import"./useTextField-C29xcouE.js";import"./useControlledState-DAP_JcuQ.js";import"./useField-D0gwyaVq.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-IRe6qV1l.js";import"./Dialog-D_KWzj05.js";import"./OverlayArrow-SW753CeG.js";import"./useResizeObserver-1zWkmZ97.js";import"./Collection-DTuUNth6.js";import"./index-D1o6svUE.js";import"./Separator-CJVs4gtu.js";import"./SelectionManager-CzTgUG9I.js";import"./useEvent-tL9OW1cd.js";import"./scrollIntoView-DPCVqvBT.js";import"./SelectionIndicator-Dvh5MI45.js";import"./useDescription-DcQu_PV8.js";import"./ListKeyboardDelegate-Cty5t2Cp.js";import"./PressResponder-bnXcN065.js";import"./useLocalizedStringFormatter-Bcbgr9Cy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BsyS2ene.js";import"./VisuallyHidden-CHq8aofl.js";import"./Button-Ci_9cuGQ.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B_ZJeHWO.js";import"./createLucideIcon-Bl1-P2Iq.js";import"./x-CJDAVB57.js";import"./Heading-BagC_Uao.js";import"./info-BCizCDqL.js";import"./Popover-DhDMsT5U.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
