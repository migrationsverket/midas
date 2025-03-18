import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as f}from"./createLucideIcon-DjmUzaoT.js";import{B as y}from"./Button-DfRI4d68.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-iL9IzHG8.js";import"./utils-CyugoGNF.js";import"./ProgressBar-B2jw0c1b.js";import"./Label-ByRA_SKm.js";import"./Hidden-B6il94lO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DbJIstGE.js";import"./context-BwmME58u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./useFocusable-CqLabGgp.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=f("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),x="_container_32v8g_4",h="_spinner_32v8g_8",j="_dark_32v8g_18",B="_vsHidden_32v8g_22",a={container:x,spinner:h,dark:j,vsHidden:B},o=({small:r,dark:k})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(S,{className:v(a.spinner,k&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const G={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},t={args:{small:!0}},n={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(y,{children:[e.jsx(o,{dark:r.dark,small:r.small}),"Laddar"]})};var i,d,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,_,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true,
    dark: true
  },
  render: ({
    ...args
  }) => {
    return <Button>
        <Spinner dark={args.dark} small={args.small} />
        Laddar
      </Button>;
  }
}`,...(g=(_=n.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const J=["Primary","Small","InButton"];export{n as InButton,s as Primary,t as Small,J as __namedExportsOrder,G as default};
