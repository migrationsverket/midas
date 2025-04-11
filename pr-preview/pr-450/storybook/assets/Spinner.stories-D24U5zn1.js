import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as y}from"./createLucideIcon-8wDOqnHv.js";import{B as h}from"./Button-BgIlQeKv.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=y("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),x='"../theme/tokens.css"',C="_container_32v8g_4",j="_spinner_32v8g_8",O="_rotating_32v8g_1",b="_dark_32v8g_18",B="_vsHidden_32v8g_22",a={tokens:x,"--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)",container:C,spinner:j,rotating:O,dark:b,vsHidden:B},t=({small:r,isOnColor:_=!1,dark:k=!1})=>e.jsxs("div",{className:a.container,role:"status",children:[e.jsx(S,{className:v(a.spinner,(_||k)&&a.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"For use on dark background\n@deprecated please use `isOnColor` instead",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const T={component:t,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,dark:!1}},s={args:{}},o={args:{small:!0}},n={args:{small:!0,isOnColor:!0},render:r=>e.jsxs(h,{children:[e.jsx(t,{...r}),"Laddar"]})};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const U=["Primary","Small","InButton"];export{n as InButton,s as Primary,o as Small,U as __namedExportsOrder,T as default};
