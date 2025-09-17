import{j as a}from"./iframe-Dl-JMAeE.js";import{T as o,a as i,s as D}from"./Tag-DsMpMYmo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CejbkTvU.js";import"./utils-CYNhgdYX.js";import"./clsx-B-dksMZM.js";import"./Hidden-DzcWrEOs.js";import"./useFocusRing-BOH4N8o8.js";import"./index-Dki5T0ci.js";import"./index-Bq4oUtdi.js";import"./useLabels-BUlGSCz3.js";import"./useButton-Ad9DpLq5.js";import"./Collection-z-twZmlQ.js";import"./index-B_-iDhLE.js";import"./ListBox-KYTndM2F.js";import"./DragAndDrop-hhvB97Hx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CmTBt5rL.js";import"./SelectionManager-DjGoldDT.js";import"./useEvent-00aakS-9.js";import"./FocusScope-DhbJORVX.js";import"./useDescription-C6mZUTLg.js";import"./useControlledState-DqoZgzyd.js";import"./ListKeyboardDelegate-EKbjfD8J.js";import"./Text-B7Y6AYX8.js";import"./inertValue-BTcwmvYq.js";import"./useListState-Cs-M-wpd.js";import"./useHighlightSelectionDescription-Ce_TbQ69.js";import"./useUpdateEffect-C2RQcAJ9.js";import"./useLocalizedStringFormatter-CNbrJtFD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BvWkskbJ.js";import"./useField-eUf4yDgC.js";import"./Button-BKMITPJ0.js";import"./Button.module-DRhvPh0f.js";import"./x-BuynXjy2.js";import"./createLucideIcon-COxpDhoC.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
