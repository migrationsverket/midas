import{j as a}from"./iframe-DjTuJM4v.js";import{T as o,a as i,s as D}from"./Tag-8V9qGhh8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BkPWw7UV.js";import"./utils-JYYshUEd.js";import"./clsx-B-dksMZM.js";import"./Hidden-D8JQcptZ.js";import"./useFocusRing-BUMJVKMC.js";import"./index-Ce1mbi7V.js";import"./index-DprkUWzI.js";import"./useLabels-BJawJ0kt.js";import"./useButton-BklQFMHi.js";import"./Collection-xTRBE7kl.js";import"./index-DIcwB7CE.js";import"./ListBox-YXkBPsR2.js";import"./DragAndDrop-BZdmoj3C.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-d8jOAMHt.js";import"./SelectionManager-DXc2Ev1j.js";import"./useEvent-BMbwqxwk.js";import"./FocusScope-DTzvgJMl.js";import"./useDescription-DgsC_3oO.js";import"./useControlledState-CiBDtaXn.js";import"./context-54DUQtTz.js";import"./Text-CnR4Tpq8.js";import"./inertValue--S-Q570R.js";import"./useListState-DeS9f9Fw.js";import"./useHighlightSelectionDescription-BCgZTrbH.js";import"./useUpdateEffect-0VPXkFRY.js";import"./useLocalizedStringFormatter-DHBAUgyR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DbWA3Qrr.js";import"./useField-BvBC17R9.js";import"./clsx-Ciqy0D92.js";import"./Button-Cv3oSdgR.js";import"./Button.module-CcWMkJAG.js";import"./x-C5f1xR0H.js";import"./createLucideIcon-CCATEyQK.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
