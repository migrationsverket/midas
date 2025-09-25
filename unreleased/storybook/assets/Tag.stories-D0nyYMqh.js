import{j as a}from"./iframe-03bl15Pq.js";import{T as o,a as i,s as D}from"./Tag-CzhzgRUW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CDm6KBUf.js";import"./utils-DQhed-XE.js";import"./clsx-B-dksMZM.js";import"./Hidden-lvVwvomZ.js";import"./useFocusRing-B-R9x7xW.js";import"./index-CgIKPXij.js";import"./index-ldRdWatF.js";import"./useLabels-CdQWBbGy.js";import"./useButton-D-fmmoZd.js";import"./Collection-BTXoDtD5.js";import"./index-IsmXDkzC.js";import"./ListBox-C9OPswFX.js";import"./DragAndDrop-B4c1rXb1.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CL1vQ6Y8.js";import"./SelectionManager-m50heGLh.js";import"./useEvent-CT_7PF97.js";import"./FocusScope-BeDLaaEg.js";import"./useDescription-DyVX4Oin.js";import"./useControlledState-WVP6eZA7.js";import"./ListKeyboardDelegate-BJwZcYz0.js";import"./Text-C8KZGiRM.js";import"./inertValue-IgpF7-GT.js";import"./useListState-BwR1P9YJ.js";import"./useHighlightSelectionDescription-CctuL2m_.js";import"./useUpdateEffect-DBAA5H3_.js";import"./useLocalizedStringFormatter-BU6Ymfvz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DKkJoUvi.js";import"./useField-CQhd9cmj.js";import"./Button-DBv9eMM9.js";import"./Button.module-DRhvPh0f.js";import"./x-Bxqu1m4H.js";import"./createLucideIcon-CkuuQGpD.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
