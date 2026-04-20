import{j as e}from"./iframe-Cwy6RqRk.js";import{c}from"./Form-S0R74D1Y.js";import{G as d}from"./Grid-Dp2D4_c0.js";import{G as i}from"./GridItem-ClqL_MSY.js";import{a as x,R as u}from"./Radio-DjHIle2U.js";import{C as I}from"./CheckboxGroup-D791esY-.js";import{C as G}from"./Checkbox-CkiaKmg4.js";import{T as t}from"./TextField-X_zfiRAT.js";import{S as l}from"./Select-YSsjRBar.js";import{L as p}from"./ListBoxItem-BSwcbPiq.js";import{B as a}from"./Button-DQvr5Ms4.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D2oXtlEb.js";import"./utils-Dig7OQRF.js";import"./clsx-B-dksMZM.js";import"./index-B9B4w_Jv.js";import"./index-9xU_DKCC.js";import"./clsx-Ciqy0D92.js";import"./Group-CHuLe44F.js";import"./FieldError-Dtb5uhEX.js";import"./Text-DKQA35ph.js";import"./Text-D4_zOmYN.js";import"./Button-iq1xipAk.js";import"./Hidden-DypQ3tfS.js";import"./useLabel-DrD6Az6p.js";import"./useLabels-Bed1240S.js";import"./useButton-CywKmqyz.js";import"./SelectionIndicator-JJXEUeBw.js";import"./useField-Br2LzLU3.js";import"./VisuallyHidden-4XVU0CqX.js";import"./useControlledState-DxWn3JGW.js";import"./Label-q4ibHs2w.js";import"./Dialog-BvgVWsEB.js";import"./RSPContexts-CiaJ3HLw.js";import"./OverlayArrow-4W9oHicC.js";import"./useResizeObserver-IoZ4K-EE.js";import"./Collection-9mv6b24_.js";import"./index-CzhHH6Yp.js";import"./Separator-CFTqLv6h.js";import"./SelectionManager-DvQEqNgq.js";import"./useEvent-BWNeDX6a.js";import"./scrollIntoView-BP2BJLKr.js";import"./useDescription-Bui8B5YG.js";import"./ListKeyboardDelegate-Cwm7Zl_q.js";import"./PressResponder-C3Ojjabh.js";import"./useLocalizedStringFormatter-DrQBb-pQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CI6pm0GJ.js";import"./getScrollParent-CkLJGlzO.js";import"./ModalOverlay-DxvRPc2z.js";import"./x-BFQfEM6r.js";import"./createLucideIcon-D-5pXknp.js";import"./useLocalizedStringFormatter-BIN4Z2mf.js";import"./Heading-Ck5F1mkL.js";import"./info-D3zEwNsr.js";import"./Popover-DRt4zzxY.js";import"./check-_Tj0J857.js";import"./useToggleState-BZ2LxWRA.js";import"./TextFieldBase-CiE3hSQw.js";import"./Input-Dj5AMQSP.js";import"./useTextField-oFn6QPRJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DaGS0ANO.js";import"./DragAndDrop-DIoaA2Z8.js";import"./inertValue-A8_RP3c4.js";import"./useListState-CZ4cnH8Z.js";import"./TagGroup-D9G0X4kN.js";import"./useHighlightSelectionDescription-CPEL77-h.js";import"./useUpdateEffect-BYcZslVh.js";import"./useHasTabbableChild-mrUEUesn.js";import"./chevron-down-BWWh4fMt.js";import"./Virtualizer-C5bxHsQE.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
