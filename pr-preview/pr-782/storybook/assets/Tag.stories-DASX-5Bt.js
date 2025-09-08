import{j as a}from"./iframe-B8aIwmHN.js";import{T as o,a as i,s as D}from"./Tag-CpC5a5D2.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cu6HPWqt.js";import"./utils-BfdmU11Q.js";import"./clsx-B-dksMZM.js";import"./Hidden-BleYdXBN.js";import"./useFocusRing-CN-1-ieR.js";import"./index-DlsqIy9f.js";import"./index-YN6msprJ.js";import"./useLabels-YkI5BNL3.js";import"./useButton-31jAphpw.js";import"./Collection-Bq2tI38r.js";import"./index-BTsMEYAs.js";import"./ListBox-CJ474WPJ.js";import"./DragAndDrop-Dp-lTMh1.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Drj7D1wS.js";import"./SelectionManager-BgYn6k6D.js";import"./useEvent-UilzZBEc.js";import"./FocusScope-Cj0ALx1i.js";import"./useDescription-D4aN1NG0.js";import"./useControlledState-CeFMXCNg.js";import"./ListKeyboardDelegate-x_1Yw91J.js";import"./Text-BbciHNcX.js";import"./inertValue-as9kIEoc.js";import"./useListState-DylaHTyX.js";import"./useHighlightSelectionDescription-D-WJ1wHt.js";import"./useUpdateEffect-B6SWmSZK.js";import"./useLocalizedStringFormatter-CCng53I0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BWdBF31M.js";import"./useField-Ciukr31E.js";import"./Button-DGd3qUEt.js";import"./Button.module-okL0tbxC.js";import"./x-CtFSavwh.js";import"./createLucideIcon-D1lcM3of.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
