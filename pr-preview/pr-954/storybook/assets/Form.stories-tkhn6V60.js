import{j as e}from"./iframe-BANheT94.js";import{$ as c}from"./Form-D2W3dMdJ.js";import{G as d}from"./Grid-gw6zT1kE.js";import{G as i}from"./GridItem-BW5TKjSc.js";import{T as t}from"./TextField-Zr2H-ouv.js";import{S as l}from"./Select-BCmWAnIa.js";import{B as a}from"./Button-CbAf7-Y_.js";import{R as x,a as u}from"./Radio-DucjPXyg.js";import{C as I}from"./CheckboxGroup-DTfGEEKC.js";import{C as G}from"./Checkbox-Q3jehrPd.js";import{L as p}from"./ListBoxItem-BYvb6K2C.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CpVmviXo.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-EWuqX3DI.js";import"./useFocusRing-D91tXV6i.js";import"./index-DKSwrre2.js";import"./index-Bc2dcr2L.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CHPlhosA.js";import"./TextField-Cqd0Kh-Z.js";import"./FieldError-nlVefKur.js";import"./Text-j3VcGK0a.js";import"./Text-l44IKoDc.js";import"./RSPContexts-B5A9Yjbf.js";import"./Group-utoLrWlE.js";import"./Input-DT5Sg2pY.js";import"./Hidden-Dhs2zngV.js";import"./Button-AmvPyEDB.js";import"./useLabels-xUlPRGkJ.js";import"./useButton-Wxvat91D.js";import"./useTextField-Czr5yL6z.js";import"./useControlledState-8EHg840I.js";import"./useField-MGt8O-dm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BotGltCy.js";import"./Dialog-CWG7xjPJ.js";import"./OverlayArrow-C0DOesSE.js";import"./useResizeObserver-Do8ti1Jr.js";import"./Collection-BGGM3oD5.js";import"./index-Bte3b90o.js";import"./Separator-Be1a9jlQ.js";import"./SelectionManager-BOZlKdLa.js";import"./useEvent-DGxCvVlK.js";import"./scrollIntoView-DTKiP_3a.js";import"./SelectionIndicator-BNud7oaD.js";import"./useDescription-BuDIxU8F.js";import"./ListKeyboardDelegate-BW1OhyQR.js";import"./PressResponder-C98nU9CN.js";import"./useLocalizedStringFormatter-CRsSQwk5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BFtjZ2g0.js";import"./VisuallyHidden-obCayb53.js";import"./x-B9bBhtd7.js";import"./createLucideIcon-lHZWu_Mk.js";import"./useLocalizedStringFormatter-BO6RGHcC.js";import"./Heading-B5-HR4K9.js";import"./info-C0Kt6ETu.js";import"./Popover-BDCQfCiI.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C6HIC7py.js";import"./DragAndDrop-RYrPHHGI.js";import"./inertValue-BaMdkSpJ.js";import"./useListState-BToS90Oh.js";import"./Tag-l4DN4ZOa.js";import"./useHighlightSelectionDescription-_Fes4Fzm.js";import"./useUpdateEffect-Cz_WQkOg.js";import"./useHasTabbableChild-D5ti-a8n.js";import"./chevron-down-CXuRItZk.js";import"./Button.module-CtQ1deO8.js";import"./check-DEGEg2SY.js";import"./useToggleState-DX0JB7Bo.js";import"./Virtualizer-BJ_S9hRb.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
