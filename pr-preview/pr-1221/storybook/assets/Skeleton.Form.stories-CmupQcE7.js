import{j as e,l}from"./iframe-CJ-60Efo.js";import{S as t}from"./Skeleton-LOQ2bAL4.js";import{T as p}from"./TextField-R7j5AfOS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-MDdnd3jX.js";import"./utils-CZH6ruXT.js";import"./FieldError-DwTCOkZc.js";import"./Text-Bn5fWWC4.js";import"./useFocusRing-CupJGFR5.js";import"./index-vOXKIAHi.js";import"./index-BwPxUj6U.js";import"./Text-duXz9LRx.js";import"./RSPContexts-DWc37NkB.js";import"./Form-CC7WfIHq.js";import"./Group-wIK1IaXS.js";import"./Input-CP1yInaz.js";import"./Hidden-DsEAHCyp.js";import"./Button-DEbA7b2J.js";import"./useLabel-VhNYVAU_.js";import"./useLabels-BF24WIl1.js";import"./useButton-C626U6QZ.js";import"./useTextField-BLmCLSnX.js";import"./useControlledState-xfItMrqO.js";import"./useField-avb_z8h9.js";import"./TextField.module-DdivwlC8.js";import"./Label-D5dnWAG6.js";import"./Dialog-BuqhW9nz.js";import"./OverlayArrow-BGutNkw1.js";import"./useResizeObserver-gGq7gavv.js";import"./Collection-BwmddpCk.js";import"./index-DIQ2MoDm.js";import"./Separator-Cuh0wpt8.js";import"./SelectionManager-CUThgWMG.js";import"./useEvent-D57KiGSv.js";import"./scrollIntoView-B5Nn40hc.js";import"./SelectionIndicator-556dOdx1.js";import"./useDescription-QSvqFumA.js";import"./ListKeyboardDelegate-CBv4K7BP.js";import"./PressResponder-D0JRcaJn.js";import"./useLocalizedStringFormatter-CVaGGIuq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkl1YJvl.js";import"./getScrollParent-iQ5uL2tb.js";import"./VisuallyHidden-DhklY17S.js";import"./Modal-NwGj3306.js";import"./x-CqpjZLya.js";import"./createLucideIcon-n1hD9M9W.js";import"./useLocalizedStringFormatter-CNLs5A0B.js";import"./Heading-CcbElr9K.js";import"./Button-DePLT0p9.js";import"./Button.module-BB7N-cLd.js";import"./info-DwxNtEuT.js";import"./Popover-D6TSIqYq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
