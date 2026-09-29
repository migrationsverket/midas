import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./clsx-BvAV21YK.js";import{n as i}from"./iframe-CXm8y9OE.js";import{i as a,n as o,r as s,t as c}from"./TextFieldBase-YK41ahn6.js";import{n as l,t as u}from"./TextField.module-D6WSei8m.js";var d,f,p;function m(){return(m=e((()=>{d=t(),o(),a(),n(),l(),f=i(),p=(0,d.forwardRef)(({className:e,cols:t,form:n,rows:i,wrap:a,...o},l)=>(0,f.jsx)(c,{...o,children:(0,f.jsx)(s,{className:r(u.textArea,e),cols:t,form:n,ref:l,rows:i,wrap:a})})),p.displayName=`TextArea`,p.__docgenInfo={description:``,methods:[],displayName:`TextArea`}})))()}var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{m(),h=i(),g={title:`Components/TextArea`,component:p,args:{label:`Label`,description:`Description`,errorPosition:`top`},argTypes:{size:{table:{disable:!0}}}},_={args:{defaultValue:`Text value`}},v={args:{isInvalid:!0,errorMessage:`Något gick fel`}},y={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0,errorMessage:`Var god ange en text`},render:e=>(0,h.jsxs)(`form`,{children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(`button`,{type:`submit`,children:`Submit`})]})},b={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Label`,validate:e=>/^\d+$/.test(e)?!0:`Only numbers are allowed`},render:e=>(0,h.jsxs)(`form`,{children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(`button`,{type:`submit`,children:`Submit`})]})},x={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{maxLength:50}},S={args:{..._.args,isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},C={args:{isReadOnly:!0,showCounter:!0,value:`User input`,maxLength:100}},w={args:{value:`I love apples`,showCounter:!0}},T={args:{showCounter:!0,maxLength:50}},E=[`Primary`,`Invalid`,`Required`,`CustomValidation`,`MaxLength`,`Disabled`,`ReadOnly`,`ShowCounter`,`MaxLengthAndShowCounter`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    isRequired: true,
    errorMessage: 'Var god ange en text'
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Label',
    validate: (value: string) => !/^\\d+$/.test(value) ? 'Only numbers are allowed' : true
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    maxLength: 50
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showCounter: true,
    value: 'User input',
    maxLength: 100
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{b as CustomValidation,S as Disabled,v as Invalid,x as MaxLength,T as MaxLengthAndShowCounter,_ as Primary,C as ReadOnly,y as Required,w as ShowCounter,E as __namedExportsOrder,g as default};