import{j as a}from"./iframe-DRZdUIJs.js";import{T as o,a as i,s as D}from"./Tag-C8t6EW1U.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DIBMlKDy.js";import"./utils-CKK3UDgr.js";import"./clsx-B-dksMZM.js";import"./Hidden-QAoTiEsM.js";import"./useFocusRing-Hsify7_X.js";import"./index-CbBEFnPv.js";import"./index-BtzDifcb.js";import"./useLabels-CffQ9XD5.js";import"./useButton-y4Wb2qRj.js";import"./Collection-DngcUsHy.js";import"./index-B_uzEBfw.js";import"./ListBox-DBnIOd2X.js";import"./DragAndDrop-B-zf_jpp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BIHWamwv.js";import"./SelectionManager-DamX-YTE.js";import"./useEvent-7J7lBuYS.js";import"./FocusScope-C0EJLdj3.js";import"./useDescription-DpXKBDaJ.js";import"./useControlledState-Anq9cKeh.js";import"./ListKeyboardDelegate-Dw44kFR0.js";import"./Text--dAePbsz.js";import"./inertValue-D9FsPl-4.js";import"./useListState-Bn-N4gBG.js";import"./useHighlightSelectionDescription-B-PhqH1P.js";import"./useUpdateEffect-BNs3Qt-X.js";import"./useLocalizedStringFormatter-5UJ-e-Hg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D72LynxG.js";import"./useField-B0wBiE9l.js";import"./Button-BU0d3cnH.js";import"./Button.module-K7qYOset.js";import"./x-C1FYIfKJ.js";import"./createLucideIcon-CYCCyUv-.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
