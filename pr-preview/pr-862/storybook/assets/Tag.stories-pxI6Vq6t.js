import{j as a}from"./iframe-BGPycnHf.js";import{T as o,a as i,s as D}from"./Tag--C7J8cku.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C71vjdbN.js";import"./utils-BOX0X8LU.js";import"./clsx-B-dksMZM.js";import"./Hidden-Us49cNbP.js";import"./useFocusRing-o8_PlNoR.js";import"./index-BMM2fC0F.js";import"./index-Cq0t6jM0.js";import"./useLabels-DPca-ubL.js";import"./useButton-CzmmvLdf.js";import"./Collection-LeGTwjky.js";import"./index-Ddbd_Rp5.js";import"./ListBox-Ch8xShjc.js";import"./DragAndDrop-Cd8XsTJX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-aYAYKbv7.js";import"./SelectionManager-DnZEOCNc.js";import"./useEvent-Ca-zEIoh.js";import"./FocusScope-B3tz6rBt.js";import"./useDescription-DcWpSDNe.js";import"./useControlledState-p3ocYvxR.js";import"./context-CHtlpFyY.js";import"./Text-BuO5k6im.js";import"./inertValue-CmIkbLJC.js";import"./useListState-DM1d_0S7.js";import"./useHighlightSelectionDescription-BAbQA8OK.js";import"./useUpdateEffect-Cl1wzn88.js";import"./useLocalizedStringFormatter-lGZHYR3R.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DrUMg6Lv.js";import"./useField-DsvgtN64.js";import"./clsx-Ciqy0D92.js";import"./Button-COhbOtXy.js";import"./Button.module-CcWMkJAG.js";import"./x-nYWipnlU.js";import"./createLucideIcon-LuAX6DXa.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
