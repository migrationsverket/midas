import{j as n}from"./iframe-Bbq6OEL7.js";import{$ as j}from"./Form-Dh8jAglM.js";import{G}from"./Grid-DfVlU89R.js";import{G as e}from"./GridItem-79GuJb3q.js";import{T as r}from"./TextField-BhD9UqNH.js";import{S as I}from"./Select-CWKu2Y2m.js";import{B as a}from"./Button-EBDLzq-T.js";import{R as g,a as b}from"./Radio-DEvfBSOM.js";import{C as h}from"./CheckboxGroup-6QXCmBFo.js";import{C as k}from"./Checkbox-B27_PMt_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D7qWQN9D.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CBbASzzp.js";import"./useFocusRing-gQtDjcQ5.js";import"./index-B_cEvVqW.js";import"./index-hhUOaa-1.js";import"./TextFieldBase-B0hFADKw.js";import"./TextField-CXiaSyeX.js";import"./FieldError-CwrPQcgX.js";import"./Text-ChGUBPXW.js";import"./Text-D2yz_-6j.js";import"./ListKeyboardDelegate-D5rxe_B9.js";import"./SelectionManager-BuLF63Kv.js";import"./useEvent-COAg9LHJ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DlUY-YE-.js";import"./useDescription-qAxebIaa.js";import"./useControlledState-D8-wi2Pi.js";import"./Group-B3449e0J.js";import"./Input-CNwAkWQ2.js";import"./Hidden-Dluzveo8.js";import"./Button-DHQrLW6j.js";import"./useLabels-B1yiLdjt.js";import"./useButton-CSapev83.js";import"./useTextField-FYWbZH8n.js";import"./useField-BUq8qGmT.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-CZ4ZFHec.js";import"./Dialog-C7aJuafY.js";import"./RSPContexts-CVLdgsq1.js";import"./OverlayArrow-BQwZJN9I.js";import"./useResizeObserver-BoagA-lT.js";import"./Collection-XJYY2HCU.js";import"./index-TuVbiVR2.js";import"./Separator-DEdnTuor.js";import"./PressResponder-DIOAhe1M.js";import"./useLocalizedStringFormatter-CEFD_zxB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CknAVxTR.js";import"./Dialog-iGVvXZLK.js";import"./useLocalizedStringFormatter-DGjH-lE6.js";import"./x-Cu-tACKX.js";import"./createLucideIcon-3A-Y9C_1.js";import"./Heading-DSHDBcEq.js";import"./info-BJ59cUCK.js";import"./Tag-C0q64Y70.js";import"./ListBox-DidhkNDr.js";import"./DragAndDrop-B9LZ6Bl3.js";import"./inertValue-CqK6t5-4.js";import"./useListState-DKaY1yxB.js";import"./useHighlightSelectionDescription-Bkf8v0io.js";import"./useUpdateEffect-CrjDTlUu.js";import"./useHasTabbableChild-DzLrnHyd.js";import"./check-CqqLAmLT.js";import"./ListBoxSection-CeI5367c.js";import"./Virtualizer-2leepMfs.js";import"./useObserveElement-XdcoxEV5.js";import"./chevron-down-BSHf3F1x.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-BWa6XCxm.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
