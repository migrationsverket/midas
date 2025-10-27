import{j as n}from"./iframe-y3W67OGZ.js";import{$ as j}from"./Form-BwyKPuuK.js";import{G}from"./Grid-DVuqVZ1f.js";import{G as e}from"./GridItem-DIwejd4d.js";import{T as r}from"./TextField-Deqm7HDW.js";import{S as I}from"./Select-B17jX0Lu.js";import{B as a}from"./Button-CGW4uExF.js";import{R as g,a as b}from"./Radio-auWg7Wvv.js";import{C as h}from"./CheckboxGroup-T8-ywe4f.js";import{C as k}from"./Checkbox-DK7607WK.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BJXuAV4-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BUSHBjPd.js";import"./useFocusRing-CjSgtFIL.js";import"./index-C50br37e.js";import"./index-FvKmgXGU.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CsnE5pKM.js";import"./TextField-DjU1Nbvw.js";import"./FieldError-DXDbSFDR.js";import"./Text-po7vIW-q.js";import"./Text-Bo9X_ZEK.js";import"./RSPContexts-QoKXAlFb.js";import"./Group-DoNpM2pm.js";import"./Input-BAZ7FhK_.js";import"./Hidden-B1QYD1dw.js";import"./Button-CG2jxuqe.js";import"./useLabels-CHJSanr2.js";import"./useButton-BFm8-BNg.js";import"./useTextField-BxnmbYu4.js";import"./useControlledState-xJyf2_rp.js";import"./useField-BWKjB-_N.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BzDI37Vy.js";import"./Dialog-CUvSSLjw.js";import"./OverlayArrow-BQ34rDE2.js";import"./useResizeObserver-BhGfQgmq.js";import"./Collection-9d7mpX5q.js";import"./index-Dgew1csY.js";import"./Separator-Dn86Je3c.js";import"./SelectionManager-B8Qu-x4o.js";import"./useEvent-D1Zfzw6T.js";import"./scrollIntoView-C9J0YPla.js";import"./SelectionIndicator-ovCaW42q.js";import"./useDescription-LWVTT3nE.js";import"./ListKeyboardDelegate-BApNGvcX.js";import"./PressResponder-QunyOzFl.js";import"./useLocalizedStringFormatter-CEoyBlv_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-B_yF8BcH.js";import"./VisuallyHidden-CYNxoKjy.js";import"./useLocalizedStringFormatter-ptWVg8sY.js";import"./x-pgjgEZ04.js";import"./createLucideIcon-CR3oL2jv.js";import"./Heading-BxuaC5NJ.js";import"./info-Dbv2jLD8.js";import"./Popover-BUji020Q.js";import"./Tag-fwvaEN-u.js";import"./ListBox-CfeFUNxE.js";import"./DragAndDrop-Bg7ruHwm.js";import"./inertValue-BmFi9Dwp.js";import"./useListState-Bj26VOZb.js";import"./useHighlightSelectionDescription-BsKNuV9O.js";import"./useUpdateEffect-DGVjs2_1.js";import"./useHasTabbableChild-SpwFg3FX.js";import"./check-bqy-uwDD.js";import"./ListBoxSection-DaSl9iPk.js";import"./Virtualizer-CTuO01LD.js";import"./chevron-down-DobaMPxB.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-fL8SmEj4.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
