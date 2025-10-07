import{j as a}from"./iframe-CFi1srQn.js";import{T as o,a as i,s as D}from"./Tag-CaGmICBi.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CWLR6eFE.js";import"./utils-CjIEE_0-.js";import"./clsx-B-dksMZM.js";import"./Hidden-CX1hKmOP.js";import"./useFocusRing-DyUNJUSF.js";import"./index-D6d_kp0o.js";import"./index-SFGtc1ZN.js";import"./useLabels-GbP6cvnY.js";import"./useButton-CdMW85wz.js";import"./Collection-joJwxXnR.js";import"./index-BmCk0N07.js";import"./ListBox-xOQTD8xK.js";import"./DragAndDrop-BBaePY3i.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DTWuiowY.js";import"./SelectionManager-CSjInnho.js";import"./useEvent-3LUNwF_a.js";import"./FocusScope-C-JugIvV.js";import"./useDescription-BY_klAFA.js";import"./useControlledState-DJFaykmD.js";import"./context-C1Sy3gIZ.js";import"./Text-CJwIJsVn.js";import"./inertValue-BSnm4lO9.js";import"./useListState-Brh3IJgq.js";import"./useHighlightSelectionDescription-CMhilDW7.js";import"./useUpdateEffect-CCnkqQ8o.js";import"./useLocalizedStringFormatter-CApqhjW6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BkCAvDM3.js";import"./useField-BuUf978z.js";import"./clsx-Ciqy0D92.js";import"./Button-wFQfBO41.js";import"./Button.module-CcWMkJAG.js";import"./x-DbXGn362.js";import"./createLucideIcon-PmOdAKsT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
