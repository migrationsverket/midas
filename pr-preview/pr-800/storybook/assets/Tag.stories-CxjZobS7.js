import{j as a}from"./iframe-BN391zBK.js";import{T as o,a as i,s as D}from"./Tag-Oa8Vl7sI.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CU8bTb-d.js";import"./utils-Bp6Jk10J.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bknn0RHi.js";import"./useFocusRing-Cl65qai3.js";import"./index-m6YScWah.js";import"./index-DjoeDHlV.js";import"./useLabels-CWtmCjJH.js";import"./useButton-CRv-59N6.js";import"./Collection-BSkS_uZw.js";import"./index-QjkYpEvW.js";import"./ListBox-Do28j640.js";import"./DragAndDrop-s6baqfGZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BPT84Cop.js";import"./SelectionManager-D4g17brf.js";import"./useEvent-C5PaGT2T.js";import"./FocusScope-CQHBmsMy.js";import"./useDescription-CYH5kg_g.js";import"./useControlledState-CT4ukCiY.js";import"./ListKeyboardDelegate-BRm7CLqX.js";import"./Text-DAir6v5f.js";import"./inertValue-D0g09Dr0.js";import"./useListState-DJ4OAmoF.js";import"./useHighlightSelectionDescription-DmYjg75Q.js";import"./useUpdateEffect-CLfgyyog.js";import"./useLocalizedStringFormatter-GXB05Q-N.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B0pFT0CK.js";import"./useField-BKzQGwkV.js";import"./Button-D6iiROU2.js";import"./Button.module-DRhvPh0f.js";import"./x-CPtnkpm5.js";import"./createLucideIcon-yySllbR8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
