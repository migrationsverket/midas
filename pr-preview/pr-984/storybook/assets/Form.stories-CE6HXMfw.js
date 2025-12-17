import{j as e}from"./iframe-BvrUArBU.js";import{$ as c}from"./Form-C8yRaKQA.js";import{G as d}from"./Grid-B_B9Erj0.js";import{G as i}from"./GridItem-MN2IUpJH.js";import{T as t}from"./TextField-BjdTM4K-.js";import{S as l}from"./Select-CviHBVZj.js";import{B as a}from"./Button-opugJ3Pw.js";import{R as x,a as u}from"./Radio-BCy2jAnK.js";import{C as I}from"./CheckboxGroup-PE4Uw9Dj.js";import{C as G}from"./Checkbox-yckYMfj_.js";import{L as p}from"./ListBoxItem-KUOHZ4nF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C_lYNAOR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D9uyR9jZ.js";import"./useFocusRing-wAugWugz.js";import"./index-DcrVl_28.js";import"./index-DsaZsgX_.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dn8LmxJH.js";import"./TextField-CVtgm_VP.js";import"./FieldError-BP3wi4fG.js";import"./Text-DY3vNu9D.js";import"./Text-DjPIzR5K.js";import"./RSPContexts-CN08SUZd.js";import"./Group-CM34THtk.js";import"./Input-D9qVF5qL.js";import"./Hidden-ClBR-m0d.js";import"./Button-D7XroJJX.js";import"./useLabels-BzNgkpLP.js";import"./useButton-BGbib_XA.js";import"./useTextField-BHUG7xcD.js";import"./useControlledState-Oju3a5HH.js";import"./useField-CQVxkpdB.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dz1jRugp.js";import"./Dialog-UAiO6WLN.js";import"./OverlayArrow-DldZ6yOg.js";import"./useResizeObserver-BvmQKMtJ.js";import"./Collection-DldinV_q.js";import"./index-B5UowPUY.js";import"./Separator-xTgfNddk.js";import"./SelectionManager-lkH-7A41.js";import"./useEvent-mzwxisiy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CShAyJpD.js";import"./useDescription-BcB0MmhA.js";import"./ListKeyboardDelegate-6NSF_a9x.js";import"./PressResponder-7YhYw-GQ.js";import"./useLocalizedStringFormatter-D-QUy42V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mNwIO0Io.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dgw8VeyT.js";import"./x-DZ0dfeFo.js";import"./createLucideIcon-CC3ddONH.js";import"./useLocalizedStringFormatter-CGIaKyQn.js";import"./Heading-ZB9RXTIw.js";import"./info-Dy2Qn0kI.js";import"./Popover-G-IXtm8s.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BzGnh1su.js";import"./DragAndDrop-D2uBdvEs.js";import"./inertValue-CnZ4iIfn.js";import"./useListState-CelIG9cd.js";import"./Tag-C1bqxsVd.js";import"./useHighlightSelectionDescription-T5F_rc0-.js";import"./useUpdateEffect--uB1QXrO.js";import"./useHasTabbableChild-CgqKO91M.js";import"./chevron-down-fCrTd-3c.js";import"./Button.module-Co5e5YHp.js";import"./check-B44Qf4hx.js";import"./useToggleState-ypOk8l7N.js";import"./Virtualizer-COlrPvEd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
