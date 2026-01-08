import{j as e,l}from"./iframe-Cqv18ImU.js";import{S as t}from"./Skeleton-q5Vcf-r5.js";import{T as p}from"./TextField-CU3y_EOi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2yfBXHm.js";import"./utils-DzbyOGZ_.js";import"./TextField-LeW0Hvuz.js";import"./FieldError-Cwk39N_k.js";import"./Text-B830MCwt.js";import"./useFocusRing-V1CF2lyh.js";import"./index-BZmzkW00.js";import"./index-Nt-ezTyj.js";import"./Text-DteYonWN.js";import"./RSPContexts-DOgGE-X8.js";import"./Form-D8a6I2TO.js";import"./useFormValidation-DZCoeM0o.js";import"./Group-CeOj7dPo.js";import"./Input-GSo82qmm.js";import"./Hidden-D8Gg8WaH.js";import"./Button-CHZfUzDl.js";import"./useLabels-CNsjRHPU.js";import"./useButton-DDIuuTKh.js";import"./useTextField-oNIf8dly.js";import"./useControlledState-DY68Wkyd.js";import"./useField-DcjSv-D1.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CLvgkq8P.js";import"./Dialog-K8ntk6sz.js";import"./OverlayArrow-PEhFhM_P.js";import"./useResizeObserver-BIpoNcBC.js";import"./Collection-BmY9KKYW.js";import"./index-BZiaFPS2.js";import"./Separator-BOvZJ_dj.js";import"./SelectionManager-BeEB6CA7.js";import"./useEvent-DxBQLibX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFon-F_M.js";import"./useDescription-BGQ7yS04.js";import"./ListKeyboardDelegate-C8of9doW.js";import"./PressResponder-BFkxg2fB.js";import"./useLocalizedStringFormatter-7YQVF9yJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C3hBAu6W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRuyO-og.js";import"./Button-DCnMOEqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAA2MslF.js";import"./createLucideIcon-Dvn_rsFU.js";import"./x-DoaJGzfS.js";import"./Heading-B-3IvVIv.js";import"./info-0yIu5wJK.js";import"./Popover-C8uroeFt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
