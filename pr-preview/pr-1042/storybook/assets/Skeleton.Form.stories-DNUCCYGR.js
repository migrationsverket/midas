import{j as e,l}from"./iframe-C_0qThD6.js";import{S as t}from"./Skeleton-CdvHuU3P.js";import{T as p}from"./TextField-DV1LkItG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C_rw7FTk.js";import"./utils-bnb8b6bb.js";import"./TextField-wEfT5Iqc.js";import"./FieldError-CqD9H87d.js";import"./Text-CKF9tCug.js";import"./useFocusRing-DfupDaWX.js";import"./index-BSnKqic_.js";import"./index-CPoNMQTv.js";import"./Text-Due48UAx.js";import"./RSPContexts-CF-RUooF.js";import"./Form-CP8dFFLN.js";import"./useFormValidation-_flSi_SL.js";import"./Group-BnNblr-R.js";import"./Input-DuMhtm_a.js";import"./Hidden-Btf5vQwa.js";import"./Button-B_Hp7nF_.js";import"./useLabels-05vWhTwh.js";import"./useButton-DiIDLtaM.js";import"./useTextField-bQA4fmUY.js";import"./useControlledState-DErGdLYP.js";import"./useField-NVSHVjO7.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BI3kUMtC.js";import"./Dialog-iHPmYWfL.js";import"./OverlayArrow-ABGG2CIh.js";import"./useResizeObserver-DKRF4YVY.js";import"./Collection-8BQnlDdc.js";import"./index-LWMPJS4z.js";import"./Separator-DhQCajtR.js";import"./SelectionManager-DWtY7fd0.js";import"./useEvent-Bc3qbCgw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BD2rQtLe.js";import"./useDescription-DCtBRw9v.js";import"./ListKeyboardDelegate-BTX2vjTk.js";import"./PressResponder-C18Hdy5P.js";import"./useLocalizedStringFormatter-C4FXgmdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTSrpk2C.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-pXLJ5Ug_.js";import"./Button-DqbGeqrs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQjkICgF.js";import"./createLucideIcon-CC2FZLZA.js";import"./x-BsH9rdWs.js";import"./Heading-CJSVZ5WU.js";import"./info-DiLFh1-W.js";import"./Popover-BDj1u3qP.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
