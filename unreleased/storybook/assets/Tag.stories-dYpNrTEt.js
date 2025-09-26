import{j as a}from"./iframe-_OT4KaI3.js";import{T as o,a as i,s as D}from"./Tag-BszuuTdp.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-QrMMQLkQ.js";import"./utils-CRnS4sEm.js";import"./clsx-B-dksMZM.js";import"./Hidden-DuEE4Uvo.js";import"./useFocusRing-C9ouN9VH.js";import"./index-N3tHRCnm.js";import"./index-CddxC3U_.js";import"./useLabels-BStYjRiu.js";import"./useButton-DfiHMCVc.js";import"./Collection-C-YrwPhu.js";import"./index-B6V28LYZ.js";import"./ListBox-MyuXvaRN.js";import"./DragAndDrop-3kSxPMAX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DX1C9JqO.js";import"./SelectionManager-bYs6akNc.js";import"./useEvent-BkdJR17e.js";import"./FocusScope-Pjlcznur.js";import"./useDescription-DvUJI00A.js";import"./useControlledState-DqPezhcQ.js";import"./ListKeyboardDelegate-6T73FyFl.js";import"./Text-BD4Qpgqv.js";import"./inertValue-DGUbc_D8.js";import"./useListState-qJzZs28R.js";import"./useHighlightSelectionDescription-C2GFKKjn.js";import"./useUpdateEffect-3SALDBX1.js";import"./useLocalizedStringFormatter-D-yGIXd3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BmZ5M1dt.js";import"./useField-Dj7jAjru.js";import"./Button-BBjRPA7i.js";import"./Button.module-DRhvPh0f.js";import"./x-DpjBlqy7.js";import"./createLucideIcon-BjJKNTqz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
