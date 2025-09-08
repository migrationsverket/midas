import{j as n}from"./iframe-CGcdNPxV.js";import{$ as j}from"./Form-Bfi-LMre.js";import{G}from"./Grid-nmWzEjmB.js";import{G as e}from"./GridItem-Bd2BBac1.js";import{T as r}from"./TextField-Dg8aYv4S.js";import{S as I}from"./Select-CQJezsnR.js";import{B as a}from"./Button-CxfnIsdq.js";import{R as g,a as b}from"./Radio-B1CsGxqe.js";import{C as h}from"./CheckboxGroup-B832QTKm.js";import{C as k}from"./Checkbox-BbyV_Tba.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CcsEyQ5d.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DRmClLcN.js";import"./useFocusRing-CKBzQSpk.js";import"./index-Ds9ehpYg.js";import"./index-CG2zuO8Z.js";import"./TextFieldBase-CEpnB3hI.js";import"./TextField-DmrRpmS1.js";import"./FieldError-C7MmWU6L.js";import"./Text-ff_kjFkF.js";import"./Text-DT5ko1zh.js";import"./ListKeyboardDelegate-BVJ1tDYk.js";import"./SelectionManager-orhD9qsJ.js";import"./useEvent-DeM6emkQ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CQV9GBxO.js";import"./useDescription-B871tvyk.js";import"./useControlledState-BcPHzvAQ.js";import"./Group-Dng1ebPy.js";import"./Input-D5XYZtCg.js";import"./Hidden-O2JbbNiF.js";import"./Button-CgQ4u9Ia.js";import"./useLabels-LGKS6_1N.js";import"./useButton-CUajmSO_.js";import"./useTextField-VEdWq2rT.js";import"./useField-BtL_CIHl.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-D1pdclTj.js";import"./Dialog-D9UbN-1u.js";import"./RSPContexts-D5EiQAfp.js";import"./OverlayArrow-BwWID8WS.js";import"./useResizeObserver-DSnRjsEU.js";import"./Collection-VbG0Y8mo.js";import"./index-BcW3HWhg.js";import"./Separator-B7cB1sgf.js";import"./PressResponder-DyNsu4zY.js";import"./useLocalizedStringFormatter-hIcIqYfR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C_4FQeNo.js";import"./Dialog-BahplAbN.js";import"./useLocalizedStringFormatter-BG3eOzXE.js";import"./x-D1OcHhcq.js";import"./createLucideIcon-DM7iuOYT.js";import"./Heading-Ct1tNlpZ.js";import"./info-py22xYIF.js";import"./Tag-D1twaZgv.js";import"./ListBox-QirPJhNh.js";import"./DragAndDrop-A1CEc7Wk.js";import"./inertValue-BzzoARi-.js";import"./useListState-DHqMFWXJ.js";import"./useHighlightSelectionDescription-DWV5oTJd.js";import"./useUpdateEffect-B1zpDj1a.js";import"./useHasTabbableChild-CRFPt2fE.js";import"./check-BHS_qiRd.js";import"./ListBoxSection-CCHM8OjB.js";import"./Virtualizer-CbRp6ipl.js";import"./useObserveElement-D4xr9cEc.js";import"./chevron-down-DUKhn8Tm.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-C-za9j48.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
