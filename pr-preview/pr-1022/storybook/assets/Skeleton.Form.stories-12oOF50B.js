import{j as e,l}from"./iframe-D2QiFl1Q.js";import{S as t}from"./Skeleton-B9JsPge2.js";import{T as p}from"./TextField-DY8yNRSA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CJij-Dir.js";import"./utils-C8ZbQkE7.js";import"./TextField-DR1HR1Yl.js";import"./FieldError-DzMY0KoY.js";import"./Text-BwutiQ1I.js";import"./useFocusRing-CBM371L3.js";import"./index-Cl8hPLRd.js";import"./index-McmNB2RO.js";import"./Text-Czz1G82J.js";import"./RSPContexts-CrDf2hpR.js";import"./Form-xBEu3dY3.js";import"./useFormValidation-BbQ0GoQK.js";import"./Group-Cib9kvkp.js";import"./Input-CcbBYK0u.js";import"./Hidden-Ec0HhwAs.js";import"./Button-jwqYg1go.js";import"./useLabels-By_yzmZ7.js";import"./useButton-q6SL79uh.js";import"./useTextField-DGq00xI3.js";import"./useControlledState-l7K5Cl0t.js";import"./useField-CSsZ2u1C.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BTksugbp.js";import"./Dialog-CgGE3fg-.js";import"./OverlayArrow-BU4YOGz4.js";import"./useResizeObserver-D4Y8n76L.js";import"./Collection-Dj5rVQCZ.js";import"./index-D8q3UKih.js";import"./Separator-CPq-byW8.js";import"./SelectionManager-4_hx7v1F.js";import"./useEvent-KlMFWHnu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CdqppYXN.js";import"./useDescription-BCN90KGy.js";import"./ListKeyboardDelegate-bQekQHSh.js";import"./PressResponder-BpYoU1QI.js";import"./useLocalizedStringFormatter-AJrWLMlk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BoeTLxfz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-LF61GAgF.js";import"./Button-fUVp2AkT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lXxhePp3.js";import"./createLucideIcon-D1IpgdG_.js";import"./x-CxsNPW5G.js";import"./Heading-CVxW4iun.js";import"./info-vEMoj0J0.js";import"./Popover-cIm5tBYf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
