import{j as e}from"./iframe-BiQ8HasD.js";import{c}from"./Form-D2H-KRh-.js";import{G as d}from"./Grid-DkLNG9Rd.js";import{G as i}from"./GridItem-FEcsXu-n.js";import{a as x,R as u}from"./Radio-dB8MDjGJ.js";import{C as I}from"./CheckboxGroup-smn6TV-a.js";import{C as G}from"./Checkbox-CXraPMD-.js";import{T as t}from"./TextField-BZP90-z-.js";import{S as l}from"./Select-Du29Ah9q.js";import{L as p}from"./ListBoxItem-BgVxkUkj.js";import{B as a}from"./Button-CBosCwI1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Dh9TFhU0.js";import"./utils-HJUYK1j_.js";import"./clsx-B-dksMZM.js";import"./index-CxCqsVJY.js";import"./index-B9ZJX168.js";import"./clsx-Ciqy0D92.js";import"./Group-BYPqrYrz.js";import"./FieldError-jePN0XGs.js";import"./Text-DGK2Zvf0.js";import"./Text-BdITZZNK.js";import"./Button-DOF2Ijgw.js";import"./Hidden-DEdvWcqT.js";import"./useLabel-8IgHcDVM.js";import"./useLabels-H9owUaj8.js";import"./useButton-BbHDi8ZV.js";import"./SelectionIndicator-Cvp4OCBG.js";import"./useField-CBOuPJem.js";import"./VisuallyHidden-iHVSgYDu.js";import"./useControlledState-DOzruH4H.js";import"./Label-DmUqhf98.js";import"./Dialog-B0QD4OmU.js";import"./RSPContexts-CmmbFvVN.js";import"./OverlayArrow-BqRYBi2P.js";import"./useResizeObserver-TsvqsiXt.js";import"./Collection-CNlGcjka.js";import"./index-Cjx5nzwT.js";import"./Separator-CWOrQW37.js";import"./SelectionManager-DsyP4aRP.js";import"./useEvent-Ym0ZfLi1.js";import"./scrollIntoView-rDKecejh.js";import"./useDescription-Crs7vcLi.js";import"./ListKeyboardDelegate-8COEurd_.js";import"./PressResponder-zcpw2awt.js";import"./useLocalizedStringFormatter-CembVOjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BHHwGKEZ.js";import"./getScrollParent-BcnQWZnN.js";import"./ModalOverlay-BDN8lnTi.js";import"./x-Cmfu2hA0.js";import"./createLucideIcon-Dn_efDgc.js";import"./useLocalizedStringFormatter-CgDdVzRk.js";import"./Heading-BezJITJT.js";import"./info-C6wv22-b.js";import"./Popover-RUzEP-l1.js";import"./check-CuQvanpN.js";import"./useToggleState-CiOcr2kQ.js";import"./TextFieldBase-DcnhVS38.js";import"./Input-DaFhkqYK.js";import"./useTextField-B71p3qEk.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DAKPZPXh.js";import"./DragAndDrop-Ds437lOy.js";import"./inertValue-DJUvZpxT.js";import"./useListState-suR-Umer.js";import"./TagGroup-TLzdj-Qr.js";import"./useHighlightSelectionDescription-21ISR8pT.js";import"./useUpdateEffect-DmB7HlV7.js";import"./useHasTabbableChild-Dhcua5N5.js";import"./chevron-down-BWjqxuDw.js";import"./Virtualizer-C50T9CGp.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
