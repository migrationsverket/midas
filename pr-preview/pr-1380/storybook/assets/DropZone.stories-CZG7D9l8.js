import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{c as r,i,l as a,n as o,r as s,s as c,t as l,u}from"./FileTrigger-GpxFrQfC.js";import{n as d}from"./iframe-DMLAKoEH.js";import{n as f,t as p}from"./FieldError-BQKewpNy.js";import{n as m,t as h}from"./Button-A6qkjxjZ.js";import{n as g,t as _}from"./Label-Dxyi52gy.js";import{n as v,t as y}from"./Text-ClKoSNKS.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{b=t(n(),1),u(),r(),i(),o(),m(),v(),f(),g(),x=d(),S={component:s,title:`Components/DropZone`,tags:[`autodocs`],parameters:{layout:`centered`}},C={render:e=>(0,x.jsx)(s,{...e,style:{width:679},children:(0,x.jsx)(y,{slot:`label`,children:`Släpp filer här`})})},w={name:`With an upload button`,render:e=>(0,x.jsxs)(s,{...e,style:{width:679},children:[(0,x.jsx)(y,{slot:`label`,children:`Välj filer eller dra och släpp inom det streckade området`}),(0,x.jsx)(l,{children:(0,x.jsx)(h,{size:`medium`,icon:c,iconPlacement:`left`,children:`Välj filer`})})]})},T={name:`With an outer field label`,parameters:{docs:{description:{story:"For a Dropzone used as one field among others in a form, pair it with an outer `Label` — same pattern as `TextField`. Wire it up with `aria-labelledby`; it's combined with the inside `slot='label'` text for the accessible name, so both stay announced."}}},render:e=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,width:679},children:[(0,x.jsx)(_,{id:`dropzone-field-label`,children:`Ladda upp filer`}),(0,x.jsx)(s,{...e,"aria-labelledby":`dropzone-field-label`,children:(0,x.jsx)(y,{slot:`label`,children:`Släpp filer här`})})]})},E={render:e=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,width:679},children:[(0,x.jsx)(s,{...e,isInvalid:!0,children:(0,x.jsx)(y,{slot:`label`,children:`Släpp filer här`})}),(0,x.jsx)(p,{isInvalid:!0,children:`Validering`})]})},D=[`image/jpeg`,`image/png`],O=()=>{let[e,t]=b.useState(!1),n=e=>{t(e.some(e=>!D.includes(e.type)))};return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,width:679},children:[(0,x.jsxs)(s,{onDrop:async e=>{let t=e.items.filter(a),r=await Promise.all(t.map(e=>e.getFile()));n(r)},isInvalid:e,"data-testid":`drop-zone`,children:[(0,x.jsx)(y,{slot:`label`,children:`Släpp filer här eller välj en fil (endast .jpg/.png)`}),(0,x.jsx)(l,{acceptedFileTypes:D,onSelect:e=>{e&&n(Array.from(e))},"data-testid":`file-trigger`,children:(0,x.jsx)(h,{size:`medium`,icon:c,iconPlacement:`left`,children:`Välj filer`})})]}),e&&(0,x.jsx)(p,{isInvalid:!0,children:`Endast .jpg- och .png-filer tillåts`})]})},k={name:`Rejects a disallowed file type`,parameters:{docs:{description:{story:"DropZone and FileTrigger don't validate file type themselves — `acceptedFileTypes` only narrows the native file picker, it does nothing for drag-and-drop. The consumer checks `file.type` in `onSelect`/`onDrop` and drives `isInvalid` + a composed `FieldError` from the result, same pattern as the plain `Invalid` story above."}}},render:()=>(0,x.jsx)(O,{})},A={name:`Rejects a disallowed file type before drop`,parameters:{docs:{description:{story:"`getDropOperation` runs during drag-over, before anything is dropped — it only sees the dragged item's declared type (`types.has('image/png')`), never its content, so a mismatched file can be rejected before it lands: the zone never enters its drop-target state and the cursor shows \"not allowed\". This is a UX affordance, not a security check — the declared type is untrusted metadata (usually derived from the file extension), not verified content. Real validation still belongs server-side, same as the reactive `onDrop`/`file.type` check in the story above. Want the invalid styling itself to show while the bad file is still hovering, not just the cursor? Drive `isInvalid` from inside `getDropOperation` directly — `onDropEnter`/`onDropExit` won't help here, they only fire once a drag is already accepted and never carry type info of their own."}}},render:e=>(0,x.jsx)(s,{...e,getDropOperation:e=>D.some(t=>e.has(t))?`copy`:`cancel`,style:{width:679},children:(0,x.jsx)(y,{slot:`label`,children:`Dra en .jpg- eller .png-fil hit — andra filtyper avvisas redan innan släpp`})})},j={render:e=>(0,x.jsxs)(s,{...e,isDisabled:!0,style:{width:679},children:[(0,x.jsx)(y,{slot:`label`,children:`Välj filer eller dra och släpp inom det streckade området`}),(0,x.jsx)(l,{children:(0,x.jsx)(h,{size:`medium`,icon:c,iconPlacement:`left`,isDisabled:!0,style:{backgroundColor:`transparent`},children:`Välj filer`})})]})},M=e=>{let[t,n]=b.useState([]);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,x.jsx)(l,{onSelect:t=>{if(t){let r=Array.from(t);n(e=>[...e,...r]),e.onSelect(r)}},"data-testid":`file-trigger`,children:(0,x.jsx)(h,{children:`Select files`})}),(0,x.jsx)(`img`,{alt:``,"data-testid":`image`,src:`https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Relative_compliment.svg/250px-Relative_compliment.svg.png`}),(0,x.jsx)(s,{onDrop:async t=>{let r=t.items.filter(e=>e.kind===`file`),i=await Promise.all(r.map(e=>e.getFile()));n(e=>[...e,...i]),e.onSelect(i)},"data-testid":`drop-zone`,children:(0,x.jsx)(y,{slot:`label`,children:`Drop files here`})}),t.length>0&&(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{children:`Selected files:`}),(0,x.jsx)(`ul`,{children:t.map((e,t)=>(0,x.jsx)(`li`,{children:e.name},t))})]})]})},N={tags:[`!dev`,`!autodocs`,`!snapshot`],render:e=>(0,x.jsx)(M,{...e})},P=[`Default`,`WithUploadButton`,`WithFieldLabel`,`Invalid`,`RejectsWrongFileType`,`RejectsTypeBeforeDrop`,`Disabled`,`WithFileTrigger`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <DropZone {...args} style={{
    width: 679
  }}>
      <Text slot='label'>Släpp filer här</Text>
    </DropZone>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With an upload button',
  render: args => <DropZone {...args} style={{
    width: 679
  }}>
      <Text slot='label'>
        Välj filer eller dra och släpp inom det streckade området
      </Text>
      <FileTrigger>
        <Button size='medium' icon={Upload} iconPlacement='left'>
          Välj filer
        </Button>
      </FileTrigger>
    </DropZone>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With an outer field label',
  parameters: {
    docs: {
      description: {
        story: "For a Dropzone used as one field among others in a form, pair it with an outer \`Label\` — same pattern as \`TextField\`. Wire it up with \`aria-labelledby\`; it's combined with the inside \`slot='label'\` text for the accessible name, so both stay announced."
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: 679
  }}>
      <Label id='dropzone-field-label'>Ladda upp filer</Label>
      <DropZone {...args} aria-labelledby='dropzone-field-label'>
        <Text slot='label'>Släpp filer här</Text>
      </DropZone>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: 679
  }}>
      <DropZone {...args} isInvalid>
        <Text slot='label'>Släpp filer här</Text>
      </DropZone>
      <FieldError isInvalid>Validering</FieldError>
    </div>
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"{\n  name: 'Rejects a disallowed file type',\n  parameters: {\n    docs: {\n      description: {\n        story: \"DropZone and FileTrigger don't validate file type themselves — `acceptedFileTypes` only narrows the native file picker, it does nothing for drag-and-drop. The consumer checks `file.type` in `onSelect`/`onDrop` and drives `isInvalid` + a composed `FieldError` from the result, same pattern as the plain `Invalid` story above.\"\n      }\n    }\n  },\n  render: () => <RejectingContainer />\n}",...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Rejects a disallowed file type before drop',
  parameters: {
    docs: {
      description: {
        story: "\`getDropOperation\` runs during drag-over, before anything is dropped — it only sees the dragged item's declared type (\`types.has('image/png')\`), never its content, so a mismatched file can be rejected before it lands: the zone never enters its drop-target state and the cursor shows \\"not allowed\\". This is a UX affordance, not a security check — the declared type is untrusted metadata (usually derived from the file extension), not verified content. Real validation still belongs server-side, same as the reactive \`onDrop\`/\`file.type\` check in the story above. Want the invalid styling itself to show while the bad file is still hovering, not just the cursor? Drive \`isInvalid\` from inside \`getDropOperation\` directly — \`onDropEnter\`/\`onDropExit\` won't help here, they only fire once a drag is already accepted and never carry type info of their own."
      }
    }
  },
  render: args => <DropZone {...args} getDropOperation={types => ACCEPTED_FILE_TYPES.some(type => types.has(type)) ? 'copy' : 'cancel'} style={{
    width: 679
  }}>
      <Text slot='label'>
        Dra en .jpg- eller .png-fil hit — andra filtyper avvisas redan innan
        släpp
      </Text>
    </DropZone>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <DropZone {...args} isDisabled style={{
    width: 679
  }}>
      <Text slot='label'>
        Välj filer eller dra och släpp inom det streckade området
      </Text>
      <FileTrigger>
        <Button size='medium' icon={Upload} iconPlacement='left' isDisabled
      // \`secondary\` is transparent/outline even when enabled, but its
      // disabled state currently applies the shared washed-fill
      // background meant for solid-filled variants (primary/danger),
      // which doesn't match Figma here. Real fix belongs in Button.module
      // .css (tracked separately, out of scope for this branch) — this
      // is a demo-only override so the story reflects the intended look.
      style={{
        backgroundColor: 'transparent'
      }}>
          Välj filer
        </Button>
      </FileTrigger>
    </DropZone>
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => <DropZoneTestContainer {...args} />
}`,...N.parameters?.docs?.source}}}})))()}F();export{C as Default,j as Disabled,E as Invalid,A as RejectsTypeBeforeDrop,k as RejectsWrongFileType,T as WithFieldLabel,N as WithFileTrigger,w as WithUploadButton,P as __namedExportsOrder,S as default};