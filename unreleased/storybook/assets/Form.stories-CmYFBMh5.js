import{j as n}from"./iframe-CN1lNLnK.js";import{$ as j}from"./Form-Dz_HcT6J.js";import{G}from"./Grid-B9GMCSQX.js";import{G as e}from"./GridItem-DpdnZ48G.js";import{T as r}from"./TextField-CgqygL3B.js";import{S as I}from"./Select-udW2IKcT.js";import{B as a}from"./Button-DmEz4Fio.js";import{R as g,a as b}from"./Radio-BBsv4Xd5.js";import{C as h}from"./CheckboxGroup-BvVXC25R.js";import{C as k}from"./Checkbox-J6f_u_e9.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BazV-G3b.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CMHSTDkJ.js";import"./useFocusRing-DI07JeLY.js";import"./index-BG1mF6FV.js";import"./index-B2OQP2yQ.js";import"./TextFieldBase-Bq3UvbMs.js";import"./TextField-UJu27GWc.js";import"./FieldError-DJ-n3b30.js";import"./Text-DikpVJAR.js";import"./Text-Sv8JtGSr.js";import"./ListKeyboardDelegate-bvHKiARA.js";import"./SelectionManager-DAjSUopn.js";import"./useEvent-DjyL0RTO.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BAcoGD1Z.js";import"./useDescription-24-gQHbU.js";import"./useControlledState-1MuJsDQ1.js";import"./Group-DrlUUGW2.js";import"./Input-BysF1dl6.js";import"./Hidden-CKLnDgYx.js";import"./Button-b8enifgw.js";import"./useLabels-CJi08T-K.js";import"./useButton-_zXT-izq.js";import"./useTextField-CiLQ1_JU.js";import"./useField-DPOtfO80.js";import"./TextField.module-DjUItNl5.js";import"./Label-DLlrSfLD.js";import"./Dialog-C2A60vja.js";import"./RSPContexts-DmLwDDS1.js";import"./OverlayArrow-BbAXqyvt.js";import"./useResizeObserver-6iG6YU44.js";import"./Collection-DEvhFhrA.js";import"./index-oQB_I7tg.js";import"./Separator-BX2FRFcY.js";import"./PressResponder-DWOBJxO8.js";import"./useLocalizedStringFormatter-VwTJLTlQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B8FqyM35.js";import"./Dialog-9xEKotvG.js";import"./useLocalizedStringFormatter-DmfDQCcN.js";import"./x-CuiYp5x_.js";import"./createLucideIcon-Dl9pws0N.js";import"./Heading-COZeMz3l.js";import"./info-RXQzGR3z.js";import"./Tag-63sTqNAw.js";import"./ListBox-dclsoOFY.js";import"./DragAndDrop-t5YOi2xx.js";import"./inertValue-CfTmG5wO.js";import"./useListState-BL6GdAck.js";import"./useHighlightSelectionDescription-D3ZDyu8o.js";import"./useUpdateEffect-BuQcZf9F.js";import"./useHasTabbableChild-BQQ-dCcP.js";import"./check-Cl3wf2G1.js";import"./ListBoxSection-DJdlSK1Z.js";import"./Virtualizer-BgQDQxtw.js";import"./useObserveElement-roE9GeUP.js";import"./chevron-down-Bt6vCijp.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BrHJn9r4.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
