import{j as a}from"./iframe-C_VRINH-.js";import{T as o,a as i,s as D}from"./Tag-CEg53SFr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-SSMmmdpd.js";import"./utils-DXayxLsy.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dbkmm61k.js";import"./useFocusRing-Dv_VN0Lg.js";import"./index-C0YVE2JG.js";import"./index-_yfYLSkX.js";import"./useLabels-DpkLBKsS.js";import"./useButton-Btlj9W1H.js";import"./Collection-jdpt3IAl.js";import"./index-C5RSfdKO.js";import"./ListBox-B0QOpfGf.js";import"./DragAndDrop-Bhn5PLAj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CqV_4uUz.js";import"./SelectionManager-DhGwotXn.js";import"./useEvent-DA_FrVTg.js";import"./FocusScope-D0osISWX.js";import"./useDescription-CqdztY3Y.js";import"./useControlledState-ClSEVNGl.js";import"./ListKeyboardDelegate-BW4ZihnH.js";import"./Text-BYhiGUIm.js";import"./inertValue-B_nIERYZ.js";import"./useListState-D1lZ1cpY.js";import"./useField-aPN2EXxb.js";import"./useHighlightSelectionDescription-DIxYT_mh.js";import"./useUpdateEffect-CsSB98iz.js";import"./useLocalizedStringFormatter-v0VkWtJs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B5qURtnl.js";import"./Button-BBm0Cwr-.js";import"./Button.module-CF2bVDCq.js";import"./x-DaNDt_LG.js";import"./createLucideIcon-QLEk5Dtq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
