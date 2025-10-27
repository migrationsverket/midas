import{j as a}from"./iframe-gGWQLxkD.js";import{T as o,a as i,s as D}from"./Tag-YFpHWWBb.js";import"./preload-helper-Dp1pzeXC.js";import"./Button--dJgDeV1.js";import"./utils-COVNf6xx.js";import"./clsx-B-dksMZM.js";import"./Hidden-DBrW_Lqf.js";import"./useFocusRing-CugJUgrJ.js";import"./index-99xU0zCD.js";import"./index-5_rsHiJU.js";import"./useLabels-B7qxnk5a.js";import"./useButton-DQsYOVHU.js";import"./Collection-BUJ8ktUg.js";import"./index-DBzRzV8X.js";import"./ListBox-Dd0U2Us_.js";import"./DragAndDrop-CM5nmD4F.js";import"./getScrollParent-CY8-H0nW.js";import"./scrollIntoView-CeU_w8rc.js";import"./Separator-DE-WELiL.js";import"./SelectionManager-DimPVa7U.js";import"./useEvent-DeHUnjIk.js";import"./SelectionIndicator-BbWclmwE.js";import"./useDescription-Dk7JAtZ6.js";import"./useControlledState-Cs2zNTA2.js";import"./ListKeyboardDelegate-XHFGwhDW.js";import"./RSPContexts-DHjo2paE.js";import"./Text-RVs07wA0.js";import"./inertValue-BBW3JNxE.js";import"./useListState-DpKCW7fB.js";import"./useHighlightSelectionDescription-DtIg1g9Y.js";import"./useUpdateEffect-5hrPh02G.js";import"./useLocalizedStringFormatter-BYjc7C_K.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-ChjBVn94.js";import"./useField-BMk1sFmj.js";import"./clsx-Ciqy0D92.js";import"./Button-NOSs_CIu.js";import"./Button.module-CcWMkJAG.js";import"./x-u1wMqsg_.js";import"./createLucideIcon-BM0PUz9v.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
