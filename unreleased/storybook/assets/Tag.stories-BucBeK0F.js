import{j as a}from"./iframe-C3HSyfDP.js";import{T as o,a as i,s as D}from"./Tag-Bfl9AcrY.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DhdqXyxg.js";import"./utils-CMAlCf2C.js";import"./clsx-B-dksMZM.js";import"./Hidden-tsey37hm.js";import"./useFocusRing-DZxkh-If.js";import"./index-CKa0VZSz.js";import"./index-DJ30V1Cb.js";import"./useLabels-C10w_e2s.js";import"./useButton-CXp-kvFX.js";import"./Collection-CSAtAFUG.js";import"./index-B5G2cWEp.js";import"./ListBox-BhXo9BFc.js";import"./DragAndDrop-C-Cqk197.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B3plRWQs.js";import"./SelectionManager-BZY7t4gc.js";import"./useEvent-DdWPGepZ.js";import"./FocusScope-BO2SMAdx.js";import"./useDescription-DCpLQhIs.js";import"./useControlledState-C7KMANva.js";import"./context-Cvm8zV-9.js";import"./Text-BjP0SBqR.js";import"./inertValue-BBeNuppM.js";import"./useListState-DrSJ4dsR.js";import"./useHighlightSelectionDescription-B6F-BZ-b.js";import"./useUpdateEffect-2RfCC1lC.js";import"./useLocalizedStringFormatter-Cj9DZ7jb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DZyEzIlE.js";import"./useField-D3gB4lZs.js";import"./Button-BTdvYoJC.js";import"./Button.module-DRhvPh0f.js";import"./x-DlpcIQIK.js";import"./createLucideIcon-2t-5megt.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
