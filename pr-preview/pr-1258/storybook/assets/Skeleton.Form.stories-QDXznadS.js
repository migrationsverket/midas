import{j as e,l}from"./iframe-Bsevwbh7.js";import{S as t}from"./Skeleton-Comfu7gf.js";import{T as p}from"./TextField-B8tZBQBj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ddomd9bk.js";import"./utils-BjUYJUY7.js";import"./FieldError-BOklNagG.js";import"./Text-C73-jwg3.js";import"./useFocusRing-DBBFiexc.js";import"./index-0Uf6_8UJ.js";import"./index-CpU-YPFf.js";import"./Text-DtHsSzf4.js";import"./RSPContexts-BP83SwVZ.js";import"./Form-iwCra6U3.js";import"./Group-N6yrWHuu.js";import"./Input-DIhOLcQb.js";import"./Hidden-BzElwnOz.js";import"./Button-BBqJQ0vW.js";import"./useLabel-DSPZXDj4.js";import"./useLabels-CDo4fr32.js";import"./useButton-CLSd70bQ.js";import"./useTextField-E5OriAto.js";import"./useControlledState-J6z6hn1D.js";import"./useField-C9u-Vza6.js";import"./TextField.module-DdivwlC8.js";import"./Label-Sswm5LNs.js";import"./Dialog-Bi-ES4Ec.js";import"./OverlayArrow-Djn7IbHG.js";import"./useResizeObserver-CZo5TL_d.js";import"./Collection-Bo81diqN.js";import"./index-B9Ve_shz.js";import"./Separator-BzEpAVu_.js";import"./SelectionManager-D_20TfLf.js";import"./useEvent-DnUBwNrU.js";import"./scrollIntoView-DwEkoOWU.js";import"./SelectionIndicator-D1XFv4Ic.js";import"./useDescription-CGMCUMbk.js";import"./ListKeyboardDelegate-DJ089RfI.js";import"./PressResponder-CUKNRzx6.js";import"./useLocalizedStringFormatter-Cz7KI8RO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_5bvZM2k.js";import"./getScrollParent-DtUBJ-GV.js";import"./VisuallyHidden-DrA1NcJU.js";import"./ModalOverlay-DK-43hxl.js";import"./x-CPgoGNLm.js";import"./createLucideIcon-DFszj1HS.js";import"./useLocalizedStringFormatter-DXTgKJtU.js";import"./Heading-kuqfBT2E.js";import"./Button-Dtn1R1va.js";import"./Button.module-BB7N-cLd.js";import"./info-MsPdrmYg.js";import"./Popover-CupLrwqt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
