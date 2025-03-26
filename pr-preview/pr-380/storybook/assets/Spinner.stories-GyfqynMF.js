import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as k}from"./clsx-B-dksMZM.js";import{c as v}from"./createLucideIcon-8wDOqnHv.js";import{B as y}from"./Button-DSmwxr3W.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CTiZg4rz.js";import"./utils-fGMpyvF6.js";import"./ProgressBar-qio85TVe.js";import"./Label-C7YJVz0K.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./context-gwlhO1hg.js";import"./LiveAnnouncer-A-XV3aHJ.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=v("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),S='"../theme/tokens.css"',x="_container_32v8g_4",j="_spinner_32v8g_8",B="_rotating_32v8g_1",L="_dark_32v8g_18",N="_vsHidden_32v8g_22",a={tokens:S,"--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)",container:x,spinner:j,rotating:B,dark:L,vsHidden:N},o=({small:r,dark:_})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(h,{className:k(a.spinner,_&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const R={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},t={args:{small:!0}},n={args:{small:!0,dark:!0},render:({...r})=>e.jsxs(y,{children:[e.jsx(o,{dark:r.dark,small:r.small}),"Laddar"]})};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const A=["Primary","Small","InButton"];export{n as InButton,s as Primary,t as Small,A as __namedExportsOrder,R as default};
