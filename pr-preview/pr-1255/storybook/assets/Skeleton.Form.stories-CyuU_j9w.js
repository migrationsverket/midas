import{j as e,l}from"./iframe-Bc-UjTRz.js";import{S as t}from"./Skeleton-Cm3Jgl9q.js";import{T as p}from"./TextField-BiBR4UBP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-z9iNNChx.js";import"./utils-CIlBOTwB.js";import"./FieldError-pc1xIYti.js";import"./Text-FaStHPve.js";import"./useFocusRing-DmMd8vo8.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./Text-EmoXsUsF.js";import"./RSPContexts-BrVLX_Kr.js";import"./Form-MxAWzd2x.js";import"./Group-Bzniv0F2.js";import"./Input-BZYYU2yt.js";import"./Hidden-Bobixe9k.js";import"./Button-BBbybcMx.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./useTextField-eIYPxOb0.js";import"./useControlledState-Dz98cjw-.js";import"./useField-CMU55_2k.js";import"./TextField.module-DdivwlC8.js";import"./Label-C-pg10x0.js";import"./Dialog-BSkPAq_n.js";import"./OverlayArrow-DfHYbDXs.js";import"./useResizeObserver-BMARLXxD.js";import"./Collection-DChyS9dt.js";import"./index-B-79tFRT.js";import"./Separator-PFdfuk3j.js";import"./SelectionManager-D8tK0CCZ.js";import"./useEvent-CjNBBIKs.js";import"./scrollIntoView-CTyn5EWZ.js";import"./SelectionIndicator-gZnD50wI.js";import"./useDescription-axt_AZYR.js";import"./ListKeyboardDelegate-Ch3xdJaU.js";import"./PressResponder-Bd0tk48r.js";import"./useLocalizedStringFormatter-CjnzGiN8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7sGwqcv.js";import"./getScrollParent-DeC6xe2r.js";import"./VisuallyHidden-De98nctX.js";import"./ModalOverlay-BHNnLZVe.js";import"./x-BlqzX1Dg.js";import"./createLucideIcon-Cvy5MTlk.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./Heading-riE0Xj9K.js";import"./Button-Ddjv6hkf.js";import"./Button.module-BB7N-cLd.js";import"./info-Cqa2lKV1.js";import"./Popover-BkUvNTOR.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
