import{j as a}from"./iframe-Bv1Q3W5w.js";import{T as o,a as i,s as D}from"./Tag-BetJqwMK.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BpsBIdE5.js";import"./utils-GLMQ4PTQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-YUbl-TD1.js";import"./useFocusRing-DoCr2Tge.js";import"./index-BL9wuUTP.js";import"./index-DEPodP9I.js";import"./useLabels-BLkzZ_yY.js";import"./useButton-BFRFqXtd.js";import"./Collection-abpe4r9t.js";import"./index-COEOo1ny.js";import"./ListBox-B5Mso43z.js";import"./DragAndDrop-CsBIhvD_.js";import"./getScrollParent-c6tPCXfA.js";import"./scrollIntoView-DjtKQA1T.js";import"./Separator-D36DZOqK.js";import"./SelectionManager-1ZGFQo6g.js";import"./useEvent-B82NyMy-.js";import"./SelectionIndicator-BOg6-wNQ.js";import"./useDescription-DLvzM78O.js";import"./useControlledState-BDOYUf6X.js";import"./ListKeyboardDelegate-Dj69CrxM.js";import"./RSPContexts-aPHIthG-.js";import"./Text-BfWEn8Uo.js";import"./inertValue-DVt8N8yE.js";import"./useListState-CZjStc6V.js";import"./useHighlightSelectionDescription-C_1VXEye.js";import"./useUpdateEffect-BS2O_P7e.js";import"./useLocalizedStringFormatter-CSLsNtOa.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CbDK05Su.js";import"./useField-BKJqd2fR.js";import"./clsx-Ciqy0D92.js";import"./Button-BhFq-Z5k.js";import"./Button.module-CcWMkJAG.js";import"./x-DKuPMGYY.js";import"./createLucideIcon-BoDCJlBa.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
