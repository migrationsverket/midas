import{j as e,l}from"./iframe-CaGxyJQ5.js";import{S as t}from"./Skeleton-BHnWxolG.js";import{T as p}from"./TextField-DMOUSgzB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DHp0nXlk.js";import"./utils-CVJqKyu4.js";import"./FieldError-BBlPKEY6.js";import"./Text-Dtkx7GWh.js";import"./useFocusRing-LTUTFWnB.js";import"./index-K3VTbzXg.js";import"./index-DRbza-0A.js";import"./Text-W3mtiTBT.js";import"./RSPContexts-_cn7M6Ef.js";import"./Form-Cfd2cFqg.js";import"./useFormValidation-tvbfblk7.js";import"./Group-BHO6bdai.js";import"./Input-CcdY3WN8.js";import"./Hidden-BAAaulvK.js";import"./Button-Bn3l1eKL.js";import"./useLabels-BlAPVOi_.js";import"./useButton-bmkikoqa.js";import"./useTextField-BxWPDhyK.js";import"./useControlledState-CNCDq7j0.js";import"./useField-DTyiot4U.js";import"./TextField.module-DdivwlC8.js";import"./Label-CKj8R9kJ.js";import"./Dialog-DLxW7KLT.js";import"./OverlayArrow-CBy4nJZJ.js";import"./useResizeObserver-CpKOmDlM.js";import"./Collection-CE0nJlW6.js";import"./index-Bx7R-ad4.js";import"./Separator-D2pJZkcF.js";import"./SelectionManager-DzE4SKgf.js";import"./useEvent-CzPSy7Rs.js";import"./scrollIntoView-yBkYCpPJ.js";import"./SelectionIndicator-DM64-xB3.js";import"./useDescription-BuSKxMJt.js";import"./ListKeyboardDelegate-DNfzS-AW.js";import"./PressResponder-HiCvM10K.js";import"./useLocalizedStringFormatter-CZOLyc3D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXHwBS7q.js";import"./getScrollParent-B1-aYvPm.js";import"./VisuallyHidden-BZzDvx5i.js";import"./x-CBNTpHd8.js";import"./createLucideIcon-yEXXgYRp.js";import"./useLocalizedStringFormatter-DdAzyJ4I.js";import"./Heading-UtCJNKfQ.js";import"./Button-SlKntRzd.js";import"./Button.module-BB7N-cLd.js";import"./info-Cl6QVS6K.js";import"./Popover-CphyAV3g.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
