import{j as e}from"./iframe-CWlixrW_.js";import{c}from"./Form-DiqHwhIn.js";import{G as d}from"./Grid-DqXB36PO.js";import{G as i}from"./GridItem-DA0GH1Be.js";import{a as x,R as u}from"./Radio-BDNXP6vj.js";import{C as I}from"./CheckboxGroup-D0PkRDM3.js";import{C as G}from"./Checkbox-voyyUWTv.js";import{T as t}from"./TextField-SYv-NXZY.js";import{S as l}from"./Select-BsKv_Vhg.js";import{L as p}from"./ListBoxItem-CPW9QXMm.js";import{B as a}from"./Button-DHj3NF2u.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DDmLMMaV.js";import"./utils-CRaSuqNF.js";import"./clsx-B-dksMZM.js";import"./index-9FhWo1dj.js";import"./index-_BXH5tR9.js";import"./clsx-Ciqy0D92.js";import"./Group-4GKF3_A1.js";import"./FieldError-BKAyDRlQ.js";import"./Text-oz4ou16d.js";import"./Text-CaYrS64L.js";import"./Button-kA2ued5f.js";import"./Hidden-C139jkL0.js";import"./useLabel-DkzOQx4t.js";import"./useLabels-C00UR8Eo.js";import"./useButton-DQDkLrpI.js";import"./SelectionIndicator-DtNX-UQ2.js";import"./useField-Do_CZFfm.js";import"./VisuallyHidden-BQ6ylskT.js";import"./useControlledState-CzRWfzat.js";import"./Label-BjPy4VpL.js";import"./Dialog-DjmcXnG0.js";import"./RSPContexts-D4D98plB.js";import"./OverlayArrow-DKZA2JNv.js";import"./useResizeObserver-C-ftW52s.js";import"./Collection-EO1AcQfg.js";import"./index-CFLy-5bI.js";import"./Separator-ClT2p5T2.js";import"./SelectionManager-Be9sokqv.js";import"./useEvent-Ditv3QO5.js";import"./scrollIntoView-AfG37jOw.js";import"./useDescription-DXpo-reC.js";import"./ListKeyboardDelegate-C63MTa-n.js";import"./PressResponder-DFbfA2hF.js";import"./useLocalizedStringFormatter-ViKOiGge.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzLA8zs-.js";import"./getScrollParent-DWEouMlM.js";import"./ModalOverlay-DsNJ_V0U.js";import"./x-BLTOENDc.js";import"./createLucideIcon-Ay7p0EQv.js";import"./useLocalizedStringFormatter-BtK1NWhh.js";import"./Heading-DvmFnc6f.js";import"./info-CYiYJFKm.js";import"./Popover-BEkEb1Y6.js";import"./check-BRtQddKv.js";import"./useToggleState-DqBscsn4.js";import"./TextFieldBase-99FJxLKv.js";import"./Input-BebCl7JJ.js";import"./useTextField-6alrfwPS.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ClMZsa6_.js";import"./DragAndDrop-Df0h-GqS.js";import"./inertValue-O83hlq-m.js";import"./useListState-CPk8zcrK.js";import"./TagGroup-DcwlDqMk.js";import"./useHighlightSelectionDescription-DgZ8UG3u.js";import"./useUpdateEffect-BpZn1HUJ.js";import"./useHasTabbableChild-CKmExKF4.js";import"./chevron-down-CI3M0L84.js";import"./Virtualizer-BjQqqTwl.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
