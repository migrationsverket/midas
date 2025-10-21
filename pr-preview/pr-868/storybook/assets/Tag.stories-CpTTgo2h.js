import{j as a}from"./iframe-DDVc1lps.js";import{T as o,a as i,s as D}from"./Tag-qNZ4QsL1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DXpBck9b.js";import"./utils-BFVZzpWe.js";import"./clsx-B-dksMZM.js";import"./Hidden-BoDZID_T.js";import"./useFocusRing-D2GBwBYm.js";import"./index-e6_bz3yD.js";import"./index-D9XsSKwk.js";import"./useLabels-D8Kf1IJb.js";import"./useButton-CtdesFtl.js";import"./Collection-otex0QT1.js";import"./index-CPs1d9q2.js";import"./ListBox-B0Ck3WUB.js";import"./DragAndDrop-zTjsLFey.js";import"./getScrollParent-29TFfIJy.js";import"./scrollIntoView-DwDSZaLt.js";import"./Separator-DXCCscve.js";import"./SelectionManager-D5ECSSn-.js";import"./useEvent-CX3K645i.js";import"./SelectionIndicator-DT5xFAMR.js";import"./useDescription-B7XbiMhy.js";import"./useControlledState-Cz1sPGeO.js";import"./ListKeyboardDelegate-DL_vdYXj.js";import"./RSPContexts-DOKqRYnu.js";import"./Text-DiEK2mif.js";import"./inertValue-CTPXsPao.js";import"./useListState-CD6PHys1.js";import"./useHighlightSelectionDescription-C8XVt-1G.js";import"./useUpdateEffect-srUGGt5G.js";import"./useLocalizedStringFormatter-xNNAS41n.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DT_8ILIQ.js";import"./useField-CFJ0n_Sl.js";import"./clsx-Ciqy0D92.js";import"./Button-DfzgYSEe.js";import"./Button.module-CcWMkJAG.js";import"./x-DsSyg8Es.js";import"./createLucideIcon-DnGy652q.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
