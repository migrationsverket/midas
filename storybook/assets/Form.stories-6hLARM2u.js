import{j as e}from"./iframe-HOh296WD.js";import{c}from"./Form-MZ71z1xz.js";import{G as d}from"./Grid-CHgikzsB.js";import{G as i}from"./GridItem-BAtFL9Q1.js";import{a as x,R as u}from"./Radio-CiCIJKLZ.js";import{C as I}from"./CheckboxGroup-QxH0ehUe.js";import{C as G}from"./Checkbox-CrwpeLzR.js";import{T as t}from"./TextField-CvCuoDLw.js";import{S as l}from"./Select-CigEMvqe.js";import{L as p}from"./ListBoxItem-N0bQhj9D.js";import{B as a}from"./Button-BYcFvZWu.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DYVJSnUE.js";import"./utils-DZ8gsIC2.js";import"./clsx-B-dksMZM.js";import"./index-DjQqBjj0.js";import"./index-1a6t-JIH.js";import"./clsx-Ciqy0D92.js";import"./Group-HvG2Yti2.js";import"./FieldError-D6lU0Pje.js";import"./Text-B6416v9E.js";import"./Text-Bv9eh8EN.js";import"./Button-WtWoZgXq.js";import"./Hidden-Cnam6lCF.js";import"./useLabel-hzJO6Opo.js";import"./useLabels-GBDC-30s.js";import"./useButton-2yjYEibm.js";import"./SelectionIndicator-CoYjaNwA.js";import"./useField-BFtU-cbq.js";import"./VisuallyHidden-C9pq-kak.js";import"./useControlledState-Bg0Nqr_y.js";import"./Label-By7b658h.js";import"./Dialog-BxROUpc5.js";import"./RSPContexts-d4Cds5di.js";import"./OverlayArrow-BfXMfHms.js";import"./useResizeObserver-CVvZeKJF.js";import"./Collection-BZa-_VGk.js";import"./index-BDx-WWmG.js";import"./Separator-CYyZ8P4I.js";import"./SelectionManager-CjAAe4Dw.js";import"./useEvent-CtSfpuPP.js";import"./scrollIntoView-lPtJp7l_.js";import"./useDescription-D6Cyf8Wc.js";import"./ListKeyboardDelegate-BOVwko3u.js";import"./PressResponder-Bx_uvq9y.js";import"./useLocalizedStringFormatter-ohmrZLXW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8NkdEJU.js";import"./getScrollParent-CvmsooRi.js";import"./ModalOverlay-CtckkWP9.js";import"./x-DOfhN6f-.js";import"./createLucideIcon-NVlRk-Ze.js";import"./useLocalizedStringFormatter-B6GQhFME.js";import"./Heading-CFbybLxg.js";import"./info-LLhf2hmC.js";import"./Popover-BtdQxMqg.js";import"./check-CK4UTI50.js";import"./useToggleState-DLrkSDyj.js";import"./TextFieldBase-d1VYf9Is.js";import"./Input-DB_-mc8n.js";import"./useTextField-ChoDBSx4.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dr_6Vecq.js";import"./DragAndDrop-CWpDYC26.js";import"./inertValue-BWcfltMk.js";import"./useListState-N74fsg_I.js";import"./TagGroup-C5Y-NSwA.js";import"./useHighlightSelectionDescription-BGU1K_Aj.js";import"./useUpdateEffect-WGwIJDUw.js";import"./useHasTabbableChild-DMgNMZPn.js";import"./chevron-down-pRkNzNtR.js";import"./Virtualizer-BPwvNJzk.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
