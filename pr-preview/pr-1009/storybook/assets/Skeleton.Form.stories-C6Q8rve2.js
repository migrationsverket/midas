import{j as e,l}from"./iframe-D7pn65HD.js";import{S as t}from"./Skeleton-uD6QRfqb.js";import{T as p}from"./TextField-DGRqJURX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-XkPUeciv.js";import"./utils-gkLu2Q80.js";import"./TextField-B0MmfQ9V.js";import"./FieldError-CDBZhnFy.js";import"./Text-CMQOGgUM.js";import"./useFocusRing-BRQN0HVs.js";import"./index-B0zKztvS.js";import"./index-CABcdHYW.js";import"./Text-BoHU8OeY.js";import"./RSPContexts-BiIeKPVo.js";import"./Form-DjYfCbKz.js";import"./useFormValidation-dgDhPSYS.js";import"./Group-DdUaPtgI.js";import"./Input-B0hg_nZi.js";import"./Hidden-CqqsxRSw.js";import"./Button--lRgnSCB.js";import"./useLabels-e3eqZc1V.js";import"./useButton-BtvyslLl.js";import"./useTextField-DqcRNVB_.js";import"./useControlledState-DyV8n_wu.js";import"./useField-BMGySlzI.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CRf-9xcj.js";import"./Dialog-CQ-vtgp9.js";import"./OverlayArrow-CS1O52d7.js";import"./useResizeObserver-2EUM9m3y.js";import"./Collection-Bw8YLpyL.js";import"./index-CS4RSD2-.js";import"./Separator-DC0OgbDN.js";import"./SelectionManager-CZBRL3Fv.js";import"./useEvent-CFzcDuTK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C9yAklod.js";import"./useDescription-R-m8v4zo.js";import"./ListKeyboardDelegate-BmLHcRFS.js";import"./PressResponder-BnLM6qpa.js";import"./useLocalizedStringFormatter-DbF5DsVQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DP_6AQ0a.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cjr7sTkY.js";import"./Button-_4N2Tdvz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CFmBjBoC.js";import"./createLucideIcon-B4o84bfn.js";import"./x-CSD6cUrJ.js";import"./Heading-CI-0x4tv.js";import"./info-BMpDQggb.js";import"./Popover-CbpVQe_S.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
