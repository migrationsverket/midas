import{j as a}from"./iframe-DK7reAOd.js";import{T as o,a as i,s as D}from"./Tag-BXFksM8F.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BO_1I5Ub.js";import"./utils-OESsAPWN.js";import"./clsx-B-dksMZM.js";import"./Hidden-C9orspLl.js";import"./useFocusRing-BkDkKTJs.js";import"./index-B3tJDRNG.js";import"./index-DJ51PCHQ.js";import"./useLabels-D8csqjCt.js";import"./useButton-BUSAHevs.js";import"./Collection-6c_ffAQP.js";import"./index-BwEJAaE7.js";import"./ListBox-DCpt_5jX.js";import"./DragAndDrop-DHXRTHzf.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Djrc3vvd.js";import"./SelectionManager-DDfkG0fd.js";import"./useEvent-DtcFXNI4.js";import"./FocusScope-DfnA4Oei.js";import"./useDescription-BpPD3F3Z.js";import"./useControlledState-gE2kw4xj.js";import"./context-H2Gdharf.js";import"./Text-BHXlD-Rd.js";import"./inertValue-ujk_jL_-.js";import"./useListState-BSekMUuH.js";import"./useHighlightSelectionDescription-BMcFRfib.js";import"./useUpdateEffect-vdao59FC.js";import"./useLocalizedStringFormatter-C87XKo6r.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-lhL93SiU.js";import"./useField-BgLQ6HnH.js";import"./clsx-Ciqy0D92.js";import"./Button-ve7YWe9J.js";import"./Button.module-DRhvPh0f.js";import"./x-Dc2vQy82.js";import"./createLucideIcon-BMPBOh_m.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
