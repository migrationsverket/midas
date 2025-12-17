import{j as e,l}from"./iframe-90IRllkR.js";import{S as t}from"./Skeleton-B4uELR7e.js";import{T as p}from"./TextField-Czi_q6wl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase--8EcAtKl.js";import"./utils-DrgpBlOV.js";import"./TextField-CcH1Gewc.js";import"./FieldError-DOJlLELe.js";import"./Text-BEFgBVJd.js";import"./useFocusRing-D9xLokmm.js";import"./index-BQ655Sgl.js";import"./index-BT0vxHj_.js";import"./Text-CPIt8eLh.js";import"./RSPContexts-ewAwOmpc.js";import"./Form-DBTrq9IK.js";import"./useFormValidation-D-cI-26o.js";import"./Group-BN5Q22pi.js";import"./Input-DObA0f1J.js";import"./Hidden-DTiIbjRg.js";import"./Button-DHs9eQM0.js";import"./useLabels-mqYWaiYP.js";import"./useButton-D-5xgDmf.js";import"./useTextField-6C2nssBk.js";import"./useControlledState-DZmUU_C7.js";import"./useField-krxXExoX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DcuERFfw.js";import"./Dialog-DzMgtgVX.js";import"./OverlayArrow-oVWlFfgv.js";import"./useResizeObserver-CsECYvrM.js";import"./Collection-CtKAbfrw.js";import"./index-Dsx8D9ux.js";import"./Separator-d_zf_vUQ.js";import"./SelectionManager-CmByyIgb.js";import"./useEvent-BIjQLxNz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CVvG_5B7.js";import"./useDescription-Dl1QAAnn.js";import"./ListKeyboardDelegate-C-sq8yPB.js";import"./PressResponder-2GX0tm9o.js";import"./useLocalizedStringFormatter-DKf9ituJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsHJv5_Q.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-v16yXfjK.js";import"./Button-Bhqr8Mcz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-37ueXPbA.js";import"./createLucideIcon-Dz-TUHWJ.js";import"./x-G-MrfCj1.js";import"./Heading-Drc42Blr.js";import"./info--yAdTo-I.js";import"./Popover-f7XpZFas.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
