import{j as a}from"./iframe-C0tOSD1a.js";import{T as o,a as i,s as D}from"./Tag-JTHWvOnx.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CK4QuKkB.js";import"./utils-DJUhr1n5.js";import"./clsx-B-dksMZM.js";import"./Hidden-DlxM41Zh.js";import"./useFocusRing-BS29XNuU.js";import"./index-BOf4_xG2.js";import"./index-BMMHLl8R.js";import"./useLabels-B4vrJkzM.js";import"./useButton-DsTgBn2N.js";import"./Collection-DsfdrfCN.js";import"./index-BWbtzUDl.js";import"./ListBox-7LzIEPtX.js";import"./DragAndDrop-CtJpm2-t.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DDNTQ6y0.js";import"./SelectionManager-CS6vYcD_.js";import"./useEvent-BIYW3h9-.js";import"./FocusScope-xXWwr3ma.js";import"./useDescription-DzGS8VM9.js";import"./useControlledState-CTqWG5Kh.js";import"./context-DxC49x0T.js";import"./Text-BSwSgnjW.js";import"./inertValue-CFIW5od7.js";import"./useListState-O41Zja1h.js";import"./useHighlightSelectionDescription-C6DJN9b-.js";import"./useUpdateEffect-BXfc5DiD.js";import"./useLocalizedStringFormatter-DjXWcVKH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B4Wy-rFT.js";import"./useField-CyhyzzhV.js";import"./Button-TjKbJAkY.js";import"./Button.module-DRhvPh0f.js";import"./x-BO3KekYN.js";import"./createLucideIcon-Bd5MLWfb.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
