import{j as e}from"./iframe-CxtXgaif.js";import{$ as c}from"./Form-Bl8bNA0o.js";import{G as d}from"./Grid-CTXRDkzf.js";import{G as i}from"./GridItem-CKzP-yNV.js";import{T as t}from"./TextField-C2XBEytM.js";import{S as l}from"./Select-D9BMmr4t.js";import{B as a}from"./Button-CZkEUMhX.js";import{R as x,a as u}from"./Radio-DPUEhEC-.js";import{C as I}from"./CheckboxGroup-Bh7FM-Pj.js";import{C as G}from"./Checkbox-BBX5vnt8.js";import{L as p}from"./ListBoxItem-DysSToX4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BHaXAsAf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BiSVu55b.js";import"./useFocusRing-C31KCpBg.js";import"./index-LOJiVQyp.js";import"./index-McGX5QjV.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bdc1qi4w.js";import"./TextField-BCEG5Xun.js";import"./FieldError-DOlGeurh.js";import"./Text-hsuWdQJy.js";import"./Text-BZPjmLfW.js";import"./RSPContexts-Bpq_c5A9.js";import"./Group-jcW0aViO.js";import"./Input-C8hkcakQ.js";import"./Hidden-BtogIfXa.js";import"./Button-QJx86_Xy.js";import"./useLabels-Cied99SI.js";import"./useButton-Cv4m8R1u.js";import"./useTextField-SxjIWiZn.js";import"./useControlledState-va708PFm.js";import"./useField-fI3yCLSZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B3d6t7ov.js";import"./Dialog-CgqKWoFh.js";import"./OverlayArrow-BKY1QcVg.js";import"./useResizeObserver-mh8bib83.js";import"./Collection-CdnIVEB-.js";import"./index-BSkO2kw7.js";import"./Separator-8R5I02kA.js";import"./SelectionManager-BIHQBZZj.js";import"./useEvent-BLEaEyxT.js";import"./scrollIntoView-DVjFN4rN.js";import"./SelectionIndicator-GniDyRJ4.js";import"./useDescription-BJDx3EcI.js";import"./ListKeyboardDelegate-CRqh4x3V.js";import"./PressResponder-DtdN1iJv.js";import"./useLocalizedStringFormatter-CiYxBryn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B9reZdFx.js";import"./VisuallyHidden-CVvKj0Xg.js";import"./x-CBvx6r4u.js";import"./createLucideIcon-CsCGHR6v.js";import"./useLocalizedStringFormatter-DVPw1CAM.js";import"./Heading-BKwB8iEY.js";import"./info-BPl_s5-n.js";import"./Popover-B2f3b-vi.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DCWRusSF.js";import"./DragAndDrop-CKdrcyCa.js";import"./inertValue-DYmj8olJ.js";import"./useListState-Dehe-Hdb.js";import"./Tag-D6sNjcoG.js";import"./useHighlightSelectionDescription-CFmlBAaH.js";import"./useUpdateEffect-BKp0i-R8.js";import"./useHasTabbableChild-GfZdBAC6.js";import"./chevron-down-DLlA_YJL.js";import"./Button.module-Co5e5YHp.js";import"./check-BFTR8_ix.js";import"./useToggleState-C4kP5DiM.js";import"./Virtualizer-BCjQNDjm.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
