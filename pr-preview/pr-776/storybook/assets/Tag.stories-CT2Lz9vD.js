import{j as a}from"./iframe-zn0VL0sU.js";import{T as o,a as i,s as D}from"./Tag-Cqube8Dr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CSRkMC6p.js";import"./utils-Z0munrbB.js";import"./clsx-B-dksMZM.js";import"./Hidden-CbJpoxTt.js";import"./useFocusRing-BEf3GzXe.js";import"./index-DsRhnFu7.js";import"./index-pUkg-FXt.js";import"./useLabels-Czum_ED8.js";import"./useButton-BxUZHAjg.js";import"./Collection-j35AljQ6.js";import"./index-HgcD08Tb.js";import"./ListBox-DTPZJ-76.js";import"./DragAndDrop-DQLTjNtP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BsKALp8S.js";import"./SelectionManager-Cd4qb87i.js";import"./useEvent-DZzSzp04.js";import"./FocusScope-BiD9y4_b.js";import"./useDescription-DgRZkJhD.js";import"./useControlledState-BuBr_3Ea.js";import"./ListKeyboardDelegate-DkgVE9Mt.js";import"./Text-DhFYCR3E.js";import"./inertValue-DA1SD_zz.js";import"./useListState-BaA3ZKyr.js";import"./useHighlightSelectionDescription-9seapCOQ.js";import"./useUpdateEffect-BLEuAAdE.js";import"./useLocalizedStringFormatter-a-cme_Bt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CYRr7l6f.js";import"./useField-BzQ7yg6w.js";import"./Button-Dd8syc0N.js";import"./Button.module-DWkXlqFG.js";import"./x-BYWjWwMx.js";import"./createLucideIcon-DLLIq0e2.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
