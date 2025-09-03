import{j as n}from"./iframe-CEa4rr9O.js";import{$ as j}from"./Form-C_Bb0dWX.js";import{G}from"./Grid-Bluw_qFX.js";import{G as e}from"./GridItem-DQJTprr4.js";import{T as r}from"./TextField-B8WFCblR.js";import{S as I}from"./Select-fsPNajvc.js";import{B as a}from"./Button-BQiqboZP.js";import{R as g,a as b}from"./Radio-BzS1lf0v.js";import{C as h}from"./CheckboxGroup-Be9aYiRM.js";import{C as k}from"./Checkbox-DrM3MM7K.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-SuK80ERc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-IlMicDGU.js";import"./useFocusRing-DFgolbyR.js";import"./index-BndcDWl-.js";import"./index-C19RPnE6.js";import"./TextFieldBase-0WzINGr-.js";import"./TextField-C5EjiBaB.js";import"./FieldError-DoasGPDk.js";import"./Text-Mkv10tpK.js";import"./Text-9lQkmYVM.js";import"./ListKeyboardDelegate-eLh0CNDu.js";import"./SelectionManager-MmIsqv4f.js";import"./useEvent-DLnspzpz.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DLij2XLB.js";import"./useDescription-CPtYZSrG.js";import"./useControlledState-CMrwFuIZ.js";import"./Group-CYdSQJRd.js";import"./Input-YtO35GWA.js";import"./Hidden-wsurZ38g.js";import"./Button-HyWfp8VZ.js";import"./useLabels-DKRk9inx.js";import"./useButton-BiGh29rd.js";import"./useTextField-BRZ3DMGG.js";import"./useField-rOHnsBTO.js";import"./TextField.module-BrIGiDQC.js";import"./Label-ChYBU_E2.js";import"./Dialog-B-Q3vnqU.js";import"./RSPContexts-8Qc8SyXb.js";import"./OverlayArrow-DtrAucd4.js";import"./useResizeObserver-KcFLPzTG.js";import"./Collection-CVKjyZhI.js";import"./index-xfA9N80Y.js";import"./Separator-BCK55Ybz.js";import"./PressResponder-BajB498y.js";import"./useLocalizedStringFormatter-OtwdKdNe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DJBLxG74.js";import"./Dialog-CCEdi-Yk.js";import"./useLocalizedStringFormatter-Do7c018j.js";import"./x-BwJzVvr1.js";import"./createLucideIcon-Crcp-qau.js";import"./Heading-BF9EFPtS.js";import"./info-ClKDbaRO.js";import"./Tag-B8HWAa33.js";import"./ListBox-DSxr0y4a.js";import"./DragAndDrop-CMwn2SKb.js";import"./inertValue-BMBe891m.js";import"./useListState-DL2YqS6e.js";import"./useHighlightSelectionDescription-Dmcw2fgN.js";import"./useUpdateEffect-Cp_BwiiY.js";import"./useHasTabbableChild-K_CikPy7.js";import"./check-CmOZZHjU.js";import"./ListBoxSection-Do85XT0s.js";import"./Virtualizer-rv4TNNYQ.js";import"./useObserveElement-B9Hhun0w.js";import"./chevron-down-BsJtUbec.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-H60nlSSY.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
