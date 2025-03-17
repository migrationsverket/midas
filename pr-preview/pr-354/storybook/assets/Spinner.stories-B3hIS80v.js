import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as k}from"./clsx-B-dksMZM.js";import{c as v}from"./createLucideIcon-8wDOqnHv.js";import{B as y}from"./Button-C31CZGk7.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Db7Kwb_W.js";import"./utils-BhWkjeqE.js";import"./ProgressBar-KG041EEs.js";import"./Label-BBCc9K7K.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-CH4xJhfw.js";import"./context-DKkYq9qZ.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CsLSqN_1.js";import"./useFocusRing-BFo6eXxS.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=v("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),S='"../theme/tokens.css"',x="_container_32v8g_4",j="_spinner_32v8g_8",B="_rotating_32v8g_1",L="_dark_32v8g_18",N="_vsHidden_32v8g_22",a={tokens:S,"--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)",container:x,spinner:j,rotating:B,dark:L,vsHidden:N},o=({small:r,dark:_})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(h,{className:k(a.spinner,_&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const K={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},t={args:{}},s={args:{small:!0}},n={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(y,{children:[e.jsx(o,{dark:r.dark,small:r.small}),"Laddar"]})};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Q=["Primary","Small","InButton"];export{n as InButton,t as Primary,s as Small,Q as __namedExportsOrder,K as default};
