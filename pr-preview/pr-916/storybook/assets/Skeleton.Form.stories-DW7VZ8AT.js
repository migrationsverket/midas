import{j as e,l}from"./iframe-vLU3ZPRp.js";import{S as t}from"./Skeleton-B_ZsRRbH.js";import{T as d}from"./TextField-DvOvD29U.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BA3LRFs4.js";import"./utils-DhZrwm_O.js";import"./FieldError-CZDoRijc.js";import"./Text-DgAlTZx7.js";import"./useFocusRing-Bdvv7-N7.js";import"./index-CXkLaqV8.js";import"./index-C_9Z2w_o.js";import"./Text-UPxG90YY.js";import"./RSPContexts-BS1cdOyd.js";import"./Form-D6RSHhfX.js";import"./useFormValidation-Ce41O5Wr.js";import"./Group-BnPG75ie.js";import"./Input-ChDQ8Nls.js";import"./Hidden-C166yhsD.js";import"./Button-BF62bU3H.js";import"./useLabels-B_0ZYLKk.js";import"./useButton-CfBERvKC.js";import"./useTextField-UseI2f2P.js";import"./useControlledState-ByKlwbeC.js";import"./useField-BkORJVKr.js";import"./TextField.module-DGUQcbB9.js";import"./Label-R2pEW1LM.js";import"./Dialog-BuZhltq5.js";import"./OverlayArrow-C-yL7sPo.js";import"./useResizeObserver-DmXYvbaS.js";import"./Collection-DO8TRGiW.js";import"./index-D58s7j-H.js";import"./Separator-B2YyqXQa.js";import"./SelectionManager-CTWRohwL.js";import"./useEvent-ZlU3Op1V.js";import"./scrollIntoView-UL_UlPGj.js";import"./SelectionIndicator-VE6ykz3Z.js";import"./useDescription-B4pCu2h-.js";import"./ListKeyboardDelegate-DCHQ648Q.js";import"./PressResponder-DWXdSolz.js";import"./useLocalizedStringFormatter-ClxqUl6z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dxr_1uQG.js";import"./VisuallyHidden-CvXWxHoJ.js";import"./useLocalizedStringFormatter-BSTjQpQD.js";import"./Button-CXmMlpXW.js";import"./Button.module-CtQ1deO8.js";import"./x-QToY_gZ3.js";import"./createLucideIcon-B9fGN9f3.js";import"./Heading-DeYZrO0r.js";import"./info-US0D_dQ2.js";import"./Popover-DWcbD6Vl.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
