import{j as a}from"./iframe-B0r6lOcf.js";import{T as o,a as i,s as D}from"./Tag-Cwvrjp4L.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-IJe1jzo3.js";import"./utils-BNCy1f1a.js";import"./clsx-B-dksMZM.js";import"./Hidden-BkwbJLxc.js";import"./useFocusRing-DfoBwrPA.js";import"./index-BHqjeF_r.js";import"./index-LsaNzCZ1.js";import"./useLabels-DQf2RnOO.js";import"./useButton-B70nvdfz.js";import"./Collection-BvJ_nNqo.js";import"./index-BnKzOh_R.js";import"./ListBox-CSrQgxes.js";import"./DragAndDrop-CQfbQMF-.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-AkSLMIU3.js";import"./SelectionManager-DPhTa7Sp.js";import"./useEvent-BsfNgyIb.js";import"./FocusScope-9ZgnHQ9K.js";import"./useDescription-DDoWqPZk.js";import"./useControlledState-DpoRn4DY.js";import"./context-BtC0wuHy.js";import"./Text-Ce7-2uTt.js";import"./inertValue-BX6AFeYq.js";import"./useListState-C66Xq92V.js";import"./useHighlightSelectionDescription-DBAd_HGE.js";import"./useUpdateEffect-Bjrd7MU0.js";import"./useLocalizedStringFormatter-C5r4dzkO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-24y7RKi0.js";import"./useField-CCfgwABM.js";import"./clsx-Ciqy0D92.js";import"./Button-B85fCWmj.js";import"./Button.module-DRhvPh0f.js";import"./x-CAKu0AiA.js";import"./createLucideIcon-CoUiJpwB.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
