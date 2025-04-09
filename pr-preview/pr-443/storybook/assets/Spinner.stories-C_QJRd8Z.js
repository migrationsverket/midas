import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as k}from"./clsx-B-dksMZM.js";import{c as v}from"./createLucideIcon-8wDOqnHv.js";import{B as y}from"./Button-5oeRMT-7.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=v("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),C='"../theme/tokens.css"',S="_container_32v8g_4",x="_spinner_32v8g_8",O="_rotating_32v8g_1",j="_dark_32v8g_18",B="_vsHidden_32v8g_22",o={tokens:C,"--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)",container:S,spinner:x,rotating:O,dark:j,vsHidden:B},t=({small:r,isOnColor:_})=>e.jsxs("div",{className:o.container,role:"status",children:[e.jsx(h,{className:k(o.spinner,_&&o.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:o.vsHidden,children:"Laddar, vänligen vänta."})]});try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on dark background",name:"isOnColor",required:!1,type:{name:"boolean"}}}}}catch{}const Q={component:t,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},s={args:{}},a={args:{small:!0}},n={args:{small:!0,isOnColor:!0},render:({...r})=>e.jsxs(y,{children:[e.jsx(t,{isOnColor:r.isOnColor,small:r.small}),"Laddar"]})};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: ({
    ...args
  }) => {
    return <Button>
        <Spinner isOnColor={args.isOnColor} small={args.small} />
        Laddar
      </Button>;
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const T=["Primary","Small","InButton"];export{n as InButton,s as Primary,a as Small,T as __namedExportsOrder,Q as default};
