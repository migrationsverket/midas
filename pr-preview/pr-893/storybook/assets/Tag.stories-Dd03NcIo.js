import{j as a}from"./iframe-2zDgNc5O.js";import{T as o,a as i,s as D}from"./Tag-CrdYdZJb.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BOJVC4TZ.js";import"./utils-Brg8JT1h.js";import"./clsx-B-dksMZM.js";import"./Hidden-B4ZIWeLz.js";import"./useFocusRing-tbIGw-tS.js";import"./index-BUO9eHy7.js";import"./index-CMnOunom.js";import"./useLabels-Dj5I4u3v.js";import"./useButton-BHr7V2cG.js";import"./Collection-DQlW_jfG.js";import"./index-DRiwHPDo.js";import"./ListBox-DFfPmwT5.js";import"./DragAndDrop-jmkju8EA.js";import"./getScrollParent-DBMsePEp.js";import"./scrollIntoView-CaEI-bjA.js";import"./Separator-bP3RBdSj.js";import"./SelectionManager-B-Rwjn24.js";import"./useEvent-DaaeSGZz.js";import"./SelectionIndicator-BqkV0IJZ.js";import"./useDescription-Db_EZW_w.js";import"./useControlledState-DANjDR8T.js";import"./ListKeyboardDelegate-BYKiNCh_.js";import"./RSPContexts-D9A_QNPr.js";import"./Text-HTE1RznZ.js";import"./inertValue-CfkI0qYj.js";import"./useListState-uM_oK5zE.js";import"./useHighlightSelectionDescription-D5-WyiRm.js";import"./useUpdateEffect-DatZONII.js";import"./useLocalizedStringFormatter-DQT4AcMY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B8Ex8zTm.js";import"./useField-D0E-0bwM.js";import"./clsx-Ciqy0D92.js";import"./Button-BQuGGE3J.js";import"./Button.module-CcWMkJAG.js";import"./x-Bu4Ey_NH.js";import"./createLucideIcon-BQc63Y_K.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
