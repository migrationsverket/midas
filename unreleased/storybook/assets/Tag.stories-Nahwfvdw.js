import{j as a}from"./iframe-DnNvnytP.js";import{T as o,a as i,s as D}from"./Tag-6wiT2xyM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-VPXh_6jA.js";import"./utils-C0ikEW3o.js";import"./clsx-B-dksMZM.js";import"./Hidden-yhMpVbdU.js";import"./useFocusRing-nrQZ9Noy.js";import"./index-CmSNSZ9U.js";import"./index-DLTjxKV7.js";import"./useLabels-DWshnRuF.js";import"./useButton-0ciuC0bg.js";import"./Collection-DNmD6hQ4.js";import"./index-BXtCWkoD.js";import"./ListBox-BIfSSZp3.js";import"./DragAndDrop-O4L-qTBO.js";import"./getScrollParent-XBHl98qA.js";import"./scrollIntoView-BQalBMif.js";import"./Separator-BV4ta4nb.js";import"./SelectionManager-BILG0NOY.js";import"./useEvent-m7J4Uyb_.js";import"./SelectionIndicator-CLSGTwa8.js";import"./useDescription-uBXBjdtN.js";import"./useControlledState-Ci8z_CeQ.js";import"./ListKeyboardDelegate-DQGTomiH.js";import"./RSPContexts-D-HYMUvk.js";import"./Text-B3lpC14U.js";import"./inertValue-D1S6hO_m.js";import"./useListState-C1-DWh1m.js";import"./useHighlightSelectionDescription-BfEjIInr.js";import"./useUpdateEffect-tMyWJ23j.js";import"./useLocalizedStringFormatter-COLu1PnB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-M--jqbSt.js";import"./useField-EgU61m7z.js";import"./clsx-Ciqy0D92.js";import"./Button-CAyWLT6M.js";import"./Button.module-CcWMkJAG.js";import"./x-DWu32xYb.js";import"./createLucideIcon-19csQdmg.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
