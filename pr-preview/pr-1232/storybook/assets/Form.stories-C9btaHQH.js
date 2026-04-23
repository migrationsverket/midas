import{j as e}from"./iframe-CiZlFozv.js";import{c}from"./Form-CPfOE8lK.js";import{G as d}from"./Grid-CARzR2II.js";import{G as i}from"./GridItem-mDdDKNSs.js";import{a as x,R as u}from"./Radio-Dd3XYAmU.js";import{C as I}from"./CheckboxGroup-Cdk_uBNh.js";import{C as G}from"./Checkbox-C8ZM3DgC.js";import{T as t}from"./TextField-w28grQeP.js";import{S as l}from"./Select-6w6FUOW-.js";import{L as p}from"./ListBoxItem-D4ksSU3S.js";import{B as a}from"./Button-BS9Q-Own.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C8iINmO1.js";import"./utils-CtoKVfJq.js";import"./clsx-B-dksMZM.js";import"./index-C8NJLHuH.js";import"./index-B_UHrRhL.js";import"./clsx-Ciqy0D92.js";import"./Group-DRiAJmX2.js";import"./FieldError-BFjjyPg1.js";import"./Text-Dp6H8GRU.js";import"./Text-CXoRcQkQ.js";import"./Button-CxmVBxVQ.js";import"./Hidden-CBUgc4Bq.js";import"./useLabel-BKmML2fi.js";import"./useLabels-I5-LcgNP.js";import"./useButton-C0UTJWwd.js";import"./SelectionIndicator-OL0J49H_.js";import"./useField-Bx-SoAUQ.js";import"./VisuallyHidden-D6ktoCNF.js";import"./useControlledState-k5LcuuXZ.js";import"./Label-D2By97-8.js";import"./Dialog-4xeHXqVs.js";import"./RSPContexts-fJFJPzCo.js";import"./OverlayArrow-U4qyFhu7.js";import"./useResizeObserver-DgIV1Bdx.js";import"./Collection-Dmi7A3go.js";import"./index-CGOcwJAX.js";import"./Separator-As17z0QB.js";import"./SelectionManager-4hK9Esex.js";import"./useEvent-CUD5UUml.js";import"./scrollIntoView-De6oNUSa.js";import"./useDescription-6-pChhm_.js";import"./ListKeyboardDelegate-B1l65HEm.js";import"./PressResponder-B7ETLP0V.js";import"./useLocalizedStringFormatter-BdUUKMic.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BObUKTOo.js";import"./getScrollParent-BTcAThv_.js";import"./ModalOverlay-B4ShAOHT.js";import"./x-DBo1ex8S.js";import"./createLucideIcon-DFSC9aW4.js";import"./useLocalizedStringFormatter-BpsAI3rB.js";import"./Heading-D2XIdd63.js";import"./info-BpnxZVgw.js";import"./Popover-BG0a_Iou.js";import"./check-DdJfQb7r.js";import"./useToggleState-Bt6-F4tR.js";import"./TextFieldBase-BttC7EcL.js";import"./Input-B76nlUBd.js";import"./useTextField-BMXOK1F5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Csx5n2t_.js";import"./DragAndDrop-DvOnAK_Q.js";import"./inertValue-DyMxrIjs.js";import"./useListState-C5lHnRE-.js";import"./TagGroup-DCHXgZYa.js";import"./useHighlightSelectionDescription-Ba37kdnP.js";import"./useUpdateEffect-CY3AhfRb.js";import"./useHasTabbableChild-C7E29BDg.js";import"./chevron-down-B3KxJX8_.js";import"./Virtualizer-C3wkcK53.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
