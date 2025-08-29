import{j as a}from"./iframe-tGYExsMk.js";import{T as o,a as i,s as _}from"./Tag-DZmg5jww.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BXtv-1Bv.js";import"./utils-DeIy48qy.js";import"./clsx-B-dksMZM.js";import"./Hidden-D5o2mUq3.js";import"./useFocusRing-DyNiMG4s.js";import"./index-BZJU4NaV.js";import"./index-DCig4GnH.js";import"./useLabels-DA9TR4bl.js";import"./useButton-7WkBhcwU.js";import"./Collection-DzFvlOHb.js";import"./index-C3rNZ6lO.js";import"./ListBox-CS-4r9WA.js";import"./DragAndDrop-C3w8QgJX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DoZCTvJ_.js";import"./SelectionManager-C6wcCSE9.js";import"./useEvent-BY4oi7O_.js";import"./FocusScope-DPS_ZjtT.js";import"./useDescription-ClJOgSiA.js";import"./useControlledState-bnDFl7BE.js";import"./ListKeyboardDelegate-C3upaLQf.js";import"./Text-DBv_Gg7H.js";import"./inertValue-D8F_YNO3.js";import"./useListState-CxQ0U69L.js";import"./useField-YVPxXoXC.js";import"./useHighlightSelectionDescription-CJyzldTo.js";import"./useUpdateEffect-DxVWF8U4.js";import"./useLocalizedStringFormatter-BvWa2v2H.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CnVgqL01.js";import"./Button-_KKUAXTK.js";import"./Button.module-CF2bVDCq.js";import"./x-Bp1KQD0i.js";import"./createLucideIcon-HymrE1yY.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
