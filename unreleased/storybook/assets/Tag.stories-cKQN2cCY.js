import{j as a}from"./iframe-CzbXkuq7.js";import{T as o,a as i,s as D}from"./Tag-CEX5u95D.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cs6FaWqv.js";import"./utils-qUr-RQsm.js";import"./clsx-B-dksMZM.js";import"./Hidden-BiznEAJ3.js";import"./useFocusRing-Cj5z6IV5.js";import"./index-DK6mGcBg.js";import"./index-BG6J1V4i.js";import"./useLabels--hj6ea_K.js";import"./useButton-BFllmLVA.js";import"./Collection-BrMgazow.js";import"./index-Bs-ofnCY.js";import"./ListBox-Bo_pJ0g6.js";import"./DragAndDrop-DCE1dtpC.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-_IDBc8Un.js";import"./SelectionManager-zrYqbBDH.js";import"./useEvent-DBv9BTci.js";import"./FocusScope-CGLTwAxY.js";import"./useDescription-D7N4XIAR.js";import"./useControlledState-CnT6Niqh.js";import"./ListKeyboardDelegate-wpwacWan.js";import"./Text-BXpESF90.js";import"./inertValue-DPI1svsk.js";import"./useListState-fW3dHp7M.js";import"./useHighlightSelectionDescription-CqbZgmYg.js";import"./useUpdateEffect-BXbQ4CIe.js";import"./useLocalizedStringFormatter-CopeLmvq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BOiJ9DzF.js";import"./useField-CyHuFwme.js";import"./Button-toyRbv3u.js";import"./Button.module-DRhvPh0f.js";import"./x-dpZ1u57-.js";import"./createLucideIcon-DbY9saCY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
