import{j as e,l}from"./iframe-CJ5mLT_4.js";import{S as t}from"./Skeleton-DABnJ1vg.js";import{T as d}from"./TextField-BzB4Kymv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-eHP3x-Cl.js";import"./utils-B-yNA_dJ.js";import"./TextField-BHoOORpf.js";import"./FieldError-Pur5IESW.js";import"./Text-DC_rgrUQ.js";import"./useFocusRing-BeTk7EYI.js";import"./index-B1paFtI4.js";import"./index-jV957jJU.js";import"./Text-BcqPXIpA.js";import"./RSPContexts-BcgASvdu.js";import"./Form-34uNTGf2.js";import"./useFormValidation-BHVEwjh3.js";import"./Group-DZqLhtpI.js";import"./Input-D78Z5ue8.js";import"./Hidden-BJ3c_w-7.js";import"./Button-BISKQvSM.js";import"./useLabels-BYugiRh3.js";import"./useButton-B1fXf975.js";import"./useTextField-CJOPM7Ta.js";import"./useControlledState-D_djqcyI.js";import"./useField-B6zdWbJf.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B_cOv635.js";import"./Dialog-tmZTbzBH.js";import"./OverlayArrow-bEa_FM5Y.js";import"./useResizeObserver-C2Pqv_SB.js";import"./Collection-BBOdKeXb.js";import"./index-C4NVPHpO.js";import"./Separator-CtNoQT6o.js";import"./SelectionManager-CjO_PMS8.js";import"./useEvent-DFz4QqKo.js";import"./scrollIntoView-Dn_JjNEb.js";import"./SelectionIndicator-BA6wkJQI.js";import"./useDescription-oVI_xXa4.js";import"./ListKeyboardDelegate-BY7ZbQWW.js";import"./PressResponder-Bx-xVsTy.js";import"./useLocalizedStringFormatter-CmqbnUCj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BV-IzjNs.js";import"./VisuallyHidden-BdNOaLNL.js";import"./Button-B916xGn-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DPJWVto_.js";import"./createLucideIcon-BmH-SYUv.js";import"./x-CAtwVwPx.js";import"./Heading-9IadZiuE.js";import"./info-BnHDUwBr.js";import"./Popover-C4J3UhEc.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
