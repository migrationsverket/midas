import{j as e,l}from"./iframe-DI52Qlo4.js";import{S as t}from"./Skeleton-BQd-XiX5.js";import{T as p}from"./TextField-C_X8ql5x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DpoXNMr5.js";import"./utils-urtsDcnm.js";import"./FieldError-CSuZWyFo.js";import"./Text-C_RzDhoB.js";import"./useFocusRing-2JaqZA15.js";import"./index-BMA7stMc.js";import"./index-Dz8_67dy.js";import"./Text-D2edba9r.js";import"./RSPContexts-CrMRLfkl.js";import"./Form-BX2Kgv4V.js";import"./Group-BrGteZuE.js";import"./Input-B264emcI.js";import"./Hidden-CscT1sly.js";import"./Button-eSR4bLK4.js";import"./useLabel-Btef6QY2.js";import"./useLabels-DmZ1Q95o.js";import"./useButton-C_swT-ux.js";import"./useTextField-CbfOCGrE.js";import"./useControlledState-CLoU2XYC.js";import"./useField-Da8HQzfP.js";import"./TextField.module-DdivwlC8.js";import"./Label-Hai3BT5e.js";import"./Dialog-CRbXODQt.js";import"./OverlayArrow-D7hD0gOc.js";import"./useResizeObserver-6WAybvcV.js";import"./Collection-hUB3sBJJ.js";import"./index-Bdpc1bHO.js";import"./Separator-kUMFISQV.js";import"./SelectionManager-CX4E6mov.js";import"./useEvent-BfgA6E-w.js";import"./scrollIntoView-hSq_mdzL.js";import"./SelectionIndicator-By0Zxqsk.js";import"./useDescription-58WIc14O.js";import"./ListKeyboardDelegate-H7rz5L58.js";import"./PressResponder-BhhTh5UN.js";import"./useLocalizedStringFormatter-C62DnPYV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCqfTzdf.js";import"./getScrollParent-BHx5XlTQ.js";import"./VisuallyHidden-Ct-vZpQ3.js";import"./x-B7Z7gY9k.js";import"./createLucideIcon-Bf3dyCX1.js";import"./useLocalizedStringFormatter-B0GJ_bM4.js";import"./Heading-B05gLXhy.js";import"./Button-3POgXEp-.js";import"./Button.module-BB7N-cLd.js";import"./info-D_f5mT_-.js";import"./Popover-Ci3NpRpo.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
