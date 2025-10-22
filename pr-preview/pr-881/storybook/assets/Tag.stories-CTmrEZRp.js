import{j as a}from"./iframe-8BYnueFg.js";import{T as o,a as i,s as D}from"./Tag-R1bAsdq8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CBikEn1Q.js";import"./utils-C6Gre1fW.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bp_BUZ_z.js";import"./useFocusRing-CKnmIgMI.js";import"./index-CHgSD1HF.js";import"./index-CIFu5K1S.js";import"./useLabels-DMFewhYk.js";import"./useButton-DgoYSZyw.js";import"./Collection-B919ALlL.js";import"./index-D_TcYdql.js";import"./ListBox-DJaIcYLp.js";import"./DragAndDrop-0hEpD7NX.js";import"./getScrollParent-CsZxwLSU.js";import"./scrollIntoView-0ngdYU0f.js";import"./Separator-DvMU-STY.js";import"./SelectionManager-BZSb_0Vg.js";import"./useEvent-Coektrhj.js";import"./SelectionIndicator-LEkhTh4_.js";import"./useDescription-BOJiarN0.js";import"./useControlledState-ByO71iSp.js";import"./ListKeyboardDelegate-BYX9y6cM.js";import"./RSPContexts-BvdRUmXj.js";import"./Text-DZ82wYFk.js";import"./inertValue-DOkHmAV5.js";import"./useListState-BXKfBbLx.js";import"./useHighlightSelectionDescription-DogR07Uu.js";import"./useUpdateEffect-BjT5ABCG.js";import"./useLocalizedStringFormatter-DFeyG3mx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D0yfXwY6.js";import"./useField-jQT7DlrP.js";import"./clsx-Ciqy0D92.js";import"./Button-BtHc606f.js";import"./Button.module-CcWMkJAG.js";import"./x-_gxyiM_q.js";import"./createLucideIcon-B8eaMNuu.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
