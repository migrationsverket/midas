import{j as l,l as y}from"./iframe-CCMGVGRR.js";import{c as v}from"./clsx-Ciqy0D92.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-B-dksMZM.js";const S="_skeleton_og9n9_11",f="_circle_og9n9_25",w="_wave_og9n9_30",x="_onLayer01_og9n9_54",n={skeleton:S,circle:f,wave:w,onLayer01:x},r=({variant:e="rectangle",width:d,height:c,isAnimated:p=!0,className:m,style:g,isOnLayer01:u,...h})=>(e==="circle"&&c!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),l.jsx("div",{className:v(n.skeleton,n[e],p&&n.wave,u&&n.onLayer01,m),style:{width:d,height:c,...g},...h}));try{r.displayName="Skeleton",r.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"Circular or rectangular Skeleton component. When using circle, only `width` is allowed to control size.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},isAnimated:{defaultValue:{value:"true"},description:"Displays the skeleton component with a wave animation",name:"isAnimated",required:!1,type:{name:"boolean"}},isOnLayer01:{defaultValue:{value:"false"},description:"If skeleton is on a layer01 background light-dark( #f2f2f2, #262626)",name:"isOnLayer01",required:!1,type:{name:"boolean"}}}}}catch{}const C={component:r,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangle"},argTypes:{isAnimated:{options:[!0,!1],control:{type:"radio"}}},render:e=>l.jsx(r,{...e,"data-testid":"skeleton"})},a={args:{width:"100px",height:"40px"}},t={args:{variant:"circle",width:"50px"}},s={args:{...a.args,isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  height="40px"
  isAnimated={false}
  variant="rectangle"
  width="100px"
/>`}}}},o={args:{...a.args,isOnLayer01:!0},render:e=>l.jsx("div",{style:{backgroundColor:y,padding:"1rem"},children:l.jsx(r,{...e,"data-testid":"skeleton"})})},i={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{width:"100px",height:"40px",className:"derp",style:{verticalAlign:"bottom"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100px',
    height: '40px'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  height="40px"
  isAnimated={false}
  variant="rectangle"
  width="100px"
/>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    width: '100px',
    height: '40px',
    className: 'derp',
    style: {
      verticalAlign: 'bottom'
    }
  }
}`,...i.parameters?.docs?.source}}};const L=["Rectangle","Circle","NoAnimation","IsOnLayer01","DS1191"];export{t as Circle,i as DS1191,o as IsOnLayer01,s as NoAnimation,a as Rectangle,L as __namedExportsOrder,C as default};
