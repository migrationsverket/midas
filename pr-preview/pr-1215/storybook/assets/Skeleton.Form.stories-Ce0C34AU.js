import{j as e,l}from"./iframe-DagPb3DG.js";import{S as t}from"./Skeleton-DGsE8thc.js";import{T as p}from"./TextField-Dl51Jf5G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CcZ26LF_.js";import"./utils-DEIIZrT8.js";import"./FieldError-DRukOLZw.js";import"./Text-DrUxMYO_.js";import"./useFocusRing-DV81koGP.js";import"./index-X3kKW3OI.js";import"./index-B3KKDvTU.js";import"./Text-DqORZFkZ.js";import"./RSPContexts-BcGBAh60.js";import"./Form-B9MvElX0.js";import"./Group-Dxyy6nmS.js";import"./Input-CkAMwzA7.js";import"./Hidden-BaZDL4oi.js";import"./Button-Ckt0c6HW.js";import"./useLabel-DEs8DT9p.js";import"./useLabels-mT4eX36O.js";import"./useButton-BMw6H5IS.js";import"./useTextField-CJn-OTNZ.js";import"./useControlledState-CD6VDT_E.js";import"./useField-ZI9WuaQD.js";import"./TextField.module-DdivwlC8.js";import"./Label-DKIpbmdG.js";import"./Dialog-ieL7gfDy.js";import"./OverlayArrow-BzpP4f-U.js";import"./useResizeObserver-Bk7CYcnR.js";import"./Collection-DeRVKKKm.js";import"./index-CBRKms-h.js";import"./Separator-BSe9V6Ej.js";import"./SelectionManager-B5aNGbbs.js";import"./useEvent-Cclj6Db-.js";import"./scrollIntoView-C3PoXb1x.js";import"./SelectionIndicator-DfCL_lJp.js";import"./useDescription-BqZkbbJU.js";import"./ListKeyboardDelegate-Ui_fhppm.js";import"./PressResponder-CCFfMcT7.js";import"./useLocalizedStringFormatter-B_hF3Aaq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjzPeBlF.js";import"./getScrollParent-CH3EMup_.js";import"./VisuallyHidden-BiE9yBGm.js";import"./Dialog-Dyiitimk.js";import"./x-DDrUqxbS.js";import"./createLucideIcon-KVoeMAdo.js";import"./useLocalizedStringFormatter-C9lWcR8U.js";import"./Heading-g3dzpiDw.js";import"./Button-DeUqMdFb.js";import"./Button.module-BB7N-cLd.js";import"./info-D8dy8uKY.js";import"./Popover-DTk7zRne.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
