import{j as e}from"./iframe-DagPb3DG.js";import{c}from"./Form-B9MvElX0.js";import{G as d}from"./Grid-C8dMxqil.js";import{G as i}from"./GridItem-B1XUjal5.js";import{a as x,R as u}from"./Radio-mFNT3z5K.js";import{C as I}from"./CheckboxGroup-Dl1u4DU_.js";import{C as G}from"./Checkbox-CvQ68Pev.js";import{T as t}from"./TextField-Dl51Jf5G.js";import{S as l}from"./Select-CWfA-4Mm.js";import{L as p}from"./ListBoxItem-BIjm99_y.js";import{B as a}from"./Button-DeUqMdFb.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DV81koGP.js";import"./utils-DEIIZrT8.js";import"./clsx-B-dksMZM.js";import"./index-X3kKW3OI.js";import"./index-B3KKDvTU.js";import"./clsx-Ciqy0D92.js";import"./Group-Dxyy6nmS.js";import"./FieldError-DRukOLZw.js";import"./Text-DrUxMYO_.js";import"./Text-DqORZFkZ.js";import"./Button-Ckt0c6HW.js";import"./Hidden-BaZDL4oi.js";import"./useLabel-DEs8DT9p.js";import"./useLabels-mT4eX36O.js";import"./useButton-BMw6H5IS.js";import"./SelectionIndicator-DfCL_lJp.js";import"./useField-ZI9WuaQD.js";import"./VisuallyHidden-BiE9yBGm.js";import"./useControlledState-CD6VDT_E.js";import"./Label-DKIpbmdG.js";import"./Dialog-ieL7gfDy.js";import"./RSPContexts-BcGBAh60.js";import"./OverlayArrow-BzpP4f-U.js";import"./useResizeObserver-Bk7CYcnR.js";import"./Collection-DeRVKKKm.js";import"./index-CBRKms-h.js";import"./Separator-BSe9V6Ej.js";import"./SelectionManager-B5aNGbbs.js";import"./useEvent-Cclj6Db-.js";import"./scrollIntoView-C3PoXb1x.js";import"./useDescription-BqZkbbJU.js";import"./ListKeyboardDelegate-Ui_fhppm.js";import"./PressResponder-CCFfMcT7.js";import"./useLocalizedStringFormatter-B_hF3Aaq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjzPeBlF.js";import"./getScrollParent-CH3EMup_.js";import"./Dialog-Dyiitimk.js";import"./x-DDrUqxbS.js";import"./createLucideIcon-KVoeMAdo.js";import"./useLocalizedStringFormatter-C9lWcR8U.js";import"./Heading-g3dzpiDw.js";import"./info-D8dy8uKY.js";import"./Popover-DTk7zRne.js";import"./check-DJH9QBHE.js";import"./useToggleState-CHbJBhc7.js";import"./TextFieldBase-CcZ26LF_.js";import"./Input-CkAMwzA7.js";import"./useTextField-CJn-OTNZ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BLQRJ3U-.js";import"./DragAndDrop-sMSBsNIA.js";import"./inertValue-ygv7W01k.js";import"./useListState-9aSk4pU6.js";import"./TagGroup-UfNouY1_.js";import"./useHighlightSelectionDescription-BFYkKVQE.js";import"./useUpdateEffect-D_owBv_C.js";import"./useHasTabbableChild-rIEuv1By.js";import"./chevron-down-_jgA3Cx7.js";import"./Virtualizer-BurFAije.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
