import{j as e,l}from"./iframe-CiqJOzxF.js";import{S as t}from"./Skeleton-DN_Mdzfk.js";import{T as p}from"./TextField-A5eIQY8S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D9D8wKrd.js";import"./utils-0GsTBzJl.js";import"./TextField-CSVTyu6P.js";import"./FieldError-CwZpQUJo.js";import"./Text-Ch9Sljly.js";import"./useFocusRing-gGMqfhtg.js";import"./index-DrndIZWb.js";import"./index-CFgqDMnH.js";import"./Text-Dn4hqnjy.js";import"./RSPContexts-C0dEMWbh.js";import"./Form-CRxifOsu.js";import"./useFormValidation-BHCltIgr.js";import"./Group-DzhdZ-u0.js";import"./Input-C8DI4jqy.js";import"./Hidden-CFvcIHES.js";import"./Button-BXds3-7Z.js";import"./useLabels-BB9Q2rMv.js";import"./useButton-m7b0MM_h.js";import"./useTextField-BZ_VAzGr.js";import"./useControlledState-B5UnhFwk.js";import"./useField-BKRlvos-.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BJMWqc0W.js";import"./Dialog-Dxwwv4Kn.js";import"./OverlayArrow-BzRu9K3f.js";import"./useResizeObserver-gqMwxCuL.js";import"./Collection-BizYL9zZ.js";import"./index-PGwKz-re.js";import"./Separator-sBb7m_eW.js";import"./SelectionManager-Cs_75vrL.js";import"./useEvent-lRnGMY-c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ChpEnvYL.js";import"./useDescription-CTOINnPD.js";import"./ListKeyboardDelegate-DZDwGlUz.js";import"./PressResponder-Bx05VmIl.js";import"./useLocalizedStringFormatter-CIhkSn5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-x2twpE3n.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Tv_5dhqS.js";import"./Button-CxRmwJHW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEHHKrhf.js";import"./createLucideIcon-DT02zB1r.js";import"./x-zbQhWPRB.js";import"./Heading-RSqUFAKa.js";import"./info-B1L5jFLY.js";import"./Popover-Br5z27dt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
