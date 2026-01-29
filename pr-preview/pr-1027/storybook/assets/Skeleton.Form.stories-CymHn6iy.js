import{j as e,l}from"./iframe-CPtuJ8HO.js";import{S as t}from"./Skeleton-CtRtmDDn.js";import{T as p}from"./TextField-Bu-Lk0Dt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D7TGdGDZ.js";import"./utils-Wu2XGcEF.js";import"./TextField-BGqaWfKG.js";import"./FieldError-DMwa18ms.js";import"./Text-Xck8zNqM.js";import"./useFocusRing-B2VzlZnk.js";import"./index-BRWS9LDr.js";import"./index-BOHm-TSr.js";import"./Text-BHQtEdFP.js";import"./RSPContexts-eb7b9mtr.js";import"./Form-C5zBMOIx.js";import"./useFormValidation-Bpm9_0qx.js";import"./Group-DKyGMwTG.js";import"./Input-CUhQHbta.js";import"./Hidden-CqVIwIVB.js";import"./Button-ZJtGU8il.js";import"./useLabels-BdTBLhcX.js";import"./useButton-Cj3FTjdJ.js";import"./useTextField-BRBfHMXE.js";import"./useControlledState-CLvfzbin.js";import"./useField-Ds3Z5M45.js";import"./TextField.module-1fNSVGjT.js";import"./Label-C6BEtblS.js";import"./Dialog-vu-r9Ph4.js";import"./OverlayArrow-YAmE0xGm.js";import"./useResizeObserver-CTW49b7i.js";import"./Collection-XbEL7V6x.js";import"./index-CIORga0m.js";import"./Separator-qWD69KoT.js";import"./SelectionManager-lQrsa-HY.js";import"./useEvent-Bq2H3CvS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSVB12IK.js";import"./useDescription-CMX7WFxi.js";import"./ListKeyboardDelegate-gAR5iSK6.js";import"./PressResponder-UxKT-oab.js";import"./useLocalizedStringFormatter-MASyzKxf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-c85R6HKb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXwhVzS2.js";import"./Button-D3yQOAis.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BO2qvTML.js";import"./createLucideIcon-CZ8AHqP_.js";import"./x-59_pYRVt.js";import"./Heading-vaeBGNC5.js";import"./info-CEMP60Zu.js";import"./Popover-CrsEMzBT.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
