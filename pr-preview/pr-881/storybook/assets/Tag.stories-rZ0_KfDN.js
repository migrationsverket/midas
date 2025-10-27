import{j as a}from"./iframe-DQeG1L7j.js";import{T as o,a as i,s as D}from"./Tag-DGc8tcRo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CKseS_yJ.js";import"./utils-B2QlKTd1.js";import"./clsx-B-dksMZM.js";import"./Hidden-DTciBjOt.js";import"./useFocusRing-PqEGmFE5.js";import"./index-DaxeWZVM.js";import"./index-BnaeFB6-.js";import"./useLabels-BEjjJ7Q5.js";import"./useButton-CXG7KoTH.js";import"./Collection-C-pJ5t9i.js";import"./index-DN8s9QiM.js";import"./ListBox-CNHvQstg.js";import"./DragAndDrop-Cyc-3dtX.js";import"./getScrollParent-o3GQ4_wx.js";import"./scrollIntoView-Cm0BGxtF.js";import"./Separator-DBn0y7ro.js";import"./SelectionManager-Hv8aK9gK.js";import"./useEvent-CpZkRW6Z.js";import"./SelectionIndicator-DKaZauoY.js";import"./useDescription-jaEN_hHp.js";import"./useControlledState-DfLx6uzq.js";import"./ListKeyboardDelegate-LGbifDw-.js";import"./RSPContexts-B7hVWhIM.js";import"./Text-BIDKVX1T.js";import"./inertValue-lFu0Iw40.js";import"./useListState-c0gfBwXa.js";import"./useHighlightSelectionDescription-DJIy01uP.js";import"./useUpdateEffect-CAXoWWLB.js";import"./useLocalizedStringFormatter-DsEpldrj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-5eH1SbCl.js";import"./useField-s8A3ZWFp.js";import"./clsx-Ciqy0D92.js";import"./Button-PjNs6Wec.js";import"./Button.module-CcWMkJAG.js";import"./x-DdKnjjl0.js";import"./createLucideIcon-7HBvDr3d.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
