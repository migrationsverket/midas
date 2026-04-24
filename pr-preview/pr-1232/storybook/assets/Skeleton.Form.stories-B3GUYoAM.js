import{j as e,l}from"./iframe-Bsq2Gecy.js";import{S as t}from"./Skeleton-B4_sdM8_.js";import{T as p}from"./TextField-BfT0bmK6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BrwV8GUg.js";import"./utils-BEAPqOk0.js";import"./FieldError-C-dVYh2X.js";import"./Text-BbliZ5q4.js";import"./useFocusRing-Duh6XNKg.js";import"./index-Dx8tMrH0.js";import"./index-BRYV9rT7.js";import"./Text-CN4UKteu.js";import"./RSPContexts-B54NxITZ.js";import"./Form-CirE0Ecy.js";import"./Group-D5jdMy_A.js";import"./Input-CVVchZra.js";import"./Hidden-BUmnbfmf.js";import"./Button-Dgb6FvaO.js";import"./useLabel-DPyv_VKO.js";import"./useLabels-DBANshh8.js";import"./useButton-B8W9dyb3.js";import"./useTextField-DR-qlDF_.js";import"./useControlledState-BhYy7T42.js";import"./useField-ErwE8ZmA.js";import"./TextField.module-DdivwlC8.js";import"./Label-C6Sumu1N.js";import"./Dialog-Dy6OQ_qV.js";import"./OverlayArrow-C_jQ3Ebl.js";import"./useResizeObserver-OXYNsxQq.js";import"./Collection-lWVggD0C.js";import"./index-D1TSbjCJ.js";import"./Separator-BSBR5UuG.js";import"./SelectionManager-Ctfsl1Jn.js";import"./useEvent-B8d2Ooe_.js";import"./scrollIntoView-BBGrgUMp.js";import"./SelectionIndicator-C-DSpShj.js";import"./useDescription-BzFZmdMU.js";import"./ListKeyboardDelegate-bdj1-D1M.js";import"./PressResponder-TrkJkeFx.js";import"./useLocalizedStringFormatter-CvMlUMFL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsUEYEjn.js";import"./getScrollParent--THwKu2l.js";import"./VisuallyHidden-Dj8T0Unv.js";import"./ModalOverlay-BDERj9-B.js";import"./x-BiXsmrYJ.js";import"./createLucideIcon-CYPfeOBH.js";import"./useLocalizedStringFormatter-mauUPS39.js";import"./Heading-Cig3SoG6.js";import"./Button-2sJltsSG.js";import"./Button.module-BB7N-cLd.js";import"./info-DsHSuikr.js";import"./Popover-Ccpu4CGe.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
