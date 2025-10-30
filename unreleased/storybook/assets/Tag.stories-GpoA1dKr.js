import{j as a}from"./iframe-BlUyLCFk.js";import{T as o,a as i,s as D}from"./Tag-MyFFv8xs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcaLJ6kt.js";import"./utils-BQ9yjISX.js";import"./clsx-B-dksMZM.js";import"./Hidden-O8BOgzwu.js";import"./useFocusRing-CCqTCgst.js";import"./index-BLVHphnt.js";import"./index-DWzw-vaP.js";import"./useLabels-Cl5kWo5w.js";import"./useButton-CxhqJi8g.js";import"./Collection-L_NNmvtL.js";import"./index-Bc63048w.js";import"./ListBox-Dwr5aKB7.js";import"./DragAndDrop-BIYL0J1K.js";import"./getScrollParent-V-MMelFW.js";import"./scrollIntoView-BYGUymua.js";import"./Separator-C1_74YkZ.js";import"./SelectionManager-B55utK4t.js";import"./useEvent-DFNkiwFo.js";import"./SelectionIndicator-F9ZOKlR6.js";import"./useDescription-DF7WkhVu.js";import"./useControlledState-BHyXkNn5.js";import"./ListKeyboardDelegate-CBo-VLX3.js";import"./RSPContexts-CYkO7849.js";import"./Text-BgpSgSaS.js";import"./inertValue-C90Tk3Rv.js";import"./useListState-BgJKzHoQ.js";import"./useHighlightSelectionDescription-B817if5b.js";import"./useUpdateEffect-CIjLXceZ.js";import"./useLocalizedStringFormatter-jt7iJttV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Wi7vg_Am.js";import"./useField-C86Uc7cH.js";import"./clsx-Ciqy0D92.js";import"./Button-CWfGMTvO.js";import"./Button.module-CcWMkJAG.js";import"./x-DU4Xi-II.js";import"./createLucideIcon-BX-y5JaI.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
