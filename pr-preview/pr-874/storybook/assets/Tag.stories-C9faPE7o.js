import{j as a}from"./iframe-CIsemXb8.js";import{T as o,a as i,s as D}from"./Tag-BBRzQW-_.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D1ZiZdV-.js";import"./utils-6KohPyQX.js";import"./clsx-B-dksMZM.js";import"./Hidden-CE1h5RM1.js";import"./useFocusRing-oLznk7UZ.js";import"./index-XoTEgol-.js";import"./index-B9hrD8I2.js";import"./useLabels-Cp4T1b63.js";import"./useButton-DETBvNmn.js";import"./Collection-DOR8YrJW.js";import"./index-D_v1PpNe.js";import"./ListBox-BRDTCODS.js";import"./DragAndDrop-D8BYKHEM.js";import"./getScrollParent-De8pv0yY.js";import"./scrollIntoView-D4smOjvY.js";import"./Separator-ChKBNpDD.js";import"./SelectionManager-CCh2KBX-.js";import"./useEvent-CcCngGFm.js";import"./SelectionIndicator-D1R0En4H.js";import"./useDescription-C3lrmUTR.js";import"./useControlledState-sMcuQV00.js";import"./ListKeyboardDelegate-C5gpG9oQ.js";import"./RSPContexts-w-r5Ye_N.js";import"./Text-DzLLrtEu.js";import"./inertValue-B01nFZk_.js";import"./useListState-JWIvwUFd.js";import"./useHighlightSelectionDescription-lVQt02sJ.js";import"./useUpdateEffect-DqJKVtDU.js";import"./useLocalizedStringFormatter-BH1l9hrP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bi0TIrh7.js";import"./useField-DLxbQruP.js";import"./clsx-Ciqy0D92.js";import"./Button-DfiFbnQa.js";import"./Button.module-CcWMkJAG.js";import"./x-HaAkQYDc.js";import"./createLucideIcon-C5FmVf7B.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
