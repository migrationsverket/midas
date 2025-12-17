import{j as e,l}from"./iframe-QHZf_0KR.js";import{S as t}from"./Skeleton-BkERmVV9.js";import{T as p}from"./TextField-Ye6Brg0C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C0Vza1fW.js";import"./utils-DMdfkNzG.js";import"./TextField-BQb9PnhI.js";import"./FieldError-kIYsyYtJ.js";import"./Text-DKbBjvoe.js";import"./useFocusRing-ClHcu_zQ.js";import"./index-CHGNqM_2.js";import"./index-xKnCm_n3.js";import"./Text-DUZE8-2g.js";import"./RSPContexts-Bcx0Nn0O.js";import"./Form-BD1cx3un.js";import"./useFormValidation-wuEhW6nY.js";import"./Group-DEIUpihS.js";import"./Input-Dr-xniIi.js";import"./Hidden-nvOr4Cn2.js";import"./Button-f4n0U-wU.js";import"./useLabels-D7QHi2xh.js";import"./useButton-3BOwEEH4.js";import"./useTextField-McR9knVE.js";import"./useControlledState-pIXeoVBI.js";import"./useField-CVccv3lq.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CeWwRU1V.js";import"./Dialog-BiBMiZ0z.js";import"./OverlayArrow-ernfB7Nw.js";import"./useResizeObserver-u_Xx3lsm.js";import"./Collection-b5B6W6Vo.js";import"./index-oYBSpW0s.js";import"./Separator-VNN2H7Re.js";import"./SelectionManager-Db7clpaK.js";import"./useEvent-CsAl9Ry7.js";import"./scrollIntoView-CWY7HxDb.js";import"./SelectionIndicator-Cnyb-EQH.js";import"./useDescription-BeJE8Y-1.js";import"./ListKeyboardDelegate-BI6SQagQ.js";import"./PressResponder-BgcIarS0.js";import"./useLocalizedStringFormatter-GxiQzKTn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BL3CA0PQ.js";import"./VisuallyHidden-DFyPHr9C.js";import"./Button-mxQSmzlb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDkPYuns.js";import"./createLucideIcon-BceMF_ih.js";import"./x-4jZqf9VP.js";import"./Heading-DhUF6nKg.js";import"./info-BSrDdLUr.js";import"./Popover-DvGSOMTM.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
