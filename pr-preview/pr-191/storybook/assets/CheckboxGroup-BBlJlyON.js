import{j as a}from"./jsx-runtime-CfatFE5O.js";import{R as t}from"./index-ClcD9ViR.js";import{$ as x,s as u,a as S,C}from"./Checkbox-Bfi7Omu0.js";import{$ as V}from"./Group-BjurS_ee.js";import{I as $}from"./TextField-DZHENuq0.js";const m=({label:i,description:f,errorMessage:h,showSelectAll:g,children:d,...v})=>{const[s,l]=t.useState(),b=()=>{const e=t.useContext(S),r=t.Children.toArray(d).filter(t.isValidElement).map(n=>n.props.value),y=()=>s!=="all"?(l("all"),e==null?void 0:e.setValue(["toggleAll",...r])):(l("none"),e==null?void 0:e.setValue([]));return t.useEffect(()=>{var c,p;const n=r.length,A=r.length+1,o=((c=e==null?void 0:e.value)==null?void 0:c.length)||0;o===0&&l("none"),o>0&&o<n&&l("some"),o!==A&&(e==null||e.removeValue("toggleAll")),o===n&&!((p=e==null?void 0:e.value)!=null&&p.includes("toggleAll"))&&(e==null||e.addValue("toggleAll"),l("all"))},[r.length,e==null?void 0:e.value]),a.jsx(C,{value:"toggleAll",isSelected:s==="all",isIndeterminate:s==="some",onChange:()=>y(),children:"Välj alla"})};return a.jsx(x,{className:u.checkboxGroup,...v,children:a.jsx($,{label:i,description:f,errorMessage:h,children:a.jsxs(V,{className:u.wrap,children:[g&&a.jsx(b,{}),d]})})})};try{m.displayName="CheckboxGroup",m.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},showSelectAll:{defaultValue:null,description:"",name:"showSelectAll",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: CheckboxGroupRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: CheckboxGroupRenderProps & { defaultClassName: string; }) => string)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:'"native" | "aria"'}}}}}catch{}export{m as C};