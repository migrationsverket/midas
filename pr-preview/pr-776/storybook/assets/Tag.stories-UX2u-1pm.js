import{j as a}from"./iframe-DbOme9Pl.js";import{T as o,a as i,s as D}from"./Tag--FfNOGD8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BHWXw1Sx.js";import"./utils-BHQc-tP8.js";import"./clsx-B-dksMZM.js";import"./Hidden-D7KE367c.js";import"./useFocusRing-BnAYeb6q.js";import"./index-ILly8fBm.js";import"./index-kHv8lpBP.js";import"./useLabels-n31oGBKn.js";import"./useButton-BdTVgd-t.js";import"./Collection-ID8yO1jz.js";import"./index-DzewtBZ-.js";import"./ListBox-DFhe0WD_.js";import"./DragAndDrop-Ca_71FqO.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CvYH9NSU.js";import"./SelectionManager-DKHlmmpz.js";import"./useEvent-DnF908_x.js";import"./FocusScope-A9jHzGYI.js";import"./useDescription-PyghoRHp.js";import"./useControlledState-CXZKd8g9.js";import"./ListKeyboardDelegate-CpJFZs0T.js";import"./Text-BxzvQCRQ.js";import"./inertValue-CmmkhWus.js";import"./useListState-Csh3L-hO.js";import"./useHighlightSelectionDescription-Ci6MwrpN.js";import"./useUpdateEffect-CvpSSWFY.js";import"./useLocalizedStringFormatter-CXAcrH4e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D6sZVNv9.js";import"./useField-CNW5et5P.js";import"./Button-o_9d0gDT.js";import"./Button.module-DgYkWG2o.js";import"./x-egWTb_C6.js";import"./createLucideIcon-CL4c1lf4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
