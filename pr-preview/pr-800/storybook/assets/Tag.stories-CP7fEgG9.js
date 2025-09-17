import{j as a}from"./iframe-_C5mtn_B.js";import{T as o,a as i,s as D}from"./Tag-4W45cBCA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CZtGymVk.js";import"./utils-CemDbj2u.js";import"./clsx-B-dksMZM.js";import"./Hidden-60QhfUjM.js";import"./useFocusRing-y8LH5XnG.js";import"./index-DZ2jXjMj.js";import"./index-C2ZAJ-KA.js";import"./useLabels-DFW6s2N1.js";import"./useButton-GNLvSyGg.js";import"./Collection-DQTFtC7L.js";import"./index-C3Vj5Mfn.js";import"./ListBox-DVbtI1L7.js";import"./DragAndDrop-FBcWsCfs.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BvZshpy3.js";import"./SelectionManager-kCtMK532.js";import"./useEvent-DiMDdy0k.js";import"./FocusScope-V40nXmab.js";import"./useDescription-HkWfklZX.js";import"./useControlledState-D0EeULnQ.js";import"./ListKeyboardDelegate-DCbyitmJ.js";import"./Text-DWqgm5Cx.js";import"./inertValue-DL67GmKD.js";import"./useListState-Bv6-uyMZ.js";import"./useHighlightSelectionDescription-_ZmBCzoJ.js";import"./useUpdateEffect-UrblZc8x.js";import"./useLocalizedStringFormatter-CuFiZHL8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C0FrFhPh.js";import"./useField-BHnJPmdk.js";import"./Button-DFb6hUG5.js";import"./Button.module-DRhvPh0f.js";import"./x-CTb1Kjw0.js";import"./createLucideIcon-2KdRlZd8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
