import{j as a}from"./iframe-DnFUXazR.js";import{T as o,a as i,s as D}from"./Tag-DiYErljw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CD5AdjcW.js";import"./utils-CvOFn_nw.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHcBwEpO.js";import"./useFocusRing-Bz1RIfvA.js";import"./index-DvyQgsud.js";import"./index-BH52xZJ7.js";import"./useLabels-DlA5dmtY.js";import"./useButton-Cvd6TDcz.js";import"./Collection-D85bJOHz.js";import"./index-nFXpVjlf.js";import"./ListBox-BoYddC77.js";import"./DragAndDrop-BzUHrOIW.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DpNeZgj5.js";import"./SelectionManager-DATJEhG2.js";import"./useEvent-BbsPSmrp.js";import"./FocusScope-CQIq77E7.js";import"./useDescription-CpW3tJ7E.js";import"./useControlledState-NCm5u2kK.js";import"./ListKeyboardDelegate-gGbZMPh5.js";import"./Text-BfPzhcz1.js";import"./inertValue-men6yYdq.js";import"./useListState-CycwDzjJ.js";import"./useHighlightSelectionDescription-BrR5VHaJ.js";import"./useUpdateEffect-tb_ETv8K.js";import"./useLocalizedStringFormatter-Dj5bn3vT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DI36XMBS.js";import"./useField-CULfd8M_.js";import"./Button-Bl8VN_bh.js";import"./Button.module-CF2bVDCq.js";import"./x-8swxvg4y.js";import"./createLucideIcon-BdC831nq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
