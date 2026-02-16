import{j as e,l}from"./iframe-Baz7hp-H.js";import{S as t}from"./Skeleton-e_WK18jg.js";import{T as p}from"./TextField-TLO2P1P9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-_CQNkQLU.js";import"./utils-CjtbLxkM.js";import"./TextField-DEoyQWTt.js";import"./FieldError-quMvKVD1.js";import"./Text-BOruLmzb.js";import"./useFocusRing-CA4lGYE7.js";import"./index-DJvdvGZ9.js";import"./index-EDewD6TU.js";import"./Text-Cyj2bmOo.js";import"./RSPContexts-DBTSYT66.js";import"./Form-CILyxEJu.js";import"./useFormValidation-BCcQtvtJ.js";import"./Group-B2B1pydA.js";import"./Input-_z9YhuQq.js";import"./Hidden-oFIYqFcy.js";import"./Button-Dapo8NrY.js";import"./useLabels-Cukz6TQK.js";import"./useButton-TjLWHBNo.js";import"./useTextField-BZxttkmI.js";import"./useControlledState-CDtJkyNP.js";import"./useField-DLevtW16.js";import"./TextField.module-DpzeWGpt.js";import"./Label-D8VkABV1.js";import"./Dialog-J1bblJsv.js";import"./OverlayArrow-VFbSqgLj.js";import"./useResizeObserver-BElwTX6l.js";import"./Collection-BQoRm15f.js";import"./index-BbUpshm2.js";import"./Separator-DxMQCwa2.js";import"./SelectionManager-WON6PkRD.js";import"./useEvent-Bfmg4g4k.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjsXp9cW.js";import"./useDescription-Cz-ry1Nm.js";import"./ListKeyboardDelegate-DxWxxBDl.js";import"./PressResponder-D8-hgZqM.js";import"./useLocalizedStringFormatter-DqxbRUdN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-f4N_tojI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B91vWDbG.js";import"./Button-DqFJrKR_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-wC_xJP29.js";import"./createLucideIcon-GOimKmMN.js";import"./x-D_880TpH.js";import"./Heading-BNFdwwft.js";import"./info-CNx4w6Nj.js";import"./Popover-CpD1iaK8.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
