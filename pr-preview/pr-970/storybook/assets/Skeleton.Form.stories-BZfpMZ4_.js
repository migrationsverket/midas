import{j as e,l}from"./iframe-C5qknig8.js";import{S as t}from"./Skeleton-fZSkjuvj.js";import{T as p}from"./TextField-DKuTUL8X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CSm8LBaR.js";import"./utils-DKdcqyb7.js";import"./TextField-CXPoQm4O.js";import"./FieldError-BDCaPSBM.js";import"./Text-BittgrxB.js";import"./useFocusRing-CXDO28rF.js";import"./index-DQIQ0FrH.js";import"./index-DiIH_Ibi.js";import"./Text-BKPtXaGU.js";import"./RSPContexts-C0FXYt0s.js";import"./Form-8_vshjSV.js";import"./useFormValidation-noWX4_Dc.js";import"./Group-pK_2h4VJ.js";import"./Input-D0KSM0XN.js";import"./Hidden-eDXD45wQ.js";import"./Button-D58d_jbz.js";import"./useLabels-COhO-YfG.js";import"./useButton-BSV9csQJ.js";import"./useTextField-Cfnv4I2f.js";import"./useControlledState-DinrOT-z.js";import"./useField-CjBYQtS8.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CMSFNhe2.js";import"./Dialog-OEfzleEe.js";import"./OverlayArrow-IsBdCkco.js";import"./useResizeObserver-CJ2zvJf1.js";import"./Collection-Cl6ZApDi.js";import"./index-Cefw6TiR.js";import"./Separator-B3-EMypz.js";import"./SelectionManager-JWWrUE46.js";import"./useEvent-BGLQsjMc.js";import"./scrollIntoView-BtORbJyS.js";import"./SelectionIndicator-BJ0zuo1G.js";import"./useDescription-jFsYt6-l.js";import"./ListKeyboardDelegate-D34rUNJj.js";import"./PressResponder-eX1aEu-_.js";import"./useLocalizedStringFormatter-CDMy5frs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-KoXv4JrH.js";import"./VisuallyHidden-Cdnh5iDE.js";import"./Button-DU43-mcq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxThFscc.js";import"./createLucideIcon-Cxw0HGiz.js";import"./x-C7TGMSzB.js";import"./Heading-BhYc6m-u.js";import"./info-ClsjBgt5.js";import"./Popover-lMy3K5Bk.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
