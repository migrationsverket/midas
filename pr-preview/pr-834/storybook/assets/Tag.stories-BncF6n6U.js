import{j as a}from"./iframe-CFXQMQHb.js";import{T as o,a as i,s as D}from"./Tag-CmzZG9f3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bv_Jo69S.js";import"./utils-DknU9YQf.js";import"./clsx-B-dksMZM.js";import"./Hidden-9FbrPhLE.js";import"./useFocusRing-BNxQYUUw.js";import"./index-Bn_uFjuA.js";import"./index-I82L3ZA8.js";import"./useLabels-so2nStO2.js";import"./useButton-C5sbR6_A.js";import"./Collection-DcN9KRKo.js";import"./index-JTgsPxB1.js";import"./ListBox-B1q7_bDM.js";import"./DragAndDrop-Xw9f6-XP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C0b4NcoG.js";import"./SelectionManager-11qI2WH3.js";import"./useEvent-DddWPXGS.js";import"./FocusScope-BAnomxlF.js";import"./useDescription-Dfknv2vQ.js";import"./useControlledState-DmTGgAAO.js";import"./ListKeyboardDelegate--BoBavbM.js";import"./Text-DEpSJobW.js";import"./inertValue-BKc9OAbH.js";import"./useListState-BkXVcXYl.js";import"./useHighlightSelectionDescription-2W9Bp8ER.js";import"./useUpdateEffect-Bt0F7WI7.js";import"./useLocalizedStringFormatter-BHJhcrUS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-zPnjjIgM.js";import"./useField-CHSz1f3_.js";import"./Button-BnAxrWx8.js";import"./Button.module-DRhvPh0f.js";import"./x-dh2FfAGW.js";import"./createLucideIcon-DdnbVL3v.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
