import{j as a}from"./iframe-C2TlIsDp.js";import{T as o,a as i,s as D}from"./Tag-C_tzXi71.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DyKz9v11.js";import"./utils-BUDYFVzd.js";import"./clsx-B-dksMZM.js";import"./Hidden-D5Iff-Gx.js";import"./useFocusRing-tQLaVqyy.js";import"./index-DR9rKHL1.js";import"./index-CiEPLdAV.js";import"./useLabels-BorUw9LH.js";import"./useButton-BOGhf1wf.js";import"./Collection-BZg3Y8uQ.js";import"./index-GqhfBviS.js";import"./ListBox-DYtsQliB.js";import"./DragAndDrop-Dwj8ztK8.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-_OjuSwKH.js";import"./SelectionManager-BSRLKn2X.js";import"./useEvent-D8dcN3za.js";import"./FocusScope-BnNI_SHL.js";import"./useDescription-CkbmpBmE.js";import"./useControlledState-DxwSA-6H.js";import"./ListKeyboardDelegate-CfZC_ZwL.js";import"./Text-BRp4gBpF.js";import"./inertValue-BROS4J8Q.js";import"./useListState-siTJyC_z.js";import"./useHighlightSelectionDescription-8Km9_drx.js";import"./useUpdateEffect-BHJUOAEr.js";import"./useLocalizedStringFormatter-55XWoYny.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DIC6QJrD.js";import"./useField-DHJmK0XG.js";import"./Button-DQ60jEtO.js";import"./Button.module-DRhvPh0f.js";import"./x-Bmo7OCxJ.js";import"./createLucideIcon-DZVxfX_m.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
