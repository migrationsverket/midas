import{j as a}from"./iframe-CEa4rr9O.js";import{T as o,a as i,s as D}from"./Tag-B8HWAa33.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-HyWfp8VZ.js";import"./utils-SuK80ERc.js";import"./clsx-B-dksMZM.js";import"./Hidden-wsurZ38g.js";import"./useFocusRing-DFgolbyR.js";import"./index-BndcDWl-.js";import"./index-C19RPnE6.js";import"./useLabels-DKRk9inx.js";import"./useButton-BiGh29rd.js";import"./Collection-CVKjyZhI.js";import"./index-xfA9N80Y.js";import"./ListBox-DSxr0y4a.js";import"./DragAndDrop-CMwn2SKb.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BCK55Ybz.js";import"./SelectionManager-MmIsqv4f.js";import"./useEvent-DLnspzpz.js";import"./FocusScope-DLij2XLB.js";import"./useDescription-CPtYZSrG.js";import"./useControlledState-CMrwFuIZ.js";import"./ListKeyboardDelegate-eLh0CNDu.js";import"./Text-Mkv10tpK.js";import"./inertValue-BMBe891m.js";import"./useListState-DL2YqS6e.js";import"./useHighlightSelectionDescription-Dmcw2fgN.js";import"./useUpdateEffect-Cp_BwiiY.js";import"./useLocalizedStringFormatter-OtwdKdNe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-K_CikPy7.js";import"./useField-rOHnsBTO.js";import"./Button-BQiqboZP.js";import"./Button.module-CF2bVDCq.js";import"./x-BwJzVvr1.js";import"./createLucideIcon-Crcp-qau.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
