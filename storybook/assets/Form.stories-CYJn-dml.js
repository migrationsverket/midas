import{j as e}from"./iframe-DIPCj7z0.js";import{c}from"./Form-Dqy01Zmd.js";import{G as d}from"./Grid-VJJgk7Ga.js";import{G as i}from"./GridItem-BaJZsih7.js";import{a as x,R as u}from"./Radio-Ddsj_vTW.js";import{C as I}from"./CheckboxGroup-CKMDJ6ol.js";import{C as G}from"./Checkbox-2_hv9uib.js";import{T as t}from"./TextField-BMEYa7gU.js";import{S as l}from"./Select-z86-KyTe.js";import{L as p}from"./ListBoxItem-6m3f_b7B.js";import{B as a}from"./Button-Dd5S0QsR.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CGC0Rs2i.js";import"./utils-1Jw3myEp.js";import"./clsx-B-dksMZM.js";import"./index-BMYuBTg8.js";import"./index-CLZ6wIud.js";import"./clsx-Ciqy0D92.js";import"./Group-DmXP4qj7.js";import"./FieldError-XsW3k3ta.js";import"./Text-DfA3YTZF.js";import"./Text-CutZY7em.js";import"./Button-XWLhDASZ.js";import"./Hidden-DixPPjgd.js";import"./useLabel-BuVDKvpb.js";import"./useLabels-a5aS50Gu.js";import"./useButton-B6P9-uWq.js";import"./SelectionIndicator-BBRkAeK5.js";import"./useField-DyYmemdb.js";import"./VisuallyHidden-B7PA1Ynv.js";import"./useControlledState-BD_nezFk.js";import"./Label-BTBJQ3TD.js";import"./Dialog-BRQpSR1m.js";import"./RSPContexts-COR8iAs7.js";import"./OverlayArrow-BZA9xyhr.js";import"./useResizeObserver-6MYBTeZJ.js";import"./Collection-DlaTgdHp.js";import"./index-BtYgIjFq.js";import"./Separator-D67jdWyC.js";import"./SelectionManager-C1peoY7k.js";import"./useEvent-C_MGKzuJ.js";import"./scrollIntoView-BoRCBfrM.js";import"./useDescription-FuIsSDja.js";import"./ListKeyboardDelegate-DJcS2y8P.js";import"./PressResponder-CF389slw.js";import"./useLocalizedStringFormatter-CetMLESo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYTiBTJq.js";import"./getScrollParent-CrP1MxC4.js";import"./ModalOverlay-Cy-0_4Nk.js";import"./x-i9MPadT4.js";import"./createLucideIcon-BXzguI7t.js";import"./useLocalizedStringFormatter-CD9GRZFK.js";import"./Heading-BZjt7HWH.js";import"./info-DREV89Uo.js";import"./Popover-CMPrkTUX.js";import"./check-BCpRvZtK.js";import"./useToggleState-D6UHqGoX.js";import"./TextFieldBase-CaOwHeCj.js";import"./Input-io2_dlmK.js";import"./useTextField-Gi9lLcxJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bz9c2zkG.js";import"./DragAndDrop--Npix--2.js";import"./inertValue-Cw8BFP1J.js";import"./useListState-DvWudEjI.js";import"./TagGroup-CYpFtr8X.js";import"./useHighlightSelectionDescription-D71Ae-jL.js";import"./useUpdateEffect-DvvsaU0c.js";import"./useHasTabbableChild-CfHgjQLh.js";import"./chevron-down-SmLd_KYD.js";import"./Virtualizer-D-i-qM-v.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
