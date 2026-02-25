import{j as e,l}from"./iframe-DXvST5Z4.js";import{S as t}from"./Skeleton-ChJnA5jC.js";import{T as p}from"./TextField-C8A1I3LU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-9waoIFzb.js";import"./utils-C7o3oNWQ.js";import"./useObjectRef-CtV_wNCy.js";import"./FieldError-Vgbr6qFP.js";import"./Text-DSf5Rh4t.js";import"./useFocusRing-C6PpwOyg.js";import"./useFocusable-CcTIrmj7.js";import"./index-BSKCIuFZ.js";import"./index-DpgVVg9m.js";import"./Text-6UKv5af0.js";import"./RSPContexts-BWCV_dnI.js";import"./Form-COydQ7wv.js";import"./useFormValidation-IHOBEsDK.js";import"./Group-CHgoLV5M.js";import"./Input-CYUfSanE.js";import"./Hidden-CWijdCRp.js";import"./Button-CS5zO-gt.js";import"./number-DfkVkf0F.js";import"./useLabels-B-ai_w_R.js";import"./useButton-Ci2Hi0-B.js";import"./useTextField-ZxFNhkCT.js";import"./useControlledState-CUr3wY18.js";import"./useField-DQVM1v-x.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dxl4-KMf.js";import"./Dialog-CMxuyZUx.js";import"./OverlayArrow-CUZtccMf.js";import"./useResizeObserver-saNrXExm.js";import"./Collection-DRMDRsvi.js";import"./CollectionBuilder-BWvoDEMo.js";import"./index-BmzGzd_D.js";import"./Separator-Crnp6GLu.js";import"./SelectionManager-ClVRgQnB.js";import"./useEvent-WiQdTJ77.js";import"./scrollIntoView-DGoemtfW.js";import"./SelectionIndicator-2Q3RLIt1.js";import"./useDescription-eOAvzRvb.js";import"./ListKeyboardDelegate-7buxBpHF.js";import"./PressResponder-DTxgLEge.js";import"./useLocalizedStringFormatter-CD11qPfL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DT1Z9xLE.js";import"./getScrollParent-Cb93IwoN.js";import"./VisuallyHidden-yddiJwiQ.js";import"./Button-CyUV4N7K.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiZlQPZS.js";import"./createLucideIcon-BQeZNnV0.js";import"./x-DPBUFtnb.js";import"./Heading-l0jQkvv9.js";import"./info-b_BswnH4.js";import"./Popover-do22Rs5p.js";const xe={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,fe as __namedExportsOrder,xe as default};
