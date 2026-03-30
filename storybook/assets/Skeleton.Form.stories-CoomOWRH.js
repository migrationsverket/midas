import{j as e,l}from"./iframe-BY9vh6z6.js";import{S as t}from"./Skeleton-CtkuAdcM.js";import{T as p}from"./TextField-DPuZsAle.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DxJY9FSy.js";import"./utils-CvO9wRJK.js";import"./FieldError-DeHNS8yq.js";import"./Text-CS2W2lPB.js";import"./useFocusRing-C58Wldhw.js";import"./index-BCEmrA-k.js";import"./index-BY7PPuin.js";import"./Text-D2NltcsY.js";import"./RSPContexts-DvzJiI6P.js";import"./Form-rQZlhbIF.js";import"./Group-Byz5DoXV.js";import"./Input-v1ubs1Lq.js";import"./Hidden-CtZVxLKv.js";import"./Button-BRroCyFc.js";import"./useLabel-BGiQ4ILo.js";import"./useLabels-BEKF_Ui1.js";import"./useButton-C5riGvhj.js";import"./useTextField-BgrPSmKs.js";import"./useControlledState-tRNWjYkK.js";import"./useField-tV89OT8_.js";import"./TextField.module-DdivwlC8.js";import"./Label-8ue6hqSU.js";import"./Dialog-C_ijxaqM.js";import"./OverlayArrow-B-1Yg2BA.js";import"./useResizeObserver-CsETQTyf.js";import"./Collection-DtE19mci.js";import"./index-BzZ2BuIi.js";import"./Separator-CCpXoumi.js";import"./SelectionManager-Br_H8_zH.js";import"./useEvent-Dxv08bvf.js";import"./scrollIntoView-CCKb3jUj.js";import"./SelectionIndicator-DamMI_aq.js";import"./useDescription-Cjh6szWZ.js";import"./ListKeyboardDelegate-z0K9q_6J.js";import"./PressResponder-8saORWk8.js";import"./useLocalizedStringFormatter-DvhmXb5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-GQeaOULT.js";import"./getScrollParent-DrF2sSND.js";import"./VisuallyHidden-D_LmADCN.js";import"./x-L5wRjwNt.js";import"./createLucideIcon-BXNm475a.js";import"./useLocalizedStringFormatter-CAo6NRgz.js";import"./Heading-CGdkvWQV.js";import"./Button-C6EXF9Um.js";import"./Button.module-BB7N-cLd.js";import"./info-D-WwwqKW.js";import"./Popover-7_2WIqnC.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
