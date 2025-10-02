import{j as a}from"./iframe-J53WtVro.js";import{T as o,a as i,s as D}from"./Tag-RqOaUHPn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C2zMdysb.js";import"./utils-Dd1XRbvw.js";import"./clsx-B-dksMZM.js";import"./Hidden-CTpn1EXc.js";import"./useFocusRing-C_tBI-D0.js";import"./index-1yWuKSHu.js";import"./index-z-bQo5tN.js";import"./useLabels-BwK-_98z.js";import"./useButton-B90o1QtG.js";import"./Collection-EOfPIafc.js";import"./index-DMUOdCqd.js";import"./ListBox-DDv9QZmF.js";import"./DragAndDrop-J_m4pktU.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-XvmeR4jg.js";import"./SelectionManager-CdJA8enP.js";import"./useEvent-DxRB6st5.js";import"./FocusScope-BWgEKVmM.js";import"./useDescription-CvfC6qvL.js";import"./useControlledState-nESv1QH5.js";import"./context-D3xY0rMX.js";import"./Text-C9WDdtoF.js";import"./inertValue-AzXVZ8gc.js";import"./useListState-CMihmLPj.js";import"./useHighlightSelectionDescription-Bluu_spL.js";import"./useUpdateEffect-COeJKl11.js";import"./useLocalizedStringFormatter-rBWUfWya.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-PKrH7F6H.js";import"./useField-CYlXh6Yi.js";import"./clsx-Ciqy0D92.js";import"./Button-CIfoJTod.js";import"./Button.module-DRhvPh0f.js";import"./x-D9FzPGEk.js";import"./createLucideIcon-0Y1ZYtFF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
