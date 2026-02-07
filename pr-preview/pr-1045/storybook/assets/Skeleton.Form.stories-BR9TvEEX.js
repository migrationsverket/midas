import{j as e,l}from"./iframe-DAmvnAWM.js";import{S as t}from"./Skeleton-B1uuV-lQ.js";import{T as p}from"./TextField-BAtNxBwp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CGHNnIk0.js";import"./utils-DYzArhpk.js";import"./TextField-9RtqCLvK.js";import"./FieldError-CC3CownB.js";import"./Text-BHD5lpJL.js";import"./useFocusRing-QsJJnFOd.js";import"./index-smKRG6Ei.js";import"./index-iQgIb4dd.js";import"./Text-CSZqV0cb.js";import"./RSPContexts-SFPpukGj.js";import"./Form-B1LrfJNY.js";import"./useFormValidation-BCE_H7GP.js";import"./Group-mTQnelXy.js";import"./Input-QCl0d19g.js";import"./Hidden-BYI0l7bh.js";import"./Button-DrLU6fB6.js";import"./useLabels-xfye1LU6.js";import"./useButton-DE9dKRCV.js";import"./useTextField-DEbz6k8C.js";import"./useControlledState-BjmKk3Qz.js";import"./useField-3CFuHcV3.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DZzLHIqr.js";import"./Dialog-Ci_aUo6D.js";import"./OverlayArrow-D2HkM_v8.js";import"./useResizeObserver-Cf3C6UeM.js";import"./Collection-C66Lj0rx.js";import"./index-Nu6RYaow.js";import"./Separator-kVJUjc11.js";import"./SelectionManager-B-T3Q6de.js";import"./useEvent-DfaC2w5t.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpfuH37l.js";import"./useDescription-CYqVIVXJ.js";import"./ListKeyboardDelegate-DBzt-ToB.js";import"./PressResponder-lw3aftXV.js";import"./useLocalizedStringFormatter-B4UBrv2w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DgXXWlXd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BneHcT7D.js";import"./Button-CI9p286k.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtExqc3U.js";import"./createLucideIcon-BXDZxBO_.js";import"./x-BtpaJG07.js";import"./Heading-DhgmXja-.js";import"./info-D2SmloP4.js";import"./Popover-hGYNeJ-f.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
