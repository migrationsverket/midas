import{j as e,l}from"./iframe-BB-tPRzQ.js";import{S as t}from"./Skeleton-DPcYZffM.js";import{T as p}from"./TextField-_ycZw1xH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CtKocBti.js";import"./utils-BktV0bPW.js";import"./FieldError-BmvkTOqd.js";import"./Text-Bl05kWUq.js";import"./useFocusRing-Ddeo6vcg.js";import"./index-BUPWnhQ_.js";import"./index-DlKD8ct_.js";import"./Text-DbHLBiJa.js";import"./RSPContexts-BmgBGX_c.js";import"./Form-DFI39c1h.js";import"./Group-BApqKGSd.js";import"./Input-BtNtGeCO.js";import"./Hidden-DvrkBpIw.js";import"./Button-BE24gnSa.js";import"./useLabel-DIhHpIun.js";import"./useLabels-C4NHgo-V.js";import"./useButton-DatsifZv.js";import"./useTextField-BasZ0W8H.js";import"./useControlledState-C03m2Mt3.js";import"./useField-DTyHvujF.js";import"./TextField.module-DdivwlC8.js";import"./Label-DB3td5uV.js";import"./Dialog-CVMFylbH.js";import"./OverlayArrow-u9GpBW35.js";import"./useResizeObserver-DY3a3G5M.js";import"./Collection-BRjDfviX.js";import"./index-Bx-krfMx.js";import"./Separator-BL3Y2Reb.js";import"./SelectionManager-COjlATtX.js";import"./useEvent-3yj0JxfP.js";import"./scrollIntoView-Cj-EggrR.js";import"./SelectionIndicator-BMNmgUmk.js";import"./useDescription-DnTL-4Et.js";import"./ListKeyboardDelegate-BcAY3NJ0.js";import"./PressResponder-ITxRPBR7.js";import"./useLocalizedStringFormatter-BzEzuq1k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CNRvt5U_.js";import"./getScrollParent-D-jmBja6.js";import"./VisuallyHidden-B0KgTif7.js";import"./x-FcVwT7Bo.js";import"./createLucideIcon-BAkvEDNb.js";import"./useLocalizedStringFormatter-Btt7l4WJ.js";import"./Heading-gGjQ1CPE.js";import"./Button-C-wbQlf4.js";import"./Button.module-BB7N-cLd.js";import"./info-MhYsNASq.js";import"./Popover-jSePYUcy.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
