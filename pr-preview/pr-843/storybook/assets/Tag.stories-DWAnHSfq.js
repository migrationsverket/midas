import{j as a}from"./iframe-CXlwHJ2M.js";import{T as o,a as i,s as D}from"./Tag-JFn2ybFh.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B2aCHkQz.js";import"./utils-zp2xGyoR.js";import"./clsx-B-dksMZM.js";import"./Hidden-BLyhAGqc.js";import"./useFocusRing-B6hUEFxc.js";import"./index-BXCvHo0L.js";import"./index-BVXi2VEJ.js";import"./useLabels-Cx8Dja36.js";import"./useButton-B24JZE2E.js";import"./Collection-BEymk4Xm.js";import"./index-BmDuxh5U.js";import"./ListBox-oEeJkIMT.js";import"./DragAndDrop-DXI_CR6I.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CfYKdqZL.js";import"./SelectionManager-WMyVe7NV.js";import"./useEvent-BDSSgKsU.js";import"./FocusScope-BlJ9N7S5.js";import"./useDescription-BWQyxPiw.js";import"./useControlledState-CcqKUs-V.js";import"./context-LxmQAlBx.js";import"./Text-CFkd043h.js";import"./inertValue-Cs_3Q5I6.js";import"./useListState-Di18Dy-9.js";import"./useHighlightSelectionDescription-Db1cPoxc.js";import"./useUpdateEffect-C3HEWcTq.js";import"./useLocalizedStringFormatter-B4_UiaJp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CaweX1E6.js";import"./useField-DuY59yZz.js";import"./Button-C7LLLqRl.js";import"./Button.module-DRhvPh0f.js";import"./x-DFe8zy0w.js";import"./createLucideIcon-U4p9lXhN.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
