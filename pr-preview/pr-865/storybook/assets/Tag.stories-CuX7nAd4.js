import{j as a}from"./iframe-B35DEfta.js";import{T as o,a as i,s as D}from"./Tag-DK_S5Fre.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C_6sJxtg.js";import"./utils-DY5AqTCe.js";import"./clsx-B-dksMZM.js";import"./Hidden-C8g2UY3I.js";import"./useFocusRing-1BT_5zQ4.js";import"./index-DgfSgdO3.js";import"./index-jJ69nxHg.js";import"./useLabels-DTNzjLEw.js";import"./useButton-DBlh3nHY.js";import"./Collection-BlvzizP_.js";import"./index-C1isb7Uw.js";import"./ListBox-DFfDQUcL.js";import"./DragAndDrop-CT8SM7Ev.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Ca-xlbeT.js";import"./SelectionManager-7a5JWt4Q.js";import"./useEvent-DyDgTLo3.js";import"./FocusScope-CpM-3BQT.js";import"./useDescription-B_XzEge1.js";import"./useControlledState-Axz_ofZi.js";import"./context-DBdCb6ds.js";import"./Text-C10p0wC5.js";import"./inertValue-yL4P8cSn.js";import"./useListState-CCwj-1oc.js";import"./useHighlightSelectionDescription-p_5Ym907.js";import"./useUpdateEffect-CKpmxLWk.js";import"./useLocalizedStringFormatter-AIXANZVQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CTI40Ou2.js";import"./useField-CnDW3lMB.js";import"./clsx-Ciqy0D92.js";import"./Button-iWK1GT2Z.js";import"./Button.module-DRhvPh0f.js";import"./x-0yTt8SAO.js";import"./createLucideIcon-UP0KDTpb.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
