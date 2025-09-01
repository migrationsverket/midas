import{j as a}from"./iframe-5BetUtcV.js";import{T as o,a as i,s as D}from"./Tag-DLh6vhfu.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CWF7mv71.js";import"./utils-CoA_VPnw.js";import"./clsx-B-dksMZM.js";import"./Hidden-BF7xvCVL.js";import"./useFocusRing-VggDcjf3.js";import"./index-lQmPnj_E.js";import"./index-DvrWc4Vr.js";import"./useLabels-DbY8zMOO.js";import"./useButton-CtkpYNzL.js";import"./Collection-DBS-_PEV.js";import"./index-DIRhbqUS.js";import"./ListBox-DBr6ecM-.js";import"./DragAndDrop-CC-2F5ez.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DJVMOb-M.js";import"./SelectionManager-BT7TWSrC.js";import"./useEvent-BLzgi9sU.js";import"./FocusScope-D4LGXEog.js";import"./useDescription-CReAlymS.js";import"./useControlledState-C0PP9f13.js";import"./ListKeyboardDelegate-DbtfxGvo.js";import"./Text-BHUVVTHZ.js";import"./inertValue-DwrsRQP3.js";import"./useListState-BvHVnvuk.js";import"./useField-DPjq8RHS.js";import"./useHighlightSelectionDescription-Bs5DQLz3.js";import"./useUpdateEffect-CqXis3IH.js";import"./useLocalizedStringFormatter-HDZb6t0o.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DPWgGBgL.js";import"./Button-BiRN1gd-.js";import"./Button.module-CF2bVDCq.js";import"./x-BkaBrGjB.js";import"./createLucideIcon-BCYUxSlg.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
