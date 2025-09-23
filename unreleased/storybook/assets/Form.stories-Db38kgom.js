import{j as n}from"./iframe-BBpTncPr.js";import{$ as j}from"./Form-Ds_p3CDP.js";import{G}from"./Grid-CI3gSsgg.js";import{G as e}from"./GridItem-CD3imLwK.js";import{T as r}from"./TextField-C0sRDij6.js";import{S as I}from"./Select-CVoCWCzH.js";import{B as a}from"./Button-DY0bczag.js";import{R as g,a as b}from"./Radio-DtRhvQ5m.js";import{C as h}from"./CheckboxGroup-B1jKUwO5.js";import{C as k}from"./Checkbox-DqGZRePW.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Ddob-MgF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-LVzWJMPI.js";import"./useFocusRing-C9U_xTRq.js";import"./index-uXaYGI9U.js";import"./index-YLrnuuNB.js";import"./TextFieldBase-CbAEeiq4.js";import"./TextField-CynOlLs2.js";import"./FieldError-rssvdH9R.js";import"./Text-Cboo7IC7.js";import"./Text-B2HxOWVV.js";import"./ListKeyboardDelegate-D7E4Wub0.js";import"./SelectionManager-B0EdpGsS.js";import"./useEvent-COyopsLg.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DE8B9TWJ.js";import"./useDescription-8EJ_Tw52.js";import"./useControlledState-bXJVhrNb.js";import"./Group-B0HB1AoN.js";import"./Input-tVtqEubN.js";import"./Hidden-DtO3EHyG.js";import"./Button-BBa6ZlC7.js";import"./useLabels-DwdYcKhE.js";import"./useButton-C3yq4NJO.js";import"./useTextField-QifHRm1z.js";import"./useField-C7fEHmCg.js";import"./TextField.module-DjUItNl5.js";import"./Label-Bt-aZbXl.js";import"./Dialog-CJDOR50f.js";import"./RSPContexts-C7lWYQC_.js";import"./OverlayArrow-Ct5Q_OuM.js";import"./useResizeObserver-Bp6zs7eQ.js";import"./Collection-C0DJ1Qf3.js";import"./index-CeBKnv9W.js";import"./Separator-Dvmwverl.js";import"./PressResponder-D3E5s7h4.js";import"./useLocalizedStringFormatter-Dg3MNjhx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DrAYPAee.js";import"./Dialog-z_LfZjjS.js";import"./useLocalizedStringFormatter-D_AiDEOm.js";import"./x-DzjQYogj.js";import"./createLucideIcon-8lExFGPu.js";import"./Heading-Cz_1xZZp.js";import"./info-C4UlouT6.js";import"./Tag-CToGXEp-.js";import"./ListBox-Dw6v2nXX.js";import"./DragAndDrop-Cu15OIMO.js";import"./inertValue-DRju0VMZ.js";import"./useListState-BigpWyCY.js";import"./useHighlightSelectionDescription-CK2MsQC_.js";import"./useUpdateEffect-DJ8b5xhd.js";import"./useHasTabbableChild-DC98NS4_.js";import"./check-gcDPJCMV.js";import"./ListBoxSection-DebPOeJ-.js";import"./Virtualizer-CFxsx3RP.js";import"./useObserveElement-BVHB3Sz3.js";import"./chevron-down-BLDQMIpU.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-_1Qrgr6d.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
