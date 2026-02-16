import{j as e,l}from"./iframe-DJUtdHwV.js";import{S as t}from"./Skeleton-breAO2uo.js";import{T as p}from"./TextField-CYpOt1Tq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ClvALru8.js";import"./utils-D4RE6qhK.js";import"./TextField-Dez3oB2V.js";import"./FieldError-C9oMwrfJ.js";import"./Text-B58uuGYq.js";import"./useFocusRing-C5U0CiHo.js";import"./index-CVKq7ZZT.js";import"./index-Ha_8AofU.js";import"./Text-Dl70Vupn.js";import"./RSPContexts-CeL7Ybna.js";import"./Form-Bx3qbLf4.js";import"./useFormValidation-DRqFyOxo.js";import"./Group-BUo-NuQG.js";import"./Input-C0MS31TD.js";import"./Hidden-DPRRZP9g.js";import"./Button-bQvo04EJ.js";import"./useLabels-Duan9ykz.js";import"./useButton-D3H5VeWz.js";import"./useTextField-DI7yS5us.js";import"./useControlledState-C1jOx-dc.js";import"./useField-0I64IgUK.js";import"./TextField.module-Cm6797Xw.js";import"./Label-BcprkH4d.js";import"./Dialog-DQe-Gfpg.js";import"./OverlayArrow-CDCCcTTD.js";import"./useResizeObserver-DPB_SUWz.js";import"./Collection-DaGi1ZdJ.js";import"./index-BSsOzAdI.js";import"./Separator-CRJE82p_.js";import"./SelectionManager-gpdXDHRv.js";import"./useEvent-T3MosaLJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D3PmNYx2.js";import"./useDescription-nXINSnLi.js";import"./ListKeyboardDelegate-65Ez9XKB.js";import"./PressResponder-BiRPbGEB.js";import"./useLocalizedStringFormatter-W5YzKkQs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Do24X5lR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-m39w7boQ.js";import"./Button-CThTpwQ6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5gvZJBEc.js";import"./createLucideIcon-SxhoPmH3.js";import"./x-BHtKcay4.js";import"./Heading-DL6t5x4O.js";import"./info-DBLxQG3L.js";import"./Popover-CNhN5vuc.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
