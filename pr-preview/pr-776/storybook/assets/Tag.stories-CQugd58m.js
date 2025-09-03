import{j as a}from"./iframe-DbEqut0g.js";import{T as o,a as i,s as D}from"./Tag-CAsTEZat.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BlQFfhgY.js";import"./utils-CbjSHJXq.js";import"./clsx-B-dksMZM.js";import"./Hidden-mvNtXTvJ.js";import"./useFocusRing-Bb-GJyGA.js";import"./index-D6bxnuYH.js";import"./index-Ct1ZKyzA.js";import"./useLabels-Sarke-Z6.js";import"./useButton-BldtpG1Z.js";import"./Collection-C4TIvQGq.js";import"./index-CWjTTtib.js";import"./ListBox-BSKGrntW.js";import"./DragAndDrop-DzLHfUfu.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D7n7dGkY.js";import"./SelectionManager-BYs0lXCm.js";import"./useEvent-DVz5iLsV.js";import"./FocusScope-yWWP-sFr.js";import"./useDescription-BJPH2Ol1.js";import"./useControlledState-_ej_tIDp.js";import"./ListKeyboardDelegate-CV8OrL5G.js";import"./Text-DRSxZW5c.js";import"./inertValue-tINNToZb.js";import"./useListState-DwbzmikK.js";import"./useHighlightSelectionDescription-BA5DybmL.js";import"./useUpdateEffect-CVFlNzXb.js";import"./useLocalizedStringFormatter-4HQT8SAW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DjbgSiAW.js";import"./useField-DhyaX7QE.js";import"./Button-DFCP53ap.js";import"./Button.module-DWkXlqFG.js";import"./x-VcZTZWv9.js";import"./createLucideIcon-BAS7r4T8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
