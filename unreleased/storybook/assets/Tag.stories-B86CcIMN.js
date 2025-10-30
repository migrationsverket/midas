import{j as a}from"./iframe-BiIaFHTA.js";import{T as o,a as i,s as D}from"./Tag-D68shAzN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B3fVrXqW.js";import"./utils-Dkqbkd8o.js";import"./clsx-B-dksMZM.js";import"./Hidden-wtR4-fxR.js";import"./useFocusRing-Ch8JX0gV.js";import"./index-Chsg0SNZ.js";import"./index-vK6FcDEr.js";import"./useLabels-BWWyhvy9.js";import"./useButton-CiehETbg.js";import"./Collection-B3sT7wYD.js";import"./index-DWrYc_T5.js";import"./ListBox-YJ-bQCob.js";import"./DragAndDrop-e6PyJw22.js";import"./getScrollParent-yQW7smTO.js";import"./scrollIntoView-DxCCsejH.js";import"./Separator-BV-iKxIk.js";import"./SelectionManager-nDjCxUdL.js";import"./useEvent-DosvuC6z.js";import"./SelectionIndicator-k7HZdiRw.js";import"./useDescription-DFgBUGN1.js";import"./useControlledState-DURvW1hH.js";import"./ListKeyboardDelegate-BsJPVJZj.js";import"./RSPContexts-Bkd32WjU.js";import"./Text-SzdVrd7S.js";import"./inertValue-DPMIX-pW.js";import"./useListState-B9Ercqd1.js";import"./useHighlightSelectionDescription-Dpl2VsyJ.js";import"./useUpdateEffect-2HhMmT_N.js";import"./useLocalizedStringFormatter-CUhmneEj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D7OVuB-b.js";import"./useField-CZSx0jRb.js";import"./clsx-Ciqy0D92.js";import"./Button-DlizZNge.js";import"./Button.module-CcWMkJAG.js";import"./x-jEEo_7dh.js";import"./createLucideIcon-CWNg_IMf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
