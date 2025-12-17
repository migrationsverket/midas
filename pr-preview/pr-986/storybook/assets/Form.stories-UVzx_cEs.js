import{j as e}from"./iframe-BIgVwRzi.js";import{$ as c}from"./Form-J4r0bCDd.js";import{G as d}from"./Grid-CqyAXK65.js";import{G as i}from"./GridItem-Dv8Ojrkh.js";import{T as t}from"./TextField-BHj97Kne.js";import{S as l}from"./Select-CI1fBQe-.js";import{B as a}from"./Button-cszjA275.js";import{R as x,a as u}from"./Radio-DP_3gnvI.js";import{C as I}from"./CheckboxGroup-Bm-VzvoM.js";import{C as G}from"./Checkbox-DeV4Q0kq.js";import{L as p}from"./ListBoxItem-RnwkhQEi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-zlmf3cg_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dq_KdnpS.js";import"./useFocusRing-BbQ4IaHs.js";import"./index-BR_IV3ka.js";import"./index-D26pB2kE.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Baqd0HpC.js";import"./TextField-D7AZc6f5.js";import"./FieldError-CYKhEZDB.js";import"./Text-igUMio9r.js";import"./Text-Bgt8anl_.js";import"./RSPContexts-Derb496R.js";import"./Group-TP6usC3i.js";import"./Input-aXDPvRHZ.js";import"./Hidden-UQDm3VtM.js";import"./Button-BbaSeMTk.js";import"./useLabels-Dvj8ZU2I.js";import"./useButton-I1p8fH58.js";import"./useTextField-mTqjRdx0.js";import"./useControlledState-CBUPCzMg.js";import"./useField-CFzmANgi.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DaaCuiXS.js";import"./Dialog-BQp6Xln0.js";import"./OverlayArrow-DUdlZ50r.js";import"./useResizeObserver-CLZNJQNI.js";import"./Collection-DWh6W0bq.js";import"./index-jt0eOPBg.js";import"./Separator-BEVZtFra.js";import"./SelectionManager-1kG5QFWW.js";import"./useEvent-Buf3aweS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BeW-ijUI.js";import"./useDescription-6EDhH15h.js";import"./ListKeyboardDelegate-B1feCyCI.js";import"./PressResponder-jzmT9_sa.js";import"./useLocalizedStringFormatter-CHL49Mx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4GAzZkr.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BLTljg8L.js";import"./x-DPcPp3JM.js";import"./createLucideIcon-38Nuhk7x.js";import"./useLocalizedStringFormatter-DSORq7VR.js";import"./Heading-BR88Fj1o.js";import"./info-CGA3vxGD.js";import"./Popover-Dh-zN2eA.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D5a1ufqv.js";import"./DragAndDrop-DLzQnIAW.js";import"./inertValue-taflW2em.js";import"./useListState-BiVgZW9H.js";import"./Tag-BI_5rzSN.js";import"./useHighlightSelectionDescription-CrzXfgCL.js";import"./useUpdateEffect-B7SWkdlB.js";import"./useHasTabbableChild-COQJb8pf.js";import"./chevron-down-Bq6REKS7.js";import"./Button.module-Co5e5YHp.js";import"./check-D3icI7AC.js";import"./useToggleState-DjZE38QG.js";import"./Virtualizer-BSiseBJZ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
