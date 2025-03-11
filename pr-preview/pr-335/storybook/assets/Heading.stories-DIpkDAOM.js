import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{c as W}from"./clsx-B-dksMZM.js";import{e as a}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const p=({component:e,element:n,variant:f})=>e===n||!e&&f===n,X='"../theme/tokens.css"',Y="#000000",Z='"Inter", sans-serif',$="_h1_1ovvz_5",ee="_h1Expressive_1ovvz_6",ne="_h2_1ovvz_8",se="_h2Expressive_1ovvz_9",ae="_h3_1ovvz_11",te="_h3Expressive_1ovvz_12",re="_h4_1ovvz_14",ie="_h4Expressive_1ovvz_15",oe="_h5_1ovvz_17",he="_h5Expressive_1ovvz_18",s={tokens:X,black:Y,display:Z,h1:$,h1Expressive:ee,h2:ne,h2Expressive:se,h3:ae,h3Expressive:te,h4:re,h4Expressive:ie,h5:oe,h5Expressive:he},E=({children:e,...n})=>r.jsx(pe,{...n,children:e}),pe=({component:e,children:n,className:f,variant:t="h3",isExpressive:i=!1,...o})=>{const Q={h1:i?s.h1Expressive:s.h1,h2:i?s.h2Expressive:s.h2,h3:i?s.h3Expressive:s.h3,h4:i?s.h4Expressive:s.h4,h5:i?s.h5Expressive:s.h5},h=W(Q[t],f);return p({component:e,variant:t,element:"h1"})?r.jsx("h1",{className:h,...o,children:n}):p({component:e,variant:t,element:"h2"})?r.jsx("h2",{className:h,...o,children:n}):p({component:e,variant:t,element:"h3"})?r.jsx("h3",{className:h,...o,children:n}):p({component:e,variant:t,element:"h4"})?r.jsx("h4",{className:h,...o,children:n}):p({component:e,variant:t,element:"h5"})?r.jsx("h5",{className:h,...o,children:n}):null};try{E.displayName="Heading",E.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}}}}}catch{}const de={component:E,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1}},c={args:{variant:"h1",children:"Sapindales"},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},g={args:{...c.args,isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},l={args:{variant:"h2",children:"Rutaceae"},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},v={args:{...l.args,isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},x={args:{variant:"h3",children:"Citrus"},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},d={args:{variant:"h3",children:"Citrus",isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},u={args:{variant:"h4",children:"C. reticulata",isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},y={args:{variant:"h5",children:"Clementin",isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},m={args:{variant:"h3",component:"h1",children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExpressive:n}})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":n?"24px":"16px","line-height":n?"32px":"24px","font-weight":600})}};var H,_,S;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Sapindales'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '32px',
      'font-weight': 400
    });
  }
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var z,R,w;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Heading1.args,
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '44px',
      'font-weight': 400
    });
  }
}`,...(w=(R=g.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var B,k,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Rutaceae'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 400
    });
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,N,b;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Heading2.args,
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '36px',
      'font-weight': 500
    });
  }
}`,...(b=(N=v.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var q,V,A;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(A=(V=x.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var I,O,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '24px',
      'line-height': '32px',
      'font-weight': 600
    });
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,D,F;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    children: 'C. reticulata',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 600
    });
  }
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'h5',
    children: 'Clementin',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    component: 'h1',
    children: 'A h1 that looks just like a h3'
  },
  play: async ({
    canvas,
    args: {
      isExpressive
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': isExpressive ? '24px' : '16px',
      'line-height': isExpressive ? '32px' : '24px',
      'font-weight': 600
    });
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ue=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{m as ChangeSemanticElement,g as ExpressiveHeading1,v as ExpressiveHeading2,d as ExpressiveHeading3,u as ExpressiveHeading4,y as ExpressiveHeading5,c as Heading1,l as Heading2,x as Heading3,ue as __namedExportsOrder,de as default};
