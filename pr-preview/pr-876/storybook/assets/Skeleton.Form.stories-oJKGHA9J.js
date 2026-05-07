import{j as e,l}from"./iframe-BANbOrjL.js";import{S as t}from"./Skeleton-DknfOzXV.js";import{T as p}from"./TextField-CoYCgQFG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-j-yJL31x.js";import"./utils-54peqJ8a.js";import"./FieldError-Dz4Gx-Yr.js";import"./Text-1nbNgZtg.js";import"./useFocusRing-DbV3xYYs.js";import"./index-DvmcBK1X.js";import"./index-C5-8epWM.js";import"./Text-Ckl3Bse6.js";import"./RSPContexts-BniJiskW.js";import"./Form-CNFyYQkx.js";import"./Group-bGKMXFQ3.js";import"./Input-trOtA2gB.js";import"./Hidden-B-0UQMnM.js";import"./Button-CFtjy4Ss.js";import"./useLabel-DaWSn-ZG.js";import"./useLabels-596GHSCS.js";import"./useButton-DJ76KY2c.js";import"./useTextField-B5J2eHIq.js";import"./useControlledState-yh8y5GNM.js";import"./useField-BkzAvj6x.js";import"./TextField.module-DdivwlC8.js";import"./Label-CV9B1-E-.js";import"./Dialog-GHWvaqdY.js";import"./OverlayArrow-3uBcSzI2.js";import"./useResizeObserver-BFsJhDwf.js";import"./Collection-zjfmvZA8.js";import"./index-BUHuSkUj.js";import"./Separator-3vGtn533.js";import"./SelectionManager-xAct9blH.js";import"./useEvent-CZNt73ky.js";import"./scrollIntoView-BwHcSgh9.js";import"./SelectionIndicator-CrTEERDH.js";import"./useDescription-BXc5IFCt.js";import"./ListKeyboardDelegate-DM397JfH.js";import"./PressResponder-DKqAQjjU.js";import"./useLocalizedStringFormatter-CQ9MV6Yb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zaaq6a5j.js";import"./getScrollParent-DmzKjg3u.js";import"./VisuallyHidden-DT3xn_Oy.js";import"./ModalOverlay-CtaOPmLe.js";import"./x-Bo7YhGfd.js";import"./createLucideIcon-mdFywCsT.js";import"./useLocalizedStringFormatter-C_ZDKjDL.js";import"./Heading-BB-a4vZh.js";import"./Button-Dov5qDwf.js";import"./Button.module-BB7N-cLd.js";import"./info-BAT2abYY.js";import"./Popover-C_wY1Eq1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
