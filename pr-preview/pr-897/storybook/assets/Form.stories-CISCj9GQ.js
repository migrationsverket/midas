import{j as n}from"./iframe-BxuofwO3.js";import{$ as j}from"./Form-B7qQZCaR.js";import{G}from"./Grid-ByhbV3N4.js";import{G as e}from"./GridItem-mNhooDMy.js";import{T as r}from"./TextField-KpA5viym.js";import{S as I}from"./Select-_3nehGwS.js";import{B as a}from"./Button-Cp6KlNnH.js";import{R as g,a as b}from"./Radio-eU2owRgI.js";import{C as h}from"./CheckboxGroup-DfvoCv_q.js";import{C as k}from"./Checkbox-D-2AKMzg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-9ppjfNzJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BHAmPQP0.js";import"./useFocusRing-CsoO-_sk.js";import"./index-CTNjPpiQ.js";import"./index-CY3NUDYq.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CPJSbB6A.js";import"./TextField--H-AIgOZ.js";import"./FieldError-BdZ5vXxK.js";import"./Text-BiinJHtZ.js";import"./Text-Blg9yUuB.js";import"./RSPContexts-MvpO0loh.js";import"./Group-DcA6vtr-.js";import"./Input-RSMog2Px.js";import"./Hidden-CnVVhazM.js";import"./Button-F63V9o4E.js";import"./useLabels-D3Tf_CT8.js";import"./useButton-B8RUMPwK.js";import"./useTextField-Du1q87Wf.js";import"./useControlledState-XQaeVPOu.js";import"./useField-BhC99aK7.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-MZ88VVXC.js";import"./Dialog-C0c5q6pS.js";import"./OverlayArrow-DC9RsAbD.js";import"./useResizeObserver-B5I3ISk9.js";import"./Collection-iEeIGaFK.js";import"./index-DhSOvx5l.js";import"./Separator-DV0gQKWK.js";import"./SelectionManager-LqCEJt8e.js";import"./useEvent-6ybSSKer.js";import"./scrollIntoView-0HlqI7yf.js";import"./SelectionIndicator-DvCQJ6B6.js";import"./useDescription-Cg7Z0_Z6.js";import"./ListKeyboardDelegate-D4VceDoS.js";import"./PressResponder-Dc-D-0dT.js";import"./useLocalizedStringFormatter-ZlLhKZqq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-COTPKfO5.js";import"./VisuallyHidden-D1alrVEG.js";import"./useLocalizedStringFormatter-Cr3XJ3R1.js";import"./x-DDbWsPs1.js";import"./createLucideIcon-D2QRpcJE.js";import"./Heading-Bj5gaEl2.js";import"./info-C1REGsN7.js";import"./Popover-Dm_uDu1b.js";import"./Tag-ERnYB5yO.js";import"./ListBox-C-KXpcX5.js";import"./DragAndDrop-y-oiCnRP.js";import"./inertValue-BrfgCuzC.js";import"./useListState-BfHu516E.js";import"./useHighlightSelectionDescription-q0z4lq99.js";import"./useUpdateEffect-D3WAiYpq.js";import"./useHasTabbableChild-CYhswgFE.js";import"./check-Dh103C3Z.js";import"./ListBoxSection-BLvhlzVH.js";import"./Virtualizer-5XodnFvw.js";import"./chevron-down-DszmIPd_.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState--JfXVmln.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
