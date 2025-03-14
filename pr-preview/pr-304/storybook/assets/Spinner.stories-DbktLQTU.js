import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as k}from"./clsx-B-dksMZM.js";import{c as v}from"./createLucideIcon-8wDOqnHv.js";import{B as y}from"./Button-CItLJ_y_.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BhwOwugC.js";import"./utils-DdXLQA3f.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";import"./useFocusRing-CAIiVOBX.js";import"./useFocusable-C2jS3Qdx.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=v("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),S='"../theme/tokens.css"',x="_container_32v8g_4",j="_spinner_32v8g_8",B="_rotating_32v8g_1",L="_dark_32v8g_18",N="_vsHidden_32v8g_22",a={tokens:S,"--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)",container:x,spinner:j,rotating:B,dark:L,vsHidden:N},o=({small:r,dark:_})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(h,{className:k(a.spinner,_&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const M={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},n={args:{small:!0}},t={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(y,{children:[e.jsx(o,{dark:r.dark,small:r.small}),"Laddar"]})};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const O=["Primary","Small","InButton"];export{t as InButton,s as Primary,n as Small,O as __namedExportsOrder,M as default};
