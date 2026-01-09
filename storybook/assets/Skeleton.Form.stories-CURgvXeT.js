import{j as e,l}from"./iframe-D57HPjUH.js";import{S as t}from"./Skeleton-CarjkaFa.js";import{T as p}from"./TextField-B5j2_QGz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dux--LeO.js";import"./utils-B06jzTgT.js";import"./TextField-DWCatZGK.js";import"./FieldError-D4T6w_uZ.js";import"./Text-BRbYuply.js";import"./useFocusRing-DtsyDwWy.js";import"./index-CgeWXzya.js";import"./index-DybAXT18.js";import"./Text-b7_ug03S.js";import"./RSPContexts-C7gWpURr.js";import"./Form-BlAdMGxA.js";import"./useFormValidation-BquHFWdr.js";import"./Group-BJwhrip2.js";import"./Input-BEx648-v.js";import"./Hidden-Ds1-Bo4r.js";import"./Button-DVU6uVBH.js";import"./useLabels-CqCkvO1J.js";import"./useButton-CaFZ2X3A.js";import"./useTextField-DMqIp21y.js";import"./useControlledState-C5qdaBdS.js";import"./useField-DeXnNznj.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CR0jC5kW.js";import"./Dialog-BVqQjS6c.js";import"./OverlayArrow-Cd82wZ4k.js";import"./useResizeObserver-DM9cfRH9.js";import"./Collection-CbpD3AKB.js";import"./index-B9rGxsJZ.js";import"./Separator-BqlK3CkN.js";import"./SelectionManager-WTSWdZRU.js";import"./useEvent-DImJ-Ww-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BnzQGY8l.js";import"./useDescription-DKI9BPRO.js";import"./ListKeyboardDelegate-DnPSa863.js";import"./PressResponder-DOoRHakO.js";import"./useLocalizedStringFormatter-Do30dAQM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cz55DP5B.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bPoGyprv.js";import"./Button-DUgrP7y1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CP9tIGKw.js";import"./createLucideIcon-_zPB_PGU.js";import"./x-CCfpzTZt.js";import"./Heading-Bm1KbJoW.js";import"./info-CulBlHjB.js";import"./Popover-BYTpsmPj.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
