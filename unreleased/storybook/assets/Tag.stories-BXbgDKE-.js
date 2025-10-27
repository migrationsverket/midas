import{j as a}from"./iframe-D7nKCOTo.js";import{T as o,a as i,s as D}from"./Tag-B5n99mKL.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DsfXeq53.js";import"./utils-fSXIUWBv.js";import"./clsx-B-dksMZM.js";import"./Hidden-7sHqVD0e.js";import"./useFocusRing-C3JeAS6n.js";import"./index-CYljX00E.js";import"./index-B5uq69N5.js";import"./useLabels-C089p53N.js";import"./useButton-BRKx7O9u.js";import"./Collection-Dco18p1w.js";import"./index-6SDn0rn-.js";import"./ListBox-B-Hllo5u.js";import"./DragAndDrop-BcprLFan.js";import"./getScrollParent-CJjLErSu.js";import"./scrollIntoView-BpTTzPGd.js";import"./Separator-Ch5-zzyR.js";import"./SelectionManager-Ddy0lgRr.js";import"./useEvent-CZ4Ex8Wm.js";import"./SelectionIndicator-C0tES--5.js";import"./useDescription-ITxTX1WW.js";import"./useControlledState-GJ9xN9Pl.js";import"./ListKeyboardDelegate-DaUFIfRX.js";import"./RSPContexts-DvS25vhu.js";import"./Text-C1K1pw46.js";import"./inertValue--v1WAkcw.js";import"./useListState-BDasX-xQ.js";import"./useHighlightSelectionDescription-DlYvYOND.js";import"./useUpdateEffect-DK-lV89k.js";import"./useLocalizedStringFormatter-JDishh1i.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B4o0cEo6.js";import"./useField-DgT0CQMT.js";import"./clsx-Ciqy0D92.js";import"./Button-D2sEEbKy.js";import"./Button.module-CcWMkJAG.js";import"./x-iesSr9Zt.js";import"./createLucideIcon-BmrsJk-P.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
