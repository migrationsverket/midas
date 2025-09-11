import{j as a}from"./iframe-D1wY2AMi.js";import{T as o,a as i,s as D}from"./Tag-D7amtEwt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C7XgKmc4.js";import"./utils-Dm4sTLRW.js";import"./clsx-B-dksMZM.js";import"./Hidden-CcZHzqy3.js";import"./useFocusRing-Dqb8pOaj.js";import"./index-iwl0dpxo.js";import"./index-CO0FIb4q.js";import"./useLabels-sjx-zVPH.js";import"./useButton-Bsgbghds.js";import"./Collection-CifafLCI.js";import"./index-jso7OU4J.js";import"./ListBox-C4YqfDDi.js";import"./DragAndDrop-kRCmqgI5.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-F8CaeT8O.js";import"./SelectionManager-CwYY0O7d.js";import"./useEvent-C0q0DCk3.js";import"./FocusScope-CVGNMU11.js";import"./useDescription-XIFqPjEw.js";import"./useControlledState-BmCHkhPZ.js";import"./ListKeyboardDelegate-DdDuzCtI.js";import"./Text-CnSR9DO_.js";import"./inertValue-BkqyxZSJ.js";import"./useListState-BYkqyuPs.js";import"./useHighlightSelectionDescription-EX1d0YRx.js";import"./useUpdateEffect-B7JS1uyr.js";import"./useLocalizedStringFormatter-CUQvgNpR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DBdvqUAv.js";import"./useField-BDDhrf5v.js";import"./Button-Oj6lx-za.js";import"./Button.module-K7qYOset.js";import"./x-CIl0qIty.js";import"./createLucideIcon-mLSySd7z.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
