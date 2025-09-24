import{j as n}from"./iframe-CcYoyLxx.js";import{$ as j}from"./Form-BUyCcwn4.js";import{G}from"./Grid-NKCUJ_Y-.js";import{G as e}from"./GridItem-43HOUC5b.js";import{T as r}from"./TextField-CEGeIrKz.js";import{S as I}from"./Select-DsKuULYi.js";import{B as a}from"./Button-BXUrLeTK.js";import{R as g,a as b}from"./Radio-CtB32a6w.js";import{C as h}from"./CheckboxGroup-CpYigwak.js";import{C as k}from"./Checkbox-BwuvZ-Nv.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-WR6yldpT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D8ZVNeKv.js";import"./useFocusRing-CPI2SbyA.js";import"./index-C0uXs65s.js";import"./index-CpHb6on0.js";import"./TextFieldBase-IRdxjnRV.js";import"./TextField-DJyDpk06.js";import"./FieldError-Dhgka10R.js";import"./Text-DKylz8nA.js";import"./Text-B4RC_8-Y.js";import"./ListKeyboardDelegate-CLua4GlK.js";import"./SelectionManager-CO7_lkYd.js";import"./useEvent-CAU0qwJ1.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CY1pImQD.js";import"./useDescription-B0NNvk6L.js";import"./useControlledState-BlvvK_IF.js";import"./Group-9vx83dI5.js";import"./Input-2RmtJYkS.js";import"./Hidden-DOd4ujoM.js";import"./Button-fkqxYGh8.js";import"./useLabels-C_XT6TXb.js";import"./useButton-B9jkgDei.js";import"./useTextField-CfJ6lTxy.js";import"./useField-z33bZt7X.js";import"./TextField.module-DjUItNl5.js";import"./Label-gUGwOMVT.js";import"./Dialog-IcbkdWpf.js";import"./RSPContexts-Id2PaOfl.js";import"./OverlayArrow-Bd8r17Nr.js";import"./useResizeObserver-CWbIrOr4.js";import"./Collection-WhI5xScY.js";import"./index-CHvJCWCo.js";import"./Separator-D35uj8Q1.js";import"./PressResponder-U4Exd7gQ.js";import"./useLocalizedStringFormatter-Xe47ETul.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-OR2yddYa.js";import"./Dialog-5HGZVXtX.js";import"./useLocalizedStringFormatter-DDl5k8xe.js";import"./x-BxLywLri.js";import"./createLucideIcon-CpEhFOyb.js";import"./Heading-D61u0jvZ.js";import"./info-BOA3ntJ8.js";import"./Tag-Cq8ll2C8.js";import"./ListBox-BN-RvBMO.js";import"./DragAndDrop-C-6P_C_D.js";import"./inertValue-CxlipqdI.js";import"./useListState-B-mTTNYx.js";import"./useHighlightSelectionDescription-h5F1FNLk.js";import"./useUpdateEffect-B9XcE4Ms.js";import"./useHasTabbableChild-BCJYtjDC.js";import"./check-DEvUXzsS.js";import"./ListBoxSection-DHRsNrUL.js";import"./Virtualizer-ikagh_9a.js";import"./useObserveElement-B5vjlsGG.js";import"./chevron-down-XF09iFA6.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-beMyDKU7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
