import{j as n}from"./iframe-BXTe3Zg0.js";import{$ as j}from"./Form-BvdwY2xp.js";import{G}from"./Grid-dgeYw49f.js";import{G as e}from"./GridItem-DVFIejiU.js";import{T as r}from"./TextField-gfQENFSH.js";import{S as I}from"./Select-ClqHvC5D.js";import{B as a}from"./Button-BZbP1swU.js";import{R as g,a as b}from"./Radio-B2mrXgoK.js";import{C as h}from"./CheckboxGroup-IbTFNTO-.js";import{C as k}from"./Checkbox-DqXTU9It.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BD31SCNF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BKp8h8Oz.js";import"./useFocusRing-Bg0rS-BQ.js";import"./index-CNlAVBGn.js";import"./index-BsIffJZW.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-5nCeEMaV.js";import"./TextField-BBQEhEtH.js";import"./FieldError-Cq4w-AVg.js";import"./Text-Do7lb4h0.js";import"./Text-th4GDt-U.js";import"./RSPContexts-Cf0oA50X.js";import"./Group-CBOS-W2C.js";import"./Input-BuYS38V8.js";import"./Hidden-CYSBDJA_.js";import"./Button-BFEzgytZ.js";import"./useLabels-6XcUN8xP.js";import"./useButton-w931F4Qt.js";import"./useTextField-8PgnrZC0.js";import"./useControlledState-Dvv65CSc.js";import"./useField-C0CJsOxw.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CxTIQT6M.js";import"./Dialog-EwEpBFhc.js";import"./OverlayArrow-CJjwsT4_.js";import"./useResizeObserver-DUdjGmiK.js";import"./Collection-DyEcaawK.js";import"./index-QjNroyxL.js";import"./Separator-D9ZxwZS1.js";import"./SelectionManager-DjMxeZpl.js";import"./useEvent-P9lvpZa7.js";import"./scrollIntoView-ltjp8cwm.js";import"./SelectionIndicator-BXjK6c-E.js";import"./useDescription-DysjMYeu.js";import"./ListKeyboardDelegate-CxwaVrok.js";import"./PressResponder-OEBNJwNe.js";import"./useLocalizedStringFormatter-BX2FFs2c.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DlveKBjR.js";import"./VisuallyHidden-CRUhRdKv.js";import"./useLocalizedStringFormatter-CmKcij5x.js";import"./x-BEAtpcQE.js";import"./createLucideIcon-Ck1gYkxM.js";import"./Heading-laKB5lJF.js";import"./info-C9WC_CzF.js";import"./Popover-PL1OhoC3.js";import"./Tag-_9iKAjUd.js";import"./ListBox-Ds-4FRRe.js";import"./DragAndDrop-D0Skt1Ff.js";import"./inertValue-BSwqyTPC.js";import"./useListState-CRbnPNqA.js";import"./useHighlightSelectionDescription-OnywcUCx.js";import"./useUpdateEffect-CM59Aw3n.js";import"./useHasTabbableChild-CKG9oLDm.js";import"./check-DyNGfHpl.js";import"./ListBoxSection-b1MOT6SY.js";import"./Virtualizer-oZv9I8Hq.js";import"./chevron-down-DM2r2kTn.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-Bfvof6rw.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
