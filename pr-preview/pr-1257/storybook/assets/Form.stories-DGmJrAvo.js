import{j as e}from"./iframe-BEEFzEsx.js";import{c}from"./Form-BGu38tuQ.js";import{G as d}from"./Grid-ZizrAYi6.js";import{G as i}from"./GridItem-CUAIhFP9.js";import{a as x,R as u}from"./Radio-CKp52WsK.js";import{C as I}from"./CheckboxGroup-Dlzy2Vcj.js";import{C as G}from"./Checkbox-prY499pT.js";import{T as t}from"./TextField-Bomjtu2Y.js";import{S as l}from"./Select-BazHU74C.js";import{L as p}from"./ListBoxItem-BOR6T3PE.js";import{B as a}from"./Button-BTzHjp2C.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DayYpa6h.js";import"./utils-BVGeTo1z.js";import"./clsx-B-dksMZM.js";import"./index-8CayshPQ.js";import"./index-icYaoe9T.js";import"./clsx-Ciqy0D92.js";import"./Group-4XxyF67-.js";import"./FieldError-HGo-eDX1.js";import"./Text-C3TPO5Ck.js";import"./Text-UbV7blhr.js";import"./Button-DEUQgxtQ.js";import"./Hidden-C5MrPpGY.js";import"./useLabel-BuYW4wvI.js";import"./useLabels-B32s2Ncd.js";import"./useButton-lpD_KbJB.js";import"./SelectionIndicator-CBUlw6yG.js";import"./useField-BfF4G1fX.js";import"./VisuallyHidden-CkEbrnwS.js";import"./useControlledState-DWXRJogA.js";import"./Label-UegRM3NN.js";import"./Dialog-D5TRopuw.js";import"./RSPContexts-BmjfNHwO.js";import"./OverlayArrow-ROnHuORT.js";import"./useResizeObserver-DNYc8s-v.js";import"./Collection-Dr9ShMWk.js";import"./index-DtekuTHO.js";import"./Separator-C07IJJjh.js";import"./SelectionManager-Bxd3V494.js";import"./useEvent-DC72q5eP.js";import"./scrollIntoView-z3uFmj1G.js";import"./useDescription-Cvt0OA1S.js";import"./ListKeyboardDelegate-DP9rBTKu.js";import"./PressResponder-DQFnH3Jx.js";import"./useLocalizedStringFormatter-CLVweFRJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CcmLfJBi.js";import"./getScrollParent-DF6Cs9JC.js";import"./ModalOverlay-CUzYcfU4.js";import"./x-BRbO8G8P.js";import"./createLucideIcon-DyvpJvxd.js";import"./useLocalizedStringFormatter-BOrzEOxe.js";import"./Heading-Bqj6Dsy8.js";import"./info-lgeWUgSs.js";import"./Popover-VJ-uAztt.js";import"./check-g9NruDIn.js";import"./useToggleState-D8TQhNXl.js";import"./TextFieldBase-N3X7KU8v.js";import"./Input-DVbGj_jy.js";import"./useTextField-CSz5zs0C.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-NKdfD_e3.js";import"./DragAndDrop-CNHko37p.js";import"./inertValue-nNkpz4vq.js";import"./useListState-CDth7Sme.js";import"./TagGroup-DTDG17Rh.js";import"./useHighlightSelectionDescription-C8UBnLjj.js";import"./useUpdateEffect-dwDNTmeU.js";import"./useHasTabbableChild-DT7WHojm.js";import"./chevron-down-1ThNkpDX.js";import"./Virtualizer-cjO920CY.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
