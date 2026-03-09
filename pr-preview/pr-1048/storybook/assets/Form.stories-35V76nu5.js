import{j as e}from"./iframe-2x8aApk-.js";import{$ as c}from"./Form-DkZdQKDH.js";import{G as d}from"./Grid-BZhbRrVv.js";import{G as i}from"./GridItem-BnfWBYVD.js";import{a as x,R as u}from"./Radio-DP6n-bxD.js";import{C as I}from"./CheckboxGroup-BMNyRad2.js";import{C as G}from"./Checkbox-CJG-9tgm.js";import{T as t}from"./TextField-CxRC2pXn.js";import{S as l}from"./Select-BZ01pfQl.js";import{L as p}from"./ListBoxItem-D5f5gYFx.js";import{B as a}from"./Button-BZEsodJe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVWHc22k.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-zPxSqPZf.js";import"./useFocusRing-D1LuvRFA.js";import"./index-BnRZASBM.js";import"./index-EU_EHTku.js";import"./clsx-Ciqy0D92.js";import"./Group-B7ATakTN.js";import"./FieldError-CN7fikOS.js";import"./Text-GWj5McON.js";import"./Text-CjH8oWQJ.js";import"./Button-BEnUWui9.js";import"./Hidden-T6GEIuO8.js";import"./useLabels-DUzYQyy8.js";import"./useButton-N1FUyUpJ.js";import"./SelectionIndicator-D9jeLipo.js";import"./useField-C-cvn-nF.js";import"./VisuallyHidden-B5MaFoQn.js";import"./useControlledState-CaZtGL-H.js";import"./Label-BBnqHPmU.js";import"./Dialog-DVk-mIpB.js";import"./RSPContexts-DzOvT6u7.js";import"./OverlayArrow-B3z-Jkd2.js";import"./useResizeObserver-By4PDAbx.js";import"./Collection-CG88hFGy.js";import"./index-CXXMt1w9.js";import"./Separator-C3K41wy0.js";import"./SelectionManager-DB2E2h7r.js";import"./useEvent-BZht9i95.js";import"./scrollIntoView-B1ez5sy3.js";import"./useDescription-CX4-cmgs.js";import"./ListKeyboardDelegate-CB5h3evo.js";import"./PressResponder-B00RKaI4.js";import"./useLocalizedStringFormatter-B7eTh4qi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQGXqWQI.js";import"./getScrollParent-C1eon5Rc.js";import"./x-DL-KyPr6.js";import"./createLucideIcon-D_YgEBTV.js";import"./useLocalizedStringFormatter-EKnKibO9.js";import"./Heading-DeTn1u7-.js";import"./info-Bs-Qy5lE.js";import"./Popover-Dh8NW73e.js";import"./check-DqwicyyY.js";import"./useToggleState-U5X8yzO7.js";import"./TextFieldBase-BcClBs2Z.js";import"./Input-1Wv94CZy.js";import"./useTextField-DNgekNgo.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-xF8b6XVb.js";import"./DragAndDrop-DWu4BSLp.js";import"./inertValue-oDhtlPv0.js";import"./useListState-DbwY5l_9.js";import"./TagGroup-Cwa9O31G.js";import"./useHighlightSelectionDescription-DvmZ3fG1.js";import"./useUpdateEffect-BCnLLfFa.js";import"./useHasTabbableChild-CCoaJIUO.js";import"./chevron-down-C2Pz8icJ.js";import"./Virtualizer-DvOpvTnw.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
