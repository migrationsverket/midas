import{k as s,v as f,c as n,a as $}from"./useFocusable-CI7IKKVh.js";import{a as c}from"./useControlledState-CccRFgkZ.js";import{$ as p}from"./Hidden-Cj803rEv.js";import{R as m,r as y}from"./index-ClcD9ViR.js";function x(l){let{id:e,label:o,"aria-labelledby":a,"aria-label":t,labelElementType:d="label"}=l;e=s(e);let r=s(),i={};o?(a=a?`${r} ${a}`:r,i={id:r,htmlFor:d==="label"?e:void 0}):!a&&!t&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let b=c({id:e,"aria-label":t,"aria-labelledby":a});return{labelProps:i,fieldProps:b}}function g(l){let{description:e,errorMessage:o,isInvalid:a,validationState:t}=l,{labelProps:d,fieldProps:r}=x(l),i=f([!!e,!!o,a,t]),b=f([!!e,!!o,a,t]);return r=n(r,{"aria-describedby":[i,b,l["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:d,fieldProps:r,descriptionProps:{id:i},errorMessageProps:{id:b}}}const P=y.createContext({});function u(l,e){[l,e]=$(l,e,P);let{elementType:o="label",...a}=l;return m.createElement(o,{className:"react-aria-Label",...a,ref:e})}const L=p(u);export{x as $,g as a,P as b,L as c};