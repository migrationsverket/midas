import{j as a}from"./iframe-DhoHp68Y.js";import{T as o,a as i,s as D}from"./Tag-Dmrgz5DM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-COP6933Q.js";import"./utils-D8Xn7Fmw.js";import"./clsx-B-dksMZM.js";import"./Hidden-DNHgI9-k.js";import"./useFocusRing-Hx48ZFtJ.js";import"./index-B1trEvWw.js";import"./index-D-9rK5fP.js";import"./useLabels-DQuveOtk.js";import"./useButton-SyrpCuCl.js";import"./Collection-Cs7s1ldd.js";import"./index-9e3Pv-hx.js";import"./ListBox-DeHNUybr.js";import"./DragAndDrop-Cy8gsypG.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DaQaft9z.js";import"./SelectionManager-Cfdt_oAQ.js";import"./useEvent-B8QrBGp9.js";import"./FocusScope-BXm0IeTS.js";import"./useDescription-0QAHJHku.js";import"./useControlledState-BK7AGKp4.js";import"./ListKeyboardDelegate-neHb2vXy.js";import"./Text-06IlRXOE.js";import"./inertValue-CpzyXqHk.js";import"./useListState-Bmb-nNwA.js";import"./useHighlightSelectionDescription-5D3tbtJa.js";import"./useUpdateEffect-YFCzRW2m.js";import"./useLocalizedStringFormatter-BtrOfhB-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-_Z1NH3Jb.js";import"./useField-D0_0a68X.js";import"./Button-CRGLMEg1.js";import"./Button.module-DRhvPh0f.js";import"./x-BH929YBn.js";import"./createLucideIcon-BU_cIEJ8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
