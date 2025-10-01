import{j as a}from"./iframe-DZTfVXGQ.js";import{T as o,a as i,s as D}from"./Tag-BRaUETeE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ctxb8OrT.js";import"./utils-cZRrSnGR.js";import"./clsx-B-dksMZM.js";import"./Hidden-CUrnj2CA.js";import"./useFocusRing-BhkwFUJn.js";import"./index-B8OVC2IV.js";import"./index-DOYmBKHl.js";import"./useLabels-BLkLJ6wJ.js";import"./useButton-B5ZQkQ3z.js";import"./Collection-DfK6mcV6.js";import"./index-BNSQdqWs.js";import"./ListBox-Do2RXFWq.js";import"./DragAndDrop-CztlcYiu.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CufbPKnn.js";import"./SelectionManager-wIYi-s7u.js";import"./useEvent-C4O0pocU.js";import"./FocusScope-DOyCOTbb.js";import"./useDescription-CkclpBz2.js";import"./useControlledState-BvQ6p66K.js";import"./context-2Q8pDLJF.js";import"./Text-D-UQkD1n.js";import"./inertValue-DNF7veo8.js";import"./useListState-DgivWjYX.js";import"./useHighlightSelectionDescription-D518wDY9.js";import"./useUpdateEffect-CEo5vuFQ.js";import"./useLocalizedStringFormatter-BMKV-HKX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B5XsnVCf.js";import"./useField-jYjnMkFT.js";import"./Button-CSaYV3xb.js";import"./Button.module-DRhvPh0f.js";import"./x-3bbKeNyO.js";import"./createLucideIcon-BokBmnjP.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
