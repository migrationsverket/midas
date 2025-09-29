import{j as a}from"./iframe-BVU5JSnr.js";import{T as o,a as i,s as D}from"./Tag-DMv74jpC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B2R5PCAZ.js";import"./utils-D4cTH7aZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BALLGs-B.js";import"./useFocusRing-B2dPcgDV.js";import"./index-DueaYwDJ.js";import"./index-BBJRRiXD.js";import"./useLabels-DvutJKwv.js";import"./useButton-C6wPNxi1.js";import"./Collection-B1h6Q1ZO.js";import"./index-BdNxvWO-.js";import"./ListBox-KD9a6dh6.js";import"./DragAndDrop-DAETYev3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C5b5_wBW.js";import"./SelectionManager-Gjea97vx.js";import"./useEvent-Ykl0dY3e.js";import"./FocusScope-BxybLW6k.js";import"./useDescription-BNhn9K2_.js";import"./useControlledState-CmFX_bZg.js";import"./context-BuYCPfIY.js";import"./Text-Dq9zl_Fo.js";import"./inertValue-BZHrgZUD.js";import"./useListState-BFMiNAd_.js";import"./useHighlightSelectionDescription-BU2KBC_2.js";import"./useUpdateEffect-Cjfigqcr.js";import"./useLocalizedStringFormatter-DtBBnyHA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C6KI6cEW.js";import"./useField-eRdaEPCk.js";import"./Button-Bo0GLZzJ.js";import"./Button.module-DRhvPh0f.js";import"./x-DejepAt0.js";import"./createLucideIcon-n0WUP9L0.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
