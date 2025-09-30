import{j as n}from"./iframe-ByrmeAKI.js";import{$ as j}from"./Form-B7N3Puxs.js";import{G}from"./Grid-Bq5jQbuQ.js";import{G as e}from"./GridItem-DcnkCiuW.js";import{T as r}from"./TextField-fYmgImF1.js";import{S as I}from"./Select-PkqUnAkd.js";import{B as a}from"./Button-BrHY5GF7.js";import{R as g,a as b}from"./Radio-BXnzGCva.js";import{C as h}from"./CheckboxGroup-D7vS3Pdp.js";import{C as k}from"./Checkbox-DU07cszV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-_0gU8O4h.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-QYqdES5i.js";import"./useFocusRing-dHz-rfMr.js";import"./index-FmQqkNED.js";import"./index-DYgVpfK2.js";import"./TextFieldBase-BsZ8phfD.js";import"./TextField-lTOe_coQ.js";import"./FieldError-BLzT8dWk.js";import"./Text-Csi9Yuxi.js";import"./Text-BPXuAgPA.js";import"./context-gULmk7kC.js";import"./SelectionManager-Dp1YKy1i.js";import"./useEvent-C2_pZ_S4.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D0uhZOoh.js";import"./useDescription-B6yR-lLf.js";import"./useControlledState-DaVYlwBE.js";import"./Group-3XHpo7ol.js";import"./Input-wQBwP-kP.js";import"./Hidden-6rhIdPp3.js";import"./Button-O9FfCGXl.js";import"./useLabels-vXfYsWgI.js";import"./useButton-BV8vjY0-.js";import"./useTextField-DyD8ptJu.js";import"./useField-hLr213zg.js";import"./TextField.module-DjUItNl5.js";import"./Label-C8Gw37P7.js";import"./Dialog-BJixeOjr.js";import"./RSPContexts-4JRNgbk-.js";import"./OverlayArrow-DaurjTZU.js";import"./useResizeObserver-DSpbTGOc.js";import"./Collection-BuNbafdG.js";import"./index--MllRzl0.js";import"./Separator-Dl7LOYK1.js";import"./PressResponder-D16QsYWf.js";import"./useLocalizedStringFormatter-D8JuULs5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B_VcSrvC.js";import"./useLocalizedStringFormatter-DXYQ7pI6.js";import"./x-Dh4-Lvyg.js";import"./createLucideIcon-CX5yM60Z.js";import"./Heading-Dd9gh59W.js";import"./info-bxli0VFV.js";import"./Popover-Dvn-j2bk.js";import"./Tag-CY8wc_xk.js";import"./ListBox-B4eykJB6.js";import"./DragAndDrop-CLdFH6qi.js";import"./inertValue-ciLbvs83.js";import"./useListState-D7znZ6Ut.js";import"./useHighlightSelectionDescription-BvAmqsLz.js";import"./useUpdateEffect-Jh7jkt9V.js";import"./useHasTabbableChild-Dit6b5Zt.js";import"./check-sKg9EXEW.js";import"./ListBoxSection-DTgU0cpu.js";import"./Virtualizer-JyFSZJ1i.js";import"./useObserveElement-CWPjtscz.js";import"./chevron-down-TQAxg-F6.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D706wlpL.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
