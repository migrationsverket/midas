import{j as e}from"./iframe-Baz7hp-H.js";import{$ as c}from"./Form-CILyxEJu.js";import{G as d}from"./Grid-DzJc6Ohx.js";import{G as i}from"./GridItem-DLHYzt8W.js";import{a as x,R as u}from"./Radio-DAwgb_ee.js";import{C as I}from"./CheckboxGroup-BPHhGi4F.js";import{C as G}from"./Checkbox-BWM687j7.js";import{T as t}from"./TextField-TLO2P1P9.js";import{S as l}from"./Select-DOnI19ga.js";import{L as p}from"./ListBoxItem-B8TFmYoC.js";import{B as a}from"./Button-DqFJrKR_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CjtbLxkM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BCcQtvtJ.js";import"./useFocusRing-CA4lGYE7.js";import"./index-DJvdvGZ9.js";import"./index-EDewD6TU.js";import"./clsx-Ciqy0D92.js";import"./Group-B2B1pydA.js";import"./FieldError-quMvKVD1.js";import"./Text-BOruLmzb.js";import"./Text-Cyj2bmOo.js";import"./Button-Dapo8NrY.js";import"./Hidden-oFIYqFcy.js";import"./useLabels-Cukz6TQK.js";import"./useButton-TjLWHBNo.js";import"./SelectionIndicator-DjsXp9cW.js";import"./useField-DLevtW16.js";import"./VisuallyHidden-B91vWDbG.js";import"./useControlledState-CDtJkyNP.js";import"./Label-D8VkABV1.js";import"./Dialog-J1bblJsv.js";import"./RSPContexts-DBTSYT66.js";import"./OverlayArrow-VFbSqgLj.js";import"./useResizeObserver-BElwTX6l.js";import"./Collection-BQoRm15f.js";import"./index-BbUpshm2.js";import"./Separator-DxMQCwa2.js";import"./SelectionManager-WON6PkRD.js";import"./useEvent-Bfmg4g4k.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cz-ry1Nm.js";import"./ListKeyboardDelegate-DxWxxBDl.js";import"./PressResponder-D8-hgZqM.js";import"./useLocalizedStringFormatter-DqxbRUdN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-f4N_tojI.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-D_880TpH.js";import"./createLucideIcon-GOimKmMN.js";import"./useLocalizedStringFormatter-wC_xJP29.js";import"./Heading-BNFdwwft.js";import"./info-CNx4w6Nj.js";import"./Popover-CpD1iaK8.js";import"./check-CF1Ndu5U.js";import"./useToggleState-Cc47i16o.js";import"./TextFieldBase-_CQNkQLU.js";import"./TextField-DEoyQWTt.js";import"./Input-_z9YhuQq.js";import"./useTextField-BZxttkmI.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DkqspuHm.js";import"./DragAndDrop-Ci6iDqMu.js";import"./inertValue-DmW6ocIz.js";import"./useListState-BzE76NVW.js";import"./Tag-CjKeYzXz.js";import"./useHighlightSelectionDescription-BMfOComk.js";import"./useUpdateEffect-DJ--z6bp.js";import"./useHasTabbableChild-Ct4Kp9KA.js";import"./chevron-down--pXRBNqJ.js";import"./Virtualizer-tMg62NSm.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
