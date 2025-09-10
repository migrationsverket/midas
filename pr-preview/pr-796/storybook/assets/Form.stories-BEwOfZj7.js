import{j as n}from"./iframe-C8mKGQ01.js";import{$ as j}from"./Form--YLQtDBx.js";import{G}from"./Grid-DwCKBsi9.js";import{G as e}from"./GridItem-DwZVb-7q.js";import{T as r}from"./TextField-CdMZ7zuX.js";import{S as I}from"./Select-Bmq8NcX8.js";import{B as a}from"./Button-_H1tSdmv.js";import{R as g,a as b}from"./Radio-5cHm6sk_.js";import{C as h}from"./CheckboxGroup-Bj7kgk3U.js";import{C as k}from"./Checkbox-DZl_C7rm.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C_Db2X58.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B7OXt8u9.js";import"./useFocusRing-BhoBKcyI.js";import"./index-D7S0c1z3.js";import"./index-YTY5LxAO.js";import"./TextFieldBase-CRHtaadL.js";import"./TextField-Dq31O5D2.js";import"./FieldError-FItf7eXa.js";import"./Text-CbCwoeeb.js";import"./Text-NasfLizK.js";import"./ListKeyboardDelegate-C_JmBOEW.js";import"./SelectionManager-aG0TmV1f.js";import"./useEvent-znQvuV38.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BiUZILZ4.js";import"./useDescription-C_ArKKvx.js";import"./useControlledState-qenhQeV7.js";import"./Group-74AgaOxu.js";import"./Input-rDLjhbsp.js";import"./Hidden-oTvv2PLA.js";import"./Button-BWzCV4qS.js";import"./useLabels-B_eoGfVf.js";import"./useButton-Cdw6pOZM.js";import"./useTextField-BxRA9avv.js";import"./useField-BIr3or8c.js";import"./TextField.module-8oYDuXgF.js";import"./Label-CsewUvBu.js";import"./Dialog-BZUGlTj4.js";import"./RSPContexts-nuRB_ImU.js";import"./OverlayArrow-DZ4v92ov.js";import"./useResizeObserver-B_tjz1s4.js";import"./Collection-CySyZdPO.js";import"./index-C9aturmL.js";import"./Separator-DVuj2q9Y.js";import"./PressResponder-CDFb36ST.js";import"./useLocalizedStringFormatter-w61ZJIXb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BT6XyhsL.js";import"./Dialog-9TRR4igA.js";import"./useLocalizedStringFormatter-Bf6-wXyd.js";import"./x-CiFHkLXX.js";import"./createLucideIcon-DyoLE5ns.js";import"./Heading-Cq0OfHr0.js";import"./info-CQFBu4lK.js";import"./Tag-BCEAUCkB.js";import"./ListBox-Cs1kJGwD.js";import"./DragAndDrop-DWJNjT3R.js";import"./inertValue-CvICxAHf.js";import"./useListState-CLM2qnH8.js";import"./useHighlightSelectionDescription-BhcavffF.js";import"./useUpdateEffect-CDn714RA.js";import"./useHasTabbableChild-D2osOxIU.js";import"./check-Bk0F0Zjp.js";import"./ListBoxSection-C0MKlIGE.js";import"./Virtualizer-CYzKaOyy.js";import"./useObserveElement-YpdC7z9T.js";import"./chevron-down-DXDIMcfG.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-Ci82ioUW.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
