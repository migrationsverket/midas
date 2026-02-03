import{j as e}from"./iframe-DLQn-qTm.js";import{$ as c}from"./Form-FnL5AQKn.js";import{G as d}from"./Grid-fOcY6Xz2.js";import{G as i}from"./GridItem-atR2XA64.js";import{a as x,R as u}from"./Radio-BKVd3VM6.js";import{C as I}from"./CheckboxGroup-BG5kwzQJ.js";import{C as G}from"./Checkbox-OEkjjwjQ.js";import{T as t}from"./TextField-_8xiTOfa.js";import{S as l}from"./Select-D3jzSsyB.js";import{L as p}from"./ListBoxItem-BenButTJ.js";import{B as a}from"./Button-ChhODU99.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BseBzJWz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation--qOyb23-.js";import"./useFocusRing-Do74QKH1.js";import"./index-BkZE1OTB.js";import"./index-C8Zl_Tv7.js";import"./clsx-Ciqy0D92.js";import"./Group-C645S7t3.js";import"./FieldError-DhgEtkJ4.js";import"./Text-CuFotw1d.js";import"./Text-CjwNLSIP.js";import"./Button-DYd3H_n-.js";import"./Hidden-CNhpunQg.js";import"./useLabels-DyMy7daN.js";import"./useButton-C2eCHCKv.js";import"./SelectionIndicator-C3jZ9U8m.js";import"./useField-BOmmNrOA.js";import"./VisuallyHidden--4vyVQ1_.js";import"./useControlledState-BZ3KbGsu.js";import"./Label-D_G7ZzJH.js";import"./Dialog-CfhFEXao.js";import"./RSPContexts-DvPIEXFn.js";import"./OverlayArrow-CEvcWVl8.js";import"./useResizeObserver-B2vjaTis.js";import"./Collection-Bw773ohV.js";import"./index-B9SqyPko.js";import"./Separator-BZ1LFOFr.js";import"./SelectionManager-p-9hdccP.js";import"./useEvent-dNq17Ah7.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cc6Zbq_g.js";import"./ListKeyboardDelegate-Czj8i91Y.js";import"./PressResponder-d1IPJyDZ.js";import"./useLocalizedStringFormatter-BJIt3lYB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTbeUDHO.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BhU4g9X0.js";import"./createLucideIcon-Dlil2oPf.js";import"./useLocalizedStringFormatter-CJPUWmDD.js";import"./Heading-DIsi2CKj.js";import"./info-BmYw3wes.js";import"./Popover-CUCE5Hwx.js";import"./check-CDl5l8qX.js";import"./useToggleState-BoongdFE.js";import"./TextFieldBase-Q-Nm6-V0.js";import"./TextField-D1DOdkEo.js";import"./Input-D3_kSc1-.js";import"./useTextField-CFtEHhuy.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dfzl5iPX.js";import"./DragAndDrop-CTv02pIm.js";import"./inertValue-B6Ia-IGD.js";import"./useListState-j0JGZtAr.js";import"./Tag-DrX7zB1h.js";import"./useHighlightSelectionDescription-Bh19s6aI.js";import"./useUpdateEffect-CXe3h0lM.js";import"./useHasTabbableChild-NJ4O6WLK.js";import"./chevron-down-Civ4yiSG.js";import"./Virtualizer-BQ9IME9d.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
