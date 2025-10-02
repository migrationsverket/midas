import{j as a}from"./iframe-DyJhOIHu.js";import{T as o,a as i,s as D}from"./Tag-CxBeESwB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bsgw5T0o.js";import"./utils-Ca8nIy98.js";import"./clsx-B-dksMZM.js";import"./Hidden-H7XPsmwy.js";import"./useFocusRing-3N_6QbD3.js";import"./index-tl4Jvvuo.js";import"./index-aWjYnd8Q.js";import"./useLabels-Cxi1wSiA.js";import"./useButton-CtUYowCd.js";import"./Collection-WRtG8jX3.js";import"./index-ezulmnkY.js";import"./ListBox-3qZ_4-KR.js";import"./DragAndDrop-D_bqehkP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CDugrJIa.js";import"./SelectionManager-uFcDfZct.js";import"./useEvent-CSJQCX0i.js";import"./FocusScope-BqV7y34N.js";import"./useDescription-D9p7SlLj.js";import"./useControlledState-CJU9zzWn.js";import"./context-CdgczMNG.js";import"./Text-D5vDhVRF.js";import"./inertValue-DFHiQ5c1.js";import"./useListState--1jsPRSv.js";import"./useHighlightSelectionDescription-uysKhSqC.js";import"./useUpdateEffect-BDmu_CVU.js";import"./useLocalizedStringFormatter-Cj8WdTyX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C3ERig6M.js";import"./useField-n_m2f531.js";import"./clsx-Ciqy0D92.js";import"./Button-BY1nz12H.js";import"./Button.module-DRhvPh0f.js";import"./x-DloEspXG.js";import"./createLucideIcon-BtIafmwO.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
