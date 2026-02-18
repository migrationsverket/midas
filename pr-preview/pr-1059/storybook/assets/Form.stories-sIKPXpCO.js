import{j as e}from"./iframe-DvdASj8M.js";import{$ as c}from"./Form-Bzu484ao.js";import{G as d}from"./Grid-DsrKyvPT.js";import{G as i}from"./GridItem-BMryTk9b.js";import{a as x,R as u}from"./Radio-BTccAmzY.js";import{C as I}from"./CheckboxGroup-C8BCpOJ8.js";import{C as G}from"./Checkbox-D_xFGZLE.js";import{T as t}from"./TextField-h3moAYFH.js";import{S as l}from"./Select-pnY-Y4Ty.js";import{L as p}from"./ListBoxItem-COd2iEY0.js";import{B as a}from"./Button-eMwP9vIv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-2bkJAsr0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BjECE3Vg.js";import"./useFocusRing-BaJY9r_4.js";import"./index-CQ_pr3hm.js";import"./index-CcYTU2s7.js";import"./clsx-Ciqy0D92.js";import"./Group-CqWaLBP9.js";import"./FieldError-BHomaXXv.js";import"./Text-HREkQCRS.js";import"./Text-DUdz_YCU.js";import"./Button-Ziwvh2At.js";import"./Hidden-9BXFjXWH.js";import"./useLabels-BdcIIg7x.js";import"./useButton-BEZYe4nN.js";import"./SelectionIndicator-DfYwX-3g.js";import"./useField-9ykgCi-4.js";import"./VisuallyHidden-bdeVna33.js";import"./useControlledState-BTi70xM1.js";import"./Label-D-C-nC0P.js";import"./Dialog-avUb-agd.js";import"./RSPContexts-KaeisNYM.js";import"./OverlayArrow-D4MoERoz.js";import"./useResizeObserver-DQXxfksJ.js";import"./Collection-BPPX9AyK.js";import"./index-3FXGvnxL.js";import"./Separator-Bx1ytvD8.js";import"./SelectionManager-CB0MSLoI.js";import"./useEvent-CdPSZ4wH.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DEfag5zN.js";import"./ListKeyboardDelegate-n2f3KV6i.js";import"./PressResponder-DF1qrNRw.js";import"./useLocalizedStringFormatter-yjXDy8l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-SGXJMc.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CIUdYWTM.js";import"./createLucideIcon-6vu73fXR.js";import"./useLocalizedStringFormatter-9OuGGhbc.js";import"./Heading-l6wWUNtY.js";import"./info-BGkEj6ot.js";import"./Popover-DgHN9szD.js";import"./check-eswNHidx.js";import"./useToggleState-MlQPG4CY.js";import"./TextFieldBase-D2XLVY9x.js";import"./Input-C4KEWQ7H.js";import"./useTextField-D_V2Ueh7.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B0sCKJ7I.js";import"./DragAndDrop-Bn_erqsb.js";import"./inertValue-Zj9TAh3k.js";import"./useListState-CdnL0Ulb.js";import"./TagGroup-CmUEtKKg.js";import"./useHighlightSelectionDescription-Dm-F_WZv.js";import"./useUpdateEffect-OELumoLI.js";import"./useHasTabbableChild-CEUlOb2H.js";import"./chevron-down-DTJy53Qy.js";import"./Virtualizer-CsLy8boP.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
